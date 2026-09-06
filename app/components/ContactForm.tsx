"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ContactCopy } from "@/app/data/types";
import { wa, EMAIL } from "@/app/data/shared";
import { track } from "@/app/lib/analytics";

type Form = ContactCopy["form"];
type FieldKey = "name" | "reply" | "projectType" | "budget" | "timeline" | "summary";
type Status = "idle" | "opening" | "opened" | "blocked";

/** Deliberately permissive: one "@", something before it, and a dotted domain
 *  after. Anything stricter starts rejecting real addresses, and this field's
 *  only job is to catch a value we could never reply to — "you@company" with
 *  the TLD missing being by far the most common one. */
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/;

/** Phone numbers arrive with spaces, brackets, dashes and a leading "+", and
 *  visitors typing on an Arabic keyboard produce Arabic-Indic digits. Count the
 *  digits in any script and require seven, the shortest subscriber number in
 *  real use. */
const DIGIT_RE = /[0-9\u0660-\u0669\u06F0-\u06F9]/g;

/** True when we could actually reply to this value. */
function isUsableReply(value: string): boolean {
  const v = value.trim();
  if (!v) return false;
  if (EMAIL_RE.test(v)) return true;
  return (v.match(DIGIT_RE)?.length ?? 0) >= 7;
}

const EMPTY: Record<FieldKey, string> = {
  name: "",
  reply: "",
  projectType: "",
  budget: "",
  timeline: "",
  summary: "",
};

/** A qualification form, not a generic contact box.
 *
 *  There is no backend on this site by design, so the form drafts a message and
 *  hands it to WhatsApp or the visitor's mail client. That handoff used to be
 *  silent: no validation, no confirmation, and nothing at all if the browser
 *  blocked the pop-up. It now validates, announces its state to assistive
 *  technology, guards against double submits, fires the conversion event
 *  *before* the handoff, and always offers a visible fallback link.
 */
export function ContactForm({ form, lang }: { form: Form; lang: string }) {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [fallbackHref, setFallbackHref] = useState("");
  const errorRef = useRef<HTMLDivElement>(null);
  /** Set when a submit is rejected, cleared once focus has actually moved. */
  const wantsErrorFocus = useRef(false);
  /** When the last accepted submit happened, for the double-tap gate below. */
  const lastSubmit = useRef(0);
  const uid = useId();

  // The error summary does not exist in the DOM at the moment a submit is
  // rejected — it renders in the same commit. Focusing from a
  // `requestAnimationFrame` inside the handler therefore raced React, and lost
  // often enough that Arabic and German never moved focus at all while English
  // happened to win. An effect runs after the commit, so the node is always
  // there.
  useEffect(() => {
    if (!wantsErrorFocus.current || !errorRef.current) return;
    wantsErrorFocus.current = false;
    errorRef.current.focus();
  });

  const id = (key: string) => `${uid}-${key}`;

  /** The same rule the submit check uses, so a message clears exactly when the
   *  field would now pass — not merely when it stops being empty, which used to
   *  hide the "that is not an address we can reply to" message mid-typo. */
  function passes(key: FieldKey, value: string): boolean {
    if (key === "reply") return isUsableReply(value);
    if (key === "summary") return value.trim().length >= 10;
    return value.trim().length > 0;
  }

  const set = (key: FieldKey) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((prev) => (prev[key] && passes(key, value) ? { ...prev, [key]: undefined } : prev));
  };

  function validate(): Partial<Record<FieldKey, string>> {
    const next: Partial<Record<FieldKey, string>> = {};
    if (!values.name.trim()) next.name = form.errors.name;
    // Two distinct messages: one for a field left blank, one for a value that
    // is filled in but unreachable. A single message for both told a visitor
    // who had typed something that they had typed nothing.
    if (!values.reply.trim()) next.reply = form.errors.reply;
    else if (!isUsableReply(values.reply)) next.reply = form.errors.replyInvalid;
    if (values.summary.trim().length < 10) next.summary = form.errors.summary;
    return next;
  }

  function draft(): string {
    const l = form.draftLabels;
    const lines: string[] = [form.draftIntro, ""];
    lines.push(`${l.name}: ${values.name.trim()}`);
    lines.push(`${l.reply}: ${values.reply.trim()}`);
    if (values.projectType) lines.push(`${l.projectType}: ${values.projectType}`);
    if (values.budget) lines.push(`${l.budget}: ${values.budget}`);
    if (values.timeline) lines.push(`${l.timeline}: ${values.timeline}`);
    lines.push("", `${l.summary}: ${values.summary.trim()}`);
    return lines.join("\n");
  }

  function guard(): boolean {
    if (status === "opening") return false;

    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus("idle");
      // Announce the problem to a screen-reader user; the effect above does the
      // focusing once the summary has rendered.
      wantsErrorFocus.current = true;
      return false;
    }

    // The status check above cannot catch a real double-tap: the handoff is
    // synchronous, so "opening" is replaced by "opened" inside the same event
    // and is never observed by a second click. A short time gate does catch it,
    // while still letting someone deliberately re-open the handoff a moment
    // later if the first window never appeared.
    const now = Date.now();
    if (now - lastSubmit.current < 1500) return false;
    lastSubmit.current = now;
    return true;
  }

  function analytics(channel: "whatsapp" | "email") {
    track("contact_form_submit", {
      channel,
      lang,
      project_type: values.projectType || "unspecified",
      budget: values.budget || "unspecified",
      timeline: values.timeline || "unspecified",
    });
  }

  function onWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!guard()) return;
    setStatus("opening");
    analytics("whatsapp");

    const url = wa(draft());
    setFallbackHref(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setStatus(opened ? "opened" : "blocked");
  }

  function onEmail() {
    if (!guard()) return;
    setStatus("opening");
    analytics("email");

    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
      form.emailSubject
    )}&body=${encodeURIComponent(draft())}`;
    setFallbackHref(url);
    window.location.href = url;
    setStatus("opened");
  }

  const errorList = (Object.keys(errors) as FieldKey[]).filter((k) => errors[k]);
  const busy = status === "opening";

  const field = "flex flex-col gap-1.5";
  const labelCls = "form-label";
  const controlCls = "form-control";

  return (
    <form className="contact-form flex flex-col gap-4" onSubmit={onWhatsApp} noValidate>
      {/* Error summary. `tabIndex={-1}` makes it focusable so submitting an
          invalid form moves the user straight to the explanation. */}
      {errorList.length > 0 && (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="form-errors"
          aria-labelledby={id("err-heading")}
        >
          <strong id={id("err-heading")}>{form.errors.heading}</strong>
          <ul>
            {errorList.map((key) => (
              <li key={key}>
                <a href={`#${id(key)}`}>{errors[key]}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <div className={field}>
          <label htmlFor={id("name")} className={labelCls}>
            {form.name} <span className="form-required">{form.requiredMark}</span>
          </label>
          <input
            id={id("name")}
            name="name"
            className={controlCls}
            type="text"
            autoComplete="name"
            placeholder={form.namePlaceholder}
            value={values.name}
            onChange={set("name")}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? id("name-err") : undefined}
          />
          {errors.name && (
            <span id={id("name-err")} className="form-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className={field}>
          <label htmlFor={id("reply")} className={labelCls}>
            {form.reply} <span className="form-required">{form.requiredMark}</span>
          </label>
          <input
            id={id("reply")}
            name="reply"
            className={controlCls}
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder={form.replyPlaceholder}
            value={values.reply}
            onChange={set("reply")}
            aria-invalid={errors.reply ? true : undefined}
            aria-describedby={`${errors.reply ? `${id("reply-err")} ` : ""}${id("reply-help")}`}
          />
          {errors.reply && (
            <span id={id("reply-err")} className="form-error">
              {errors.reply}
            </span>
          )}
          <span id={id("reply-help")} className="form-help">
            {form.replyHelp}
          </span>
        </div>

        <div className={field}>
          <label htmlFor={id("type")} className={labelCls}>
            {form.projectType} <span className="form-optional">{form.optionalMark}</span>
          </label>
          <select
            id={id("type")}
            name="projectType"
            className={controlCls}
            value={values.projectType}
            onChange={set("projectType")}
          >
            <option value="">{form.projectTypePlaceholder}</option>
            {form.projectTypeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className={field}>
          <label htmlFor={id("budget")} className={labelCls}>
            {form.budget} <span className="form-optional">{form.optionalMark}</span>
          </label>
          <select
            id={id("budget")}
            name="budget"
            className={controlCls}
            value={values.budget}
            onChange={set("budget")}
            aria-describedby={id("budget-help")}
          >
            <option value="">{form.budgetPlaceholder}</option>
            {form.budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <span id={id("budget-help")} className="form-help">
            {form.budgetHelp}
          </span>
        </div>

        <div className={field}>
          <label htmlFor={id("timeline")} className={labelCls}>
            {form.timeline} <span className="form-optional">{form.optionalMark}</span>
          </label>
          <select
            id={id("timeline")}
            name="timeline"
            className={controlCls}
            value={values.timeline}
            onChange={set("timeline")}
          >
            <option value="">{form.timelinePlaceholder}</option>
            {form.timelineOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className={`${field} sm:col-span-2`}>
          <label htmlFor={id("summary")} className={labelCls}>
            {form.summary} <span className="form-required">{form.requiredMark}</span>
          </label>
          <textarea
            id={id("summary")}
            name="summary"
            className={`${controlCls} min-h-[120px] resize-y`}
            placeholder={form.summaryPlaceholder}
            value={values.summary}
            onChange={set("summary")}
            aria-invalid={errors.summary ? true : undefined}
            aria-describedby={errors.summary ? id("summary-err") : undefined}
          />
          {errors.summary && (
            <span id={id("summary-err")} className="form-error">
              {errors.summary}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary" disabled={busy}>
          {busy ? form.sending : form.submitWhatsapp}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onEmail} disabled={busy}>
          {form.submitEmail}
        </button>
      </div>

      {/* Announced without stealing focus. Covers the pop-up-blocked case that
          previously left the visitor staring at a form that appeared to do
          nothing at all. */}
      <p className="form-status" role="status" aria-live="polite">
        {status === "opened" && form.opened}
        {status === "blocked" && (
          <>
            {form.blocked}{" "}
            <a href={fallbackHref} target="_blank" rel="noreferrer" className="form-status__link">
              {form.blockedLink}
            </a>
          </>
        )}
      </p>

      <p className="text-meta text-muted">{form.note}</p>
    </form>
  );
}
