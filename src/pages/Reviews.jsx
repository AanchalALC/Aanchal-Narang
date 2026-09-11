import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ReviewBubble from '../components/ReviewBubble.jsx'
import Icon from '../components/Icon.jsx'
import { reviews } from '../data/reviews.js'

export default function Reviews() {
  return (
    <PageTransition>
      <PageHero eyebrow="Reviews" icon="Quote" title="Kind words from clients"
        subtitle="Real reflections from people I've had the privilege of walking alongside. Shared with permission, names kept private." />

      <section className="py-16">
        <div className="container-page">
          <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
            {reviews.map((r, i) => (
              <div key={i} className="mb-6 break-inside-avoid">
                <Reveal delay={(i % 3) * 0.07}>
                  <ReviewBubble name={r.name} text={r.text} index={i} />
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal className="mx-auto mt-12 max-w-xl card p-9 text-center">
            <div className="flex justify-center gap-1 mb-3 text-sunshine">
              {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" className="h-5 w-5 fill-sunshine" strokeWidth={0} />)}
            </div>
            <p className="font-display text-[1.5rem] text-brand-dark font-semibold">4.9 / 5 average rating</p>
            <p className="text-muted">Across sessions with individuals, couples and families</p>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
