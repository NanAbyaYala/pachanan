/* ==========================================================================
   PACHAÑAN API: SOBERANÍA TEMPORAL (HORA Y CALENDARIO)
   Endpoint: /api/hora
   Returns the current Taypiqala Time (UTC-4:30) and Era Sechín Bajo Date (ESB)
   ========================================================================== */

module.exports = (req, res) => {
    // Enable CORS (Cross-Origin Resource Sharing)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const now = new Date();
        
        // Calculate Taypiqala Time (UTC - 4h 30m)
        const utcMs = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const taypiMs = utcMs - (4.5 * 60 * 60 * 1000);
        const taypiDate = new Date(taypiMs);

        const hours = String(taypiDate.getUTCHours()).padStart(2, '0');
        const minutes = String(taypiDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(taypiDate.getUTCSeconds()).padStart(2, '0');

        const currentGregorianYear = now.getFullYear();
        const esbYear = currentGregorianYear + 3700;

        const months = [
            "Qulla Puquy / Enero", "Hatun Puquy / Febrero", "Pauqar Waray / Marzo",
            "Ayriwa / Abril", "Aymuray / Mayo", "Inti Raymi / Junio",
            "Anta Sitwa / Julio", "Qhapaq Sitwa / Agosto", "Unu Raymi / Septiembre",
            "Kantaray / Octubre", "Ayamarq'a / Noviembre", "Qhapaq Raymi / Diciembre"
        ];

        const day = taypiDate.getUTCDate();
        const monthIndex = taypiDate.getUTCMonth();
        const monthName = months[monthIndex];

        res.status(200).json({
            gregorian: now.toISOString(),
            utc: new Date(utcMs).toISOString(),
            taypiqalaTime: `${hours}:${minutes}:${seconds}`,
            esbYear: esbYear,
            esbDate: `${day} de ${monthName}, ${esbYear} E.S.B.`,
            offset: "-04:30",
            meridian: "Taypiqala (Tiwanaku, 68.67°W)",
            calendarSystem: "Era Sechín Bajo (E.S.B.)",
            eraInitiation: "~3700 a.C. (Arquitectura monumental más antigua de Abya Yala)",
            philosophy: "PACHAÑAN Decolonial Space-Time System",
            motto: "Ñan hina, Pacha hina — Como el camino, como el tejido"
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno al calcular el tiempo de soberanía", details: error.message });
    }
};
