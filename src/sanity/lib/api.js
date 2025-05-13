import { GET_EVENT_BY_SLUG } from './queries'
import { GET_ALL_EVENTS } from './queries'
import { client } from './client'

export const getAllEvents = async () => {
    return client.fetch(GET_ALL_EVENTS)
}

export const getEventBySlug = async (slug) => {
    return client.fetch(GET_EVENT_BY_SLUG, { slug }) 
}