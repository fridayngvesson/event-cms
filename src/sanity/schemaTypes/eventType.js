import { defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",        
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      }
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "date",
      title: "Event Date",
      type: "datetime",
    }),
    defineField({
      name: "image",
      title: "Event Image",
      type: "image",
      options: { 
        hotspot: true 
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
  ],
});