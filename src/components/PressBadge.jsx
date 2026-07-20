import { motion } from 'framer-motion'

// Text-based stand-in for press logos (GQ India, Hindustan Times, etc).
// Swap the inner span for an <img> once you have licensed logo assets.
export default function PressBadge({ name, dark = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`h-20 sm:h-24 rounded-xl border flex items-center justify-center px-4 text-center shrink-0 w-40 sm:w-48 ${
        dark ? 'bg-ink border-ink text-white' : 'bg-white border-black/10 text-ink'
      }`}
    >
      <span className="font-display text-sm sm:text-base tracking-wide uppercase">{name}</span>
    </motion.div>
  )
}
