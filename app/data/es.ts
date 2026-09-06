import type { Dictionary } from "./types";
import { wa, MAILTO, PHONE_DISPLAY, EMAIL, CONTENT_UPDATED } from "./shared";

const GENERIC =
  "Hola Desert Launch, quiero un presupuesto gratuito para un proyecto de software.";

export const es: Dictionary = {
  lang: "es",
  dir: "ltr",
  meta: {
    title: "Desarrollo de apps y software en El Cairo | Desert Launch",
    description:
      "Desarrollo de apps móviles, plataformas web y MVP en El Cairo. Presupuesto cerrado, el código es suyo y un año de soporte gratis.",
    ogLocale: "es_ES",
    ogImageAlt:
      "Desert Launch — empresa de desarrollo de aplicaciones y software en El Cairo, Egipto",
  },
  nav: [
    { label: "Proyectos", href: "#work" },
    { label: "Servicios", href: "#services" },
    { label: "Por qué nosotros", href: "#why-us" },
    { label: "Proceso", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ],
  header: {
    tagline: "Desarrollo móvil, web y de producto — El Cairo, Egipto",
    emailUs: "Escríbanos",
    startProject: { label: "Presupuesto gratuito", href: wa(GENERIC), external: true },
    langCode: "ES",
    langAria: "Elegir idioma",
    menuOpen: "Abrir el menú de navegación",
    menuClose: "Cerrar el menú de navegación",
    mobileLangLabel: "Idioma",
  },
  hero: {
    eyebrow: "Estudio de desarrollo de software · Egipto, Golfo, Europa y EE. UU.",
    title: "Apps móviles y plataformas web, desarrolladas en El Cairo.",
    lead: "¿Sigue trabajando con hojas de Excel, registros en papel y herramientas dispersas? Desert Launch diseña y desarrolla las apps móviles, plataformas web, MVP y sistemas internos que las sustituyen — con un presupuesto cerrado antes de comprometerse, propiedad total del código y un año de soporte tras el lanzamiento.",
    tags: [
      "Apps para iOS y Android",
      "Plataformas web y portales",
      "Sistemas internos de gestión",
    ],
    primary: {
      label: "Pida un presupuesto por WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Vea nuestros proyectos", href: "#work" },
    responseNote:
      "Respondemos en menos de 12 horas, normalmente mucho antes. Hora de El Cairo (UTC+2/+3). Trabajamos en inglés o árabe.",
    showcase: {
      badge: "Publicadas en el App Store y Google Play",
      caption: "Q-Fight Gym (Doha) y Al-Muslim — dos productos que puede abrir ahora mismo.",
      label: "Dos aplicaciones de Desert Launch mostradas en pantallas de móvil",
      alts: [
        "App Al-Muslim en un teléfono — horarios de oración del día con la cuenta atrás para el próximo adhan",
        "App Q-Fight Gym en un teléfono — lista de sesiones de entrenamiento reservadas por un socio",
      ],
    },
    proof: [
      {
        label: "Productos entregados",
        value: "8",
        note: "Todos están en esta página: apps móviles, plataformas multiperfil y sistemas de negocio privados.",
      },
      {
        label: "Publicadas en ambas tiendas",
        value: "2 apps",
        note: "Al-Muslim y Q-Fight Gym — los enlaces están en sus fichas.",
      },
      {
        label: "Primera respuesta",
        value: "Menos de 12 h",
        note: "Directamente del ingeniero que lo desarrollará. Sin gestores de cuenta.",
      },
    ],
  },
  work: {
    kicker: "Proyectos destacados",
    title: "Apps móviles, plataformas y sistemas internos que hemos entregado",
    intro:
      "Ocho productos: apps de consumo, plataformas multiperfil y sistemas de negocio privados. Cuando una app es pública, el enlace a la tienda está en su ficha.",
    attribution:
      "Todos los productos que ve aquí los diseñó y desarrolló nuestro fundador, Abdullah Mohamed — entre proyectos de clientes de Desert Launch y puestos anteriores como ingeniero sénior. Voicers es nuestro producto interno y todavía no está publicado.",
    logosLabel: "Productos creados y lanzados por nuestro fundador",
    logosPause: "Pausar la cinta de productos",
    logosPlay: "Reproducir la cinta de productos",
    moreLabel: "Más proyectos — otros 4 trabajos",
    caseStudyCta: "Leer el caso de estudio",
    similarCta: "Crear algo así",
    storeLabels: { appStore: "App Store", googlePlay: "Google Play" },
    statusLabels: {
      live: "Publicada en ambas tiendas",
      delivered: "Entregado al cliente",
      inHouse: "Producto propio · antes del lanzamiento",
    },
    projects: {
      "q-fight-gym": {
        tag: "App de reservas · Catar",
        logoAlt: "Icono de la app Q-Fight Gym",
        summary:
          "La app oficial de un gimnasio profesional de Muay Thai en Doha, que conecta a los socios con un programa de entrenamiento dirigido por campeones del mundo tailandeses. El socio consulta los planes, elige entrenador y reserva sin llamar a recepción.",
        points: [
          "Publicada en el App Store y Google Play para un negocio que la usa a diario.",
          "Consulta de planes, elección de entrenador y reserva de sesiones individuales o grupales.",
          "Flutter y Firebase con pasarela de pago integrada.",
        ],
        shotAlts: [
          "App Q-Fight Gym — las reservas de un socio; cada tarjeta muestra el entrenador, las sesiones usadas y la fecha de fin",
          "App Q-Fight Gym — elección del plan de membresía, desde una sesión personal hasta un plan de grupo de tres meses, en riales cataríes",
          "App Q-Fight Gym — búsqueda de la disponibilidad de un entrenador en un rango de fechas, con hora, tipo de sesión y plazas libres",
        ],
        waMessage:
          "Hola Desert Launch, he visto la app Q-Fight Gym en su web y quiero algo similar para mi negocio.",
      },
      "al-muslim": {
        tag: "App de uso diario",
        logoAlt: "Icono de la app Al-Muslim",
        summary:
          "Un compañero diario para el musulmán: Corán, adhkar y duas, horarios de oración precisos y dirección de la qibla, con recordatorios inteligentes que la integran en el día a día. Pensada para el uso repetido, no para una única descarga.",
        points: [
          "Publicada en el App Store y Google Play.",
          "Flutter con notificaciones push y geolocalización para horarios precisos.",
          "Bilingüe en árabe e inglés, con maquetación RTL completa.",
        ],
        shotAlts: [
          "App Al-Muslim — horarios de oración del día para la ciudad actual, con la cuenta atrás para el próximo adhan y las fechas hégira y gregoriana",
          "App Al-Muslim — categorías de adhkar: mañana, tarde, sueño, despertar, mezquita y después de la oración",
          "App Al-Muslim — el lector del Corán, abierto en la sura Al-Imran",
        ],
        waMessage:
          "Hola Desert Launch, he visto Al-Muslim en su web y quiero desarrollar una app móvil parecida.",
      },
      ezhal: {
        tag: "Plataforma de servicios de automoción multiperfil",
        logoAlt: "Icono de la app Ezhal",
        summary:
          "Una plataforma de servicios de automoción para tres públicos —clientes, técnicos de campo y responsables—, cada uno con su propia app y todas desde una única base de código. El cliente reserva, el técnico interviene y el responsable supervisa.",
        points: [
          "Tres apps por rol desde una sola base de código: reservas, trabajos y supervisión.",
          "Seguimiento de técnicos en directo, suscripciones, monedero, puntos, sellos y pases de Apple Wallet.",
          "Flutter y Riverpod con MyFatoorah, Stripe y Firebase.",
        ],
        shotAlts: [
          "Web de Ezhal — la página de inicio de la plataforma, con una instantánea en vivo de reservas, clientes, responsables y empleados tomada del sistema en producción",
        ],
        waMessage:
          "Hola Desert Launch, he visto Ezhal en su web y quiero planificar una plataforma multiapp.",
      },
      "xera-lab": {
        tag: "Plataforma de gestión de casos dentales",
        logoAlt: "Icono de la app Xera Lab",
        summary:
          "Una plataforma full-stack de gestión de casos dentales — un portal de clientes y un panel de administración sobre una API en Node.js — desarrollada y entregada al cliente como sistema privado en producción.",
        points: [
          "Portal de clientes y panel de administración en una plataforma compartida.",
          "API en Node.js y PostgreSQL con acceso por roles basado en JWT.",
          "Subidas a AWS S3, Docker Compose y despliegue con Nginx.",
        ],
        shotAlts: [],
        waMessage:
          "Hola Desert Launch, he visto Xera Lab en su web y quiero una plataforma parecida.",
      },
      fastap: {
        tag: "Tarjeta de visita digital NFC",
        logoAlt: "Icono de la app FasTap",
        summary:
          "Acerque una tarjeta NFC y comparta un perfil profesional completo — se abre en cualquier móvil, sin instalar nada. Una app en Flutter escribe los perfiles en las tarjetas y una página en Flutter Web se abre desde cada enlace compartido.",
        points: [
          "Gestión del perfil y actualización de contenidos desde el móvil.",
          "Perfil web que se abre directamente tras el escaneo NFC.",
          "Desplegado con Firebase y Nginx.",
        ],
        shotAlts: [
          "FasTap — una tarjeta de visita compartida tal como la ve quien la recibe: foto, cargo, botón para guardar el contacto, enlaces sociales y filas de teléfono, email y dirección",
          "FasTap — elección de qué redes sociales y vías de contacto aparecen en la tarjeta",
          "FasTap — el editor de perfil, con un interruptor junto a cada dirección, email, teléfono y web para mostrarlo u ocultarlo",
        ],
        waMessage:
          "Hola Desert Launch, he visto FasTap en su web y quiero un producto similar.",
      },
      jaweb: {
        tag: "Juego de trivia competitivo",
        logoAlt: "Icono de la app Jaweb",
        summary:
          "Una noche de trivia en el salón de casa convertida en un producto justo y automatizado — dos equipos, seis categorías, tres niveles de dificultad, lógica de árbitro y puntuación automática.",
        points: [
          "Flujo de juego completo con puntuación por equipos y lógica de árbitro.",
          "Monetización mediante pagos con MyFatoorah.",
          "Flutter con arquitectura limpia para partidas repetidas.",
        ],
        shotAlts: [
          "App Jaweb — la pantalla de inicio en árabe, con las partidas del jugador, los packs de juegos disponibles y las ayudas",
        ],
        waMessage:
          "Hola Desert Launch, he visto Jaweb en su web y quiero planificar un producto interactivo.",
      },
      "iccd-hub": {
        tag: "App para socios de una organización internacional",
        logoAlt: "Icono de la app ICCD Hub",
        summary:
          "Una app bilingüe para los miembros de la Corporación Islámica para el Desarrollo del Sector Privado, que combina contenido institucional con una suite de productividad personal.",
        points: [
          "Eventos, países miembros, filiales y centro de conocimiento en un mismo lugar.",
          "Tareas, notas, calendario y recordatorios, junto a horarios de oración, qibla y calendario hegiriano.",
          "Inicio de sesión con Google y Apple, notificaciones de Firebase, enlaces profundos y soporte RTL completo (EN/AR).",
        ],
        shotAlts: [
          "ICCD Hub — imagen de ficha de tienda para los recursos de negocio, que muestra la lista de tareas y notas de la app",
          "ICCD Hub — imagen de ficha de tienda para los eventos de la comunidad, que muestra el calendario y los próximos eventos de la app",
        ],
        waMessage:
          "Hola Desert Launch, he visto ICCD Hub en su web y quiero una app para mi organización.",
      },
      voicers: {
        tag: "Plataforma de audio social",
        logoAlt: "Icono de la app Voicers",
        summary:
          "Una plataforma de audio social bilingüe para creadores: notas de voz, playlists y escenarios en directo, con un feed de descubrimiento que convierte oyentes en audiencia. Desarrollada internamente como producto propio; sin publicar.",
        points: [
          "Notas de voz, playlists y escenarios de audio en directo.",
          "Concursos, clasificaciones y un feed de descubrimiento pensado para la interacción.",
          "Flutter con arquitectura limpia. Producto propio, que podemos enseñar en una llamada.",
        ],
        shotAlts: [
          "App Voicers — un perfil de creador con recuentos de suscriptores, escuchas y me gusta, una clasificación de las mejores notas de voz y una lista de tendencias",
          "App Voicers — el feed de descubrimiento, reproduciendo la publicación de un creador con los botones de regalo, me gusta, comentario y compartir",
          "App Voicers — la votación de notas de voz, filtrada por mejor valoradas, más recientes y ya votadas",
        ],
        waMessage:
          "Hola Desert Launch, he visto Voicers en su web y quiero planificar un producto parecido.",
      },
    },
  },
  services: {
    kicker: "Servicios",
    title: "Desarrollo de apps móviles, web y MVP",
    intro:
      "Seis cosas que construimos. Todas con presupuesto cerrado en USD, pagos por hitos, propiedad total del código y un año de soporte.",
    items: {
      mobile: {
        title: "Desarrollo de apps móviles",
        body: "Una sola base de código en Flutter publicada en el App Store y en Google Play. Cuentas, pagos, notificaciones y funcionamiento sin conexión forman parte del desarrollo, no de una fase dos.",
        deliverable: "Una app de iOS y Android publicada en sus propias cuentas de desarrollador.",
        timeline: "2–4 meses",
      },
      web: {
        title: "Desarrollo web",
        body: "Webs corporativas, portales de clientes, paneles de administración y plataformas web completas — creados para la velocidad, el posicionamiento y la acción que necesita que el visitante complete.",
        deliverable: "Un sitio o plataforma en su hosting, que usted puede ampliar.",
        timeline: "2 semanas – 3 meses",
      },
      mvp: {
        title: "Desarrollo de MVP",
        body: "La versión más pequeña que valida la idea con usuarios reales, sobre una arquitectura que sobrevive a las tres funcionalidades siguientes en lugar de tirarse a la basura.",
        deliverable: "Un producto funcionando ante usuarios reales, y qué construir después.",
        timeline: "1–2 meses",
      },
      design: {
        title: "Diseño UI/UX",
        body: "Pantallas y flujos diseñados y aprobados antes de desarrollarlos, para que la reserva, el pedido o el registro se complete de verdad.",
        deliverable: "Pantallas navegables que usted aprueba antes de empezar a programar.",
        timeline: "1–3 semanas",
      },
      modernize: {
        title: "Reconstrucción y modernización",
        body: "Nos hacemos cargo de un producto lento, roto o abandonado. Primero leemos el código existente y le decimos con honestidad si conviene arreglarlo o rehacerlo.",
        deliverable: "Un veredicto por escrito sobre el código actual y, después, el trabajo.",
        timeline: "Desde 2 semanas",
      },
      consulting: {
        title: "Consultoría técnica y arquitectura",
        body: "Una segunda opinión antes de contratar, una revisión de arquitectura antes de escalar o un plan de entrega que puede dar a cualquier equipo.",
        deliverable: "Una recomendación escrita que es suya, la ejecute quien la ejecute.",
        timeline: "2–5 días",
      },
    },
    learnMore: "Detalle del servicio",
    timelineLabel: "Duración habitual",
    stackLabel: "Stack principal",
    stack: [
      "Flutter",
      "Flutter Web",
      "Node.js",
      "APIs GraphQL y REST",
      "PostgreSQL",
      "Firebase",
      "AWS y Docker",
      "Stripe, MyFatoorah y PayTabs",
    ],
    primary: {
      label: "Pida un presupuesto por WhatsApp",
      href: wa(
        "Hola Desert Launch, estoy viendo sus servicios y quiero un presupuesto gratuito."
      ),
      external: true,
    },
    secondary: { label: "Envíe un brief por email", href: MAILTO },
  },
  why: {
    kicker: "Por qué Desert Launch",
    title: "Por qué las empresas de Egipto y el Golfo eligen Desert Launch",
    intro:
      "Cuatro compromisos que están escritos en cada proyecto. No son adjetivos sobre lo moderno que es el código.",
    features: [
      {
        icon: "quote",
        title: "Presupuesto cerrado antes de comprometerse",
        body: "Un precio por escrito en USD tras una llamada gratuita de alcance. Sin facturación por horas, sin sorpresas por cambios y con una respuesta honesta si un desarrollo menor cumple su objetivo.",
      },
      {
        icon: "ownership",
        title: "El código y las cuentas son suyos",
        body: "Código, propiedad intelectual, hosting y cuentas de las tiendas están a su nombre desde el primer día. Si dejamos de trabajar juntos, nada de lo suyo se va con nosotros.",
      },
      {
        icon: "support",
        title: "Un año de soporte incluido",
        body: "Doce meses de corrección de errores, actualizaciones de sistema y tiendas, y mantenimiento en funcionamiento. Los tres primeros meses incluyen también los cambios pequeños.",
      },
      {
        icon: "direct",
        title: "Habla con el ingeniero",
        body: "Sin gestores de cuenta entre usted y quien escribe el código. Respuesta por WhatsApp en menos de 12 horas, en inglés o árabe.",
      },
    ],
    founder: {
      kicker: "Con quién va a trabajar",
      name: "Abdullah Mohamed",
      role: "Fundador e ingeniero principal",
      body: "Ingeniero de software sénior con más de 5 años lanzando productos web y móviles en producción para clientes de Egipto, el Golfo, Europa y EE. UU. Con base en El Cairo — cuando escribe a Desert Launch, habla con la persona que va a desarrollar su producto.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, fundador de Desert Launch",
      facts: [
        "El Cairo, Egipto",
        "Más de 5 años en producción",
        "Flutter · Node.js · PostgreSQL",
      ],
      moreLabel: "Más sobre cómo trabajamos",
    },
    band: {
      kicker: "Cómo empiezan los proyectos",
      body: "La mayoría empieza con una llamada gratuita de alcance: usted describe el problema y nosotros le decimos qué haría falta y si un desarrollo menor le sirve. Después recibe un presupuesto cerrado por escrito y un plan de hitos antes de pagar nada.",
      points: [
        "Llamada de alcance gratuita",
        "Presupuesto cerrado por escrito en USD",
        "30 % al inicio y el resto por hito",
      ],
      cta: {
        label: "Pida un presupuesto por WhatsApp",
        href: wa("Hola Desert Launch, quiero una llamada gratuita de alcance."),
        external: true,
      },
    },
  },
  process: {
    kicker: "Proceso",
    title: "Cómo avanza un proyecto, del primer mensaje al año de soporte",
    intro:
      "Cinco pasos. Cada uno termina con algo que usted puede ver, y no se paga nada antes de haber visto el paso anterior.",
    deliverableLabel: "Usted recibe",
    steps: [
      {
        n: "1",
        title: "Llamada de alcance",
        body: "Una llamada gratuita sobre cómo funciona hoy el negocio, quién usará el sistema y qué debe estar listo el día del lanzamiento.",
        deliverable: "Un resumen del alcance por escrito y un sí o no honesto.",
      },
      {
        n: "2",
        title: "Presupuesto",
        body: "Un precio cerrado en USD, un plan de hitos y una fecha. Nada empieza hasta que lo aprueba por escrito y abona el 30 % inicial.",
        deliverable: "Un presupuesto cerrado y un calendario de hitos.",
      },
      {
        n: "3",
        title: "Desarrollo",
        body: "Ve software funcionando en cada hito, no capturas de pantalla. Avances por WhatsApp según progresa el trabajo y respuestas el mismo día.",
        deliverable: "Una versión que puede abrir y usar en cada hito.",
      },
      {
        n: "4",
        title: "Lanzamiento",
        body: "Publicación en las tiendas, hosting, dominios y analítica, todo configurado en sus propias cuentas. Nos encargamos de las revisiones de las tiendas hasta que esté publicado.",
        deliverable: "Una app publicada o una plataforma en marcha, a su nombre.",
      },
      {
        n: "5",
        title: "Soporte",
        body: "Doce meses de soporte y mantenimiento gratuitos. Los tres primeros meses incluyen además cambios y actualizaciones pequeñas.",
        deliverable: "Un año de correcciones y actualizaciones sin coste adicional.",
      },
    ],
  },
  testimonials: {
    kicker: "Recomendaciones de colegas",
    title: "Lo que dicen ingenieros sénior sobre trabajar con nuestro fundador",
    intro:
      "Recomendaciones públicas de LinkedIn sobre Abdullah Mohamed, escritas por ingenieros y responsables con los que ha trabajado. Son valoraciones de colegas, no reseñas de clientes — el trabajo con clientes está en el portafolio de arriba.",
    sourceLabel: "Recomendación de LinkedIn",
    items: [
      {
        quote:
          "Abdullah demostró una capacidad impresionante para asimilar con rapidez conceptos técnicos complejos. Sus habilidades analíticas y su enfoque reflexivo para resolver problemas lo convierten en una pieza clave del éxito de nuestro equipo.",
        name: "Mohamed Sayed",
        role: "Responsable de IA · Appenza",
        photo: "/assets/testimonial-mohamed-sayed.webp",
      },
      {
        quote:
          "Abdullah combina un profundo conocimiento técnico con un estilo de liderazgo claro y cercano. Ha contribuido de forma significativa a nuestros proyectos gracias a su capacidad para resolver problemas complejos con eficiencia y a su compromiso con la calidad.",
        name: "Ahmed Farid",
        role: "Ingeniero de software sénior · Recovery Advisers",
        photo: "/assets/testimonial-ahmed-farid.webp",
      },
      {
        quote:
          "Abdullah es un desarrollador de Flutter excepcional cuyo talento y entusiasmo lo convierten en un activo para cualquier equipo. Durante el año que trabajamos juntos, sus habilidades para resolver problemas y su capacidad para superar retos me impresionaron constantemente.",
        name: "Mohamad Zakaria",
        role: "Ingeniero sénior de QA · Yassir",
        photo: "/assets/testimonial-mohamad-zakaria.webp",
      },
    ],
  },
  faq: {
    kicker: "Preguntas frecuentes",
    title: "FAQ: coste, plazos, propiedad del código y soporte",
    intro:
      "Las preguntas que hace cualquiera que contrata software por primera vez. Si la suya no está aquí, hágala por WhatsApp — recibirá una respuesta directa, no un discurso comercial.",
    updated: `Última actualización: ${CONTENT_UPDATED}`,
    items: [
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Cada proyecto recibe un presupuesto cerrado en USD tras una llamada gratuita de alcance — sin facturación por horas ni facturas sorpresa. El precio depende del alcance y la complejidad: una web corporativa es el encargo más pequeño que aceptamos y un producto móvil completo con pagos y cuentas, el mayor. Díganos qué presupuesto tiene en mente y le diremos con honestidad qué cabe dentro.",
      },
      {
        q: "¿Cuánto tardará mi proyecto?",
        a: "Una web corporativa suele medirse en semanas, un MVP en uno o dos meses y un producto móvil más grande en dos a cuatro meses. Recibirá un calendario concreto con hitos antes de empezar y verá software funcionando en cada hito.",
      },
      {
        q: "¿Qué ocurre después del lanzamiento?",
        a: "Doce meses de soporte y mantenimiento gratuitos: corrección de errores, actualizaciones de sistema operativo y tiendas, y mantenimiento en funcionamiento. Los tres primeros meses incluyen además cambios pequeños. Después, un contrato de mantenimiento mensual es opcional — nada deja de funcionar si no lo contrata.",
      },
      {
        q: "¿De quién es el código?",
        a: "Suyo. Propiedad total del código, de la propiedad intelectual y de las cuentas de infraestructura y de las tiendas — todo se crea a su nombre desde el principio, así que nunca queda atado a nosotros.",
      },
      {
        q: "¿Cómo funcionan los pagos?",
        a: "Los proyectos se dividen en tres o cuatro hitos. Paga el 30 % al inicio y el resto por hito entregado. Siempre ve software funcionando antes de que venza el siguiente pago, y un hito no se da por bueno hasta que usted lo dice.",
      },
      {
        q: "¿Firman un acuerdo de confidencialidad?",
        a: "Sí. Envíe el suyo antes de la llamada de alcance o le facilitaremos uno mutuo sencillo. No necesitamos sus datos ni sus cuentas para presupuestar — basta con la descripción del problema.",
      },
      {
        q: "¿Quién hace realmente el trabajo?",
        a: "Abdullah desarrolla personalmente cada proyecto de Desert Launch — la misma persona a la que escribe por WhatsApp es quien escribe el código. Nada se delega en un subcontratista que usted no conoce. Si un proyecto necesita un especialista, sabrá quién es y por qué antes de que empiece.",
      },
      {
        q: "No somos técnicos. ¿Es un problema?",
        a: "En absoluto — la mayoría de nuestros clientes no lo son. Explicamos las decisiones en lenguaje de negocio, nos ocupamos de las decisiones técnicas y nos comunicamos por WhatsApp en inglés o árabe.",
      },
      {
        q: "¿Flutter o nativo para iOS y Android?",
        a: "Flutter en casi todos los casos. Una sola base de código publica en ambas tiendas, lo que reduce a la mitad aproximadamente el coste de desarrollo y de mantenimiento, y para las apps que la mayoría de los negocios necesita el resultado es indistinguible del nativo. Si su producto depende de algo que Flutter no cubre bien, se lo diremos y presupuestaremos nativo.",
      },
      {
        q: "¿Pueden hacerse cargo de una app o web existente?",
        a: "Sí. Empezamos con una revisión breve del código y le damos un veredicto por escrito: arreglar, refactorizar o rehacer. A veces la respuesta honesta es que el código está bien y el problema está en otro sitio — también recibirá esa respuesta.",
      },
      {
        q: "¿Cuánto cuesta mantenerlo en marcha tras el lanzamiento?",
        a: "El hosting y los servicios se le facturan directamente en sus propias cuentas, así siempre ve el coste real: normalmente una factura mensual pequeña de Firebase o de un servidor, más el programa de desarrollador de Apple (99 $ al año) y el registro único de 25 $ de Google Play si publica una app. Estimamos ese coste en el presupuesto para que no haya sorpresas.",
      },
      {
        q: "¿Desarrollan apps en árabe y con diseño de derecha a izquierda?",
        a: "Sí, y con frecuencia. Al-Muslim, ICCD Hub y Voicers funcionan con interfaces bilingües en árabe e inglés, maquetación RTL completa, tipografía árabe y fechas hegirianas. Esta misma web es otro ejemplo.",
      },
      {
        q: "¿Trabajan con clientes de Arabia Saudí, EAU y el Golfo?",
        a: "Sí. Desert Launch trabaja con clientes de Egipto, Arabia Saudí, EAU, Catar y Kuwait, además de Europa y EE. UU. Trabajamos desde El Cairo (UTC+2 en invierno y UTC+3 en verano), a menos de una hora de cualquier capital del Golfo, nos comunicamos por WhatsApp en árabe o inglés y hemos publicado para empresas del Golfo — incluida una app en el App Store y Google Play para un gimnasio de Doha.",
      },
      {
        q: "¿Por qué contratar una empresa de software en Egipto?",
        a: "Obtiene ingeniería sénior a tarifas egipcias — normalmente muy por debajo de los precios de las agencias de Europa Occidental y EE. UU. para el mismo alcance — sin los inconvenientes habituales de la deslocalización: la misma zona horaria o casi para el Golfo y Europa, árabe nativo e inglés fluido, y una línea directa con el ingeniero que desarrolla su producto en lugar de una cadena de intermediarios.",
      },
    ],
  },
  contact: {
    kicker: "Empiece ahora",
    title: "Cuéntenos cómo funciona su negocio hoy",
    intro:
      "Describa la idea de producto, el sistema actual o el proceso que se rompe una y otra vez. WhatsApp es la vía más rápida para una conversación directa; el email va mejor para briefs largos y documentos.",
    highlights: [
      "Una recomendación sobre el alcance y la ruta más rápida al lanzamiento — gratis y sin compromiso.",
      "Un presupuesto cerrado en USD, para que conozca la cifra antes de decidir.",
      "En esta web no se guarda nada: el formulario redacta un mensaje y lo abre en WhatsApp o en su email.",
    ],
    primary: { label: "Pida un presupuesto por WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Envíe un brief por email", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    direct: {
      heading: "Hable con nosotros directamente",
      body: "¿Prefiere saltarse el formulario? Estos canales llegan a la misma persona.",
      whatsapp: { label: "WhatsApp", value: PHONE_DISPLAY },
      email: { label: "Email", value: EMAIL },
      phone: { label: "Teléfono", value: PHONE_DISPLAY },
      location: { label: "Con base en", value: "El Cairo, Egipto" },
      hours: { label: "Respuesta", value: "En menos de 12 horas · hora de El Cairo (UTC+2/+3)" },
    },
    form: {
      heading: "Envíe un brief de proyecto",
      body: "Cinco campos. El formulario redacta el mensaje y lo abre en WhatsApp o en su email — desde esta página no se envía nada.",
      name: "Su nombre",
      namePlaceholder: "Nombre",
      reply: "Email o teléfono",
      replyPlaceholder: "usted@empresa.com",
      replyHelp: "Para responderle si WhatsApp no le llega.",
      projectType: "¿Qué necesita?",
      projectTypePlaceholder: "Seleccione una opción",
      projectTypeOptions: [
        "App móvil (iOS y Android)",
        "Web corporativa",
        "Plataforma web o portal",
        "Sistema interno o de administración",
        "MVP de un producto nuevo",
        "Rehacer un producto existente",
        "Todavía no lo sé",
      ],
      budget: "Presupuesto (USD)",
      budgetPlaceholder: "Seleccione un rango",
      budgetOptions: [
        "Menos de 3.000 $",
        "3.000 – 8.000 $",
        "8.000 – 20.000 $",
        "Más de 20.000 $",
        "Todavía no lo sé",
      ],
      budgetHelp: "Con un rango basta. Nos dice qué es realista antes de presupuestar.",
      timeline: "Plazos",
      timelinePlaceholder: "Seleccione un plazo",
      timelineOptions: [
        "Lo antes posible",
        "En menos de 1 mes",
        "De 1 a 3 meses",
        "Más de 3 meses",
      ],
      summary: "¿Qué quiere construir?",
      summaryPlaceholder:
        "¿Qué debe hacer, para quién es y qué falla en la forma de trabajar de hoy?",
      requiredMark: "obligatorio",
      optionalMark: "opcional",
      submitWhatsapp: "Abrir el brief en WhatsApp",
      submitEmail: "Abrir el brief en email",
      sending: "Abriendo…",
      opened: "Su brief está listo. Envíe el mensaje que se acaba de abrir.",
      blocked: "Su navegador ha bloqueado la ventana emergente.",
      blockedLink: "Abrir WhatsApp manualmente",
      errors: {
        heading: "Revise estos campos antes de enviar:",
        name: "Indique su nombre, por favor.",
        reply: "Indique un email o un teléfono, por favor.",
        replyInvalid: "Esto no parece un email ni un teléfono.",
        summary: "Describa en una o dos frases qué quiere construir.",
      },
      note: "No se guarda ni se envía nada hasta que pulsa enviar en WhatsApp o en su email.",
      draftIntro: "Hola Desert Launch:\n\nEste es el brief de un proyecto.",
      draftLabels: {
        name: "Nombre",
        reply: "Contacto",
        projectType: "Tipo de proyecto",
        budget: "Presupuesto",
        timeline: "Plazos",
        summary: "Qué queremos construir",
      },
      emailSubject: "Brief de proyecto — Desert Launch",
    },
  },
  footer: {
    tagline: "Estudio de software — El Cairo, Egipto",
    blurb:
      "Desert Launch desarrolla apps móviles, plataformas web y sistemas internos para empresas de Egipto, el Golfo, Europa y EE. UU.",
    copyright: "© 2026 Desert Launch. Todos los derechos reservados.",
    navHeading: "Navegación",
    navLinks: [
      { label: "Proyectos", sub: "Productos publicados en el App Store y Google Play", href: "#work" },
      { label: "Servicios", sub: "Qué construye Desert Launch", href: "#services" },
      { label: "Por qué nosotros", sub: "Presupuesto cerrado, código propio y un año de soporte", href: "#why-us" },
      { label: "Proceso", sub: "De la llamada de alcance al lanzamiento en cinco pasos", href: "#process" },
      { label: "FAQ", sub: "Coste, plazos, propiedad y soporte", href: "#faq" },
      { label: "Contacto", sub: "Envíe un brief o escriba por WhatsApp", href: "#contact" },
    ],
    langHeading: "Esta página en otros idiomas",
    contactHeading: "Contacto",
    contactLinks: [
      { label: "WhatsApp", href: wa(GENERIC), external: true },
      { label: "Email", href: MAILTO },
    ],
    contactSub: [
      "La vía más rápida para hablar de un nuevo proyecto",
      "Ideal para briefs y requisitos detallados",
    ],
    identity: {
      heading: "Desert Launch",
      body: "Un estudio de desarrollo de software independiente con base en El Cairo, Egipto. Cada proyecto lo diseña y lo desarrolla Abdullah Mohamed.",
      addressLabel: "Dirección",
      address: "El Cairo, Egipto",
      links: [
        { label: "Privacidad", slug: "privacy" },
        { label: "Condiciones de trabajo", slug: "terms" },
        { label: "Quiénes somos", slug: "about" },
      ],
    },
    note: "Envíe un brief desde la sección de contacto de arriba y siga la conversación por WhatsApp o email.",
  },
  a11y: {
    home: "Desert Launch — inicio",
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    footerNav: "Navegación del pie de página",
    breadcrumb: "Ruta de navegación",
    proofPoints: "Datos clave",
    heroTags: "Qué construye Desert Launch",
    techStack: "Stack tecnológico principal",
    projectStack: "Tecnologías utilizadas",
    founderPanel: "Con quién va a trabajar",
    founderFacts: "Datos del fundador",
    engagementPoints: "Cómo empiezan los proyectos",
    briefBenefits: "Qué obtiene al enviar un brief",
    companySummary: "Resumen de la empresa",
    quickNav: "Navegación rápida",
    directContact: "Contacto directo",
    newTab: "se abre en una pestaña nueva",
  },
  common: {
    home: "Inicio",
    servicesLabel: "Servicios",
    workLabel: "Proyectos",
    readCaseStudy: "Leer el caso de estudio",
    allWork: "Ver todos los proyectos",
    allServices: "Todos los servicios",
    relatedWork: "Proyectos relacionados",
    relatedServices: "Servicios relacionados",
    faqHeading: "Preguntas habituales",
    onThisPage: "En esta página",
    published: "Publicado",
    lastUpdated: "Actualizado",
    backHome: "Volver a la página de inicio",
    notFound: {
      title: "Esta página no existe",
      body: "Puede que el enlace esté desactualizado. Todo el sitio está a un clic.",
    },
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Saltar al contenido",
};
