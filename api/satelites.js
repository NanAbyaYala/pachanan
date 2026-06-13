/* ==========================================================================
   PACHAÑAN API: SOBERANÍA ESPACIAL Y TELEMETRÍA ORBITAL
   Endpoint: /api/satelites
   Fetches the real-time position of the ISS and translates it relative to the
   Taypiqala Meridian (68.67° W). Calculates distance to Tiwanaku and airspace status.
   ========================================================================== */

const TIWANAKU_LAT = -16.5547;
const TIWANAKU_LON = -68.6728;

// Haversine formula to calculate distance in km between two coordinate points
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return Math.round(R * c * 100) / 100; // Round to 2 decimal places
}

// Convert standard longitude (Greenwich-based) to Taypiqala-based longitude
function convertToTaypiqalaLongitude(gLon) {
    let tLon = gLon - TIWANAKU_LON;
    
    // Normalize to [-180, 180] range
    if (tLon > 180) {
        tLon -= 360;
    } else if (tLon < -180) {
        tLon += 360;
    }
    
    return Math.round(tLon * 10000) / 10000;
}

// Check if standard coordinates are within the approximate boundary of the Andean space (Tawantinsuyu)
// Approx: 0° Latitude (Ecuador/Colombia) to 37° S (Chile/Argentina) and 50° W to 82° W
function checkAndeanAirspace(lat, lon) {
    return lat <= 0 && lat >= -37 && lon <= -50 && lon >= -82;
}

module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        // Fetch real-time position of the International Space Station (ISS)
        const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        if (!response.ok) {
            throw new Error("No se pudo obtener la telemetría del satélite");
        }
        
        const data = await response.json();
        
        const sLat = parseFloat(data.latitude);
        const sLon = parseFloat(data.longitude);
        const velocity = parseFloat(data.velocity);
        const altitude = parseFloat(data.altitude);
        
        // Transform coordinates relative to Tiwanaku
        const taypiqalaLon = convertToTaypiqalaLongitude(sLon);
        const distance = calculateDistance(TIWANAKU_LAT, TIWANAKU_LON, sLat, sLon);
        const isOverTawantinsuyu = checkAndeanAirspace(sLat, sLon);
        
        res.status(200).json({
            satellite: "Estación Espacial Internacional (ISS)",
            satelliteId: 25544,
            standardCoordinates: {
                latitude: Math.round(sLat * 10000) / 10000,
                longitude: Math.round(sLon * 10000) / 10000,
                datum: "WGS84 (Greenwich Meridian)"
            },
            taypiqalaCoordinates: {
                latitude: Math.round(sLat * 10000) / 10000,
                longitude: taypiqalaLon,
                datum: "Taypiqala Meridian (Tiwanaku 0°)"
            },
            telemetry: {
                distanceToTiwanakuKm: distance,
                velocityKmh: Math.round(velocity * 100) / 100,
                altitudeKm: Math.round(altitude * 100) / 100,
                visibility: data.visibility
            },
            sovereignty: {
                airspaceStatus: isOverTawantinsuyu ? "HANAN PACHA - SOBRE TAWANTINSUYU" : "FUERA DE TAWANTINSUYU",
                isOverhead: distance < 1000,
                details: isOverTawantinsuyu 
                    ? "El dispositivo orbital está surcando el Hanan Pacha de nuestra región soberana."
                    : "El dispositivo orbital se encuentra fuera de la región andina."
            },
            timestamp: new Date(data.timestamp * 1000).toISOString(),
            philosophy: "PACHAÑAN Decolonial Space Sovereignty System"
        });
    } catch (error) {
        res.status(500).json({ 
            error: "Error al sincronizar telemetría orbital", 
            details: error.message,
            mockerFallback: {
                satellite: "Estación Espacial Internacional (ISS)",
                taypiqalaCoordinates: {
                    latitude: -16.5,
                    longitude: 0.0,
                    datum: "Taypiqala Meridian (Simulado)"
                },
                telemetry: {
                    distanceToTiwanakuKm: 120,
                    velocityKmh: 27600,
                    altitudeKm: 420
                },
                sovereignty: {
                    airspaceStatus: "HANAN PACHA - SOBRE TAWANTINSUYU",
                    isOverhead: true
                }
            }
        });
    }
};
