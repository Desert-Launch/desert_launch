import type { Dictionary } from "./types";
import { wa, MAILTO } from "./shared";

const GENERIC =
  "Hola Desert Launch, quiero hablar sobre la creación de un sistema para mi negocio.";

export const es: Dictionary = {
  lang: "es",
  dir: "ltr",
  meta: {
    title:
      "Desert Launch | Empresa de desarrollo de aplicaciones y software — El Cairo, Egipto",
    description:
      "Empresa de desarrollo de aplicaciones y software en El Cairo, Egipto. Apps móviles, plataformas web y MVP — presupuesto cerrado, un año de soporte gratis.",
    ogLocale: "es_ES",
  },
  nav: [
    { label: "Proyectos", href: "#work" },
    { label: "Servicios", href: "#services" },
    { label: "Por qué nosotros", href: "#why-us" },
    { label: "Proceso", href: "#process" },
    { label: "Precios", href: "#plans" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contact" },
  ],
  header: {
    tagline:
      "Software house de desarrollo web, móvil e ingeniería de producto",
    emailUs: "Escríbanos",
    startProject: { label: "Inicie su proyecto", href: wa(GENERIC), external: true },
    langCode: "ES",
    langAria: "Elegir idioma",
    menuOpen: "Abrir el menú de navegación",
    menuClose: "Cerrar el menú de navegación",
    mobileLangLabel: "Idioma",
  },
  hero: {
    eyebrow: "Desarrollo de software orientado al negocio",
    title: "Sustituya el trabajo manual por un sistema que gestiona su negocio.",
    lead: "¿Sigue trabajando con hojas de Excel, registros en papel y herramientas dispersas? Desert Launch diseña y desarrolla las plataformas web a medida, las aplicaciones móviles, los MVP y los sistemas internos que las sustituyen — con ejecución fiable, arquitectura escalable y comunicación directa.",
    tags: [
      "Productos de generación de leads",
      "Experiencias de cliente mobile-first",
      "Sistemas de operaciones y administración",
    ],
    primary: {
      label: "Inicie su proyecto por WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    secondary: { label: "Vea nuestros proyectos", href: "#work" },
    responseNote:
      "Respondemos en menos de 12 horas — normalmente mucho antes. Hora de El Cairo (GMT+2), en español, inglés o árabe.",
    image: {
      src: "/assets/image_slot1.webp",
      alt: "Una presentación de producto premium que representa el desarrollo de software moderno.",
    },
    imageCaption:
      "Plataformas web, productos móviles y sistemas internos creados para ganar impulso.",
    proof: [
      {
        label: "Experiencia",
        value: "Más de 5 años",
        note: "Ingeniería sénior para clientes de Egipto, el Golfo, Europa y EE. UU.",
      },
      {
        label: "Entregados",
        value: "Más de 10 productos",
        note: "Plataformas web y aplicaciones móviles funcionando en producción.",
      },
      {
        label: "Tiempo de respuesta",
        value: "Menos de 12 horas",
        note: "Respuestas directas por WhatsApp — sin gestores de cuenta ni la lentitud de una agencia.",
      },
    ],
  },
  work: {
    kicker: "Proyectos destacados",
    title:
      "Capacidades de producto recientes que muestran el tipo de sistemas que crea Desert Launch.",
    intro:
      "El trabajo que sigue refleja visión de producto, calidad de UX y profundidad técnica en generación de leads, apps móviles de consumo y experiencias centradas en el engagement.",
    capabilities: {
      kicker: "Capacidades",
      title: "Qué pueden esperar los clientes del proceso de desarrollo",
      body: "Desert Launch se ocupa de todas las capas prácticas necesarias para lanzar un producto serio, no solo de la interfaz visible.",
      points: [
        "Definición del alcance del producto, priorización de funcionalidades y definición del MVP.",
        "Interfaces responsive para web y móvil con una UX pensada para la conversión.",
        "Paneles de administración, permisos, flujos de trabajo, APIs e integraciones.",
        "Planificación del despliegue, configuración de la infraestructura, soporte en el lanzamiento e iteración.",
      ],
    },
    capabilityCards: [
      {
        icon: "dashboard",
        title: "Paneles operativos",
        body: "Sistemas de administración que ayudan a los equipos a gestionar usuarios, flujos de trabajo, datos y operaciones con más eficiencia.",
      },
      {
        icon: "productized",
        title: "Experiencias móviles convertidas en producto",
        body: "Apps que combinan claridad de UX, flujos de cuentas, entrega de contenido y sistemas de monetización o engagement.",
      },
      {
        icon: "flows",
        title: "Flujos de negocio integrados",
        body: "Software que conecta la experiencia del cliente con los equipos internos, el seguimiento de estados y la visibilidad de los procesos.",
      },
      {
        icon: "scalable",
        title: "Arquitectura escalable",
        body: "Cimientos que dejan espacio para nuevas funcionalidades, integraciones y mayores necesidades operativas a medida que el negocio crece.",
      },
    ],
    projects: [
      {
        title: "FasTap",
        tag: "Tarjeta de visita digital NFC",
        logo: "/assets/logo-fastap.webp",
        logoAlt: "Icono de la app FasTap",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/fastab1.webp", alt: "Vista previa 1 de la interfaz de la app FasTap" },
            { src: "/assets/fastab2.webp", alt: "Vista previa 2 de la interfaz de la app FasTap" },
            { src: "/assets/fastab3.webp", alt: "Vista previa 3 de la interfaz de la app FasTap" },
          ],
        },
        summary:
          "Acerque una tarjeta NFC y comparta un perfil profesional completo — se abre en cualquier móvil, sin instalar nada. Una app en Flutter escribe los perfiles en las tarjetas y una página en Flutter Web se abre desde cada enlace compartido.",
        points: [
          "Gestión del perfil y actualización de contenidos desde el móvil.",
          "Perfil web que se abre directamente tras el escaneo NFC.",
          "Desplegado con Firebase y Nginx.",
        ],
        links: [{ label: "Crear un producto similar", href: "#contact" }],
      },
      {
        title: "Al-Muslim",
        tag: "Disponible en ambas tiendas",
        logo: "/assets/logo-almuslim.webp",
        logoAlt: "Icono de la app Al-Muslim",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/almuslim2.webp", alt: "Vista previa 1 de la interfaz de la app Al-Muslim" },
            { src: "/assets/almuslim3.webp", alt: "Vista previa 2 de la interfaz de la app Al-Muslim" },
            { src: "/assets/almuslim4.webp", alt: "Vista previa 3 de la interfaz de la app Al-Muslim" },
          ],
        },
        summary:
          "Un compañero diario para el musulmán: Corán, adhkar y duas, horarios de oración precisos y dirección de la qibla — con recordatorios inteligentes que la integran en el día a día del usuario.",
        points: [
          "Disponible en el App Store y en Google Play.",
          "Flutter con notificaciones y geolocalización.",
          "Diseñada para la retención diaria y una UX limpia centrada en el contenido.",
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
          { label: "Crear una app móvil como esta", href: "#contact" },
        ],
      },
      {
        title: "Jaweb",
        tag: "Juego de trivia competitivo",
        logo: "/assets/logo-jaweb.webp",
        logoAlt: "Icono de la app Jaweb",
        media: {
          kind: "contain",
          shots: [
            { src: "/assets/jaweb1.png", alt: "Vista previa 1 de la interfaz de la app Jaweb" },
            { src: "/assets/jaweb2.png", alt: "Vista previa 2 de la interfaz de la app Jaweb" },
            { src: "/assets/jaweb3.png", alt: "Vista previa 3 de la interfaz de la app Jaweb" },
          ],
        },
        summary:
          "Una noche de trivia en el salón de casa convertida en un producto justo y automatizado — dos equipos, seis categorías, tres niveles de dificultad, lógica de árbitro y puntuación automática.",
        points: [
          "Flujo de juego completo con puntuación por equipos y lógica de árbitro.",
          "Monetización mediante pagos con MyFatoorah.",
          "Flutter con arquitectura limpia para partidas repetidas.",
        ],
        links: [{ label: "Planificar un producto interactivo", href: "#contact" }],
      },
      {
        title: "Q-Fight Gym",
        tag: "Disponible en el App Store · Catar",
        logo: "/assets/logo-qfightgym.webp",
        logoAlt: "Icono de la app Q-Fight Gym",
        media: {
          kind: "cover",
          shots: [
            { src: "/assets/qfightgym1.webp", alt: "App Q-Fight Gym — pantalla del programa de entrenamiento" },
            { src: "/assets/qfightgym2.webp", alt: "App Q-Fight Gym — pantalla del horario de clases" },
            { src: "/assets/qfightgym3.webp", alt: "App Q-Fight Gym — pantalla de membresías" },
          ],
        },
        summary:
          "La app oficial de un gimnasio profesional de Muay Thai en Catar, que conecta a los socios con un programa de entrenamiento dirigido por campeones del mundo tailandeses.",
        points: [
          "Disponible en el App Store para un negocio real en funcionamiento.",
          "Membresías, programas de entrenamiento y reserva de clases.",
          "Flutter y Firebase con integración de pagos.",
        ],
        links: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/q-fight-gym/id6759147399",
            external: true,
          },
          { label: "Crear una app para su negocio", href: "#contact" },
        ],
      },
      {
        title: "Xera Lab",
        tag: "Plataforma de gestión de casos dentales",
        logo: "/assets/logo-xeralab.webp",
        logoAlt: "Icono de la app Xera Lab",
        media: {
          kind: "stack",
          stack: ["Flutter Web", "Node.js", "PostgreSQL", "Docker", "AWS"],
        },
        summary:
          "Una plataforma full-stack de gestión de casos dentales — un portal de clientes y un panel de administración sobre una API en Node.js — desarrollada y entregada al cliente como sistema privado en producción.",
        points: [
          "Portal de clientes más panel de administración en una plataforma compartida.",
          "API en Node.js y PostgreSQL con acceso por roles basado en JWT.",
          "Subidas a AWS S3, Docker Compose y despliegue con Nginx.",
        ],
        links: [{ label: "Crear una plataforma como esta", href: "#contact" }],
      },
    ],
    redesigns: {
      title: "Conceptos de rediseño web",
      intro:
        "Rediseños modernos, pensados primero para móvil, preparados para empresas reales: el antes y el después de un sitio más rápido y más claro.",
      cards: [
        {
          label: "Inmobiliaria — Ajman",
          title: "Landmark Properties — Concepto de rediseño",
          summary:
            "Un sitio inmobiliario pensado primero para móvil que sustituye listados de demostración obsoletos por propiedades locales reales y buscables, con carga rápida y consulta por WhatsApp en cada propiedad.",
          points: [
            "Diseño móvil primero y de carga rápida",
            "Listados de propiedades buscables",
            "Llamadas a la acción claras de consulta y WhatsApp",
          ],
          image: {
            src: "/assets/redesign-landmark.jpg",
            alt: "Concepto de rediseño del sitio de Landmark Properties",
          },
        },
        {
          label: "Interiorismo / Reformas — Ajman",
          title: "Ayyath Interiors — Concepto de rediseño",
          summary:
            "Un sitio de portafolio limpio para reformas, con una galería de proyectos real, datos de contacto que funcionan y una ruta clara para «Pedir presupuesto», en lugar de una plantilla obsoleta y rota.",
          points: [
            "Una galería de proyectos que vende el trabajo",
            "Llamada directa y WhatsApp que funcionan",
            "Llamada a la acción clara de «Pedir presupuesto»",
          ],
          image: {
            src: "/assets/redesign-ayyath.jpg",
            alt: "Concepto de rediseño del sitio de Ayyath Interiors",
          },
        },
      ],
    },
  },
  services: {
    kicker: "Servicios",
    title:
      "Servicios de desarrollo de software diseñados para crecer, ganar eficiencia y entregar más rápido.",
    intro:
      "Desert Launch ayuda a las empresas a pasar de la idea a la ejecución con un diseño cuidado, ingeniería escalable y una visión práctica del producto.",
    items: [
      {
        icon: "web",
        title: "Desarrollo web a medida",
        body: "Webs corporativas, portales de clientes, paneles de control y aplicaciones web creadas para el rendimiento y la conversión.",
      },
      {
        icon: "mobile",
        title: "Desarrollo de aplicaciones móviles",
        body: "Productos móviles multiplataforma con sensación nativa, una UX cuidada e integraciones fiables.",
      },
      {
        icon: "uiux",
        title: "Diseño UI/UX",
        body: "Interfaces que hacen que los productos sean más fáciles de entender, de usar y de convertir.",
      },
      {
        icon: "architecture",
        title: "Arquitectura de sistemas",
        body: "La base técnica que mantiene su software rápido y barato de ampliar — para que añadir una funcionalidad el año que viene no signifique reconstruirlo todo.",
      },
      {
        icon: "mvp",
        title: "Desarrollo de MVP",
        body: "Primeras versiones enfocadas que validan el concepto rápidamente sin comprometer la mantenibilidad futura.",
      },
      {
        icon: "website",
        title: "Desarrollo de webs corporativas",
        body: "Sitios web de empresa profesionales creados para explicar su valor rápidamente y convertir el tráfico en leads cualificados.",
      },
      {
        icon: "modernize",
        title: "Modernización de productos",
        body: "Rediseñamos y reconstruimos productos obsoletos para mejorar el rendimiento, la claridad y el impacto en el negocio.",
      },
      {
        icon: "consulting",
        title: "Consultoría técnica",
        body: "Dirección técnica clara para decisiones de producto, planificación de entregas, arquitectura y próximos pasos.",
      },
    ],
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
      label: "Consiga una consulta gratuita por WhatsApp",
      href: wa(GENERIC),
      external: true,
    },
    ghost: { label: "Envíe sus requisitos por email", href: MAILTO },
  },
  why: {
    kicker: "Por qué Desert Launch",
    title:
      "Un socio de software que piensa en la entrega, la escalabilidad y los resultados de negocio.",
    intro:
      "El objetivo no es solo entregar código. El objetivo es construir el producto adecuado, reducir la fricción y darle a su negocio un sistema digital en el que realmente pueda confiar.",
    features: [
      {
        icon: "reliability",
        title: "Construido para ser fiable",
        body: "Implementación limpia, estructura escalable y decisiones de ingeniería que sostienen el crecimiento a largo plazo.",
      },
      {
        icon: "business",
        title: "Ejecución orientada al negocio",
        body: "Cada pantalla, flujo de trabajo e integración se evalúa según su claridad, su eficiencia y su conversión.",
      },
      {
        icon: "tailored",
        title: "A medida, no con plantillas",
        body: "Las soluciones se adaptan a su modelo de negocio, sus flujos de trabajo, su público y su etapa de crecimiento.",
      },
      {
        icon: "communication",
        title: "Comunicación clara",
        body: "Conversaciones directas, respuestas rápidas, planificación práctica y avance constante desde el inicio hasta el lanzamiento.",
      },
    ],
    founder: {
      kicker: "Con quién va a trabajar",
      name: "Abdullah Mohamed",
      role: "Fundador e ingeniero principal",
      body: "Ingeniero de software sénior con más de 5 años lanzando productos web y móviles en producción para clientes de Egipto, el Golfo, Europa y EE. UU. Con base en El Cairo — cuando escribe a Desert Launch, habla directamente con la persona que desarrolla su producto.",
      photo: "/assets/founder.webp",
      photoAlt: "Abdullah Mohamed, fundador de Desert Launch",
      facts: ["El Cairo, Egipto", "Más de 5 años de experiencia", "Más de 10 apps publicadas"],
    },
    buildPlan: {
      kicker: "Qué obtiene",
      heading:
        "Un plan de desarrollo más claro antes de que empiece el trabajo pesado.",
      body: "Cada proyecto se plantea en torno a la claridad del producto, la viabilidad técnica y la ruta más rápida hacia un lanzamiento fiable.",
      points: [
        "Un alcance definido con claridad antes de que la implementación crezca innecesariamente.",
        "UX, arquitectura y objetivos de negocio diseñados en conjunto, no por separado.",
        "Una ruta de lanzamiento útil tanto para fundadores como para equipos en crecimiento.",
      ],
    },
    band: {
      kicker: "Cómo empiezan los proyectos",
      body: "La mayoría de los proyectos comienzan con una breve revisión del alcance, una recomendación sobre la ruta de desarrollo más clara y un siguiente paso práctico para la entrega.",
      points: [
        "El código y la infraestructura son suyos",
        "Alcance cerrado y presupuestado antes de cualquier compromiso",
        "Planificación del lanzamiento desde el primer día",
      ],
      cta: { label: "Solicite una revisión de alcance gratuita", href: "#contact" },
    },
  },
  process: {
    kicker: "Proceso",
    title: "Un proceso sencillo que mantiene los proyectos claros y en marcha.",
    intro:
      "Responder rápido importa, pero la estructura también. El flujo de trabajo siguiente está diseñado para reducir la ambigüedad y mantener bajo control tanto el alcance como la entrega.",
    steps: [
      {
        n: "1",
        title: "Descubrir",
        body: "Entendemos el negocio, los objetivos, los usuarios y las restricciones del proyecto antes de construir nada.",
      },
      {
        n: "2",
        title: "Planificar",
        body: "Definimos el alcance, la dirección técnica, los hitos y la ruta más clara hacia el lanzamiento.",
      },
      {
        n: "3",
        title: "Construir",
        body: "Entregamos el producto en fases estructuradas, cuidando la UX, la calidad y la escalabilidad.",
      },
      {
        n: "4",
        title: "Lanzar",
        body: "Preparamos el despliegue, revisamos los flujos finales y publicamos con confianza y visibilidad.",
      },
      {
        n: "5",
        title: "Soporte",
        body: "No desaparecemos tras el lanzamiento — cada proyecto incluye un año completo de soporte y mantenimiento gratuitos.",
      },
    ],
  },
  testimonials: {
    kicker: "Lo que dicen de nosotros",
    title:
      "Ingenieros y responsables que han trabajado con nuestro fundador, en sus propias palabras.",
    intro:
      "Recomendaciones públicas de LinkedIn sobre Abdullah Mohamed — el ingeniero que desarrolla personalmente cada proyecto de Desert Launch. Nombres reales, cargos reales, sin reseñas pagadas.",
    items: [
      {
        quote:
          "Abdullah demostró una capacidad impresionante para asimilar con rapidez conceptos técnicos complejos. Sus habilidades analíticas y su enfoque reflexivo para resolver problemas lo convierten en una pieza clave del éxito de nuestro equipo.",
        name: "Mohamed Sayed",
        role: "AI Lead · Appenza",
        photo: "/assets/testimonial-mohamed-sayed.webp",
      },
      {
        quote:
          "Abdullah combina un profundo conocimiento técnico con un estilo de liderazgo claro y cercano. Ha contribuido de forma significativa a nuestros proyectos gracias a su capacidad para resolver problemas complejos con eficiencia y a su compromiso con la calidad.",
        name: "Ahmed Farid",
        role: "Senior Software Engineer · Recovery Advisers",
        photo: "/assets/testimonial-ahmed-farid.webp",
      },
      {
        quote:
          "Abdullah es un desarrollador de Flutter excepcional cuyo talento y entusiasmo lo convierten en un activo para cualquier equipo. Durante el año que trabajamos juntos, sus habilidades para resolver problemas y su capacidad para superar retos me impresionaron constantemente.",
        name: "Mohamad Zakaria",
        role: "Senior Software QA Engineer · Yassir",
        photo: "/assets/testimonial-mohamad-zakaria.webp",
      },
    ],
  },
  plans: {
    kicker: "Planes y precios",
    title:
      "Planes de alcance cerrado para productos definidos. Propuestas a medida para sistemas más grandes.",
    intro:
      "Cada plan comienza con una llamada gratuita para definir el alcance y un presupuesto cerrado por escrito en USD — alcance, plazos y precio acordados antes de cualquier pago. Los pagos van por hitos: 30% al inicio y el resto a medida que ve software funcionando. Cada desarrollo incluye un año de soporte gratuito.",
    items: [
      {
        name: "Web corporativa",
        body: "Un sitio web de empresa profesional creado para explicar su valor rápidamente y convertir a los visitantes en leads por WhatsApp y email.",
        points: [
          "Diseño, desarrollo y lanzamiento — normalmente en unas semanas.",
          "Rápida, mobile-first y optimizada para buscadores desde el primer día.",
          "Un año de soporte gratuito y tres meses de ajustes sin coste.",
        ],
        price: {
          main: "Presupuesto cerrado en USD",
          sub: "Presupuesto por escrito tras una llamada gratuita de alcance",
        },
        cta: {
          label: "Hablar sobre una web",
          href: wa(
            "Hola Desert Launch, quiero una web corporativa. ¿Podemos hablar del alcance y del presupuesto?"
          ),
          external: true,
        },
      },
      {
        name: "Aplicación móvil",
        note: "El más solicitado",
        body: "Una app móvil multiplataforma para iOS y Android desde una única base de código en Flutter — diseñada, desarrollada y publicada en ambas tiendas.",
        points: [
          "Publicación en el App Store y Google Play incluida.",
          "Normalmente de dos a cuatro meses, hito a hito.",
          "El código, la propiedad intelectual y las cuentas de las tiendas son suyos.",
        ],
        price: {
          main: "Presupuesto cerrado en USD",
          sub: "Presupuesto por escrito tras una llamada gratuita de alcance",
        },
        cta: {
          label: "Hablar sobre una app móvil",
          href: wa(
            "Hola Desert Launch, quiero crear una app móvil. ¿Podemos hablar del alcance y del presupuesto?"
          ),
          external: true,
        },
      },
      {
        name: "Sprint de MVP",
        note: "Para nuevas ideas",
        body: "Una primera versión enfocada de su producto que valida el concepto con usuarios reales — sin gastar el presupuesto de un producto completo para averiguarlo.",
        points: [
          "Priorización estricta de funcionalidades en torno a un único resultado clave.",
          "Un núcleo listo para lanzar, normalmente en uno o dos meses.",
          "Una arquitectura que después crece hasta el producto completo.",
        ],
        price: {
          main: "Presupuesto cerrado en USD",
          sub: "Presupuesto por escrito tras una llamada gratuita de alcance",
        },
        cta: {
          label: "Definir un MVP",
          href: wa(
            "Hola Desert Launch, tengo una idea de producto y quiero definir el alcance de un MVP."
          ),
          external: true,
        },
      },
      {
        name: "A medida y Enterprise",
        note: "Para empresas más grandes",
        body: "Plataformas más grandes, sistemas internos, integraciones y una colaboración de producto continua — a la medida de su operación, no de un paquete.",
        points: [
          "Alcance a medida: plataformas, paneles, APIs e integraciones.",
          "Retainer mensual opcional con capacidad de ingeniería reservada.",
          "Respuesta prioritaria por WhatsApp cuando algo es urgente.",
        ],
        price: {
          main: "Propuesta a medida",
          sub: "Elaborada tras conocer su operación",
        },
        cta: {
          label: "Solicitar una propuesta",
          href: wa(
            "Hola Desert Launch, necesitamos un sistema a medida para nuestra empresa. ¿Podemos agendar una llamada?"
          ),
          external: true,
        },
      },
    ],
  },
  faq: {
    kicker: "Preguntas frecuentes",
    title:
      "Respuestas directas a las preguntas de quien contrata software por primera vez.",
    intro:
      "Si su pregunta no está aquí, hágala por WhatsApp — recibirá una respuesta directa, no un discurso comercial.",
    items: [
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Cada proyecto recibe un presupuesto cerrado en USD tras una llamada gratuita de alcance — sin facturación por horas ni facturas sorpresa. El precio depende del alcance y de la complejidad, y le diremos con honestidad si un desarrollo más pequeño puede alcanzar su objetivo.",
      },
      {
        q: "¿Cuánto tardará mi proyecto?",
        a: "Depende del alcance y de la complejidad: una web corporativa suele medirse en semanas, un MVP en uno o dos meses y un producto móvil más grande en dos a cuatro meses. Recibirá un calendario concreto con hitos antes de empezar — y verá software funcionando en cada hito.",
      },
      {
        q: "¿Qué ocurre después del lanzamiento?",
        a: "Recibe un año completo de soporte y mantenimiento gratuitos, más tres meses de pequeños ajustes y actualizaciones sin coste. Después, puede contratar un retainer continuo si quiere que sigamos mejorando el producto — pero nada deja de funcionar si no lo hace.",
      },
      {
        q: "¿De quién es el código?",
        a: "Suyo. Propiedad total del código, de la propiedad intelectual y de las cuentas de infraestructura — todo se entrega a su nombre, así que nunca queda atado a nosotros.",
      },
      {
        q: "¿Cómo funcionan los pagos?",
        a: "Los proyectos se dividen en tres o cuatro hitos. Paga el 30% al inicio y el resto por hito entregado — siempre ve software funcionando antes de que venza el siguiente pago.",
      },
      {
        q: "No somos técnicos. ¿Es un problema?",
        a: "En absoluto — la mayoría de nuestros clientes no lo son. Explicamos las decisiones en lenguaje de negocio, nos ocupamos de las decisiones técnicas por usted y nos comunicamos por WhatsApp en español, inglés o árabe.",
      },
      {
        q: "¿Trabajan con clientes de Arabia Saudí, EAU y el Golfo?",
        a: "Sí — Desert Launch trabaja con clientes de Egipto, Arabia Saudí, EAU, Catar y Kuwait, además de Europa y EE. UU. Trabajamos en su zona horaria (El Cairo, GMT+2 — a una hora del Golfo), nos comunicamos por WhatsApp en árabe, inglés o español y hemos publicado apps para empresas del Golfo, incluida una app disponible en el App Store para un gimnasio de Catar.",
      },
      {
        q: "¿Por qué contratar una empresa de software en Egipto?",
        a: "Obtiene ingeniería sénior a tarifas egipcias — normalmente muy por debajo de los precios de las agencias de Europa Occidental y EE. UU. para el mismo alcance — sin los inconvenientes del offshore: la misma zona horaria o casi para el Golfo y Europa, árabe nativo e inglés fluido, y una línea directa con el ingeniero que desarrolla su producto en lugar de un equipo de cuentas con varias capas.",
      },
    ],
  },
  contact: {
    kicker: "Empiece ahora",
    title:
      "Cuéntenos cómo funciona su negocio hoy. Le mostraremos qué podría sustituir un sistema.",
    intro:
      "Comparta su idea de producto, su sistema actual o su necesidad de negocio. WhatsApp es la vía más rápida para una conversación directa. El email funciona muy bien para briefs detallados, documentos y descripciones de proyecto más largas.",
    highlights: [
      "Reciba una recomendación más clara sobre el alcance del producto, su estructura y la ruta de lanzamiento.",
      "Use el formulario para enviar lo esencial sin redactar un email largo desde cero.",
      "Pase directamente de la idea a un siguiente paso práctico y a un canal de conversación.",
    ],
    primary: { label: "Empezar por WhatsApp", href: wa(GENERIC), external: true },
    secondary: { label: "Solicitar una consulta por email", href: MAILTO },
    arabicNote: "نتحدث العربية — راسلنا على واتساب بالعربية أو الإنجليزية.",
    image: {
      src: "/assets/image_slot3.webp",
      alt: "Un escritorio premium que representa la planificación y la comunicación de proyectos.",
    },
    imageCaption: "Envíe el brief una sola vez. Continúe por WhatsApp o email.",
    direct: {
      heading: "Envíe un brief de proyecto",
      body: "Envíe aquí los datos clave y abra el brief directamente en WhatsApp o en su email.",
      whatsapp: { label: "WhatsApp", value: "+20 102 283 8534" },
      email: { label: "Email", value: "abdullah@desertlaunch.dev" },
    },
    form: {
      name: "Su nombre",
      namePlaceholder: "Nombre",
      company: "Empresa o marca",
      companyPlaceholder: "Empresa o marca",
      projectType: "Tipo de proyecto",
      projectTypePlaceholder: "Seleccione un tipo",
      projectTypeOptions: [
        "Web corporativa",
        "Plataforma web",
        "Aplicación móvil",
        "MVP",
        "Sistema interno",
        "Rediseño de producto",
      ],
      timeline: "Plazos",
      timelinePlaceholder: "Seleccione un plazo",
      timelineOptions: ["Lo antes posible", "En menos de 1 mes", "De 1 a 3 meses", "Más de 3 meses"],
      summary: "Resumen del proyecto",
      summaryPlaceholder:
        "¿Qué quiere construir, para quién es y en qué necesita ayuda?",
      submitWhatsapp: "Abrir el brief en WhatsApp",
      submitEmail: "Abrir el brief en email",
      note: "No se guarda ni se envía nada hasta que usted pulsa enviar — el formulario solo redacta su mensaje y lo abre en WhatsApp o en su email.",
      draftIntro: "Hola Desert Launch,\n\nQuiero hablar sobre un brief de proyecto.",
      draftLabels: {
        name: "Nombre",
        company: "Empresa",
        projectType: "Tipo de proyecto",
        timeline: "Plazos",
        summary: "Resumen del proyecto",
      },
      emailSubject: "Brief de proyecto para Desert Launch",
    },
  },
  footer: {
    tagline: "Software house para productos digitales serios",
    blurb:
      "Desert Launch ayuda a las empresas a lanzar webs, plataformas, aplicaciones móviles y sistemas internos con un proceso de entrega claro y comunicación directa.",
    copyright: "© 2026 Desert Launch. Todos los derechos reservados.",
    navHeading: "Navegación",
    navLinks: [
      {
        label: "Proyectos",
        sub: "Apps disponibles en el App Store y Google Play",
        href: "#work",
      },
      { label: "Servicios", sub: "Qué construye Desert Launch", href: "#services" },
      {
        label: "Planes y precios",
        sub: "Planes de alcance cerrado y propuestas a medida",
        href: "#plans",
      },
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
    note: "Use la sección de contacto de arriba para enviar un brief estructurado y continuar la conversación en el canal que prefiera.",
  },
  floatingWhatsApp: "WhatsApp",
  skipToContent: "Saltar al contenido",
  backToTop: "Volver arriba",
};
