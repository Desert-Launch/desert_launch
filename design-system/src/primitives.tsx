/**
 * Primitives: thin React wrappers over the component classes the site already
 * ships in `app/globals.css` (`.btn`, `.card`, `.chip`, `.panel`, `.form-*`…).
 *
 * They add no styling of their own. Each one renders exactly the markup the
 * site's own sections render for that class, so a design built from them
 * maps one-to-one onto the site's CSS. Anything that needs a class the site
 * does not have is a design-system change, not a wrapper change.
 *
 * @category Primitives
 */
import type { ReactNode } from "react";

import { Icon } from "../../app/data/icons";
import type { IconKey } from "../../app/data/types";

// --- Buttons -------------------------------------------------------------

export interface ButtonProps {
  /** `primary` is the gold pill (one per view, the action you want taken);
   *  `secondary` is the outlined pill for the alternative. */
  variant?: "primary" | "secondary";
  /** Renders an `<a>` when set, a `<button>` otherwise. */
  href?: string;
  /** Opens in a new tab with `rel="noreferrer"`. WhatsApp and store links. */
  external?: boolean;
  /** Only used when there is no `href`. */
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

/** The site's call-to-action pill. Gold for the primary action, outlined for
 *  the secondary one; both are 44px tall and wrap to full width on phones
 *  when placed in a `flex-col sm:flex-row` row. */
export function Button({
  variant = "primary",
  href,
  external,
  type = "button",
  disabled,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`.trim();
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type} className={cls} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

// --- Small labels --------------------------------------------------------

export interface ChipProps {
  /** Renders an `<a>` when set — the site uses chips as related-page links. */
  href?: string;
  className?: string;
  children: ReactNode;
}

/** A small rounded tag: technology names, feature flows, related-page links.
 *  Wrap several in `flex flex-wrap gap-2`. */
export function Chip({ href, className = "", children }: ChipProps) {
  const cls = `chip ${className}`.trim();
  return href ? (
    <a href={href} className={cls}>
      {children}
    </a>
  ) : (
    <span className={cls}>{children}</span>
  );
}

export interface KickerProps {
  className?: string;
  children: ReactNode;
}

/** The small gold uppercase label with a leading dash that sits above every
 *  section title and panel heading. */
export function Kicker({ className = "", children }: KickerProps) {
  return <span className={`kicker ${className}`.trim()}>{children}</span>;
}

export interface IconBoxProps {
  /** One of the design system's own line icons. */
  icon: IconKey;
  className?: string;
}

/** The 2.6rem gold-tinted square that carries an icon at the top of a card. */
export function IconBox({ icon, className = "" }: IconBoxProps) {
  return (
    <span className={`icon-box ${className}`.trim()}>
      <Icon name={icon} />
    </span>
  );
}

export interface StepNumberProps {
  /** The step's position, shown as a number in a gold circle. */
  n: number;
  className?: string;
}

/** The numbered gold circle that opens a process step or a how-to card. */
export function StepNumber({ n, className = "" }: StepNumberProps) {
  return (
    <span className={`step-number ${className}`.trim()} aria-hidden="true">
      {n}
    </span>
  );
}

// --- Surfaces ------------------------------------------------------------

export interface CardProps {
  /** Card heading. Becomes the whole-card link when `href` is set. */
  title: string;
  /** Icon shown in an `IconBox` above the title. */
  icon?: IconKey;
  /** Makes the whole card a link (hover lift is reserved for link cards —
   *  a static card that rises promises a click that never happens). */
  href?: string;
  /** Short caption under the title, in the muted meta size. */
  tag?: string;
  /** Body: a paragraph string, or any children (chips, lists, links). */
  children?: ReactNode;
  className?: string;
}

/** The standard content card: optional icon box, title, optional tag line,
 *  body. Place in `grid gap-4 sm:grid-cols-2 lg:grid-cols-3`. Cards stretch to
 *  equal height; put a trailing link row in a `mt-auto` wrapper. */
export function Card({ title, icon, href, tag, children, className = "" }: CardProps) {
  return (
    <article className={`card ${href ? "card--link" : ""} ${className}`.trim()}>
      {icon ? <IconBox icon={icon} /> : null}
      <div>
        <h3>
          {href ? (
            <a href={href} className="card__link">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {tag ? <p className="demo-card__tag">{tag}</p> : null}
      </div>
      {typeof children === "string" ? <p>{children}</p> : children}
    </article>
  );
}

export interface PanelProps {
  /** Padding utility; the site uses `p-6` almost everywhere. */
  padding?: "p-5" | "p-6" | "p-8";
  className?: string;
  children: ReactNode;
}

/** The raised panel: a rounded, bordered surface a shade lighter than the
 *  page. Used for founder blocks, closing bands and anything that must read
 *  as one unit. Lay out its children with flex utilities. */
export function Panel({ padding = "p-6", className = "", children }: PanelProps) {
  return <div className={`panel ${padding} ${className}`.trim()}>{children}</div>;
}

export interface SectionBandProps {
  /** Anchor id, e.g. `services`; pair with `SectionHead`'s `id` for the h2. */
  id?: string;
  /** The alternate (slightly lighter) band. Alternate every other section. */
  alt?: boolean;
  /** id of the heading that names this section (`aria-labelledby`). */
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}

/** A full-width page section with the site's vertical rhythm and the centred
 *  `shell` container inside it. Every home-page section is one of these. */
export function SectionBand({ id, alt, labelledBy, className = "", children }: SectionBandProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`section ${alt ? "section--alt" : ""} scroll-mt-24 ${className}`.trim()}
    >
      <div className="shell flex flex-col gap-8 md:gap-10">{children}</div>
    </section>
  );
}

// --- Figures and notes ---------------------------------------------------

export interface StatProps {
  label: string;
  /** The figure, e.g. `8`, `Under 12h`, `12 months`. */
  value: string;
  /** One line of context under the figure. */
  note?: string;
}

/** A proof figure: label, large value, note. Three of them sit under the
 *  hero. Place in `grid gap-3 sm:grid-cols-3`. */
export function Stat({ label, value, note }: StatProps) {
  return (
    <div className="stat">
      <span className="stat__label">{label}</span>
      <span className="stat__value">{value}</span>
      {note ? <span className="stat__note">{note}</span> : null}
    </div>
  );
}

export interface AttributionProps {
  children: ReactNode;
}

/** The bordered, muted note the site uses for honest caveats — who built
 *  the work, that a demo is fictional. Sits directly under a section intro. */
export function Attribution({ children }: AttributionProps) {
  return <p className="attribution">{children}</p>;
}

export interface PfLinkProps {
  href: string;
  /** Underlined, for the one link in a row that matters most. */
  strong?: boolean;
  /** New tab, and the arrow points outward (↗). */
  external?: boolean;
  children: ReactNode;
}

/** The gold arrow text link used at the foot of cards ("Read the case study →",
 *  "Open the website ↗"). Group several in `flex flex-wrap gap-x-4 gap-y-2`. */
export function PfLink({ href, strong, external, children }: PfLinkProps) {
  return (
    <a
      href={href}
      className={`pf-link ${strong ? "pf-link--strong" : ""} ${external ? "pf-link--external" : ""}`.trim()}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

// --- Forms ---------------------------------------------------------------

export interface FormFieldProps {
  /** Unique id; also the input's `name` unless `name` is given. */
  id: string;
  name?: string;
  label: string;
  /** `textarea` and `select` change the control; everything else is an
   *  `<input type>`. */
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select";
  placeholder?: string;
  /** Shown as a gold mark after the label. */
  required?: boolean;
  /** Shown as a muted "(optional)" style mark after the label. */
  optionalMark?: string;
  requiredMark?: string;
  /** Muted helper line under the control. */
  help?: string;
  /** Error line under the control; also sets `aria-invalid`. */
  error?: string;
  /** Options for `type="select"`. */
  options?: { value: string; label: string }[];
  rows?: number;
  defaultValue?: string;
  autoComplete?: string;
}

/** A labelled form control in the site's contact-form style: label, control,
 *  optional help and error lines. Place fields in `grid gap-3 sm:grid-cols-2`
 *  or a `flex flex-col gap-3` column. */
export function FormField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  required,
  optionalMark,
  requiredMark = "*",
  help,
  error,
  options = [],
  rows = 5,
  defaultValue,
  autoComplete,
}: FormFieldProps) {
  const describedBy = [error ? `${id}-err` : null, help ? `${id}-help` : null].filter(Boolean).join(" ") || undefined;
  const common = {
    id,
    name: name ?? id,
    className: "form-control",
    placeholder,
    defaultValue,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
  };
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="form-label">
        {label}
        {required ? <span className="form-required"> {requiredMark}</span> : null}
        {!required && optionalMark ? <span className="form-optional"> {optionalMark}</span> : null}
      </label>
      {type === "textarea" ? (
        <textarea {...common} rows={rows} />
      ) : type === "select" ? (
        <select {...common}>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...common} type={type} />
      )}
      {help ? (
        <span id={`${id}-help`} className="form-help">
          {help}
        </span>
      ) : null}
      {error ? (
        <span id={`${id}-err`} className="form-error">
          {error}
        </span>
      ) : null}
    </div>
  );
}
