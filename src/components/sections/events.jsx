import { getAllEvents } from '@/sanity/lib/api'
import Link from 'next/link'
import Image from 'next/image'

export const Events = async ({ title, limit = null, showLink = false }) => {
  const events = await getAllEvents()

  const limitedEvents = limit ? events.slice(0, limit) : events

  return (
    <section className="my-16">
      <h2 className="text-4xl mb-10 font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {limitedEvents.map((event) => (
          <Link
            key={event._id}
            href={`/events/${event.slug}`}
            className="border border-slate-700 rounded-xl overflow-hidden hover:border-2 hover:scale-105 transition shadow-md"
          >
            <div className="w-full aspect-video">
              <Image
                src={event.image.url}
                alt={event.image.alt}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center p-4 text-xl font-semibold text-white">
              {event.title}
            </h3>
          </Link>
        ))}
      </div>

      {showLink && (
        <div className="text-center mt-8">
          <Link href="/events" className="text-lg underline hover:text-yellow-400 transition">
            Se alla events →
          </Link>
        </div>
      )}
    </section>
  )
}
