import type { Dictionary } from "./types";
import { wa, MAILTO } from "./shared";

const GENERIC =
  "Bonjour Desert Launch, je souhaite discuter de la création d'un système pour mon entreprise.";

export const fr: Dictionary = {
  lang: "fr",
  dir: "ltr",
  meta: {
    title:
      "Desert Launch | Agence de développement d'applications et de logiciels — Le Caire, Égypte",
    description:
      "Agence de développement d'applications au Caire, Égypte. Apps mobiles, plateformes web et MVP — devis fixe, un an de support. Consultation WhatsApp gratuite.",
    ogLocale: "fr_FR",
  },
  nav: [
    { label: "Nos réalisations", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#why-us" },
    { label: "Méthode", href: "#process" },
    { label: "Tarifs", href: "#plans" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  header: {
    tagline: "Studio de développement web, mobile et produit",
    emailUs: "Écrivez-nous",
    startProject: { label: "Lancez votre projet", href: wa(GENERIC), external: true },
    langCode: "FR",
    langAria: "Choisir la langue",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
    mobileLangLabel: "Langue",
  },
  hero: {
    eyebrow: "Des logiciels au service de votre activité",
    title: "Remplacez le travail manuel par un système qui pilote votre entreprise.",
    lead: "Vous travaillez encore avec des fichiers Excel, des dossiers papier et des outils dispersés ? Desert Launch conçoit et développe les plateformes web sur mesure, applications mobiles, MVP et systèmes internes qui les remplacent — avec une exécution fiable, une architecture évolutive et une communication directe.",
    tags: [
      "Produits générateurs de leads",
      "Expériences client mobile-first",
      "Systèmes de gestion et d'administration",
    ],
    primary: {
      label: "Lancez votre projet sur WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Voir nos réalisations", href: "#work" },
    responseNote:
      "Nous répondons sous 12 heures — souvent bien plus vite. Heure du Caire (GMT+2), en français, anglais ou arabe.",
    image: {
      src: "/assets/image_slot1.webp",
      alt: "Une présentation produit haut de gamme illustrant le développement logiciel moderne.",
    },
    imageCaption:
      "Plateformes web, produits mobiles et systèmes internes conçus pour avancer vite.",
    proof: [
      {
        label: "Expérience",
        value: "5+ ans",
        note: "Ingénierie senior en Égypte, dans le Golfe, en Europe et aux États-Unis.",
      },
      {
        label: "Livrés",
        value: "10+ produits",
        note: "Plateformes web et applications mobiles en production.",
      },
      {
        label: "Temps de réponse",
        value: "Sous 12 heures",
        note: "Des réponses directes sur WhatsApp — sans chargés de compte ni lenteurs d'agence.",
      },
    ],
  },
  work: {
    kicker: "Réalisations choisies",
    title:
      "Des réalisations récentes qui montrent le type de systèmes que construit Desert Launch.",
    intro:
      "Les projets ci-dessous illustrent la réflexion produit, la qualité UX et la profondeur des systèmes — de la génération de leads au mobile grand public, en passant par les expériences axées sur l'engagement.",
    capabilities: {
      kicker: "Compétences",
      title: "Ce que les clients peuvent attendre du processus de développement",
      body: "Desert Launch prend en charge toutes les couches concrètes nécessaires pour livrer un produit sérieux, pas seulement l'interface visible.",
      points: [
        "Cadrage produit, priorisation des fonctionnalités et définition du MVP.",
        "Interfaces responsives pour le web et le mobile, avec une UX pensée pour la conversion.",
        "Tableaux de bord d'administration, permissions, workflows, API et intégrations.",
        "Planification du déploiement, mise en place de l'infrastructure, accompagnement au lancement et itérations.",
      ],
    },
    capabilityCards: [
      {
        icon: "dashboard",
        title: "Tableaux de bord opérationnels",
        body: "Des systèmes d'administration qui aident les équipes à gérer utilisateurs, workflows, données et opérations plus efficacement.",
      },
      {
        icon: "productized",
        title: "Expériences mobiles productisées",
        body: "Des applications qui allient clarté UX, parcours de compte, diffusion de contenu et systèmes de monétisation ou d'engagement.",
      },
      {
        icon: "flows",
        title: "Flux métier intégrés",
        body: "Des logiciels qui relient les expériences client aux équipes internes, avec suivi des statuts et visibilité sur les processus.",
      },
      {
        icon: "scalable",
        title: "Architecture évolutive",
        body: "Des fondations qui laissent la place à de nouvelles fonctionnalités, intégrations et besoins opérationnels à mesure que l'entreprise grandit.",
      },
    ],
    logosLabel: "Produits conçus et livrés par Desert Launch",
    projects: [
      {
        title: "FasTap",
        tag: "Carte de visite numérique NFC",
        logo: "/assets/logo-fastap.webp",
        logoAlt: "Icône de l'application FasTap",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/fastab1.webp", alt: "Aperçu 1 de l'interface de l'application FasTap" },
            { src: "/assets/fastab2.webp", alt: "Aperçu 2 de l'interface de l'application FasTap" },
            { src: "/assets/fastab3.webp", alt: "Aperçu 3 de l'interface de l'application FasTap" },
          ],
        },
        summary:
          "Approchez une carte NFC pour partager un profil professionnel complet — il s'ouvre sur n'importe quel téléphone, sans installation. Une application Flutter écrit les profils sur les cartes, et une page Flutter Web s'ouvre à chaque lien de partage.",
        points: [
          "Gestion du profil et mise à jour des médias depuis le mobile.",
          "Profil web ouvert directement après un scan NFC.",
          "Déployé avec Firebase et Nginx.",
        ],
        links: [{ label: "Créer un produit similaire", href: "#contact" }],
      },
      {
        title: "Al-Muslim",
        tag: "Disponible sur les deux stores",
        logo: "/assets/logo-almuslim.webp",
        logoAlt: "Icône de l'application Al-Muslim",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/almuslim2.webp", alt: "Aperçu 1 de l'interface de l'application Al-Muslim" },
            { src: "/assets/almuslim3.webp", alt: "Aperçu 2 de l'interface de l'application Al-Muslim" },
            { src: "/assets/almuslim4.webp", alt: "Aperçu 3 de l'interface de l'application Al-Muslim" },
          ],
        },
        summary:
          "Un compagnon quotidien du musulman : Coran, adhkar et douas, horaires de prière précis et direction de la qibla — avec des rappels intelligents qui l'ancrent dans la journée de l'utilisateur.",
        points: [
          "Disponible sur l'App Store et Google Play.",
          "Flutter avec notifications et géolocalisation.",
          "Conçu pour la rétention quotidienne et une UX épurée, centrée sur le contenu.",
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
          { label: "Créer une application mobile comme celle-ci", href: "#contact" },
        ],
      },
      {
        title: "Jaweb",
        tag: "Jeu de quiz compétitif",
        logo: "/assets/logo-jaweb.webp",
        logoAlt: "Icône de l'application Jaweb",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/jaweb1.png", alt: "Aperçu 1 de l'interface de l'application Jaweb" },
            { src: "/assets/jaweb2.png", alt: "Aperçu 2 de l'interface de l'application Jaweb" },
            { src: "/assets/jaweb3.png", alt: "Aperçu 3 de l'interface de l'application Jaweb" },
          ],
        },
        summary:
          "Une soirée quiz entre amis transformée en produit équitable et automatisé — deux équipes, six catégories, trois niveaux de difficulté, une logique d'arbitrage et un comptage automatique des points.",
        points: [
          "Déroulé de jeu complet avec score par équipe et logique d'arbitrage.",
          "Monétisation via les paiements MyFatoorah.",
          "Flutter avec une architecture propre, pensée pour rejouer encore et encore.",
        ],
        links: [{ label: "Imaginer un produit interactif", href: "#contact" }],
      },
      {
        title: "Q-Fight Gym",
        tag: "Disponible sur les deux stores · Qatar",
        logo: "/assets/logo-qfightgym.webp",
        logoAlt: "Icône de l'application Q-Fight Gym",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/qfightgym1.webp", alt: "Application Q-Fight Gym — écran du programme d'entraînement" },
            { src: "/assets/qfightgym2.webp", alt: "Application Q-Fight Gym — écran du planning des cours" },
            { src: "/assets/qfightgym3.webp", alt: "Application Q-Fight Gym — écran des abonnements" },
          ],
        },
        summary:
          "L'application officielle d'une salle professionnelle de Muay Thai au Qatar, qui relie les membres à un programme d'entraînement mené par des champions du monde thaïlandais.",
        points: [
          "Disponible sur l'App Store et Google Play pour une entreprise réellement en activité.",
          "Consultation des formules, réservation de séances individuelles ou collectives avec un coach précis, et planning des cours dans l'app.",
          "Flutter et Firebase avec intégration des paiements.",
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
          { label: "Créer une application pour votre entreprise", href: "#contact" },
        ],
      },
      {
        title: "Xera Lab",
        tag: "Plateforme de gestion des cas dentaires",
        logo: "/assets/logo-xeralab.webp",
        logoAlt: "Icône de l'application Xera Lab",
        media: {
          kind: "stack",
          stack: ["Flutter Web", "Node.js", "PostgreSQL", "Docker", "AWS"],
        },
        summary:
          "Une plateforme full-stack de gestion des cas dentaires — un portail client et un tableau de bord administrateur reposant sur une API Node.js — conçue et livrée au client comme système de production privé.",
        points: [
          "Portail client et tableau de bord administrateur sur une plateforme partagée.",
          "API Node.js et PostgreSQL avec accès par rôles via JWT.",
          "Téléversements AWS S3, Docker Compose et déploiement Nginx.",
        ],
        links: [{ label: "Créer une plateforme comme celle-ci", href: "#contact" }],
      },
      {
        title: "Ezhal",
        tag: "Plateforme de services auto multi-rôles",
        logo: "/assets/logo-ezhal.webp",
        logoAlt: "Icône de l'application Ezhal",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/ezhal1.webp", alt: "Aperçu de l'interface de la plateforme Ezhal" },
          ],
        },
        summary:
          "Une plateforme de services automobiles au service de trois publics — clients, techniciens de terrain et responsables — chacun avec son application, issue d'une seule base de code.",
        points: [
          "Trois applications par rôle : réservation pour les clients, interventions pour les techniciens, pilotage pour les responsables.",
          "Suivi des techniciens en direct, abonnements, portefeuille, points, tampons et cartes Apple Wallet.",
          "Flutter et Riverpod avec MyFatoorah, Stripe et Firebase.",
        ],
        links: [{ label: "Concevoir une plateforme multi-applications", href: "#contact" }],
      },
      {
        title: "ICCD Hub",
        tag: "Application communautaire et de productivité",
        logo: "/assets/logo-iccd.webp",
        logoAlt: "Icône de l'application ICCD Hub",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/iccd1.webp", alt: "Aperçu de l'interface ICCD Hub 1" },
            { src: "/assets/iccd2.webp", alt: "Aperçu de l'interface ICCD Hub 2" },
            { src: "/assets/iccd3.webp", alt: "Aperçu de l'interface ICCD Hub 3" },
          ],
        },
        summary:
          "Une application bilingue destinée aux membres de la Société islamique pour le développement du secteur privé, associant contenus institutionnels et suite de productivité personnelle.",
        points: [
          "Événements, pays membres, filiales et centre de connaissances réunis au même endroit.",
          "Tâches, notes, calendrier et rappels, avec horaires de prière, qibla et calendrier hégirien.",
          "Connexion Google et Apple, notifications Firebase, liens profonds et prise en charge RTL complète (EN/AR).",
        ],
        links: [{ label: "Créer une application pour votre organisation", href: "#contact" }],
      },
      {
        title: "Voicers",
        tag: "Plateforme audio sociale · produit interne",
        logo: "/assets/logo-voicers.webp",
        logoAlt: "Icône de l'application Voicers",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/voicers1.webp", alt: "Aperçu de l'interface Voicers 1" },
            { src: "/assets/voicers2.webp", alt: "Aperçu de l'interface Voicers 2" },
            { src: "/assets/voicers3.webp", alt: "Aperçu de l'interface Voicers 3" },
          ],
        },
        summary:
          "Une plateforme audio sociale bilingue pour créateurs — notes vocales, playlists et scènes en direct, avec un fil de découverte qui transforme les auditeurs en audience.",
        points: [
          "Notes vocales (VNotes), playlists et scènes audio en direct.",
          "Concours, classements et fil de découverte pensés pour l'engagement.",
          "Flutter en architecture propre — notre propre produit, pas encore publié.",
        ],
        links: [{ label: "Concevoir un produit de ce type", href: "#contact" }],
      },
    ],
    redesigns: {
      title: "Concepts de refonte de sites web",
      intro:
        "Des refontes modernes, pensées mobile d'abord, préparées pour de vraies entreprises — l'avant/après d'un site plus rapide et plus clair.",
      cards: [
        {
          label: "Immobilier — Ajman",
          title: "Landmark Properties — Concept de refonte",
          summary:
            "Un site immobilier pensé mobile d'abord qui remplace des annonces de démonstration obsolètes par de vraies annonces locales consultables, avec un chargement rapide et une demande WhatsApp sur chaque bien.",
          points: [
            "Mise en page mobile d'abord, à chargement rapide",
            "Annonces immobilières consultables",
            "Appels à l'action clairs : demande et WhatsApp",
          ],
          image: {
            src: "/assets/redesign-landmark.jpg",
            alt: "Concept de refonte du site Landmark Properties",
          },
        },
        {
          label: "Aménagement intérieur — Ajman",
          title: "Ayyath Interiors — Concept de refonte",
          summary:
            "Un site portfolio épuré pour l'aménagement intérieur, avec une vraie galerie de projets, des coordonnées fonctionnelles et un parcours « Demander un devis » clair — en remplacement d'un modèle obsolète et défaillant.",
          points: [
            "Une galerie de projets qui met le travail en valeur",
            "Appel direct et WhatsApp fonctionnels",
            "Appel à l'action « Demander un devis » clair",
          ],
          image: {
            src: "/assets/redesign-ayyath.jpg",
            alt: "Concept de refonte du site Ayyath Interiors",
          },
        },
      ],
    },
  },
  services: {
    kicker: "Services",
    title: "Des services logiciels pensés pour la croissance, l'efficacité et une livraison plus rapide.",
    intro:
      "Desert Launch aide les entreprises à passer de l'idée à l'exécution grâce à un design soigné, une ingénierie évolutive et une réflexion produit pragmatique.",
    items: [
      {
        icon: "web",
        title: "Développement web sur mesure",
        body: "Sites web professionnels, portails clients, tableaux de bord et applications web conçus pour la performance et la conversion.",
      },
      {
        icon: "mobile",
        title: "Développement d'applications mobiles",
        body: "Des produits mobiles multiplateformes au rendu natif, avec une UX soignée et des intégrations fiables.",
      },
      {
        icon: "uiux",
        title: "Design UI/UX",
        body: "Des interfaces qui rendent les produits plus faciles à comprendre, à utiliser et à convertir.",
      },
      {
        icon: "architecture",
        title: "Architecture logicielle",
        body: "La fondation technique qui garde votre logiciel rapide et peu coûteux à faire évoluer — pour qu'ajouter une fonctionnalité l'an prochain ne signifie pas tout reconstruire.",
      },
      {
        icon: "mvp",
        title: "Développement de MVP",
        body: "Des premières versions ciblées qui valident le concept rapidement, sans compromettre la maintenabilité future.",
      },
      {
        icon: "website",
        title: "Création de sites web professionnels",
        body: "Des sites d'entreprise professionnels conçus pour expliquer votre valeur rapidement et transformer le trafic en prospects qualifiés.",
      },
      {
        icon: "modernize",
        title: "Modernisation de produits",
        body: "Repenser et reconstruire des produits vieillissants pour améliorer la performance, la clarté et l'impact business.",
      },
      {
        icon: "consulting",
        title: "Conseil technique",
        body: "Une direction technique claire pour les décisions produit, la planification de la livraison, l'architecture et les prochaines étapes.",
      },
    ],
    stackLabel: "Stack principale",
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
      label: "Obtenez une consultation gratuite sur WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    ghost: { label: "Envoyez votre cahier des charges par e-mail", href: MAILTO },
  },
  why: {
    kicker: "Pourquoi Desert Launch",
    title:
      "Un partenaire logiciel qui pense livraison, évolutivité et résultats business.",
    intro:
      "L'objectif n'est pas seulement de livrer du code. L'objectif est de construire le bon produit, de réduire les frictions et de donner à votre entreprise un système numérique sur lequel vous pouvez vraiment compter.",
    features: [
      {
        icon: "reliability",
        title: "Conçu pour la fiabilité",
        body: "Une implémentation propre, une structure évolutive et des choix d'ingénierie qui soutiennent la croissance à long terme.",
      },
      {
        icon: "business",
        title: "Une exécution orientée business",
        body: "Chaque écran, workflow et intégration est évalué à l'aune de la clarté, de l'efficacité et de la conversion.",
      },
      {
        icon: "tailored",
        title: "Du sur-mesure, pas des templates",
        body: "Les solutions sont façonnées autour de votre modèle économique, de vos workflows, de votre audience et de votre stade de croissance.",
      },
      {
        icon: "communication",
        title: "Une communication claire",
        body: "Des échanges directs, des réponses rapides, une planification pragmatique et des progrès réguliers du démarrage à la mise en ligne.",
      },
    ],
    founder: {
      kicker: "Avec qui vous travaillez",
      name: "Abdullah Mohamed",
      role: "Fondateur & ingénieur principal",
      body: "Ingénieur logiciel senior avec plus de 5 ans d'expérience dans la livraison de produits web et mobiles en production, pour des clients en Égypte, dans le Golfe, en Europe et aux États-Unis. Basé au Caire — quand vous écrivez à Desert Launch, vous parlez directement à la personne qui construit votre produit.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, fondateur de Desert Launch",
      facts: ["Le Caire, Égypte", "5+ ans d'expérience", "10+ applications livrées"],
    },
    buildPlan: {
      kicker: "Ce que vous obtenez",
      heading: "Un plan de développement plus clair avant de lancer les gros travaux.",
      body: "Chaque mission s'articule autour de la clarté produit, du pragmatisme technique et du chemin le plus rapide vers un lancement fiable.",
      points: [
        "Un périmètre défini clairement avant que l'implémentation ne s'étende inutilement.",
        "UX, architecture et objectifs métier pensés ensemble, et non séparément.",
        "Un chemin de lancement qui reste exploitable pour les fondateurs comme pour les équipes en croissance.",
      ],
    },
    band: {
      kicker: "Comment démarre une collaboration",
      body: "La plupart des projets commencent par une courte revue de périmètre, une recommandation sur le chemin de développement le plus clair et une prochaine étape concrète pour la livraison.",
      points: [
        "Vous êtes propriétaire du code et de l'infrastructure",
        "Un périmètre fixe chiffré avant tout engagement",
        "La planification du lancement dès le départ",
      ],
      cta: { label: "Obtenez une revue de périmètre gratuite", href: "#contact" },
    },
  },
  process: {
    kicker: "Méthode",
    title: "Une méthode simple qui garde les projets clairs et en mouvement.",
    intro:
      "La réactivité compte, mais la structure aussi. Le déroulé ci-dessous est conçu pour réduire l'ambiguïté et garder le périmètre comme la livraison sous contrôle.",
    steps: [
      {
        n: "1",
        title: "Découvrir",
        body: "Comprendre l'activité, les objectifs, les utilisateurs et les contraintes du projet avant de construire quoi que ce soit.",
      },
      {
        n: "2",
        title: "Planifier",
        body: "Définir le périmètre, la direction technique, les jalons et le chemin le plus clair vers le lancement.",
      },
      {
        n: "3",
        title: "Développer",
        body: "Livrer le produit par phases structurées, avec une attention portée à l'UX, à la qualité et à l'évolutivité.",
      },
      {
        n: "4",
        title: "Lancer",
        body: "Préparer le déploiement, vérifier les derniers parcours et mettre en ligne en toute confiance.",
      },
      {
        n: "5",
        title: "Accompagner",
        body: "Nous ne disparaissons pas après le lancement — chaque projet inclut une année complète de support et de maintenance gratuits.",
      },
    ],
  },
  testimonials: {
    kicker: "Ce qu'ils disent",
    title: "Des ingénieurs et des leads qui ont livré des produits avec notre fondateur, avec leurs propres mots.",
    intro:
      "Recommandations LinkedIn publiques d'Abdullah Mohamed — l'ingénieur qui construit personnellement chaque projet Desert Launch. Des noms réels, des rôles réels, aucun avis rémunéré.",
    items: [
      {
        quote:
          "Abdullah a démontré une capacité impressionnante à assimiler rapidement des concepts techniques complexes. Ses qualités d'analyse et son approche réfléchie de la résolution de problèmes en font un contributeur clé au succès de notre équipe.",
        name: "Mohamed Sayed",
        role: "Lead IA · Appenza",
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
  plans: {
    kicker: "Offres & tarifs",
    title: "Des offres à périmètre fixe pour les produits bien définis. Des propositions sur mesure pour les systèmes plus ambitieux.",
    intro:
      "Chaque offre commence par un appel de cadrage gratuit et un devis fixe écrit en USD — périmètre, calendrier et prix validés avant tout paiement. Les paiements suivent les jalons : 30 % au démarrage, le reste au fur et à mesure que vous voyez le logiciel fonctionner. Chaque projet inclut un an de support gratuit.",
    items: [
      {
        name: "Site web professionnel",
        body: "Un site d'entreprise professionnel conçu pour expliquer votre valeur rapidement et transformer les visiteurs en prospects WhatsApp et e-mail.",
        points: [
          "Design, développement et mise en ligne — en général quelques semaines.",
          "Rapide, mobile-first et optimisé pour la recherche dès le premier jour.",
          "Un an de support gratuit et trois mois d'ajustements gratuits.",
        ],
        price: { main: "Devis fixe en USD", sub: "Devis écrit après un appel de cadrage gratuit" },
        cta: {
          label: "Parler d'un site web",
          href: wa(
            "Bonjour Desert Launch, je souhaite un site web professionnel. Pouvons-nous discuter du périmètre et d'un devis ?"
          ),
          external: true,
        },
      },
      {
        name: "Application mobile",
        note: "La plus demandée",
        body: "Une application mobile multiplateforme pour iOS et Android à partir d'une seule base de code Flutter — conçue, développée et publiée sur les deux stores.",
        points: [
          "Soumission à l'App Store et à Google Play incluse.",
          "En général deux à quatre mois, jalon par jalon.",
          "Vous êtes propriétaire du code, de la propriété intellectuelle et des comptes stores.",
        ],
        price: { main: "Devis fixe en USD", sub: "Devis écrit après un appel de cadrage gratuit" },
        cta: {
          label: "Parler d'une application mobile",
          href: wa(
            "Bonjour Desert Launch, je souhaite créer une application mobile. Pouvons-nous discuter du périmètre et d'un devis ?"
          ),
          external: true,
        },
      },
      {
        name: "Sprint MVP",
        note: "Pour les nouvelles idées",
        body: "Une première version ciblée de votre produit qui valide le concept auprès de vrais utilisateurs — sans dépenser le budget d'un produit complet pour le savoir.",
        points: [
          "Une priorisation impitoyable des fonctionnalités autour d'un résultat clé.",
          "Un cœur prêt à lancer, en général sous un à deux mois.",
          "Une architecture qui évoluera ensuite vers le produit complet.",
        ],
        price: { main: "Devis fixe en USD", sub: "Devis écrit après un appel de cadrage gratuit" },
        cta: {
          label: "Cadrer un MVP",
          href: wa("Bonjour Desert Launch, j'ai une idée de produit et je souhaite cadrer un MVP."),
          external: true,
        },
      },
      {
        name: "Sur mesure & entreprise",
        note: "Pour les structures plus grandes",
        body: "Plateformes plus vastes, systèmes internes, intégrations et partenariat produit dans la durée — façonnés autour de votre activité, pas d'un forfait standard.",
        points: [
          "Périmètre sur mesure : plateformes, tableaux de bord, API et intégrations.",
          "Forfait mensuel optionnel avec capacité d'ingénierie réservée.",
          "Réponse prioritaire sur WhatsApp quand c'est important.",
        ],
        price: { main: "Proposition sur mesure", sub: "Établie après avoir compris votre activité" },
        cta: {
          label: "Demander une proposition",
          href: wa(
            "Bonjour Desert Launch, nous avons besoin d'un système sur mesure pour notre entreprise. Pouvons-nous organiser un appel ?"
          ),
          external: true,
        },
      },
    ],
  },
  faq: {
    kicker: "FAQ",
    title: "Des réponses franches aux questions que se pose tout premier acheteur de logiciel.",
    intro:
      "Si votre question n'est pas ici, posez-la sur WhatsApp — vous obtiendrez une réponse directe, pas un argumentaire commercial.",
    items: [
      {
        q: "Combien coûte un projet ?",
        a: "Chaque projet reçoit un devis fixe en USD après un appel de cadrage gratuit — pas de facturation à l'heure ni de factures surprises. Le prix dépend du périmètre et de la complexité, et nous vous dirons honnêtement si une version plus légère peut atteindre votre objectif.",
      },
      {
        q: "Combien de temps prendra mon projet ?",
        a: "Tout dépend du périmètre et de la complexité : un site web professionnel se compte généralement en semaines, un MVP en un à deux mois, et un produit mobile plus ambitieux en deux à quatre mois. Vous recevez un calendrier concret avec des jalons avant le démarrage — et vous voyez un logiciel qui fonctionne à chaque jalon.",
      },
      {
        q: "Que se passe-t-il après le lancement ?",
        a: "Vous bénéficiez d'une année complète de support et de maintenance gratuits, plus trois mois de petits ajustements et de mises à jour gratuits. Ensuite, un forfait de suivi est disponible si vous souhaitez que nous continuions à améliorer le produit — mais rien ne casse si vous n'en prenez pas.",
      },
      {
        q: "Qui est propriétaire du code ?",
        a: "Vous. Pleine propriété du code, de la propriété intellectuelle et des comptes d'infrastructure — tout est livré à votre nom, vous n'êtes donc jamais dépendant de nous.",
      },
      {
        q: "Comment fonctionnent les paiements ?",
        a: "Les projets sont découpés en trois ou quatre jalons. Vous payez 30 % au démarrage et le reste à chaque jalon livré — vous voyez toujours un logiciel qui fonctionne avant l'échéance suivante.",
      },
      {
        q: "Nous ne sommes pas techniques. Est-ce un problème ?",
        a: "Pas du tout — la plupart de nos clients ne le sont pas. Nous expliquons les décisions dans un langage business clair, prenons en charge les choix techniques pour vous et communiquons en français, en anglais ou en arabe sur WhatsApp.",
      },
      {
        q: "Travaillez-vous avec des clients en Arabie saoudite, aux Émirats et dans le Golfe ?",
        a: "Oui — Desert Launch travaille avec des clients en Égypte, en Arabie saoudite, aux Émirats arabes unis, au Qatar et au Koweït, ainsi qu'en Europe et aux États-Unis. Nous travaillons dans votre fuseau horaire (Le Caire, GMT+2 — à une heure du Golfe), communiquons en arabe, en français ou en anglais sur WhatsApp, et avons livré des applications pour des entreprises du Golfe, dont un produit disponible sur l'App Store pour une salle de sport au Qatar.",
      },
      {
        q: "Pourquoi faire appel à une société de développement logiciel en Égypte ?",
        a: "Vous bénéficiez d'une ingénierie senior aux tarifs égyptiens — généralement bien en dessous des prix des agences d'Europe de l'Ouest et des États-Unis pour un périmètre équivalent — sans les inconvénients de l'offshore : un fuseau horaire identique ou proche de ceux du Golfe et de l'Europe, des échanges en français, en anglais ou en arabe, et une ligne directe avec l'ingénieur qui construit votre produit plutôt qu'une équipe commerciale à étages.",
      },
    ],
  },
  contact: {
    kicker: "Démarrer",
    title:
      "Expliquez-nous comment votre entreprise fonctionne aujourd'hui. Nous vous montrerons ce qu'un système pourrait remplacer.",
    intro:
      "Partagez votre idée de produit, votre système actuel ou votre besoin métier. WhatsApp est le canal le plus rapide pour un échange direct. L'e-mail convient bien aux briefs détaillés, aux documents et aux descriptions de projet plus longues.",
    highlights: [
      "Recevez une recommandation plus claire sur le périmètre produit, la structure et le chemin de lancement.",
      "Utilisez le formulaire pour envoyer l'essentiel sans rédiger un long e-mail de zéro.",
      "Passez directement de l'idée à une prochaine étape concrète et à un canal d'échange.",
    ],
    primary: { label: "Démarrer sur WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Demander une consultation par e-mail", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    image: {
      src: "/assets/image_slot3.webp",
      alt: "Un bureau haut de gamme illustrant la planification de projet et la communication.",
    },
    imageCaption: "Envoyez le brief une seule fois. Poursuivez sur WhatsApp ou par e-mail.",
    direct: {
      heading: "Envoyez un brief de projet",
      body: "Indiquez ici l'essentiel et ouvrez le brief directement dans WhatsApp ou votre messagerie.",
      whatsapp: { label: "WhatsApp", value: "+20 102 283 8534" },
      email: { label: "E-mail", value: "abdullah@desertlaunch.dev" },
    },
    form: {
      name: "Votre nom",
      namePlaceholder: "Nom",
      company: "Entreprise ou marque",
      companyPlaceholder: "Entreprise ou marque",
      projectType: "Type de projet",
      projectTypePlaceholder: "Sélectionnez un type",
      projectTypeOptions: [
        "Site web professionnel",
        "Plateforme web",
        "Application mobile",
        "MVP",
        "Système interne",
        "Refonte de produit",
      ],
      timeline: "Délai",
      timelinePlaceholder: "Sélectionnez un délai",
      timelineOptions: ["Dès que possible", "Sous 1 mois", "1 à 3 mois", "Plus de 3 mois"],
      summary: "Résumé du projet",
      summaryPlaceholder:
        "Que construisez-vous, pour qui, et sur quoi avez-vous besoin d'aide ?",
      submitWhatsapp: "Ouvrir le brief dans WhatsApp",
      submitEmail: "Ouvrir le brief par e-mail",
      note: "Rien n'est enregistré ni envoyé avant que vous n'appuyiez sur envoyer — le formulaire rédige simplement votre message et l'ouvre dans WhatsApp ou votre messagerie.",
      draftIntro: "Bonjour Desert Launch,\n\nJe souhaite vous présenter un brief de projet.",
      draftLabels: {
        name: "Nom",
        company: "Entreprise",
        projectType: "Type de projet",
        timeline: "Délai",
        summary: "Résumé du projet",
      },
      emailSubject: "Brief de projet pour Desert Launch",
    },
  },
  footer: {
    tagline: "Studio logiciel pour des produits numériques sérieux",
    blurb:
      "Desert Launch aide les entreprises à lancer sites web, plateformes, applications mobiles et systèmes internes, avec un processus de livraison clair et une communication directe.",
    copyright: "© 2026 Desert Launch. Tous droits réservés.",
    navHeading: "Naviguer",
    navLinks: [
      {
        label: "Nos réalisations",
        sub: "Des applications en ligne sur l'App Store et Google Play",
        href: "#work",
      },
      { label: "Services", sub: "Ce que Desert Launch construit", href: "#services" },
      {
        label: "Offres & tarifs",
        sub: "Offres à périmètre fixe et propositions sur mesure",
        href: "#plans",
      },
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
    note: "Utilisez la section contact ci-dessus pour envoyer un brief structuré et poursuivre la conversation sur le canal qui vous convient.",
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Aller au contenu",
  backToTop: "Retour en haut",
};
