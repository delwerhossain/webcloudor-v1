import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: Rule => Rule.required().min(1)
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'Cloud Solutions', value: 'cloud' },
          { title: 'AI Integration', value: 'ai' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Mobile App', value: 'mobile' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string'
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url'
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url'
    }),
    defineField({
      name: 'completedAt',
      title: 'Completion Date',
      type: 'date'
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'images.0'
    }
  }
})