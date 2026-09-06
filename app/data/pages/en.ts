import type { PagesCopy } from "./types";

export const enPages: PagesCopy = {
  labels: {
    whoFor: "Who this is for",
    onThisPage: "On this page",
    atAGlance: "At a glance",
    attribution: "Attribution",
  },

  services: {
    "mobile-app-development": {
      meta: {
        title: "Mobile App Development Company in Cairo | Desert Launch",
        description:
          "Flutter app development for iOS and Android, from Cairo. Fixed quote, published to both stores in your own accounts, and a year of free support.",
      },
      breadcrumb: "Mobile app development",
      h1: "Mobile app development in Cairo, for iOS and Android",
      lead: "One Flutter codebase, published to the App Store and Google Play under your own developer accounts. Two of the apps we have shipped are live in both stores right now, and you can open them before you talk to us.",
      schemaDescription:
        "Cross-platform mobile app development with Flutter for iOS and Android, including accounts, payments, push notifications and app store submission, delivered from Cairo, Egypt for clients in Egypt, the Gulf, Europe and the US.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A business whose customers already ask for an app — a gym, a clinic, a service company, a retailer.",
            "An operation running on phone calls and WhatsApp messages that should be bookings, orders or job tickets.",
            "A founder who needs a first version in front of real users, not a prototype that only demos well.",
            "A company with an existing app that has been abandoned by whoever built it.",
          ],
        },
        {
          id: "problems",
          title: "What usually goes wrong before we are called",
          body: [
            "Almost every rescue project we take on has the same three symptoms. The app was quoted per feature, so the price grew every month. It was built twice, once for iOS and once for Android, so every fix has to be made and tested twice. And the developer accounts are in someone else's name, so the client cannot publish an update without them.",
            "All three are avoidable, and all three are decisions made in the first week rather than the last.",
          ],
        },
        {
          id: "deliverables",
          title: "What you get",
          cards: [
            {
              title: "A published app, in your name",
              body: "Submitted and released on the App Store and Google Play from developer accounts registered to your company. If we stop working together, you keep publishing.",
            },
            {
              title: "One codebase for both platforms",
              body: "Flutter, so a fix or a new screen is written once. That roughly halves both the build and the ongoing maintenance cost against two native apps.",
            },
            {
              title: "The parts that break in production",
              body: "Accounts and sign-in, payments, push notifications, offline behaviour, deep links and analytics — specified in the quote, not discovered later.",
            },
            {
              title: "An admin side, if you need one",
              body: "Most apps need somewhere for you to manage content, users and orders. We build that as part of the same system, not as a separate project.",
            },
          ],
        },
        {
          id: "how",
          title: "How we build it",
          body: [
            "Flutter for the app itself. It renders its own interface rather than wrapping a web page, so scrolling, gestures and animation feel native, and one team can hold the whole product in their head.",
            "For the backend we use Firebase when the app is mostly reads, notifications and authentication, and Node.js with PostgreSQL when it has real business rules, reporting or role-based access. We tell you which one we are proposing and why, before the quote.",
            "Payments are integrated with the gateway that actually settles into your bank in your country. We have shipped MyFatoorah and Stripe in production; PayTabs and other regional gateways are straightforward to add.",
            "Arabic and right-to-left support is built in from the first screen rather than retrofitted. Three of the apps in our portfolio ship bilingual Arabic and English interfaces.",
          ],
          list: [
            "Flutter · one codebase for iOS and Android",
            "Firebase or Node.js + PostgreSQL, chosen per project",
            "Stripe, MyFatoorah, PayTabs and regional gateways",
            "Push notifications, geolocation, deep links, Apple Wallet passes",
            "Full Arabic / right-to-left layout and Hijri dates",
          ],
        },
        {
          id: "timeline",
          title: "Timeline and milestones",
          body: [
            "A focused app is two to four months from the scope call to the store. The work is split into three or four milestones, and you see a build you can install at the end of each one.",
          ],
          list: [
            "Week 1 — scope call, written scope summary, fixed quote and milestone plan.",
            "Weeks 2–3 — screens and flows agreed before development starts.",
            "Milestones 1 to 3 — a working build at each, with 30% paid upfront and the rest per accepted milestone.",
            "Launch — store submission from your accounts; we handle review feedback until it is live.",
            "Then twelve months of free support, with small changes free for the first three.",
          ],
        },
        {
          id: "cost",
          title: "What it costs",
          body: [
            "Every project is quoted as a fixed price in USD after a free scope call — never per hour. The number depends on how many user roles the app has, whether it takes payments, and how much of a backend it needs.",
            "Tell us the budget you have in mind and we will tell you honestly what fits inside it, or whether a smaller first version reaches the same goal. If it does not fit, we say so rather than quoting something that will run over.",
          ],
          list: [
            "Fixed quote in USD, written, before you commit.",
            "30% upfront, the rest per delivered milestone.",
            "Running costs (Firebase or a server, plus $99/year for Apple and a one-time $25 for Google Play) are billed to your own accounts and estimated in the quote.",
          ],
        },
      ],
      faq: [
        {
          q: "Will the app be as good as a native one?",
          a: "For the apps most businesses need — booking, content, accounts, payments, notifications — a Flutter app is indistinguishable from native in daily use, and it ships to both stores at once. If your product depends on something Flutter cannot reach well, such as heavy on-device video processing, we will say so and quote native instead.",
        },
        {
          q: "Do you submit the app to the stores for us?",
          a: "Yes. Store submission is part of launch, and we handle review feedback until the app is published. The developer accounts are registered in your company's name, so the listing, the reviews and the ability to publish updates stay with you.",
        },
        {
          q: "Can you take over an app someone else built?",
          a: "Yes. We start with a short code review and give you a written verdict — fix, refactor or rebuild — before any larger commitment. Sometimes the honest answer is that the code is fine and the problem is elsewhere.",
        },
        {
          q: "Do you build the backend too?",
          a: "Yes. An app is rarely just screens: it needs accounts, an admin side, and somewhere for the data to live. We build the whole system, and you own all of it.",
        },
      ],
      cta: {
        title: "Get a fixed quote for your app",
        body: "Describe what it should do and who will use it. You get a scope summary and a written price in USD, before you commit to anything.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your mobile app development page and would like a free quote for an app.",
      },
    },

    "web-development": {
      meta: {
        title: "Web Development & Web Platforms in Cairo | Desert Launch",
        description:
          "Business websites, client portals, admin dashboards and web platforms built in Cairo. Fixed quote, your hosting, your code, one year of free support.",
      },
      breadcrumb: "Web development",
      h1: "Web development in Cairo: websites, portals and platforms",
      lead: "From a fast company website that turns visitors into enquiries, to a full platform with a customer portal and an admin dashboard behind it. Built on your hosting, in your accounts, with the code handed over at the end.",
      schemaDescription:
        "Custom web development from Cairo, Egypt: business websites, client portals, admin dashboards and full web platforms built with Flutter Web, Node.js and PostgreSQL for clients in Egypt, the Gulf, Europe and the US.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A company whose current site was built years ago, loads slowly and no longer says what the business does.",
            "A business tracking customers, jobs or stock in spreadsheets that three people edit at once.",
            "An operation that needs customers to log in and see their own data — orders, cases, files, invoices.",
            "A team that needs an admin dashboard to run something they already sell.",
          ],
        },
        {
          id: "kinds",
          title: "Three different things, often confused",
          cards: [
            {
              title: "A business website",
              body: "Five to ten pages that explain what you do and make the enquiry obvious. Fast, mobile-first, findable in search, and editable by you afterwards. Usually two to four weeks.",
            },
            {
              title: "A client portal",
              body: "Your customers sign in and see their own records: orders, cases, documents, status. Removes the daily 'where is my …?' phone call. Usually four to eight weeks.",
            },
            {
              title: "An internal platform",
              body: "The system your team actually works in — roles and permissions, workflows, reporting, integrations. This is what replaces the spreadsheet. Usually eight to twelve weeks.",
            },
          ],
        },
        {
          id: "how",
          title: "How we build it",
          body: [
            "For content-led sites we build a statically rendered site: the pages are generated ahead of time so they load immediately, cost almost nothing to host, and have no database to attack. This website is one of them.",
            "For platforms we use a Node.js API with PostgreSQL behind it, role-based access with JWT, and file storage on AWS S3. Deployment is Docker and Nginx, or a managed platform where that is simpler. Xera Lab, in our portfolio, is exactly this shape: a customer portal and an admin dashboard on one shared API.",
            "Search and speed are part of the build rather than a later pass: real page titles, structured data, correct headings, images sized to what they render at, and Core Web Vitals checked before launch.",
          ],
          list: [
            "Statically rendered sites for speed and search",
            "Node.js + PostgreSQL APIs with role-based access",
            "Flutter Web where a portal shares logic with a mobile app",
            "AWS S3, Docker Compose and Nginx deployment",
            "Analytics and conversion tracking configured in your accounts",
          ],
        },
        {
          id: "deliverables",
          title: "What you get",
          list: [
            "A live site or platform on hosting registered to you.",
            "The full source code, in your own repository.",
            "Every third-party account — hosting, domain, analytics, storage — in your company's name.",
            "A written handover of how to run it, deploy it and change it.",
            "Twelve months of support, with small changes free for the first three.",
          ],
        },
        {
          id: "cost",
          title: "What it costs",
          body: [
            "A fixed quote in USD after a free scope call. The main driver is not page count but how many user roles the system has and how much of your business logic it has to encode.",
            "A brochure site and a multi-role platform are different orders of magnitude, so the scope call exists to tell you which one you actually need — sometimes it is the cheaper one.",
          ],
        },
      ],
      faq: [
        {
          q: "Can I edit the content myself afterwards?",
          a: "Yes. For a content-led site we either wire up a content editor or hand over a simple structure you can change directly, and we show you how. For a platform, content and users are managed in the admin dashboard we build for you.",
        },
        {
          q: "Do you do SEO?",
          a: "The technical side, yes, and it is part of the build rather than an add-on: page titles and descriptions, heading structure, structured data, sitemaps, hreflang for multilingual sites, image sizing and Core Web Vitals. Ongoing content and link building is a different discipline and we will say so rather than pretend otherwise.",
        },
        {
          q: "Can you make the site multilingual, including Arabic?",
          a: "Yes, including full right-to-left layout, Arabic typography and per-language URLs and metadata. This website runs in five languages with a true right-to-left Arabic version.",
        },
        {
          q: "Who pays for hosting?",
          a: "You do, directly, in your own account — so you always see the real cost and never lose access. We set it up, tell you what it will cost per month, and include the estimate in the quote.",
        },
      ],
      cta: {
        title: "Get a fixed quote for your site or platform",
        body: "Tell us what the business does today and where it breaks. You get a recommendation on scope and a written price in USD.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your web development page and would like a free quote for a website or platform.",
      },
    },

    "mvp-development": {
      meta: {
        title: "MVP Development for Founders | Desert Launch, Cairo",
        description:
          "Build the smallest version that proves your idea with real users. Fixed quote, one to two months, and an architecture that survives the next features.",
      },
      breadcrumb: "MVP development",
      h1: "MVP development: the smallest version that proves the idea",
      lead: "A first version built to be used, not demoed. Small enough to reach real users in one to two months, and structured well enough that the next three features do not require starting again.",
      schemaDescription:
        "MVP development for founders and new products: scoping the smallest useful version, building it in one to two months on a maintainable architecture, and putting it in front of real users. Delivered from Cairo, Egypt.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A founder with an idea and a budget that has to prove something before it grows.",
            "An existing business testing a new line without betting the whole operation on it.",
            "Anyone who has been quoted for an 18-month build of a product nobody has used yet.",
          ],
        },
        {
          id: "definition",
          title: "What we mean by minimum",
          body: [
            "An MVP is not a cheaper version of the full product. It is the smallest thing that answers one question you cannot answer any other way — usually whether people will actually use it, and whether they will pay.",
            "So the first job of the scope call is subtraction. We take the feature list you arrive with and ask, for each item, what you would learn if it were missing. Most lists lose half their weight and none of their meaning.",
            "The half we cut is written down rather than deleted, because it becomes the roadmap for the version after this one.",
          ],
        },
        {
          id: "deliverables",
          title: "What you get",
          cards: [
            {
              title: "A product real people can use",
              body: "Deployed, on your accounts, with accounts and payments if the question you are testing needs them.",
            },
            {
              title: "An architecture that survives",
              body: "Clean structure and a real database schema, so version two is an extension rather than a rewrite. This is the part cheap MVPs skip and the part that costs most later.",
            },
            {
              title: "Measurement from day one",
              body: "Analytics and conversion events wired up before launch, so you learn something from the first hundred users instead of guessing.",
            },
            {
              title: "A written next step",
              body: "What we cut, what the data says, and what we would build next — yours to keep, whoever builds it.",
            },
          ],
        },
        {
          id: "timeline",
          title: "Timeline",
          list: [
            "Week 1 — scope call and subtraction. A written definition of the one question this version answers.",
            "Week 2 — screens and flows, agreed before any code.",
            "Weeks 3–7 — build in two or three milestones, each ending in something you can open.",
            "Week 8 — launch to your first users, with measurement running.",
          ],
        },
        {
          id: "cost",
          title: "What it costs",
          body: [
            "A fixed quote in USD after the scope call, and the scope call is where the price is actually set — a smaller question is a smaller build.",
            "We would rather quote a build we can finish than win the work and run over. If your budget and your scope do not meet, you will hear that on the call.",
          ],
        },
      ],
      faq: [
        {
          q: "Will I own the code if I take it to another team later?",
          a: "Yes, entirely — code, intellectual property and every account. We would rather you keep the option, and the code is written to be readable by whoever comes next.",
        },
        {
          q: "What if the MVP shows the idea does not work?",
          a: "Then it did its job for a fraction of the cost of finding out after a full build. You still own a working product and a written record of what the users did.",
        },
        {
          q: "Do you take equity instead of payment?",
          a: "No. We quote a fixed price and deliver against it. That keeps the incentives simple and means we can tell you to build less.",
        },
        {
          q: "Can the MVP become the real product?",
          a: "That is the intention. It is built on the architecture we would use anyway, which is why we do not ship throwaway prototypes.",
        },
      ],
      cta: {
        title: "Scope your MVP in one call",
        body: "Bring the idea and the feature list. You leave with a shorter list, a fixed price and a date.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your MVP page and would like to scope an MVP.",
      },
    },
  },

  cases: {
    "q-fight-gym": {
      meta: {
        title: "Q-Fight Gym: Booking App for a Muay Thai Gym in Doha",
        description:
          "How Desert Launch built the official iOS and Android app for a professional Muay Thai gym in Qatar, with plans, trainer selection and in-app booking.",
      },
      breadcrumb: "Q-Fight Gym",
      h1: "Q-Fight Gym: a booking app for a professional Muay Thai gym in Doha",
      lead: "The official app for a Qatari gym whose training programme is led by Thai world-title fighters. Members browse plans, choose a trainer and book personal or group sessions without calling the front desk.",
      facts: [
        { label: "Sector", value: "Fitness / martial arts" },
        { label: "Market", value: "Doha, Qatar" },
        { label: "Platforms", value: "iOS and Android" },
        { label: "Stack", value: "Flutter, Firebase, payment gateway" },
        { label: "Status", value: "Live on the App Store and Google Play" },
        { label: "Role", value: "Design and full build" },
      ],
      sections: [
        {
          id: "context",
          title: "Context",
          body: [
            "Q-Fight Gym is a professional Muay Thai gym in Doha with a training programme led by Thai world-title fighters. Its members are a mix of serious competitors and people training a few times a week, and the gym sells both group classes and one-to-one sessions with specific trainers.",
            "That mix is exactly what makes scheduling hard. A group class has a capacity; a personal session has a particular trainer's availability; and both change week to week.",
          ],
        },
        {
          id: "problem",
          title: "The problem",
          body: [
            "Bookings ran through the front desk and messaging. Every schedule change had to be communicated by hand, every booking was a conversation, and members had no single place to see what they had signed up for.",
            "For a gym selling memberships, that friction sits directly on revenue: a member who cannot easily see and book the week ahead trains less, and a member who trains less renews less.",
          ],
        },
        {
          id: "solution",
          title: "What we built",
          list: [
            "Plan browsing, so a prospective member can see what is on offer before joining.",
            "Trainer selection, so a personal session is booked with a specific coach rather than a generic slot.",
            "Personal and group session booking, with the class schedule inside the app.",
            "In-app payment through an integrated gateway.",
            "Push notifications for schedule changes and upcoming sessions.",
          ],
          body: [
            "The app is built in Flutter from a single codebase and published to both the App Store and Google Play. Firebase handles authentication, data and notifications, which suited a product whose scheduling data changes often and has to reach every member's phone quickly.",
          ],
        },
        {
          id: "outcome",
          title: "Where it stands",
          body: [
            "The app is published on the App Store and Google Play and in daily use by an operating business. The store links are on this page — the most useful thing we can tell you about this project is that you can install it yourself.",
            "We have not published usage numbers here because they belong to the client and we do not have permission to share them. Where a figure appears anywhere on this site, it is one we can point at.",
          ],
        },
      ],
      attribution:
        "Designed and built by Abdullah Mohamed, founder of Desert Launch.",
      cta: {
        title: "Want something like this for your business?",
        body: "Booking, memberships, schedules and payments in one app your customers actually open.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read the Q-Fight Gym case study and want something similar for my business.",
      },
    },

    "al-muslim": {
      meta: {
        title: "Al-Muslim: A Daily Companion App on iOS and Android",
        description:
          "How Desert Launch built Al-Muslim — Quran, adhkar, prayer times and qibla — as a bilingual Flutter app designed for daily use rather than a single install.",
      },
      breadcrumb: "Al-Muslim",
      h1: "Al-Muslim: a daily companion app built for retention",
      lead: "Quran, adhkar and duas, accurate prayer times and qibla direction, with reminders that put the app into the rhythm of the day. A consumer product where the hard problem is not features but coming back tomorrow.",
      facts: [
        { label: "Sector", value: "Consumer / lifestyle" },
        { label: "Platforms", value: "iOS and Android" },
        { label: "Languages", value: "Arabic and English, full right-to-left" },
        { label: "Stack", value: "Flutter, push notifications, geolocation" },
        { label: "Status", value: "Live on the App Store and Google Play" },
        { label: "Role", value: "Design and full build" },
      ],
      sections: [
        {
          id: "context",
          title: "Context",
          body: [
            "There is no shortage of apps in this category, and most of them are abandoned within a week of installing. The category is not short of features; it is short of products that are pleasant to open five times a day.",
            "So the brief was a retention problem dressed as a content problem.",
          ],
        },
        {
          id: "problem",
          title: "The problem",
          list: [
            "Prayer times have to be right for the user's exact location, or the app is worse than useless.",
            "Reminders have to arrive at the right moment without becoming noise the user switches off.",
            "The reading experience has to be comfortable in Arabic — which means real typography and a genuine right-to-left layout, not a mirrored English screen.",
            "All of it has to work when the phone has no signal.",
          ],
        },
        {
          id: "solution",
          title: "What we built",
          body: [
            "Prayer times are computed from the device's location, so they stay correct as the user travels rather than being pinned to a city chosen at install. Qibla direction uses the same signal.",
            "Notifications are tied to those computed times rather than fixed clock times, which is what makes them feel accurate rather than approximate — the difference between a reminder that is trusted and one that is disabled in week two.",
            "The Arabic interface is right-to-left throughout, with Arabic typography rather than a Latin font asked to render Arabic script. The English interface is a first-class version of the same product, not a fallback.",
          ],
          list: [
            "Quran reader, adhkar and duas",
            "Location-based prayer times and qibla direction",
            "Smart reminders tied to computed times",
            "Bilingual Arabic and English with full right-to-left layout",
            "Flutter, one codebase, published to both stores",
          ],
        },
        {
          id: "outcome",
          title: "Where it stands",
          body: [
            "Al-Muslim is published on the App Store and Google Play. Both links are on this page and on the home page, and the fastest way to judge the work is to install it.",
          ],
        },
      ],
      attribution:
        "Designed and built by Abdullah Mohamed, founder of Desert Launch.",
      cta: {
        title: "Building a consumer app?",
        body: "Retention, notifications, offline behaviour and bilingual interfaces are the parts that decide whether it survives the first week.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read the Al-Muslim case study and want to build a consumer mobile app.",
      },
    },

    ezhal: {
      meta: {
        title: "Ezhal: Three Apps, One Car-Service Platform",
        description:
          "How Desert Launch built a car-service platform serving customers, field technicians and managers — three role-specific apps from a single Flutter codebase.",
      },
      breadcrumb: "Ezhal",
      h1: "Ezhal: three role-specific apps from one codebase",
      lead: "A car-service platform where the customer books, the technician works the job and the manager watches it happen — each with their own app, all built from a single Flutter codebase.",
      facts: [
        { label: "Sector", value: "Car servicing / field operations" },
        { label: "Audiences", value: "Customers, field technicians, managers" },
        { label: "Platforms", value: "iOS and Android" },
        { label: "Stack", value: "Flutter, Riverpod, Firebase, MyFatoorah, Stripe" },
        { label: "Status", value: "Delivered to the client" },
        { label: "Role", value: "Architecture and full build" },
      ],
      sections: [
        {
          id: "context",
          title: "Context",
          body: [
            "Field service businesses have a structural problem: the three people involved in one job need three completely different interfaces. The customer wants to book and know when someone is arriving. The technician wants today's route and the ability to close a job with one hand. The manager wants to see everything at once.",
            "Building three apps means three codebases, three release cycles and three places for the same bug to live.",
          ],
        },
        {
          id: "problem",
          title: "The problem",
          body: [
            "The business needed all three, but not three separate products. Every one of them talks to the same bookings, the same technicians and the same payments — so duplicating that logic across three apps would have tripled the cost of every future change.",
          ],
        },
        {
          id: "solution",
          title: "What we built",
          body: [
            "One Flutter codebase with a shared domain layer and three role-specific shells on top. The booking rules, the wallet and the payment flow are written once; what changes per role is which screens exist and what each role is allowed to do.",
            "State is managed with Riverpod, which keeps that shared logic testable and stops the three shells from drifting into three subtly different implementations of the same rule.",
            "On top of the core there is a loyalty layer the business actually sells on: subscriptions, a wallet, points, stamps and Apple Wallet passes, so a customer can keep a service pass on the lock screen.",
          ],
          list: [
            "Customer app — booking, subscriptions, wallet, points and stamps",
            "Technician app — job queue and live location tracking",
            "Manager app — oversight across technicians and bookings",
            "Payments through MyFatoorah and Stripe",
            "Apple Wallet passes for service subscriptions",
          ],
        },
        {
          id: "outcome",
          title: "Where it stands",
          body: [
            "Ezhal was delivered to the client as a private product; it is not published on a public store, so there is no link to install. The screenshot on this page is from the platform itself.",
          ],
        },
      ],
      attribution:
        "Architected and built by Abdullah Mohamed, founder of Desert Launch.",
      cta: {
        title: "Have more than one kind of user?",
        body: "Customers, staff and managers can share one system without becoming three separate projects.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read the Ezhal case study and want to plan a multi-role platform.",
      },
    },

    "xera-lab": {
      meta: {
        title: "Xera Lab: A Dental Case Management Platform",
        description:
          "How Desert Launch built a full-stack dental case management platform — a customer portal and admin dashboard on a Node.js and PostgreSQL API.",
      },
      breadcrumb: "Xera Lab",
      h1: "Xera Lab: a dental case management platform",
      lead: "A customer portal and an admin dashboard on one Node.js API, built and delivered to the client as a private production system. The kind of platform that replaces a shared folder and a spreadsheet.",
      facts: [
        { label: "Sector", value: "Dental laboratory" },
        { label: "Type", value: "Customer portal and admin dashboard" },
        { label: "Stack", value: "Flutter Web, Node.js, PostgreSQL, Docker, AWS" },
        { label: "Access", value: "Role-based with JWT" },
        { label: "Status", value: "Delivered to the client, private system" },
        { label: "Role", value: "Architecture and full build" },
      ],
      sections: [
        {
          id: "context",
          title: "Context",
          body: [
            "A dental lab sits between clinics and technicians. A case arrives from a dentist with photographs, measurements and a deadline; it moves through several stages inside the lab; and the dentist wants to know where it is without phoning.",
            "Before a system exists, that coordination lives in email attachments, a shared drive and someone's memory.",
          ],
        },
        {
          id: "problem",
          title: "The problem",
          list: [
            "Cases and their files had no single home, so the current version of a file was whatever was most recently emailed.",
            "Clinics had no way to check status themselves, so every update was an interruption.",
            "Staff and customers needed to see very different things, which meant access rules, not just screens.",
          ],
        },
        {
          id: "solution",
          title: "What we built",
          body: [
            "One platform with two faces on a shared Node.js API: a portal where the customer submits and tracks their own cases, and an admin dashboard where the lab moves cases through their stages.",
            "PostgreSQL holds the case records, because this is relational data with real integrity requirements — a case belongs to a customer, has stages, and must not be visible to the wrong account. Access is enforced by role with JWT rather than by hiding buttons in the interface.",
            "Case files are uploaded to AWS S3, so photographs and scans do not live in the database or on a single machine. The whole system deploys with Docker Compose behind Nginx.",
          ],
          list: [
            "Customer portal for case submission and status tracking",
            "Admin dashboard for the lab's internal workflow",
            "Node.js and PostgreSQL API with JWT role-based access",
            "AWS S3 file storage for case photographs and scans",
            "Docker Compose and Nginx deployment",
          ],
        },
        {
          id: "outcome",
          title: "Where it stands",
          body: [
            "Xera Lab runs as a private production system for its client. There is no public URL to show, which is why this page describes the architecture rather than the interface.",
          ],
        },
      ],
      attribution:
        "Architected and built by Abdullah Mohamed, founder of Desert Launch.",
      cta: {
        title: "Replacing a spreadsheet with a system?",
        body: "Portals, dashboards, roles and file handling — the parts that make an internal system trustworthy.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read the Xera Lab case study and want to build an internal platform.",
      },
    },
  },

  about: {
    meta: {
      title: "About Desert Launch | Software Studio in Cairo, Egypt",
      description:
        "Desert Launch is an independent software studio in Cairo. One senior engineer designs and builds every project, with a fixed quote and full code ownership.",
    },
    breadcrumb: "About",
    h1: "About Desert Launch",
    lead: "An independent software studio in Cairo, Egypt. Every project is designed and built by one senior engineer, which is the whole point rather than a limitation to apologise for.",
    sections: [
      {
        id: "what",
        title: "What Desert Launch is",
        body: [
          "Desert Launch is a software studio based in Cairo. It builds mobile apps, web platforms, MVPs and internal business systems for companies in Egypt, the Gulf, Europe and the United States.",
          "It is deliberately small. Abdullah Mohamed founded it and builds every project personally — the person you message on WhatsApp is the person who writes the code. If a project ever needs a specialist, you are told who and why before they start.",
          "That size sets the boundaries honestly. We take on a small number of projects at a time, and we will tell you when a piece of work is a poor fit for a studio this size rather than take it and stretch.",
        ],
      },
      {
        id: "founder",
        title: "Who builds your product",
        body: [
          "Abdullah Mohamed is a senior software engineer with more than five years shipping production web and mobile products, working with clients across Egypt, the Gulf, Europe and the US. He works in English and Arabic.",
          "The portfolio on this site was designed and built by him — some of it as Desert Launch client work, some during earlier senior engineering roles, and one product (Voicers) in-house. We say which is which rather than letting a logo wall imply that every one of them was a Desert Launch engagement.",
        ],
      },
      {
        id: "how",
        title: "How we work",
        list: [
          "A free scope call first. You describe the problem; we tell you what it would take, and whether a smaller build gets you there.",
          "A fixed price in USD, in writing, before you commit. Never hourly billing.",
          "Three or four milestones. 30% upfront, the rest per milestone, and a milestone is not accepted until you say it is.",
          "Everything in your name from day one: code, intellectual property, hosting, domains and store accounts.",
          "Twelve months of free support after launch, with small changes free for the first three.",
        ],
      },
      {
        id: "what-we-dont",
        title: "What we do not do",
        list: [
          "Hourly billing, or a quote that grows every month.",
          "Handing your project to a subcontractor you never meet.",
          "Holding your accounts, your domain or your code as leverage.",
          "Taking work we cannot finish well, to keep a pipeline full.",
        ],
      },
      {
        id: "languages",
        title: "Languages and hours",
        body: [
          "Project work happens in English or Arabic. This site is translated into French, Spanish and German so it can be found and understood in those markets, but the conversation, the documents and the delivery are in English or Arabic — we would rather say that plainly than promise a language we cannot support properly.",
          "We work from Cairo, which is UTC+2 in winter and UTC+3 in summer. That is within an hour of every Gulf capital and one to two hours from most of Europe. First replies come within 12 hours and usually much faster.",
        ],
      },
    ],
    cta: {
      title: "Start with a free scope call",
      body: "No commitment and no pitch. Describe the problem, and you will get an honest answer about what it takes.",
      label: "Get a Free Quote on WhatsApp",
      waMessage: "Hi Desert Launch, I read your about page and would like a free scope call.",
    },
  },

  privacy: {
    meta: {
      title: "Privacy | Desert Launch",
      description:
        "What this website collects: no cookies, no forms stored, and cookieless analytics. What happens to what you send us on WhatsApp or by email.",
    },
    breadcrumb: "Privacy",
    h1: "Privacy",
    lead: "This is a short page because this website does very little with your data. Where something does happen, it is described here in plain terms.",
    sections: [
      {
        id: "site",
        title: "What this website collects",
        body: [
          "This site is a set of static pages. It has no database, no user accounts and no server that stores anything you type.",
          "It sets no cookies of its own, and it uses no advertising or cross-site tracking.",
        ],
        list: [
          "Analytics: we use a cookieless, privacy-friendly analytics service provided by our host, Vercel. It records page views and anonymous events such as which call to action was clicked. It does not set cookies and does not build a profile of you across sites.",
          "Campaign parameters: if you arrive from a campaign link, the utm_ values in that link are kept in your browser's session storage so we can tell which campaign a message came from. They are deleted when you close the tab, and never leave your browser except as part of an anonymous analytics event.",
          "Hosting logs: our host, Vercel, processes standard request data such as IP address for security and reliability. That is Vercel's processing, under its own policy.",
        ],
      },
      {
        id: "form",
        title: "The contact form",
        body: [
          "The form on this site does not submit anything to us. It composes a message from what you type and opens it in WhatsApp or your own email application, where you decide whether to send it.",
          "Until you press send in that application, nothing you typed has left your device.",
        ],
      },
      {
        id: "contact",
        title: "What happens when you contact us",
        body: [
          "If you message us on WhatsApp or by email, we keep that conversation and the details in it so we can quote and deliver the work. We use it for that and nothing else. We do not sell it, and we do not add you to a mailing list.",
          "If we work together, project material is kept for as long as we support the product and for our own records afterwards. If you would like your enquiry deleted, ask and we will delete it.",
          "WhatsApp messages are carried by WhatsApp and email by our email provider; both process the message under their own policies.",
        ],
      },
      {
        id: "rights",
        title: "Your rights and how to reach us",
        body: [
          "You can ask what we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to abdullah@desertlaunch.dev and we will answer.",
          "Desert Launch is based in Cairo, Egypt. If you are contacting us from the EU or the UK, the lawful basis for handling your enquiry is our legitimate interest in responding to it, and later the performance of a contract if we work together.",
        ],
      },
      {
        id: "changes",
        title: "Changes",
        body: [
          "If this page changes materially we will update the date shown at the bottom of it. There is no version history to consult because there is very little to change.",
        ],
      },
    ],
  },

  terms: {
    meta: {
      title: "How We Work: Engagement Terms | Desert Launch",
      description:
        "Fixed quotes, milestone payments, code and IP ownership, one year of support, and what is not included. The commercial terms of a Desert Launch project.",
    },
    breadcrumb: "Engagement terms",
    h1: "How we work: engagement terms",
    lead: "The commercial shape of a Desert Launch project, written down before you ask. A signed proposal for your specific project always takes precedence over this page.",
    sections: [
      {
        id: "quote",
        title: "Quoting",
        list: [
          "Every project starts with a free scope call. There is no charge and no obligation.",
          "You then receive a fixed price in USD, in writing, with a defined scope and a milestone plan. We do not bill by the hour.",
          "The quote is valid for 30 days. Nothing starts until you accept it in writing.",
          "If you tell us the budget you have, we will tell you honestly what fits inside it — including when the answer is nothing worth building.",
        ],
      },
      {
        id: "payment",
        title: "Payment",
        list: [
          "Projects are split into three or four milestones.",
          "30% is paid upfront; the remainder is paid per delivered milestone.",
          "A milestone is delivered as working software you can open and use, not as a progress report. It is not accepted, and not invoiced, until you accept it.",
          "Prices are in USD and exclude any taxes or transfer fees applicable in your own country.",
        ],
      },
      {
        id: "scope",
        title: "Changes to scope",
        body: [
          "Scope changes are normal; surprise invoices are not. If you ask for something outside the agreed scope, we tell you what it would cost and how it affects the date, in writing, and you decide before any work on it starts.",
          "Small adjustments within the spirit of the agreed scope are simply done.",
        ],
      },
      {
        id: "ownership",
        title: "Ownership",
        list: [
          "You own the source code and the intellectual property in the work, transferred on final payment.",
          "Hosting, domain, storage, analytics and app store developer accounts are created in your name from the start, not transferred later.",
          "We may describe the work publicly and show screenshots, unless you ask us not to. If you would rather the project stayed private, say so and it will not appear on this site.",
          "Third-party libraries keep their own open-source licences, which we list on handover.",
        ],
      },
      {
        id: "support",
        title: "Support after launch",
        list: [
          "Twelve months of free support and maintenance: bug fixes, operating-system and app-store compatibility updates, and keeping the product running.",
          "In the first three months, small changes and updates are included as well.",
          "Support does not cover new features, redesigns, or problems caused by a third-party service you have changed without us.",
          "After the twelve months, an ongoing arrangement is optional. Nothing stops working if you do not take one.",
        ],
      },
      {
        id: "running-costs",
        title: "Running costs",
        body: [
          "Hosting and third-party services are billed to your own accounts, directly, so you always see the real cost and never lose access to them. Typical costs are a small monthly bill for hosting or Firebase, plus the Apple Developer Program at 99 USD per year and Google Play's one-time 25 USD registration if you are publishing an app.",
          "We estimate these in the quote so they are not a surprise after launch.",
        ],
      },
      {
        id: "confidentiality",
        title: "Confidentiality",
        body: [
          "We will sign your NDA before the scope call, or provide a simple mutual one. Either way we treat what you tell us as confidential.",
          "We do not need access to your data or your accounts in order to quote — a description of the problem is enough.",
        ],
      },
      {
        id: "ending",
        title: "If it is not working",
        body: [
          "Either side can end an engagement between milestones. You pay for accepted milestones only, and you receive everything produced up to that point: code, designs and accounts, all of which are already in your name.",
          "We would rather you leave with your work than stay in a project neither side believes in.",
        ],
      },
    ],
    cta: {
      title: "Any of this you want to discuss?",
      body: "These are the defaults, not an ultimatum. Ask on WhatsApp and you will get a straight answer.",
      label: "Get a Free Quote on WhatsApp",
      waMessage:
        "Hi Desert Launch, I read your engagement terms and have a question.",
    },
  },
};
