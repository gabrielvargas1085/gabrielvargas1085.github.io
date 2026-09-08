// data.js
// Cada objeto es un cliente/proyecto del portfolio.
// Reemplazá los "logo" y "foto" por tus archivos PNG reales, ubicados en la raíz del sitio.
// Si un campo "video" está presente, se muestra en vez de la foto horizontal.

const PROYECTOS = [
  {
    id: "roller-pro",
    empresa: "Roller Pro",
    tipo: "cliente",
    logo: "roller-pro-logo.png",
    foto: "roller-pro-foto.png",
    resumen: "Análisis de datos y ciencia de datos para ventas, logística y costos.",
    problema:
      "El equipo no tenía forma de anticipar costos de envío, medir ventas por canal, ubicar geográficamente a sus leads ni controlar el gasto de locales y fábricas. Todo vivía en planillas sueltas.",
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
      "La carga de stock se hacía a mano en una planilla de Google Sheets, sin control de clientes ni proveedores en un solo lugar.",
    solucion:
      "Un tablero de clientes y proveedores en Looker Studio, más una aplicación propia para registrar y ordenar el stock, reemplazando la carga manual.",
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
      "Los mapas de emergencia propios de CONAE se revisan contra 14 atributos de un estándar interno, un proceso manual y propenso a errores humanos.",
    solucion:
      "Un asistente que revisa automáticamente cada mapa contra los 14 atributos, detecta errores y omisiones, los clasifica por severidad y dialoga con el técnico para resolver dudas antes de la decisión final.",
    tecnologias: ["Python 3.12", "Streamlit", "Claude (API de Anthropic)", "PyMuPDF", "fpdf2", "SHA-256"],
    enlaces: [
      { label: "Ver demo", url: "https://demoinnovatonconaemapasemergencia-fmxar2yobtzcjwdknnxqyv.streamlit.app/" }
    ]
  },
  {
    id: "enferexpress",
    empresa: "Enferexpress",
    tipo: "cliente",
    logo: "enferexpress-logo.png",
    foto: "enferexpress-foto.png",
    resumen: "Enfermería a domicilio: app, panel de clientes y agenda automatizada por WhatsApp.",
    problema:
      "La clínica necesitaba una app propia para pacientes, entender a su base de clientes por zona y patología, y automatizar la gestión de turnos que hasta entonces era manual.",
    solucion:
      "Una app publicada en Google Play, un panel en Looker Studio que segmenta clientes por barrio, edad, patología y horario de demanda, y un agente que agenda, consulta y reprograma turnos por WhatsApp.",
    tecnologias: ["LangChain", "LangGraph", "Python", "PostgreSQL", "API oficial de WhatsApp (Meta)"],
    enlaces: [
      { label: "Ver app en Google Play", url: "https://play.google.com/store/apps/details?id=com.aifeelingx.enferexpressapp&hl=es_AR" },
      { label: "Ver servicio de turnos", url: "https://aifeelingx.com/servicios_turnos/" }
    ]
  },
  {
    id: "agente-negocios",
    empresa: "Agente de Negocios",
    tipo: "producto",
    logo: "agente-negocios-logo.png",
    video: "assets/video/agente-negocios.mp4",
    resumen: "Business Intelligence conversacional para la gestión de una clínica de enfermería.",
    problema:
      "Los dueños de la clínica necesitaban entender su negocio sin depender de un analista para cada pregunta puntual.",
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
      "Verificar la autenticidad de un título o certificado suele depender de llamar a la institución emisora, un proceso lento y poco confiable.",
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
