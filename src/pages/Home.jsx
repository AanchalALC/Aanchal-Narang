import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Reveal from '../components/Reveal.jsx'
import Placeholder from '../components/Placeholder.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatsBar from '../components/StatsBar.jsx'
import CurveDivider from '../components/CurveDivider.jsx'
import PressBadge from '../components/PressBadge.jsx'
import Icon from '../components/Icon.jsx'
import { services } from '../data/services.js'
import { stats } from '../data/about.js'
import { pressBadges } from '../data/mediaFeatures.js'

const tints = ['sky', 'peach', 'mint']

export default function Home() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="pt-10 pb-8">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <span className="eyebrow mb-4"><Icon name="Sprout" className="h-3.5 w-3.5" /> Another Light Counselling</span>
              <h1 className="text-[clamp(2.3rem,5.4vw,3.7rem)] font-semibold">
                A softer place to<br />begin your healing
              </h1>
              <p className="mt-4 max-w-[56ch] text-[clamp(1rem,1.6vw,1.18rem)] text-muted">
                Hey, I&rsquo;m Aanchal. If you&rsquo;re here, you&rsquo;re probably thinking about therapy —
                for yourself or someone you love. That first step takes courage, and you don&rsquo;t have to take it alone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3.5">
                <Link to="/about" rel="nofollow" className="btn-brand">Get to know me <Icon name="ArrowRight" className="h-4.5 w-4.5" /></Link>
                <Link to="/contact" rel="nofollow" className="btn-ghost"><Icon name="Calendar" className="h-4.5 w-4.5" /> Book a free intro call</Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-7">
                {[['3,000+', 'Clients supported'], ['20,000+', 'Hours of therapy'], ['100%', 'Judgement-free']].map(([n, t]) => (
                  <div key={t}>
                    <div className="font-display text-[1.7rem] text-brand-dark">{n}</div>
                    <div className="text-[0.82rem] text-muted">{t}</div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <Placeholder variant="sky" icon="UserRound" label="Aanchal Narang"
                note="Replace with your portrait photo" className="min-h-[440px] rounded-[34px]" rounded="rounded-[34px]" />
              <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-[18px] border border-line bg-white px-4 py-3.5 shadow-card">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/[0.14] text-brand-dark">
                  <Icon name="ShieldCheck" className="h-5 w-5" />
                </div>
                <div>
                  <b className="font-display text-[1.05rem] block leading-tight">Safe &amp; confidential</b>
                  <span className="text-[0.78rem] text-muted">Every conversation stays private</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="py-14">
        <div className="container-page grid items-center gap-11 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="A quick hello" icon="Play" title="Meet me before we meet"
              subtitle="Therapy works best when you feel comfortable — and comfort starts with a friendly face. A short introduction so the first session feels a little more familiar." />
            <Link to="/about" rel="nofollow" className="btn-ghost mt-6">Read my story <Icon name="ArrowRight" className="h-4.5 w-4.5" /></Link>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <Placeholder variant="lav" icon="Play" note="Replace with your intro video"
              className="min-h-[360px] rounded-[34px]" rounded="rounded-[34px]" />
            <span className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lift">
              <Icon name="Play" className="h-8 w-8 text-brand-dark ml-1" />
            </span>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <CurveDivider />
      <section className="bg-[#EAF6FD] py-20">
        <div className="container-page">
          <Reveal className="mb-11">
            <SectionHeading center eyebrow="How I can help" icon="Sparkles" title="Therapy shaped around you"
              subtitle="Whatever you're carrying, there's a way through it together. Here's where we can start." />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <ServiceCard icon={s.icon} tint={tints[i % tints.length]} title={s.title} summary={s.summary} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CurveDivider flip />

      {/* STATS */}
      <section className="py-14">
        <div className="container-page">
          <Reveal><StatsBar items={[...stats, { value: '9+', label: 'Press features' }]} /></Reveal>
        </div>
      </section>

      {/* PRESS */}
      <section className="pb-14 text-center">
        <div className="container-page">
          <Reveal>
            <span className="eyebrow mb-5"><Icon name="Newspaper" className="h-3.5 w-3.5" /> As featured in</span>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pressBadges.map((p) => <PressBadge key={p.name} name={p.name} />)}
            </div>
            <Link to="/media-features" rel="nofollow" className="btn-ghost mt-7">See all features <Icon name="ArrowRight" className="h-4.5 w-4.5" /></Link>
          </Reveal>
        </div>
      </section>

      {/* REVIEW HIGHLIGHT */}
      <section className="pb-14">
        <div className="container-page">
          <Reveal className="mx-auto max-w-2xl card p-10 text-center">
            <div className="flex justify-center gap-1 mb-3.5 text-sunshine">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" className="h-5 w-5 fill-sunshine" strokeWidth={0} />)}
            </div>
            <p className="font-display text-[1.2rem] text-ink mb-2">
              &ldquo;A profoundly safe and intuitive space. Sessions leave me feeling grounded and genuinely heard.&rdquo;
            </p>
            <p className="text-muted font-semibold">— A client, Individual Therapy</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-brand to-brand-dark px-6 py-14 sm:px-12 text-center text-white shadow-lift">
            <span className="pointer-events-none absolute -top-28 -right-14 h-72 w-72 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-sunshine/15" />
            <h2 className="relative text-[clamp(1.9rem,4vw,2.7rem)] font-semibold text-white">Looking forward to meeting you</h2>
            <p className="relative mx-auto mt-3.5 max-w-xl text-white/90">
              Whenever you&rsquo;re ready, I&rsquo;m here. Reach out and we&rsquo;ll find a time that works for you — no pressure, no obligation.
            </p>
            <div className="relative mt-6 flex flex-wrap justify-center gap-3.5">
              <a href="tel:+918879260310" target="_blank" rel="noopener noreferrer nofollow" className="btn-primary"><Icon name="Phone" className="h-4.5 w-4.5" /> +91 8879260310</a>
              <Link to="/contact" rel="nofollow" className="btn-light"><Icon name="Mail" className="h-4.5 w-4.5" /> Send a message</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
