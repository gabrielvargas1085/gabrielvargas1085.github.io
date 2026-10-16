const PROYECTOS = [
  {
    id: "ai-empleo",
    empresa: "AI_empleo",
    tipo: "producto",
    logo: "aiempleo-logo.png",
    video: "assets/video/panel-aiempleo.mp4",
    resumen: "Conexión e inteligencia laboral verificable: oficios, agente de IA y registro en blockchain.",
    solucion:
      "Una plataforma que funciona desde un chat. El trabajador se registra gratis, declara sus oficios y competencias, y verifica su identidad. Quien necesita un servicio lo pide con sus palabras o por audio, y un agente de IA propone a los trabajadores más cercanos, con la competencia justa y bien calificados. Cada trabajo y su calificación quedan registrados en blockchain, sin datos personales, para que el trabajador construya un historial laboral verificable que puede mostrar en cualquier lugar. Municipios, empresas y consultoras de RRHH acceden a un panel con el análisis del mercado laboral local: oferta y demanda por oficio, brechas de competencias, capacitaciones recomendadas y huella de carbono de los traslados.",
    tecnologias: ["Agente de IA", "Blockchain", "Telegram", "WhatsApp"],
    imagenVertical: {
      src: "panel-analisis.jpg",
      alt: "Panel de análisis del mercado laboral local de AI_empleo",
      leyenda: "Panel de análisis del mercado laboral local"
    },
    prueba: {
      titulo: "Probalo ahora",
      texto: "Escaneá el QR, abrí el bot en Telegram y escribí /demo. Con un solo celular podés probar los dos lados: pedir un servicio como cliente y recibir la oferta como trabajador.",
      detalle: "En Telegram buscá @aiempleo_demo_bot o escaneá el QR.",
      qr: "aiempleo-qr.png"
    },
    enlaces: [
      { label: "Abrir el bot en Telegram", url: "https://t.me/aiempleo_demo_bot" },
      { label: "Pedir acceso al panel de administración", url: "https://wa.me/5493512130298?text=Hola%2C%20quiero%20pedir%20acceso%20al%20panel%20de%20administraci%C3%B3n%20de%20AI_empleo" }
    ]
  },
  {
    id: "roller-pro",
    empresa: "Roller Pro",
    tipo: "cliente",
    logo: "roller-pro-logo.png",
    foto: "roller-pro-foto.png",
    resumen: "Análisis de datos y ciencia de datos para ventas, logística y costos.",
    problema:
      "El equipo solo tenía planillas de Google Sheets con datos masivos sin procesar: no había forma de anticipar costos de envío, medir ventas por canal, ubicar con exactitud geográfica a los leads ni controlar el gasto de locales y fábricas. Todo vivía en planillas sueltas.",
    solucion:
      "Limpieza y adecuación de las fuentes de datos, y armado de tableros en Looker Studio para cada área: costos de envío por Andreani, ventas y facturación anual, geolocalización de leads, y gastos de locales y fábricas.",
    tecnologias: ["Looker Studio", "SQL", "Google Sheets", "Limpieza de datos", "NLP"],
    enlaces: [
      { label: "Costos de envío por Andreani", url: "https://datastudio.google.com/reporting/9aae04c4-3e5d-4256-a59e-9a1dc6da0f9b/page/p_rcunl2c3pd" },
      { label: "Ventas y facturación anual", url: "https://datastudio.google.com/reporting/c36d3063-5b40-4008-82c9-b308955024ae/page/p_26gi1trmpd" },
      { label: "Geolocalización de leads", url: "https://datastudio.google.com/reporting/39bdba95-f75c-4c84-91b1-64272a226ebb/page/p_3r0g8h73od" },
      { label: "Gastos de locales y fábricas", url: "https://datastudio.google.com/reporting/db312cc2-909c-4a44-af39-74768b2a0f1a/page/p_kkb6c69yqd" },
      { label: "Informe de comentarios (NLP)", url: "https://drive.google.com/file/d/1-AW9A4AzOSRnMZioRjihIJYx4HiD4e5o/view" }
    ]
  },
  {
    id: "cormac",
    empresa: "Cormac",
    tipo: "cliente",
    logo: "cormac-logo.png",
    foto: "cormac-foto.png",
    resumen: "Corralón y proveedor de materiales: visualización de datos y una app de stock.",
    problema:
      "El trabajo pedido fue analizar los problemas de logística existentes, armar un informe y asesorar sobre las soluciones a aplicar. Un problema puntual era el uso de planillas sueltas de Google Sheets para manejar la información, sin una solución adaptada a cada sector — entre ellas, la carga de stock a mano, sin control de clientes ni proveedores en un solo lugar.",
    solucion:
      "Un tablero de clientes y proveedores en Looker Studio, y una aplicación pensada a medida de las necesidades y la forma de trabajo del área de stock y logística, reemplazando la carga manual.",
    tecnologias: ["Looker Studio", "Google Apps Script", "Google Sheets"],
    enlaces: [
      { label: "Tablero de clientes y proveedores", url: "https://datastudio.google.com/reporting/a12325ce-7512-4a19-aa19-0ce998e0d9fe" },
      { label: "Abrir app de stock", url: "https://script.google.com/macros/s/AKfycbxaBsseB4UyddHLQ-n07rcKii3QOpQ-oUNYupJm0JiWyxi2v3oRzmi824pkpvTYeYiP/exec" }
    ]
  },
  {
    id: "conae",
    empresa: "CONAE",
    tipo: "propio",
    logo: "conae-logo.png",
    foto: "conae-foto.png",
    resumen: "Proyecto propio (Innovaton): control de calidad de mapas de emergencia con IA.",
    problema:
      "Los mapas de emergencia propios de CONAE se revisan contra 14 atributos de un estándar interno, un proceso manual y propenso a errores humanos. Por lo que se busca darle uso a herramientas de IA para hacer más rápido el proceso, manteniendo la última decisión en manos humanas.",
    solucion:
      "Un asistente que revisa automáticamente cada mapa contra los 14 atributos, detecta errores y omisiones, los clasifica por severidad y dialoga con el técnico para resolver dudas antes de la decisión final.",
    tecnologias: ["Python 3.12", "Streamlit", "Claude (API de Anthropic)", "PyMuPDF", "fpdf2", "SHA-256"],
    enlaces: [
      { label: "Ver demo", url: "https://demoinnovatonconaemapasemergencia-fmxar2yobtzcjwdknnxqyv.streamlit.app/" }
    ],
    notaEnlace: "Al ingresar, si la app está dormida, apretá el botón azul que dice \"Yes, get this app back up!\" — Streamlit pone a dormir las apps sin uso reciente."
  },
  {
    id: "enferexpress",
    empresa: "Enferexpress",
    tipo: "cliente",
    logo: "enferexpress-logo.png",
    foto: "enferexpress-foto.png",
    resumen: "Enfermería a domicilio: app, panel de clientes y agenda automatizada por WhatsApp.",
    problema:
      "La empresa necesitaba una app propia para pacientes, entender a su base de clientes por zona y patología, y automatizar la gestión de turnos que hasta entonces era manual.",
    solucion:
      "Una app publicada en Google Play, un panel en Looker Studio que segmenta clientes por barrio, edad, patología y horario de demanda, y un agente que agenda, consulta y reprograma turnos por WhatsApp.",
    tecnologias: ["LangChain", "LangGraph", "Python", "PostgreSQL", "API oficial de WhatsApp (Meta)"],
    enlaces: [
      { label: "Ver app en Google Play", url: "https://play.google.com/store/apps/details?id=com.aifeelingx.enferexpressapp&hl=es_AR" },
      { label: "Ver servicio de turnos", url: "https://aifeelingx.com/servicios_turnos/" },
      { label: "Ver tablero de clientes", url: "https://datastudio.google.com/reporting/076ef6aa-e76e-4efb-9a38-45e9f7fb666d/page/dxNRE" }
    ]
  },
  {
    id: "agente-negocios",
    empresa: "Agente de Negocios",
    tipo: "producto",
    logo: "agente-negocios-logo.png",
    video: "assets/video/agente-negocios.mp4",
    resumen: "Business Intelligence conversacional para la gestión de una empresa de enfermería a domicilio.",
    problema:
      "Los dueños de la empresa necesitaban entender su negocio sin depender de un analista para cada pregunta puntual.",
    solucion:
      "Un dashboard con indicadores clave combinado con un asistente conversacional que responde preguntas de negocio en lenguaje natural.",
    tecnologias: ["Python 3.13", "FastAPI", "PostgreSQL 16", "LangChain", "Claude Sonnet 5", "React 18", "Chart.js", "Firebase Auth"],
    formulario: {
      titulo: "Solicitar acceso a la demo",
      destino: "agente-negocios",
      nota: "Dejá tu nombre, institución y email para recibir acceso a agentenegocios-production.up.railway.app"
    }
  },
  {
    id: "titulos-digitales",
    empresa: "Títulos Digitales",
    tipo: "producto",
    logo: "titulos-digitales-logo.png",
    foto: "titulos-digitales-foto.png",
    resumen: "Diplomas y certificados académicos con doble respaldo en Polygon y Arbitrum.",
    problema:
      "Verificar la autenticidad de un título o certificado suele depender de llamar a la institución emisora, un proceso lento y poco confiable, a veces imposible, lo que facilita certificaciones falsas.",
    solucion:
      "Una plataforma que emite certificados con doble respaldo blockchain, verificable por cualquier persona en segundos desde cualquier lugar del mundo.",
    tecnologias: ["Next.js", "Polygon", "Arbitrum One", "Firma digital", "reCAPTCHA v3"],
    formulario: {
      titulo: "Solicitar acceso a la plataforma",
      destino: "titulos-digitales",
      nota: "Dejá tus datos de contacto para solicitar acceso a aifeelingx.com/blockchain/"
    }
  }
];
