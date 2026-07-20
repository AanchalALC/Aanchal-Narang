import { motion } from 'framer-motion'

export default function SectionHeading({ children, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignClass} ${className}`}
    >
      <h2 className="text-pop text-3xl sm:text-4xl md:text-5xl uppercase text-ink tracking-wide">
        {children}
      </h2>
    </motion.div>
  )
}
