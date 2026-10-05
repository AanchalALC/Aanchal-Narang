import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const explore = [
  { to: '/', label: 'Home' }, { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' }, { to: '/media-features', label: 'Media Features' },
]
const more = [
  { to: '/gallery', label: 'Gallery' }, { to: '/reviews', label: 'Reviews' },
  { to: '/faqs', label: 'FAQs' },
]
const socials = [
  { href: 'https://www.instagram.com/another_light_counselling/', icon: 'Instagram', label: 'Instagram' },
  { href: 'https://api.whatsapp.com/send/?phone=%2B918879260310', icon: 'MessageCircle', label: 'WhatsApp' },
  { href: 'tel:+918879260310', icon: 'Phone', label: 'Phone' },
  { href: 'mailto:admin@another-light.com', icon: 'Mail', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="mt-5 bg-ink text-[#C7D2DC] pt-16 pb-7">
      <div className="container-page">
        <div className="grid gap-9 pb-9 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="font-script font-bold text-[1.7rem] text-white mb-2">Aanchal</div>
            <div className="rainbow-bar w-[70px] !h-1.5 mb-4" />
            <p className="text-[0.9rem] leading-relaxed text-[#AEBBC7] max-w-xs">
              Warm, judgement-free therapy for individuals, couples and families. A softer place to
              begin your healing — whenever you&rsquo;re ready.
            </p>
            <div className="flex gap-2.5 mt-4">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.08]
                              text-white transition hover:bg-brand hover:-translate-y-0.5">
                  <Icon name={s.icon} className="h-[19px] w-[19px]" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-base mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-[0.9rem] text-[#AEBBC7] hover:text-bubble transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4">More</h4>
            <ul className="space-y-2.5">
              {more.map((l) => (
                <li key={l.to}><Link to={l.to} className="text-[0.9rem] text-[#AEBBC7] hover:text-bubble transition">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base mb-4">Get in touch</h4>
            <ul className="space-y-2.5 text-[0.9rem] text-[#AEBBC7]">
              <li><a href="tel:+918879260310" className="hover:text-bubble transition">+91 8879260310</a></li>
              <li><a href="mailto:admin@another-light.com" className="hover:text-bubble transition">admin@another-light.com</a></li>
            </ul>
            <Link to="/contact" className="btn-brand mt-4 !text-[0.85rem] !px-5 !py-2.5">
              <Icon name="Calendar" className="h-4 w-4" /> Book now
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 flex flex-wrap justify-between gap-3 text-[0.82rem] text-[#8FA0AE]">
          <span>© {new Date().getFullYear()} Aanchal Narang · Another Light Counselling</span>
          <span>Made with care · A softer place to heal</span>
        </div>
      </div>
    </footer>
  )
}