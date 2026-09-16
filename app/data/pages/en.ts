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
    "ui-ux-design": {
      meta: {
        title: "UI/UX Design for Apps and Web Platforms | Desert Launch",
        description:
          "Screens and flows designed and agreed before anyone writes code. You approve a clickable prototype, then the same person builds exactly what you signed off.",
      },
      breadcrumb: "UI/UX design",
      h1: "UI/UX design for apps and web platforms",
      lead: "Screens and flows designed, reviewed and agreed before development starts — so the booking, the order or the sign-up actually gets finished, and nobody discovers a wrong assumption three weeks into a build you are already paying for.",
      schemaDescription:
        "UI and UX design for mobile apps and web platforms: user flows, wireframes, a clickable prototype and a complete screen set, including Arabic right-to-left layouts, delivered from Cairo, Egypt.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A business about to commission a build, that would rather see it before paying for it.",
            "A product where users start something — a booking, an order, a sign-up — and abandon it halfway.",
            "A team with a feature list and no agreement yet on what the screens actually are.",
            "An app that needs an Arabic interface that reads properly, rather than an English one flipped around.",
          ],
        },
        {
          id: "what-you-get",
          title: "What you get",
          cards: [
            {
              title: "The flows, before the screens",
              body: "Every path a person can take through the product, written down and agreed. Removing a step at this stage costs a conversation. Removing it after the build costs a rebuild.",
            },
            {
              title: "A clickable prototype",
              body: "Screens you tap through on your own phone, in your own hand. You approve something you have used, not a picture of it in a slide.",
            },
            {
              title: "A complete screen set",
              body: "Including the states a demo never shows: empty, loading, error, no connection, and the long names and long Arabic strings that quietly break a layout.",
            },
            {
              title: "Arabic and right-to-left, designed",
              body: "If the product is bilingual, the Arabic layout is designed rather than mirrored — typography, numerals, dates and the direction the eye actually travels.",
            },
          ],
        },
        {
          id: "how",
          title: "How the work runs",
          body: [
            "We start from the job the user is trying to finish, not from a list of screens. A gym member wants to be training on Tuesday evening; a lab customer wants to know whether a case is ready. The screens fall out of that, and the ones that do not serve it get cut before they cost anything.",
            "You see the flows first and say where they are wrong — you know your business and we do not. Then the screens are built up from those flows, reviewed in passes, and assembled into a prototype you can use end to end.",
            "Nothing goes into development until you have signed off what the product is. That signature is what makes a fixed quote possible: the price stops being a guess about scope and becomes a price for a thing that already exists on screen.",
          ],
        },
        {
          id: "on-its-own",
          title: "Design without the build",
          body: [
            "Design can be bought on its own. You get the source files and the exported screens, and you own them — any competent developer or agency can implement from them, including one you have not hired yet.",
            "That is deliberate. A design you cannot take anywhere is leverage, not a deliverable, and we would rather win the build because the design was good than because you were locked in.",
          ],
        },
      ],
      faq: [
        {
          q: "Can we buy the design without the development?",
          a: "Yes. You get the design source files and the exported screens, and they are yours — implement them with any team you like. Most clients go on to the build, but nothing in the arrangement requires it.",
        },
        {
          q: "We already have a designer. Can you build from their work?",
          a: "Yes, and it is a common way to start. Send us what exists and we will tell you honestly what is ready to build and what still needs decisions — usually the empty, error and loading states, which are the ones that get skipped.",
        },
        {
          q: "Do you design Arabic and right-to-left interfaces?",
          a: "Yes, and it is designed rather than mirrored. Arabic layout is not an English screen reversed: the typography, the numerals, the dates and the way a line is scanned all change. Al-Muslim, ICCD Hub and Voicers all ship bilingual interfaces, and this website is another one.",
        },
        {
          q: "How long does the design stage take?",
          a: "One to three weeks for most products, depending on how many roles and flows there are. A single-audience app sits at the short end; a platform with three different kinds of user at the long end.",
        },
        {
          q: "What happens if we change our minds during design?",
          a: "That is exactly what this stage is for, and changing your mind here is free. It is the reason design happens before the build rather than during it.",
        },
      ],
      cta: {
        title: "See it before you build it",
        body: "Describe the product and who uses it. You get a scope summary, and a fixed price for the design stage on its own if that is where you want to start.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your UI/UX design page and would like to talk about designing a product.",
      },
    },

    "rebuilds-and-modernization": {
      meta: {
        title: "Rebuild or Take Over an Existing App | Desert Launch, Cairo",
        description:
          "Your app is slow, broken, or the developer stopped replying. We read the code first and give you a written verdict — fix, refactor or rebuild — before any work is agreed.",
      },
      breadcrumb: "Rebuilds & modernization",
      h1: "Rebuilds and modernization: taking over an existing product",
      lead: "A slow app, a platform nobody can safely change any more, or a developer who stopped replying. We start by reading what exists and giving you a written verdict — fix it, refactor it or rebuild it — so the decision is yours and it rests on evidence instead of a sales pitch.",
      schemaDescription:
        "Taking over, rebuilding and modernizing existing mobile apps and web platforms, starting with a written code review and verdict, delivered from Cairo, Egypt for clients in Egypt, the Gulf, Europe and the US.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "An app or platform that has become slow, unstable, or expensive to change.",
            "A product whose developer or agency stopped replying, left, or handed over nothing you can use.",
            "A system that still works but cannot be extended — every new feature takes longer than the last one did.",
            "A business that owns a codebase and genuinely does not know whether it is worth keeping.",
          ],
        },
        {
          id: "verdict",
          title: "It starts with a verdict, not a quote",
          body: [
            "Nobody can price a rebuild honestly without reading what is already there. So the first piece of work is a review, and what you get out of it is a written document: what the code does well, what is actually wrong, what it would take to fix, and what it would take to replace.",
            "The document is yours. If it says the right move is to repair what you have, that is what it says, and you can hand it to your current developer and never speak to us again. That has to be a real possibility or the review is worthless.",
            "The review is scoped and priced on the free call, in writing, before it starts — like every other piece of work here. You can stop when you have the document.",
          ],
        },
        {
          id: "what-we-check",
          title: "What the review covers",
          list: [
            "Architecture: whether the structure can carry the next year of features, or fights every one of them.",
            "The data model, which is usually where an expensive problem is hiding.",
            "Dependencies and platform versions — what is out of date, what is unsupported, and what will stop working at the next OS or store deadline.",
            "Security basics: how accounts, permissions and secrets are handled.",
            "Deployment and hosting: whether anyone can ship a change safely, and what happens when it goes wrong.",
            "Ownership: whose name the code, the repository, the hosting and the store accounts are actually in.",
          ],
        },
        {
          id: "ownership",
          title: "Getting your accounts back in your own name",
          body: [
            "The most common damage in an abandoned project is not the code. It is that the App Store account, the Google Play listing, the domain, the hosting and the database sit in someone else's name, and that someone is not answering.",
            "Part of taking a product over is putting all of it back in your name, and keeping it that way. Every account we create for you is created as yours from the start — that is the standing rule here, not a concession for rescue work.",
          ],
        },
        {
          id: "then-what",
          title: "Then the work itself",
          body: [
            "Once you have decided, the work runs like any other project: a fixed price in USD, three or four milestones, working software you can open at each one, and nothing invoiced until you accept it.",
            "A rescue usually starts with stabilising what is live — stopping the bleeding — before anything is improved. Users do not care that a rewrite is coming; they care that the thing is broken today.",
            "Twelve months of free support follows launch, exactly as it does on a new build.",
          ],
        },
      ],
      faq: [
        {
          q: "We do not have the source code. Is that the end of it?",
          a: "Not necessarily, but it changes the answer. The first step is establishing what you actually control — the store listings, the domain, the database, the hosting — because those often matter more than the code. If the code is genuinely gone, a rebuild is the only honest route, and we will tell you that plainly rather than bill you to find out slowly.",
        },
        {
          q: "Will you just tell us to rebuild, because rebuilding is the bigger job?",
          a: "It is a fair suspicion, so the verdict is written and it shows its reasoning. If repairing is cheaper, the document says so and explains why, and you are free to take it to your current team. We would rather lose a rebuild than be the studio that recommends one to everybody.",
        },
        {
          q: "Can you work with the developer who built it?",
          a: "Yes, where they are still involved and willing. A review is not an accusation — plenty of code is reasonable work that simply outgrew its original scope, and the fastest route is often to tell the existing developer exactly what to change.",
        },
        {
          q: "How long does taking over a product take?",
          a: "The review is a matter of days. The work after it starts from two weeks for a stabilisation and runs to a full build timeline for a genuine rebuild — you get a milestone plan with a date before anything begins.",
        },
        {
          q: "Will you sign an NDA before looking at our code?",
          a: "Yes. Send yours before the call, or we will provide a simple mutual one. Reading a private codebase without one is not something we would ask you to agree to.",
        },
      ],
      cta: {
        title: "Get a verdict on what you already have",
        body: "Tell us what exists and what is going wrong with it. You get a written answer on whether to fix it or replace it — and the document is yours either way.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your rebuilds page. I have an existing product and would like a verdict on it.",
      },
    },

    "technical-consulting": {
      meta: {
        title: "Technical Consulting & Architecture Review | Desert Launch",
        description:
          "A second opinion before you sign, an architecture review before you scale, or a delivery plan any team can build from. Written, yours to keep, two to five days.",
      },
      breadcrumb: "Technical consulting",
      h1: "Technical consulting and architecture review",
      lead: "A second opinion before you commit money to a build, an architecture review before your product takes more load than it was designed for, or a delivery plan you can hand to whoever ends up doing the work. The output is a written document you own — including when it recommends someone other than us.",
      schemaDescription:
        "Independent technical consulting, architecture review, proposal review and delivery planning for businesses commissioning software, delivered from Cairo, Egypt as a written recommendation the client owns.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A non-technical founder about to sign an agency contract, who wants it read by an engineer first.",
            "A business that has been quoted wildly different prices for the same brief and cannot tell which one is wrong.",
            "A product about to take more users, more data or more load than it was built for.",
            "A company deciding between building in-house, hiring, or commissioning the work outside.",
          ],
        },
        {
          id: "what-you-get",
          title: "What you get",
          cards: [
            {
              title: "A written recommendation",
              body: "Not a call you have to remember afterwards. A document with the options, the reasoning, and what each one costs you in time and in money.",
            },
            {
              title: "A quote read line by line",
              body: "If you have a proposal in hand, you get it read properly: what is missing, what is padded, what is priced as an extra that should not be, and which questions to put back to them.",
            },
            {
              title: "An architecture someone can build from",
              body: "The system described clearly enough that a competent team — any competent team — could pick it up and start.",
            },
            {
              title: "A straight answer on build-or-buy",
              body: "Sometimes the right answer is an existing product and a week of configuration, and custom software would be a waste of your money. You will be told that.",
            },
          ],
        },
        {
          id: "independence",
          title: "The conflict, named",
          body: [
            "We also quote for builds. That is a conflict of interest and it is worth saying out loud rather than hoping you do not notice.",
            "The way it is handled is that the document has to stand on its own. It names the options that do not involve us, it explains the reasoning rather than asserting a conclusion, and it is written so you can hand it to another team and have it still be useful. If a recommendation only makes sense when we are the ones building, it is not advice.",
            "There is no obligation to build with us afterwards, and no discount for doing so.",
          ],
        },
        {
          id: "how-it-runs",
          title: "How it runs",
          list: [
            "A free scope call first, to agree what question you actually want answered.",
            "A fixed price in USD for the consulting work itself, in writing, before it starts.",
            "Two to five days, depending on how much there is to read.",
            "A written document at the end, and a call to walk through it if you want one.",
          ],
        },
      ],
      faq: [
        {
          q: "Is the consulting free?",
          a: "The scope call is free — that is where we work out what you need. The consulting work itself is a paid, fixed piece of work, priced in writing before it starts. You are buying an engineer's time to read, think and write something down.",
        },
        {
          q: "Do we have to build with you afterwards?",
          a: "No, and the document is written on the assumption that you might not. You own it and you can take it anywhere. If the honest recommendation is a team other than us, that is what it will say.",
        },
        {
          q: "What do you need from us to start?",
          a: "Whatever exists. A proposal you have been sent, access to a repository, a login to the current system, or nothing but a description of the problem. We will tell you on the free call which of those is actually needed.",
        },
        {
          q: "Can you review a quote from another company?",
          a: "Yes, and it is one of the most common reasons people get in touch. You get a plain-language reading of what has been proposed, what is missing from it, and what the numbers suggest about how the work is planned.",
        },
        {
          q: "Will you sign an NDA?",
          a: "Yes, before the scope call if you would prefer. We do not need your data or your accounts to advise you — a description of the problem is usually enough to start.",
        },
      ],
      cta: {
        title: "Get a second opinion in writing",
        body: "Tell us the decision you are facing. You get a written recommendation you own — and an honest answer even when it is not the one that pays us.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your consulting page and would like a second opinion on a technical decision.",
      },
    },

    "gym-booking-app": {
      meta: {
        title: "Gym Booking App Development — Plans, Trainers, Payments | Desert Launch",
        description:
          "A booking app for a gym, studio or trainer: membership plans, trainer availability, session booking and payments. We shipped one for a Muay Thai gym in Doha — it is live on both stores.",
      },
      breadcrumb: "Gym booking app",
      h1: "Gym and fitness booking app development",
      lead: "Members browse plans, pick a trainer and book a personal or group session from their phone, instead of calling the front desk. We built exactly this for Q-Fight Gym in Doha — you can install it from the App Store or Google Play and use it before you ever talk to us.",
      schemaDescription:
        "Custom booking app development for gyms, fitness studios and personal trainers: membership plans, trainer availability, session booking and in-app payments on iOS and Android, built in Cairo, Egypt for clients in Egypt and the Gulf.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A gym, box or studio whose bookings currently live in a WhatsApp group, a phone call and a paper diary.",
            "A personal trainer or a small coaching team selling sessions and packages directly.",
            "A gym with more than one location, where the schedule is kept in a different place for each.",
            "A business losing bookings after hours, because the only way to book is to reach a person.",
          ],
        },
        {
          id: "what-it-does",
          title: "What the app actually does",
          cards: [
            {
              title: "Plans and memberships",
              body: "Single sessions, monthly plans, personal or group — priced in your own currency and visible before a member commits to anything.",
            },
            {
              title: "Trainers and availability",
              body: "A member searches a trainer's open slots across a date range and sees the time, the session type and how many places are left in each one.",
            },
            {
              title: "Booking without the phone call",
              body: "The booking lands in the system rather than in somebody's memory. The member can see what they have booked, how many sessions they have used and when their plan ends.",
            },
            {
              title: "Payment in the app",
              body: "A payment gateway integrated into the flow, so a plan is paid for in the moment it is chosen rather than at the desk three days later.",
            },
          ],
        },
        {
          id: "proof",
          title: "One we have already shipped",
          body: [
            "Q-Fight Gym is the official app for a professional Muay Thai gym in Doha, Qatar, whose programme is led by Thai world-title fighters. Members browse plans, choose a trainer and book personal or group sessions in the app.",
            "It is built with Flutter and Firebase with a payment gateway integrated, it is published on both the App Store and Google Play, and the gym runs on it daily. The store links are on its case study — which makes this the rare kind of claim you can check yourself in about thirty seconds.",
          ],
        },
        {
          id: "how-long",
          title: "Timeline and price",
          body: [
            "A booking app of this shape usually takes two to three months from the first line of design to a published app in both stores, depending on how much of the payment and membership logic is unusual.",
            "The price is a fixed number in USD, quoted in writing after a free scope call, and paid across three or four milestones — you see a working build before each payment. The app is published in your own Apple and Google developer accounts, in your gym's name.",
          ],
        },
      ],
      faq: [
        {
          q: "Can members pay for a plan inside the app?",
          a: "Yes. Q-Fight Gym has a payment gateway integrated, and which gateway suits you depends on where you are — we work with Stripe, MyFatoorah and PayTabs, which covers Egypt and the Gulf between them.",
        },
        {
          q: "We have more than one branch. Does that work?",
          a: "It depends on how your branches actually differ — separate trainers and schedules is straightforward, separate pricing and separate ownership is a bigger question. It is exactly the kind of thing the free scope call exists to settle, and you will get a direct answer rather than a yes.",
        },
        {
          q: "Do we need to be on both the App Store and Google Play?",
          a: "Almost always yes, and it costs very little extra: one Flutter codebase publishes to both. The accounts themselves cost 99 USD a year for Apple and a one-time 25 USD for Google, billed to your own accounts so you keep control of the listings.",
        },
        {
          q: "Can staff manage the schedule without calling us?",
          a: "That is the point of building an admin side, and for most gyms it is worth the extra scope: trainers, plans, times and capacity all editable by your own team. Whether it is a web dashboard or part of the app is a decision we make together on the call.",
        },
        {
          q: "Does the app work in Arabic?",
          a: "Yes. Full Arabic and right-to-left interfaces are normal work here, not an add-on — several of the products in our portfolio ship bilingual Arabic and English, and this site does too.",
        },
      ],
      cta: {
        title: "Get a fixed quote for your gym's app",
        body: "Tell us how bookings work at your gym today — the plans, the trainers, and what goes wrong. You get a scope summary and a written price in USD before you commit.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your gym booking app page and want an app for my gym.",
      },
    },

    "field-service-management-app": {
      meta: {
        title: "Field Service Management App — Customer, Technician, Manager | Desert Launch",
        description:
          "Three role-specific apps from one codebase: customers book, technicians work the job queue, managers watch it live. We built and delivered exactly this for a car-service platform.",
      },
      breadcrumb: "Field service app",
      h1: "Field service management apps: customer, technician, manager",
      lead: "Field service has a structural problem — the three people involved in one job need three completely different screens. We build all three from a single codebase, which is how Ezhal, a car-service platform, got a customer app, a technician app and a manager view without paying for three separate builds.",
      schemaDescription:
        "Custom field service management app development: customer booking, technician job queues with live tracking, and manager oversight, built as role-specific apps from one codebase in Cairo, Egypt.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A service business sending people out to jobs — maintenance, cleaning, repairs, installation, car services, deliveries.",
            "An operation dispatching work by phone call and WhatsApp, where nobody can say what is happening right now without asking someone.",
            "A company whose customers keep ringing to ask when the technician is arriving.",
            "A business that has outgrown a spreadsheet of jobs but cannot find software shaped like the way it actually works.",
          ],
        },
        {
          id: "three-roles",
          title: "Three people, three different apps",
          cards: [
            {
              title: "The customer",
              body: "Books a service, sees a price, and knows when someone is coming. Tracking the technician in real time turns the most common support call into something the customer answers for themselves.",
            },
            {
              title: "The technician",
              body: "Today's queue, in order, on a phone, usable with one hand and often with a dirty screen. Closing a job takes a tap, not a phone call back to the office.",
            },
            {
              title: "The manager",
              body: "Everything at once: who is where, what is late, what is done, and what it earned. The view that turns an operation from remembered into measured.",
            },
            {
              title: "One codebase underneath",
              body: "Three role-specific apps built from a single Flutter codebase. A fix is written once. A new feature does not have to be built three times, and the three apps cannot drift apart.",
            },
          ],
        },
        {
          id: "what-comes-with-it",
          title: "The parts that make it usable in the field",
          list: [
            "Live technician tracking, so the customer stops calling to ask.",
            "Subscriptions and repeat service plans, for the customers who are not one-off jobs.",
            "A wallet, points and stamps, where retention actually matters to the business model.",
            "Apple Wallet passes, so a membership or a booking lives where customers already look for it.",
            "Payments through Stripe or MyFatoorah, chosen for the market you are actually in.",
            "Offline behaviour scoped deliberately: which actions must work in a basement car park with no signal, and what happens when the phone reconnects.",
          ],
        },
        {
          id: "proof",
          title: "One we have already delivered",
          body: [
            "Ezhal is a multi-role car-service platform: three role-specific apps — customer, field technician and manager — built from a single Flutter codebase, with live tracking, subscriptions, a wallet, points and Apple Wallet passes, using Riverpod with MyFatoorah, Stripe and Firebase.",
            "It was delivered to the client and runs as their platform, so there is no public store link to show you. The case study on this site describes what was built and how it fits together, and we can walk through it properly on a call.",
          ],
        },
        {
          id: "how-long",
          title: "Timeline and price",
          body: [
            "Three roles is genuinely more work than one app, and it usually lands at three to four months. The honest alternative is to start with one role — most often the technician, because that is where the time is being lost — and add the others once the first is earning its keep.",
            "Either way the price is fixed in USD before anything starts, split across milestones, with a working build to open at each one.",
          ],
        },
      ],
      faq: [
        {
          q: "Can we start with just one of the three apps?",
          a: "Yes, and it is often the right call. Starting with the technician app usually pays for itself first, because that is where jobs get lost. The architecture is built so the other roles can be added later without starting again — that is a design decision made at the beginning, not a promise made afterwards.",
        },
        {
          q: "Do the technicians need a connection all the time?",
          a: "No, but which parts work offline is a scoping decision rather than a default. We agree up front exactly which actions must work with no signal — usually viewing the day's jobs and closing one — and what happens to that data when the phone comes back online.",
        },
        {
          q: "Can it connect to the system we already use for invoicing or stock?",
          a: "Sometimes. It depends entirely on whether your existing system has an API or an export worth using, and that is the first thing we check rather than the last. If it does not, you will hear that on the scope call and not after you have paid for an integration.",
        },
        {
          q: "How do customers pay?",
          a: "Through a payment gateway in the app — Stripe, MyFatoorah or PayTabs, chosen for the country you operate in — or on completion in cash if that is how your business runs. Both are normal and the app should match reality, not the other way round.",
        },
        {
          q: "Who owns the apps and the data?",
          a: "You do. Code, intellectual property, hosting, database and the Apple and Google developer accounts are all in your name from the first day. That is the standing arrangement on every project here.",
        },
      ],
      cta: {
        title: "Get a fixed quote for your field operation",
        body: "Describe how a job moves through your business today — who takes it, who does it, and who never finds out. You get a scope summary and a fixed price in USD.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your field service page and want to plan a platform for my service business.",
      },
    },

    "lab-and-clinic-management-system": {
      meta: {
        title: "Lab & Clinic Management System — Portal and Admin | Desert Launch",
        description:
          "A case management platform for a lab or clinic: a portal for the customers sending work in, and an admin dashboard for the team processing it. Built and delivered for a dental lab.",
      },
      breadcrumb: "Lab & clinic system",
      h1: "Lab and clinic management systems",
      lead: "The customers who send work in need to know where their cases are. The team processing them needs one place to work instead of five. We built both sides of exactly that for Xera Lab — a dental case management platform running in production as a private system.",
      schemaDescription:
        "Custom case management systems for laboratories and clinics: a customer portal, an admin dashboard, role-based access and file storage, built on Node.js and PostgreSQL in Cairo, Egypt.",
      sections: [
        {
          id: "who-for",
          title: "Who this is for",
          list: [
            "A lab or clinic tracking cases across paper forms, spreadsheets and a WhatsApp group.",
            "A business whose customers phone to ask where their case is, several times a day.",
            "A team where only one person knows the real status of anything, and nothing moves while they are away.",
            "An operation that has tried off-the-shelf software and found it shaped for a different kind of business.",
          ],
        },
        {
          id: "two-sides",
          title: "Two sides of one system",
          cards: [
            {
              title: "The customer portal",
              body: "The clinics, dentists or referrers who send work in get their own login: submit a case, attach what belongs to it, and see the status without calling anybody.",
            },
            {
              title: "The admin dashboard",
              body: "One place where the team working the cases can see the queue, move a case along, and find anything by the identifier they actually use for it.",
            },
            {
              title: "Roles and permissions",
              body: "Not everybody should see everything. Access is role-based from the start, because retrofitting permissions into a system that was built without them is expensive and never quite complete.",
            },
            {
              title: "Files where they belong",
              body: "Scans, photographs, documents and forms attached to the case they relate to, stored properly, and still findable in two years.",
            },
          ],
        },
        {
          id: "proof",
          title: "One we have already delivered",
          body: [
            "Xera Lab is a full-stack dental case management platform: a customer portal and an admin dashboard on a Node.js and PostgreSQL API, with JWT role-based access, AWS S3 for uploads, and deployment through Docker Compose and Nginx.",
            "It was built and delivered to the client as a private production system, so it has no public URL to send you to. The case study on this site sets out what was built and why, and it can be walked through properly on a call.",
          ],
        },
        {
          id: "regulated-data",
          title: "About sensitive data — honestly",
          body: [
            "Labs and clinics handle data that matters, and it would be easy to write the word compliant here and leave it at that. We will not: Desert Launch does not hold a healthcare compliance certification, and any studio that implies one without naming it should be asked to name it.",
            "What we do instead is treat it as a scoping question with concrete answers. Where will the data physically live, and in whose account? Who can see which record, and how is that enforced? What is logged, and for how long? If your regulator or your customers impose specific requirements, bring them to the scope call and they become part of the written quote — or we tell you honestly that the requirement is outside what we should take on.",
          ],
        },
        {
          id: "how-long",
          title: "Timeline and price",
          body: [
            "A system with a customer portal and an admin side usually takes two to three months. A single-sided internal tool is faster; more roles, deeper permissions and integrations with equipment or existing software push it longer.",
            "It is quoted as a fixed price in USD after a free scope call, split across milestones, and it is hosted in your own accounts — so the data and the bill both stay yours.",
          ],
        },
      ],
      faq: [
        {
          q: "Is this only for dental labs?",
          a: "No. Xera Lab is the one we shipped, and dental case management is what it does, but the shape is the same wherever work arrives from outside customers, moves through stages inside, and has to be findable afterwards. Medical labs, clinics, repair workshops and testing services all fit that shape.",
        },
        {
          q: "Where is our data hosted?",
          a: "In your own accounts. Hosting, database and storage are created in your name from the start and billed to you directly, so you can see the real cost and nothing is held as leverage over you.",
        },
        {
          q: "Can our customers upload files?",
          a: "Yes, and it is usually the point. Xera Lab uses AWS S3 for uploads attached to a case. What matters more than the storage is who can see a given file, which is why access is role-based from the first version.",
        },
        {
          q: "Can it replace the system we have now, gradually?",
          a: "Often, yes — running the new system alongside the old one for a single stage or a single customer first is usually safer than a hard switch. Whether that is possible depends on what your current system will let you export, which we check before quoting.",
        },
        {
          q: "Do you build a mobile app for it too?",
          a: "If the work genuinely happens away from a desk, yes. If it does not, a web platform that works properly on a phone browser is cheaper and easier for you to maintain, and we will say so rather than sell you an app you do not need.",
        },
      ],
      cta: {
        title: "Get a fixed quote for your lab or clinic",
        body: "Describe how a case moves through your business today, and where it gets stuck. You get a scope summary and a written price in USD before you commit to anything.",
        label: "Get a Free Quote on WhatsApp",
        waMessage:
          "Hi Desert Launch, I read your lab and clinic page and want a system for my business.",
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

  pricing: {
    meta: {
      title: "What Software Development Costs | Desert Launch, Cairo",
      description:
        "How pricing works at Desert Launch: a fixed quote in USD after a free scope call, milestone payments, never hourly, and the running costs named before you commit.",
    },
    breadcrumb: "Pricing",
    h1: "What a project costs, and how the price is set",
    lead: "There is no price list on this page, because an honest number depends on what you are actually building. What there is instead is the entire pricing model in the open: how the figure is arrived at, what moves it, what is deliberately not included, and what you own when the work is finished.",
    sections: [
      {
        id: "how-pricing-works",
        title: "How pricing works here",
        list: [
          "A free scope call first, with no obligation and no commitment to a quote.",
          "One fixed price in USD, in writing, before you commit to anything.",
          "Never hourly billing. You are buying a delivered result, not an engineer's calendar.",
          "Three or four milestones: 30% upfront, the rest per delivered milestone.",
          "A milestone is working software you can open — and it is not invoiced until you accept it.",
        ],
      },
      {
        id: "what-moves-the-number",
        title: "What actually moves the number",
        cards: [
          {
            title: "How many kinds of user",
            body: "One audience is one app. A customer, a technician and a manager is three sets of screens and three sets of rules — the single biggest multiplier on any quote.",
          },
          {
            title: "Payments",
            body: "Taking money means a gateway, refunds, failed charges and reconciliation. It is rarely the small feature people expect it to be.",
          },
          {
            title: "Whether it has to work offline",
            body: "Software that keeps working with no signal costs more than software that assumes a connection, because the difficult part is what happens when the phone comes back.",
          },
          {
            title: "Integrations with what you already run",
            body: "Connecting to your existing system is cheap when that system has a usable API and expensive when it does not. We find out which before quoting, not after.",
          },
          {
            title: "Arabic and right-to-left",
            body: "Budgeted as design and layout work rather than a translation line. A properly bilingual interface is a second layout, not a second list of strings.",
          },
          {
            title: "An admin side",
            body: "If your team needs to change prices, times or content without calling us, that is a second product with its own screens. Worth it for most businesses — and priced openly rather than hidden.",
          },
        ],
      },
      {
        id: "smallest-largest",
        title: "The smallest and the largest thing we take on",
        body: [
          "A business website is the smallest engagement we take. A full mobile product with accounts and payments, published to both stores, is the largest. Everything else — a portal, an internal system, an MVP, a rebuild — sits between those two, and where it sits is decided by the list above rather than by how ambitious the idea sounds.",
          "Tell us the budget you have in mind on the first call. You will get an honest answer about what fits inside it, including when the answer is that it does not, or that a smaller build reaches the same goal for less. That conversation costs nothing and it is better had at the start.",
        ],
      },
      {
        id: "not-in-the-price",
        title: "What is not in the price",
        body: [
          "Running costs are billed to your own accounts rather than marked up through us, so you always see the real number:",
        ],
        list: [
          "Hosting, or Firebase usage, depending on what the product needs — estimated in the quote.",
          "The Apple Developer Program, 99 USD a year, if you are publishing an iOS app.",
          "Google Play registration, a one-time 25 USD, if you are publishing on Android.",
          "The fees any third-party service charges you directly, a payment gateway's percentage being the usual one.",
        ],
      },
      {
        id: "what-you-get",
        title: "What the price does include",
        list: [
          "The source code and the intellectual property, owned by you.",
          "Hosting, domain, storage and app store accounts created in your name from the first day.",
          "Store submission handled, including the back-and-forth with app review until it is live.",
          "Twelve months of free support and maintenance after launch.",
          "Small changes and updates free for the first three months on top of that.",
        ],
      },
      {
        id: "how-to-get-a-number",
        title: "How to get an actual number",
        body: [
          "Describe the problem rather than the feature list. How the business runs today, who will use the thing, and what has to be true on the day it launches. A feature list describes a solution somebody has already chosen; the problem is what a price can be built on.",
          "What comes back is a written scope summary, an honest go or no-go, and then a fixed price with a milestone plan and a date. Nothing starts until you approve it in writing and pay the 30% deposit.",
        ],
      },
    ],
    faq: [
      {
        q: "Why is there no price list on this page?",
        a: "Because any number we published would be either so wide that it tells you nothing, or specific enough to be wrong for you. Two apps that sound identical in a sentence can differ by a factor of three once you know how many kinds of user they have. Everything about pricing that can be stated honestly without seeing your project is on this page — the rest takes one free call.",
      },
      {
        q: "Why no hourly billing?",
        a: "Because hourly billing puts us on opposite sides. If slow work pays better, something is wrong with the arrangement. A fixed price means the estimate is our problem rather than yours, and it means you know the total before you commit instead of finding out month by month.",
      },
      {
        q: "What happens if the scope changes after we start?",
        a: "A fixed quote covers what the quote describes. If you want something that is not in it, you get a price for that addition before it is built and you are free to say no, or to leave it for later. What does not happen is an invoice arriving for work you never agreed to.",
      },
      {
        q: "Can you work to a fixed budget?",
        a: "Usually, by changing the scope rather than the quality. Tell us the number and we will tell you what genuinely fits inside it — and if nothing useful does, you will hear that too. An honest no at the start is cheaper for both of us than a compromised build.",
      },
      {
        q: "What is the 30% deposit for?",
        a: "It starts the work and it reserves the time. After that, every payment follows a delivered milestone you have opened and accepted, so the money and the working software stay in step the whole way through.",
      },
      {
        q: "Is the scope call genuinely free?",
        a: "Yes. No obligation, no commitment to a quote afterwards, and no charge for the written scope summary that comes out of it. If the honest answer is that we are the wrong studio for the project, that is what you will be told on the call.",
      },
    ],
    cta: {
      title: "Get a fixed price for your project",
      body: "One call, then a written scope and a number in USD. Nothing starts and nothing is owed until you have both in front of you.",
      label: "Get a Free Quote on WhatsApp",
      waMessage:
        "Hi Desert Launch, I read your pricing page and would like a fixed quote for a project.",
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
