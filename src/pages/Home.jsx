import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import PressBadge from '../components/PressBadge.jsx'
import Brandmark from '../components/Brandmark.jsx'
import WaveDivider from '../components/WaveDivider.jsx'
import { services } from '../data/services.js'
import { pressBadges } from '../data/mediaFeatures.js'

export default function Home() {
  return (
    <PageTransition>
      {/* Get to know me */}
      <section className="container-page mt-10 sm:mt-14">
        <SectionHeading align="left" className="mb-6">
          Get to
          <br />
          Know Me
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-cloud border border-black/5 shadow-card p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-brand overflow-hidden shrink-0 bg-gradient-to-br from-brand-light to-brand flex items-center justify-center">
            <span className="font-script text-3xl text-white/90">A</span>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl sm:text-3xl text-ink">
              Hey folks,
              <br />I am Aanchal
            </h3>
            <p className="mt-3 text-ink/70 max-w-md">
              If you are reading this, you are probably thinking about exploring therapy
              for either yourself or your loved one.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-block bg-sunshine text-ink text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:brightness-95 transition"
            >
              Know More
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro video placeholder */}
      <section className="container-page mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden bg-brand-light/40 border border-black/5 aspect-video flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center shadow-card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="mt-20 sm:mt-28">
        <WaveDivider />
        <div className="bg-brand-light/25 py-12 sm:py-16">
          <div className="container-page">
            <SectionHeading className="mb-10">Services</SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </div>
        </div>
        <WaveDivider flip />
      </section>

      {/* Media Features */}
      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Media Features</SectionHeading>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {pressBadges.map((p, i) => (
            <PressBadge key={p.name} {...p} index={i} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/media-features"
            className="inline-block text-brand-dark font-semibold text-sm hover:underline"
          >
            See all media features &rarr;
          </Link>
        </div>
      </section>

      {/* CTA brandmark spacer */}
      <div className="flex justify-end container-page mt-16">
        <Brandmark />
      </div>
    </PageTransition>
  )
}
