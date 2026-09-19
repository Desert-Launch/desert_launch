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
      "Mobile apps, web platforms and MVPs for businesses in Egypt and the Gulf, with six live demos to try. Fixed quote, you own the code, a year of free support.",
    ogLocale: "en_US",
    ogImageAlt:
      "Desert Launch — mobile app and software development company in Cairo, Egypt",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Demos", href: "#demos" },
    { label: "Process", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Why us", href: "#why-us" },
  ],
  header: {
    tagline: "Mobile, web and product engineering — Cairo, Egypt",
    startProject: { label: "Start a project", href: "#contact" },
    langCode: "EN",
    langAria: "Choose language",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    mobileLangLabel: "Language",
  },
  hero: {
    eyebrow: "Software product studio · Cairo",
    title: "From idea to production-ready software.",
    lead: "Desert Launch designs and builds the mobile apps, web platforms and internal systems that founders and businesses run on — one fixed quote before you commit, and a year of support after launch.",
    primary: { label: "Start a project", href: "#contact" },
    secondary: { label: "View our work", href: "#work" },
    responseNote: "Replies within 12 hours, direct from the engineer who would build it.",
    journey: {
      label: "How a project moves from an idea to a product in production",
      statusLabel: "Project status",
      statuses: [
        "Understanding the problem",
        "Scoped & quoted",
        "In build · milestone by milestone",
        "Live in production",
      ],
      stageLabel: "Stage",
      stages: [
        "Idea",
        "Scope",
        "Design",
        "Build",
        "Launch",
        "Support",
      ],
      url: "app.yourcompany.com",
      fragments: [
        "bookings.xlsx",
        "WhatsApp thread",
        "paper day sheet",
        "3 disconnected tools",
      ],
      scope: {
        title: "Scope summary · fixed quote",
        lines: [
          "Customer booking · 1 audience",
          "Staff dashboard · 4 milestones",
          "Payments · 30% upfront",
        ],
      },
      ui: {
        app: "Desk",
        nav: [
          "Today",
          "Bookings",
          "Customers",
          "Staff",
        ],
        headline: "Today · 14 bookings",
        live: "Live",
        rows: [
          { label: "09:30 · Customer 1", state: "confirmed" },
          { label: "11:00 · Customer 2", state: "new" },
        ],
      },
      phone: { title: "My bookings", slot: "18:00", slotNote: "Group", day: "Thu", cta: "Book" },
      captions: {
        idle: "From spreadsheets and paper to one product your business runs on.",
        milestones: "Milestones",
        terms: "30% upfront, the rest per accepted milestone",
        live: "Live on both stores",
        liveNote: "in your own developer accounts",
        since: "Since launch",
        sinceValue: "v1.0 → v1.4 · 12 months of support included",
      },
      alts: [
        "A finished platform dashboard in production",
        "A finished mobile app in production",
      ],
    },
    proof: [
      { label: "Products shipped", value: "8", note: "Mobile apps, multi-role platforms and private business systems." },
      { label: "First reply", value: "Under 12h", note: "From the engineer who would build it. No account managers." },
      { label: "Support after launch", value: "12 months", note: "Bug fixes, OS and store updates. Small changes free for three." },
      { label: "Code ownership", value: "Yours", note: "Code, IP, hosting and store accounts in your name from day one." },
    ],
  },
  work: {
    kicker: "Selected work",
    title: "Products in the stores, platforms running a business every day",
    intro:
      "Eight products across consumer mobile, multi-role platforms and private business systems. Where an app is public, the store link is on the case.",
    attribution:
      "Every product here was designed and built by our founder, Abdullah Mohamed — across Desert Launch client work and earlier senior engineering roles. Voicers is our own in-house product and is not published yet.",
    caseLabels: { problem: "Problem", built: "We built", outcome: "Outcome" },
    moreHeading: "Five further products",
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
        case: {
          problem: "Members phoned the front desk to book every session.",
          built: "Plan browsing, trainer selection and personal or group session booking in-app, with a payment gateway.",
          outcome: "Published on both stores for a business that runs on it daily.",
        },
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
        case: {
          problem: "Daily-habit apps are installed once and forgotten.",
          built: "Quran, adhkar and duas, accurate prayer times and qibla, with reminders built for retention rather than installs.",
          outcome: "Full Arabic and English interface with right-to-left layout, live on both stores.",
        },
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
        case: {
          problem: "Three audiences — customers, field technicians, managers — one operation.",
          built: "Three role-specific apps from a single codebase: booking, the field job queue and management oversight.",
          outcome: "Live technician tracking, subscriptions, wallet, points and Apple Wallet passes in production.",
        },
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
    title: "Six things we build, and what you have at the end",
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
      gymBooking: {
        title: "Gym & fitness booking app",
        body: "A membership and session booking app for a gym, a studio or a trainer — plans, trainers, schedules and payments, so the front desk stops taking bookings by phone.",
        deliverable: "A published iOS and Android booking app in your own accounts.",
        timeline: "2–3 months",
      },
      fieldService: {
        title: "Field service management app",
        body: "Customers book, technicians work the job queue and managers watch it happen — three role-specific apps built from one codebase, with live tracking.",
        deliverable: "A customer app, a technician app and a manager dashboard.",
        timeline: "3–4 months",
      },
      clinicLab: {
        title: "Lab & clinic management system",
        body: "A case management platform for a lab or a clinic: a portal for the customers who send work in, and an admin side for the team processing it.",
        deliverable: "A customer portal and an admin dashboard on your own hosting.",
        timeline: "2–3 months",
      },
    },
    useCases: {
      title: "Built for a specific situation",
      intro: "Pages written for a particular kind of business rather than a category of work. If one of these is your situation, start there — it is the same person building it and the same terms.",
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
  demos: {
    kicker: "Live demos",
    title: "Try the kind of system we would build for you",
    intro:
      "Six working demos. Book, order or send an enquiry on the public site, then open the staff dashboard and watch it arrive. Nothing to install, no sign-up.",
    disclaimer:
      "Every business, name, price and phone number in these demos is invented. What you enter stays in your browser for the session and resets when you refresh.",
    items: {
      dental: {
        tag: "Dental clinic · Dubai",
        summary:
          "Treatments and prices, online booking against real slot rules — lunch breaks, closed days, nothing inside the next two hours — and a clinic dashboard where the front desk finds the new appointment and the patient record it created.",
        flows: ["Book an appointment", "Reschedule or change status", "Patient records", "Front-desk diary"],
      },
      medical: {
        tag: "Multi-specialty clinic · Abu Dhabi",
        summary:
          "Doctors by specialty, a five-step booking wizard that finds the first free slot across a whole department, and a staff dashboard with full control over appointments and patient files.",
        flows: ["Find a doctor by specialty", "Five-step booking", "First available in a department", "Appointments and patients"],
      },
      gym: {
        tag: "Gym & fitness club · Dubai",
        summary:
          "A weekly class timetable with live spots left and a waitlist once a session fills, a join flow that issues a membership number, and the club's admin — members, classes and today's fill rates.",
        flows: ["Book a class", "Join a plan", "Waitlist when full", "Members and classes"],
      },
      cafe: {
        tag: "Café & roastery · Dubai",
        summary:
          "A 32-item menu with size, milk and extras, order-ahead for pickup or delivery with a time slot, and the bar's ticket board where staff move each order from new to ready.",
        flows: ["Order ahead", "Pickup or delivery slot", "Ticket board", "Menu and sold-out control"],
      },
      restaurant: {
        tag: "Restaurant · Dubai",
        summary:
          "Table reservations that show what is genuinely free for your party size, online ordering for collection or delivery, and the staff view — the reservation book, the pass and the menu in one place.",
        flows: ["Reserve a table", "Order for collection or delivery", "Reservation book and floor view", "Order pass"],
      },
      realestate: {
        tag: "Real estate brokerage · Riyadh",
        summary:
          "Searchable listings with filters that travel in the URL, saved units, enquiries that land on a leads board, and full admin over the units. Arabic first, with English a tap away.",
        flows: ["Filter and sort listings", "Save units", "Send an enquiry", "Leads board and unit admin"],
      },
    },
    siteCta: "Open the website",
    adminCta: "Open the dashboard",
    siteShort: "Website",
    adminShort: "Dashboard",
    flowsLabel: "What you can try",
    langs: { en: "English", ar: "Arabic" },
    pageLink: "Everything about the demos",
  },
  pricing: {
    kicker: "Investment",
    title: "Where your project sits",
    intro: "Four brackets, so you can place yourself before you get in touch. Nothing here is a quote.",
    labels: { typical: "Typical", youGet: "You get", fits: "Fits" },
    brackets: [
      {
        range: "Under $3,000",
        summary: "A business website, or design and consulting on its own.",
        typical: "2 weeks – 1 month",
        youGet: "A live site on your own hosting, which you can extend",
        fits: "Web development · UI/UX design · Technical consulting",
      },
      {
        range: "$3,000 – $8,000",
        summary: "A portal, an internal system, or an MVP with real users.",
        typical: "1 – 2 months",
        youGet: "A working product in front of real users, and what to build next",
        fits: "MVP development · Internal systems · Client portals",
      },
      {
        range: "$8,000 – $20,000",
        summary: "A mobile product with accounts and payments, on both stores.",
        typical: "2 – 4 months",
        youGet: "A published iOS and Android app in your own developer accounts",
        fits: "Mobile apps · Payments · Admin dashboard",
      },
      {
        range: "Over $20,000",
        summary: "Customer, field and admin apps on one codebase.",
        typical: "Quoted per scope",
        youGet: "Several role-specific apps and the platform behind them",
        fits: "Multi-role platforms · Rebuilds · Live operations",
      },
    ],
    checks: [
      "Free scope call",
      "One fixed price in USD — never hourly",
      "30% upfront, the rest per accepted milestone",
    ],
    link: "How pricing works",
  },
  why: {
    kicker: "Why Desert Launch",
    title: "Four commitments that take the risk off your side of the table",
    features: [
      {
        title: "You know the price before you commit",
        body: "A written fixed price in USD after a free scope call. No hourly billing, no change-order surprises, and an honest answer if a smaller build reaches your goal.",
        before: "Hourly billing and a total that keeps moving",
        after: "One fixed price in USD, agreed before anything starts",
      },
      {
        title: "You own the code and the accounts",
        body: "Code, intellectual property, hosting and store accounts are in your name from day one. If we stop working together, nothing of yours leaves with us.",
        before: "Code and accounts held by the agency",
        after: "Code, IP, hosting and stores in your name from day one",
      },
      {
        title: "You see working software, not screenshots",
        body: "Three or four milestones. You open and use the build before the next payment is due, and a milestone is not accepted until you say it is.",
        before: "Status decks and progress percentages",
        after: "A build you open and accept before it is invoiced",
      },
      {
        title: "You talk to the engineer, for a year after launch",
        body: "No account managers between you and the person writing the code. Twelve months of bug fixes, OS and store updates — small changes free for the first three.",
        before: "An account manager between you and the code",
        after: "The engineer who wrote it, still answering a year later",
      },
    ],
    founder: {
      kicker: "Who you are working with",
      title: "Your project is never handed from sales to a development team you never meet.",
      name: "Abdullah Mohamed",
      role: "Founder & Lead Engineer",
      body: "Senior software engineer with 5+ years shipping production web and mobile products for clients across Egypt, the Gulf, Europe and the US. Based in Cairo — when you message Desert Launch, you are talking to the person who will build your product.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, founder of Desert Launch",
      facts: [
        "Cairo, Egypt",
        "5+ years in production",
        "English & Arabic",
        "Flutter · Node.js · PostgreSQL · AWS",
      ],
      moreLabel: "More about how we work",
      linkedinLabel: "LinkedIn",
    },
  },
  process: {
    kicker: "Process",
    title: "How a project runs, from first message to a year of support",
    intro: "Five steps. Each one ends with something you can open, and nothing is paid before you have seen the step before it.",
    youShareLabel: "You share",
    weDoLabel: "We do",
    deliverableLabel: "You get",
    terms: {
      note: "Nothing is paid before you have seen the step before it.",
      steps: [
        "Free scope call",
        "30% upfront",
        "Per accepted milestone",
        "12 months support",
      ],
    },
    steps: [
      {
        n: "1",
        title: "Scope call",
        chip: "Free · no obligation",
        payment: "Nothing paid",
        youShare: "How the business runs today, who will use the system, and what has to be true on launch day.",
        body: "Define the users, identify the scope, and remove the complexity that does not earn its place.",
        deliverable: "A written scope summary and an honest go or no-go.",
      },
      {
        n: "2",
        title: "Quote",
        chip: "Fixed price in USD",
        payment: "30% deposit starts the work",
        youShare: "The budget you have in mind, and any date you are working towards.",
        body: "Deliverables, a milestone plan, a timeline and one fixed price — nothing starts until you approve it in writing.",
        deliverable: "A fixed quote and a milestone schedule.",
      },
      {
        n: "3",
        title: "Build",
        chip: "Three or four milestones",
        payment: "Paid per accepted milestone",
        youShare: "Feedback on each milestone build. Questions answered the same day, on WhatsApp.",
        body: "Build milestone by milestone, with working software at every one — not screenshots.",
        deliverable: "A build you can open and use at each milestone.",
      },
      {
        n: "4",
        title: "Launch",
        chip: "Store review handled",
        payment: "Final milestone",
        youShare: "Your own store, hosting and domain accounts — created in your name from day one.",
        body: "Store submission, hosting, domains and analytics, plus the back-and-forth with app review until it is live.",
        deliverable: "A published app or a live platform, in your name.",
      },
      {
        n: "5",
        title: "Support",
        chip: "12 months included",
        payment: "No extra cost",
        youShare: "Anything that breaks, straight to the engineer who built it.",
        body: "Bug fixes, operating-system and store updates, and keeping it running. Small changes free for the first three months.",
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
        q: "Can I try something before I commit?",
        a: "Yes. There are six working demos — a dental clinic, a medical centre, a gym, a café, a restaurant and a real estate brokerage — each a public website with the staff dashboard behind it. Book, order or send an enquiry, then open the dashboard and watch it arrive. They are fictional businesses on sample data, and nothing you enter is kept.",
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
    title: "Have a product in mind? Let's define the fastest path to launch.",
    intro:
      "Describe the product idea, the current system, or the process that keeps breaking. Nothing commits you to anything.",
    steps: [
      { title: "You tell us about the project", note: "Five fields, or a WhatsApp message. No documents needed." },
      { title: "We read it and reply within 12 hours", note: "From the engineer, not an account manager." },
      { title: "A free scope call", note: "What it would take, and whether a smaller build gets you there." },
      { title: "You receive a written scope and a fixed price", note: "Then you decide. Nothing is owed until you have both in front of you." },
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
      otherEnquiry: {
        option: "Something else (developer, partnership, collaboration)",
        note: "Developer, partnership and collaboration messages go to email — WhatsApp is kept clear for client projects. Tell us what you have in mind and we will read it.",
        draftIntro: "Hello Desert Launch,\n\nThis is an enquiry about something other than a client project.",
        emailSubject: "Enquiry — Desert Launch",
      },
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
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Demos", href: "#demos" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
    langHeading: "This page in other languages",
    contactHeading: "Contact",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "Email", href: MAILTO },
    ],
    enquiryNote: "Business and project enquiries are fastest on WhatsApp. Developers, partnerships and collaboration enquiries are welcome by email.",
    identity: {
      heading: "Desert Launch",
      body: "An independent software studio based in Cairo, Egypt. Every project is designed and built by Abdullah Mohamed.",
      links: [
        { label: "Pricing", slug: "pricing" },
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
    techStack: "Core technology stack",
    projectStack: "Technology stack",
    founderPanel: "Who you're working with",
    founderFacts: "Founder facts",
    briefBenefits: "What you get from a brief",
    companySummary: "Company summary",
    quickNav: "Quick navigation",
    directContact: "Direct contact",
    social: "Follow Desert Launch",
    newTab: "opens in a new tab",
  },
  common: {
    home: "Home",
    servicesLabel: "Services",
    workLabel: "Work",
    readCaseStudy: "Read the case study",
    allWork: "See all work",
    allServices: "All services",
    pricingLabel: "What it costs",
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
