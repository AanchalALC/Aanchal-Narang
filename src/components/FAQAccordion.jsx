import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon.jsx'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-3.5">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className={`bg-white border rounded-[18px] overflow-hidden transition-shadow ${
              isOpen ? 'border-brand/40 shadow-card' : 'border-line'
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full text-left flex items-center justify-between gap-4 px-5 py-5"
            >
              <span className="font-display font-semibold text-[1.05rem] text-ink">{item.q}</span>
              <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all ${
                isOpen ? 'bg-brand text-white rotate-45' : 'bg-brand/12 text-brand-dark'
              }`}>
                <Icon name="Plus" className="h-[18px] w-[18px]" />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                >
                  <p className="px-5 pb-5 text-muted text-[0.96rem]">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
