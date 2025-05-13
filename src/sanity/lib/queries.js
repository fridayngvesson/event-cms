import { defineQuery} from "next-sanity"

export const GET_ALL_EVENTS = defineQuery(`*[_type == 'event'] {
  _id,
  title,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
      "alt": image.alt
  },
 date,
location
}`)

export const GET_EVENT_BY_SLUG = defineQuery(`*[_type == 'event' && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  date,
  location,
  description
}`)
