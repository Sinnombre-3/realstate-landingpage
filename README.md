# Landing Page Inmobiliaria de Lujo

Landing page premium para agente inmobiliario, con CMS headless (Sanity.io) y animaciones elegantes.

## 🚀 Estado del Proyecto

**✅ Fase 1-4 Completadas**
- Diseño base implementado
- CMS Sanity.io integrado
- Componentes principales construidos
- Animaciones Framer Motion aplicadas

Ver [walkthrough.md](file:///C:/Users/Personal/.gemini/antigravity/brain/fcec408a-b039-4214-88dc-13483f3e4497/walkthrough.md) para detalles completos.

---

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build) v5.16.0
- **UI Components**: React 19 (Islands Architecture)
- **Styling**: Tailwind CSS
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Playfair Display (Serif) + Manrope (Sans-serif)

---

## 📁 Estructura del Proyecto

```
/
├── schema/                 # Sanity CMS schemas
│   ├── property.ts        # Propiedades
│   ├── agent.ts           # Datos del agente
│   ├── testimonial.ts     # Testimonios
│   └── landingPage.ts     # Contenido Hero
├── src/
│   ├── components/        # Componentes UI
│   │   ├── Navbar.jsx     # Navegación sticky
│   │   ├── Hero.astro     # Hero con video
│   │   ├── HeroContent.jsx # Hero animado
│   │   ├── FeaturedProperties.astro
│   │   ├── PropertyGrid.jsx
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro   # Layout base
│   ├── lib/
│   │   └── api.ts         # Funciones Sanity API
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   └── studio/[...index].astro # Sanity Studio
│   └── styles/
│       └── global.css
├── sanity.config.ts       # Config Sanity Studio
├── astro.config.mjs       # Config Astro
└── tailwind.config.mjs    # Design tokens
```

---

## 🧞 Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Dev server en `localhost:4321` |
| `npm run build` | Build producción en `./dist/` |
| `npm run preview` | Preview del build |

---

## 🎨 Sanity Studio

### Acceso Local
```
http://localhost:4321/studio
```

### Gestión de Contenido

1. **Crear Propiedad**:
   - Ir a "Propiedad" en el Studio
   - Rellenar: Título, Precio, Ubicación, Imágenes
   - Añadir "Etiqueta de Alma" (opcional)
   - Estado: "En Venta"
   - **Click "Publish"** (importante!)

2. **Editar Hero**:
   - Ir a "Landing Page (Hero)"
   - Subir video o añadir URL
   - Editar título y subtítulo
   - **Click "Publish"**

> **⚠️ Importante**: Los documentos en estado "Draft" NO aparecen en la web. Siempre publicar.

### CORS Setup
Si el Studio no carga:
1. Ir a [sanity.io/manage](https://www.sanity.io/manage)
2. Proyecto: `00t5c2rw`
3. API > CORS Origins
4. Añadir `http://localhost:4321` (con "Allow credentials")

---

## 🎭 Diseño y Animaciones

### Paleta de Colores
- `brand-dark`: #252526 (fondos)
- `brand-primary`: #BEAF87 (acentos oro)
- `brand-secondary`: #727273 (textos secundarios)

### Animaciones
- **Hero**: Fade-in al cargar (títulos)
- **Propiedades**: Cascada al hacer scroll (0.3s stagger)
- **Hover**: Zoom en imágenes, líneas en enlaces

---

## 📋 Próximos Pasos

Ver [task.md](file:///C:/Users/Personal/.gemini/antigravity/brain/fcec408a-b039-4214-88dc-13483f3e4497/task.md) para el roadmap completo.

**Prioridades**:
- Responsive testing (móvil/tablet)
- SEO optimization
- Formulario de contacto
- Páginas individuales de propiedades

---

## 📖 Documentación

- [Walkthrough Completo](file:///C:/Users/Personal/.gemini/antigravity/brain/fcec408a-b039-4214-88dc-13483f3e4497/walkthrough.md) - Estado actual y decisiones técnicas
- [Task List](file:///C:/Users/Personal/.gemini/antigravity/brain/fcec408a-b039-4214-88dc-13483f3e4497/task.md) - Checklist de desarrollo
- [Directrices Básicas](file:///c:/Users/Personal/Documents/PROGRAMACION/docker-uses/proyectos/jules-proyect/landing-page-realstate/directrices_basicas.md) - Guía de diseño original

---

## 🔗 Enlaces Útiles

- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Proyecto creado con ❤️ por Antigravity AI**
