import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import PressBadge from '../components/PressBadge.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Icon from '../components/Icon.jsx'
import { pressBadges, featuredHighlights, pressArticles, moreFeatures } from '../data/mediaFeatures.js'

const artTints = ['sky', 'peach', 'mint', 'lav', 'sun']

export default function MediaFeatures() {
  return (
    <PageTransition>
      <PageHero eyebrow="Media Features" icon="Newspaper" title="In the press"
        subtitle="Grateful to have shared my perspective on mental health, relationships and healing across some of India's leading publications." />

      {/* PRESS BADGES */}
      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pressBadges.map((p) => (
            <Reveal key={p.name}><PressBadge name={p.name} /></Reveal>
          ))}
        </div>
      </section>

      {/* TALKS / VIDEOS */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="mb-9">
            <SectionHeading center eyebrow="Talks & appearances" icon="Play" title="Watch & listen" />
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredHighlights.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08} className="card overflow-hidden flex flex-col">
                <a href={f.href} target="_blank" rel="noopener noreferrer nofollow" className="relative block min-h-[180px] overflow-hidden bg-ink/5">
                  {f.videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${f.videoId}/hqdefault.jpg`}
                      alt={f.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <Placeholder variant={artTints[i % artTints.length]} icon="Play" note="Video" rounded="rounded-none" className="min-h-[180px]" />
                  )}
                  <span className="pointer-events-none absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lift">
                    <Icon name="Play" className="h-6 w-6 text-brand-dark ml-0.5" />
                  </span>
                </a>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <span className="self-start rounded-full bg-brand/[0.11] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-dark">{f.source}</span>
                  <h3 className="text-[1.05rem] font-semibold leading-snug">{f.title}</h3>
                  <a href={f.href} target="_blank" rel="noopener noreferrer nofollow" className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[0.88rem] font-semibold text-brand-dark">
                    Watch <Icon name="ArrowUpRight" className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="mb-9">
            <SectionHeading center eyebrow="Featured articles" icon="BookOpen" title="Reads & interviews" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pressArticles.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.08} className="card card-hover overflow-hidden flex flex-col">
                <Placeholder variant={artTints[i % artTints.length]} icon="Newspaper" note="Article image" rounded="rounded-none" className="min-h-[170px]" />
                <div className="p-6 flex flex-col gap-2.5 flex-1">
                  <span className="self-start rounded-full bg-brand/[0.11] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-dark">{a.outlet}</span>
                  <h3 className="text-[1.12rem] font-semibold leading-snug">{a.title}</h3>
                  <p className="text-muted text-[0.9rem] flex-1">{a.excerpt}</p>
                  <a href={a.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 pt-1 text-[0.88rem] font-semibold text-brand-dark">
                    Read <Icon name="ArrowUpRight" className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MORE MENTIONS */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="card p-8 sm:p-10">
            <SectionHeading eyebrow="More mentions" icon="Sparkles" title="Elsewhere in the media" />
            <ul className="mt-6 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {moreFeatures.map((m) => (
                <li key={m.href} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <a href={m.href} target="_blank" rel="noopener noreferrer nofollow" className="text-[0.92rem] text-muted hover:text-brand-dark">
                    <span className="font-semibold text-ink">{m.outlet}</span> — {m.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
