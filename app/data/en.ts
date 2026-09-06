import type { Dictionary } from "./types";
import { wa, MAILTO, PHONE_DISPLAY, EMAIL, CONTENT_UPDATED } from "./shared";

const GENERIC =
  "Hi Desert Launch, I'd like a free quote for a software project.";

export const en: Dictionary = {
  lang: "en",
  dir: "ltr",
  meta: {
    title: "App & Software Development Company in Cairo | Desert Launch",
    description:
      "Desert Launch builds mobile apps, web platforms and MVPs for businesses in Egypt and the Gulf. Fixed quote, you own the code, one year of free support.",
    ogLocale: "en_US",
    ogImageAlt:
      "Desert Launch — mobile app and software development company in Cairo, Egypt",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    tagline: "Mobile, web and product engineering — Cairo, Egypt",
    emailUs: "Email us",
    startProject: { label: "Get a Free Quote", href: wa(GENERIC), external: true },
    langCode: "EN",
    langAria: "Choose language",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    mobileLangLabel: "Language",
  },
  hero: {
    eyebrow: "Software development company · Egypt, the Gulf, Europe & the US",
    title: "Mobile apps and web platforms, engineered in Cairo.",
    lead: "Still running on spreadsheets, paper records and disconnected tools? Desert Launch designs and builds the mobile apps, web platforms, MVPs and internal systems that replace them — with a fixed quote before you commit, full code ownership, and a year of support after launch.",
    tags: [
      "iOS & Android apps",
      "Web platforms & portals",
      "Internal business systems",
    ],
    primary: {
      label: "Get a Free Quote on WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "See our work", href: "#work" },
    responseNote:
      "Replies within 12 hours, usually much faster. Cairo time (UTC+2/+3). English or Arabic.",
    showcase: {
      badge: "Live on the App Store and Google Play",
      caption: "Q-Fight Gym (Doha) and Al-Muslim — two products you can open right now.",
      label: "Two Desert Launch apps shown on phone screens",
      alts: [
        "Al-Muslim app on a phone — prayer times for the day, counting down to the next adhan",
        "Q-Fight Gym app on a phone — a member's list of booked training sessions",
      ],
    },
    proof: [
      {
        label: "Products shipped",
        value: "8",
        note: "Every one of them is on this page — mobile apps, multi-role platforms and private business systems.",
      },
      {
        label: "Published to both stores",
        value: "2 apps",
        note: "Al-Muslim and Q-Fight Gym — store links are on their cards below.",
      },
      {
        label: "First reply",
        value: "Under 12h",
        note: "Direct from the engineer who would build it. No account managers.",
      },
    ],
  },
  work: {
    kicker: "Selected work",
    title: "Mobile apps, platforms and internal systems we have shipped",
    intro:
      "Eight products across consumer mobile, multi-role platforms and private business systems. Where an app is public, the store link is on the card.",
    attribution:
      "Every product here was designed and built by our founder, Abdullah Mohamed — across Desert Launch client work and earlier senior engineering roles. Voicers is our own in-house product and is not published yet.",
    logosLabel: "Products built and shipped by our founder",
    logosPause: "Pause the product strip",
    logosPlay: "Play the product strip",
    moreLabel: "More work — 4 further projects",
    caseStudyCta: "Read the case study",
    similarCta: "Build something like this",
    storeLabels: { appStore: "App Store", googlePlay: "Google Play" },
    statusLabels: {
      live: "Live on both stores",
      delivered: "Delivered to client",
      inHouse: "In-house · pre-launch",
    },
    projects: {
      "q-fight-gym": {
        tag: "Gym booking app · Qatar",
        logoAlt: "Q-Fight Gym app icon",
        summary:
          "The official app for a professional Muay Thai gym in Doha, connecting members to a training programme led by Thai world-title fighters. Members browse plans, pick a trainer and book personal or group sessions without phoning the front desk.",
        points: [
          "Published on the App Store and Google Play for a business that runs on it daily.",
          "Plan browsing, trainer selection, and personal or group session booking in-app.",
          "Flutter and Firebase with a payment gateway integrated.",
        ],
        shotAlts: [
          "Q-Fight Gym app — a member's bookings, each card showing the trainer, sessions used and end date",
          "Q-Fight Gym app — choosing a membership plan, from a single personal session to a three-month group plan, priced in Qatari riyal",
          "Q-Fight Gym app — searching a trainer's availability over a date range, with the time, session type and free seats for each slot",
        ],
        waMessage:
          "Hi Desert Launch, I saw the Q-Fight Gym app on your site and want something similar for my business.",
      },
      "al-muslim": {
        tag: "Daily companion app",
        logoAlt: "Al-Muslim app icon",
        summary:
          "A daily Muslim companion: Quran, adhkar and duas, accurate prayer times and qibla direction, with smart reminders that keep it part of the user's day. Built for retention rather than a one-time install.",
        points: [
          "Published on the App Store and Google Play.",
          "Flutter with push notifications and geolocation for accurate prayer times.",
          "Bilingual Arabic and English with full right-to-left layout.",
        ],
        shotAlts: [
          "Al-Muslim app — the day's prayer times for the current city, counting down to the next adhan, with the Hijri and Gregorian date",
          "Al-Muslim app — adhkar categories for morning, evening, sleep, waking, the mosque and after prayer",
          "Al-Muslim app — the Quran reader, open at Surat Aal-Imran",
        ],
        waMessage:
          "Hi Desert Launch, I saw Al-Muslim on your site and want to build a mobile app like it.",
      },
      ezhal: {
        tag: "Multi-role car-service platform",
        logoAlt: "Ezhal app icon",
        summary:
          "One car-service platform serving three audiences — customers, field technicians and managers — each with its own app, built from a single codebase. Customers book, technicians work the job queue, managers watch it happen.",
        points: [
          "Three role-specific apps from one codebase: booking, field jobs and oversight.",
          "Live technician tracking, subscriptions, wallet, points, stamps and Apple Wallet passes.",
          "Flutter and Riverpod with MyFatoorah, Stripe and Firebase.",
        ],
        shotAlts: [
          "Ezhal website — the platform's home page, with a live snapshot of bookings, customers, managers and employees drawn from the running system",
        ],
        waMessage:
          "Hi Desert Launch, I saw Ezhal on your site and want to plan a multi-app platform.",
      },
      "xera-lab": {
        tag: "Dental case management platform",
        logoAlt: "Xera Lab app icon",
        summary:
          "A full-stack dental case management platform — a customer portal and an admin dashboard on a Node.js API — built and delivered to the client as a private production system.",
        points: [
          "Customer portal plus admin dashboard on one shared platform.",
          "Node.js and PostgreSQL API with JWT role-based access.",
          "AWS S3 uploads, Docker Compose and Nginx deployment.",
        ],
        shotAlts: [],
        waMessage:
          "Hi Desert Launch, I saw Xera Lab on your site and want to build a platform like it.",
      },
      fastap: {
        tag: "NFC digital business card",
        logoAlt: "FasTap app icon",
        summary:
          "Tap an NFC card to share a full business profile — it opens on any phone, no install needed. A Flutter app writes profiles to the cards, and a Flutter Web page opens from every tap-to-share link.",
        points: [
          "Mobile profile management and media updates.",
          "Web profile opened directly after an NFC scan.",
          "Deployed with Firebase and Nginx.",
        ],
        shotAlts: [
          "FasTap — a shared business card as the recipient sees it: photo, role, a save-contact button, social links and direct call, email and address rows",
          "FasTap — choosing which social networks and contact methods appear on a card",
          "FasTap — the profile editor, with a switch beside each address, email, phone and website entry to show or hide it",
        ],
        waMessage:
          "Hi Desert Launch, I saw FasTap on your site and want to build a similar product.",
      },
      jaweb: {
        tag: "Competitive trivia game",
        logoAlt: "Jaweb app icon",
        summary:
          "A living-room trivia night turned into a fair, automated product — two teams, six categories, three difficulty levels, referee logic and automatic scoring.",
        points: [
          "Full game flow with team-based scoring and referee logic.",
          "Monetization through MyFatoorah payments.",
          "Flutter with clean architecture for repeated play.",
        ],
        shotAlts: [
          "Jaweb app — the Arabic home screen, showing the player's games, the game packs on offer and the help options",
        ],
        waMessage:
          "Hi Desert Launch, I saw Jaweb on your site and want to plan an interactive product.",
      },
      "iccd-hub": {
        tag: "Members' app for an international organisation",
        logoAlt: "ICCD Hub app icon",
        summary:
          "A bilingual members' companion app for the Islamic Corporation for the Development of the Private Sector, pairing organisational content with a personal productivity suite.",
        points: [
          "Events, member countries, subsidiaries and a knowledge centre in one place.",
          "Tasks, notes, calendar and reminders alongside prayer times, qibla and a Hijri calendar.",
          "Google and Apple sign-in, Firebase push, deep linking and full EN/AR right-to-left support.",
        ],
        shotAlts: [
          "ICCD Hub — store listing for the business resources feature, showing the app's tasks and notes list",
          "ICCD Hub — store listing for community events, showing the app's calendar and upcoming events",
        ],
        waMessage:
          "Hi Desert Launch, I saw ICCD Hub on your site and want an app for my organisation.",
      },
      voicers: {
        tag: "Social audio platform",
        logoAlt: "Voicers app icon",
        summary:
          "A bilingual social audio platform for creators — voice notes, playlists and live stages, with a discovery feed that turns listeners into an audience. Built in-house as our own product; not published.",
        points: [
          "Voice notes, playlists and live audio stages.",
          "Competitions, leaderboards and a discovery feed built for engagement.",
          "Flutter on clean architecture. Our own product, available to demo on a call.",
        ],
        shotAlts: [
          "Voicers app — a creator profile with subscriber, listen and like counts, a leaderboard of winning voice notes and a trending list",
          "Voicers app — the discovery feed, playing a creator's post with gift, like, comment and share controls",
          "Voicers app — voting on voice notes, filtered by top rated, newest and already voted",
        ],
        waMessage:
          "Hi Desert Launch, I saw Voicers on your site and want to plan a product like it.",
      },
    },
  },
  services: {
    kicker: "Services",
    title: "Mobile app, web and MVP development services",
    intro:
      "Six things we build. Every one comes with a fixed quote in USD, milestone payments, full code ownership and a year of support.",
    items: {
      mobile: {
        title: "Mobile app development",
        body: "One Flutter codebase published to both the App Store and Google Play. Accounts, payments, push notifications and offline behaviour are part of the build, not a phase two.",
        deliverable: "A published iOS and Android app in your own developer accounts.",
        timeline: "2–4 months",
      },
      web: {
        title: "Web development",
        body: "Business websites, client portals, admin dashboards and full web platforms — built for speed, search and the one action you need visitors to take.",
        deliverable: "A live site or platform on your hosting, which you can extend.",
        timeline: "2 weeks – 3 months",
      },
      mvp: {
        title: "MVP development",
        body: "The smallest version that proves the idea with real users, on an architecture that survives the next three features instead of being thrown away.",
        deliverable: "A working product in front of real users, and what to build next.",
        timeline: "1–2 months",
      },
      design: {
        title: "UI/UX design",
        body: "Screens and flows designed and agreed before they are built, so the booking, the order or the sign-up actually gets finished.",
        deliverable: "Clickable screens you approve before development starts.",
        timeline: "1–3 weeks",
      },
      modernize: {
        title: "Rebuilds & modernization",
        body: "Take over a slow, broken or abandoned product. We read the existing code first and tell you honestly whether to fix it or rebuild it.",
        deliverable: "A written verdict on the current code, then the work itself.",
        timeline: "From 2 weeks",
      },
      consulting: {
        title: "Technical consulting & architecture",
        body: "A second opinion before you hire, an architecture review before you scale, or a delivery plan you can hand to any team.",
        deliverable: "A written recommendation you own, whoever ends up building it.",
        timeline: "2–5 days",
      },
    },
    learnMore: "Service details",
    timelineLabel: "Typical",
    stackLabel: "Core stack",
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
      label: "Get a Free Quote on WhatsApp",
      href: wa(
        "Hi Desert Launch, I'm looking at your services and would like a free quote."
      ),
      external: true,
    },
    secondary: { label: "Send a Brief by Email", href: MAILTO },
  },
  why: {
    kicker: "Why Desert Launch",
    title: "Why businesses in Egypt and the Gulf hire Desert Launch",
    intro:
      "Four commitments written into every engagement. Not adjectives about how modern the code is.",
    features: [
      {
        icon: "quote",
        title: "A fixed quote before you commit",
        body: "A written price in USD after a free scope call. No hourly billing, no change-order surprises, and an honest answer if a smaller build reaches your goal.",
      },
      {
        icon: "ownership",
        title: "You own the code and the accounts",
        body: "Code, intellectual property, hosting and store accounts are in your name from day one. If we stop working together, nothing of yours leaves with us.",
      },
      {
        icon: "support",
        title: "A year of support, included",
        body: "Twelve months of bug fixes, OS and store updates and keeping it running. The first three months include small changes and tweaks too.",
      },
      {
        icon: "direct",
        title: "You talk to the engineer",
        body: "No account managers between you and the person writing the code. Replies on WhatsApp within 12 hours, in English or Arabic.",
      },
    ],
    founder: {
      kicker: "Who you're working with",
      name: "Abdullah Mohamed",
      role: "Founder & Lead Engineer",
      body: "Senior software engineer with 5+ years shipping production web and mobile products for clients across Egypt, the Gulf, Europe and the US. Based in Cairo — when you message Desert Launch, you are talking to the person who will build your product.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, founder of Desert Launch",
      facts: [
        "Cairo, Egypt",
        "5+ years in production",
        "Flutter · Node.js · PostgreSQL",
      ],
      moreLabel: "More about how we work",
    },
    band: {
      kicker: "How engagements start",
      body: "Most projects begin with a free scope call: you describe the problem, we tell you what it would take and whether a smaller build gets you there. You get a written fixed quote and a milestone plan before you pay anything.",
      points: [
        "Free scope call",
        "Written fixed quote in USD",
        "30% upfront, the rest per milestone",
      ],
      cta: {
        label: "Get a Free Quote on WhatsApp",
        href: wa("Hi Desert Launch, I'd like to book a free scope call."),
        external: true,
      },
    },
  },
  process: {
    kicker: "Process",
    title: "How a project runs, from first message to a year of support",
    intro:
      "Five steps. Each one ends with something you can see, and nothing is paid before you have seen the step before it.",
    deliverableLabel: "You get",
    steps: [
      {
        n: "1",
        title: "Scope call",
        body: "A free call about how the business runs today, who will use the system and what has to be true on launch day.",
        deliverable: "A written scope summary and an honest go or no-go.",
      },
      {
        n: "2",
        title: "Quote",
        body: "A fixed price in USD, a milestone plan and a date. Nothing starts until you approve it in writing and pay the 30% deposit.",
        deliverable: "A fixed quote and a milestone schedule.",
      },
      {
        n: "3",
        title: "Build",
        body: "You see working software at every milestone, not screenshots. Updates on WhatsApp as the work moves, and questions answered the same day.",
        deliverable: "A build you can open and use at each milestone.",
      },
      {
        n: "4",
        title: "Launch",
        body: "Store submission, hosting, domains and analytics, all set up in your own accounts. We handle store review feedback until it is live.",
        deliverable: "A published app or a live platform, in your name.",
      },
      {
        n: "5",
        title: "Support",
        body: "Twelve months of free support and maintenance. The first three months include small changes and updates as well.",
        deliverable: "A year of fixes and updates at no extra cost.",
      },
    ],
  },
  testimonials: {
    kicker: "Peer recommendations",
    title: "What senior engineers say about working with our founder",
    intro:
      "Public LinkedIn recommendations for Abdullah Mohamed from engineers and leads he has worked alongside. These are colleague endorsements, not client reviews — the client work is in the portfolio above.",
    sourceLabel: "LinkedIn recommendation",
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
  faq: {
    kicker: "FAQ",
    title: "Software development FAQ: cost, timeline, ownership and support",
    intro:
      "The questions every first-time software buyer asks. If yours isn't here, ask it on WhatsApp — you'll get a direct answer, not a sales pitch.",
    updated: `Last updated ${CONTENT_UPDATED}`,
    items: [
      {
        q: "How much does a project cost?",
        a: "Every project gets a fixed quote in USD after a free scope call — no hourly billing and no surprise invoices. The price depends on scope and complexity: a business website is the smallest engagement we take, a full mobile product with payments and accounts the largest. Tell us the budget you have in mind and we will tell you honestly what fits inside it, or whether a smaller build reaches the same goal.",
      },
      {
        q: "How long will my project take?",
        a: "A business website is usually measured in weeks, an MVP in one to two months, and a larger mobile product in two to four months. You get a concrete timeline with milestones before we start, and you see working software at every milestone.",
      },
      {
        q: "What happens after launch?",
        a: "Twelve months of free support and maintenance: bug fixes, operating-system and app-store updates, and keeping the product running. In the first three months, small changes and tweaks are free as well. After that a monthly retainer is optional — nothing stops working if you skip it.",
      },
      {
        q: "Who owns the code?",
        a: "You do. Full ownership of the code, the intellectual property and the infrastructure and store accounts — everything is created in your name from the start, so you are never locked in to us.",
      },
      {
        q: "How do payments work?",
        a: "Projects are split into three or four milestones. You pay 30% upfront and the rest per delivered milestone. You always see working software before the next payment is due, and a milestone is not accepted until you say it is.",
      },
      {
        q: "Will you sign an NDA?",
        a: "Yes. Send yours before the scope call, or we will provide a simple mutual one. We do not need your data or your accounts to quote — a description of the problem is enough.",
      },
      {
        q: "Who actually does the work?",
        a: "Abdullah builds every Desert Launch project personally — the same person you message on WhatsApp writes the code. Nothing is handed to a subcontractor you never meet. If a project needs a specialist, you are told who and why before they start.",
      },
      {
        q: "We're not technical. Is that a problem?",
        a: "Not at all — most of our clients aren't. We explain decisions in plain business language, make the technical choices for you, and communicate in English or Arabic on WhatsApp.",
      },
      {
        q: "Flutter or native iOS and Android?",
        a: "Flutter, in almost every case. One codebase ships to both stores, which roughly halves the build and the ongoing maintenance cost, and for the apps most businesses need the result is indistinguishable from native. If your product depends on something Flutter cannot reach well, we will say so and quote native instead.",
      },
      {
        q: "Can you take over an existing app or website?",
        a: "Yes. We start with a short code review and give you a written verdict: fix it, refactor it, or rebuild it. Sometimes the honest answer is that the code is fine and the problem is elsewhere — you get that answer too.",
      },
      {
        q: "What does it cost to run after launch?",
        a: "Hosting and services are billed to you directly in your own accounts, so you always see the real cost: typically a small monthly bill for Firebase or a server, plus the Apple Developer Program at $99 a year and Google Play's one-time $25 registration if you are publishing an app. We estimate the running cost in the quote so there are no surprises.",
      },
      {
        q: "Do you build Arabic and right-to-left apps?",
        a: "Yes, and we ship them regularly. Al-Muslim, ICCD Hub and Voicers all run bilingual Arabic and English interfaces with full right-to-left layout, Arabic typography and Hijri dates. This website is another one.",
      },
      {
        q: "Do you work with clients in Saudi Arabia, the UAE and the Gulf?",
        a: "Yes. Desert Launch works with clients across Egypt, Saudi Arabia, the UAE, Qatar and Kuwait, as well as Europe and the US. We work from Cairo (UTC+2 in winter, UTC+3 in summer), which is within an hour of every Gulf capital, communicate in Arabic or English on WhatsApp, and have shipped for Gulf businesses — including a live App Store and Google Play product for a gym in Doha.",
      },
      {
        q: "Why hire a software company in Egypt?",
        a: "You get senior engineering at Egyptian rates — typically well below Western European and US agency prices for the same scope — without the usual offshore downsides: the same or near timezone for the Gulf and Europe, native Arabic plus fluent English, and a direct line to the engineer building your product instead of a layered account team.",
      },
    ],
  },
  contact: {
    kicker: "Get started",
    title: "Tell us how your business runs today",
    intro:
      "Describe the product idea, the current system or the process that keeps breaking. WhatsApp is the fastest route to a direct conversation; email suits longer briefs and documents.",
    highlights: [
      "A recommendation on scope and the fastest route to launch — free, before any commitment.",
      "A fixed quote in USD, so you know the number before you decide.",
      "Nothing is stored on this site: the form drafts a message and hands it to WhatsApp or your email app.",
    ],
    primary: { label: "Get a Free Quote on WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Send a Brief by Email", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    direct: {
      heading: "Talk to us directly",
      body: "Prefer to skip the form? These reach the same person.",
      whatsapp: { label: "WhatsApp", value: PHONE_DISPLAY },
      email: { label: "Email", value: EMAIL },
      phone: { label: "Phone", value: PHONE_DISPLAY },
      location: { label: "Based in", value: "Cairo, Egypt" },
      hours: { label: "Response", value: "Within 12 hours · Cairo time (UTC+2/+3)" },
    },
    form: {
      heading: "Send a project brief",
      body: "Five fields. It drafts the message and opens it in WhatsApp or your email app — nothing is sent from this page.",
      name: "Your name",
      namePlaceholder: "Name",
      reply: "Email or phone",
      replyPlaceholder: "you@company.com",
      replyHelp: "So we can reply if WhatsApp doesn't reach you.",
      projectType: "What do you need?",
      projectTypePlaceholder: "Select one",
      projectTypeOptions: [
        "Mobile app (iOS & Android)",
        "Business website",
        "Web platform or portal",
        "Internal / admin system",
        "MVP for a new product",
        "Rebuild of an existing product",
        "Not sure yet",
      ],
      budget: "Budget range (USD)",
      budgetPlaceholder: "Select a range",
      budgetOptions: [
        "Under $3,000",
        "$3,000 – $8,000",
        "$8,000 – $20,000",
        "Over $20,000",
        "Not sure yet",
      ],
      budgetHelp: "A range is enough. It tells us what is realistic before we quote.",
      timeline: "Timeline",
      timelinePlaceholder: "Select a timeline",
      timelineOptions: [
        "As soon as possible",
        "Within 1 month",
        "1 to 3 months",
        "More than 3 months",
      ],
      summary: "What are you building?",
      summaryPlaceholder:
        "What should it do, who is it for, and what is broken about the way it works today?",
      requiredMark: "required",
      optionalMark: "optional",
      submitWhatsapp: "Open brief in WhatsApp",
      submitEmail: "Open brief in email",
      sending: "Opening…",
      opened: "Your brief is ready. Send the message that just opened.",
      blocked: "Your browser blocked the pop-up.",
      blockedLink: "Open WhatsApp manually",
      errors: {
        heading: "Check these fields before sending:",
        name: "Please add your name.",
        reply: "Please add an email address or a phone number.",
        replyInvalid: "That does not look like an email address or a phone number.",
        summary: "Please describe what you are building, in a sentence or two.",
      },
      note: "Nothing is stored or sent until you hit send in WhatsApp or your email app.",
      draftIntro: "Hello Desert Launch,\n\nHere is a brief for a project.",
      draftLabels: {
        name: "Name",
        reply: "Contact",
        projectType: "Project type",
        budget: "Budget range",
        timeline: "Timeline",
        summary: "What we're building",
      },
      emailSubject: "Project brief — Desert Launch",
    },
  },
  footer: {
    tagline: "Software house — Cairo, Egypt",
    blurb:
      "Desert Launch builds mobile apps, web platforms and internal systems for businesses in Egypt, the Gulf, Europe and the US.",
    copyright: "© 2026 Desert Launch. All rights reserved.",
    navHeading: "Navigate",
    navLinks: [
      { label: "Work", sub: "Products live on the App Store and Google Play", href: "#work" },
      { label: "Services", sub: "What Desert Launch builds", href: "#services" },
      { label: "Why us", sub: "Fixed quote, code ownership, a year of support", href: "#why-us" },
      { label: "Process", sub: "From scope call to launch in five steps", href: "#process" },
      { label: "FAQ", sub: "Cost, timeline, ownership and support", href: "#faq" },
      { label: "Contact", sub: "Send a brief or message on WhatsApp", href: "#contact" },
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
    identity: {
      heading: "Desert Launch",
      body: "An independent software studio based in Cairo, Egypt. Every project is designed and built by Abdullah Mohamed.",
      addressLabel: "Address",
      address: "Cairo, Egypt",
      links: [
        { label: "Privacy", slug: "privacy" },
        { label: "Engagement terms", slug: "terms" },
        { label: "About", slug: "about" },
      ],
    },
    note: "Send a brief from the contact section above and continue the conversation on WhatsApp or by email.",
  },
  a11y: {
    home: "Desert Launch — home",
    primaryNav: "Primary",
    mobileNav: "Mobile primary",
    footerNav: "Footer",
    breadcrumb: "Breadcrumb",
    proofPoints: "Key proof points",
    heroTags: "What Desert Launch builds",
    techStack: "Core technology stack",
    projectStack: "Technology stack",
    founderPanel: "Who you're working with",
    founderFacts: "Founder facts",
    engagementPoints: "How engagements start",
    briefBenefits: "What you get from a brief",
    companySummary: "Company summary",
    quickNav: "Quick navigation",
    directContact: "Direct contact",
    newTab: "opens in a new tab",
  },
  common: {
    home: "Home",
    servicesLabel: "Services",
    workLabel: "Work",
    readCaseStudy: "Read the case study",
    allWork: "See all work",
    allServices: "All services",
    relatedWork: "Related work",
    relatedServices: "Related services",
    faqHeading: "Common questions",
    onThisPage: "On this page",
    published: "Published",
    lastUpdated: "Last updated",
    backHome: "Back to the home page",
    notFound: {
      title: "This page doesn't exist",
      body: "The link may be out of date. Everything on the site is one step away.",
    },
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Skip to content",
};
