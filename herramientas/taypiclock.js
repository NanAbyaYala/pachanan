#!/usr/bin/env node

/* ==========================================================================
   PACHAÑAN CLI: SOBERANÍA TEMPORAL
   Uso: node herramientas/taypiclock.js
   Muestra el Tiempo Taypiqala (Tiwanaku) y la fecha de la Era Sechín Bajo (ESB)
   ========================================================================== */

const now = new Date();
const utcMs = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
const taypiMs = utcMs - (4.5 * 60 * 60 * 1000);
const taypiDate = new Date(taypiMs);

const hours = String(taypiDate.getUTCHours()).padStart(2, '0');
const minutes = String(taypiDate.getUTCMinutes()).padStart(2, '0');
const seconds = String(taypiDate.getUTCSeconds()).padStart(2, '0');

const esbYear = now.getFullYear() + 3700;

const months = [
    "Qulla Puquy (Enero)", "Hatun Puquy (Febrero)", "Pauqar Waray (Marzo)",
    "Ayriwa (Abril)", "Aymuray (Mayo)", "Inti Raymi (Junio)",
    "Anta Sitwa (Julio)", "Qhapaq Sitwa (Agosto)", "Unu Raymi (Septiembre)",
    "Kantaray (Octubre)", "Ayamarq'a (Noviembre)", "Qhapaq Raymi (Diciembre)"
];

const day = taypiDate.getUTCDate();
const monthName = months[taypiDate.getUTCMonth()];

console.log("\x1b[33m%s\x1b[0m", " ┌──────────────────────────────────────────┐");
console.log("\x1b[33m%s\x1b[0m", ` │  PACHAÑAN — SOBERANÍA TEMPORAL EN VIVO    │`);
console.log("\x1b[33m%s\x1b[0m", " ├──────────────────────────────────────────┤");
console.log(` │  Tiempo Taypiqala (Tiwanaku):  \x1b[1m\x1b[31m${hours}:${minutes}:${seconds}\x1b[0m   │`);
console.log(` │  Fecha Era Sechín Bajo: \x1b[1m\x1b[32m${day} ${monthName.padEnd(20)}\x1b[0m│`);
console.log(` │  Año de Soberanía:      \x1b[1m\x1b[36m${esbYear} E.S.B.\x1b[0m            │`);
console.log(` │  Zona Horaria:          UTC-4:30                 │`);
console.log(` │  Meridiano Cero:        Taypiqala (68.67° W)     │`);
console.log("\x1b[33m%s\x1b[0m", " └──────────────────────────────────────────┘");
console.log(" \"Ñan hina, Pacha hina\" — Como el camino, como el tejido.\n");
