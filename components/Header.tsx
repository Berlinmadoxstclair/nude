'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white border-b border-nude">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="text-ink font-bold tracking-widest text-xl">
            NUDE
          </Link>
          <nav className="flex gap-8">
            <Link
              href="/"
              className={`text-sm tracking-wide transition ${
                isActive('/') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-sm tracking-wide transition ${
                isActive('/shop') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Shop
            </Link>
            <Link
              href="/blog"
              className={`text-sm tracking-wide transition ${
                isActive('/blog') ? 'text-ink font-semibold' : 'text-stone hover:text-ink'
              }`}
            >
              Journal
            </Link>
            <a href="#" className="text-sm tracking-wide text-stone hover:text-ink transition">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
