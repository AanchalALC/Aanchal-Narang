import { motion } from 'framer-motion'
import { Play, Star, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PressBadge from '../components/PressBadge.jsx'
import { pressBadges, featuredHighlights, pressArticles, moreFeatures } from '../data/mediaFeatures.js'

export default function MediaFeatures() {
  return (
    <PageTransition>
      <PageHero title="Media Features" />

      <section className="container-page mt-10">
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {pressBadges.map((p, i) => (
            <PressBadge key={p.name} {...p} index={i} />
          ))}
        </div>
      </section>

      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Featured Highlights</SectionHeading>
        <div className="grid sm:grid-cols-3 gap-6">
          {featuredHighlights.map((h, i) => (
            <motion.a
              href={h.href}
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-cloud border border-black/5 shadow-soft group"
            >
              <div className="aspect-video bg-gradient-to-br from-ink to-brand-dark flex items-center justify-center relative">
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wide text-white/70">
                  {h.source}
                </span>
                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Play size={18} className="text-ink ml-0.5" fill="currentColor" />
                </div>
              </div>
              <p className="p-4 text-sm font-medium text-ink leading-snug">{h.title}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="container-page mt-16 sm:mt-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressArticles.map((article, i) => (
            <motion.a
              href={article.href}
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-cloud border border-black/5 shadow-soft p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center text-brand-dark">
                  <Star size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wide text-ink/50 font-semibold">{article.eyebrow}</p>
                  <p className="text-xs font-bold text-ink">{article.outlet}</p>
                </div>
              </div>
              <h3 className="font-display text-base sm:text-lg text-ink leading-snug uppercase">{article.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed flex-1">{article.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 bg-sunshine text-ink text-xs font-bold uppercase w-fit px-4 py-2 rounded-lg">
                Read <ArrowUpRight size={14} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="container-page mt-16 sm:mt-24 pb-6">
        <SectionHeading align="left" className="mb-8">
          More Features
        </SectionHeading>
        <ul className="space-y-3">
          {moreFeatures.map((f, i) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="flex items-start gap-3 text-sm text-ink/75 italic"
            >
              <Star size={14} className="text-brand mt-1 shrink-0" fill="currentColor" />
              {f}
            </motion.li>
          ))}
        </ul>
      </section>
    </PageTransition>
  )
}
