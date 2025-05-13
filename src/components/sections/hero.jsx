'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

export const Hero = () => {
  const [heroData, setHeroData] = useState(null)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "hero"][0]{
          title,
          description,
          backgroundImage
        }`
      )
      .then((data) => setHeroData(data))
      .catch(console.error)
  }, [])

  if (!heroData) {
    return (
      <div className="relative h-[32rem] flex items-center justify-center text-center bg-gray-400 rounded-2xl shadow-xl overflow-hidden">
        <div className="relative z-10 max-w-3xl text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">Loading...</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6">Vänligen vänta medan innehållet laddas.</p>
        </div>
      </div>
    )
  }

  const { title, description, backgroundImage } = heroData

  return (
    <header
      className="relative h-[32rem] flex items-center justify-center text-center bg-cover bg-center rounded-2xl shadow-xl overflow-hidden"
      style={{
        backgroundImage: `url(${urlFor(backgroundImage).width(1920).height(1080).url()})`,
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-0" />

      <div className="relative z-10 max-w-3xl text-white px-6">
       <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-[0_3px_6px_rgba(0,0,0,0.7)] whitespace-nowrap">
  {title}
</h1>

        <p className="text-lg md:text-xl text-slate-100 mb-6 drop-shadow-sm">{description}</p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"
          >
            Om oss
          </Link>
          <Link
            href="/events"
            className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold py-2 px-4 rounded hover:opacity-90 transition"
          >
            Se alla events
          </Link>
        </div>
      </div>
    </header>
  )
}
