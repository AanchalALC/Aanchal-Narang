import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQs() {
  return (
    <PageTransition>
      <PageHero title="Frequently Asked Questions" />

      <section className="container-page mt-10 sm:mt-16 pb-10 max-w-2xl mx-auto">
        <FAQAccordion items={faqs} />
      </section>
    </PageTransition>
  )
}
