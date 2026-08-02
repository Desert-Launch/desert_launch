import type { Dictionary } from "./types";
import { wa, MAILTO } from "./shared";

const GENERIC =
  "Hallo Desert Launch, ich möchte den Aufbau eines Systems für mein Unternehmen besprechen.";

export const de: Dictionary = {
  lang: "de",
  dir: "ltr",
  meta: {
    title: "Desert Launch | App Agentur & Softwareentwicklung — Kairo, Ägypten",
    description:
      "Desert Launch ist eine App Agentur und ein Unternehmen für individuelle Softwareentwicklung in Kairo, Ägypten. Wir entwickeln die Webplattformen, mobilen Apps und MVPs, die manuelle Arbeit, Excel-Tabellen und verstreute Tools ersetzen. App entwickeln lassen mit Festpreisangebot, Zahlung nach Meilensteinen und einem Jahr kostenlosem Support. Kostenlose Beratung per WhatsApp.",
    ogLocale: "de_DE",
  },
  nav: [
    { label: "Referenzen", href: "#work" },
    { label: "Leistungen", href: "#services" },
    { label: "Warum wir", href: "#why-us" },
    { label: "Ablauf", href: "#process" },
    { label: "Preise", href: "#plans" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
  ],
  header: {
    tagline: "App Agentur für Web, Mobile und Produktentwicklung",
    emailUs: "E-Mail senden",
    startProject: { label: "Projekt starten", href: wa(GENERIC), external: true },
    langCode: "DE",
    langAria: "Sprache wählen",
    menuOpen: "Navigationsmenü öffnen",
    menuClose: "Navigationsmenü schließen",
    mobileLangLabel: "Sprache",
  },
  hero: {
    eyebrow: "Softwareentwicklung mit Business-Fokus",
    title: "Ersetzen Sie manuelle Arbeit durch ein System, das Ihr Unternehmen steuert.",
    lead: "Arbeiten Sie noch mit Excel-Tabellen, Papierunterlagen und verstreuten Tools? Desert Launch konzipiert und entwickelt die individuellen Webplattformen, mobilen Apps, MVPs und internen Systeme, die sie ersetzen — mit zuverlässiger Umsetzung, skalierbarer Architektur und direkter Kommunikation.",
    tags: [
      "Produkte zur Lead-Generierung",
      "Mobile-first Kundenerlebnisse",
      "Systeme für Betrieb und Verwaltung",
    ],
    primary: {
      label: "Projekt per WhatsApp starten",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Referenzen ansehen", href: "#work" },
    responseNote:
      "Wir antworten innerhalb von 12 Stunden — meist deutlich schneller. Zeitzone Kairo (GMT+2), auf Deutsch, Englisch oder Arabisch.",
    image: {
      src: "/assets/image_slot1.webp",
      alt: "Eine hochwertige Produktpräsentation als Sinnbild für moderne Softwareentwicklung.",
    },
    imageCaption:
      "Webplattformen, mobile Produkte und interne Systeme, die Ihr Unternehmen voranbringen.",
    sidePanel: {
      kicker: "Was Sie bekommen",
      heading: "Ein klarer Umsetzungsplan, bevor die eigentliche Entwicklung startet.",
      body: "Jedes Projekt ist auf Produktklarheit, technische Praxistauglichkeit und den schnellsten Weg zu einem zuverlässigen Launch ausgerichtet.",
      points: [
        "Klar definierter Umfang, bevor die Umsetzung unnötig ausufert.",
        "UX, Architektur und Geschäftsziele werden gemeinsam gedacht statt isoliert.",
        "Ein Launch-Pfad, der für Gründer wie für wachsende Teams praktikabel bleibt.",
      ],
    },
    proof: [
      {
        label: "Erfahrung",
        value: "5+ Jahre",
        note: "Senior-Engineering für Kunden in Ägypten, den Golfstaaten, Europa und den USA.",
      },
      {
        label: "Veröffentlicht",
        value: "10+ Produkte",
        note: "Webplattformen und mobile Apps im Produktivbetrieb.",
      },
      {
        label: "Reaktionszeit",
        value: "Innerhalb von 12 Stunden",
        note: "Direkte Antworten per WhatsApp — keine Account-Manager, keine trägen Agentur-Schleifen.",
      },
    ],
  },
  work: {
    kicker: "Ausgewählte Referenzen",
    title:
      "Aktuelle Produkt-Referenzen, die zeigen, welche Art von Systemen Desert Launch entwickelt.",
    intro:
      "Die folgenden Arbeiten zeigen Produktdenken, UX-Qualität und Systemtiefe — von Lead-Generierung über Consumer-Apps bis zu engagementstarken Erlebnissen.",
    capabilities: {
      kicker: "Kompetenzen",
      title: "Was Kunden vom Entwicklungsprozess erwarten können",
      body: "Desert Launch übernimmt alle praktischen Ebenen, die ein ernsthaftes Produkt erfordert — nicht nur die sichtbare Oberfläche.",
      points: [
        "Produkt-Scoping, Feature-Priorisierung und MVP-Definition.",
        "Responsive Interfaces für Web und Mobile mit conversionorientierter UX.",
        "Admin-Dashboards, Berechtigungen, Workflows, APIs und Integrationen.",
        "Deployment-Planung, Infrastruktur-Setup, Launch-Begleitung und Iteration.",
      ],
    },
    capabilityCards: [
      {
        icon: "dashboard",
        title: "Operative Dashboards",
        body: "Admin-Systeme, mit denen Teams Nutzer, Workflows, Daten und Geschäftsprozesse effizienter steuern.",
      },
      {
        icon: "productized",
        title: "Mobile Produkterlebnisse",
        body: "Apps, die klare UX, Account-Flows, Content-Auslieferung und Monetarisierungs- oder Engagement-Systeme vereinen.",
      },
      {
        icon: "flows",
        title: "Integrierte Geschäftsprozesse",
        body: "Software, die kundenseitige Erlebnisse mit internen Teams, Statusverfolgung und Prozesstransparenz verbindet.",
      },
      {
        icon: "scalable",
        title: "Skalierbare Architektur",
        body: "Fundamente, die Raum für neue Features, Integrationen und wachsende betriebliche Anforderungen lassen.",
      },
    ],
    projects: [
      {
        title: "FasTap",
        tag: "Digitale NFC-Visitenkarte",
        logo: "/assets/logo-fastap.webp",
        logoAlt: "FasTap App-Icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/fastab1.png", alt: "Vorschau der FasTap App-Oberfläche 1" },
            { src: "/assets/fastab2.png", alt: "Vorschau der FasTap App-Oberfläche 2" },
            { src: "/assets/fastab3.png", alt: "Vorschau der FasTap App-Oberfläche 3" },
          ],
        },
        summary:
          "Eine NFC-Karte antippen und das komplette Geschäftsprofil teilen — es öffnet sich auf jedem Smartphone, ganz ohne Installation. Eine Flutter-App schreibt die Profile auf die Karten, und eine Flutter-Web-Seite öffnet sich bei jedem geteilten Link.",
        points: [
          "Profilverwaltung und Medien-Updates direkt in der App.",
          "Webprofil öffnet sich direkt nach dem NFC-Scan.",
          "Deployment mit Firebase und Nginx.",
        ],
        links: [{ label: "Ein ähnliches Produkt entwickeln lassen", href: "#contact" }],
      },
      {
        title: "Al-Muslim",
        tag: "In beiden Stores live",
        logo: "/assets/logo-almuslim.png",
        logoAlt: "Al-Muslim App-Icon",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/almuslim2.webp", alt: "Vorschau der Al-Muslim App-Oberfläche 1" },
            { src: "/assets/almuslim3.webp", alt: "Vorschau der Al-Muslim App-Oberfläche 2" },
            { src: "/assets/almuslim4.webp", alt: "Vorschau der Al-Muslim App-Oberfläche 3" },
          ],
        },
        summary:
          "Ein täglicher Begleiter für Muslime: Koran, Adhkar & Duas, präzise Gebetszeiten und Qibla-Richtung — mit intelligenten Erinnerungen, die die App fest im Alltag verankern.",
        points: [
          "Verfügbar im App Store und bei Google Play.",
          "Flutter mit Push-Benachrichtigungen und Geolokalisierung.",
          "Entwickelt für tägliche Nutzung und eine klare, inhaltsorientierte UX.",
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
          { label: "Eine App wie diese entwickeln lassen", href: "#contact" },
        ],
      },
      {
        title: "Jaweb",
        tag: "Kompetitives Quiz-Spiel",
        logo: "/assets/logo-jaweb.webp",
        logoAlt: "Jaweb App-Icon",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/jaweb1.png", alt: "Vorschau der Jaweb App-Oberfläche 1" },
            { src: "/assets/jaweb2.png", alt: "Vorschau der Jaweb App-Oberfläche 2" },
            { src: "/assets/jaweb3.png", alt: "Vorschau der Jaweb App-Oberfläche 3" },
          ],
        },
        summary:
          "Ein Quizabend im Wohnzimmer, verwandelt in ein faires, automatisiertes Produkt — zwei Teams, sechs Kategorien, drei Schwierigkeitsgrade, Schiedsrichter-Logik und automatische Punktevergabe.",
        points: [
          "Kompletter Spielablauf mit Team-Wertung und Schiedsrichter-Logik.",
          "Monetarisierung über MyFatoorah-Zahlungen.",
          "Flutter mit Clean Architecture für wiederholtes Spielen.",
        ],
        links: [{ label: "Ein interaktives Produkt planen", href: "#contact" }],
      },
      {
        title: "Q-Fight Gym",
        tag: "Im App Store live · Katar",
        logo: "/assets/logo-qfightgym.png",
        logoAlt: "Q-Fight Gym App-Icon",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/qfightgym1.webp", alt: "Q-Fight Gym App — Ansicht Trainingsprogramm" },
            { src: "/assets/qfightgym2.webp", alt: "Q-Fight Gym App — Ansicht Kursplan" },
            { src: "/assets/qfightgym3.webp", alt: "Q-Fight Gym App — Ansicht Mitgliedschaft" },
          ],
        },
        summary:
          "Die offizielle App eines professionellen Muay-Thai-Gyms in Katar — sie verbindet Mitglieder mit einem Trainingsprogramm unter Leitung thailändischer Weltmeister.",
        points: [
          "Im App Store live für ein real operierendes Unternehmen.",
          "Mitgliedschaften, Trainingsprogramme und Kursplanung.",
          "Flutter und Firebase mit Zahlungsintegration.",
        ],
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/q-fight-gym/id6759147399",
            external: true,
          },
          { label: "Eine App für Ihr Unternehmen entwickeln lassen", href: "#contact" },
        ],
      },
      {
        title: "Xera Lab",
        tag: "Plattform für Dental-Fallmanagement",
        logo: "/assets/logo-xeralab.webp",
        logoAlt: "Xera Lab App-Icon",
        media: {
          kind: "stack",
          stack: ["Flutter Web", "Node.js", "PostgreSQL", "Docker", "AWS"],
        },
        summary:
          "Eine Full-Stack-Plattform für Dental-Fallmanagement — ein Kundenportal und ein Admin-Dashboard auf einer Node.js-API — für den Kunden als privates Produktivsystem entwickelt und ausgeliefert.",
        points: [
          "Kundenportal und Admin-Dashboard auf einer gemeinsamen Plattform.",
          "Node.js- und PostgreSQL-API mit rollenbasiertem Zugriff per JWT.",
          "Uploads über AWS S3, Docker Compose und Deployment mit Nginx.",
        ],
        links: [{ label: "Eine Plattform wie diese entwickeln lassen", href: "#contact" }],
      },
    ],
    redesigns: {
      title: "Konzepte für Website-Relaunches",
      intro:
        "Moderne, mobile-first gedachte Relaunches, die wir für reale Unternehmen vorbereitet haben — das Vorher/Nachher einer schnelleren, klareren Website.",
      cards: [
        {
          label: "Immobilien — Ajman",
          title: "Landmark Properties — Relaunch-Konzept",
          summary:
            "Eine mobile-first Immobilien-Website, die veraltete Demo-Anzeigen durch echte, durchsuchbare lokale Angebote ersetzt — mit schnellen Ladezeiten und WhatsApp-Anfrage bei jeder Immobilie.",
          points: [
            "Mobile-first Layout mit schnellen Ladezeiten",
            "Durchsuchbare Immobilienangebote",
            "Klare Anfrage- und WhatsApp-CTAs",
          ],
          image: {
            src: "/assets/redesign-landmark.jpg",
            alt: "Relaunch-Konzept für die Website von Landmark Properties",
          },
        },
        {
          label: "Innenausbau — Ajman",
          title: "Ayyath Interiors — Relaunch-Konzept",
          summary:
            "Eine aufgeräumte Portfolio-Website für den Innenausbau mit echter Projektgalerie, funktionierenden Kontaktdaten und einem klaren Weg zum Angebot — statt einer veralteten, fehlerhaften Vorlage.",
          points: [
            "Projektgalerie, die die Arbeit verkauft",
            "Funktionierender Klick-zum-Anrufen und WhatsApp",
            "Klarer CTA „Angebot anfordern“",
          ],
          image: {
            src: "/assets/redesign-ayyath.jpg",
            alt: "Relaunch-Konzept für die Website von Ayyath Interiors",
          },
        },
      ],
    },
  },
  services: {
    kicker: "Leistungen",
    title: "Software-Leistungen für Wachstum, Effizienz und schnellere Umsetzung.",
    intro:
      "Desert Launch begleitet Unternehmen von der Idee bis zur Umsetzung — mit klarem Design, skalierbarem Engineering und pragmatischem Produktdenken.",
    items: [
      {
        icon: "web",
        title: "Individuelle Webentwicklung",
        body: "Unternehmenswebsites, Kundenportale, Dashboards und Web-Apps — entwickelt für Performance und Conversion.",
      },
      {
        icon: "mobile",
        title: "App-Entwicklung",
        body: "Plattformübergreifende mobile Produkte mit nativem Feeling, ausgereifter UX und zuverlässigen Integrationen.",
      },
      {
        icon: "uiux",
        title: "UI/UX-Design",
        body: "Benutzeroberflächen, die Produkte leichter verständlich, einfacher bedienbar und conversionstärker machen.",
      },
      {
        icon: "architecture",
        title: "Systemarchitektur",
        body: "Das technische Fundament, das Ihre Software schnell und günstig erweiterbar hält — damit ein neues Feature im nächsten Jahr keinen Neubau bedeutet.",
      },
      {
        icon: "mvp",
        title: "MVP-Entwicklung",
        body: "Fokussierte erste Produktversionen, die das Konzept schnell belegen, ohne die spätere Wartbarkeit zu gefährden.",
      },
      {
        icon: "website",
        title: "Unternehmenswebsites",
        body: "Professionelle Firmenwebsites, die Ihren Mehrwert schnell vermitteln und Besucher in qualifizierte Anfragen verwandeln.",
      },
      {
        icon: "modernize",
        title: "Produktmodernisierung",
        body: "Redesign und Neuentwicklung veralteter Produkte für bessere Performance, Klarheit und Geschäftswirkung.",
      },
      {
        icon: "consulting",
        title: "Technische Beratung",
        body: "Klare technische Orientierung für Produktentscheidungen, Umsetzungsplanung, Architektur und nächste Schritte.",
      },
    ],
    stackLabel: "Technologie-Stack",
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
      label: "Kostenlose Beratung per WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    ghost: { label: "Anforderungen per E-Mail senden", href: MAILTO },
  },
  why: {
    kicker: "Warum Desert Launch",
    title:
      "Ein Softwarepartner, der Umsetzung, Skalierbarkeit und Geschäftsergebnisse zusammendenkt.",
    intro:
      "Das Ziel ist nicht nur, Code auszuliefern. Das Ziel ist, das richtige Produkt zu bauen, Reibung zu reduzieren und Ihrem Unternehmen ein digitales System zu geben, auf das Sie sich wirklich verlassen können.",
    features: [
      {
        icon: "reliability",
        title: "Auf Zuverlässigkeit gebaut",
        body: "Saubere Umsetzung, skalierbare Struktur und Engineering-Entscheidungen, die langfristiges Wachstum tragen.",
      },
      {
        icon: "business",
        title: "Umsetzung mit Geschäftssinn",
        body: "Jeder Screen, jeder Workflow und jede Integration wird an Klarheit, Effizienz und Conversion gemessen.",
      },
      {
        icon: "tailored",
        title: "Maßgeschneidert statt von der Stange",
        body: "Lösungen entstehen entlang Ihres Geschäftsmodells, Ihrer Abläufe, Ihrer Zielgruppe und Ihrer Wachstumsphase.",
      },
      {
        icon: "communication",
        title: "Klare Kommunikation",
        body: "Direkte Gespräche, schnelle Antworten, pragmatische Planung und stetiger Fortschritt vom Kickoff bis zum Launch.",
      },
    ],
    founder: {
      kicker: "Mit wem Sie arbeiten",
      name: "Abdullah Mohamed",
      role: "Gründer & Lead Engineer",
      body: "Senior Software Engineer mit über 5 Jahren Erfahrung in der Entwicklung produktiver Web- und Mobile-Produkte für Kunden in Ägypten, den Golfstaaten, Europa und den USA. Ansässig in Kairo — wer Desert Launch schreibt, spricht direkt mit der Person, die das Produkt entwickelt.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, Gründer von Desert Launch",
      facts: ["Kairo, Ägypten", "5+ Jahre Erfahrung", "10+ veröffentlichte Apps"],
    },
    band: {
      kicker: "So starten Projekte",
      body: "Die meisten Projekte beginnen mit einem kurzen Scope-Review, einer Empfehlung für den klarsten Umsetzungsweg und einem konkreten nächsten Schritt.",
      points: [
        "Code, Daten und Infrastruktur gehören Ihnen — in Ihren eigenen Accounts",
        "Fester Umfang und Festpreis vor jeder Verpflichtung",
        "Launch-Planung von Anfang an",
      ],
      cta: { label: "Kostenloses Scope-Review sichern", href: "#contact" },
    },
  },
  process: {
    kicker: "Ablauf",
    title: "Ein einfacher Prozess, der Projekte klar hält und in Bewegung bringt.",
    intro:
      "Schnelle Reaktionszeiten sind wichtig — Struktur auch. Der folgende Ablauf reduziert Unklarheiten und hält Umfang und Umsetzung unter Kontrolle.",
    steps: [
      {
        n: "1",
        title: "Verstehen",
        body: "Wir verstehen Ihr Unternehmen, Ihre Ziele, Ihre Nutzer und die Rahmenbedingungen, bevor irgendetwas gebaut wird.",
      },
      {
        n: "2",
        title: "Planen",
        body: "Wir definieren Umfang, technische Richtung, Meilensteine und den klarsten Weg zum Launch.",
      },
      {
        n: "3",
        title: "Entwickeln",
        body: "Wir liefern das Produkt in strukturierten Phasen — mit Fokus auf UX, Qualität und Skalierbarkeit.",
      },
      {
        n: "4",
        title: "Launchen",
        body: "Wir bereiten das Deployment vor, prüfen die finalen Abläufe und veröffentlichen mit Sicherheit und Überblick.",
      },
      {
        n: "5",
        title: "Support",
        body: "Wir verschwinden nach dem Launch nicht — jedes Projekt enthält ein volles Jahr kostenlosen Support und Wartung.",
      },
    ],
  },
  testimonials: {
    kicker: "Stimmen aus der Praxis",
    title: "Entwickler und Leads, die mit unserem Gründer gearbeitet haben — in ihren eigenen Worten.",
    intro:
      "Öffentliche LinkedIn-Empfehlungen für Abdullah Mohamed — den Entwickler, der jedes Desert-Launch-Projekt persönlich umsetzt. Echte Namen, echte Rollen, keine bezahlten Bewertungen.",
    items: [
      {
        quote:
          "Abdullah hat eine beeindruckende Fähigkeit bewiesen, komplexe technische Konzepte schnell zu erfassen. Seine analytischen Fähigkeiten und sein durchdachter Ansatz bei der Problemlösung machen ihn zu einem zentralen Baustein für den Erfolg unseres Teams.",
        name: "Mohamed Sayed",
        role: "AI Lead · Appenza",
        photo: "/assets/testimonial-mohamed-sayed.webp",
      },
      {
        quote:
          "Abdullah verbindet tiefes technisches Fachwissen mit einem klaren, zugänglichen Führungsstil. Mit seiner Fähigkeit, komplexe Probleme effizient zu lösen, und seinem Anspruch an Qualität hat er wesentlich zu unseren Projekten beigetragen.",
        name: "Ahmed Farid",
        role: "Senior Software Engineer · Recovery Advisers",
        photo: "/assets/testimonial-ahmed-farid.webp",
      },
      {
        quote:
          "Abdullah ist ein herausragender Flutter-Entwickler, dessen Talent und Begeisterung jedes Team bereichern. In unserem gemeinsamen Jahr haben mich seine Problemlösungskompetenz und seine Fähigkeit, Herausforderungen zu meistern, immer wieder beeindruckt.",
        name: "Mohamad Zakaria",
        role: "Senior Software QA Engineer · Yassir",
        photo: "/assets/testimonial-mohamad-zakaria.webp",
      },
    ],
  },
  plans: {
    kicker: "Pakete & Preise",
    title: "Pakete mit festem Umfang für definierte Produkte. Individuelle Angebote für größere Systeme.",
    intro:
      "Jedes Paket beginnt mit einem kostenlosen Scope-Gespräch und einem schriftlichen Festpreisangebot in USD — Umfang, Zeitplan und Preis stehen fest, bevor Sie etwas zahlen. Gezahlt wird nach Meilensteinen: 30 % zu Beginn, der Rest, sobald Sie funktionierende Software sehen. Jedes Projekt enthält ein Jahr kostenlosen Support.",
    items: [
      {
        name: "Unternehmenswebsite",
        body: "Eine professionelle Firmenwebsite, die Ihren Mehrwert schnell vermittelt und Besucher in WhatsApp- und E-Mail-Anfragen verwandelt.",
        points: [
          "Design, Entwicklung und Launch — in der Regel wenige Wochen.",
          "Schnell, mobile-first und ab Tag eins für Suchmaschinen optimiert.",
          "Ein Jahr kostenloser Support und drei Monate kostenlose Anpassungen.",
        ],
        price: {
          main: "Festpreis in USD",
          sub: "Schriftliches Angebot nach einem kostenlosen Scope-Gespräch",
        },
        cta: {
          label: "Website besprechen",
          href: wa(
            "Hallo Desert Launch, ich möchte eine Unternehmenswebsite. Können wir über Umfang und Angebot sprechen?"
          ),
          external: true,
        },
      },
      {
        name: "Mobile App",
        note: "Am beliebtesten",
        body: "Eine plattformübergreifende App für iOS und Android aus einer Flutter-Codebasis — designt, entwickelt und in beiden Stores veröffentlicht.",
        points: [
          "Veröffentlichung im App Store und bei Google Play inklusive.",
          "In der Regel zwei bis vier Monate, Meilenstein für Meilenstein.",
          "Code, IP und Store-Accounts gehören Ihnen — Daten und Infrastruktur laufen in Ihren eigenen Accounts.",
        ],
        price: {
          main: "Festpreis in USD",
          sub: "Schriftliches Angebot nach einem kostenlosen Scope-Gespräch",
        },
        cta: {
          label: "Mobile App besprechen",
          href: wa(
            "Hallo Desert Launch, ich möchte eine mobile App entwickeln lassen. Können wir über Umfang und Angebot sprechen?"
          ),
          external: true,
        },
      },
      {
        name: "MVP-Sprint",
        note: "Für neue Ideen",
        body: "Eine fokussierte erste Version Ihres Produkts, die das Konzept mit echten Nutzern belegt — ohne dafür ein komplettes Produktbudget auszugeben.",
        points: [
          "Konsequente Feature-Priorisierung auf ein Kernergebnis.",
          "Ein launchfähiger Kern, in der Regel innerhalb von ein bis zwei Monaten.",
          "Eine Architektur, die später zum vollständigen Produkt mitwächst.",
        ],
        price: {
          main: "Festpreis in USD",
          sub: "Schriftliches Angebot nach einem kostenlosen Scope-Gespräch",
        },
        cta: {
          label: "MVP-Umfang klären",
          href: wa(
            "Hallo Desert Launch, ich habe eine Produktidee und möchte den Umfang eines MVP besprechen."
          ),
          external: true,
        },
      },
      {
        name: "Individuell & Enterprise",
        note: "Für größere Unternehmen",
        body: "Größere Plattformen, interne Systeme, Integrationen und eine langfristige Produktpartnerschaft — zugeschnitten auf Ihren Betrieb, nicht auf ein Paket.",
        points: [
          "Individueller Umfang: Plattformen, Dashboards, APIs und Integrationen.",
          "Optionaler monatlicher Retainer mit reservierter Entwicklungskapazität.",
          "Priorisierte Antwort per WhatsApp, wenn es darauf ankommt.",
        ],
        price: {
          main: "Individuelles Angebot",
          sub: "Maßgeschneidert, sobald wir Ihren Betrieb verstanden haben",
        },
        cta: {
          label: "Angebot anfragen",
          href: wa(
            "Hallo Desert Launch, wir brauchen ein individuelles System für unser Unternehmen. Können wir einen Termin vereinbaren?"
          ),
          external: true,
        },
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Klare Antworten auf die Fragen, die jeder beim ersten Softwareprojekt hat.",
    intro:
      "Wenn Ihre Frage hier fehlt, stellen Sie sie per WhatsApp — Sie bekommen eine direkte Antwort, kein Verkaufsgespräch.",
    items: [
      {
        q: "Was kostet ein Projekt?",
        a: "Jedes Projekt erhält nach einem kostenlosen Scope-Gespräch ein Festpreisangebot in USD — keine Stundenabrechnung und keine überraschenden Rechnungen. Der Preis hängt von Umfang und Komplexität ab, und wir sagen Ihnen ehrlich, wenn ein kleinerer Umfang Ihr Ziel bereits erreicht.",
        schema:
          "Jedes Projekt erhält nach einem kostenlosen Scope-Gespräch ein Festpreisangebot in USD — keine Stundenabrechnung und keine überraschenden Rechnungen. Der Preis hängt von Umfang und Komplexität ab.",
      },
      {
        q: "Wie lange dauert mein Projekt?",
        a: "Das hängt von Umfang und Komplexität ab: Eine Unternehmenswebsite dauert in der Regel Wochen, ein MVP ein bis zwei Monate und ein größeres mobiles Produkt zwei bis vier Monate. Sie erhalten vor dem Start einen konkreten Zeitplan mit Meilensteinen — und sehen bei jedem Meilenstein funktionierende Software.",
        schema:
          "Das hängt von Umfang und Komplexität ab: Eine Unternehmenswebsite dauert in der Regel Wochen, ein MVP ein bis zwei Monate und ein größeres mobiles Produkt zwei bis vier Monate. Vor Projektstart gibt es einen konkreten Zeitplan mit Meilensteinen.",
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "Sie erhalten ein volles Jahr kostenlosen Support und Wartung sowie drei Monate kostenlose kleine Anpassungen und Updates. Danach ist optional ein laufender Retainer möglich, wenn wir das Produkt weiterentwickeln sollen — es geht aber nichts kaputt, wenn Sie darauf verzichten.",
        schema:
          "Jedes Projekt enthält ein volles Jahr kostenlosen Support und Wartung sowie drei Monate kostenlose kleine Anpassungen und Updates. Danach ist optional ein laufender Retainer verfügbar.",
      },
      {
        q: "Wem gehört der Code?",
        a: "Ihnen. Volles Eigentum am Code, am geistigen Eigentum und an den Infrastruktur-Accounts — alles wird auf Ihren Namen geliefert, und Ihre Daten und Ihre Infrastruktur bleiben in Ihren eigenen Accounts. Sie sind zu keinem Zeitpunkt an uns gebunden.",
        schema:
          "Dem Kunden gehört alles: der Code, das geistige Eigentum und die Infrastruktur-Accounts — alles wird auf den Namen des Kunden geliefert, und Daten wie Infrastruktur bleiben in den eigenen Accounts des Kunden.",
      },
      {
        q: "Wie funktioniert die Bezahlung?",
        a: "Projekte werden in drei oder vier Meilensteine aufgeteilt. Sie zahlen 30 % zu Beginn und den Rest je geliefertem Meilenstein — Sie sehen immer funktionierende Software, bevor die nächste Zahlung fällig wird.",
        schema:
          "Projekte werden in drei oder vier Meilensteine aufgeteilt: 30 % zu Beginn, der Rest je geliefertem Meilenstein.",
      },
      {
        q: "Wir sind nicht technisch. Ist das ein Problem?",
        a: "Überhaupt nicht — die meisten unserer Kunden sind es nicht. Wir erklären Entscheidungen in klarer Geschäftssprache, übernehmen die technischen Entscheidungen für Sie und kommunizieren per WhatsApp auf Deutsch, Englisch oder Arabisch.",
        schema:
          "Nein — Desert Launch erklärt Entscheidungen in klarer Geschäftssprache, übernimmt die technischen Entscheidungen und kommuniziert per WhatsApp auf Deutsch, Englisch oder Arabisch.",
      },
      {
        q: "Arbeiten Sie mit Kunden in Saudi-Arabien, den VAE und den Golfstaaten?",
        a: "Ja — Desert Launch arbeitet mit Kunden in Ägypten, Saudi-Arabien, den VAE, Katar und Kuwait sowie in Europa und den USA. Wir arbeiten in Ihrer Zeitzone (Kairo, GMT+2 — nur eine Stunde von den Golfstaaten entfernt), kommunizieren per WhatsApp auf Deutsch, Englisch oder Arabisch und haben Apps für Unternehmen am Golf veröffentlicht — darunter ein im App Store verfügbares Produkt für ein Gym in Katar.",
        schema:
          "Ja — Desert Launch arbeitet mit Kunden in Ägypten, Saudi-Arabien, den VAE, Katar und Kuwait sowie in Europa und den USA. Die Kommunikation läuft per WhatsApp auf Deutsch, Englisch oder Arabisch, in einer Zeitzone nur eine Stunde von den Golfstaaten entfernt — mit veröffentlichten Apps für Unternehmen am Golf, darunter ein im App Store verfügbares Produkt für ein Gym in Katar.",
      },
      {
        q: "Warum ein Softwareunternehmen in Ägypten beauftragen?",
        a: "Sie erhalten Senior-Engineering zu ägyptischen Konditionen — in der Regel deutlich unter westeuropäischen und US-Agenturpreisen für denselben Umfang — ohne die typischen Offshore-Nachteile: gleiche oder nahezu gleiche Zeitzone wie die Golfstaaten und Europa, Arabisch als Muttersprache plus fließendes Englisch und ein direkter Draht zum Entwickler Ihres Produkts statt eines vielschichtigen Account-Teams.",
        schema:
          "Senior-Engineering zu ägyptischen Konditionen — in der Regel deutlich unter westeuropäischen und US-Agenturpreisen für denselben Umfang — mit gleicher oder nahezu gleicher Zeitzone für die Golfstaaten und Europa, Arabisch als Muttersprache plus fließendem Englisch und einem direkten Draht zum Entwickler des Produkts.",
      },
    ],
  },
  contact: {
    kicker: "Jetzt starten",
    title:
      "Erzählen Sie uns, wie Ihr Unternehmen heute arbeitet. Wir zeigen Ihnen, was ein System ersetzen könnte.",
    intro:
      "Teilen Sie Ihre Produktidee, Ihr aktuelles System oder Ihre Anforderung. WhatsApp ist der schnellste Weg für ein direktes Gespräch. E-Mail eignet sich gut für ausführliche Briefings, Dokumente und längere Projektbeschreibungen.",
    highlights: [
      "Erhalten Sie eine klarere Empfehlung zu Produktumfang, Struktur und Launch-Pfad.",
      "Nutzen Sie das Formular, um das Wesentliche zu senden, ohne eine lange E-Mail schreiben zu müssen.",
      "Kommen Sie direkt von der Idee zum konkreten nächsten Schritt und Gesprächskanal.",
    ],
    primary: { label: "Per WhatsApp starten", href: wa(GENERIC), external: true },
    secondary: { label: "Beratung per E-Mail anfragen", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    image: {
      src: "/assets/image_slot3.webp",
      alt: "Ein hochwertiger Arbeitsplatz als Sinnbild für Projektplanung und Kommunikation.",
    },
    imageCaption: "Briefing einmal senden. Per WhatsApp oder E-Mail weitermachen.",
    direct: {
      heading: "Projekt-Briefing senden",
      body: "Senden Sie hier die Eckdaten und öffnen Sie das Briefing direkt in WhatsApp oder per E-Mail.",
      whatsapp: { label: "WhatsApp", value: "+20 102 283 8534" },
      email: { label: "E-Mail", value: "abdullah@desertlaunch.dev" },
    },
    form: {
      name: "Ihr Name",
      namePlaceholder: "Name",
      company: "Unternehmen oder Marke",
      companyPlaceholder: "Unternehmen oder Marke",
      projectType: "Projektart",
      projectTypePlaceholder: "Projektart auswählen",
      projectTypeOptions: [
        "Unternehmenswebsite",
        "Webplattform",
        "Mobile App",
        "MVP",
        "Internes System",
        "Produkt-Redesign",
      ],
      timeline: "Zeitrahmen",
      timelinePlaceholder: "Zeitrahmen auswählen",
      timelineOptions: [
        "So schnell wie möglich",
        "Innerhalb von 1 Monat",
        "1 bis 3 Monate",
        "Mehr als 3 Monate",
      ],
      summary: "Projektbeschreibung",
      summaryPlaceholder:
        "Was möchten Sie entwickeln, für wen ist es gedacht, und wobei brauchen Sie Unterstützung?",
      submitWhatsapp: "Briefing in WhatsApp öffnen",
      submitEmail: "Briefing per E-Mail öffnen",
      note: "Es wird nichts gespeichert oder gesendet, bis Sie selbst auf Senden tippen — das Formular entwirft nur Ihre Nachricht und öffnet sie in WhatsApp oder Ihrem E-Mail-Programm.",
      draftIntro: "Hallo Desert Launch,\n\nich möchte ein Projekt-Briefing besprechen.",
      draftLabels: {
        name: "Name",
        company: "Unternehmen",
        projectType: "Projektart",
        timeline: "Zeitrahmen",
        summary: "Projektbeschreibung",
      },
      emailSubject: "Projekt-Briefing für Desert Launch",
    },
  },
  footer: {
    tagline: "App Agentur für ernsthafte digitale Produkte",
    blurb:
      "Desert Launch unterstützt Unternehmen beim Launch von Websites, Plattformen, mobilen Apps und internen Systemen — mit einem klaren Umsetzungsprozess und direkter Kommunikation.",
    copyright: "© 2026 Desert Launch. Alle Rechte vorbehalten.",
    navHeading: "Navigation",
    navLinks: [
      {
        label: "Referenzen",
        sub: "Apps im App Store und bei Google Play",
        href: "#work",
      },
      { label: "Leistungen", sub: "Was Desert Launch entwickelt", href: "#services" },
      {
        label: "Pakete & Preise",
        sub: "Pakete mit festem Umfang und individuelle Angebote",
        href: "#plans",
      },
    ],
    langHeading: "Diese Seite in anderen Sprachen",
    contactHeading: "Kontakt",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "E-Mail", href: MAILTO },
    ],
    contactSub: [
      "Der schnellste Weg, ein neues Projekt zu besprechen",
      "Ideal für ausführliche Briefings und Anforderungen",
    ],
    note: "Nutzen Sie den Kontaktbereich oben, um ein strukturiertes Briefing zu senden und das Gespräch im passenden Kanal fortzusetzen.",
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Zum Inhalt springen",
  backToTop: "Nach oben",
};
