import Icon from './Icon.jsx'

// Colored, intentional image placeholder. Swap for a real <img> when assets exist.
const variants = {
  sky:   'from-[#DCF1FB] to-[#B7E2F6] text-[#146A96]',
  mint:  'from-[#DDF3EC] to-[#B7E4D6] text-[#227C64]',
  lav:   'from-[#E9E5F8] to-[#D0C8EF] text-[#5A4EB0]',
  peach: 'from-[#FCE7DE] to-[#F7CBBB] text-[#B45C3B]',
  sun:   'from-[#FCF3CB] to-[#F6E484] text-[#96790A]',
  brand: 'from-[#CDEDFB] to-[#8FD4F2] text-[#0E6C9B]',
}

export default function Placeholder({
  variant = 'sky', icon = 'Image', label, note, className = '', rounded = 'rounded-[26px]',
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2.5 text-center overflow-hidden
                  bg-gradient-to-br ${variants[variant]} ${rounded} p-6 ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_15%_10%,rgba(255,255,255,.55),transparent_55%)]" />
      <span className="relative flex h-13 w-13 items-center justify-center rounded-2xl bg-white/60 p-3">
        <Icon name={icon} className="h-6 w-6" strokeWidth={1.9} />
      </span>
      {label && <span className="relative font-semibold text-[0.9rem]">{label}</span>}
      {note && <span className="relative text-[0.72rem] font-medium opacity-70">{note}</span>}
    </div>
  )
}
