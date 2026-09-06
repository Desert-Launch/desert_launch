"use client";

import { useEffect, useRef, useState } from "react";
import type { A11yCopy, HeaderCopy, Lang } from "@/app/data/types";
import { LOCALES, MAILTO } from "@/app/data/shared";

function Globe() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.05rem] w-[1.05rem] shrink-0 text-gold"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" />
    </svg>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ms-auto h-[0.95rem] w-[0.95rem] shrink-0 text-gold"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Only the strings this component renders.
 *
 *  It used to take the whole `Dictionary`. React serialises every prop of a
 *  client component into the RSC payload embedded in the HTML, so that one prop
 *  wrote the entire site copy — every project summary, every FAQ answer — into
 *  a second copy inside each document. Narrowing the props cut roughly 180 KB
 *  from every page. */
export interface HeaderProps {
  header: HeaderCopy;
  a11y: Pick<A11yCopy, "primaryNav" | "mobileNav">;
  lang: Lang;
  /** Always this locale's home page — never the current URL, or the logo on a
   *  sub-page would link to the page you are already on. */
  homeHref: string;
  /** Href per locale for the *equivalent* page, falling back to that locale's
   *  home page where no translation of this page exists. */
  langHrefs: Partial<Record<Lang, string>>;
  /** Locales where `langHrefs` really is the same page. Only those carry
   *  `hreflang`, so the attribute never claims a translation that isn't one. */
  translated: Lang[];
  /** Section anchors, already resolved to `#work` or `/ar/#work`. */
  navItems: { label: string; href: string }[];
  /** Section-scroll highlighting only makes sense on the home document. */
  isHome: boolean;
}

export function Header({
  header,
  a11y,
  lang,
  homeHref,
  langHrefs,
  translated,
  navItems,
  isHome,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = isHome
      ? Array.from(document.querySelectorAll<HTMLElement>("main section[id]"))
      : [];
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
      if (!sections.length) return;
      const offset = 120;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        if (window.scrollY + offset >= s.offsetTop) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLangOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [langOpen]);

  const localeLinks = LOCALES.filter((l) => langHrefs[l.code]);

  return (
    <header
      className={`site-header sticky top-0 z-30 border-b transition-colors ${
        scrolled || menuOpen ? "is-scrolled" : ""
      }`}
    >
      <div className="shell flex items-center justify-between gap-3 py-2.5">
        {/* Brand. No aria-label: the visible words are the accessible name. An
            aria-label that does not contain the visible text breaks
            speech-input ("click Desert Launch") and fails WCAG 2.5.3. */}
        <a href={homeHref} className="brand flex min-w-0 items-center gap-3">
          <img
            src="/assets/logo-96.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-[0.85rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          />
          <span className="min-w-0">
            <strong className="block text-body tracking-[0.02em]">Desert Launch</strong>
            <span className="mt-0.5 hidden text-micro text-muted min-[1024px]:block">
              {header.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-4 text-body min-[901px]:flex xl:gap-5"
          aria-label={a11y.primaryNav}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${
                isHome && active === item.href.replace(/^.*#/, "") ? "is-active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? header.menuClose : header.menuOpen}
          className={`menu-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white/[0.03] text-ink min-[901px]:hidden ${
            menuOpen ? "is-open" : ""
          }`}
        >
          <span className="menu-toggle-box" aria-hidden="true">
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
            <span className="menu-toggle-line" />
          </span>
        </button>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 min-[901px]:flex">
          <div className="relative inline-flex" ref={langRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              aria-haspopup="true"
              aria-expanded={langOpen}
              className="lang-toggle inline-flex min-h-[2.6rem] items-center gap-1.5 rounded-full border border-line-strong bg-white/[0.02] px-3 py-2 text-meta font-semibold tracking-[0.03em] text-ink transition-colors hover:border-[rgba(229,231,235,0.28)] hover:bg-white/[0.05]"
            >
              <Globe />
              <span>{header.langCode}</span>
              <span className="sr-only">— {header.langAria}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-[0.7rem] w-[0.7rem] shrink-0 text-muted transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                focusable="false"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {/* A plain list of links: the previous `role="menu"` promised
                arrow-key semantics that were never implemented, which misleads
                screen-reader users. */}
            <ul
              className={`lang-menu absolute end-0 top-[calc(100%+0.55rem)] z-40 min-w-[13rem] list-none rounded-sm border border-line bg-[rgba(17,24,39,0.97)] p-1.5 shadow-e3 transition-all ${
                langOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1.5 opacity-0"
              }`}
              aria-label={header.langAria}
            >
              {localeLinks.map((l) => {
                const current = l.code === lang;
                return (
                  <li key={l.code}>
                    <a
                      href={langHrefs[l.code]}
                      lang={l.hreflang}
                      {...(translated.includes(l.code) ? { hrefLang: l.hreflang } : {})}
                      aria-current={current ? "true" : undefined}
                      dir={l.dir}
                      data-evt="lang_switch"
                      data-evt-to={l.code}
                      className={`flex items-center gap-3 rounded-xs px-3 py-2.5 text-body transition-colors hover:bg-white/[0.07] ${
                        current ? "text-gold" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      <span className="font-semibold">{l.endonym}</span>
                      {current ? <Check /> : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kept off the 901–1279px band, where two buttons plus the nav used
              to force both labels onto two lines. */}
          <a
            href={MAILTO}
            className="btn btn-secondary hidden text-body min-[1280px]:inline-flex"
            data-evt="email_click"
            data-evt-placement="header"
          >
            {header.emailUs}
          </a>
          <a
            href={header.startProject.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-body"
            data-evt="primary_cta_click"
            data-evt-placement="header"
          >
            {header.startProject.label}
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-line min-[901px]:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            <nav className="grid gap-1" aria-label={a11y.mobileNav}>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md border border-transparent bg-white/[0.02] px-4 py-3 text-muted transition-colors hover:border-gold/20 hover:bg-gold/[0.08] hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="grid gap-2.5">
              <a
                href={header.startProject.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
                data-evt="primary_cta_click"
                data-evt-placement="mobile-menu"
              >
                {header.startProject.label}
              </a>
              <a
                href={MAILTO}
                className="btn btn-secondary w-full"
                data-evt="email_click"
                data-evt-placement="mobile-menu"
              >
                {header.emailUs}
              </a>
            </div>
            <div className="border-t border-line pt-4">
              <span className="mb-[0.65rem] block text-micro uppercase tracking-[0.14em] text-muted">
                {header.mobileLangLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {localeLinks.map((l) => {
                  const current = l.code === lang;
                  return (
                    <a
                      key={l.code}
                      href={langHrefs[l.code]}
                      lang={l.hreflang}
                      {...(translated.includes(l.code) ? { hrefLang: l.hreflang } : {})}
                      dir={l.dir}
                      aria-current={current ? "true" : undefined}
                      data-evt="lang_switch"
                      data-evt-to={l.code}
                      className={`min-h-[2.75rem] rounded-full border px-4 py-2 text-meta transition-colors ${
                        current
                          ? "border-gold/40 bg-gold/[0.12] text-gold"
                          : "border-line-strong text-ink-soft hover:text-ink"
                      }`}
                    >
                      {l.endonym}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
