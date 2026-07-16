import type { Dictionary } from "@/app/data/types";

export function FloatingWhatsApp({ t }: { t: Dictionary }) {
  return (
    <a
      href={t.header.startProject.href}
      target="_blank"
      rel="noreferrer"
      className="floating-wa"
      aria-label={`${t.floatingWhatsApp} — Desert Launch`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <span className="max-[720px]:hidden">{t.floatingWhatsApp}</span>
    </a>
  );
}
