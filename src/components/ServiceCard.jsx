import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="rounded-3xl bg-cloud border border-black/5 shadow-card overflow-hidden flex flex-col"
    >
      <div className="h-40 sm:h-48 bg-gradient-to-br from-brand-light/70 to-brand/40 flex items-center justify-center">
        <Icon name={service.icon} size={56} strokeWidth={1.5} className="text-brand-dark" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl sm:text-2xl text-ink">{service.title}</h3>
        <p className="mt-2 text-sm text-ink/70 leading-relaxed flex-1">{service.summary}</p>
        <Link
          to={`/services#${service.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 bg-sunshine text-ink text-xs font-bold uppercase tracking-wide px-5 py-2.5 rounded-lg hover:brightness-95 transition"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  )
}
