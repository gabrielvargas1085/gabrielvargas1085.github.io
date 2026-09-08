// script.js
// Renderiza PROYECTOS (definidos en data.js) como un timeline con acordeón.

const ETIQUETAS = {
  cliente: "Cliente",
  propio: "Proyecto propio",
  producto: "Producto AiFeelingX"
};

function iniciales(nombre) {
  return nombre
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function crearLogo(proyecto) {
  const img = document.createElement("img");
  img.className = "proyecto__logo";
  img.alt = `Logo de ${proyecto.empresa}`;
  img.src = proyecto.logo;
  img.width = 52;
  img.height = 52;
  // Si el archivo real todavía no está subido, mostramos un placeholder con iniciales.
  img.onerror = () => {
    img.replaceWith(elementoPlaceholderLogo(proyecto));
  };
  return img;
}

function elementoPlaceholderLogo(proyecto) {
  const div = document.createElement("div");
  div.className = "proyecto__logo proyecto__logo--placeholder";
  div.textContent = iniciales(proyecto.empresa);
  return div;
}

function crearMedia(proyecto) {
  if (proyecto.video) {
    const video = document.createElement("video");
    video.className = "proyecto__media";
    video.controls = true;
    video.preload = "none";
    const source = document.createElement("source");
    source.src = proyecto.video;
    source.type = "video/mp4";
    video.appendChild(source);
    return video;
  }
  const img = document.createElement("img");
  img.className = "proyecto__media";
  img.alt = `Captura del trabajo con ${proyecto.empresa}`;
  img.src = proyecto.foto;
  img.onerror = () => {
    const div = document.createElement("div");
    div.className = "proyecto__media proyecto__media--placeholder";
    div.textContent = `Agregar ${proyecto.foto} en la raíz del sitio`;
    img.replaceWith(div);
  };
  return img;
}

function crearProyecto(proyecto, index) {
  const li = document.createElement("li");
  li.className = "proyecto";
  li.dataset.abierto = "false";

  const idDetalle = `detalle-${proyecto.id}`;

  const cabecera = document.createElement("button");
  cabecera.className = "proyecto__cabecera";
  cabecera.setAttribute("aria-expanded", "false");
  cabecera.setAttribute("aria-controls", idDetalle);
  cabecera.appendChild(crearLogo(proyecto));

  const titulos = document.createElement("div");
  titulos.className = "proyecto__titulos";
  titulos.innerHTML = `
    <div class="proyecto__nombre">${proyecto.empresa}</div>
    <div class="proyecto__resumen">${proyecto.resumen}</div>
  `;
  cabecera.appendChild(titulos);

  const etiqueta = document.createElement("span");
  etiqueta.className = "proyecto__etiqueta";
  etiqueta.textContent = ETIQUETAS[proyecto.tipo] || "";
  cabecera.appendChild(etiqueta);

  const flecha = document.createElement("span");
  flecha.className = "proyecto__flecha";
  flecha.setAttribute("aria-hidden", "true");
  flecha.textContent = "›";
  cabecera.appendChild(flecha);

  cabecera.addEventListener("click", () => {
    const abierto = li.dataset.abierto === "true";
    li.dataset.abierto = abierto ? "false" : "true";
    cabecera.setAttribute("aria-expanded", String(!abierto));
  });

  const detalle = document.createElement("div");
  detalle.className = "proyecto__detalle";
  detalle.id = idDetalle;

  const detalleInner = document.createElement("div");
  detalleInner.className = "proyecto__detalle-inner";

  const contenido = document.createElement("div");
  contenido.className = "proyecto__contenido";
  contenido.appendChild(crearMedia(proyecto));

  contenido.appendChild(crearBloque("Problema", proyecto.problema));
  contenido.appendChild(crearBloque("Solución", proyecto.solucion));

  if (proyecto.tecnologias?.length) {
    const bloqueTec = document.createElement("div");
    bloqueTec.className = "proyecto__bloque";
    bloqueTec.innerHTML = `<h4>Tecnologías</h4>`;
    const chips = document.createElement("div");
    chips.className = "proyecto__tecnologias";
    proyecto.tecnologias.forEach((t) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = t;
      chips.appendChild(chip);
    });
    bloqueTec.appendChild(chips);
    contenido.appendChild(bloqueTec);
  }

  if (proyecto.enlaces?.length) {
    const enlacesDiv = document.createElement("div");
    enlacesDiv.className = "proyecto__enlaces";
    proyecto.enlaces.forEach((e) => {
      const a = document.createElement("a");
      a.className = "boton";
      a.href = e.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = e.label;
      enlacesDiv.appendChild(a);
    });
    contenido.appendChild(enlacesDiv);
  }

  if (proyecto.formulario) {
    const btn = document.createElement("button");
    btn.className = "boton boton--principal";
    btn.style.marginTop = "1.1rem";
    btn.textContent = proyecto.formulario.titulo;
    btn.addEventListener("click", () => abrirModal(proyecto.formulario));
    contenido.appendChild(btn);
  }

  detalleInner.appendChild(contenido);
  detalle.appendChild(detalleInner);

  li.appendChild(cabecera);
  li.appendChild(detalle);
  return li;
}

function crearBloque(titulo, texto) {
  const div = document.createElement("div");
  div.className = "proyecto__bloque";
  div.innerHTML = `<h4>${titulo}</h4><p>${texto}</p>`;
  return div;
}

function renderizarProyectos() {
  const lista = document.getElementById("lista-proyectos");
  PROYECTOS.forEach((p, i) => lista.appendChild(crearProyecto(p, i)));
}

/* ===== Modal de acceso a demo ===== */
const modal = document.getElementById("modal-acceso");
const modalTitulo = document.getElementById("modal-titulo");
const modalNota = document.getElementById("modal-nota");
const formProyecto = document.getElementById("form-proyecto");
const formAcceso = document.getElementById("form-acceso");
const formEstado = document.getElementById("form-estado");

// 
const URL_APPS_SCRIPT = "https://script.google.com/macros/s/AKfycbwfIYk39MdrxqxwFw0fwPhvCyUreMYuT0iZxXqmaOvES2OWddxQAYL_my3IvHX_6q9Q7A/exec";

function abrirModal(config) {
  modalTitulo.textContent = config.titulo;
  modalNota.textContent = config.nota;
  formProyecto.value = config.destino;
  formEstado.textContent = "";
  modal.hidden = false;
}

function cerrarModal() {
  modal.hidden = true;
  formAcceso.reset();
}

document.getElementById("modal-cerrar").addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) cerrarModal();
});

formAcceso.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Honeypot: si el campo trampa viene completo, es un bot. Cortamos acá sin avisar.
  if (formAcceso.elements["sitio-web"].value) {
    formEstado.textContent = "";
    cerrarModal();
    return;
  }

  if (URL_APPS_SCRIPT === "PEGAR_ACA_LA_URL_DEL_APPS_SCRIPT") {
    formEstado.textContent = "Falta conectar el formulario a Google Sheets (ver README).";
    return;
  }

  const datos = new FormData(formAcceso);
  formEstado.textContent = "Enviando...";

  try {
    await fetch(URL_APPS_SCRIPT, {
      method: "POST",
      body: datos,
      mode: "no-cors" // Apps Script Web Apps no siempre devuelven CORS; el envío igual llega.
    });
    formEstado.textContent = "¡Listo! Te vamos a escribir con el acceso.";
    formAcceso.reset();
    setTimeout(cerrarModal, 1800);
  } catch (err) {
    formEstado.textContent = "No se pudo enviar. Probá de nuevo en un momento.";
  }
});

renderizarProyectos();
