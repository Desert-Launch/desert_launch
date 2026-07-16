"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary, Lang } from "@/app/data/types";
import { LOCALES } from "@/app/data/shared";

function Globe() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[1.15rem] w-[1.15rem] shrink-0 text-gold"
      aria-hidden="true"
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
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function Header({ t, lang }: { t: Dictionary; lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
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
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
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

  return (
    <header
      className={`sticky top-0 z-20 border-b backdrop-blur-xl transition-colors ${
        scrolled || menuOpen
          ? "border-line-strong bg-[rgba(11,15,25,0.92)] shadow-[0_14px_32px_rgba(0,0,0,0.24)]"
          : "border-line bg-[rgba(11,15,25,0.72)]"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4 py-[0.6rem]">
        {/* Brand */}
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Desert Launch home">
          <img
            src="/assets/logo-96.png"
            alt="Desert Launch logo"
            width={44}
            height={44}
            className="h-11 w-11 rounded-[0.9rem] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
          />
          <span className="min-w-0">
            <strong className="block text-[0.98rem] tracking-[0.02em]">Desert Launch</strong>
            <span className="mt-[0.15rem] hidden text-[0.78rem] text-muted min-[1181px]:block">
              {t.header.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-[0.95rem] text-[0.92rem] min-[901px]:flex xl:gap-5">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href.slice(1) ? "is-active" : ""}`}
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
          aria-label={menuOpen ? t.header.menuClose : t.header.menuOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-white/[0.03] text-ink min-[901px]:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
            )}
          </svg>
        </button>

        {/* Desktop actions */}
        <div className="hidden items-center gap-[0.6rem] min-[901px]:flex">
          {/* Language dropdown */}
          <div className="relative inline-flex" ref={langRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((v) => !v);
              }}
              aria-haspopup="true"
              aria-expanded={langOpen}
              aria-label={t.header.langAria}
              className="inline-flex min-h-[2.6rem] items-center gap-[0.4rem] rounded-full border border-line-strong bg-white/[0.02] px-[0.85rem] py-[0.55rem] text-[0.88rem] font-semibold tracking-[0.03em] text-ink transition-colors hover:border-[rgba(229,231,235,0.28)] hover:bg-white/[0.05]"
            >
              <Globe />
              <span>{t.header.langCode}</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`h-[0.7rem] w-[0.7rem] shrink-0 text-muted transition-transform ${langOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <ul
              role="menu"
              aria-label={t.header.langAria}
              className={`absolute end-0 top-[calc(100%+0.55rem)] z-30 min-w-[13rem] list-none rounded-[14px] border border-line bg-[rgba(17,24,39,0.95)] p-[0.4rem] shadow-brand backdrop-blur-xl transition-all ${
                langOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1.5 opacity-0"
              }`}
            >
              {LOCALES.map((l) => {
                const current = l.code === lang;
                return (
                  <li key={l.code} role="none">
                    <a
                      role="menuitem"
                      href={l.path}
                      lang={l.hreflang}
                      hrefLang={l.hreflang}
                      aria-current={current ? "true" : undefined}
                      dir={l.dir}
                      className={`flex items-center gap-3 rounded-[10px] px-3 py-[0.6rem] text-[0.9rem] transition-colors hover:bg-white/[0.07] ${
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

          <a href={`mailto:hello@desertlaunch.dev`} className="btn btn-secondary text-[0.9rem]">
            {t.header.emailUs}
          </a>
          <a
            href={t.header.startProject.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary text-[0.9rem]"
          >
            {t.header.startProject.label}
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen ? (
        <div className="border-t border-line min-[901px]:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            <nav className="grid gap-1" aria-label="Mobile primary">
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-[18px] border border-transparent bg-white/[0.02] px-4 py-[0.85rem] text-muted transition-colors hover:border-gold/20 hover:bg-gold/[0.08] hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="grid gap-[0.6rem]">
              <a
                href={t.header.startProject.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
              >
                {t.header.startProject.label}
              </a>
              <a href="mailto:hello@desertlaunch.dev" className="btn btn-secondary w-full">
                {t.header.emailUs}
              </a>
            </div>
            <div className="border-t border-line pt-4">
              <span className="mb-[0.65rem] block text-[0.72rem] uppercase tracking-[0.14em] text-muted">
                {t.header.mobileLangLabel}
              </span>
              <div className="flex flex-wrap gap-2">
                {LOCALES.map((l) => {
                  const current = l.code === lang;
                  return (
                    <a
                      key={l.code}
                      href={l.path}
                      lang={l.hreflang}
                      hrefLang={l.hreflang}
                      dir={l.dir}
                      aria-current={current ? "true" : undefined}
                      className={`rounded-full border px-[0.85rem] py-2 text-[0.88rem] transition-colors ${
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
