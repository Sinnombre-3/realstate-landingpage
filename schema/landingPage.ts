export default {
  name: 'landingPage',
  title: 'Landing Page (Hero)',
  type: 'document',
  fields: [
    {
      name: 'heroVideo',
      title: 'Video de Fondo (Archivo)',
      type: 'file',
      options: {
        accept: 'video/mp4,video/webm',
      },
    },
    {
      name: 'heroVideoUrl',
      title: 'Video de Fondo (URL Externa)',
      description: 'Usa esto si prefieres alojar el video en otro lugar (ej. Cloudinary) para optimizar carga.',
      type: 'url',
    },
    {
      name: 'heroTitle',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Viviendas con Alma',
    },
    {
      name: 'heroSubtitle',
      title: 'Subtítulo',
      type: 'text',
      rows: 3,
    },
    {
      name: 'ctaText',
      title: 'Texto Botón CTA',
      type: 'string',
      initialValue: 'Valoración Gratuita',
    },
    {
      name: 'ctaLink',
      title: 'Enlace Botón CTA',
      type: 'string',
      initialValue: '/valoracion-gratuita',
    },
  ],
}
