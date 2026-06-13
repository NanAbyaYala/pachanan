# Arquitectura Open Source — Proyecto Pacha

> Investigación completada 2026-05-31
> Stack 100% gratuito, 100% open source, empezable mañana

---

## Stack Definitivo ($0 total)

| Necesidad | Herramienta | Costo |
|-----------|------------|-------|
| Repositorio | GitHub + mirror GitLab/Codeberg | $0 |
| Hosting | Cloudflare Pages (ancho de banda ilimitado) | $0 |
| Almacenamiento | Cloudflare R2 (10GB gratis) | $0 |
| Generador sitio | Astro | $0 |
| Mapas | Leaflet + OpenStreetMap | $0 |
| Visualizaciones | D3.js + Observable Plot | $0 |
| CDN librerías | jsDelivr | $0 |
| Comunicación | Matrix + puente Discord | $0 |
| Diseño | Penpot (open source) | $0 |
| Analytics | GoatCounter | $0 |
| Validación datos | JSON Schema + ajv | $0 |
| CI/CD | GitHub Actions (2000 min/mes) | $0 |

---

## Plan de Ejecución — Día por Día

### Día 1 (2-3 horas): Fundación
- Crear repo `pacha-project` en GitHub
- Estructura de carpetas completa
- `civilizaciones.json` con las 7 civilizaciones
- `glosario.json` con 20-30 términos
- GitHub Actions para validar JSON + deploy a Cloudflare Pages
- README con visión, principios, cómo contribuir

### Día 2 (3-4 horas): Sitio mínimo
- Astro inicializado
- Layout base + página de inicio
- Página de glosario (lee JSON, muestra términos, búsqueda client-side)
- Página de mapa (Leaflet + OpenStreetMap + marcadores de sitios)

### Día 3 (2-3 horas): Documentación para contribuidores
- CONTRIBUTING.md detallado
- 5-10 issues "good first issue"
- Templates de datos (copiar, pegar, contribuir)

### Día 4 (1-2 horas): Mirror y respaldo
- GitHub Action para mirror a GitLab + Codeberg
- "Si uno cae, los otros siguen"

### Día 5 (1 hora): Compartir
- Post/hilo explicando el proyecto
- Mensaje directo a 5-10 personas/colectivos
- Sin "marketing" — crece orgánico o no crece

---

## Principios (van en el README)

1. **Abierto por defecto** — Todo público, sin "contenido premium"
2. **Multilingüe desde el inicio** — Español base, estructura lista para quechua/aymara/guaraní/inglés/portugués
3. **Sin centro** — No hay servidor central, no hay "dueño". El repo puede desaparecer y el proyecto sobrevive en forks
4. **Datos primero** — Los datos son el núcleo. Visualizaciones y sitio son accesorios
5. **Ayni digital** — Contribuir es reciprocidad. No hay "usuarios", hay contribuidores
6. **Sin barreras técnicas** — Editar Markdown debe ser suficiente para contribuir
7. **Soberanía de datos** — Archivos JSON descargables. Sin dependencia de plataformas

---

## Métricas (no capitalistas)

- Contribuidores activos (no "usuarios" ni "visitas")
- Forks (gente que lo hace propio)
- Traducciones completadas
- Calidad de datos (fuentes verificables)
- Citas y reutilización
- Pregunta fundamental: "¿Está esto ayudando a que la cosmovivencia de Abya Yala sea más visible, accesible y precisa?"

---

## Lo que NO se necesita

- No backend (todo estático)
- No autenticación (todo público)
- No CMS (Markdown en Git)
- No presupuesto ($0)
- No "estrategia de monetización" (esto es un bien común digital)
- No "plan de crecimiento" (crece orgánico o no crece)

---

## Primer comando (mañana, 30 segundos)

```bash
mkdir ~/pacha-project && cd ~/pacha-project && git init && \
echo "# Proyecto Pacha — Conocimiento Abierto de Abya Yala" > README.md && \
echo "CC BY-SA 4.0" > LICENSE && \
mkdir -p data/schemas contenido/{es,qu,ay,gn,en,pt} \
visualizaciones/{mapa,timeline,glosario,genealogia} \
sitio/src herramientas docs .github/workflows && \
git add -A && git commit -m "feat: semilla del Proyecto Pacha"
```