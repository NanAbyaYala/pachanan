# Contribuir a PACHAÑAN — Guía de Ayni Digital

> **Ayni**: Reciprocidad cósmica. Recibir, dar, devolver.
> En este proyecto no hay meros "usuarios" ni "consumidores"; todos somos parte del tejido y contribuimos a sostenerlo.

¡Gracias por tu interés en sumarte a PACHAÑAN! Este es un proyecto 100% abierto, descentralizado y de código libre dedicado a la soberanía del conocimiento en Abya Yala.

---

## 🌾 ¿Cómo puedes contribuir?

No necesitas saber programación para colaborar. Valoramos de igual manera el trabajo sobre los textos, las lenguas y el código.

### 1. Aportar y corregir Textos (Markdown)
*   **Qué hacer**: Mejorar la redacción, corregir errores tipográficos o expandir las notas de investigación en `contenido/notas/`.
*   **Cómo**: Los archivos están en formato Markdown (`.md`). Puedes editarlos directamente desde la interfaz web de GitHub o clonar el repositorio y enviar un Pull Request.

### 2. Traducir (Cosmovisión Multilingüe)
*   **Qué hacer**: Traducir los artículos y el glosario a lenguas originarias de Abya Yala (Runa Simi/Quechua, Aymara, Guna, Guaraní, Mapudungun, Náhuatl, etc.) o a idiomas occidentales (Inglés, Portugués).
*   **Cómo**: Crea una carpeta con las siglas de la lengua en `contenido/` (por ejemplo, `contenido/qu/` para Quechua) y añade los archivos correspondientes.

### 3. Enriquecer el Glosario Andino
*   **Qué hacer**: Añadir términos ontológicos, éticos, geográficos o astronómicos al glosario.
*   **Cómo**: Añade un objeto JSON al archivo `data/glosario.json` con la siguiente estructura:
    ```json
    {
      "id": "termino-en-minuscula",
      "termino": "Término en Cursiva",
      "lengua": "Lengua de origen",
      "significado": "Definición conceptual rigurosa y no-eurocéntrica.",
      "categoria": "ontologia | logica | epistemologia | etica | territorio | tiempo"
    }
    ```

### 4. Desarrollo de Software (Código)
*   **Qué hacer**: Mejorar la interfaz web, optimizar la carga dinámica de archivos, arreglar bugs o expandir el widget de tiempo Taypiqala.
*   **Cómo**: El sitio está construido con Vanilla HTML, CSS y JS para mantenerlo liviano y libre de dependencias pesadas de compilación. Las contribuciones deben respetar esta simpleza.

---

## 🛠️ Flujo de Trabajo Técnico

1.  **Haz un Fork** del repositorio en GitHub: [NanAbyaYala/pachanan](https://github.com/NanAbyaYala/pachanan).
2.  **Clona** tu fork localmente.
3.  **Realiza tus cambios** de forma limpia y estructurada.
4.  **Prueba localmente** abriendo `index.html` en tu navegador o levantando un servidor local básico:
    ```bash
    # Con Python
    python3 -m http.server 8000
    # Con Node.js
    npx http-server
    ```
5.  **Haz commit** con mensajes claros que describan el cambio (por ejemplo, `feat: añade término minka al glosario` o `fix: corrige ortografía en nota de epistemicidio`).
6.  **Sube los cambios (push)** a tu fork y abre un **Pull Request** hacia nuestra rama `main`.

---

## 🕊️ Protocolo y Ética de Colaboración

Al contribuir, te comprometes a seguir estos principios éticos:
*   **Rigor y Evidencia**: Toda afirmación histórica o arqueológica debe estar sustentada en datos o fuentes contrastables. La especulación teórica o tradicional debe marcarse explícitamente como tal.
*   **Respeto Epistémico**: Tratamos las categorías de pensamiento andino y de otras culturas originarias con el mismo nivel de rigor y seriedad que la filosofía europea. Evitamos el romanticismo exótico (new age) y el folclorismo condescendiente.
*   **Gobernanza de Conocimientos**: Si compartes conocimientos comunitarios con restricciones tradicionales de uso, asegúrate de indicarlo de acuerdo con los protocolos locales (puedes consultar el uso de TK Labels de Local Contexts).

> *"Ñan hina, Pacha hina"* — Que nuestra red sea tan sólida como el camino, y tan integrada como el tejido.
