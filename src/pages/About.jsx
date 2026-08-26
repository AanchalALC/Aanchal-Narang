import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Placeholder from '../components/Placeholder.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatsBar from '../components/StatsBar.jsx'
import Icon from '../components/Icon.jsx'
import { stats, introParagraphs, education, cpd } from '../data/about.js'
import { specializations } from '../data/specializations.js'

const paraTints = ['sky', 'peach', 'mint', 'lav']

export default function About() {
  return (
    <PageTransition>
      <PageHero eyebrow="Get to know me" icon="Heart" title="Hey folks, I am Aanchal"
        subtitle="A therapist who believes healing happens in warmth, not judgement — and that everyone deserves a space to simply be themselves." />

      {/* PORTRAIT + APPROACH */}
      <section className="py-16">
        <div className="container-page grid items-start gap-11 lg:grid-cols-2">
          <Reveal>
            <Placeholder variant="peach" icon="UserRound" label="Portrait of Aanchal"
              note="Replace with your photo" className="min-h-[440px] rounded-[34px]" rounded="rounded-[34px]" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading eyebrow="My approach" icon="Sprout" title="Care that meets you where you are" />
            <div className="mt-4 space-y-4">
              {introParagraphs.map((p, i) => (
                <div key={p.heading} className="card p-6 flex gap-4">
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl
                                   ${['bg-brand/12 text-brand-dark','bg-[#C56A45]/12 text-[#B45C3B]','bg-[#2E9E82]/12 text-[#227C64]','bg-[#6B5FC0]/12 text-[#5A4EB0]'][i % 4]}`}>
                    <Icon name={p.icon} className="h-5 w-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <b className="font-display text-[1.02rem] block mb-1">{p.heading}</b>
                    <p className="text-muted text-[0.92rem]">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION + CPD */}
      <section className="pb-16">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal className="card p-8">
            <span className="eyebrow mb-4"><Icon name="GraduationCap" className="h-3.5 w-3.5" /> Education</span>
            <h3 className="font-display text-[1.3rem] font-semibold">{education.degree}</h3>
            <p className="text-muted mt-1.5">{education.institute}</p>
          </Reveal>
          <Reveal delay={0.1} className="card p-8">
            <span className="eyebrow mb-4"><Icon name="BadgeCheck" className="h-3.5 w-3.5" /> Training &amp; certification</span>
            <div className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {cpd.map((c) => (
                <div key={c} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2E9E82]/15 text-[#227C64]">
                    <Icon name="Check" className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[0.9rem] text-muted">{c}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECIALIZATIONS */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="mb-9">
            <SectionHeading center eyebrow="Areas I specialise in" icon="Sparkles" title="What we can work on together"
              subtitle="A trauma-informed, queer-affirmative and intersectional practice — spanning a wide range of concerns." />
          </Reveal>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((s, i) => (
              <Reveal key={s.title} delay={(i % 6) * 0.04}>
                <div className="card card-hover flex items-center gap-3.5 p-4">
                  <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl
                    ${['bg-brand/12 text-brand-dark','bg-[#C56A45]/12 text-[#B45C3B]','bg-[#2E9E82]/12 text-[#227C64]','bg-[#6B5FC0]/12 text-[#5A4EB0]','bg-[#A98A0E]/14 text-[#96790A]','bg-brand-dark/12 text-brand-dark'][i % 6]}`}>
                    <Icon name={s.icon} className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[0.92rem] font-medium">{s.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS + CTA */}
      <section className="pb-16">
        <div className="container-page space-y-8">
          <Reveal><StatsBar items={stats} /></Reveal>
          <Reveal className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-brand to-brand-dark px-6 py-12 sm:px-12 text-center text-white shadow-lift">
            <span className="pointer-events-none absolute -top-24 -right-12 h-64 w-64 rounded-full bg-white/10" />
            <h2 className="relative text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-white">Ready when you are</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-white/90">
              If any of this resonates, let&rsquo;s talk. The first conversation is always the hardest — and always the most worth it.
            </p>
            <Link to="/contact" rel="nofollow" className="btn-primary relative mt-6"><Icon name="Calendar" className="h-4.5 w-4.5" /> Book a session</Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
