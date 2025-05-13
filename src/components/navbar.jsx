import React from 'react'
import Link from 'next/link'
import { NavLink } from './nav-link'

export const Navbar = () => {
  return (
    <nav className='wrapper flex justify-between items-center py-4'>
        <Link href="/" className='text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>NextWave Live</Link>
        <ul>
            <li><NavLink href="/about">Om oss</NavLink></li>
        </ul>
    </nav>
  )
}
