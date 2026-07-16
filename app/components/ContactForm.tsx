"use client";

import { useState } from "react";
import type { ContactCopy } from "@/app/data/types";
import { wa, EMAIL } from "@/app/data/shared";

type Form = ContactCopy["form"];

const EMPTY = { name: "", company: "", projectType: "", timeline: "", summary: "" };

export function ContactForm({ form }: { form: Form }) {
  const [values, setValues] = useState(EMPTY);

  const set = (key: keyof typeof EMPTY) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  function draft(): string {
    const l = form.draftLabels;
    const lines = [
      form.draftIntro,
      "",
      values.name.trim() && `${l.name}: ${values.name.trim()}`,
      values.company.trim() && `${l.company}: ${values.company.trim()}`,
      values.projectType.trim() && `${l.projectType}: ${values.projectType.trim()}`,
      values.timeline.trim() && `${l.timeline}: ${values.timeline.trim()}`,
      values.summary.trim() && `${l.summary}: ${values.summary.trim()}`,
    ].filter(Boolean) as string[];
    return lines.join("\n");
  }

  function onWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    window.open(wa(draft()), "_blank", "noopener");
  }

  function onEmail() {
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(form.emailSubject)}&body=${encodeURIComponent(draft())}`;
    window.location.href = url;
  }

  const field = "flex flex-col gap-1.5";
  const label = "text-[0.82rem] text-muted";
  const input =
    "rounded-[12px] border border-line-strong bg-white/[0.02] px-3.5 py-2.5 text-[0.94rem] text-ink placeholder:text-muted/70 focus:border-gold focus:outline-none";

  return (
    <form className="flex flex-col gap-4" onSubmit={onWhatsApp}>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className={field}>
          <label htmlFor="brief-name" className={label}>
            {form.name}
          </label>
          <input
            id="brief-name"
            className={input}
            type="text"
            placeholder={form.namePlaceholder}
            required
            value={values.name}
            onChange={set("name")}
          />
        </div>
        <div className={field}>
          <label htmlFor="brief-company" className={label}>
            {form.company}
          </label>
          <input
            id="brief-company"
            className={input}
            type="text"
            placeholder={form.companyPlaceholder}
            value={values.company}
            onChange={set("company")}
          />
        </div>
        <div className={field}>
          <label htmlFor="brief-type" className={label}>
            {form.projectType}
          </label>
          <select id="brief-type" className={input} value={values.projectType} onChange={set("projectType")}>
            <option value="">{form.projectTypePlaceholder}</option>
            {form.projectTypeOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className={field}>
          <label htmlFor="brief-timeline" className={label}>
            {form.timeline}
          </label>
          <select id="brief-timeline" className={input} value={values.timeline} onChange={set("timeline")}>
            <option value="">{form.timelinePlaceholder}</option>
            {form.timelineOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className={`${field} sm:col-span-2`}>
          <label htmlFor="brief-summary" className={label}>
            {form.summary}
          </label>
          <textarea
            id="brief-summary"
            className={`${input} min-h-[120px] resize-y`}
            placeholder={form.summaryPlaceholder}
            required
            value={values.summary}
            onChange={set("summary")}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="btn btn-primary">
          {form.submitWhatsapp}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onEmail}>
          {form.submitEmail}
        </button>
      </div>
      <p className="text-[0.82rem] text-muted">{form.note}</p>
    </form>
  );
}
