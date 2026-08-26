import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const tints = {
  sky:   'bg-brand/[0.13] text-brand-dark',
  mint:  'bg-[#2E9E82]/[0.14] text-[#227C64]',
  lav:   'bg-[#6B5FC0]/[0.14] text-[#5A4EB0]',
  peach: 'bg-[#C56A45]/[0.14] text-[#B45C3B]',
  sun:   'bg-[#A98A0E]/[0.16] text-[#96790A]',
  brand: 'bg-brand-dark/[0.14] text-brand-dark',
}

export default function ServiceCard({ icon, tint = 'sky', title, summary, to = '/services', cta = 'Learn more' }) {
  return (
    <div className="card card-hover p-7 flex flex-col group">
      <div className={`mb-4 flex h-15 w-15 items-center justify-center rounded-2xl ${tints[tint]}`}>
        <Icon name={icon} className="h-7 w-7" strokeWidth={1.8} />
      </div>
      <h3 className="text-[1.28rem] font-semibold mb-2.5">{title}</h3>
      <p className="text-muted text-[0.95rem] mb-4 flex-1">{summary}</p>
      <Link to={to} rel="nofollow" className="inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-brand-dark">
        {cta} <Icon name="ArrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
