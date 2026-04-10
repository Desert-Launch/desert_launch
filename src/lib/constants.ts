const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}

export const SITE = {
  name: "DesertLaunch",
  title: "DesertLaunch | Premium mobile apps & business systems",
  description:
    "DesertLaunch builds premium mobile apps and business systems for startups and growing businesses, with fast delivery and clear milestones.",
  url: "https://desertlaunch.com",
  locale: "en_US",
};

export const CONTACT = {
  whatsapp: {
    label: "Chat on WhatsApp",
    href: "https://wa.me/201022838534",
    display: "+201022838534",
  },
  phone: "+201022838534",
  email: "abdullah.mohamed102001@gmail.com",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  title: "Premium mobile apps & business systems — built fast, clean, and scalable.",
  subtitle: "Flutter • Dashboards • APIs • Payments • Deployment",
  supporting:
    "We help startups and growing businesses launch high-quality digital products with speed and reliability.",
  helper:
    "Send your idea on WhatsApp and we’ll reply with a plan + timeline + estimate within 24 hours.",
  trust: ["Fast reply (within 24 hours)", "Clear milestones", "High-quality delivery"],
};

export const QUICK_CONTACT = {
  headline: "Quick Contact",
  note:
    "Send your idea on WhatsApp and we’ll reply with a plan + timeline + estimate within 24 hours.",
};

export const ABOUT = {
  title: "Who We Are",
  body: "DesertLaunch is a small software studio delivering mobile apps and business systems for startups and growing businesses.",
  bullets: [
    "Clear communication",
    "Fast delivery",
    "High-quality results",
    "Long-term maintainability",
  ],
};

export const PROJECTS = [
  {
    name: "FasTap — Smart NFC Business Profile",
    description:
      "A mobile system that helps users share their business profile instantly using NFC cards. Includes a web profile page that opens after scanning.",
    delivered: [
      "Mobile app for profile management",
      "Web profile experience after NFC scan",
      "Cloud storage for user data and media",
      "VPS deployment + domain routing setup",
    ],
    outcome: "Faster sharing + professional digital profile experience",
    screenshots: [
      assetPath("/images/fastab1.png"),
      assetPath("/images/fastab2.png"),
      assetPath("/images/fastab3.png"),
    ],
  },
  {
    name: "Xera Lab — Web Platform + Admin Portal",
    description:
      "A complete system for managing dental case workflows from submission to delivery.",
    delivered: [
      "Customer web app (register + submit cases + track status)",
      "Operations portal for Admin/Doctors/Technicians",
      "Role-based access and permissions",
      "End-to-end workflow tracking with clear status updates",
    ],
    outcome: "Full workflow tracking from intake to delivery",
    screenshots: [],
  },
  {
    name: "Al-Muslim — Daily Worship Companion",
    description:
      "A simple Muslim lifestyle app designed to help users stay consistent with daily worship and spiritual routines.",
    delivered: [
      "Qur’an reading experience with progress tracking",
      "Daily Azkar (morning/evening)",
      "Smart reminders for consistency",
      "Prayer times with notifications",
      "Clean, simple, user-friendly UI",
    ],
    outcome: "Daily habit support with clean UX",
    screenshots: [
      assetPath("/images/almuslim2.png"),
      assetPath("/images/almuslim3.png"),
      assetPath("/images/almuslim4.png"),
    ],
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.elmuslim.app" },
      { label: "App Store", href: "https://apps.apple.com/us/app/al-muslim-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/id6757352101" },
    ],
  },
  {
    name: "Jaweb — Multiplayer Quiz Game",
    description:
      "A fun team-based quiz game where two teams compete with categories and difficulty levels. Includes in-app purchases for premium game packs.",
    delivered: [
      "Match system with teams & scoring",
      "Multiple categories and difficulty levels",
      "In-app purchases with verified payments",
      "Smooth and engaging UI/UX",
    ],
    outcome: "Smooth gameplay + monetization via in-app purchases",
    screenshots: [
      assetPath("/images/jaweb1.png"),
      assetPath("/images/jaweb2.png"),
      assetPath("/images/jaweb3.png"),
    ],
  },
];

export const SERVICES = [
  {
    title: "🚀 MVP Launch",
    description: "Perfect for startups that want to launch fast and validate their idea.",
    helper:
      "We build the core experience, polish the UI, and deliver a release-ready product with clear next steps for growth.",
  },
  {
    title: "🏢 Business System",
    description: "Ideal for businesses that need to manage operations, staff, and daily workflows.",
    helper:
      "We deliver a reliable dashboard and system that saves time, reduces manual work, and keeps everything organized.",
  },
  {
    title: "💎 Full Product",
    description: "For companies building a complete digital platform from start to scale.",
    helper:
      "We handle everything end-to-end: planning, implementation, integrations, and a smooth launch with structured milestones.",
  },
  {
    title: "🛠️ Support & Growth",
    description: "For teams that want long-term stability and continuous improvement.",
    helper:
      "We provide maintenance, fixes, performance tuning, and feature upgrades to keep your product running smoothly.",
  },
];

export const PROCESS = [
  "Quick call (15 min) to understand requirements",
  "Plan + timeline + estimate (within 24 hours)",
  "Weekly sprints with demos",
  "Launch + handover + optional support",
];

export const PRICING = [
  { label: "MVP", value: "$900+" },
  { label: "Business System", value: "$3,000+" },
  { label: "Full Product", value: "$8,000+" },
  { label: "Support", value: "$400/mo+" },
];

export const FOOTER = {
  tagline: "Built with quality. Delivered with speed.",
};
