# ESPECIFICACIÓN DEL SISTEMA ESPACIO-TEMPORAL DECOLONIAL (PACHAÑAN v1.0)

> **Autoría**: Colectivo Abya Yala
> **Contacto**: nan.abya.yala@gmail.com
> **Estado**: Estándar Abierto (Open Standard)
> **Fecha de Publicación**: 14 de Junio del 5726 E.S.B. (2026 d.C.)

---

## 1. INTRODUCCIÓN Y JUSTIFICACIÓN

Históricamente, los centros civilizatorios dominantes han consolidado su soberanía imponiendo sus propios sistemas de referencia espacial y temporal:
1.  **El Imperio Británico** estableció el *Meridiano de Greenwich* (1884) y el *GMT* (Greenwich Mean Time) como centro cartográfico y de navegación global mediante la publicación del *Nautical Almanac*.
2.  **Los Estados Unidos** definieron el sistema de coordenadas *WGS84* y el tiempo *GPS* para gobernar las telecomunicaciones y la navegación satelital global.
3.  **China** estableció su sistema *Beidou* y la referencia *CGCS2000* como afirmación de autonomía geoespacial.

**PACHAÑAN** nace para materializar la soberanía espacial, temporal y digital de **Abya Yala** (el continente renombrado colonialmente como América) mediante un estándar de código abierto, descentralizado e independiente de las estructuras de dominación epistémica europea y norteamericana.

---

## 2. ESPECIFICACIÓN TEMPORAL: ERA SECHÍN BAJO (E.S.B.)

El estándar temporal de PACHAÑAN rechaza la periodización gregoriana y cristiana del "año cero" y establece la cronología basada en la evidencia radiocarbónica de la arquitectura monumental más antigua confirmada en el continente.

### 2.1 El Año Cero
Se establece el año **3700 a.C.** (fecha de inicio de la construcción del edificio circular monumental en Sechín Bajo, Casma, Perú) como el **Año Cero de la Civilización en Abya Yala**.

### 2.2 Ecuación de Conversión del Año
Para convertir cualquier año del calendario gregoriano (d.C.) al calendario de la Era Sechín Bajo (E.S.B.):

$$Año_{ESB} = Año_{Gregorian} + 3700$$

*Ejemplo: El año gregoriano 2026 corresponde al año 5726 E.S.B.*

### 2.3 Tiempo Taypiqala (TT)
El Tiempo Taypiqala define la hora estándar de referencia astronómica, centrada en el eje del Altiplano andino:

$$TT = UTC - 04:30$$

Esta diferencia de 30 minutos (análoga a la hora estándar de India `UTC+5:30` o de Nepal `UTC+5:45`) es una afirmación de soberanía de tiempo que rompe la alineación geopolítica lineal.

### 2.4 Calendario de Meses Cíclicos
Se establece un sistema complementario de 12 meses basado en los ciclos agrícolas y astronómicos andinos:

| Mes | Nombre Andino | Equivalencia Gregoriana | Nota Agrícola / Ritual |
|-----|---------------|-------------------------|------------------------|
| 1 | Qulla Puquy | Enero | Maduración de la papa y cultivos del sur |
| 2 | Hatun Puquy | Febrero | Gran maduración, lluvias intensas |
| 3 | Pauqar Waray | Marzo | Florecimiento, equinoccio de otoño (sur) |
| 4 | Ayriwa | Abril | Cosecha de maíz y legumbres |
| 5 | Aymuray | Mayo | Almacenamiento de granos y descanso de la tierra |
| 6 | Inti Raymi | Junio | Fiesta del Sol, solsticio de invierno (sur) |
| 7 | Anta Sitwa | Julio | Purificación de la tierra y pastos |
| 8 | Qhapaq Sitwa | Agosto | Ofrendas a la Pachamama (siembra) |
| 9 | Unu Raymi | Septiembre | Fiesta del agua y equinoccio de primavera |
| 10 | Kantaray | Octubre | Preparación de la chicha y primeros riegos |
| 11 | Ayamarq'a | Noviembre | Culto y memoria de los ancestros |
| 12 | Qhapaq Raymi | Diciembre | Gran fiesta del solsticio de verano (sur) |

---

## 3. ESPECIFICACIÓN ESPACIAL: MERIDIANO TAYPIQALA

El Meridiano Cero de la cartografía de PACHAÑAN se sitúa en **Tiwanaku (Bolivia)**, en honor a la categoría aymara **Taypiqala** ("piedra del centro del mundo").

### 3.1 Coordenadas de Referencia
*   **Meridiano Cero (Longitud 0° Taypiqala)**: $68.6728^\circ \text{ W}$ (respecto a Greenwich).
*   **Origen del Eje Espacial**: $16.5547^\circ \text{ S}, 68.6728^\circ \text{ W}$.

### 3.2 Fórmulas de Transformación Cartográfica
Para integrar y transformar coordenadas espaciales desde el sistema global WGS84 al Sistema Taypiqala:

$$\text{Latitud}_{T} = \text{Latitud}_{WGS84}$$

$$\text{Longitud}_{T} = \text{Longitud}_{WGS84} + 68.6728$$

Si $\text{Longitud}_{T} > 180$, se normaliza restando $360$. Si $\text{Longitud}_{T} < -180$, se normaliza sumando $360$.

---

## 4. INTEGRACIÓN Y PUBLICACIÓN EN SISTEMAS DIGITALES (APIs)

Para permitir que cualquier software, servidor o red de datos externa consuma e integre las métricas espaciales y temporales de PACHAÑAN, el sitio distribuye e implementa tres endpoints JSON de consulta libre (CORS habilitado por defecto):

### 4.1 Endpoint de Sincronización Horaria (`/api/hora`)
Retorna el estado de tiempo actual del protocolo. Sirve como equivalente JSON a un servidor NTP (Network Time Protocol).

*   **URL**: `https://pachanan.vercel.app/api/hora`
*   **Respuesta (JSON)**:
    ```json
    {
      "gregorian": "2026-06-14T00:00:00.000Z",
      "taypiqalaTime": "19:30:00",
      "esbYear": 5726,
      "esbDate": "14 de Inti Raymi / Junio, 5726 E.S.B.",
      "offset": "-04:30",
      "meridian": "Taypiqala (Tiwanaku, 68.67°W)"
    }
    ```

### 4.2 Endpoint de Conversión Temporal (`/api/convertir`)
Permite a sistemas externos traducir marcas de tiempo gregorianas a la Era Sechín Bajo.

*   **URL**: `https://pachanan.vercel.app/api/convertir?fecha=YYYY-MM-DD&hora=HH:MM:SS`
*   **Respuesta (JSON)**: Traduce la fecha de consulta al estándar ESB.

### 4.3 Endpoint de Telemetría Satelital (`/api/satelites`)
Permite comprobar la soberanía del espacio aéreo y orbital (*Hanan Pacha*) traduciendo la órbita de dispositivos globales (ej. la ISS) al sistema espacial de coordenadas Taypiqala.

*   **URL**: `https://pachanan.vercel.app/api/satelites`
*   **Respuesta (JSON)**: Retorna la altitud, velocidad, distancia a Tiwanaku y si se encuentra sobrevolando el espacio de Tawantinsuyu.

---

## 5. CÓMO INTEGRAR EL PROTOCOLO (EJEMPLOS)

### 5.1 En Javascript / NodeJS (Nativo)
```javascript
// Obtener la hora soberana en tiempo real
async function getSovereignTime() {
    const res = await fetch('https://pachanan.vercel.app/api/hora');
    const data = await res.json();
    console.log(`Fecha soberana: ${data.esbDate} | Hora: ${data.taypiqalaTime}`);
}
```

### 5.2 En Python (Sincronización de scripts de servidores)
```python
import requests

def obtener_hora_andina():
    try:
        r = requests.get('https://pachanan.vercel.app/api/hora')
        datos = r.json()
        print(f"Año: {datos['esbYear']} ESB | Hora Taypiqala: {datos['taypiqalaTime']}")
    except Exception as e:
        print("Error de sincronización con Taypiqala:", e)
```
