import React from 'react'
import { getEventBySlug } from '@/sanity/lib/api'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

async function EventDetailsPage({ params }) {
  const { slug } = params
  const event = await getEventBySlug(slug)

  if (!event) {
    return notFound()
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      {/* Headerbild */}
      <div className="w-full aspect-video mb-10 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={event.image.url}
          alt={event.image.alt || event.title}
          width={1200}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Titel + info */}
      <div className="mb-8 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">{event.title}</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-300 text-lg">
          <span>📍 <strong>Plats:</strong> {event.location}</span>
          <span>📅 <strong>Datum:</strong> {new Date(event.date).toLocaleDateString('sv-SE', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</span>
        </div>
      </div>

      {/* Beskrivning */}
      <div className="prose prose-invert max-w-none text-gray-200">
        <PortableText value={event.description} />
      </div>

      {/* CTA */}
      <div className="mt-12">
        <a
          href="#"
          className="inline-block px-6 py-3 text-lg font-medium bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full shadow hover:scale-105 transition-transform"
        >
          Boka Biljetter
        </a>
      </div>
    </div>
  )
}

export default EventDetailsPage
