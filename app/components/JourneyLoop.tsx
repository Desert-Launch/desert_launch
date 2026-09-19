"use client";

import { useEffect, useRef } from "react";
import type { JourneyCopy } from "@/app/data/types";

const STAGES = 6;
const CYCLE_MS = 12_000;

const clamp = (x: number) => Math.max(0, Math.min(1, x));
const ease = (x: number) => x * x * (3 - 2 * x);

/** The hero visual: a project moving from scattered spreadsheets to a product
 *  in production, on a twelve-second loop.
 *
 *  Every state is a CSS custom property on the stage (`--jl-*`, 0–1), and the
 *  markup reads them with fallbacks that describe the idle frame. So the
 *  server renders the "idea" stage, a visitor without JavaScript keeps it, and
 *  the loop only advances once this effect runs. It pauses off-screen and
 *  freezes on the "launch" frame under `prefers-reduced-motion`.
 *
 *  Takes only the journey copy, not the dictionary: a client component's props
 *  are serialised into the page, and this one needs about forty strings. */
export function JourneyLoop({ journey }: { journey: JourneyCopy }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const apply = (q: number) => {
      const set = (k: string, v: number) => stage.style.setProperty(k, v.toFixed(3));
      // The last three-quarters of a stage wind everything back to the start,
      // so the loop rewinds instead of cutting.
      const w = clamp((q - 5.25) / 0.75);
      const p = Math.min(q, 5);
      const k = 1 - w;

      set("--jl-p", p);
      for (let i = 0; i < STAGES; i++) {
        set(`--jl-o${i}`, clamp(1 - Math.abs(p - i)) * (i === 0 ? 1 : k) + (i === 0 ? w : 0));
      }
      set("--jl-settle", ease(clamp(p - 0.35)) * k);
      set("--jl-scope", ease(clamp((p - 0.6) * 1.6)) * ease(clamp(2.3 - p)) * k);
      set("--jl-fragments", Math.max(ease(clamp(1.9 - p)), w));
      set("--jl-wire", ease(clamp((p - 1.5) * 1.4)) * ease(clamp(3.7 - p)) * k);
      set("--jl-ui", ease(clamp((p - 2.6) * 1.2)) * ease(clamp(4.5 - p)) * k);
      set("--jl-real", ease(clamp((p - 3.7) * 1.1)) * k);
      set("--jl-scan", ease(clamp((p - 2.5) * 1.4)) * ease(clamp(3.9 - p)) * k);
      set("--jl-build", ease(clamp((p - 2.7) * 1.3)) * ease(clamp(4.2 - p)) * k);
      set("--jl-live", ease(clamp((p - 3.9) * 1.6)) * ease(clamp(5.15 - p)) * k);
      set("--jl-support", ease(clamp((p - 4.5) * 1.4)) * ease(clamp(5.3 - p)) * k);
      set("--jl-idle", Math.max(ease(clamp(1.6 - p)), w));
      set("--jl-a", Math.max(ease(clamp(1.3 - p)) * k, w));
      set("--jl-b", ease(clamp((p - 0.8) * 1.5)) * ease(clamp(2.6 - p)) * k);
      set("--jl-c", ease(clamp((p - 2.2) * 1.5)) * ease(clamp(4.1 - p)) * k);
      set("--jl-d", ease(clamp((p - 3.8) * 1.5)) * ease(clamp(5.3 - p)) * k);

      const counter = counterRef.current;
      if (counter) {
        const n = String(Math.max(1, Math.min(STAGES, Math.floor(p + 1.0001))));
        if (counter.textContent !== n) counter.textContent = n;
      }
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply(4.4);
      return;
    }

    let visible = true;
    let raf = 0;
    const t0 = performance.now();
    const frame = (now: number) => {
      if (visible) apply((((now - t0) % CYCLE_MS) / CYCLE_MS) * STAGES);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
            { threshold: 0.01 }
          )
        : null;
    io?.observe(stage);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  const j = journey;
  const statusVars = ["--jl-a", "--jl-b", "--jl-c", "--jl-d"] as const;

  return (
    <div ref={stageRef} className="jl panel" role="img" aria-label={j.label}>
      {/* Status line + stage counter */}
      <div className="jl__head">
        <span className="jl__label">{j.statusLabel}</span>
        <span className="jl__status">
          {j.statuses.map((s, i) => (
            <span
              key={s}
              className={`jl__status-item ${i === 3 ? "jl__status-item--live" : ""}`}
              style={{ opacity: `var(${statusVars[i]}, ${i === 0 ? 1 : 0})` }}
            >
              {s}
            </span>
          ))}
        </span>
        <span className="jl__counter">
          <span className="jl__pulse" />
          <span>
            {j.stageLabel} <span ref={counterRef}>1</span>/{STAGES}
          </span>
        </span>
      </div>

      {/* Progress rail */}
      <div className="jl__rail">
        <div className="jl__rail-fill" />
        <div className="jl__dots">
          {j.stages.map((s, i) => (
            <span key={s} className="jl__dot" style={{ "--o": `var(--jl-o${i}, 0)` } as React.CSSProperties} />
          ))}
        </div>
      </div>
      <div className="jl__stages">
        {j.stages.map((s, i) => (
          <span key={s} className="jl__stage" style={{ "--o": `var(--jl-o${i}, 0)` } as React.CSSProperties}>
            {s}
          </span>
        ))}
      </div>

      {/* Browser + phone */}
      <div className="jl__devices">
        <div className="jl__browser">
          <div className="jl__chrome">
            <span className="jl__chrome-dot" />
            <span className="jl__chrome-dot" />
            <span className="jl__chrome-dot" />
            <span className="jl__url">{j.url}</span>
          </div>

          <div className="jl__screen">
            {/* 1 · Scattered fragments, then the scope summary */}
            <div className="jl__layer jl__fragments">
              <div className="jl__frag jl__frag--1">
                <p>{j.fragments[0]}</p>
                <span className="jl__line" />
                <span className="jl__line jl__line--70" />
              </div>
              <div className="jl__frag jl__frag--2">
                <p>{j.fragments[1]}</p>
                <span className="jl__line jl__line--80" />
              </div>
              <div className="jl__frag jl__frag--3">
                <p>{j.fragments[2]}</p>
                <span className="jl__line jl__line--60" />
              </div>
              <div className="jl__frag jl__frag--4">
                <p>{j.fragments[3]}</p>
              </div>
              <div className="jl__scope">
                <p className="jl__scope-title">{j.scope.title}</p>
                {j.scope.lines.map((line) => (
                  <span key={line} className="jl__scope-line">
                    <span aria-hidden="true">✓</span>
                    {line}
                  </span>
                ))}
              </div>
            </div>

            {/* 2 · Wireframe */}
            <div className="jl__layer jl__wire">
              <div className="jl__wire-side">
                <span className="jl__bar jl__bar--strong" />
                <span className="jl__bar" />
                <span className="jl__bar jl__bar--80" />
                <span className="jl__bar jl__bar--90" />
                <span className="jl__bar jl__bar--70" />
              </div>
              <div className="jl__wire-main">
                <span className="jl__bar jl__bar--strong jl__bar--44" />
                <div className="jl__wire-boxes">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="jl__bar jl__bar--tall" />
                <span className="jl__bar jl__bar--tall" />
                <span className="jl__bar jl__bar--tall jl__bar--88" />
              </div>
            </div>

            {/* 3 · The working dashboard */}
            <div className="jl__layer jl__ui">
              <div className="jl__ui-side">
                <span className="jl__ui-app">
                  <span className="jl__ui-mark" />
                  {j.ui.app}
                </span>
                {j.ui.nav.map((item, i) => (
                  <span key={item} className={`jl__ui-nav ${i === 2 ? "is-active" : ""}`}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="jl__ui-main">
                <div className="jl__ui-head">
                  <span className="jl__ui-headline">{j.ui.headline}</span>
                  <span className="jl__ui-live">{j.ui.live}</span>
                </div>
                <div className="jl__chart">
                  <span style={{ "--h": "40%" } as React.CSSProperties} />
                  <span className="is-deep" style={{ "--h": "70%" } as React.CSSProperties} />
                  <span className="is-gold" style={{ "--h": "100%" } as React.CSSProperties} />
                  <span style={{ "--h": "55%" } as React.CSSProperties} />
                  <span className="is-deep" style={{ "--h": "82%" } as React.CSSProperties} />
                </div>
                {j.ui.rows.map((row, i) => (
                  <div key={row.label} className="jl__ui-row">
                    <span>{row.label}</span>
                    <span className={i === 0 ? "text-live" : "text-gold"}>{row.state}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 · The real product */}
            <img
              src="/assets/ezhal1.webp"
              alt={j.alts[0]}
              width={1080}
              height={698}
              decoding="async"
              className="jl__real"
            />
            <div className="jl__scan" />
          </div>
        </div>

        <div className="jl__phone">
          <div className="jl__phone-screen">
            <div className="jl__layer jl__wire jl__phone-wire">
              <span className="jl__bar jl__bar--strong jl__bar--60" />
              <span className="jl__wire-box" />
              <span className="jl__bar" />
              <span className="jl__bar jl__bar--80" />
              <span className="jl__bar jl__bar--60" />
            </div>
            <div className="jl__layer jl__ui jl__phone-ui">
              <p className="jl__phone-title">{j.phone.title}</p>
              <div className="jl__phone-card jl__phone-card--soft">
                <p className="text-gold">{j.phone.slot}</p>
                <p className="text-muted">{j.phone.slotNote}</p>
              </div>
              <div className="jl__phone-card">
                <p className="text-muted">{j.phone.day}</p>
              </div>
              <span className="jl__phone-cta">{j.phone.cta}</span>
            </div>
            <img
              src="/assets/qfightgym1.webp"
              alt={j.alts[1]}
              width={420}
              height={909}
              decoding="async"
              className="jl__real"
            />
          </div>
        </div>
      </div>

      {/* Captions, one per phase */}
      <div className="jl__captions">
        <span className="jl__caption jl__caption--idle">{j.captions.idle}</span>
        <span className="jl__caption jl__caption--build">
          <span className="jl__label">{j.captions.milestones}</span>
          <span className="jl__milestones">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span>{j.captions.terms}</span>
        </span>
        <span className="jl__caption jl__caption--live">
          <span className="chip chip--live">{j.captions.live}</span>
          <span>{j.captions.liveNote}</span>
        </span>
        <span className="jl__caption jl__caption--support">
          <span className="jl__label">{j.captions.since}</span>
          <span className="jl__since">{j.captions.sinceValue}</span>
        </span>
      </div>
    </div>
  );
}
