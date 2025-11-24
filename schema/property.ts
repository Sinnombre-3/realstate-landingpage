export default {
  name: 'property',
  title: 'Propiedad',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Imágenes',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'soulLabel',
      title: 'Etiqueta de Alma',
      description: 'Ej: "El Refugio del Artista"',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Estado',
      type: 'string',
      options: {
        list: [
          { title: 'En Venta', value: 'for-sale' },
          { title: 'Vendido', value: 'sold' },
        ],
      },
      initialValue: 'for-sale',
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
    },
  ],
}
