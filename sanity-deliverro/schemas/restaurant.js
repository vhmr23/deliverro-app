import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(400),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Restaurant',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating of Restaurant',
      type: 'number',
      validation: (Rule) => Rule.required()
        .min(1)
        .max(5)
        .error('Rating must be between 1 and 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category of Restaurant',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],

})
