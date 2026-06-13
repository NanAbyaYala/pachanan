/* ==========================================================================
   PACHAÑAN API: SOBERANÍA TEMPORAL (CONVERSOR DE TIEMPO)
   Endpoint: /api/convertir
   Query params: ?fecha=YYYY-MM-DD&hora=HH:MM:SS
   Converts Gregorian date-time to Taypiqala Time and Era Sechín Bajo calendar
   ========================================================================== */

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { fecha, hora } = req.query;
        
        let targetDate = new Date();
        
        if (fecha) {
            const dateParts = fecha.split('-');
            const timeParts = (hora || '12:00:00').split(':');
            
            if (dateParts.length === 3) {
                targetDate = new Date(
                    parseInt(dateParts[0], 10), 
                    parseInt(dateParts[1], 10) - 1, 
                    parseInt(dateParts[2], 10),
                    parseInt(timeParts[0] || '12', 10),
                    parseInt(timeParts[1] || '0', 10),
                    parseInt(timeParts[2] || '0', 10)
                );
                
                if (isNaN(targetDate.getTime())) {
                    return res.status(400).json({ error: "Fecha u hora inválida." });
                }
            } else {
                return res.status(400).json({ error: "Formato de fecha inválido. Usar YYYY-MM-DD" });
            }
        }

        // Convert target date to UTC, then subtract 4.5 hours
        const utcMs = targetDate.getTime() + (targetDate.getTimezoneOffset() * 60 * 1000);
        const taypiMs = utcMs - (4.5 * 60 * 60 * 1000);
        const taypiDate = new Date(taypiMs);

        const hours = String(taypiDate.getUTCHours()).padStart(2, '0');
        const minutes = String(taypiDate.getUTCMinutes()).padStart(2, '0');
        const seconds = String(taypiDate.getUTCSeconds()).padStart(2, '0');

        const esbYear = targetDate.getFullYear() + 3700;

        const months = [
            "Qulla Puquy / Enero", "Hatun Puquy / Febrero", "Pauqar Waray / Marzo",
            "Ayriwa / Abril", "Aymuray / Mayo", "Inti Raymi / Junio",
            "Anta Sitwa / Julio", "Qhapaq Sitwa / Agosto", "Unu Raymi / Septiembre",
            "Kantaray / Octubre", "Ayamarq'a / Noviembre", "Qhapaq Raymi / Diciembre"
        ];

        const day = taypiDate.getUTCDate();
        const monthName = months[taypiDate.getUTCMonth()];

        res.status(200).json({
            input: {
                fecha: fecha || "Fecha actual",
                hora: hora || "Hora actual"
            },
            gregorianISO: targetDate.toISOString(),
            taypiqalaTime: `${hours}:${minutes}:${seconds}`,
            esbYear: esbYear,
            esbDate: `${day} de ${monthName}, ${esbYear} E.S.B.`,
            offset: "-04:30",
            meridian: "Taypiqala (Tiwanaku, 68.67°W)"
        });
    } catch (error) {
        res.status(500).json({ error: "Error en la conversión", details: error.message });
    }
};
