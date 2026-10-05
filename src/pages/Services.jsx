import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CurveDivider from '../components/CurveDivider.jsx'
import Icon from '../components/Icon.jsx'
import { services } from '../data/services.js'
import aanchalSpeaking from '../assets/aanchal/Aanchal_Speaker Pic.jpg'

const tints = ['sky', 'peach', 'mint']
const iconTints = {
  sky: 'bg-brand/[0.13] text-brand-dark', peach: 'bg-[#C56A45]/[0.14] text-[#B45C3B]', mint: 'bg-[#2E9E82]/[0.14] text-[#227C64]',
}
const steps = [
  { n: '01', t: 'Reach out', d: 'Send a message or call. Tell me as much or as little as you like.' },
  { n: '02', t: 'Free intro call', d: 'A short, no-pressure chat to see if we\u2019re the right fit for each other.' },
  { n: '03', t: 'First session', d: 'We start gently, at your pace, building a space you feel safe in.' },
  { n: '04', t: 'Grow together', d: 'Ongoing sessions, tailored to you, as you move toward feeling lighter.' },
]

export default function Services() {
  return (
    <PageTransition>
      <PageHero eyebrow="Services" icon="Sparkles" title="Ways we can work together"
        subtitle="Every person and every relationship is different. Choose the path that fits where you are right now — or reach out and we'll figure it out together." />

      {/* SERVICE CARDS */}
      <section className="py-16">
        <div className="container-page grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="card card-hover p-8 flex flex-col group">
              <div className={`mb-5 flex h-15 w-15 items-center justify-center rounded-2xl ${iconTints[tints[i % 3]]}`}>
                <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="text-[1.28rem] font-semibold mb-3">{s.title}</h3>
              <div className="space-y-2.5 mb-5 flex-1">
                {s.body.map((p, j) => <p key={j} className="text-muted text-[0.93rem]">{p}</p>)}
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Link to="/contact" rel="nofollow" className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand-dark">
                  Book now <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                {s.href && (
                  <a href={s.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-muted hover:text-brand-dark">
                    Learn more <Icon name="ArrowUpRight" className="h-4 w-4" />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MEET YOUR THERAPIST */}
      <section className="pb-16">
        <div className="container-page">
          <Reveal className="grid overflow-hidden rounded-[30px] border border-line bg-white shadow-card md:grid-cols-[0.9fr_1.1fr]">
            <img src={aanchalSpeaking} alt="Aanchal speaking at an event"
              className="h-72 w-full object-cover object-center md:h-full md:min-h-[360px]" loading="lazy" />
            <div className="flex flex-col items-start justify-center p-7 sm:p-10 lg:p-12">
              <span className="eyebrow mb-4"><Icon name="Heart" className="h-3.5 w-3.5" /> A little about me</span>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.4rem)] font-semibold">Support that starts with a conversation</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                I’m Aanchal. My role is to meet you with warmth, curiosity, and care — and to work together at a pace that feels right for you.
              </p>
              <Link to="/about" rel="nofollow" className="btn-ghost mt-6">
                Get to know me <Icon name="ArrowRight" className="h-4.5 w-4.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <CurveDivider />
      <section className="bg-[#EAF6FD] py-20">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading center eyebrow="Simple & unhurried" icon="Sprout" title="How it works" />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="card p-7">
                <div className="font-display text-[2rem] font-bold text-brand/40">{s.n}</div>
                <h4 className="text-[1.1rem] font-semibold mt-1.5 mb-2">{s.t}</h4>
                <p className="text-muted text-[0.9rem]">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CurveDivider flip />

      {/* CTA */}
      <section className="py-14">
        <div className="container-page">
          <Reveal className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-brand to-brand-dark px-6 py-12 sm:px-12 text-center text-white shadow-lift">
            <span className="pointer-events-none absolute -top-24 -right-12 h-64 w-64 rounded-full bg-white/10" />
            <span className="pointer-events-none absolute -bottom-20 -left-8 h-52 w-52 rounded-full bg-sunshine/15" />
            <h2 className="relative text-[clamp(1.8rem,4vw,2.5rem)] font-semibold text-white">Not sure which one fits?</h2>
            <p className="relative mx-auto mt-3 max-w-lg text-white/90">
              That&rsquo;s completely okay. Reach out and we&rsquo;ll talk it through — there&rsquo;s no wrong way to begin.
            </p>
            <Link to="/contact" rel="nofollow" className="btn-primary relative mt-6"><Icon name="Mail" className="h-4.5 w-4.5" /> Ask me anything</Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
