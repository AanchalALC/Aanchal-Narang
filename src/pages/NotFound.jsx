import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Brandmark from '../components/Brandmark.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="container-page py-24 sm:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Brandmark className="w-28 h-24" />
        </motion.div>
        <h1 className="text-pop text-5xl sm:text-7xl uppercase text-ink mt-6">404</h1>
        <p className="mt-4 text-ink/70 max-w-md">
          This page wandered off. Let&apos;s get you back to a place that feels safe and familiar.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-sunshine text-ink text-xs font-bold uppercase tracking-wide px-6 py-3 rounded-lg hover:brightness-95 transition"
        >
          Back to Home
        </Link>
      </section>
    </PageTransition>
  )
}
