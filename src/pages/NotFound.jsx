import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="py-28 text-center">
        <div className="container-page">
          <div className="rainbow-bar mx-auto mb-6 w-[88px]" />
          <h1 className="font-display text-[clamp(3rem,10vw,6rem)] font-semibold text-brand-dark">404</h1>
          <p className="mx-auto mt-2 max-w-md text-muted">
            This page seems to have wandered off. Let&rsquo;s get you back to a calmer corner.
          </p>
          <Link to="/" rel="nofollow" className="btn-brand mt-7"><Icon name="Home" className="h-4.5 w-4.5" /> Back to home</Link>
        </div>
      </section>
    </PageTransition>
  )
}
