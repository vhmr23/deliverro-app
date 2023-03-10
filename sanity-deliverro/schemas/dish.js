import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'dish',
  type: 'document',
  fields: [
   defineField({
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
   }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    }),
    defineField({
      name: 'price',
      title: 'Price of Dish',
      type: 'number',
    }),
  ],
})
