import type { Dictionary } from "./types";
import { wa, MAILTO, PHONE_DISPLAY, EMAIL, CONTENT_UPDATED } from "./shared";

const GENERIC =
  "Bonjour Desert Launch, je souhaite obtenir un devis gratuit pour un projet logiciel.";

export const fr: Dictionary = {
  lang: "fr",
  dir: "ltr",
  meta: {
    title: "Agence de développement mobile et web au Caire | Desert Launch",
    description:
      "Développement d'applications mobiles, de plateformes web et de MVP au Caire. Devis fixe, code qui vous appartient, un an de support.",
    ogLocale: "fr_FR",
    ogImageAlt:
      "Desert Launch — agence de développement d'applications et de logiciels au Caire, Égypte",
  },
  nav: [
    { label: "Réalisations", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#why-us" },
    { label: "Méthode", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    tagline: "Développement mobile, web et produit — Le Caire, Égypte",
    emailUs: "Écrivez-nous",
    startProject: { label: "Devis gratuit", href: wa(GENERIC), external: true },
    langCode: "FR",
    langAria: "Choisir la langue",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
    mobileLangLabel: "Langue",
  },
  hero: {
    eyebrow: "Studio de développement logiciel · Égypte, Golfe, Europe, États-Unis",
    title: "Applications mobiles et plateformes web, conçues au Caire.",
    lead: "Vous travaillez encore avec des fichiers Excel, des dossiers papier et des outils dispersés ? Desert Launch conçoit et développe les applications mobiles, plateformes web, MVP et systèmes internes qui les remplacent — avec un devis fixe avant tout engagement, la propriété complète du code et un an de support après le lancement.",
    tags: [
      "Applications iOS et Android",
      "Plateformes web et portails",
      "Systèmes internes de gestion",
    ],
    primary: {
      label: "Obtenir un devis gratuit sur WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Voir nos réalisations", href: "#work" },
    responseNote:
      "Réponse sous 12 heures, souvent bien plus vite. Heure du Caire (UTC+2/+3). Échanges en anglais ou en arabe.",
    showcase: {
      badge: "En ligne sur l'App Store et Google Play",
      caption: "Q-Fight Gym (Doha) et Al-Muslim — deux produits que vous pouvez ouvrir maintenant.",
      label: "Deux applications Desert Launch affichées sur des écrans de téléphone",
    },
    proof: [
      {
        label: "Produits livrés",
        value: "10+",
        note: "Applications mobiles, plateformes web et systèmes internes en production.",
      },
      {
        label: "Publiés sur les deux stores",
        value: "2 apps",
        note: "Al-Muslim et Q-Fight Gym — les liens sont sur leurs fiches ci-dessous.",
      },
      {
        label: "Première réponse",
        value: "Sous 12 h",
        note: "Directement par l'ingénieur qui développera le produit. Sans intermédiaire.",
      },
    ],
  },
  work: {
    kicker: "Réalisations choisies",
    title: "Applications mobiles, plateformes et systèmes internes que nous avons livrés",
    intro:
      "Huit produits, du mobile grand public aux plateformes multi-rôles et aux systèmes métier privés. Quand une application est publique, le lien vers le store figure sur sa fiche.",
    attribution:
      "Chaque produit présenté ici a été conçu et développé par notre fondateur, Abdullah Mohamed — dans le cadre de missions Desert Launch et de postes d'ingénieur senior antérieurs. Voicers est notre produit interne et n'est pas encore publié.",
    logosLabel: "Produits conçus et livrés par notre fondateur",
    logosPause: "Mettre en pause le défilement des produits",
    logosPlay: "Lancer le défilement des produits",
    moreLabel: "Autres réalisations — 4 projets supplémentaires",
    caseStudyCta: "Lire l'étude de cas",
    similarCta: "Créer un produit similaire",
    storeLabels: { appStore: "App Store", googlePlay: "Google Play" },
    statusLabels: {
      live: "En ligne sur les deux stores",
      delivered: "Livré au client",
      inHouse: "Produit interne · avant lancement",
    },
    projects: {
      "q-fight-gym": {
        tag: "Application de réservation · Qatar",
        logoAlt: "Icône de l'application Q-Fight Gym",
        summary:
          "L'application officielle d'une salle professionnelle de Muay Thai à Doha, qui relie les membres à un programme d'entraînement mené par des champions du monde thaïlandais. Le membre consulte les formules, choisit son coach et réserve ses séances sans appeler l'accueil.",
        points: [
          "Publiée sur l'App Store et Google Play pour une entreprise qui s'en sert au quotidien.",
          "Consultation des formules, choix du coach et réservation de séances individuelles ou collectives.",
          "Flutter et Firebase avec une passerelle de paiement intégrée.",
        ],
        shotAlts: [
          "Application Q-Fight Gym — écran du programme d'entraînement de Muay Thai",
          "Application Q-Fight Gym — planning hebdomadaire et créneaux disponibles",
          "Application Q-Fight Gym — formules d'abonnement et écran de réservation",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu l'application Q-Fight Gym sur votre site et je souhaite une application similaire.",
      },
      "al-muslim": {
        tag: "Application compagnon du quotidien",
        logoAlt: "Icône de l'application Al-Muslim",
        summary:
          "Un compagnon quotidien du musulman : Coran, adhkar et douas, horaires de prière précis et direction de la qibla, avec des rappels intelligents qui l'ancrent dans la journée. Conçue pour l'usage répété, pas pour un simple téléchargement.",
        points: [
          "Publiée sur l'App Store et Google Play.",
          "Flutter avec notifications push et géolocalisation pour des horaires précis.",
          "Bilingue arabe et anglais, avec une mise en page RTL complète.",
        ],
        shotAlts: [
          "Application Al-Muslim — horaires de prière et compte à rebours de la prochaine prière",
          "Application Al-Muslim — accueil avec adhkar, douas et raccourci qibla",
          "Application Al-Muslim — écran de lecture du Coran en arabe",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Al-Muslim sur votre site et je souhaite une application mobile de ce type.",
      },
      ezhal: {
        tag: "Plateforme de services auto multi-rôles",
        logoAlt: "Icône de l'application Ezhal",
        summary:
          "Une plateforme de services automobiles au service de trois publics — clients, techniciens de terrain et responsables — chacun avec son application, issue d'une seule base de code. Le client réserve, le technicien intervient, le responsable suit.",
        points: [
          "Trois applications par rôle depuis une base de code unique : réservation, interventions, pilotage.",
          "Suivi des techniciens en direct, abonnements, portefeuille, points, tampons et cartes Apple Wallet.",
          "Flutter et Riverpod avec MyFatoorah, Stripe et Firebase.",
        ],
        shotAlts: [
          "Plateforme Ezhal — une couche de pilotage unique pour clients, responsables et employés",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Ezhal sur votre site et je souhaite concevoir une plateforme multi-applications.",
      },
      "xera-lab": {
        tag: "Plateforme de gestion des cas dentaires",
        logoAlt: "Icône de l'application Xera Lab",
        summary:
          "Une plateforme full-stack de gestion des cas dentaires — un portail client et un tableau de bord administrateur reposant sur une API Node.js — conçue et livrée au client comme système de production privé.",
        points: [
          "Portail client et tableau de bord administrateur sur une plateforme partagée.",
          "API Node.js et PostgreSQL avec accès par rôles via JWT.",
          "Envoi de fichiers vers AWS S3, Docker Compose et déploiement Nginx.",
        ],
        shotAlts: [],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Xera Lab sur votre site et je souhaite une plateforme de ce type.",
      },
      fastap: {
        tag: "Carte de visite numérique NFC",
        logoAlt: "Icône de l'application FasTap",
        summary:
          "Approchez une carte NFC pour partager un profil professionnel complet — il s'ouvre sur n'importe quel téléphone, sans installation. Une application Flutter écrit les profils sur les cartes, et une page Flutter Web s'ouvre à chaque lien de partage.",
        points: [
          "Gestion du profil et mise à jour des médias depuis le mobile.",
          "Profil web ouvert directement après un scan NFC.",
          "Déployé avec Firebase et Nginx.",
        ],
        shotAlts: [
          "Application FasTap — carte de visite numérique telle que la voit le destinataire",
          "Application FasTap — éditeur de profil avec liens, médias et coordonnées",
          "Application FasTap — profil web ouvert après une lecture NFC",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu FasTap sur votre site et je souhaite un produit similaire.",
      },
      jaweb: {
        tag: "Jeu de quiz compétitif",
        logoAlt: "Icône de l'application Jaweb",
        summary:
          "Une soirée quiz entre amis transformée en produit équitable et automatisé — deux équipes, six catégories, trois niveaux de difficulté, une logique d'arbitrage et un comptage automatique des points.",
        points: [
          "Déroulé de jeu complet avec score par équipe et logique d'arbitrage.",
          "Monétisation via les paiements MyFatoorah.",
          "Flutter avec une architecture propre, conçue pour des parties répétées.",
        ],
        shotAlts: [
          "Application Jaweb — écran de configuration avec noms d'équipes et catégories",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Jaweb sur votre site et je souhaite concevoir un produit interactif.",
      },
      "iccd-hub": {
        tag: "Application membres d'une organisation internationale",
        logoAlt: "Icône de l'application ICCD Hub",
        summary:
          "Une application bilingue destinée aux membres de la Société islamique pour le développement du secteur privé, associant contenus institutionnels et suite de productivité personnelle.",
        points: [
          "Événements, pays membres, filiales et centre de connaissances réunis au même endroit.",
          "Tâches, notes, calendrier et rappels, avec horaires de prière, qibla et calendrier hégirien.",
          "Connexion Google et Apple, notifications Firebase, liens profonds et prise en charge RTL complète (EN/AR).",
        ],
        shotAlts: [
          "Application ICCD Hub — écran des événements et de la mise en relation",
          "Application ICCD Hub — bibliothèque de ressources professionnelles",
          "Application ICCD Hub — écran d'engagement communautaire",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu ICCD Hub sur votre site et je souhaite une application pour mon organisation.",
      },
      voicers: {
        tag: "Plateforme audio sociale",
        logoAlt: "Icône de l'application Voicers",
        summary:
          "Une plateforme audio sociale bilingue pour créateurs — notes vocales, playlists et scènes en direct, avec un fil de découverte qui transforme les auditeurs en audience. Développée en interne comme notre propre produit ; non publiée.",
        points: [
          "Notes vocales, playlists et scènes audio en direct.",
          "Concours, classements et fil de découverte pensés pour l'engagement.",
          "Flutter en architecture propre. Notre produit, présentable lors d'un appel.",
        ],
        shotAlts: [
          "Application Voicers — fil de découverte des notes vocales des créateurs",
          "Application Voicers — scène audio en direct avec intervenants et auditeurs",
          "Application Voicers — profil de créateur et playlists de notes vocales",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Voicers sur votre site et je souhaite concevoir un produit de ce type.",
      },
    },
  },
  services: {
    kicker: "Services",
    title: "Développement d'applications mobiles, web et de MVP",
    intro:
      "Six prestations. Chacune avec un devis fixe en USD, des paiements par jalons, la propriété complète du code et un an de support.",
    items: {
      mobile: {
        title: "Développement d'applications mobiles",
        body: "Une base de code Flutter publiée sur l'App Store et Google Play. Comptes, paiements, notifications et fonctionnement hors ligne font partie du développement, pas d'une phase deux.",
        deliverable: "Une application iOS et Android publiée dans vos propres comptes développeur.",
        timeline: "2 à 4 mois",
      },
      web: {
        title: "Développement web",
        body: "Sites vitrines, portails clients, tableaux de bord et plateformes web complètes — conçus pour la vitesse, le référencement et l'action que vos visiteurs doivent accomplir.",
        deliverable: "Un site ou une plateforme en ligne sur votre hébergement, que vous pouvez faire évoluer.",
        timeline: "2 semaines à 3 mois",
      },
      mvp: {
        title: "Développement de MVP",
        body: "La plus petite version qui valide l'idée auprès de vrais utilisateurs, sur une architecture qui survivra aux trois fonctionnalités suivantes au lieu d'être jetée.",
        deliverable: "Un produit fonctionnel entre les mains d'utilisateurs réels, et la suite à construire.",
        timeline: "1 à 2 mois",
      },
      design: {
        title: "Design UI/UX",
        body: "Des écrans et des parcours conçus et validés avant d'être développés, pour que la réservation, la commande ou l'inscription aille vraiment jusqu'au bout.",
        deliverable: "Des écrans cliquables que vous validez avant le développement.",
        timeline: "1 à 3 semaines",
      },
      modernize: {
        title: "Refonte et modernisation",
        body: "Reprise d'un produit lent, cassé ou abandonné. Nous lisons d'abord le code existant et vous disons honnêtement s'il faut le réparer ou le reconstruire.",
        deliverable: "Un avis écrit sur le code actuel, puis le travail lui-même.",
        timeline: "À partir de 2 semaines",
      },
      consulting: {
        title: "Conseil technique et architecture",
        body: "Un second avis avant de recruter, une revue d'architecture avant de passer à l'échelle, ou un plan de livraison que vous pouvez confier à n'importe quelle équipe.",
        deliverable: "Une recommandation écrite qui vous appartient, quelle que soit l'équipe qui la met en œuvre.",
        timeline: "2 à 5 jours",
      },
    },
    learnMore: "Détail du service",
    timelineLabel: "Durée typique",
    stackLabel: "Stack principale",
    stack: [
      "Flutter",
      "Flutter Web",
      "Node.js",
      "API GraphQL & REST",
      "PostgreSQL",
      "Firebase",
      "AWS & Docker",
      "Stripe, MyFatoorah & PayTabs",
    ],
    primary: {
      label: "Obtenir un devis gratuit sur WhatsApp",
      href: wa(
        "Bonjour Desert Launch, je regarde vos services et je souhaite un devis gratuit."
      ),
      external: true,
    },
    secondary: { label: "Envoyer un brief par e-mail", href: MAILTO },
  },
  why: {
    kicker: "Pourquoi Desert Launch",
    title: "Pourquoi les entreprises d'Égypte et du Golfe choisissent Desert Launch",
    intro:
      "Quatre engagements inscrits dans chaque mission. Pas des adjectifs sur la modernité du code.",
    features: [
      {
        icon: "quote",
        title: "Un devis fixe avant tout engagement",
        body: "Un prix écrit en USD après un appel de cadrage gratuit. Pas de facturation à l'heure, pas d'avenants surprises, et une réponse honnête si une version plus légère atteint votre objectif.",
      },
      {
        icon: "ownership",
        title: "Le code et les comptes vous appartiennent",
        body: "Code, propriété intellectuelle, hébergement et comptes des stores sont à votre nom dès le premier jour. Si notre collaboration s'arrête, rien de ce qui est à vous ne part avec nous.",
      },
      {
        icon: "support",
        title: "Un an de support inclus",
        body: "Douze mois de corrections, de mises à jour système et stores, et de maintien en conditions opérationnelles. Les trois premiers mois incluent aussi les petits ajustements.",
      },
      {
        icon: "direct",
        title: "Vous parlez à l'ingénieur",
        body: "Aucun chargé de compte entre vous et la personne qui écrit le code. Réponse sur WhatsApp sous 12 heures, en anglais ou en arabe.",
      },
    ],
    founder: {
      kicker: "Avec qui vous travaillez",
      name: "Abdullah Mohamed",
      role: "Fondateur et ingénieur principal",
      body: "Ingénieur logiciel senior avec plus de 5 ans d'expérience dans la livraison de produits web et mobiles en production, pour des clients en Égypte, dans le Golfe, en Europe et aux États-Unis. Basé au Caire — quand vous écrivez à Desert Launch, vous parlez à la personne qui construira votre produit.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, fondateur de Desert Launch",
      facts: [
        "Le Caire, Égypte",
        "5+ ans en production",
        "Flutter · Node.js · PostgreSQL",
      ],
      moreLabel: "En savoir plus sur notre façon de travailler",
    },
    band: {
      kicker: "Comment démarre une collaboration",
      body: "La plupart des projets commencent par un appel de cadrage gratuit : vous décrivez le problème, nous vous disons ce qu'il faudrait et si une version plus légère suffit. Vous recevez ensuite un devis fixe écrit et un plan de jalons avant tout paiement.",
      points: [
        "Appel de cadrage gratuit",
        "Devis fixe écrit en USD",
        "30 % au démarrage, le reste par jalon",
      ],
      cta: {
        label: "Obtenir un devis gratuit sur WhatsApp",
        href: wa("Bonjour Desert Launch, je souhaite un appel de cadrage gratuit."),
        external: true,
      },
    },
  },
  process: {
    kicker: "Méthode",
    title: "Le déroulé d'un projet, du premier message à l'année de support",
    intro:
      "Cinq étapes. Chacune se termine par un livrable visible, et rien n'est payé avant que vous ayez vu l'étape précédente.",
    deliverableLabel: "Vous recevez",
    steps: [
      {
        n: "1",
        title: "Appel de cadrage",
        body: "Un appel gratuit sur le fonctionnement actuel de l'activité, les utilisateurs du futur système et ce qui doit être vrai le jour du lancement.",
        deliverable: "Un résumé de périmètre écrit et un go/no-go honnête.",
      },
      {
        n: "2",
        title: "Devis",
        body: "Un prix fixe en USD, un plan de jalons et une date. Rien ne démarre avant votre validation écrite et l'acompte de 30 %.",
        deliverable: "Un devis fixe et un calendrier de jalons.",
      },
      {
        n: "3",
        title: "Développement",
        body: "Vous voyez un logiciel qui fonctionne à chaque jalon, pas des captures d'écran. Des points sur WhatsApp au fil de l'avancement et des réponses le jour même.",
        deliverable: "Une version que vous pouvez ouvrir et utiliser à chaque jalon.",
      },
      {
        n: "4",
        title: "Lancement",
        body: "Soumission aux stores, hébergement, noms de domaine et analytics, tout configuré dans vos propres comptes. Nous gérons les retours de validation jusqu'à la mise en ligne.",
        deliverable: "Une application publiée ou une plateforme en ligne, à votre nom.",
      },
      {
        n: "5",
        title: "Support",
        body: "Douze mois de support et de maintenance gratuits. Les trois premiers mois incluent également les petites modifications et mises à jour.",
        deliverable: "Un an de corrections et de mises à jour sans frais.",
      },
    ],
  },
  testimonials: {
    kicker: "Recommandations de pairs",
    title: "Ce que des ingénieurs seniors disent de notre fondateur",
    intro:
      "Recommandations LinkedIn publiques d'Abdullah Mohamed, écrites par des ingénieurs et des responsables techniques qui ont travaillé à ses côtés. Ce sont des avis de collègues, pas de clients — les projets clients sont présentés ci-dessus.",
    sourceLabel: "Recommandation LinkedIn",
    items: [
      {
        quote:
          "Abdullah a démontré une capacité impressionnante à assimiler rapidement des concepts techniques complexes. Ses qualités d'analyse et son approche réfléchie de la résolution de problèmes en font un contributeur clé au succès de notre équipe.",
        name: "Mohamed Sayed",
        role: "Responsable IA · Appenza",
        photo: "/assets/testimonial-mohamed-sayed.webp",
      },
      {
        quote:
          "Abdullah allie une expertise technique pointue à un style de leadership clair et accessible. Il a contribué de manière significative à nos projets grâce à sa capacité à résoudre efficacement des problèmes complexes et à son exigence de qualité.",
        name: "Ahmed Farid",
        role: "Ingénieur logiciel senior · Recovery Advisers",
        photo: "/assets/testimonial-ahmed-farid.webp",
      },
      {
        quote:
          "Abdullah est un développeur Flutter exceptionnel, dont le talent et l'enthousiasme sont un atout pour n'importe quelle équipe. Pendant notre année de collaboration, sa capacité à résoudre les problèmes et à surmonter les obstacles m'a constamment impressionné.",
        name: "Mohamad Zakaria",
        role: "Ingénieur QA senior · Yassir",
        photo: "/assets/testimonial-mohamad-zakaria.webp",
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "FAQ : coût, délais, propriété du code et support",
    intro:
      "Les questions que se pose toute entreprise qui achète un logiciel pour la première fois. Si la vôtre n'y est pas, posez-la sur WhatsApp — vous aurez une réponse directe, pas un argumentaire.",
    updated: `Dernière mise à jour : ${CONTENT_UPDATED}`,
    items: [
      {
        q: "Combien coûte un projet ?",
        a: "Chaque projet reçoit un devis fixe en USD après un appel de cadrage gratuit — pas de facturation à l'heure ni de factures surprises. Le prix dépend du périmètre et de la complexité : un site vitrine est la plus petite mission que nous prenons, un produit mobile complet avec paiements et comptes la plus grande. Dites-nous le budget que vous avez en tête et nous vous dirons honnêtement ce qui tient dedans.",
      },
      {
        q: "Combien de temps prendra mon projet ?",
        a: "Un site vitrine se compte généralement en semaines, un MVP en un à deux mois, et un produit mobile plus ambitieux en deux à quatre mois. Vous recevez un calendrier concret avec des jalons avant le démarrage, et vous voyez un logiciel qui fonctionne à chaque jalon.",
      },
      {
        q: "Que se passe-t-il après le lancement ?",
        a: "Douze mois de support et de maintenance gratuits : corrections de bugs, mises à jour des systèmes et des stores, et maintien en fonctionnement. Les trois premiers mois incluent aussi les petites modifications. Ensuite, un forfait mensuel est optionnel — rien ne cesse de fonctionner si vous n'y souscrivez pas.",
      },
      {
        q: "Qui est propriétaire du code ?",
        a: "Vous. Pleine propriété du code, de la propriété intellectuelle et des comptes d'infrastructure et de stores — tout est créé à votre nom dès le départ, vous n'êtes donc jamais dépendant de nous.",
      },
      {
        q: "Comment fonctionnent les paiements ?",
        a: "Les projets sont découpés en trois ou quatre jalons. Vous payez 30 % au démarrage et le reste à chaque jalon livré. Vous voyez toujours un logiciel qui fonctionne avant l'échéance suivante, et un jalon n'est validé que lorsque vous le dites.",
      },
      {
        q: "Signez-vous un accord de confidentialité ?",
        a: "Oui. Envoyez le vôtre avant l'appel de cadrage, ou nous fournirons un accord mutuel simple. Nous n'avons besoin ni de vos données ni de vos comptes pour chiffrer — une description du problème suffit.",
      },
      {
        q: "Qui réalise concrètement le travail ?",
        a: "Abdullah développe personnellement chaque projet Desert Launch — la personne à qui vous écrivez sur WhatsApp est celle qui écrit le code. Rien n'est confié à un sous-traitant que vous ne rencontrez jamais. Si un projet nécessite un spécialiste, vous saurez qui et pourquoi avant qu'il commence.",
      },
      {
        q: "Nous ne sommes pas techniques. Est-ce un problème ?",
        a: "Pas du tout — la plupart de nos clients ne le sont pas. Nous expliquons les décisions dans un langage business clair, prenons en charge les choix techniques et communiquons en anglais ou en arabe sur WhatsApp.",
      },
      {
        q: "Flutter ou natif iOS et Android ?",
        a: "Flutter dans la quasi-totalité des cas. Une seule base de code publie sur les deux stores, ce qui divise à peu près par deux le coût de développement et de maintenance, et pour les applications dont la plupart des entreprises ont besoin le résultat est indiscernable du natif. Si votre produit dépend de quelque chose que Flutter atteint mal, nous le dirons et chiffrerons du natif.",
      },
      {
        q: "Pouvez-vous reprendre une application ou un site existant ?",
        a: "Oui. Nous commençons par une courte revue de code et vous donnons un avis écrit : réparer, refactorer ou reconstruire. Parfois la réponse honnête est que le code va bien et que le problème est ailleurs — vous aurez aussi cette réponse-là.",
      },
      {
        q: "Combien coûte le fonctionnement après le lancement ?",
        a: "L'hébergement et les services vous sont facturés directement, sur vos propres comptes, pour que vous voyiez toujours le coût réel : en général une petite facture mensuelle Firebase ou serveur, plus le programme développeur Apple à 99 $ par an et l'inscription unique de 25 $ chez Google Play si vous publiez une application. Nous estimons ce coût dans le devis, sans surprise.",
      },
      {
        q: "Développez-vous des applications en arabe et en RTL ?",
        a: "Oui, régulièrement. Al-Muslim, ICCD Hub et Voicers proposent tous des interfaces bilingues arabe et anglais avec une mise en page RTL complète, une typographie arabe et des dates hégiriennes. Ce site en est un autre exemple.",
      },
      {
        q: "Travaillez-vous avec des clients en Arabie saoudite, aux Émirats et dans le Golfe ?",
        a: "Oui. Desert Launch travaille avec des clients en Égypte, en Arabie saoudite, aux Émirats arabes unis, au Qatar et au Koweït, ainsi qu'en Europe et aux États-Unis. Nous travaillons depuis Le Caire (UTC+2 en hiver, UTC+3 en été), soit à moins d'une heure de toutes les capitales du Golfe, communiquons en arabe ou en anglais sur WhatsApp, et avons livré pour des entreprises du Golfe — dont une application publiée sur l'App Store et Google Play pour une salle de sport à Doha.",
      },
      {
        q: "Pourquoi faire appel à une société de développement logiciel en Égypte ?",
        a: "Vous bénéficiez d'une ingénierie senior aux tarifs égyptiens — généralement bien en dessous des prix des agences d'Europe de l'Ouest et des États-Unis pour un périmètre équivalent — sans les inconvénients habituels de la délocalisation : un fuseau horaire identique ou proche de ceux du Golfe et de l'Europe, un arabe natif et un anglais courant, et une ligne directe avec l'ingénieur qui construit votre produit plutôt qu'une chaîne d'intermédiaires.",
      },
    ],
  },
  contact: {
    kicker: "Démarrer",
    title: "Expliquez-nous comment votre entreprise fonctionne aujourd'hui",
    intro:
      "Décrivez l'idée de produit, le système actuel ou le processus qui casse en permanence. WhatsApp est le canal le plus rapide pour un échange direct ; l'e-mail convient mieux aux briefs longs et aux documents.",
    highlights: [
      "Une recommandation sur le périmètre et le chemin le plus rapide vers le lancement — gratuite, avant tout engagement.",
      "Un devis fixe en USD, pour connaître le montant avant de décider.",
      "Rien n'est stocké sur ce site : le formulaire rédige un message et le transmet à WhatsApp ou à votre messagerie.",
    ],
    primary: { label: "Obtenir un devis gratuit sur WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Envoyer un brief par e-mail", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    direct: {
      heading: "Nous joindre directement",
      body: "Vous préférez éviter le formulaire ? Ces canaux atteignent la même personne.",
      whatsapp: { label: "WhatsApp", value: PHONE_DISPLAY },
      email: { label: "E-mail", value: EMAIL },
      phone: { label: "Téléphone", value: PHONE_DISPLAY },
      location: { label: "Basés au", value: "Caire, Égypte" },
      hours: { label: "Réponse", value: "Sous 12 heures · heure du Caire (UTC+2/+3)" },
    },
    form: {
      heading: "Envoyer un brief de projet",
      body: "Cinq champs. Le formulaire rédige le message et l'ouvre dans WhatsApp ou votre messagerie — rien n'est envoyé depuis cette page.",
      name: "Votre nom",
      namePlaceholder: "Nom",
      reply: "E-mail ou téléphone",
      replyPlaceholder: "vous@entreprise.com",
      replyHelp: "Pour vous répondre si WhatsApp ne vous atteint pas.",
      projectType: "De quoi avez-vous besoin ?",
      projectTypePlaceholder: "Sélectionnez",
      projectTypeOptions: [
        "Application mobile (iOS et Android)",
        "Site vitrine",
        "Plateforme web ou portail",
        "Système interne / administration",
        "MVP pour un nouveau produit",
        "Refonte d'un produit existant",
        "Je ne sais pas encore",
      ],
      budget: "Budget envisagé (USD)",
      budgetPlaceholder: "Sélectionnez une fourchette",
      budgetOptions: [
        "Moins de 3 000 $",
        "3 000 – 8 000 $",
        "8 000 – 20 000 $",
        "Plus de 20 000 $",
        "Je ne sais pas encore",
      ],
      budgetHelp: "Une fourchette suffit. Elle nous dit ce qui est réaliste avant de chiffrer.",
      timeline: "Délai",
      timelinePlaceholder: "Sélectionnez un délai",
      timelineOptions: [
        "Dès que possible",
        "Sous 1 mois",
        "1 à 3 mois",
        "Plus de 3 mois",
      ],
      summary: "Que voulez-vous construire ?",
      summaryPlaceholder:
        "Que doit faire le produit, pour qui, et qu'est-ce qui ne va pas aujourd'hui ?",
      requiredMark: "obligatoire",
      optionalMark: "facultatif",
      submitWhatsapp: "Ouvrir le brief dans WhatsApp",
      submitEmail: "Ouvrir le brief par e-mail",
      sending: "Ouverture…",
      opened: "Votre brief est prêt. Envoyez le message qui vient de s'ouvrir.",
      blocked: "Votre navigateur a bloqué la fenêtre.",
      blockedLink: "Ouvrir WhatsApp manuellement",
      errors: {
        heading: "Vérifiez ces champs avant l'envoi :",
        name: "Merci d'indiquer votre nom.",
        reply: "Merci d'indiquer un e-mail ou un téléphone.",
        summary: "Merci de décrire en une ou deux phrases ce que vous voulez construire.",
      },
      note: "Rien n'est enregistré ni envoyé tant que vous n'appuyez pas sur envoyer dans WhatsApp ou votre messagerie.",
      draftIntro: "Bonjour Desert Launch,\n\nVoici le brief d'un projet.",
      draftLabels: {
        name: "Nom",
        reply: "Contact",
        projectType: "Type de projet",
        budget: "Budget",
        timeline: "Délai",
        summary: "Ce que nous voulons construire",
      },
      emailSubject: "Brief de projet — Desert Launch",
    },
  },
  footer: {
    tagline: "Studio logiciel — Le Caire, Égypte",
    blurb:
      "Desert Launch développe des applications mobiles, des plateformes web et des systèmes internes pour des entreprises en Égypte, dans le Golfe, en Europe et aux États-Unis.",
    copyright: "© 2026 Desert Launch. Tous droits réservés.",
    navHeading: "Naviguer",
    navLinks: [
      { label: "Réalisations", sub: "Des produits en ligne sur l'App Store et Google Play", href: "#work" },
      { label: "Services", sub: "Ce que Desert Launch construit", href: "#services" },
      { label: "Pourquoi nous", sub: "Devis fixe, propriété du code, un an de support", href: "#why-us" },
      { label: "Méthode", sub: "De l'appel de cadrage au lancement en cinq étapes", href: "#process" },
      { label: "FAQ", sub: "Coût, délais, propriété et support", href: "#faq" },
      { label: "Contact", sub: "Envoyez un brief ou écrivez sur WhatsApp", href: "#contact" },
    ],
    langHeading: "Cette page dans d'autres langues",
    contactHeading: "Contact",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "E-mail", href: MAILTO },
    ],
    contactSub: [
      "Le moyen le plus rapide de discuter d'un nouveau projet",
      "Idéal pour les briefs détaillés et les cahiers des charges",
    ],
    identity: {
      heading: "Desert Launch",
      body: "Un studio logiciel indépendant basé au Caire, en Égypte. Chaque projet est conçu et développé par Abdullah Mohamed.",
      addressLabel: "Adresse",
      address: "Le Caire, Égypte",
      links: [
        { label: "Confidentialité", slug: "privacy" },
        { label: "Conditions de mission", slug: "terms" },
        { label: "À propos", slug: "about" },
      ],
    },
    note: "Envoyez un brief depuis la section contact ci-dessus et poursuivez la conversation sur WhatsApp ou par e-mail.",
  },
  a11y: {
    home: "Desert Launch — accueil",
    primaryNav: "Navigation principale",
    mobileNav: "Navigation mobile",
    footerNav: "Navigation du pied de page",
    breadcrumb: "Fil d'Ariane",
    proofPoints: "Chiffres clés",
    heroTags: "Ce que Desert Launch construit",
    techStack: "Stack technique principale",
    projectStack: "Technologies utilisées",
    founderPanel: "Avec qui vous travaillez",
    founderFacts: "Informations sur le fondateur",
    engagementPoints: "Comment démarre une collaboration",
    briefBenefits: "Ce que vous apporte un brief",
    companySummary: "Présentation de l'entreprise",
    quickNav: "Navigation rapide",
    directContact: "Contact direct",
    newTab: "ouvre un nouvel onglet",
  },
  common: {
    home: "Accueil",
    servicesLabel: "Services",
    workLabel: "Réalisations",
    readCaseStudy: "Lire l'étude de cas",
    allWork: "Voir toutes les réalisations",
    allServices: "Tous les services",
    relatedWork: "Réalisations liées",
    relatedServices: "Services liés",
    faqHeading: "Questions fréquentes",
    onThisPage: "Sur cette page",
    published: "Publié",
    lastUpdated: "Mise à jour",
    backHome: "Retour à l'accueil",
    notFound: {
      title: "Cette page n'existe pas",
      body: "Le lien est peut-être obsolète. Tout le site est à un clic.",
    },
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Aller au contenu",
};
