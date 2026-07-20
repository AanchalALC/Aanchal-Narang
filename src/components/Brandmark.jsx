import { motion } from 'framer-motion'

// The two-circle + "plus" mark used as a recurring decorative flourish
// in the corners of the original site.
export default function Brandmark({ className = '' }) {
  return (
    <motion.svg
      viewBox="0 0 120 100"
      className={`w-20 h-16 sm:w-24 sm:h-20 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      aria-hidden="true"
    >
      <circle cx="78" cy="28" r="22" fill="none" stroke="#141414" strokeWidth="6" />
      <circle cx="40" cy="62" r="30" fill="#25AEE8" />
      <path d="M96 66 v20 M86 76 h20" stroke="#141414" strokeWidth="6" strokeLinecap="round" />
    </motion.svg>
  )
}
