export default {
  name: 'testimonial',
  title: 'Testimonio',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Nombre del Cliente',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'quote',
      title: 'Cita',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'property',
      title: 'Propiedad Relacionada',
      type: 'reference',
      to: [{ type: 'property' }],
    },
  ],
}
