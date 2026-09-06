import type { Dictionary } from "./types";
import { wa, MAILTO, PHONE_DISPLAY, EMAIL, CONTENT_UPDATED } from "./shared";

const GENERIC =
  "Hallo Desert Launch, ich hätte gern ein kostenloses Angebot für ein Softwareprojekt.";

export const de: Dictionary = {
  lang: "de",
  dir: "ltr",
  meta: {
    title: "App-Entwicklung & Software aus Kairo | Desert Launch",
    description:
      "Desert Launch entwickelt Mobile Apps, Webplattformen und MVPs für Ägypten und die Golfstaaten. Festpreis, Code gehört Ihnen, ein Jahr Gratis-Support.",
    ogLocale: "de_DE",
    ogImageAlt:
      "Desert Launch – App-Agentur und Softwareentwicklung in Kairo, Ägypten",
  },
  nav: [
    { label: "Referenzen", href: "#work" },
    { label: "Leistungen", href: "#services" },
    { label: "Warum wir", href: "#why-us" },
    { label: "Ablauf", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#contact" },
  ],
  header: {
    tagline: "Mobile-, Web- und Produktentwicklung – Kairo, Ägypten",
    emailUs: "E-Mail senden",
    startProject: { label: "Kostenloses Angebot", href: wa(GENERIC), external: true },
    langCode: "DE",
    langAria: "Sprache wählen",
    menuOpen: "Navigationsmenü öffnen",
    menuClose: "Navigationsmenü schließen",
    mobileLangLabel: "Sprache",
  },
  hero: {
    eyebrow: "Softwareentwicklung · Ägypten, Golfstaaten, Europa, USA",
    title: "Mobile Apps und Webplattformen, entwickelt in Kairo.",
    lead: "Arbeiten Sie noch mit Excel-Tabellen, Papierunterlagen und verstreuten Tools? Desert Launch konzipiert und entwickelt die Mobile Apps, Webplattformen, MVPs und internen Systeme, die sie ersetzen – mit einem Festpreis vor jeder Verpflichtung, vollem Eigentum am Code und einem Jahr Support nach dem Launch.",
    tags: [
      "iOS- und Android-Apps",
      "Webplattformen und Portale",
      "Interne Unternehmenssysteme",
    ],
    primary: {
      label: "Kostenloses Angebot per WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Referenzen ansehen", href: "#work" },
    responseNote:
      "Antwort innerhalb von 12 Stunden, meist deutlich schneller. Zeitzone Kairo (UTC+2/+3). Projektsprache Englisch oder Arabisch.",
    showcase: {
      badge: "Live im App Store und bei Google Play",
      caption: "Q-Fight Gym (Doha) und Al-Muslim – zwei Produkte, die Sie sofort öffnen können.",
      label: "Zwei Desert-Launch-Apps auf Smartphone-Bildschirmen",
      alts: [
        "Al-Muslim App auf einem Smartphone – Gebetszeiten des Tages mit Countdown bis zum nächsten Adhan",
        "Q-Fight Gym App auf einem Smartphone – Liste der gebuchten Trainingseinheiten eines Mitglieds",
      ],
    },
    proof: [
      {
        label: "Ausgelieferte Produkte",
        value: "8",
        note: "Alle stehen auf dieser Seite – mobile Apps, rollenbasierte Plattformen und private Unternehmenssysteme.",
      },
      {
        label: "In beiden Stores",
        value: "2 Apps",
        note: "Al-Muslim und Q-Fight Gym – die Store-Links stehen auf ihren Karten.",
      },
      {
        label: "Erste Antwort",
        value: "Unter 12 h",
        note: "Direkt vom Entwickler, der das Produkt bauen würde. Ohne Account-Manager.",
      },
    ],
  },
  work: {
    kicker: "Ausgewählte Referenzen",
    title: "Mobile Apps, Plattformen und interne Systeme, die wir ausgeliefert haben",
    intro:
      "Acht Produkte – von Consumer-Apps über rollenbasierte Plattformen bis zu privaten Unternehmenssystemen. Wo eine App öffentlich ist, steht der Store-Link auf der Karte.",
    attribution:
      "Jedes Produkt hier wurde von unserem Gründer Abdullah Mohamed konzipiert und entwickelt – teils als Kundenprojekt von Desert Launch, teils in früheren Positionen als Senior Engineer. Voicers ist unser eigenes Produkt und noch nicht veröffentlicht.",
    logosLabel: "Von unserem Gründer entwickelte und ausgelieferte Produkte",
    logosPause: "Produkt-Laufband pausieren",
    logosPlay: "Produkt-Laufband abspielen",
    moreLabel: "Weitere Arbeiten – 4 zusätzliche Projekte",
    caseStudyCta: "Case Study lesen",
    similarCta: "So etwas entwickeln lassen",
    storeLabels: { appStore: "App Store", googlePlay: "Google Play" },
    statusLabels: {
      live: "In beiden Stores live",
      delivered: "An Kunden ausgeliefert",
      inHouse: "Eigenes Produkt · vor dem Launch",
    },
    projects: {
      "q-fight-gym": {
        tag: "Buchungs-App · Katar",
        logoAlt: "Q-Fight Gym App-Icon",
        summary:
          "Die offizielle App eines professionellen Muay-Thai-Gyms in Doha. Sie verbindet Mitglieder mit einem Trainingsprogramm unter Leitung thailändischer Weltmeister: Tarife ansehen, Trainer wählen und Einzel- oder Gruppenstunden buchen, ohne an der Rezeption anzurufen.",
        points: [
          "Im App Store und bei Google Play live – für ein Unternehmen, das täglich damit arbeitet.",
          "Tarifübersicht, Trainerwahl und Buchung von Einzel- und Gruppenstunden in der App.",
          "Flutter und Firebase mit angebundenem Zahlungsdienstleister.",
        ],
        shotAlts: [
          "Q-Fight Gym App – die Buchungen eines Mitglieds; jede Karte nennt Trainer, genutzte Einheiten und Enddatum",
          "Q-Fight Gym App – Auswahl des Mitgliedschaftstarifs, von einer einzelnen Personal-Einheit bis zum Dreimonats-Gruppentarif, in Katar-Riyal",
          "Q-Fight Gym App – Suche nach freien Terminen eines Trainers über einen Zeitraum, mit Uhrzeit, Trainingsart und freien Plätzen",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe die Q-Fight-Gym-App auf Ihrer Website gesehen und möchte etwas Ähnliches für mein Unternehmen.",
      },
      "al-muslim": {
        tag: "App für den täglichen Gebrauch",
        logoAlt: "Al-Muslim App-Icon",
        summary:
          "Ein täglicher Begleiter für Muslime: Koran, Adhkar und Duas, präzise Gebetszeiten und Qibla-Richtung, mit intelligenten Erinnerungen, die die App im Alltag verankern. Auf wiederkehrende Nutzung ausgelegt, nicht auf einen einmaligen Download.",
        points: [
          "Im App Store und bei Google Play veröffentlicht.",
          "Flutter mit Push-Benachrichtigungen und Geolokalisierung für präzise Gebetszeiten.",
          "Zweisprachig Arabisch und Englisch mit vollständigem Rechts-nach-links-Layout.",
        ],
        shotAlts: [
          "Al-Muslim App – Gebetszeiten des Tages für die aktuelle Stadt, mit Countdown bis zum nächsten Adhan sowie Hidschri- und gregorianischem Datum",
          "Al-Muslim App – Adhkar-Kategorien für Morgen, Abend, Schlafengehen, Aufwachen, Moschee und nach dem Gebet",
          "Al-Muslim App – der Koran-Leser, geöffnet bei Sure Āl ʿImrān",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe Al-Muslim auf Ihrer Website gesehen und möchte eine ähnliche App entwickeln lassen.",
      },
      ezhal: {
        tag: "Rollenbasierte Plattform für Autoservices",
        logoAlt: "Ezhal App-Icon",
        summary:
          "Eine Autoservice-Plattform für drei Zielgruppen – Kundschaft, Techniker im Einsatz und Management – jeweils mit eigener App, entwickelt aus einer einzigen Codebasis. Kunden buchen, Techniker arbeiten die Aufträge ab, das Management behält den Überblick.",
        points: [
          "Drei rollenspezifische Apps aus einer Codebasis: Buchung, Auftragsabwicklung, Steuerung.",
          "Live-Technikertracking, Abos, Wallet, Punkte, Stempel und Apple-Wallet-Pässe.",
          "Flutter und Riverpod mit MyFatoorah, Stripe und Firebase.",
        ],
        shotAlts: [
          "Ezhal-Website – die Startseite der Plattform, mit einer Live-Momentaufnahme von Buchungen, Kunden, Managern und Mitarbeitenden aus dem laufenden System",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe Ezhal auf Ihrer Website gesehen und möchte eine Multi-App-Plattform planen.",
      },
      "xera-lab": {
        tag: "Plattform für Dental-Fallmanagement",
        logoAlt: "Xera Lab App-Icon",
        summary:
          "Eine Full-Stack-Plattform für Dental-Fallmanagement – ein Kundenportal und ein Admin-Dashboard auf einer Node.js-API – für den Kunden als privates Produktivsystem entwickelt und ausgeliefert.",
        points: [
          "Kundenportal und Admin-Dashboard auf einer gemeinsamen Plattform.",
          "Node.js- und PostgreSQL-API mit rollenbasiertem Zugriff per JWT.",
          "Uploads über AWS S3, Docker Compose und Deployment mit Nginx.",
        ],
        shotAlts: [],
        waMessage:
          "Hallo Desert Launch, ich habe Xera Lab auf Ihrer Website gesehen und möchte eine ähnliche Plattform.",
      },
      fastap: {
        tag: "Digitale NFC-Visitenkarte",
        logoAlt: "FasTap App-Icon",
        summary:
          "Eine NFC-Karte antippen und das komplette Geschäftsprofil teilen – es öffnet sich auf jedem Smartphone, ganz ohne Installation. Eine Flutter-App schreibt die Profile auf die Karten, und eine Flutter-Web-Seite öffnet sich bei jedem geteilten Link.",
        points: [
          "Profilverwaltung und Medien-Updates direkt in der App.",
          "Webprofil öffnet sich direkt nach dem NFC-Scan.",
          "Deployment mit Firebase und Nginx.",
        ],
        shotAlts: [
          "FasTap – eine geteilte Visitenkarte aus Sicht des Empfängers: Foto, Funktion, Schaltfläche zum Speichern des Kontakts, Social-Links sowie Zeilen für Anruf, E-Mail und Adresse",
          "FasTap – Auswahl der sozialen Netzwerke und Kontaktwege, die auf der Karte erscheinen",
          "FasTap – der Profileditor, mit einem Schalter neben jeder Adresse, E-Mail, Telefonnummer und Website zum Ein- oder Ausblenden",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe FasTap auf Ihrer Website gesehen und möchte ein ähnliches Produkt.",
      },
      jaweb: {
        tag: "Quizspiel im Wettkampfmodus",
        logoAlt: "Jaweb App-Icon",
        summary:
          "Ein Quizabend im Wohnzimmer, verwandelt in ein faires, automatisiertes Produkt – zwei Teams, sechs Kategorien, drei Schwierigkeitsgrade, Schiedsrichter-Logik und automatische Punktevergabe.",
        points: [
          "Kompletter Spielablauf mit Team-Wertung und Schiedsrichter-Logik.",
          "Monetarisierung über MyFatoorah-Zahlungen.",
          "Flutter mit Clean Architecture für wiederholtes Spielen.",
        ],
        shotAlts: [
          "Jaweb App – der arabische Startbildschirm mit den Spielen des Nutzers, den angebotenen Spielpaketen und den Hilfsoptionen",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe Jaweb auf Ihrer Website gesehen und möchte ein interaktives Produkt planen.",
      },
      "iccd-hub": {
        tag: "Mitglieder-App einer internationalen Organisation",
        logoAlt: "ICCD Hub App-Icon",
        summary:
          "Eine zweisprachige Begleit-App für Mitglieder der Islamischen Gesellschaft zur Entwicklung des Privatsektors, die Organisationsinhalte mit einer persönlichen Produktivitäts-Suite verbindet.",
        points: [
          "Veranstaltungen, Mitgliedsländer, Tochtergesellschaften und Wissenszentrum an einem Ort.",
          "Aufgaben, Notizen, Kalender und Erinnerungen sowie Gebetszeiten, Qibla und islamischer Kalender.",
          "Anmeldung über Google und Apple, Firebase-Push, Deep Links und vollständige RTL-Unterstützung (EN/AR).",
        ],
        shotAlts: [
          "ICCD Hub – Store-Grafik für die Business-Ressourcen, die die Aufgaben- und Notizliste der App zeigt",
          "ICCD Hub – Store-Grafik für Community-Veranstaltungen, die den Kalender und die kommenden Termine der App zeigt",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe ICCD Hub auf Ihrer Website gesehen und möchte eine App für meine Organisation.",
      },
      voicers: {
        tag: "Social-Audio-Plattform",
        logoAlt: "Voicers App-Icon",
        summary:
          "Eine zweisprachige Social-Audio-Plattform für Creator – Sprachnotizen, Playlists und Live-Bühnen, mit einem Discovery-Feed, der aus Zuhörern ein Publikum macht. Intern als eigenes Produkt entwickelt, nicht veröffentlicht.",
        points: [
          "Sprachnotizen, Playlists und Live-Audio-Bühnen.",
          "Wettbewerbe, Ranglisten und ein auf Interaktion ausgelegter Discovery-Feed.",
          "Flutter mit Clean Architecture. Unser eigenes Produkt, in einem Gespräch vorführbar.",
        ],
        shotAlts: [
          "Voicers App – ein Creator-Profil mit Abonnenten-, Anhör- und Like-Zahlen, einer Bestenliste der besten Sprachnotizen und einer Trendliste",
          "Voicers App – der Discovery-Feed, der den Beitrag eines Creators abspielt, mit Geschenk-, Like-, Kommentar- und Teilen-Schaltflächen",
          "Voicers App – die Abstimmung über Sprachnotizen, gefiltert nach am besten bewertet, neuesten und bereits abgestimmten",
        ],
        waMessage:
          "Hallo Desert Launch, ich habe Voicers auf Ihrer Website gesehen und möchte ein ähnliches Produkt planen.",
      },
    },
  },
  services: {
    kicker: "Leistungen",
    title: "App-Entwicklung, Webentwicklung und MVPs",
    intro:
      "Sechs Leistungen. Jede mit Festpreis in USD, Zahlung nach Meilensteinen, vollem Eigentum am Code und einem Jahr Support.",
    items: {
      mobile: {
        title: "App-Entwicklung",
        body: "Eine Flutter-Codebasis, veröffentlicht im App Store und bei Google Play. Konten, Zahlungen, Push-Benachrichtigungen und Offline-Verhalten gehören zur Entwicklung, nicht zu einer Phase zwei.",
        deliverable: "Eine veröffentlichte iOS- und Android-App in Ihren eigenen Entwickler-Accounts.",
        timeline: "2–4 Monate",
      },
      web: {
        title: "Webentwicklung",
        body: "Unternehmenswebsites, Kundenportale, Admin-Dashboards und vollständige Webplattformen – gebaut für Tempo, Auffindbarkeit und die eine Handlung, die Besucher ausführen sollen.",
        deliverable: "Eine Website oder Plattform auf Ihrem Hosting, die Sie selbst erweitern können.",
        timeline: "2 Wochen – 3 Monate",
      },
      mvp: {
        title: "MVP-Entwicklung",
        body: "Die kleinste Version, die die Idee mit echten Nutzern belegt – auf einer Architektur, die die nächsten drei Features überlebt, statt weggeworfen zu werden.",
        deliverable: "Ein funktionierendes Produkt bei echten Nutzern und eine Empfehlung für den nächsten Schritt.",
        timeline: "1–2 Monate",
      },
      design: {
        title: "UI/UX-Design",
        body: "Screens und Abläufe, die vor der Entwicklung entworfen und abgestimmt werden – damit Buchung, Bestellung oder Registrierung tatsächlich abgeschlossen wird.",
        deliverable: "Klickbare Screens, die Sie vor Entwicklungsbeginn freigeben.",
        timeline: "1–3 Wochen",
      },
      modernize: {
        title: "Neuentwicklung und Modernisierung",
        body: "Übernahme eines langsamen, defekten oder liegengebliebenen Produkts. Wir lesen zuerst den vorhandenen Code und sagen Ihnen ehrlich, ob reparieren oder neu bauen sinnvoller ist.",
        deliverable: "Ein schriftliches Urteil über den bestehenden Code und danach die Umsetzung.",
        timeline: "Ab 2 Wochen",
      },
      consulting: {
        title: "Technische Beratung und Architektur",
        body: "Eine zweite Meinung vor der Einstellung, ein Architektur-Review vor der Skalierung oder ein Umsetzungsplan, den Sie jedem Team übergeben können.",
        deliverable: "Eine schriftliche Empfehlung, die Ihnen gehört – unabhängig davon, wer sie umsetzt.",
        timeline: "2–5 Tage",
      },
    },
    learnMore: "Details zur Leistung",
    timelineLabel: "Übliche Dauer",
    stackLabel: "Technologie-Stack",
    stack: [
      "Flutter",
      "Flutter Web",
      "Node.js",
      "GraphQL- & REST-APIs",
      "PostgreSQL",
      "Firebase",
      "AWS & Docker",
      "Stripe, MyFatoorah & PayTabs",
    ],
    primary: {
      label: "Kostenloses Angebot per WhatsApp",
      href: wa(
        "Hallo Desert Launch, ich sehe mir Ihre Leistungen an und hätte gern ein kostenloses Angebot."
      ),
      external: true,
    },
    secondary: { label: "Briefing per E-Mail senden", href: MAILTO },
  },
  why: {
    kicker: "Warum Desert Launch",
    title: "Warum Unternehmen in Ägypten und am Golf Desert Launch beauftragen",
    intro:
      "Vier Zusagen, die in jedem Projekt schriftlich festgehalten sind. Keine Adjektive darüber, wie modern der Code ist.",
    features: [
      {
        icon: "quote",
        title: "Festpreis vor jeder Verpflichtung",
        body: "Ein schriftlicher Preis in USD nach einem kostenlosen Scope-Gespräch. Keine Stundenabrechnung, keine überraschenden Nachträge – und eine ehrliche Antwort, wenn ein kleinerer Umfang Ihr Ziel erreicht.",
      },
      {
        icon: "ownership",
        title: "Code und Accounts gehören Ihnen",
        body: "Code, geistiges Eigentum, Hosting und Store-Accounts laufen vom ersten Tag an auf Ihren Namen. Endet die Zusammenarbeit, geht nichts davon mit uns.",
      },
      {
        icon: "support",
        title: "Ein Jahr Support inklusive",
        body: "Zwölf Monate Fehlerbehebung, Betriebssystem- und Store-Updates sowie laufender Betrieb. In den ersten drei Monaten sind kleine Änderungen ebenfalls enthalten.",
      },
      {
        icon: "direct",
        title: "Sie sprechen mit dem Entwickler",
        body: "Keine Account-Manager zwischen Ihnen und der Person, die den Code schreibt. Antwort per WhatsApp innerhalb von 12 Stunden, auf Englisch oder Arabisch.",
      },
    ],
    founder: {
      kicker: "Mit wem Sie arbeiten",
      name: "Abdullah Mohamed",
      role: "Gründer & Lead Engineer",
      body: "Senior Software Engineer mit über 5 Jahren Erfahrung in der Entwicklung von Web- und Mobile-Produkten im Produktivbetrieb, für Kunden in Ägypten, den Golfstaaten, Europa und den USA. Ansässig in Kairo – wer Desert Launch schreibt, spricht mit der Person, die das Produkt entwickeln wird.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, Gründer von Desert Launch",
      facts: [
        "Kairo, Ägypten",
        "5+ Jahre im Produktivbetrieb",
        "Flutter · Node.js · PostgreSQL",
      ],
      moreLabel: "Mehr über unsere Arbeitsweise",
    },
    band: {
      kicker: "So starten Projekte",
      body: "Die meisten Projekte beginnen mit einem kostenlosen Scope-Gespräch: Sie beschreiben das Problem, wir sagen Ihnen, was es bräuchte und ob ein kleinerer Umfang genügt. Danach erhalten Sie ein schriftliches Festpreisangebot und einen Meilensteinplan, bevor Sie irgendetwas zahlen.",
      points: [
        "Kostenloses Scope-Gespräch",
        "Schriftliches Festpreisangebot in USD",
        "30 % zu Beginn, der Rest je Meilenstein",
      ],
      cta: {
        label: "Kostenloses Angebot per WhatsApp",
        href: wa("Hallo Desert Launch, ich hätte gern ein kostenloses Scope-Gespräch."),
        external: true,
      },
    },
  },
  process: {
    kicker: "Ablauf",
    title: "Wie ein Projekt läuft – von der ersten Nachricht bis zum Jahr Support",
    intro:
      "Fünf Schritte. Jeder endet mit etwas, das Sie sehen können, und nichts wird bezahlt, bevor Sie den Schritt davor gesehen haben.",
    deliverableLabel: "Sie erhalten",
    steps: [
      {
        n: "1",
        title: "Scope-Gespräch",
        body: "Ein kostenloses Gespräch darüber, wie das Unternehmen heute arbeitet, wer das System nutzen wird und was am Launch-Tag stimmen muss.",
        deliverable: "Eine schriftliche Umfangs-Zusammenfassung und ein ehrliches Ja oder Nein.",
      },
      {
        n: "2",
        title: "Angebot",
        body: "Ein Festpreis in USD, ein Meilensteinplan und ein Termin. Nichts beginnt, bevor Sie schriftlich freigeben und die 30 % Anzahlung leisten.",
        deliverable: "Ein Festpreisangebot und einen Meilensteinplan.",
      },
      {
        n: "3",
        title: "Entwicklung",
        body: "Sie sehen bei jedem Meilenstein funktionierende Software, keine Screenshots. Updates per WhatsApp während der Arbeit, Fragen werden am selben Tag beantwortet.",
        deliverable: "Einen Build, den Sie bei jedem Meilenstein öffnen und benutzen können.",
      },
      {
        n: "4",
        title: "Launch",
        body: "Store-Einreichung, Hosting, Domains und Analytics – alles in Ihren eigenen Accounts eingerichtet. Wir kümmern uns um das Store-Review, bis die App live ist.",
        deliverable: "Eine veröffentlichte App oder eine laufende Plattform, auf Ihren Namen.",
      },
      {
        n: "5",
        title: "Support",
        body: "Zwölf Monate kostenlose Wartung und kostenlosen Support. Die ersten drei Monate umfassen zusätzlich kleine Änderungen und Updates.",
        deliverable: "Ein Jahr Fehlerbehebungen und Updates ohne Zusatzkosten.",
      },
    ],
  },
  testimonials: {
    kicker: "Empfehlungen von Kolleginnen und Kollegen",
    title: "Was Senior Engineers über die Arbeit mit unserem Gründer sagen",
    intro:
      "Öffentliche LinkedIn-Empfehlungen für Abdullah Mohamed von Entwicklerinnen, Entwicklern und Leads, mit denen er zusammengearbeitet hat. Das sind Kollegen-Empfehlungen, keine Kundenbewertungen – die Kundenprojekte stehen oben im Portfolio.",
    sourceLabel: "LinkedIn-Empfehlung",
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
  faq: {
    kicker: "FAQ",
    title: "FAQ: Kosten, Dauer, Eigentum am Code und Support",
    intro:
      "Die Fragen, die jedes Unternehmen beim ersten Softwareprojekt stellt. Fehlt Ihre, stellen Sie sie per WhatsApp – Sie bekommen eine direkte Antwort, kein Verkaufsgespräch.",
    updated: `Zuletzt aktualisiert am ${CONTENT_UPDATED}`,
    items: [
      {
        q: "Was kostet ein Projekt?",
        a: "Jedes Projekt erhält nach einem kostenlosen Scope-Gespräch ein Festpreisangebot in USD – keine Stundenabrechnung und keine überraschenden Rechnungen. Der Preis hängt von Umfang und Komplexität ab: Eine Unternehmenswebsite ist das kleinste Projekt, das wir annehmen, ein vollständiges mobiles Produkt mit Zahlungen und Konten das größte. Nennen Sie uns Ihr Budget, und wir sagen Ihnen ehrlich, was hineinpasst.",
      },
      {
        q: "Wie lange dauert mein Projekt?",
        a: "Eine Unternehmenswebsite dauert in der Regel Wochen, ein MVP ein bis zwei Monate und ein größeres mobiles Produkt zwei bis vier Monate. Sie erhalten vor dem Start einen konkreten Zeitplan mit Meilensteinen und sehen bei jedem Meilenstein funktionierende Software.",
      },
      {
        q: "Was passiert nach dem Launch?",
        a: "Zwölf Monate kostenlose Wartung und kostenloser Support: Fehlerbehebung, Betriebssystem- und Store-Updates sowie der laufende Betrieb. In den ersten drei Monaten sind zusätzlich kleine Änderungen enthalten. Danach ist ein monatlicher Wartungsvertrag optional – es geht nichts kaputt, wenn Sie darauf verzichten.",
      },
      {
        q: "Wem gehört der Code?",
        a: "Ihnen. Volles Eigentum am Code, am geistigen Eigentum sowie an den Infrastruktur- und Store-Accounts – alles wird von Anfang an auf Ihren Namen angelegt, Sie sind also zu keinem Zeitpunkt an uns gebunden.",
      },
      {
        q: "Wie funktioniert die Bezahlung?",
        a: "Projekte werden in drei oder vier Meilensteine aufgeteilt. Sie zahlen 30 % zu Beginn und den Rest je geliefertem Meilenstein. Sie sehen immer funktionierende Software, bevor die nächste Zahlung fällig wird, und ein Meilenstein gilt erst als abgenommen, wenn Sie das sagen.",
      },
      {
        q: "Unterzeichnen Sie eine Geheimhaltungsvereinbarung?",
        a: "Ja. Schicken Sie Ihre NDA vor dem Scope-Gespräch, oder wir stellen eine einfache gegenseitige Vereinbarung bereit. Für ein Angebot brauchen wir weder Ihre Daten noch Ihre Accounts – eine Beschreibung des Problems genügt.",
      },
      {
        q: "Wer macht die Arbeit tatsächlich?",
        a: "Abdullah entwickelt jedes Desert-Launch-Projekt persönlich – dieselbe Person, der Sie auf WhatsApp schreiben, schreibt auch den Code. Nichts wird an einen Subunternehmer weitergereicht, den Sie nie zu Gesicht bekommen. Braucht ein Projekt eine Spezialistin oder einen Spezialisten, erfahren Sie vorher, wer das ist und warum.",
      },
      {
        q: "Wir sind nicht technisch. Ist das ein Problem?",
        a: "Überhaupt nicht – die meisten unserer Kunden sind es nicht. Wir erklären Entscheidungen in klarer Geschäftssprache, übernehmen die technischen Entscheidungen und kommunizieren per WhatsApp auf Englisch oder Arabisch.",
      },
      {
        q: "Flutter oder natives iOS und Android?",
        a: "In fast allen Fällen Flutter. Eine Codebasis erscheint in beiden Stores, was Entwicklungs- und Wartungskosten etwa halbiert, und für die Apps, die die meisten Unternehmen brauchen, ist das Ergebnis von einer nativen App nicht zu unterscheiden. Hängt Ihr Produkt an etwas, das Flutter nicht gut erreicht, sagen wir das und kalkulieren nativ.",
      },
      {
        q: "Können Sie eine bestehende App oder Website übernehmen?",
        a: "Ja. Wir beginnen mit einem kurzen Code-Review und geben Ihnen ein schriftliches Urteil: reparieren, refaktorieren oder neu bauen. Manchmal lautet die ehrliche Antwort, dass der Code in Ordnung ist und das Problem woanders liegt – auch die bekommen Sie.",
      },
      {
        q: "Was kostet der Betrieb nach dem Launch?",
        a: "Hosting und Dienste werden Ihnen direkt in Ihren eigenen Accounts berechnet, sodass Sie stets die realen Kosten sehen: üblicherweise eine kleine monatliche Rechnung für Firebase oder einen Server, dazu das Apple Developer Program für 99 USD im Jahr und die einmalige Google-Play-Registrierung für 25 USD, wenn Sie eine App veröffentlichen. Wir schätzen die Betriebskosten im Angebot, damit es keine Überraschungen gibt.",
      },
      {
        q: "Entwickeln Sie Apps auf Arabisch und mit Rechts-nach-links-Layout?",
        a: "Ja, regelmäßig. Al-Muslim, ICCD Hub und Voicers laufen alle zweisprachig auf Arabisch und Englisch mit vollständigem RTL-Layout, arabischer Typografie und Hidschri-Daten. Diese Website ist ein weiteres Beispiel.",
      },
      {
        q: "Arbeiten Sie mit Kunden in Saudi-Arabien, den VAE und den Golfstaaten?",
        a: "Ja. Desert Launch arbeitet mit Kunden in Ägypten, Saudi-Arabien, den VAE, Katar und Kuwait sowie in Europa und den USA. Wir arbeiten aus Kairo (UTC+2 im Winter, UTC+3 im Sommer) und liegen damit innerhalb einer Stunde zu jeder Hauptstadt am Golf, kommunizieren per WhatsApp auf Arabisch oder Englisch und haben für Unternehmen am Golf ausgeliefert – darunter eine im App Store und bei Google Play veröffentlichte App für ein Kampfsportstudio in Doha.",
      },
      {
        q: "Warum ein Softwareunternehmen in Ägypten beauftragen?",
        a: "Sie erhalten Senior-Engineering zu ägyptischen Konditionen – in der Regel deutlich unter westeuropäischen und US-Agenturpreisen für denselben Umfang – ohne die typischen Nachteile der Auslagerung: gleiche oder nahezu gleiche Zeitzone wie die Golfstaaten und Europa, Arabisch als Muttersprache plus fließendes Englisch und ein direkter Draht zum Entwickler Ihres Produkts statt einer Kette von Ansprechpartnern.",
      },
    ],
  },
  contact: {
    kicker: "Jetzt starten",
    title: "Erzählen Sie uns, wie Ihr Unternehmen heute arbeitet",
    intro:
      "Beschreiben Sie die Produktidee, das aktuelle System oder den Prozess, der ständig hakt. WhatsApp ist der schnellste Weg für ein direktes Gespräch; E-Mail eignet sich besser für längere Briefings und Dokumente.",
    highlights: [
      "Eine Empfehlung zu Umfang und schnellstem Weg zum Launch – kostenlos und vor jeder Verpflichtung.",
      "Ein Festpreis in USD, damit Sie die Zahl kennen, bevor Sie entscheiden.",
      "Auf dieser Website wird nichts gespeichert: Das Formular entwirft eine Nachricht und übergibt sie an WhatsApp oder Ihr E-Mail-Programm.",
    ],
    primary: { label: "Kostenloses Angebot per WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Briefing per E-Mail senden", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    direct: {
      heading: "Direkt Kontakt aufnehmen",
      body: "Lieber ohne Formular? Diese Wege erreichen dieselbe Person.",
      whatsapp: { label: "WhatsApp", value: PHONE_DISPLAY },
      email: { label: "E-Mail", value: EMAIL },
      phone: { label: "Telefon", value: PHONE_DISPLAY },
      location: { label: "Standort", value: "Kairo, Ägypten" },
      hours: { label: "Antwortzeit", value: "Innerhalb von 12 Stunden · Zeitzone Kairo (UTC+2/+3)" },
    },
    form: {
      heading: "Projekt-Briefing senden",
      body: "Fünf Felder. Das Formular entwirft die Nachricht und öffnet sie in WhatsApp oder Ihrem E-Mail-Programm – von dieser Seite wird nichts versendet.",
      name: "Ihr Name",
      namePlaceholder: "Name",
      reply: "E-Mail oder Telefon",
      replyPlaceholder: "sie@unternehmen.de",
      replyHelp: "Damit wir antworten können, falls WhatsApp Sie nicht erreicht.",
      projectType: "Was brauchen Sie?",
      projectTypePlaceholder: "Bitte auswählen",
      projectTypeOptions: [
        "Mobile App (iOS und Android)",
        "Unternehmenswebsite",
        "Webplattform oder Portal",
        "Internes System / Verwaltung",
        "MVP für ein neues Produkt",
        "Neuentwicklung eines bestehenden Produkts",
        "Noch unklar",
      ],
      budget: "Budgetrahmen (USD)",
      budgetPlaceholder: "Bereich auswählen",
      budgetOptions: [
        "Unter 3.000 $",
        "3.000 – 8.000 $",
        "8.000 – 20.000 $",
        "Über 20.000 $",
        "Noch unklar",
      ],
      budgetHelp: "Ein Bereich genügt. Er zeigt uns, was realistisch ist, bevor wir kalkulieren.",
      timeline: "Zeitrahmen",
      timelinePlaceholder: "Zeitrahmen auswählen",
      timelineOptions: [
        "So schnell wie möglich",
        "Innerhalb von 1 Monat",
        "1 bis 3 Monate",
        "Mehr als 3 Monate",
      ],
      summary: "Was möchten Sie entwickeln?",
      summaryPlaceholder:
        "Was soll es können, für wen ist es gedacht, und was funktioniert heute nicht?",
      requiredMark: "Pflichtfeld",
      optionalMark: "optional",
      submitWhatsapp: "Briefing in WhatsApp öffnen",
      submitEmail: "Briefing per E-Mail öffnen",
      sending: "Wird geöffnet …",
      opened: "Ihr Briefing ist fertig. Senden Sie die Nachricht, die sich gerade geöffnet hat.",
      blocked: "Ihr Browser hat das Pop-up blockiert.",
      blockedLink: "WhatsApp manuell öffnen",
      errors: {
        heading: "Bitte prüfen Sie diese Felder vor dem Senden:",
        name: "Bitte geben Sie Ihren Namen an.",
        reply: "Bitte geben Sie eine E-Mail-Adresse oder Telefonnummer an.",
        replyInvalid: "Das sieht weder nach einer E-Mail-Adresse noch nach einer Telefonnummer aus.",
        summary: "Bitte beschreiben Sie in ein bis zwei Sätzen, was Sie entwickeln möchten.",
      },
      note: "Es wird nichts gespeichert oder gesendet, bis Sie in WhatsApp oder Ihrem E-Mail-Programm auf Senden tippen.",
      draftIntro: "Hallo Desert Launch,\n\nhier ist das Briefing für ein Projekt.",
      draftLabels: {
        name: "Name",
        reply: "Kontakt",
        projectType: "Projektart",
        budget: "Budgetrahmen",
        timeline: "Zeitrahmen",
        summary: "Was entwickelt werden soll",
      },
      emailSubject: "Projekt-Briefing – Desert Launch",
    },
  },
  footer: {
    tagline: "Software-Studio – Kairo, Ägypten",
    blurb:
      "Desert Launch entwickelt Mobile Apps, Webplattformen und interne Systeme für Unternehmen in Ägypten, den Golfstaaten, Europa und den USA.",
    copyright: "© 2026 Desert Launch. Alle Rechte vorbehalten.",
    navHeading: "Navigation",
    navLinks: [
      { label: "Referenzen", sub: "Produkte im App Store und bei Google Play", href: "#work" },
      { label: "Leistungen", sub: "Was Desert Launch entwickelt", href: "#services" },
      { label: "Warum wir", sub: "Festpreis, Eigentum am Code, ein Jahr Support", href: "#why-us" },
      { label: "Ablauf", sub: "Vom Scope-Gespräch bis zum Launch in fünf Schritten", href: "#process" },
      { label: "FAQ", sub: "Kosten, Dauer, Eigentum und Support", href: "#faq" },
      { label: "Kontakt", sub: "Briefing senden oder per WhatsApp schreiben", href: "#contact" },
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
    identity: {
      heading: "Desert Launch",
      body: "Ein unabhängiges Software-Studio mit Sitz in Kairo, Ägypten. Jedes Projekt wird von Abdullah Mohamed konzipiert und entwickelt.",
      addressLabel: "Adresse",
      address: "Kairo, Ägypten",
      links: [
        { label: "Datenschutz", slug: "privacy" },
        { label: "Zusammenarbeit", slug: "terms" },
        { label: "Über uns", slug: "about" },
      ],
    },
    note: "Senden Sie ein Briefing über den Kontaktbereich oben und führen Sie das Gespräch per WhatsApp oder E-Mail fort.",
  },
  a11y: {
    home: "Desert Launch – Startseite",
    primaryNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    footerNav: "Fußzeilen-Navigation",
    breadcrumb: "Breadcrumb-Navigation",
    proofPoints: "Wichtige Kennzahlen",
    heroTags: "Was Desert Launch entwickelt",
    techStack: "Wichtigste Technologien",
    projectStack: "Eingesetzte Technologien",
    founderPanel: "Mit wem Sie arbeiten",
    founderFacts: "Angaben zum Gründer",
    engagementPoints: "So starten Projekte",
    briefBenefits: "Was Ihnen ein Briefing bringt",
    companySummary: "Kurzprofil des Unternehmens",
    quickNav: "Schnellnavigation",
    directContact: "Direkter Kontakt",
    newTab: "wird in einem neuen Tab geöffnet",
  },
  common: {
    home: "Startseite",
    servicesLabel: "Leistungen",
    workLabel: "Referenzen",
    readCaseStudy: "Case Study lesen",
    allWork: "Alle Referenzen ansehen",
    allServices: "Alle Leistungen",
    relatedWork: "Passende Referenzen",
    relatedServices: "Passende Leistungen",
    faqHeading: "Häufige Fragen",
    onThisPage: "Auf dieser Seite",
    published: "Veröffentlicht",
    lastUpdated: "Aktualisiert",
    backHome: "Zurück zur Startseite",
    notFound: {
      title: "Diese Seite gibt es nicht",
      body: "Der Link ist womöglich veraltet. Alles auf der Website ist einen Klick entfernt.",
    },
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Zum Inhalt springen",
};
