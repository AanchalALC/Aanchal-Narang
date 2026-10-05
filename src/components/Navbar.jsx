import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon.jsx'

const links = [
  { to: '/', label: 'Home', icon: 'Home' },
  { to: '/about', label: 'About', icon: 'Heart' },
  { to: '/services', label: 'Services', icon: 'Sparkles' },
  { to: '/media-features', label: 'Media', icon: 'Newspaper' },
  { to: '/gallery', label: 'Gallery', icon: 'Image' },
  { to: '/reviews', label: 'Reviews', icon: 'Quote' },
  { to: '/faqs', label: 'FAQs', icon: 'HelpCircle' },
  { to: '/contact', label: 'Contact', icon: 'Mail' },
]

function Brand() {
  return (
    <Link to="/" className="flex flex-col leading-none gap-1.5">
      {/* Capital "A", now in black (text-ink). Swap to text-black for pure #000. */}
      <span className="font-script font-bold text-2xl text-ink">Aanchal</span>
      <span className="rainbow-bar w-16 !h-[5px]" />
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3.5'}`}>
      <div className="container-page">
        <nav className={`flex items-center justify-between gap-4 rounded-pill border border-line
                        bg-white/80 backdrop-blur-md px-3 py-2.5 pl-5 transition-shadow
                        ${scrolled ? 'shadow-lift' : 'shadow-card'}`}>
          <Brand />

          {/* desktop links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1.5 px-3.5 py-2 rounded-pill text-[0.9rem] font-medium transition-colors ${
                    isActive
                      ? 'text-brand-dark bg-brand/15 font-semibold'
                      : 'text-muted hover:text-ink hover:bg-brand/[0.08]'
                  }`
                }
              >
                <Icon name={l.icon} className="h-4 w-4" strokeWidth={1.9} />
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <Link to="/contact" className="btn-primary hidden xl:inline-flex !px-5 !py-2.5">
              <Icon name="Calendar" className="h-[18px] w-[18px]" strokeWidth={2} /> Book a session
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white"
            >
              <Icon name="Menu" className="h-[22px] w-[22px]" />
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/50 xl:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 z-[70] h-full w-[min(340px,86vw)] bg-white p-6 overflow-y-auto xl:hidden"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-script font-bold text-2xl text-ink">Aanchal</span>
                <button
                  onClick={() => setOpen(false)} aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-paper"
                >
                  <Icon name="X" className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {links.map((l) => (
                  <NavLink
                    key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-colors ${
                        isActive ? 'bg-brand/12 text-brand-dark' : 'text-ink hover:bg-brand/[0.08]'
                      }`
                    }
                  >
                    <Icon name={l.icon} className="h-[19px] w-[19px] text-brand" strokeWidth={1.9} />
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  <Icon name="Calendar" className="h-[18px] w-[18px]" /> Book a session
                </Link>
                <a href="https://api.whatsapp.com/send/?phone=%2B918879260310" className="btn-brand w-full">
                  <Icon name="MessageCircle" className="h-[18px] w-[18px]" /> WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}