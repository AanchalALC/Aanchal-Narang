export default function PressBadge({ name, sub }) {
  return (
    <div className="flex min-h-[96px] flex-col items-center justify-center rounded-[18px] border border-line
                    bg-white p-5 text-center font-display font-semibold text-[1.1rem] text-ink
                    transition hover:-translate-y-1 hover:text-brand-dark hover:shadow-card">
      {name}
      {sub && (
        <small className="mt-1 font-body text-[0.68rem] font-medium uppercase tracking-[0.14em] text-muted">
          {sub}
        </small>
      )}
    </div>
  )
}
