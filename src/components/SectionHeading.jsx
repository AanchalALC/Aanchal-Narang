import Icon from './Icon.jsx'

export default function SectionHeading({ eyebrow, icon, title, subtitle, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span className="eyebrow mb-4">
          {icon && <Icon name={icon} className="h-3.5 w-3.5" strokeWidth={2.2} />} {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.9rem,4vw,2.7rem)] font-semibold">{title}</h2>
      {subtitle && (
        <p className={`mt-3 text-[clamp(1rem,1.6vw,1.15rem)] text-muted ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
