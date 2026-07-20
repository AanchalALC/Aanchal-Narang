import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // NOTE: This is a static front end — there's no backend wired up yet.
    // Swap this handler for a fetch() call to your API, or a service like
    // EmailJS / Formspree, to actually deliver messages. See the README.
    console.log('Contact form submission (not yet connected to a backend):', form)
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <PageTransition>
      <PageHero
        title="Contact"
        subtitle="I'd love to hear from you — reach out to book a session or ask a question."
      />

      <section className="container-page mt-10 sm:mt-16 pb-16">
        <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-brand text-white p-6 sm:p-8 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-display text-2xl">Looking forward to meeting you</h2>
            </div>
            <a href="tel:+918879260310" className="flex items-center gap-3 hover:text-sunshine transition-colors">
              <Phone size={20} /> +91 88792 60310
            </a>
            <a href="mailto:admin@another-light.com" className="flex items-center gap-3 hover:text-sunshine transition-colors break-all">
              <Mail size={20} /> admin@another-light.com
            </a>
            <p className="text-white/80 text-sm mt-4">
              Sessions are available online and in-person, by appointment. Call or WhatsApp
              is the fastest way to reach me.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-3xl bg-cloud border border-black/5 shadow-card p-6 sm:p-8 flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wide text-ink/60">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wide text-ink/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wide text-ink/60">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand outline-none resize-none"
                placeholder="How can I help?"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-sunshine text-ink text-xs font-bold uppercase tracking-wide px-6 py-3.5 rounded-xl hover:brightness-95 transition"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={16} /> Sent — thank you!
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            {submitted && (
              <p className="text-xs text-ink/50">
                This is a static demo form — connect it to a backend or EmailJS to actually
                deliver messages (see README).
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </PageTransition>
  )
}
