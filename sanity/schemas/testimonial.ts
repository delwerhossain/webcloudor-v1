import { defineField, defineType } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'clientPosition',
      title: 'Client Position',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'clientCompany',
      title: 'Client Company',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: Rule => Rule.required().max(500)
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5),
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 }
        ]
      }
    }),
    defineField({
      name: 'clientImage',
      title: 'Client Photo',
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
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Development', value: 'web' },
          { title: 'Cloud Solutions', value: 'cloud' },
          { title: 'AI Integration', value: 'ai' },
          { title: 'E-commerce', value: 'ecommerce' },
          { title: 'Mobile App', value: 'mobile' },
          { title: 'Consultation', value: 'consultation' }
        ]
      }
    }),
    defineField({
      name: 'relatedProject',
      title: 'Related Project',
      type: 'reference',
      to: [{ type: 'project' }]
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
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
    }),
    defineField({
      name: 'createdAt',
      title: 'Date Received',
      type: 'datetime',
      validation: Rule => Rule.required()
    })
  ],
  orderings: [
    {
      title: 'Date Received, New',
      name: 'createdAtDesc',
      by: [{ field: 'createdAt', direction: 'desc' }]
    },
    {
      title: 'Rating, High to Low',
      name: 'ratingDesc',
      by: [{ field: 'rating', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'clientName',
      subtitle: 'clientCompany',
      media: 'clientImage'
    }
  }
})