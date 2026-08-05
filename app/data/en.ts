import type { Dictionary } from "./types";
import { wa, MAILTO } from "./shared";

const GENERIC =
  "Hi Desert Launch, I want to discuss building a system for my business.";

export const en: Dictionary = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "Desert Launch | Software & App Development Company in Cairo, Egypt",
    description:
      "Software & app development company in Cairo, Egypt. Custom web platforms, mobile apps & MVPs — fixed quotes, a year of free support. Free WhatsApp consult.",
    ogLocale: "en_US",
  },
  nav: [
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#plans" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    tagline: "Software House for Web, Mobile & Product Engineering",
    emailUs: "Email Us",
    startProject: { label: "Start Your Project", href: wa(GENERIC), external: true },
    langCode: "EN",
    langAria: "Choose language",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    mobileLangLabel: "Language",
  },
  hero: {
    eyebrow: "Business-first software delivery",
    title: "Replace manual work with a system that runs your business.",
    lead: "Still running on Excel sheets, paper records, and scattered tools? Desert Launch designs and engineers the custom web platforms, mobile apps, MVPs, and internal systems that replace them — with reliable execution, scalable architecture, and direct communication.",
    tags: [
      "Lead-generation products",
      "Mobile-first customer experiences",
      "Operations and admin systems",
    ],
    primary: {
      label: "Start Your Project on WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "See Our Work", href: "#work" },
    responseNote:
      "We reply within 12 hours — usually much faster. Cairo time (GMT+2), English or Arabic.",
    image: {
      src: "/assets/image_slot1.webp",
      alt: "A premium product presentation used to represent modern software delivery.",
    },
    imageCaption:
      "Web platforms, mobile products, and internal systems built for momentum.",
    proof: [
      {
        label: "Experience",
        value: "5+ years",
        note: "Senior engineering across Egypt, the Gulf, Europe, and the US.",
      },
      {
        label: "Shipped",
        value: "10+ products",
        note: "Web platforms and mobile apps running in production.",
      },
      {
        label: "Response time",
        value: "Within 12 hours",
        note: "Direct replies on WhatsApp — no account managers, no slow agency loop.",
      },
    ],
  },
  work: {
    kicker: "Selected Work",
    title:
      "Recent product capabilities that show the kind of systems Desert Launch builds.",
    intro:
      "The work below highlights product thinking, UX quality, and system depth across lead generation, consumer mobile, and engagement-focused experiences.",
    capabilities: {
      kicker: "Capabilities",
      title: "What clients can expect from the build process",
      body: "Desert Launch handles the practical layers required to ship a serious product, not just the visible interface.",
      points: [
        "Product scoping, feature prioritization, and MVP definition.",
        "Responsive interfaces for web and mobile with conversion-conscious UX.",
        "Admin dashboards, permissions, workflows, APIs, and integrations.",
        "Deployment planning, infrastructure setup, launch support, and iteration.",
      ],
    },
    capabilityCards: [
      {
        icon: "dashboard",
        title: "Operational dashboards",
        body: "Admin systems that help teams manage users, workflows, data, and business operations more efficiently.",
      },
      {
        icon: "productized",
        title: "Productized mobile experiences",
        body: "Apps that combine UX clarity, account flows, content delivery, and monetization or engagement systems.",
      },
      {
        icon: "flows",
        title: "Integrated business flows",
        body: "Software that connects customer-facing experiences with internal teams, status tracking, and process visibility.",
      },
      {
        icon: "scalable",
        title: "Scalable architecture",
        body: "Foundations that leave room for new features, integrations, and larger operational needs as businesses grow.",
      },
    ],
    logosLabel: "Products built and shipped by Desert Launch",
    projects: [
      {
        title: "FasTap",
        tag: "NFC digital business card",
        logo: "/assets/logo-fastap.webp",
        logoAlt: "FasTap app icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/fastab1.webp", alt: "FasTap app interface preview 1" },
            { src: "/assets/fastab2.webp", alt: "FasTap app interface preview 2" },
            { src: "/assets/fastab3.webp", alt: "FasTap app interface preview 3" },
          ],
        },
        summary:
          "Tap an NFC card to share a full business profile — it opens on any phone, no install needed. A Flutter app writes profiles to the cards, and a Flutter Web page opens from every tap-to-share link.",
        points: [
          "Mobile profile management and media updates.",
          "Web profile opened directly after an NFC scan.",
          "Deployed with Firebase and Nginx.",
        ],
        links: [{ label: "Build a similar product", href: "#contact" }],
      },
      {
        title: "Al-Muslim",
        tag: "Live on both stores",
        logo: "/assets/logo-almuslim.webp",
        logoAlt: "Al-Muslim app icon",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/almuslim2.webp", alt: "Al-Muslim app interface preview 1" },
            { src: "/assets/almuslim3.webp", alt: "Al-Muslim app interface preview 2" },
            { src: "/assets/almuslim4.webp", alt: "Al-Muslim app interface preview 3" },
          ],
        },
        summary:
          "A daily Muslim companion: Quran, adhkar & duas, accurate prayer times, and qibla direction — with smart reminders that keep it part of the user's day.",
        points: [
          "Live on the App Store and Google Play.",
          "Flutter with notifications and geolocation.",
          "Built for daily retention and a clean, content-led UX.",
        ],
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/al-muslim-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/id6757352101",
            external: true,
          },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.elmuslim.app",
            external: true,
          },
          { label: "Build a mobile app like this", href: "#contact" },
        ],
      },
      {
        title: "Jaweb",
        tag: "Competitive trivia game",
        logo: "/assets/logo-jaweb.webp",
        logoAlt: "Jaweb app icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/jaweb1.png", alt: "Jaweb app interface preview 1" },
            { src: "/assets/jaweb2.png", alt: "Jaweb app interface preview 2" },
            { src: "/assets/jaweb3.png", alt: "Jaweb app interface preview 3" },
          ],
        },
        summary:
          "A living-room trivia night turned into a fair, automated product — two teams, six categories, three difficulty levels, referee logic, and automatic scoring.",
        points: [
          "Full game flow with team-based scoring and referee logic.",
          "Monetization through MyFatoorah payments.",
          "Flutter with clean architecture for repeated play.",
        ],
        links: [{ label: "Plan an interactive product", href: "#contact" }],
      },
      {
        title: "Q-Fight Gym",
        tag: "Live on both stores · Qatar",
        logo: "/assets/logo-qfightgym.webp",
        logoAlt: "Q-Fight Gym app icon",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/qfightgym1.webp", alt: "Q-Fight Gym app — training program screen" },
            { src: "/assets/qfightgym2.webp", alt: "Q-Fight Gym app — class schedule screen" },
            { src: "/assets/qfightgym3.webp", alt: "Q-Fight Gym app — membership screen" },
          ],
        },
        summary:
          "The official app for a professional Muay Thai gym in Qatar, connecting members with a training program led by Thai world-title fighters.",
        points: [
          "Live on the App Store and Google Play for a real operating business.",
          "Plan browsing, personal and group session booking with a chosen trainer, and in-app class scheduling.",
          "Flutter and Firebase with payment integration.",
        ],
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/q-fight-gym/id6759147399",
            external: true,
          },
          {
            label: "Google Play",
            href: "https://play.google.com/store/apps/details?id=com.qfightgym.app",
            external: true,
          },
          { label: "Build an app for your business", href: "#contact" },
        ],
      },
      {
        title: "Xera Lab",
        tag: "Dental case management platform",
        logo: "/assets/logo-xeralab.webp",
        logoAlt: "Xera Lab app icon",
        media: {
          kind: "stack",
          stack: ["Flutter Web", "Node.js", "PostgreSQL", "Docker", "AWS"],
        },
        summary:
          "A full-stack dental case management platform — a customer portal and admin dashboard on a Node.js API — built and delivered to the client as a private production system.",
        points: [
          "Customer portal plus admin dashboard on a shared platform.",
          "Node.js and PostgreSQL API with JWT role-based access.",
          "AWS S3 uploads, Docker Compose, and Nginx deployment.",
        ],
        links: [{ label: "Build a platform like this", href: "#contact" }],
      },
      {
        title: "Ezhal",
        tag: "Multi-tenant car-service platform",
        logo: "/assets/logo-ezhal.webp",
        logoAlt: "Ezhal app icon",
        media: {
          kind: "contain",
          shots: [{ src: "/assets/ezhal1.webp", alt: "Ezhal platform interface preview" }],
        },
        summary:
          "One car-service platform serving three audiences — customers, field employees, and managers — each with its own app, built from a single codebase.",
        points: [
          "Three role-specific apps: booking for customers, jobs for technicians, oversight for managers.",
          "Live technician tracking, subscriptions, wallet, points, stamps, and Apple Wallet passes.",
          "Flutter and Riverpod with MyFatoorah, Stripe, and Firebase.",
        ],
        links: [{ label: "Plan a multi-app platform", href: "#contact" }],
      },
      {
        title: "ICCD Hub",
        tag: "Community & productivity app",
        logo: "/assets/logo-iccd.webp",
        logoAlt: "ICCD Hub app icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/iccd1.webp", alt: "ICCD Hub app interface preview 1" },
            { src: "/assets/iccd2.webp", alt: "ICCD Hub app interface preview 2" },
            { src: "/assets/iccd3.webp", alt: "ICCD Hub app interface preview 3" },
          ],
        },
        summary:
          "A bilingual members' companion app for the Islamic Corporation for the Development of the Private Sector, pairing organizational content with a personal productivity suite.",
        points: [
          "Events, member countries, subsidiaries, and a knowledge center in one place.",
          "Tasks, notes, calendar, and reminders alongside prayer times, qibla, and a Hijri calendar.",
          "Google and Apple sign-in, Firebase push, deep linking, and full EN/AR RTL support.",
        ],
        links: [{ label: "Build an app for your organization", href: "#contact" }],
      },
      {
        title: "Voicers",
        tag: "Social audio platform · in-house build",
        logo: "/assets/logo-voicers.webp",
        logoAlt: "Voicers app icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/voicers1.webp", alt: "Voicers app interface preview 1" },
            { src: "/assets/voicers2.webp", alt: "Voicers app interface preview 2" },
            { src: "/assets/voicers3.webp", alt: "Voicers app interface preview 3" },
          ],
        },
        summary:
          "A bilingual social audio platform for creators — voice notes, playlists, and live stages, with a discovery feed that turns listeners into an audience.",
        points: [
          "Voice notes (VNotes), playlists, and live audio stages.",
          "Competitions, leaderboards, and a discovery feed built for engagement.",
          "Flutter on clean architecture — our own product, not yet published.",
        ],
        links: [{ label: "Plan a product like this", href: "#contact" }],
      },
    ],
    redesigns: {
      title: "Website Redesign Concepts",
      intro:
        "Modern, mobile-first redesigns we've prepared for real businesses — showing the before/after of a faster, clearer site.",
      cards: [
        {
          label: "Real Estate — Ajman",
          title: "Landmark Properties — Redesign Concept",
          summary:
            "A mobile-first property site replacing outdated demo listings with real, searchable local listings, fast load, and WhatsApp enquiry on every property.",
          points: [
            "Mobile-first, fast-loading layout",
            "Searchable property listings",
            "Clear enquiry + WhatsApp CTAs",
          ],
          image: {
            src: "/assets/redesign-landmark.jpg",
            alt: "Landmark Properties website redesign concept",
          },
        },
        {
          label: "Interior / Fit-Out — Ajman",
          title: "Ayyath Interiors — Redesign Concept",
          summary:
            "A clean fit-out portfolio site with a real projects gallery, working contact details, and a clear 'Get a quote' path — replacing an outdated, broken template.",
          points: [
            "Projects gallery that sells the work",
            "Working click-to-call + WhatsApp",
            "Clear 'Get a quote' CTA",
          ],
          image: {
            src: "/assets/redesign-ayyath.jpg",
            alt: "Ayyath Interiors website redesign concept",
          },
        },
      ],
    },
  },
  services: {
    kicker: "Services",
    title: "Software services designed for growth, efficiency, and faster delivery.",
    intro:
      "Desert Launch helps businesses move from idea to execution with clean design, scalable engineering, and practical product thinking.",
    items: [
      {
        icon: "web",
        title: "Custom Web Development",
        body: "Business websites, client portals, dashboards, and web apps built for performance and conversion.",
      },
      {
        icon: "mobile",
        title: "Mobile App Development",
        body: "Cross-platform and native-feeling mobile products with polished UX and reliable integrations.",
      },
      {
        icon: "uiux",
        title: "UI/UX Design",
        body: "Interfaces that make products easier to understand, easier to use, and easier to convert from.",
      },
      {
        icon: "architecture",
        title: "System Architecture",
        body: "The technical foundation that keeps your software fast and cheap to extend — so adding a feature next year doesn't mean rebuilding.",
      },
      {
        icon: "mvp",
        title: "MVP Development",
        body: "Focused first versions that prove the concept quickly without compromising future maintainability.",
      },
      {
        icon: "website",
        title: "Business Website Development",
        body: "Professional company websites built to explain value quickly and turn traffic into qualified leads.",
      },
      {
        icon: "modernize",
        title: "Product Modernization",
        body: "Redesign and rebuild outdated products to improve performance, clarity, and business impact.",
      },
      {
        icon: "consulting",
        title: "Technical Consulting",
        body: "Clear technical direction for product decisions, delivery planning, architecture, and next steps.",
      },
    ],
    stackLabel: "Core Stack",
    stack: [
      "Flutter",
      "Flutter Web",
      "Node.js",
      "GraphQL & REST APIs",
      "PostgreSQL",
      "Firebase",
      "AWS & Docker",
      "Stripe, MyFatoorah & PayTabs",
    ],
    primary: {
      label: "Get a Free Consultation on WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    ghost: { label: "Email Your Requirements", href: MAILTO },
  },
  why: {
    kicker: "Why Desert Launch",
    title:
      "A software partner that thinks about delivery, scalability, and business outcomes.",
    intro:
      "The goal is not just to ship code. The goal is to build the right product, reduce friction, and give your business a digital system you can actually rely on.",
    features: [
      {
        icon: "reliability",
        title: "Built for reliability",
        body: "Clean implementation, scalable structure, and engineering decisions that support long-term growth.",
      },
      {
        icon: "business",
        title: "Business-oriented execution",
        body: "Every screen, workflow, and integration is evaluated against clarity, efficiency, and conversion.",
      },
      {
        icon: "tailored",
        title: "Tailored, not templated",
        body: "Solutions are shaped around your business model, workflows, audience, and growth stage.",
      },
      {
        icon: "communication",
        title: "Clear communication",
        body: "Direct conversations, fast responses, practical planning, and steady progress from kickoff to launch.",
      },
    ],
    founder: {
      kicker: "Who You're Working With",
      name: "Abdullah Mohamed",
      role: "Founder & Lead Engineer",
      body: "Senior software engineer with 5+ years shipping production web and mobile products for clients across Egypt, the Gulf, Europe, and the US. Based in Cairo — when you message Desert Launch, you talk directly to the person building your product.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, founder of Desert Launch",
      facts: ["Cairo, Egypt", "5+ years experience", "10+ apps shipped"],
    },
    buildPlan: {
      kicker: "What You Get",
      heading: "A sharper build plan before the heavy development starts.",
      body: "Every engagement is framed around product clarity, technical practicality, and the fastest route to a reliable launch.",
      points: [
        "Clear scope definition before implementation expands unnecessarily.",
        "UX, architecture, and business goals shaped together instead of in isolation.",
        "A launch path that stays usable for both founders and growing teams.",
      ],
    },
    band: {
      kicker: "How Engagements Start",
      body: "Most projects begin with a short scope review, a recommendation on the clearest build path, and a practical next step for delivery.",
      points: [
        "You own the code and infrastructure",
        "Fixed scope quoted before any commitment",
        "Launch planning from the start",
      ],
      cta: { label: "Get a Free Scope Review", href: "#contact" },
    },
  },
  process: {
    kicker: "Process",
    title: "A simple process that keeps projects clear and moving.",
    intro:
      "Fast response times matter, but so does structure. The workflow below is designed to reduce ambiguity and keep both scope and delivery under control.",
    steps: [
      {
        n: "1",
        title: "Discover",
        body: "Understand the business, goals, users, and project constraints before building anything.",
      },
      {
        n: "2",
        title: "Plan",
        body: "Define scope, technical direction, milestones, and the clearest path to launch.",
      },
      {
        n: "3",
        title: "Build",
        body: "Ship the product in structured phases with attention to UX, quality, and scalability.",
      },
      {
        n: "4",
        title: "Launch",
        body: "Prepare deployment, review final flows, and release with confidence and visibility.",
      },
      {
        n: "5",
        title: "Support",
        body: "We don't disappear after launch — every project includes a full year of free support and maintenance.",
      },
    ],
  },
  testimonials: {
    kicker: "What People Say",
    title: "Engineers and leads who've shipped with our founder, in their own words.",
    intro:
      "Public LinkedIn recommendations for Abdullah Mohamed — the engineer who personally builds every Desert Launch project. Real names, real roles, no paid reviews.",
    items: [
      {
        quote:
          "Abdullah demonstrated an impressive aptitude for grasping complex technical concepts swiftly. His analytical skills and thoughtful approach to problem-solving make him a key contributor to our team's success.",
        name: "Mohamed Sayed",
        role: "AI Lead · Appenza",
        photo: "/assets/testimonial-mohamed-sayed.webp",
      },
      {
        quote:
          "Abdullah combines deep technical expertise with a clear, approachable leadership style. He has contributed significantly to our projects with his ability to solve complex problems efficiently and his commitment to quality.",
        name: "Ahmed Farid",
        role: "Senior Software Engineer · Recovery Advisers",
        photo: "/assets/testimonial-ahmed-farid.webp",
      },
      {
        quote:
          "Abdullah is an exceptional Flutter developer whose talent and enthusiasm make him an asset to any team. During our year working together, his problem-solving skills and ability to overcome challenges consistently impressed me.",
        name: "Mohamad Zakaria",
        role: "Senior Software QA Engineer · Yassir",
        photo: "/assets/testimonial-mohamad-zakaria.webp",
      },
    ],
  },
  plans: {
    kicker: "Plans & Pricing",
    title: "Fixed-scope plans for defined products. Custom proposals for bigger systems.",
    intro:
      "Every plan starts with a free scope call and a written fixed quote in USD — scope, timeline, and price agreed before any payment. Payments are milestone-based: 30% upfront, the rest as you see working software. Every build includes a year of free support.",
    items: [
      {
        name: "Business Website",
        body: "A professional company website built to explain your value fast and turn visitors into WhatsApp and email leads.",
        points: [
          "Design, build, and launch — typically a few weeks.",
          "Fast, mobile-first, and search-ready from day one.",
          "One year of free support and three months of free adjustments.",
        ],
        price: { main: "Fixed USD quote", sub: "Written quote after a free scope call" },
        cta: {
          label: "Discuss a website",
          href: wa(
            "Hi Desert Launch, I want a business website. Can we talk about scope and a quote?"
          ),
          external: true,
        },
      },
      {
        name: "Mobile App",
        note: "Most popular",
        body: "A cross-platform mobile app for iOS and Android from one Flutter codebase — designed, built, and published to both stores.",
        points: [
          "App Store and Google Play submission included.",
          "Typically two to four months, milestone by milestone.",
          "You own the code, the IP, and the store accounts.",
        ],
        price: { main: "Fixed USD quote", sub: "Written quote after a free scope call" },
        cta: {
          label: "Discuss a mobile app",
          href: wa(
            "Hi Desert Launch, I want to build a mobile app. Can we talk about scope and a quote?"
          ),
          external: true,
        },
      },
      {
        name: "MVP Sprint",
        note: "For new ideas",
        body: "A focused first version of your product that proves the concept with real users — without spending a full product budget to find out.",
        points: [
          "Ruthless feature prioritization around one core outcome.",
          "A launch-ready core, typically within one to two months.",
          "An architecture that grows into the full product later.",
        ],
        price: { main: "Fixed USD quote", sub: "Written quote after a free scope call" },
        cta: {
          label: "Scope an MVP",
          href: wa("Hi Desert Launch, I have a product idea and want to scope an MVP."),
          external: true,
        },
      },
      {
        name: "Custom & Enterprise",
        note: "For larger businesses",
        body: "Larger platforms, internal systems, integrations, and ongoing product partnership — shaped around your operation, not a package.",
        points: [
          "Custom scope: platforms, dashboards, APIs, and integrations.",
          "Optional monthly retainer with reserved engineering capacity.",
          "Priority response on WhatsApp when something matters.",
        ],
        price: { main: "Custom proposal", sub: "Tailored after we understand your operation" },
        cta: {
          label: "Request a proposal",
          href: wa(
            "Hi Desert Launch, we need a custom system for our business. Can we set up a call?"
          ),
          external: true,
        },
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Straight answers to the questions every first-time software buyer has.",
    intro:
      "If your question isn't here, ask it on WhatsApp — you'll get a direct answer, not a sales pitch.",
    items: [
      {
        q: "How much does a project cost?",
        a: "Every project gets a fixed quote in USD after a free scope call — no hourly billing and no surprise invoices. The price depends on scope and complexity, and we'll tell you honestly if a smaller build can reach your goal.",
      },
      {
        q: "How long will my project take?",
        a: "It depends on scope and complexity: a business website is usually measured in weeks, an MVP in one to two months, and a larger mobile product in two to four months. You get a concrete timeline with milestones before we start — and you see working software at every milestone.",
      },
      {
        q: "What happens after launch?",
        a: "You get a full year of free support and maintenance, plus three months of free small adjustments and updates. After that, an ongoing retainer is available if you want us to keep improving the product — but nothing breaks if you don't take it.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Full ownership of the code, the intellectual property, and the infrastructure accounts — everything is delivered in your name, so you are never locked in to us.",
      },
      {
        q: "How do payments work?",
        a: "Projects are split into three or four milestones. You pay 30% upfront and the rest per delivered milestone — you always see working software before the next payment is due.",
      },
      {
        q: "We're not technical. Is that a problem?",
        a: "Not at all — most of our clients aren't. We explain decisions in plain business language, handle the technical choices for you, and communicate in English or Arabic on WhatsApp.",
      },
      {
        q: "Do you work with clients in Saudi Arabia, the UAE, and the Gulf?",
        a: "Yes — Desert Launch works with clients across Egypt, Saudi Arabia, the UAE, Qatar, and Kuwait, as well as Europe and the US. We work in your timezone (Cairo, GMT+2 — one hour from the Gulf), communicate in Arabic or English on WhatsApp, and have shipped apps for Gulf businesses, including a live App Store product for a gym in Qatar.",
      },
      {
        q: "Why hire a software company in Egypt?",
        a: "You get senior engineering at Egyptian rates — typically well below Western European and US agency prices for the same scope — without the offshore downsides: same or near timezone for the Gulf and Europe, native Arabic plus fluent English, and a direct line to the engineer building your product instead of a layered account team.",
      },
    ],
  },
  contact: {
    kicker: "Get Started",
    title:
      "Tell us how your business runs today. We'll show you what a system could replace.",
    intro:
      "Share your product idea, current system, or business requirement. WhatsApp is the fastest route for a direct conversation. Email works well for detailed briefs, documents, and longer project outlines.",
    highlights: [
      "Get a clearer recommendation on product scope, structure, and launch path.",
      "Use the form to send the essentials without writing a long email from scratch.",
      "Move directly from idea to a practical next step and channel for discussion.",
    ],
    primary: { label: "Start on WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Request a Consultation by Email", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    image: {
      src: "/assets/image_slot3.webp",
      alt: "A premium desk setup representing project planning and communication.",
    },
    imageCaption: "Send the brief once. Continue on WhatsApp or email.",
    direct: {
      heading: "Share a Project Brief",
      body: "Send the core details here and open the brief directly in WhatsApp or email.",
      whatsapp: { label: "WhatsApp", value: "+20 102 283 8534" },
      email: { label: "Email", value: "abdullah@desertlaunch.dev" },
    },
    form: {
      name: "Your name",
      namePlaceholder: "Name",
      company: "Company or brand",
      companyPlaceholder: "Company or brand",
      projectType: "Project type",
      projectTypePlaceholder: "Select a type",
      projectTypeOptions: [
        "Business website",
        "Web platform",
        "Mobile app",
        "MVP",
        "Internal system",
        "Product redesign",
      ],
      timeline: "Timeline",
      timelinePlaceholder: "Select a timeline",
      timelineOptions: ["ASAP", "Within 1 month", "1 to 3 months", "3+ months"],
      summary: "Project summary",
      summaryPlaceholder:
        "What are you building, who is it for, and what do you need help with?",
      submitWhatsapp: "Open Brief in WhatsApp",
      submitEmail: "Open Brief in Email",
      note: "Nothing is stored or sent until you hit send — the form just drafts your message and opens it in WhatsApp or email.",
      draftIntro: "Hello Desert Launch,\n\nI want to discuss a project brief.",
      draftLabels: {
        name: "Name",
        company: "Company",
        projectType: "Project type",
        timeline: "Timeline",
        summary: "Project summary",
      },
      emailSubject: "Project brief — Desert Launch",
    },
  },
  footer: {
    tagline: "Software house for serious digital products",
    blurb:
      "Desert Launch helps businesses launch websites, platforms, mobile apps, and internal systems with a clear delivery process and direct communication.",
    copyright: "© 2026 Desert Launch. All rights reserved.",
    navHeading: "Navigate",
    navLinks: [
      {
        label: "Our Work",
        sub: "Apps live on the App Store and Google Play",
        href: "#work",
      },
      { label: "Services", sub: "What Desert Launch builds", href: "#services" },
      {
        label: "Plans & Pricing",
        sub: "Fixed-scope plans and custom proposals",
        href: "#plans",
      },
    ],
    langHeading: "This page in other languages",
    contactHeading: "Contact",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "Email", href: MAILTO },
    ],
    contactSub: [
      "Fastest way to discuss a new project",
      "Best for detailed briefs and requirements",
    ],
    note: "Use the contact section above to send a structured brief and continue the conversation in the channel that suits you.",
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Skip to content",
  backToTop: "Back to top",
};
