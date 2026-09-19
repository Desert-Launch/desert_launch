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
      "Développement d'applications mobiles, de plateformes web et de MVP au Caire, avec six démos en ligne à essayer. Devis fixe, code qui vous appartient, un an de support.",
    ogLocale: "fr_FR",
    ogImageAlt:
      "Desert Launch — agence de développement d'applications et de logiciels au Caire, Égypte",
  },
  nav: [
    { label: "Réalisations", href: "#work" },
    { label: "Démos", href: "#demos" },
    { label: "Méthode", href: "#process" },
    { label: "Services", href: "#services" },
    { label: "Pourquoi nous", href: "#why-us" },
  ],
  header: {
    tagline: "Développement mobile, web et produit — Le Caire, Égypte",
    startProject: { label: "Lancer un projet", href: "#contact" },
    langCode: "FR",
    langAria: "Choisir la langue",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
    mobileLangLabel: "Langue",
  },
  hero: {
    eyebrow: "Studio de produits logiciels · Le Caire",
    title: "De l'idée au logiciel prêt pour la production.",
    lead: "Desert Launch conçoit et construit les applications mobiles, plateformes web et systèmes internes sur lesquels tournent fondateurs et entreprises — un devis fixe avant tout engagement, et un an de support après le lancement.",
    primary: { label: "Lancer un projet", href: "#contact" },
    secondary: { label: "Voir nos réalisations", href: "#work" },
    responseNote: "Réponse sous 12 heures, directement de l'ingénieur qui construirait votre produit.",
    journey: {
      label: "Comment un projet passe d'une idée à un produit en production",
      statusLabel: "État du projet",
      statuses: [
        "Comprendre le problème",
        "Cadré et chiffré",
        "En construction · jalon par jalon",
        "En production",
      ],
      stageLabel: "Étape",
      stages: [
        "Idée",
        "Cadrage",
        "Design",
        "Build",
        "Lancement",
        "Support",
      ],
      url: "app.votreentreprise.com",
      fragments: [
        "reservations.xlsx",
        "fil WhatsApp",
        "feuille du jour papier",
        "3 outils déconnectés",
      ],
      scope: {
        title: "Résumé du cadrage · devis fixe",
        lines: [
          "Réservation client · 1 public",
          "Tableau de bord équipe · 4 jalons",
          "Paiements · 30 % d'acompte",
        ],
      },
      ui: {
        app: "Accueil",
        nav: [
          "Aujourd'hui",
          "Réservations",
          "Clients",
          "Équipe",
        ],
        headline: "Aujourd'hui · 14 réservations",
        live: "En direct",
        rows: [
          { label: "09:30 · Client 1", state: "confirmé" },
          { label: "11:00 · Client 2", state: "nouveau" },
        ],
      },
      phone: { title: "Mes réservations", slot: "18:00", slotNote: "Groupe", day: "Jeu", cta: "Réserver" },
      captions: {
        idle: "Des tableurs et du papier à un seul produit qui fait tourner votre activité.",
        milestones: "Jalons",
        terms: "30 % d'acompte, le reste par jalon accepté",
        live: "En ligne sur les deux stores",
        liveNote: "dans vos propres comptes développeur",
        since: "Depuis le lancement",
        sinceValue: "v1.0 → v1.4 · 12 mois de support inclus",
      },
      alts: [
        "Le tableau de bord d'une plateforme terminée, en production",
        "Une application mobile terminée, en production",
      ],
    },
    proof: [
      { label: "Produits livrés", value: "8", note: "Applications mobiles, plateformes multi-rôles et systèmes métier privés." },
      { label: "Première réponse", value: "Moins de 12 h", note: "De l'ingénieur qui construirait le produit. Pas de chargé de compte." },
      { label: "Support après lancement", value: "12 mois", note: "Corrections, mises à jour OS et stores. Petites évolutions offertes pendant trois mois." },
      { label: "Propriété du code", value: "La vôtre", note: "Code, PI, hébergement et comptes stores à votre nom dès le premier jour." },
    ],
  },
  work: {
    kicker: "Réalisations choisies",
    title: "Des produits sur les stores, des plateformes qui font tourner une entreprise chaque jour",
    intro:
      "Huit produits : mobile grand public, plateformes multi-rôles et systèmes métier privés. Quand une application est publique, le lien du store figure sur le cas.",
    attribution:
      "Chaque produit présenté ici a été conçu et développé par notre fondateur, Abdullah Mohamed — dans le cadre de missions Desert Launch et de postes d'ingénieur senior antérieurs. Voicers est notre produit interne et n'est pas encore publié.",
    caseLabels: { problem: "Problème", built: "Nous avons construit", outcome: "Résultat" },
    moreHeading: "Cinq autres produits",
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
          "Application Q-Fight Gym — les réservations d'un membre, chaque carte indiquant le coach, les séances utilisées et la date de fin",
          "Application Q-Fight Gym — choix de la formule, d'une séance individuelle à un forfait collectif de trois mois, en riyals qataris",
          "Application Q-Fight Gym — recherche des disponibilités d'un coach sur une plage de dates, avec l'horaire, le type de séance et les places libres",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu l'application Q-Fight Gym sur votre site et je souhaite une application similaire.",
        case: {
          problem: "Les membres appelaient l'accueil pour réserver chaque séance.",
          built: "Choix du forfait et du coach, réservation de séances individuelles ou collectives dans l'app, avec passerelle de paiement.",
          outcome: "Publié sur les deux stores pour une salle qui l'utilise chaque jour.",
        },
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
          "Application Al-Muslim — horaires de prière du jour pour la ville courante, compte à rebours avant le prochain adhan, dates hégirienne et grégorienne",
          "Application Al-Muslim — catégories d'adhkar : matin, soir, coucher, réveil, mosquée et après la prière",
          "Application Al-Muslim — le lecteur de Coran, ouvert sur la sourate Al-Imran",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Al-Muslim sur votre site et je souhaite une application mobile de ce type.",
        case: {
          problem: "Les applications d'habitude quotidienne sont installées une fois puis oubliées.",
          built: "Coran, adhkar et douas, horaires de prière précis et qibla, avec des rappels pensés pour la fidélité plutôt que l'installation.",
          outcome: "Interface complète en arabe et en anglais, mise en page de droite à gauche, en ligne sur les deux stores.",
        },
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
          "Site Ezhal — la page d'accueil de la plateforme, avec un instantané en direct des réservations, clients, responsables et employés issu du système en production",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Ezhal sur votre site et je souhaite concevoir une plateforme multi-applications.",
        case: {
          problem: "Trois publics — clients, techniciens de terrain, managers — une seule opération.",
          built: "Trois applications par rôle à partir d'une seule base de code : réservation, file des interventions et supervision.",
          outcome: "Suivi des techniciens en direct, abonnements, portefeuille, points et cartes Apple Wallet en production.",
        },
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
          "FasTap — une carte de visite partagée telle que la voit le destinataire : photo, fonction, bouton d'enregistrement du contact, liens sociaux et lignes d'appel, e-mail et adresse",
          "FasTap — sélection des réseaux sociaux et moyens de contact qui apparaissent sur la carte",
          "FasTap — l'éditeur de profil, avec un interrupteur à côté de chaque adresse, e-mail, téléphone et site pour l'afficher ou le masquer",
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
          "Application Jaweb — l'écran d'accueil en arabe, avec les parties du joueur, les packs de jeux proposés et les options d'aide",
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
          "ICCD Hub — visuel de la fiche store pour les ressources professionnelles, montrant la liste de tâches et de notes de l'application",
          "ICCD Hub — visuel de la fiche store pour les événements de la communauté, montrant le calendrier et les événements à venir",
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
          "Application Voicers — un profil de créateur avec le nombre d'abonnés, d'écoutes et de mentions j'aime, un classement des meilleures notes vocales et une liste des tendances",
          "Application Voicers — le fil de découverte, lisant la publication d'un créateur avec les boutons cadeau, j'aime, commentaire et partage",
          "Application Voicers — le vote sur les notes vocales, filtré par les mieux notées, les plus récentes et celles déjà votées",
        ],
        waMessage:
          "Bonjour Desert Launch, j'ai vu Voicers sur votre site et je souhaite concevoir un produit de ce type.",
      },
    },
  },
  services: {
    kicker: "Services",
    title: "Six choses que nous construisons, et ce que vous avez à la fin",
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
      gymBooking: {
        title: "Application de réservation pour salles de sport",
        body: "Une application d'abonnements et de réservation de séances pour une salle, un studio ou un coach — formules, coachs, créneaux et paiements, pour que l'accueil cesse de prendre les réservations au téléphone.",
        deliverable: "Une application de réservation publiée sur iOS et Android, sur vos propres comptes.",
        timeline: "2–3 mois",
      },
      fieldService: {
        title: "Application de gestion des interventions",
        body: "Le client réserve, le technicien traite sa file d'interventions, le responsable suit l'ensemble — trois applications par rôle issues d'une seule base de code, avec suivi en direct.",
        deliverable: "Une application client, une application technicien et un tableau de bord.",
        timeline: "3–4 mois",
      },
      clinicLab: {
        title: "Système de gestion pour laboratoires et cliniques",
        body: "Une plateforme de gestion des dossiers pour un laboratoire ou une clinique : un portail pour les clients qui envoient le travail, et une interface d'administration pour l'équipe qui le traite.",
        deliverable: "Un portail client et un tableau de bord d'administration sur votre hébergement.",
        timeline: "2–3 mois",
      },
    },
    useCases: {
      title: "Conçu pour une situation précise",
      intro: "Des pages écrites pour un type d'activité plutôt que pour une catégorie de travail. Si l'une d'elles décrit votre situation, commencez par là — la même personne construit, aux mêmes conditions.",
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
  demos: {
    kicker: "Démos en ligne",
    title: "Essayez le type de système que nous construirions pour vous",
    intro:
      "Six démos fonctionnelles. Réservez, commandez ou envoyez une demande sur le site public, puis ouvrez le tableau de bord et regardez-la arriver. Rien à installer, aucune inscription.",
    disclaimer:
      "Chaque entreprise, nom, prix et numéro de téléphone dans ces démos est inventé. Ce que vous saisissez reste dans votre navigateur le temps de la session et se réinitialise au rechargement.",
    items: {
      dental: {
        tag: "Cabinet dentaire · Dubaï",
        summary:
          "Soins et tarifs, prise de rendez-vous en ligne avec de vraies règles de créneaux — pause déjeuner, jours fermés, rien dans les deux prochaines heures — et un tableau de bord où l'accueil retrouve le nouveau rendez-vous et le dossier patient créé avec lui.",
        flows: ["Prendre rendez-vous", "Reporter ou changer le statut", "Dossiers patients", "Agenda de l'accueil"],
      },
      medical: {
        tag: "Clinique pluridisciplinaire · Abou Dabi",
        summary:
          "Médecins par spécialité, un assistant de réservation en cinq étapes qui trouve le premier créneau libre de tout un service, et un tableau de bord avec contrôle complet des rendez-vous et des dossiers patients.",
        flows: ["Trouver un médecin par spécialité", "Réservation en cinq étapes", "Premier créneau libre d'un service", "Rendez-vous et patients"],
      },
      gym: {
        tag: "Salle de sport · Dubaï",
        summary:
          "Un planning hebdomadaire des cours avec les places restantes en direct et une liste d'attente quand une séance est pleine, un parcours d'adhésion qui délivre un numéro de membre, et l'administration du club — membres, cours et taux de remplissage du jour.",
        flows: ["Réserver un cours", "Souscrire une formule", "Liste d'attente si complet", "Membres et cours"],
      },
      cafe: {
        tag: "Café et torréfacteur · Dubaï",
        summary:
          "Une carte de 32 produits avec taille, lait et suppléments, la commande à l'avance pour retrait ou livraison avec un créneau, et le tableau des tickets du bar où l'équipe fait passer chaque commande de nouvelle à prête.",
        flows: ["Commander à l'avance", "Créneau de retrait ou de livraison", "Tableau des tickets", "Carte et produits épuisés"],
      },
      restaurant: {
        tag: "Restaurant · Dubaï",
        summary:
          "Des réservations de table qui montrent ce qui est vraiment libre pour votre nombre de convives, la commande en ligne à emporter ou en livraison, et la vue du personnel — le cahier des réservations, le passe et la carte au même endroit.",
        flows: ["Réserver une table", "Commander à emporter ou en livraison", "Cahier des réservations et plan de salle", "Passe des commandes"],
      },
      realestate: {
        tag: "Agence immobilière · Riyad",
        summary:
          "Des annonces consultables avec des filtres portés par l'URL, des biens enregistrés, des demandes qui arrivent sur un tableau de prospects, et l'administration complète des biens. Arabe d'abord, anglais en un clic.",
        flows: ["Filtrer et trier les annonces", "Enregistrer des biens", "Envoyer une demande", "Tableau des prospects et gestion des biens"],
      },
    },
    siteCta: "Ouvrir le site",
    adminCta: "Ouvrir le tableau de bord",
    siteShort: "Site",
    adminShort: "Tableau de bord",
    flowsLabel: "Ce que vous pouvez essayer",
    langs: { en: "en anglais", ar: "en arabe" },
    pageLink: "Tout sur les démos",
  },
  pricing: {
    kicker: "Investissement",
    title: "Où se situe votre projet",
    intro: "Quatre fourchettes pour vous situer avant de nous écrire. Rien ici n'est un devis.",
    labels: { typical: "Durée typique", youGet: "Vous obtenez", fits: "Convient à" },
    brackets: [
      {
        range: "Moins de 3 000 $",
        summary: "Un site vitrine, ou du design et du conseil seuls.",
        typical: "2 semaines – 1 mois",
        youGet: "Un site en ligne sur votre hébergement, que vous pouvez faire évoluer",
        fits: "Développement web · Design UI/UX · Conseil technique",
      },
      {
        range: "3 000 – 8 000 $",
        summary: "Un portail, un système interne ou un MVP avec de vrais utilisateurs.",
        typical: "1 – 2 mois",
        youGet: "Un produit fonctionnel devant de vrais utilisateurs, et la suite à construire",
        fits: "MVP · Systèmes internes · Portails clients",
      },
      {
        range: "8 000 – 20 000 $",
        summary: "Un produit mobile avec comptes et paiements, sur les deux stores.",
        typical: "2 – 4 mois",
        youGet: "Une application iOS et Android publiée dans vos propres comptes développeur",
        fits: "Applications mobiles · Paiements · Tableau de bord admin",
      },
      {
        range: "Plus de 20 000 $",
        summary: "Des applications client, terrain et admin sur une seule base de code.",
        typical: "Chiffré selon le cadrage",
        youGet: "Plusieurs applications par rôle et la plateforme derrière",
        fits: "Plateformes multi-rôles · Refontes · Opérations en direct",
      },
    ],
    checks: [
      "Appel de cadrage gratuit",
      "Un prix fixe en USD — jamais à l'heure",
      "30 % d'acompte, le reste par jalon accepté",
    ],
    link: "Comment fonctionne la tarification",
  },
  why: {
    kicker: "Pourquoi Desert Launch",
    title: "Quatre engagements qui déplacent le risque de votre côté au nôtre",
    features: [
      {
        title: "Vous connaissez le prix avant de vous engager",
        body: "Un prix fixe écrit en USD après un appel de cadrage gratuit. Pas de facturation horaire, pas d'avenants surprises, et une réponse honnête si un projet plus petit atteint votre objectif.",
        before: "Facturation horaire et total qui ne cesse de bouger",
        after: "Un seul prix fixe en USD, convenu avant que quoi que ce soit ne commence",
      },
      {
        title: "Vous êtes propriétaire du code et des comptes",
        body: "Code, propriété intellectuelle, hébergement et comptes stores sont à votre nom dès le premier jour. Si nous arrêtons de travailler ensemble, rien de ce qui est à vous ne part avec nous.",
        before: "Code et comptes détenus par l'agence",
        after: "Code, PI, hébergement et stores à votre nom dès le premier jour",
      },
      {
        title: "Vous voyez du logiciel qui fonctionne, pas des captures",
        body: "Trois ou quatre jalons. Vous ouvrez et utilisez la version avant l'échéance suivante, et un jalon n'est accepté que lorsque vous le dites.",
        before: "Présentations d'avancement et pourcentages",
        after: "Une version que vous ouvrez et acceptez avant qu'elle ne soit facturée",
      },
      {
        title: "Vous parlez à l'ingénieur, un an après le lancement",
        body: "Aucun chargé de compte entre vous et la personne qui écrit le code. Douze mois de corrections, de mises à jour OS et stores — petites évolutions offertes les trois premiers mois.",
        before: "Un chargé de compte entre vous et le code",
        after: "L'ingénieur qui l'a écrit, toujours là un an plus tard",
      },
    ],
    founder: {
      kicker: "Avec qui vous travaillez",
      title: "Votre projet n'est jamais transmis du commercial à une équipe de développement que vous ne rencontrez pas.",
      name: "Abdullah Mohamed",
      role: "Fondateur et ingénieur principal",
      body: "Ingénieur logiciel senior avec plus de 5 ans d'expérience dans la livraison de produits web et mobiles en production, pour des clients en Égypte, dans le Golfe, en Europe et aux États-Unis. Basé au Caire — quand vous écrivez à Desert Launch, vous parlez à la personne qui construira votre produit.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, fondateur de Desert Launch",
      facts: [
        "Le Caire, Égypte",
        "5+ ans en production",
        "Anglais et arabe",
        "Flutter · Node.js · PostgreSQL · AWS",
      ],
      moreLabel: "En savoir plus sur notre façon de travailler",
      linkedinLabel: "LinkedIn",
    },
  },
  process: {
    kicker: "Méthode",
    title: "Le déroulé d'un projet, du premier message à l'année de support",
    intro: "Cinq étapes. Chacune se termine par quelque chose que vous pouvez ouvrir, et rien n'est payé avant d'avoir vu l'étape précédente.",
    youShareLabel: "Vous apportez",
    weDoLabel: "Nous faisons",
    deliverableLabel: "Vous recevez",
    terms: {
      note: "Rien n'est payé avant d'avoir vu l'étape précédente.",
      steps: [
        "Appel de cadrage gratuit",
        "30 % d'acompte",
        "Par jalon accepté",
        "12 mois de support",
      ],
    },
    steps: [
      {
        n: "1",
        title: "Appel de cadrage",
        chip: "Gratuit · sans engagement",
        payment: "Rien à payer",
        youShare: "Comment l'activité fonctionne aujourd'hui, qui utilisera le système et ce qui doit être vrai le jour du lancement.",
        body: "Définir les utilisateurs, cerner le périmètre et retirer la complexité qui ne mérite pas sa place.",
        deliverable: "Un résumé de cadrage écrit et un go / no-go honnête.",
      },
      {
        n: "2",
        title: "Devis",
        chip: "Prix fixe en USD",
        payment: "30 % d'acompte lancent le travail",
        youShare: "Le budget que vous avez en tête, et toute date que vous visez.",
        body: "Livrables, plan de jalons, calendrier et un seul prix fixe — rien ne commence sans votre accord écrit.",
        deliverable: "Un devis fixe et un calendrier de jalons.",
      },
      {
        n: "3",
        title: "Construction",
        chip: "Trois ou quatre jalons",
        payment: "Payé par jalon accepté",
        youShare: "Vos retours sur chaque version de jalon. Questions traitées le jour même, sur WhatsApp.",
        body: "Construire jalon par jalon, avec du logiciel fonctionnel à chacun — pas des captures d'écran.",
        deliverable: "Une version que vous pouvez ouvrir et utiliser à chaque jalon.",
      },
      {
        n: "4",
        title: "Lancement",
        chip: "Revue des stores prise en charge",
        payment: "Dernier jalon",
        youShare: "Vos propres comptes stores, hébergement et domaine — créés à votre nom dès le premier jour.",
        body: "Soumission aux stores, hébergement, domaines et analytics, plus les allers-retours avec la revue jusqu'à la mise en ligne.",
        deliverable: "Une application publiée ou une plateforme en ligne, à votre nom.",
      },
      {
        n: "5",
        title: "Support",
        chip: "12 mois inclus",
        payment: "Sans surcoût",
        youShare: "Tout ce qui casse, directement à l'ingénieur qui l'a construit.",
        body: "Corrections, mises à jour système et stores, et maintien en fonctionnement. Petites évolutions offertes les trois premiers mois.",
        deliverable: "Un an de corrections et de mises à jour sans surcoût.",
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
        q: "Puis-je essayer quelque chose avant de m'engager ?",
        a: "Oui. Six démos fonctionnelles sont en ligne — un cabinet dentaire, une clinique, une salle de sport, un café, un restaurant et une agence immobilière — chacune un site public avec le tableau de bord du personnel derrière. Réservez, commandez ou envoyez une demande, puis ouvrez le tableau de bord et regardez-la arriver. Ce sont des entreprises fictives sur des données d'exemple, et rien de ce que vous saisissez n'est conservé.",
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
    kicker: "Commencer",
    title: "Un produit en tête ? Définissons le chemin le plus rapide vers le lancement.",
    intro:
      "Décrivez l'idée de produit, le système actuel ou le processus qui casse sans arrêt. Rien ne vous engage.",
    steps: [
      { title: "Vous nous parlez du projet", note: "Cinq champs, ou un message WhatsApp. Aucun document nécessaire." },
      { title: "Nous le lisons et répondons sous 12 heures", note: "De l'ingénieur, pas d'un chargé de compte." },
      { title: "Un appel de cadrage gratuit", note: "Ce que cela demanderait, et si un projet plus petit y suffit." },
      { title: "Vous recevez un cadrage écrit et un prix fixe", note: "Puis vous décidez. Rien n'est dû avant d'avoir les deux sous les yeux." },
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
      otherEnquiry: {
        option: "Autre chose (développeur, partenariat, collaboration)",
        note: "Les messages de développeurs, de partenariat et de collaboration passent par e-mail — WhatsApp reste réservé aux projets clients. Dites-nous ce que vous avez en tête, nous le lirons.",
        draftIntro: "Bonjour Desert Launch,\n\nCe message ne concerne pas un projet client.",
        emailSubject: "Demande — Desert Launch",
      },
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
        replyInvalid: "Cela ne ressemble ni à un e-mail ni à un numéro de téléphone.",
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
      { label: "Réalisations", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Démos", href: "#demos" },
      { label: "Méthode", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
    langHeading: "Cette page dans d'autres langues",
    contactHeading: "Contact",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "E-mail", href: MAILTO },
    ],
    enquiryNote: "Les demandes de projet sont plus rapides sur WhatsApp. Les développeurs, les partenariats et les propositions de collaboration sont les bienvenus par e-mail.",
    identity: {
      heading: "Desert Launch",
      body: "Un studio logiciel indépendant basé au Caire, en Égypte. Chaque projet est conçu et développé par Abdullah Mohamed.",
      links: [
        { label: "Tarifs", slug: "pricing" },
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
    techStack: "Stack technique principale",
    projectStack: "Technologies utilisées",
    founderPanel: "Avec qui vous travaillez",
    founderFacts: "Informations sur le fondateur",
    briefBenefits: "Ce que vous apporte un brief",
    companySummary: "Présentation de l'entreprise",
    quickNav: "Navigation rapide",
    directContact: "Contact direct",
    social: "Suivre Desert Launch",
    newTab: "ouvre un nouvel onglet",
  },
  common: {
    home: "Accueil",
    servicesLabel: "Services",
    workLabel: "Réalisations",
    readCaseStudy: "Lire l'étude de cas",
    allWork: "Voir toutes les réalisations",
    allServices: "Tous les services",
    pricingLabel: "Ce que ça coûte",
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
