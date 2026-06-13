# Mapas Alternativos — Tecnología para Abya Yala como centro

> Investigación completada 2026-05-31

---

## Recomendación: Estrategia en 3 fases

### Fase 1 — MVP rápido (1 día): Globo 3D con MapLibre GL JS

```javascript
const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [-60, -15],  // Centro de Abya Yala
  zoom: 3,
  projection: { type: 'globe' }
});
```

**Por qué globo 3D:** En una esfera no hay "arriba" ni "abajo". Es intrínsecamente decolonial. El usuario rota libremente. ~50 líneas de código. Sin costo de tiles (PMTiles).

### Fase 2 — Capa decolonial: GeoJSON con territorios indígenas
- Datos de Native Land Digital (native-land.ca, tienen API)
- Topónimos originarios (Abya Yala, Tawantinsuyu, Wallmapu)
- Líneas de tiempo históricas
- Sitios arqueológicos (Caral, Chavín, Tiwanaku, Cusco...)

### Fase 3 — Proyección complementaria: Equal Earth con D3.js
- Proyección equal-area (áreas reales, sin distorsión)
- Centrada en ~65°W (meridiano Tiwanaku/Cusco)
- Versión "sur arriba" como opción
- SVG/Canvas estático o semi-interactivo

---

## Lo que ya existe (para no reinventar)

| Proyecto | Qué ofrece | Cómo usarlo |
|----------|-----------|-------------|
| **Equal Earth** | Proyección equal-area, versión "South at Top" en español | equal-earth.com — descargar como referencia |
| **Native Land Digital** | GeoJSON de territorios indígenas, API | native-land.ca — integrar como capa |
| **OpenFreeMap** | Tiles gratuitos open source | GitHub: hyperknot/openfreemap |
| **MapLibre GL JS** | Motor de mapas WebGL, globe projection | maplibre.org |
| **PMTiles** | Tiles sin servidor (un archivo) | protomaps.com |

---

## Lo que NO existe (nuestra oportunidad)

**Nadie ha integrado todo en una plataforma interactiva open source.** Hay piezas sueltas pero no un "Google Maps decolonial". Pachanan puede ser el primero.

---

## Stack técnico final

```
MapLibre GL JS (globo 3D interactivo)
  + PMTiles (datos OSM sin servidor, $0)
  + Capa GeoJSON (territorios indígenas, topónimos originarios)
  + D3.js (visualización Equal Earth complementaria)
  + Proyección Albers Sudamérica: EPSG:102033
```