import Icon from './Icon.jsx'

const avatarColors = ['#25AEE8', '#C56A45', '#2E9E82', '#6B5FC0', '#0E82B5', '#96790A']

export default function ReviewBubble({ name, text, tag, index = 0 }) {
  const color = avatarColors[index % avatarColors.length]
  const initial = (name || 'A').replace(/^Client\s*/i, '').trim().charAt(0) || 'A'
  return (
    <div className="card p-7 flex flex-col h-full">
      <div className="flex gap-0.5 mb-3.5 text-sunshine">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="Star" className="h-[18px] w-[18px] fill-sunshine" strokeWidth={0} />
        ))}
      </div>
      <p className="text-ink text-[1rem] mb-5 flex-1">&ldquo;{text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full font-display font-bold text-white text-[1.05rem]"
             style={{ background: color }}>
          {initial}
        </div>
        <div>
          <b className="text-[0.95rem] block leading-tight">{name}</b>
          {tag && <span className="text-[0.8rem] text-muted">{tag}</span>}
        </div>
      </div>
    </div>
  )
}
