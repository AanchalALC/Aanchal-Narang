import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Icon from '../components/Icon.jsx'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <PageTransition>
      <PageHero title="Services" />

      <section className="container-page mt-10 sm:mt-16 space-y-20 pb-10">
        {services.map((service, i) => (
          <motion.div
            id={service.slug}
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={`scroll-mt-28 grid sm:grid-cols-2 gap-8 sm:gap-12 items-center ${
              i % 2 === 1 ? 'sm:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-brand-light/70 to-brand/40 flex items-center justify-center border border-black/5 shadow-card">
              <Icon name={service.icon} size={88} strokeWidth={1.2} className="text-brand-dark" />
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-ink">{service.title}</h2>
              <div className="mt-4 space-y-3">
                {service.body.map((p, idx) => (
                  <p key={idx} className="text-ink/70 leading-relaxed text-sm sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
              <a
                href="/contact"
                className="mt-6 inline-block bg-sunshine text-ink text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:brightness-95 transition"
              >
                Book a Session
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </PageTransition>
  )
}
