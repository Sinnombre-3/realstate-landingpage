# Directrices de Diseño y Desarrollo - Landing Page Inmobiliaria de Lujo

## 1. Diseño de Interfaz (UI) - Componente [NAVBAR]

**Rol:** Diseñador UI experto en marcas de lujo.
**Estilo Visual:** Minimalismo sofisticado. Efecto "Glassmorphism" (fondo semitransparente) sobre video de fondo. Debe transmitir aire y exclusividad.

### Elementos y Estructura (De Izquierda a Derecha)

#### [CONTAINER - NAVBAR]
*   **Disposición:** Ancho completo (Full-width), fijo en la parte superior (Sticky position).
*   **Fondo:** Transparente con ligero desenfoque (blur) para legibilidad.
*   **Padding:** Generoso espacio vertical.

#### [ZONA IZQUIERDA: IDENTIDAD]
*   **[LOGO PERSONAL]:** Texto grande en tipografía Serif (ej. "NOMBRE APELLIDO"). Punto focal visual.
*   **[SUBTEXTO]:** "Agente Asociado a [REMAX/Century21]" debajo, muy pequeño y discreto. Cumplimiento legal sin ensuciar la marca.

#### [ZONA CENTRAL: ENLACES DE NAVEGACIÓN]
*   **Alineación:** Centro o Centro-Derecha.
*   **Estilo:** Tipografía Sans-Serif, limpia, mayúsculas pequeñas (tracking extendido).
*   **Items:**
    *   [Propiedades]
    *   [Vender]
    *   [Mi Enfoque]
    *   [Blog]
    *   [Contacto]
*   **Interacción:** Hover revela una línea fina debajo.

#### [ZONA DERECHA: ACCIÓN]
*   **[CTA BUTTON]:** Botón sólido rectangular, esquinas suaves. Texto: "Valoración Gratuita". Color oscuro/fuerte para alto contraste.
*   **[ICONO MENU]:** (Opcional) Icono "Hamburguesa" minimalista para tablet/móvil si es necesario.

### Instrucciones Visuales para IA
*   **Container:** Caja rectangular larga y delgada.
*   **Fondo:** Video representado como patrón de líneas diagonales o gris tenue.
*   **Jerarquía:** Logo personal visualmente más pesado que los enlaces. CTA Button debe destacar como el elemento principal de acción.
*   **Anotaciones:** Flechas estilo "hand-drawn" indicando "Sticky on scroll" y "Glass effect background".

---

## 2. Arquitectura del Stack (Desglose Técnico)

### Core Framework: Astro
*   **Por qué:** Renderizado estático (SSG) superior. Carga instantánea de cabecera con video.
*   **Ventaja:** HTML/CSS puro para estructura, React solo en "Islas" interactivas.

### UI Components: React (Integrado en Astro)
*   **Uso exclusivo para:**
    *   Carrusel de Propiedades.
    *   Buscador/Filtros dinámicos.
    *   Formulario de contacto con validación.
    *   Mapas interactivos.

### Estilizado: Tailwind CSS + CSS Modules
*   **Tailwind:** Estructura rápida (layout, spacing, responsive).
*   **CSS Custom:** Variables de tipografía, degradados sutiles, efectos glassmorphism. No depender solo de defaults.

### Animaciones: Framer Motion (o GSAP)
*   **Objetivo:** Efecto "Spectacular".
*   **Uso:** Transiciones suaves, textos apareciendo sobre video, entrada elegante de tarjetas al hacer scroll.

### Gestión de Contenido (CMS): Sanity.io o Contentful
*   **Necesidad:** Panel para que el agente suba contenido sin tocar código.
*   **Preferencia:** Sanity para diseños custom y modelado de datos específico (ej. etiqueta "Vendido").

---

## 3. Plan de Implementación por Fases

### Fase 1: El ADN Visual (Design Tokens & Setup)
*   **Configuración:** Inicializar Astro + React + Tailwind.
*   **Tipografía:** Importar fuentes (Serif para títulos, Sans geométrica para textos). Ajustar line-heights y tracking.
*   **Colores:** Definir variables CSS para paleta "Tierra/Lujo" y acentos.
*   **Layout:** Definir contenedores, márgenes y grid responsivo.

### Fase 2: El Motor de Contenidos (Headless CMS)
*   **Modelado de Datos:**
    *   *Esquema Propiedad:* Precio, fotos, "etiqueta de alma", estado.
    *   *Esquema Agente:* Bio, foto lifestyle, RRSS.
    *   *Esquema Testimonio:* Foto cliente, cita, casa comprada.
*   **Conexión:** Integrar CMS con Astro.

### Fase 3: Ensamblaje de Componentes (La Estructura)
*   **Grupo A (Estáticos/Texto):** Propuesta de Valor, Marca Personal/Bio, Footer.
*   **Grupo B (Colecciones Dinámicas):** Carrusel Propiedades, Galería Vendidos, Noticias/Blog, Testimonios.
*   **Grupo C (Críticos/Complejos):** Navegación Sticky (Glassmorphism), Hero (Video + Buscador), Lead Magnet/Formularios.

### Fase 4: La Capa "Wow" (Motion & Interacción)
*   **Animaciones:** Textos sobre video (Framer Motion).
*   **Micro-interacciones:** Hover en tarjetas.
*   **Transiciones:** Navegación suave.
*   **Optimización:** Carga instantánea de video en Hero.

### Fase 5: Pulido y Confianza (QA & Legal)
*   **Responsive:** Verificar video y tablas en móvil.
*   **Compliance:** Descargos legales (REMAX/C21).
*   **SEO Técnico:** Metaetiquetas locales, Schema markup.