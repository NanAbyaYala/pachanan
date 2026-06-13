/* ==========================================================================
   PACHAÑAN - CORE APPLICATION LOGIC
   Includes: Taypiqala Clock, Navigation, Markdown Reader, Glossary Engine, Roadmap
   ========================================================================== */

// 1. DATA DEFINITIONS

// 17 Reports Metadata
const reports = [
    {
        filename: "00_Matriz_Decolonial_Sintesis_Andina.md",
        title: "Matriz Decolonial: Síntesis Filosófica",
        category: "filosofia",
        summary: "Síntesis conceptual sobre la ruptura epistemológica, la ontología del Estar Siendo y la ética del Sumak Kawsay."
    },
    {
        filename: "estrategia_sudamericanocentrismo.md",
        title: "Estrategia Sudamericanocentrismo: Plan Maestro",
        category: "estrategia",
        summary: "Los 10 pilares estratégicos para establecer un centro de gravedad civilizatorio propio para Abya Yala."
    },
    {
        filename: "investigacion_centros_civilizatorios.md",
        title: "Centros Civilizatorios de Abya Yala",
        category: "historia",
        summary: "Estudio comparativo de los centros autónomos de civilización y el origen simultáneo del desarrollo urbano."
    },
    {
        filename: "investigacion_epistemicidio.md",
        title: "El Epistemicidio: Qué se perdió y por qué",
        category: "critica",
        summary: "El borrado sistemático del conocimiento andino mediante la traducción colonial y la quema de saberes."
    },
    {
        filename: "investigacion_manual_eurocentrismo.md",
        title: "Manual del Eurocentrismo: 10 Pasos de Colonización",
        category: "critica",
        summary: "Desmontando el decálogo heurístico de dominación cultural que impuso Europa como relato universal."
    },
    {
        filename: "investigacion_conocimiento_vivo.md",
        title: "Conocimiento Vivo y Ontologías Relacionales",
        category: "ontologia",
        summary: "La diferencia epistemológica entre estudiar el cosmos como objeto estático vs. interactuar con él como tejido vivo."
    },
    {
        filename: "investigacion_eje_andino_continuo.md",
        title: "El Eje Andino Continuo",
        category: "geografia",
        summary: "La conectividad geográfica y humana que facilitó la integración andina a lo largo de miles de kilómetros."
    },
    {
        filename: "investigacion_nombres_precoloniales.md",
        title: "Nombres Precoloniales de Abya Yala",
        category: "territorio",
        summary: "Glosario e investigación sobre el renombramiento del espacio y la recuperación de toponimias originarias."
    },
    {
        filename: "investigacion_infraestructura_digital.md",
        title: "Infraestructura Digital de Abya Yala",
        category: "tecnologia",
        summary: "Propuestas de redes mesh, IPFS y bases de datos soberanas para archivar y conectar saberes comunitarios."
    },
    {
        filename: "investigacion_arquitectura_open_source.md",
        title: "Arquitectura Open Source y Comunitaria",
        category: "tecnologia",
        summary: "Sistemas informáticos abiertos inspirados en el ayni y la minka para la soberanía de la información."
    },
    {
        filename: "investigacion_proyectos_inspiradores.md",
        title: "Proyectos Inspiradores y Redes Mesh",
        category: "tecnologia",
        summary: "Análisis de iniciativas de comunicación autónoma y soberanía tecnológica en el Sur Global."
    },
    {
        filename: "investigacion_mapas_alternativos.md",
        title: "Mapas Alternativos y Proyecciones Cartográficas",
        category: "geografia",
        summary: "Cómo las proyecciones cartográficas deforman el territorio para sostener hegemonías geopolíticas."
    },
    {
        filename: "investigacion_meridiano_cero.md",
        title: "El Meridiano Cero: Tiwanaku y Taypiqala",
        category: "geografia",
        summary: "Sustento astronómico e histórico para elegir el meridiano Taypiqala (68.67° W) como referencia espacial."
    },
    {
        filename: "investigacion_calendario_abyayala.md",
        title: "El Calendario de Abya Yala",
        category: "tiempo",
        summary: "Estructura del calendario andino basado en solsticios, equinoccios y la Era Sechín Bajo."
    },
    {
        filename: "investigacion_sesgo_arqueologico.md",
        title: "Sesgo Arqueológico y Eurocentrismo Científico",
        category: "critica",
        summary: "El racismo epistémico que clasifica la sofisticación de Abya Yala como 'tardía' o 'bárbara'."
    },
    {
        filename: "investigacion_soberania_espacial.md",
        title: "Soberanía Espacial y Cartografía Decolonial",
        category: "geografia",
        summary: "Metodologías para cartografiar el territorio desde el Cusco y los cuatro suyus."
    },
    {
        filename: "investigacion_fechas_reales.md",
        title: "Fechas Reales de la Civilización en Abya Yala",
        category: "historia",
        summary: "Análisis de radiocarbono que sitúa la arquitectura monumental en Sechín Bajo en el 3700 a.C."
    }
];

// Book Structure Metadata
const bookParts = [
    {
        partNum: "Parte I",
        title: "El Epistemicidio",
        subtitle: "Qué se perdió y por qué",
        chapters: [
            { num: "Capítulo 1", title: "1492: El año en que el 'otro' fue inventado", desc: "El Ego Conquiro antes del Ego Cogito (Dussel). El debate de Valladolid y la invención de América." },
            { num: "Capítulo 2", title: "La traducción como violencia", desc: "Diccionarios coloniales que expurgaron categorías andinas. Silvia Rivera Cusicanqui y lo ch'ixi." },
            { num: "Capítulo 3", title: "El Andeanism: Orientalismo en los Andes", desc: "Cómo occidente fabricó un mundo andino para consumo. La arqueología como extractivismo." }
        ]
    },
    {
        partNum: "Parte II",
        title: "La Ontología Andina",
        subtitle: "Cómo funciona el mundo cuando Pacha es la categoría base",
        chapters: [
            { num: "Capítulo 4", title: "Pacha: El tejido de espacio-tiempo-materia", desc: "La trilogía de las dimensiones: Hanan, Kay y Ukhu Pacha. Relación con la física moderna." },
            { num: "Capítulo 5", title: "Yanantin: La complementariedad sin síntesis", desc: "Diferencia crítica con la dialéctica hegeliana. Opuestos que coexisten sin anularse." },
            { num: "Capítulo 6", title: "Las almas múltiples: Nuna, Kamaqen, Ajayu", desc: "Fuerzas vitales del runa y el cosmos. Comparación con ontologías no occidentales." },
            { num: "Capítulo 7", title: "Relacionalidad radical", desc: "El ser humano como hebra del ayllu y la Pachamama. Ayni y Minka como dinámicas cósmicas." }
        ]
    },
    {
        partNum: "Parte III",
        title: "La Ética y la Política",
        subtitle: "Cómo se vive cuando el mundo es relación",
        chapters: [
            { num: "Capítulo 8", title: "Sumak Kawsay / Allin Kawsay", desc: "Allin Kawsay (vida justa/suficiente) como base y Sumak Kawsay (vida hermosa/sublime) como flor." },
            { num: "Capítulo 9", title: "Los tres pilares: Munay, Yachay, Ruray", desc: "Querer bien, saber bien, hacer bien. La acción como creación colectiva y comunitaria." },
            { num: "Capítulo 10", title: "El Vivir Bien contra el Vivir Mejor", desc: "Abundancia comunitaria frente a escasez competitiva. Experiencias contemporáneas en Bolivia y Ecuador." }
        ]
    },
    {
        partNum: "Parte IV",
        title: "La Práctica",
        subtitle: "Lo que se hace, lo que se ve, lo que se toca",
        chapters: [
            { num: "Capítulo 11", title: "El ritual como tecnología", desc: "El Despacho como mandala de reordenamiento energético. La coca como interfaz relacional." },
            { num: "Capítulo 12", title: "La arqueología como confirmación", desc: "Prueba material de civilización en Sechín Bajo y Caral. Las misiones polacas y Chankillo." },
            { num: "Capítulo 13", title: "El Qhapaq Ñan como filosofía material", desc: "La red vial que conecta sin someter. Los ritos del Código Khuyay." }
        ]
    },
    {
        partNum: "Parte V",
        title: "La Transmodernidad",
        subtitle: "Hacia dónde",
        chapters: [
            { num: "Capítulo 14", title: "Lo ch'ixi como proyecto", desc: "Lo manchado y contradictorio como potencia transmoderna frente a la hibridación eurocéntrica." },
            { num: "Capítulo 15", title: "Diálogo intercultural crítico", desc: "Diálogo horizontal Sur-Sur (Andes ↔ África ↔ Asia) sin el monopolio epistémico de occidente." }
        ]
    }
];

// Fallback Glossary in case glosario.json fails to fetch
const fallbackGlosario = [
    { id: "pacha", termino: "Pacha", lengua: "Quechua/Aymara", significado: "Espacio-tiempo-materia como tejido indisoluble. No es 'mundo' ni 'tierra'.", categoria: "ontologia" },
    { id: "yanantin", termino: "Yanantin", lengua: "Quechua", significado: "Complementariedad de opuestos que coexisten sin fundirse. No es dialéctica hegeliana.", categoria: "logica" },
    { id: "ayni", termino: "Ayni", lengua: "Quechua/Aymara", significado: "Reciprocidad cósmica — dar, recibir, devolver. Principio ético y económico fundamental.", categoria: "etica" },
    { id: "qhapaq-nan", termino: "Qhapaq Ñan", lengua: "Quechua", significado: "Camino de los justos. Red vial y espiritual de 30,000-40,000 km que conectaba el Tawantinsuyu.", categoria: "politica" },
    { id: "sumak-kawsay", termino: "Sumak Kawsay", lengua: "Quechua", significado: "Vida en plenitud, vida excelente. Horizonte ético-político. No es 'desarrollo' ni 'progreso'.", categoria: "horizonte" },
    { id: "abya-yala", termino: "Abya Yala", lengua: "Guna (Dulegaya)", significado: "Tierra en plena madurez, tierra de sangre vital. Nombre del continente antes de 'América'.", categoria: "territorio" },
    { id: "tawantinsuyu", termino: "Tawantinsuyu", lengua: "Quechua", significado: "Las cuatro regiones unidas. Nombre del imperio incaico y de la región andina.", categoria: "territorio" },
    { id: "cosmovivencia", termino: "Cosmovivencia", lengua: "Español (neologismo andino)", significado: "Vivir el cosmos desde dentro. No es 'cosmovisión' (observar desde fuera).", categoria: "epistemologia" },
    { id: "chixi", termino: "Ch'ixi", lengua: "Aymara", significado: "Lo jaspeado, lo manchado. Opuestos que coexisten sin mezclarse. Potencia, no defecto.", categoria: "epistemologia" },
    { id: "pachamama", termino: "Pachamama", lengua: "Quechua/Aymara", significado: "Madre del tejido cósmico. No es 'diosa tierra' — es la Pacha en su aspecto generador.", categoria: "ontologia" }
];

let activeGlosario = [...fallbackGlosario];
let activeCategory = "all";

// ==========================================================================
// 2. TAYPIQALA CLOCK & CALENDAR LOGIC
// ==========================================================================

function updateClock() {
    const now = new Date();
    
    // Calculate Taypiqala Time (UTC - 4h 30m)
    // Convert current time to UTC milliseconds, then subtract 4.5 hours in milliseconds
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const taypiMs = utcMs - (4.5 * 60 * 60 * 1000);
    const taypiDate = new Date(taypiMs);
    
    // Format Time
    const hours = String(taypiDate.getUTCHours()).padStart(2, '0');
    const minutes = String(taypiDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(taypiDate.getUTCSeconds()).padStart(2, '0');
    
    const clockEl = document.getElementById("clock-display");
    if (clockEl) {
        clockEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
    
    // Format Date (Era Sechín Bajo: Gregorian Year + 3700)
    const currentGregorianYear = now.getFullYear();
    const esbYear = currentGregorianYear + 3700;
    
    // Month Names in Quechua/Spanish complement
    const months = [
        "Qulla Puquy / Enero", "Hatun Puquy / Febrero", "Pauqar Waray / Marzo",
        "Ayriwa / Abril", "Aymuray / Mayo", "Inti Raymi / Junio",
        "Anta Sitwa / Julio", "Qhapaq Sitwa / Agosto", "Unu Raymi / Septiembre",
        "Kantaray / Octubre", "Ayamarq'a / Noviembre", "Qhapaq Raymi / Diciembre"
    ];
    
    const day = taypiDate.getUTCDate();
    const monthName = months[taypiDate.getUTCMonth()];
    
    const calendarEl = document.getElementById("calendar-display");
    if (calendarEl) {
        calendarEl.textContent = `${day} de ${monthName}, ${esbYear} E.S.B.`;
    }
}

// ==========================================================================
// 3. NAVIGATION & ROUTING
// ==========================================================================

function switchTab(tabId) {
    // Hide all tab contents
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach(content => content.classList.remove("active"));
    
    // Deactivate all navigation buttons
    const buttons = document.querySelectorAll(".nav-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    
    // Show selected content and activate corresponding button
    const targetContent = document.getElementById(`tab-${tabId}`);
    const targetBtn = document.getElementById(`btn-${tabId}`);
    
    if (targetContent) targetContent.classList.add("active");
    if (targetBtn) targetBtn.classList.add("active");
    
    // Scroll window back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to transition and load a specific report directly
function loadAndSwitchTab(tabId, reportFilename) {
    switchTab(tabId);
    if (tabId === 'investigaciones' && reportFilename) {
        loadReport(reportFilename);
    }
}

// ==========================================================================
// 4. REPORTS / INVESTIGACIONES LOGIC
// ==========================================================================

function initReports() {
    const listEl = document.getElementById("reports-list");
    if (!listEl) return;
    
    listEl.innerHTML = "";
    reports.forEach(report => {
        const li = document.createElement("li");
        li.textContent = report.title;
        li.setAttribute("data-filename", report.filename);
        li.onclick = () => loadReport(report.filename);
        listEl.appendChild(li);
    });
}

function filterReports() {
    const query = document.getElementById("report-search").value.toLowerCase();
    const listItems = document.querySelectorAll("#reports-list li");
    
    listItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

async function loadReport(filename) {
    const welcomeEl = document.getElementById("reader-welcome");
    const loadingEl = document.getElementById("reader-loading");
    const contentEl = document.getElementById("reader-content");
    
    if (welcomeEl) welcomeEl.style.display = "none";
    if (loadingEl) loadingEl.style.display = "flex";
    if (contentEl) contentEl.style.display = "none";
    
    // Highlight selected in list
    const listItems = document.querySelectorAll("#reports-list li");
    listItems.forEach(item => {
        if (item.getAttribute("data-filename") === filename) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    try {
        const response = await fetch(`contenido/notas/${filename}`);
        if (!response.ok) throw new Error("No se pudo cargar el archivo");
        const markdownText = await response.text();
        
        // Render Markdown using marked.js
        if (contentEl && typeof marked !== 'undefined') {
            contentEl.innerHTML = marked.parse(markdownText);
            
            // Adjust heading link formats if any
            contentEl.style.display = "block";
        }
    } catch (error) {
        console.error("Error al cargar informe:", error);
        if (contentEl) {
            contentEl.innerHTML = `
                <div class="reader-empty">
                    <div style="font-size:3rem;">⚠️</div>
                    <h4>Error al cargar el documento</h4>
                    <p>No se pudo cargar el archivo "${filename}". Por favor intenta de nuevo.</p>
                </div>
            `;
            contentEl.style.display = "block";
        }
    } finally {
        if (loadingEl) loadingEl.style.display = "none";
    }
}

// ==========================================================================
// 5. GLOSSARY LOGIC
// ==========================================================================

async function fetchGlosario() {
    try {
        const response = await fetch('data/glosario.json');
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                activeGlosario = data;
            }
        }
    } catch (e) {
        console.warn("No se pudo obtener glosario.json, usando datos locales de respaldo:", e);
    }
    renderGlosario();
}

function renderGlosario() {
    const container = document.getElementById("glosario-container");
    if (!container) return;
    
    const query = document.getElementById("glosario-search").value.toLowerCase();
    
    container.innerHTML = "";
    
    const filtered = activeGlosario.filter(item => {
        const matchCategory = activeCategory === "all" || item.categoria === activeCategory;
        const matchSearch = item.termino.toLowerCase().includes(query) || 
                            item.significado.toLowerCase().includes(query) ||
                            item.lengua.toLowerCase().includes(query);
        return matchCategory && matchSearch;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="reader-empty" style="grid-column: 1 / -1; padding: 3rem;">
                <div style="font-size:2rem;">🔍</div>
                <h4>No se encontraron términos</h4>
                <p>Prueba con otra búsqueda o cambia la categoría de filtro.</p>
            </div>
        `;
        return;
    }
    
    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "glass-card glosario-card";
        
        card.innerHTML = `
            <div class="glosario-meta">
                <span class="glosario-tag">${item.categoria}</span>
                <span class="glosario-lang">${item.lengua}</span>
            </div>
            <h4 class="glosario-term">${item.termino}</h4>
            <p class="glosario-definition">${item.significado}</p>
        `;
        container.appendChild(card);
    });
}

function filterGlosario(category) {
    activeCategory = category;
    
    // Update filter active states
    const filterButtons = document.querySelectorAll("#glosario-filters button");
    filterButtons.forEach(btn => {
        if (btn.getAttribute("data-category") === category) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    renderGlosario();
}

function searchGlosario() {
    renderGlosario();
}

// ==========================================================================
// 6. BOOK ROADMAP LOGIC
// ==========================================================================

function initBookRoadmap() {
    const container = document.getElementById("book-roadmap-container");
    if (!container) return;
    
    container.innerHTML = "";
    bookParts.forEach(part => {
        const card = document.createElement("div");
        card.className = "glass-card book-part-card";
        
        let chaptersHTML = "";
        part.chapters.forEach(ch => {
            chaptersHTML += `
                <li class="chapter-item">
                    <span class="chapter-title">${ch.num}: ${ch.title}</span>
                    <span class="chapter-desc">${ch.desc}</span>
                </li>
            `;
        });
        
        card.innerHTML = `
            <div class="part-indicator"></div>
            <div class="part-header">
                <div class="part-title-wrapper">
                    <span class="part-num">${part.partNum}</span>
                    <h4 class="part-name">${part.title}</h4>
                </div>
                <span class="part-subtitle">${part.subtitle}</span>
            </div>
            <ul class="chapters-list">
                ${chaptersHTML}
            </ul>
        `;
        container.appendChild(card);
    });
}

// ==========================================================================
// 7. INITIALIZATION
// ==========================================================================

window.onload = () => {
    // 1. Clock Setup
    updateClock();
    setInterval(updateClock, 1000);
    
    // 2. Tab Initializations
    initReports();
    fetchGlosario();
    initBookRoadmap();
    
    // 3. Setup default dynamic height for split view
    adjustLayoutHeight();
    window.onresize = adjustLayoutHeight;
};

function adjustLayoutHeight() {
    const splitView = document.querySelector(".split-view");
    if (splitView && window.innerWidth > 768) {
        const headerH = document.getElementById("main-header").offsetHeight;
        const footerH = document.getElementById("app-footer").offsetHeight;
        const availH = window.innerHeight - headerH - footerH - 120; // safe padding
        splitView.style.height = `${Math.max(availH, 500)}px`;
    }
}
