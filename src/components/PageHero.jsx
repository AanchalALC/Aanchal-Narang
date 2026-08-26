import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, icon, title, subtitle }) {
  return (
    <header className="relative bg-gradient-to-b from-[#EAF6FD] to-paper pt-16 pb-14 text-center">
      <div className="container-page">
        <Reveal>
          <div className="rainbow-bar mx-auto mb-5 w-[88px]" />
          {eyebrow && (
            <span className="eyebrow mb-4">
              {icon && <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2.2} />} {eyebrow}
            </span>
          )}
          <h1 className="text-[clamp(2.2rem,5.2vw,3.6rem)] font-semibold">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-[clamp(1rem,1.6vw,1.15rem)] text-muted">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </header>
  )
}
