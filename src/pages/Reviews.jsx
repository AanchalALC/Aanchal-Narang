import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import ReviewBubble from '../components/ReviewBubble.jsx'
import { reviews } from '../data/reviews.js'

export default function Reviews() {
  return (
    <PageTransition>
      <PageHero title="Reviews" />

      <section className="container-page mt-10 sm:mt-16 pb-10 max-w-3xl mx-auto">
        {reviews.map((review, i) => (
          <ReviewBubble key={review.name + i} review={review} index={i} />
        ))}
      </section>
    </PageTransition>
  )
}
