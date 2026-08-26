import { useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Icon from '../components/Icon.jsx'

const channels = [
  { icon: 'Phone', tint: 'bg-brand/12 text-brand-dark', label: 'Call', value: '+91 8879260310', href: 'tel:+918879260310' },
  { icon: 'MessageCircle', tint: 'bg-[#2E9E82]/14 text-[#227C64]', label: 'WhatsApp', value: '+91 8879260310', href: 'https://api.whatsapp.com/send/?phone=%2B918879260310' },
  { icon: 'Mail', tint: 'bg-[#C56A45]/14 text-[#B45C3B]', label: 'Email', value: 'admin@another-light.com', href: 'mailto:admin@another-light.com' },
  { icon: 'Instagram', tint: 'bg-[#6B5FC0]/14 text-[#5A4EB0]', label: 'Instagram', value: '@another_light_counselling', href: 'https://www.instagram.com/another_light_counselling/' },
]

const empty = { name: '', phone: '', email: '', service: 'Individual Therapy', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire to EmailJS / Formspree / your Express+Mongo backend.
    // Example: fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })
    console.log('Contact form submitted:', form)
    setSent(true)
    setForm(empty)
  }

  return (
    <PageTransition>
      <PageHero eyebrow="Contact" icon="Mail" title="Let's talk"
        subtitle="Taking the first step is the hardest part — and you've almost done it. Reach out however feels easiest, and I'll get back to you soon." />

      <section className="py-16">
        <div className="container-page grid items-start gap-9 lg:grid-cols-[1fr_1.1fr]">
          {/* CHANNELS */}
          <Reveal className="flex flex-col gap-4">
            {channels.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer nofollow"
                 className="card card-hover flex items-start gap-4 p-6">
                <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[15px] ${c.tint}`}>
                  <Icon name={c.icon} className="h-6 w-6" strokeWidth={1.9} />
                </span>
                <span>
                  <b className="text-[1.02rem] block">{c.label}</b>
                  <span className="text-muted text-[0.92rem]">{c.value}</span>
                </span>
              </a>
            ))}
            <Placeholder variant="sky" icon="MapPin" note="Map / location embed goes here" className="min-h-[180px] mt-1" rounded="rounded-[26px]" />
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1} className="card p-7 sm:p-8">
            <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.8rem)] font-semibold mb-1.5">Send a message</h2>
            <p className="text-muted text-[0.9rem] mb-6">Tell me a little about what&rsquo;s bringing you here. There are no wrong words.</p>

            {sent && (
              <div className="mb-5 flex items-center gap-2.5 rounded-2xl bg-[#2E9E82]/12 px-4 py-3 text-[#227C64]">
                <Icon name="CheckCircle2" className="h-5 w-5" /> Thank you — your message is ready to send. Connect a backend or EmailJS to deliver it.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Your name"><input required value={form.name} onChange={update('name')} placeholder="Jane Doe" className={inputCls} /></Field>
                <Field label="Phone"><input value={form.phone} onChange={update('phone')} placeholder="+91" className={inputCls} /></Field>
              </div>
              <Field label="Email"><input type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" className={inputCls} /></Field>
              <Field label="What are you looking for?">
                <select value={form.service} onChange={update('service')} className={inputCls}>
                  <option>Individual Therapy</option>
                  <option>Couples / Relationship Therapy</option>
                  <option>Family Therapy</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea value={form.message} onChange={update('message')} rows={5}
                  placeholder="Share as much or as little as you'd like…" className={`${inputCls} resize-y min-h-[120px]`} />
              </Field>
              <button type="submit" className="btn-primary w-full"><Icon name="Mail" className="h-4.5 w-4.5" /> Send message</button>
              <p className="text-center text-[0.78rem] text-muted">Your details stay private and are never shared.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}

const inputCls =
  'w-full rounded-[13px] border-[1.5px] border-line bg-cloud px-4 py-3 text-[0.95rem] text-ink ' +
  'transition focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/25'

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.85rem] font-semibold">{label}</span>
      {children}
    </label>
  )
}
