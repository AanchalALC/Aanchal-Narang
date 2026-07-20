import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { galleryItems } from '../data/gallery.js'

const tints = [
  'from-brand-light/70 to-brand/40',
  'from-sunshine/50 to-sunshine/15',
  'from-bubble/70 to-bubble/30',
  'from-ink/10 to-ink/5',
]

export default function Gallery() {
  return (
    <PageTransition>
      <PageHero title="Gallery" />

      <section className="container-page mt-10 sm:mt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
          {galleryItems.map((item, i) => (
            <motion.figure
              key={item.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`aspect-square rounded-2xl border border-black/5 bg-gradient-to-br ${tints[i % tints.length]} flex flex-col items-center justify-center text-center p-4 relative overflow-hidden`}
            >
              <Icon name={item.icon} size={36} strokeWidth={1.4} className="text-ink/60 mb-3" />
              <figcaption className="text-xs sm:text-sm font-semibold text-ink/75 leading-snug">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
