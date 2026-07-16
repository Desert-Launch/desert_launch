import type { IconKey } from "./types";

// Language-neutral inline SVGs. Referenced by key from the dictionaries so the
// same icon set serves every locale. 22×22, stroke = currentColor.
const P = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<IconKey, React.ReactNode> = {
  web: <path d="M8 7l-4 5 4 5M16 7l4 5-4 5M13 4l-2 16" {...P} />,
  mobile: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2.5" {...P} />
      <path d="M10 6h4M11.5 18h1" {...P} />
    </>
  ),
  uiux: <path d="M4 7h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 16h7v4H4z" {...P} />,
  architecture: (
    <>
      <path d="M4 12h6m4 0h6M12 4v6m0 4v6" {...P} />
      <circle cx="12" cy="12" r="3.5" {...P} />
    </>
  ),
  mvp: (
    <>
      <path d="M5 6h14v12H5z" {...P} />
      <path d="M9 10h6M9 14h3" {...P} />
    </>
  ),
  website: (
    <>
      <path d="M4 5h16v14H4z" {...P} />
      <path d="M8 9h8M8 13h4" {...P} />
    </>
  ),
  modernize: <path d="M5 5h6v6H5zM13 13h6v6h-6zM14 5h5v5h-5zM5 14h5v5H5z" {...P} />,
  consulting: (
    <>
      <path d="M12 5v14M5 12h14" {...P} />
      <circle cx="12" cy="12" r="8" {...P} />
    </>
  ),
  reliability: (
    <>
      <path d="M12 3l7 4v5c0 4.2-2.8 7.9-7 9-4.2-1.1-7-4.8-7-9V7l7-4z" {...P} />
      <path d="M9.5 12l1.7 1.7 3.3-3.7" {...P} />
    </>
  ),
  business: (
    <>
      <path d="M5 19l4.5-10 3 6 2-4 4.5 8" {...P} />
      <path d="M6 5h12" {...P} />
    </>
  ),
  tailored: <path d="M4 8h16M8 4v8M16 12v8M4 16h16" {...P} />,
  communication: <path d="M6 7h12M6 12h12M6 17h7" {...P} />,
  dashboard: (
    <>
      <path d="M5 7h14v10H5z" {...P} />
      <path d="M9 11h6M9 14h4" {...P} />
    </>
  ),
  productized: (
    <>
      <path d="M12 5l6 3.5v7L12 19l-6-3.5v-7L12 5z" {...P} />
      <path d="M12 12l6-3.5M12 12v7M12 12L6 8.5" {...P} />
    </>
  ),
  flows: (
    <>
      <path d="M6 6h12v12H6z" {...P} />
      <path d="M10 10h4v4h-4z" {...P} />
    </>
  ),
  scalable: (
    <>
      <path d="M4 12h16M12 4v16" {...P} />
      <circle cx="12" cy="12" r="8" {...P} />
    </>
  ),
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
