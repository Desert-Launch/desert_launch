import type { Dictionary } from "@/app/data/types";

/** Persistent WhatsApp shortcut, mobile only.
 *
 *  On desktop the sticky header already carries the primary call to action, so
 *  a floating button there was a fourth competing CTA in the first viewport and
 *  covered body copy on every long section. It is hidden from 901px up (see
 *  `globals.css`), sits inside the iOS home-indicator safe area, and the page
 *  reserves room for it at the bottom so it never lands on text.
 *
 *  The `<aside>` is not decorative: the link is fixed-positioned, so the
 *  wrapper costs nothing visually, but it moves the only element that used to
 *  sit outside every landmark into a named `complementary` region. A
 *  screen-reader user browsing by landmark can now reach it, and axe's `region`
 *  rule passes.
 */
export function FloatingWhatsApp({ t }: { t: Dictionary }) {
  return (
    <aside aria-label={t.a11y.directContact}>
      <a
        href={t.header.startProject.href}
        target="_blank"
        rel="noreferrer"
        className="floating-wa"
        data-evt="whatsapp_click"
        data-evt-placement="floating"
        aria-label={`${t.floatingWhatsApp} — Desert Launch (${t.a11y.newTab})`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M12 4a8 8 0 0 0-6.9 12.05L4 20l4.11-1.07A8 8 0 1 0 12 4Z"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <path
            d="M9.4 9.4c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.5 1.2c.1.2.1.4 0 .5l-.4.6c-.1.2-.1.4 0 .5.4.8 1 1.4 1.8 1.8.2.1.4.1.5 0l.6-.4c.1-.1.3-.1.5 0l1.2.5c.3.1.4.3.4.5v.5c0 .2 0 .4-.4.6-.4.2-1 .3-1.5.2-2-.5-4.1-2.6-4.6-4.6-.1-.5 0-1.1.2-1.5Z"
            fill="currentColor"
          />
        </svg>
        <span>{t.floatingWhatsApp}</span>
      </a>
    </aside>
  );
}
