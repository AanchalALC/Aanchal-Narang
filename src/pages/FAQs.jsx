import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Icon from '../components/Icon.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQs() {
  return (
    <PageTransition>
      <PageHero eyebrow="FAQs" icon="HelpCircle" title="Questions, answered"
        subtitle="The things people usually wonder about before their first session. If yours isn't here, just ask." />

      <section className="py-16">
        <div className="container-page">
          <Reveal><FAQAccordion items={faqs} /></Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl card p-8 sm:p-10 text-center">
            <h3 className="font-display text-[1.4rem] font-semibold">Still have a question?</h3>
            <p className="text-muted mt-2 mb-5">I&rsquo;m happy to answer anything before you book — no question is too small.</p>
            <Link to="/contact" rel="nofollow" className="btn-brand"><Icon name="Mail" className="h-4.5 w-4.5" /> Get in touch</Link>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
