import { motion } from 'framer-motion'
import WaveDivider from './WaveDivider.jsx'
import { stats } from '../data/about.js'

export default function StatsBar() {
  return (
    <div className="relative">
      <WaveDivider />
      <div className="bg-brand py-10 sm:py-14">
        <div className="container-page grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p className="font-display text-4xl sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm sm:text-base font-medium text-white/90">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <WaveDivider flip />
    </div>
  )
}
