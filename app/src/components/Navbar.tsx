import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Menu, X, Anchor } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Hem' },
    { path: '/#fastigheter', label: 'Fastigheter' },
    { path: '/#lediga', label: 'Ledigt' },
    { path: '/kontakt', label: 'Kontakt & Felanmälan' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-lysekil-deepblue/95 backdrop-blur-md shadow-coastal py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Anchor
            className={`w-7 h-7 transition-colors duration-300 ${
              isScrolled ? 'text-lysekil-sand' : 'text-white'
            }`}
          />
          <span
            className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-lysekil-sand' : 'text-white'
            }`}
          >
            Fjällbacka Fastigheter
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-sm tracking-wide transition-all duration-300 hover:opacity-70 ${
                isScrolled ? 'text-lysekil-sand/90' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? 'text-lysekil-sand' : 'text-white'
          }`}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-lysekil-deepblue/98 backdrop-blur-md border-t border-white/10 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className="font-sans text-sm text-lysekil-sand/90 py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
