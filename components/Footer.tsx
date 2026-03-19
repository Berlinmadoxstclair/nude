'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-warm-white border-t border-nude py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-ink mb-4 tracking-wide">NUDE</h3>
            <p className="text-sm text-stone leading-relaxed">
              Ultra-minimalist fashion for the intentional dresser.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="/shop" className="text-sm text-stone hover:text-ink transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone hover:text-ink transition">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone hover:text-ink transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-4 tracking-wide">Content</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-sm text-stone hover:text-ink transition">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone hover:text-ink transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone hover:text-ink transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink mb-4 tracking-wide">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm px-3 py-2 border border-nude bg-warm-white text-ink placeholder-stone focus:outline-none focus:border-blush"
              />
              <button
                type="submit"
                className="text-sm font-semibold text-warm-white bg-ink px-3 py-2 hover:bg-stone transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-nude pt-8 text-xs text-stone">
          <div className="flex justify-between items-center">
            <p>&copy; {new Date().getFullYear()} NUDE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink transition">
              Instagram
            </a>
            <a href="#" className="hover:text-ink transition">
              Twitter
            </a>
            <a href="#" className="hover:text-ink transition">
              Pinterest
            </a>
          </div>
          </div>
          <p className="text-center text-[0.65rem] text-stone/50 mt-4 tracking-widest uppercase">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  )
}
