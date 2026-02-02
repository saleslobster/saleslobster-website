import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path) => router.pathname === path

  const links = router.pathname === '/'
    ? [
        { href: '#roi', label: 'ROI', badge: '📊' },
        { href: '#chat', label: 'Order Chat', badge: '💬' },
        { href: '#contact', label: 'Contact' },
      ]
    : [
        { href: '/', label: 'Home' },
        { href: '/calculator', label: 'ROI Calculator', badge: '📊' },
        { href: '/order-chat', label: 'Order Chat Demo', badge: '💬' },
      ]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-700 bg-gradient-to-b from-slate-900/95 to-slate-900/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:text-lobster transition">
          <span>🦞</span>
          <span>SalesLobster</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            router.pathname === '/' ? (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link flex items-center gap-2`}
              >
                {link.badge && <span>{link.badge}</span>}
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link flex items-center gap-2 ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.badge && <span>{link.badge}</span>}
                {link.label}
              </Link>
            )
          ))}
          {router.pathname === '/' ? (
            <a className="cta-button" href="#roi">Calculate Savings →</a>
          ) : (
            <Link className="cta-button" href="/calculator">Calculate Savings →</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-700 bg-gray-800/50 backdrop-blur">
          <div className="px-4 py-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block nav-link flex items-center gap-2 ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.badge && <span>{link.badge}</span>}
                {link.label}
              </Link>
            ))}
            {router.pathname === '/' ? (
              <a className="cta-button w-full" href="#roi" onClick={() => setIsOpen(false)}>
                Calculate Savings →
              </a>
            ) : (
              <Link className="cta-button w-full" href="/calculator" onClick={() => setIsOpen(false)}>
                Calculate Savings →
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
