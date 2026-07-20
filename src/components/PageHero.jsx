import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle }) {
  return (
    <div className="container-page pt-14 sm:pt-20 pb-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-pop text-4xl sm:text-5xl md:text-6xl uppercase text-ink"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-xl mx-auto text-ink/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
