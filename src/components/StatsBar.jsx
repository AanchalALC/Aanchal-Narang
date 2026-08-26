export default function StatsBar({ items }) {
  return (
    <div className="grid gap-5 rounded-[34px] bg-gradient-to-br from-brand to-brand-dark p-9 sm:p-11
                    text-white shadow-card grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="text-center">
          <b className="block font-display text-[clamp(1.7rem,4vw,2.5rem)] font-semibold">{s.value}</b>
          <span className="text-[0.85rem] opacity-90">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
