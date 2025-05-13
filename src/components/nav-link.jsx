"use client"
import React from 'react'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export const NavLink = ({ children, className, href }) => {

    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(href + '/') 

  return (
    <Link href={href}
        className={cn('text-xl font-semibold hover:underline',
            isActive ? 'text-orange-500' : 'text-slate-200',
            className
            )}
    >{ children } </Link>
  )
}
