import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Icon from '../components/Icon.jsx'
import { faqs } from '../data/faqs.js'
import aanchal from '../assets/aanchal/AanchalNarang.jpeg'

export default function FAQs() {
  return (
    <PageTransition>
      <PageHero eyebrow="FAQs" icon="HelpCircle" title="Questions, answered"
        subtitle="The things people usually wonder about before their first session. If yours isn't here, just ask." />

      <section className="py-16">
        <div className="container-page">
          <Reveal><FAQAccordion items={faqs} /></Reveal>

          <Reveal className="mx-auto mt-12 grid max-w-3xl overflow-hidden rounded-[28px] border border-line bg-white shadow-card sm:grid-cols-[180px_1fr]">
            <img src={aanchal} alt="Aanchal at work in her practice" loading="lazy"
              className="h-48 w-full object-cover sm:h-full" />
            <div className="flex flex-col items-center justify-center p-7 text-center sm:items-start sm:p-8 sm:text-left">
              <h3 className="font-display text-[1.4rem] font-semibold">Still have a question?</h3>
              <p className="mb-5 mt-2 text-muted">I&rsquo;m happy to answer anything before you book — no question is too small.</p>
              <Link to="/contact" rel="nofollow" className="btn-brand"><Icon name="Mail" className="h-4.5 w-4.5" /> Get in touch</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
