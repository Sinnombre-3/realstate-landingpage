export default {
  name: 'agent',
  title: 'Agente',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'text',
    },
    {
      name: 'photo',
      title: 'Foto Lifestyle',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'socialMedia',
      title: 'Redes Sociales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Plataforma', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
}
