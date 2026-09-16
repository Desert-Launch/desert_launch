import type { Lang, PageLang } from "../types";
import type { SimplePageCopy } from "./types";

/** The About page for the three discovery locales.
 *
 *  Every other long-form page exists in English and Arabic only — the languages
 *  project work actually happens in. About is the exception: the founder panel
 *  on every home page links to it, and a French, Spanish or German visitor
 *  deciding whether to get in touch should not be sent to English for the one
 *  page that says who they would be talking to. The "Languages and hours"
 *  section is where each of these says, plainly, that the work itself runs in
 *  English or Arabic.
 *
 *  English and Arabic keep theirs in `en.ts` / `ar.ts` beside the rest of their
 *  pages; `aboutPage()` in `copy.ts` resolves the right one. */
export const aboutExtra: Record<Exclude<Lang, PageLang>, SimplePageCopy> = {
  fr: {
    meta: {
      title: "À propos de Desert Launch | Studio logiciel au Caire, Égypte",
      description:
        "Desert Launch est un studio logiciel indépendant au Caire. Un ingénieur senior conçoit et construit chaque projet, avec un devis fixe et la pleine propriété du code.",
    },
    breadcrumb: "À propos",
    h1: "À propos de Desert Launch",
    lead: "Un studio logiciel indépendant au Caire, en Égypte. Chaque projet est conçu et construit par un seul ingénieur senior — c'est tout l'intérêt, pas une limite dont il faudrait s'excuser.",
    sections: [
      {
        id: "what",
        title: "Ce qu'est Desert Launch",
        body: [
          "Desert Launch est un studio logiciel basé au Caire. Il construit des applications mobiles, des plateformes web, des MVP et des systèmes métier internes pour des entreprises en Égypte, dans le Golfe, en Europe et aux États-Unis.",
          "Il est délibérément petit. Abdullah Mohamed l'a fondé et construit chaque projet lui-même — la personne à qui vous écrivez sur WhatsApp est celle qui écrit le code. Si un projet a besoin d'un spécialiste, vous saurez qui et pourquoi avant qu'il ne commence.",
          "Cette taille fixe des limites honnêtes. Nous prenons un petit nombre de projets à la fois, et nous vous dirons quand un travail convient mal à un studio de cette taille plutôt que de l'accepter et de nous étirer.",
        ],
      },
      {
        id: "founder",
        title: "Qui construit votre produit",
        body: [
          "Abdullah Mohamed est un ingénieur logiciel senior avec plus de cinq ans à livrer des produits web et mobiles en production, pour des clients en Égypte, dans le Golfe, en Europe et aux États-Unis. Il travaille en anglais et en arabe.",
          "Le portfolio de ce site a été conçu et construit par lui — une partie comme travail client de Desert Launch, une partie lors de postes d'ingénieur senior antérieurs, et un produit (Voicers) en interne. Nous précisons lequel est lequel plutôt que de laisser un mur de logos suggérer que chacun était une mission Desert Launch.",
        ],
      },
      {
        id: "how",
        title: "Comment nous travaillons",
        list: [
          "Un appel de cadrage gratuit d'abord. Vous décrivez le problème ; nous vous disons ce qu'il faudrait, et si une version plus petite y suffit.",
          "Un prix fixe en USD, par écrit, avant tout engagement. Jamais de facturation à l'heure.",
          "Trois ou quatre jalons. 30 % à la commande, le reste par jalon, et un jalon n'est accepté que lorsque vous le dites.",
          "Tout à votre nom dès le premier jour : code, propriété intellectuelle, hébergement, domaines et comptes des stores.",
          "Douze mois de support gratuit après le lancement, avec les petites modifications offertes les trois premiers mois.",
        ],
      },
      {
        id: "what-we-dont",
        title: "Ce que nous ne faisons pas",
        list: [
          "Facturer à l'heure, ou un devis qui grossit chaque mois.",
          "Confier votre projet à un sous-traitant que vous ne rencontrez jamais.",
          "Garder vos comptes, votre domaine ou votre code comme moyen de pression.",
          "Accepter un travail que nous ne pouvons pas bien finir, pour remplir un carnet de commandes.",
        ],
      },
      {
        id: "languages",
        title: "Langues et horaires",
        body: [
          "Le travail de projet se déroule en anglais ou en arabe. Ce site est traduit en français, en espagnol et en allemand pour être trouvé et compris sur ces marchés, mais la conversation, les documents et la livraison sont en anglais ou en arabe — nous préférons le dire clairement plutôt que de promettre une langue que nous ne pouvons pas assurer correctement.",
          "Nous travaillons depuis Le Caire, à UTC+2 en hiver et UTC+3 en été. C'est à moins d'une heure de chaque capitale du Golfe et à une ou deux heures de la majeure partie de l'Europe. Les premières réponses arrivent sous 12 heures, et généralement bien plus vite.",
        ],
      },
    ],
    cta: {
      title: "Commencez par un appel de cadrage gratuit",
      body: "Sans engagement et sans discours commercial. Décrivez le problème, et vous obtiendrez une réponse honnête sur ce qu'il faut.",
      label: "Obtenir un devis gratuit sur WhatsApp",
      waMessage:
        "Bonjour Desert Launch, j'ai lu votre page À propos et je souhaite un appel de cadrage gratuit.",
    },
  },

  es: {
    meta: {
      title: "Sobre Desert Launch | Estudio de software en El Cairo, Egipto",
      description:
        "Desert Launch es un estudio de software independiente en El Cairo. Un ingeniero sénior diseña y construye cada proyecto, con presupuesto fijo y propiedad total del código.",
    },
    breadcrumb: "Sobre nosotros",
    h1: "Sobre Desert Launch",
    lead: "Un estudio de software independiente en El Cairo, Egipto. Cada proyecto lo diseña y construye un solo ingeniero sénior — y eso es precisamente la idea, no una limitación por la que disculparse.",
    sections: [
      {
        id: "what",
        title: "Qué es Desert Launch",
        body: [
          "Desert Launch es un estudio de software con sede en El Cairo. Construye apps móviles, plataformas web, MVP y sistemas internos de negocio para empresas de Egipto, el Golfo, Europa y Estados Unidos.",
          "Es pequeño a propósito. Abdullah Mohamed lo fundó y construye cada proyecto personalmente: la persona a la que escribes por WhatsApp es la que escribe el código. Si un proyecto necesita un especialista, sabrás quién y por qué antes de que empiece.",
          "Ese tamaño marca límites honestos. Tomamos pocos proyectos a la vez, y te diremos cuándo un trabajo encaja mal con un estudio de este tamaño en lugar de aceptarlo y estirarnos.",
        ],
      },
      {
        id: "founder",
        title: "Quién construye tu producto",
        body: [
          "Abdullah Mohamed es un ingeniero de software sénior con más de cinco años lanzando productos web y móviles en producción, para clientes de Egipto, el Golfo, Europa y Estados Unidos. Trabaja en inglés y en árabe.",
          "El portafolio de este sitio lo diseñó y construyó él: parte como trabajo para clientes de Desert Launch, parte en puestos anteriores de ingeniero sénior, y un producto (Voicers) de desarrollo propio. Decimos cuál es cuál en lugar de dejar que un muro de logotipos insinúe que todos fueron encargos de Desert Launch.",
        ],
      },
      {
        id: "how",
        title: "Cómo trabajamos",
        list: [
          "Primero, una llamada de alcance gratuita. Tú describes el problema; nosotros te decimos qué haría falta y si una versión más pequeña te lleva al mismo sitio.",
          "Un precio fijo en USD, por escrito, antes de comprometerte. Nunca facturación por horas.",
          "Tres o cuatro hitos. 30 % por adelantado, el resto por hito, y un hito no se acepta hasta que tú lo digas.",
          "Todo a tu nombre desde el primer día: código, propiedad intelectual, hosting, dominios y cuentas de las tiendas.",
          "Doce meses de soporte gratuito tras el lanzamiento, con los cambios pequeños gratis los tres primeros meses.",
        ],
      },
      {
        id: "what-we-dont",
        title: "Lo que no hacemos",
        list: [
          "Facturar por horas, o un presupuesto que crece cada mes.",
          "Entregar tu proyecto a un subcontratista al que nunca conoces.",
          "Retener tus cuentas, tu dominio o tu código como palanca.",
          "Aceptar trabajo que no podemos terminar bien, solo por llenar la cartera.",
        ],
      },
      {
        id: "languages",
        title: "Idiomas y horario",
        body: [
          "El trabajo de proyecto se hace en inglés o en árabe. Este sitio está traducido al francés, al español y al alemán para que pueda encontrarse y entenderse en esos mercados, pero la conversación, los documentos y la entrega son en inglés o en árabe — preferimos decirlo claramente antes que prometer un idioma que no podemos atender como es debido.",
          "Trabajamos desde El Cairo, en UTC+2 en invierno y UTC+3 en verano. Eso está a menos de una hora de cada capital del Golfo y a una o dos horas de la mayor parte de Europa. Las primeras respuestas llegan en menos de 12 horas, y normalmente mucho antes.",
        ],
      },
    ],
    cta: {
      title: "Empieza con una llamada de alcance gratuita",
      body: "Sin compromiso y sin discurso de ventas. Describe el problema y recibirás una respuesta honesta sobre lo que hace falta.",
      label: "Pida un presupuesto por WhatsApp",
      waMessage:
        "Hola Desert Launch, he leído su página Sobre nosotros y quiero una llamada de alcance gratuita.",
    },
  },

  de: {
    meta: {
      title: "Über Desert Launch | Softwarestudio in Kairo, Ägypten",
      description:
        "Desert Launch ist ein unabhängiges Softwarestudio in Kairo. Ein Senior-Entwickler entwirft und baut jedes Projekt – mit Festpreis und vollem Eigentum am Code.",
    },
    breadcrumb: "Über uns",
    h1: "Über Desert Launch",
    lead: "Ein unabhängiges Softwarestudio in Kairo, Ägypten. Jedes Projekt wird von einem einzigen Senior-Entwickler entworfen und gebaut – das ist der Kern der Sache, keine Einschränkung, für die man sich entschuldigen müsste.",
    sections: [
      {
        id: "what",
        title: "Was Desert Launch ist",
        body: [
          "Desert Launch ist ein Softwarestudio mit Sitz in Kairo. Es baut mobile Apps, Webplattformen, MVPs und interne Unternehmenssysteme für Firmen in Ägypten, am Golf, in Europa und in den USA.",
          "Es ist bewusst klein. Abdullah Mohamed hat es gegründet und baut jedes Projekt selbst – die Person, der Sie auf WhatsApp schreiben, ist die Person, die den Code schreibt. Braucht ein Projekt einen Spezialisten, erfahren Sie wer und warum, bevor er anfängt.",
          "Diese Größe setzt ehrliche Grenzen. Wir nehmen wenige Projekte gleichzeitig an und sagen Ihnen, wenn eine Arbeit schlecht zu einem Studio dieser Größe passt, statt sie anzunehmen und uns zu überdehnen.",
        ],
      },
      {
        id: "founder",
        title: "Wer Ihr Produkt baut",
        body: [
          "Abdullah Mohamed ist Senior-Softwareentwickler mit mehr als fünf Jahren Erfahrung darin, Web- und Mobilprodukte in den Produktivbetrieb zu bringen – für Kunden in Ägypten, am Golf, in Europa und in den USA. Er arbeitet auf Englisch und Arabisch.",
          "Das Portfolio auf dieser Seite hat er entworfen und gebaut – teils als Kundenarbeit für Desert Launch, teils in früheren Senior-Positionen, und ein Produkt (Voicers) intern. Wir sagen, was was ist, statt eine Logowand andeuten zu lassen, jedes davon sei ein Desert-Launch-Auftrag gewesen.",
        ],
      },
      {
        id: "how",
        title: "Wie wir arbeiten",
        list: [
          "Zuerst ein kostenloses Scoping-Gespräch. Sie beschreiben das Problem; wir sagen Ihnen, was nötig wäre und ob eine kleinere Version ausreicht.",
          "Ein Festpreis in USD, schriftlich, bevor Sie sich festlegen. Nie nach Stunden abgerechnet.",
          "Drei oder vier Meilensteine. 30 % im Voraus, der Rest je Meilenstein – und ein Meilenstein gilt erst als abgenommen, wenn Sie es sagen.",
          "Alles vom ersten Tag an auf Ihren Namen: Code, geistiges Eigentum, Hosting, Domains und Store-Konten.",
          "Zwölf Monate kostenloser Support nach dem Launch, kleine Änderungen in den ersten drei Monaten inklusive.",
        ],
      },
      {
        id: "what-we-dont",
        title: "Was wir nicht tun",
        list: [
          "Nach Stunden abrechnen, oder ein Angebot, das jeden Monat wächst.",
          "Ihr Projekt an einen Subunternehmer geben, den Sie nie kennenlernen.",
          "Ihre Konten, Ihre Domain oder Ihren Code als Druckmittel behalten.",
          "Arbeit annehmen, die wir nicht gut abschließen können, nur um die Auftragslage zu füllen.",
        ],
      },
      {
        id: "languages",
        title: "Sprachen und Zeiten",
        body: [
          "Projektarbeit findet auf Englisch oder Arabisch statt. Diese Seite ist ins Französische, Spanische und Deutsche übersetzt, damit sie in diesen Märkten gefunden und verstanden wird – aber Gespräche, Dokumente und Lieferung laufen auf Englisch oder Arabisch. Das sagen wir lieber offen, als eine Sprache zu versprechen, die wir nicht sauber bedienen können.",
          "Wir arbeiten von Kairo aus, UTC+2 im Winter und UTC+3 im Sommer. Das ist weniger als eine Stunde von jeder Golf-Hauptstadt und ein bis zwei Stunden vom größten Teil Europas entfernt. Erste Antworten kommen innerhalb von 12 Stunden, meist deutlich schneller.",
        ],
      },
    ],
    cta: {
      title: "Beginnen Sie mit einem kostenlosen Scoping-Gespräch",
      body: "Ohne Verpflichtung und ohne Verkaufsgespräch. Beschreiben Sie das Problem, und Sie bekommen eine ehrliche Antwort darauf, was nötig ist.",
      label: "Kostenloses Angebot per WhatsApp",
      waMessage:
        "Hallo Desert Launch, ich habe Ihre Über-uns-Seite gelesen und hätte gern ein kostenloses Scoping-Gespräch.",
    },
  },
};
