import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/media-features', label: 'Media Features' },
  { to: '/blog', label: 'Blog' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="container-page pt-6 sm:pt-8">
      <div className="flex flex-col items-center">
        <Logo />
      </div>

      <nav className="relative mt-6 sm:mt-8">
        <div className="hidden lg:flex items-center justify-center gap-1 rounded-pill border border-black/10 bg-cloud/80 backdrop-blur px-3 py-3 shadow-soft">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 rounded-pill text-xs font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isActive ? 'bg-sunshine text-ink' : 'text-ink/80 hover:text-brand-dark hover:bg-black/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile trigger */}
        <div className="lg:hidden flex items-center justify-between rounded-pill border border-black/10 bg-cloud/80 px-5 py-3 shadow-soft">
          <span className="text-xs font-bold uppercase tracking-widest text-ink/70">Menu</span>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-full bg-brand text-white"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden mt-3 rounded-3xl border border-black/10 bg-cloud shadow-soft"
            >
              <div className="flex flex-col p-3">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-2xl text-sm font-bold uppercase tracking-wide ${
                        isActive ? 'bg-sunshine text-ink' : 'text-ink/80 hover:bg-black/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
