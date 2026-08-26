// A single soft curve — the calm replacement for the old choppy waves.
export default function CurveDivider({ flip = false, color = '#EAF6FD', className = '' }) {
  const d = flip
    ? 'M0,40 C360,0 1080,72 1440,32 L1440,0 L0,0 Z'
    : 'M0,32 C360,72 1080,0 1440,40 L1440,70 L0,70 Z'
  return (
    <div className={`leading-[0] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="block w-full h-[70px]">
        <path d={d} fill={color} />
      </svg>
    </div>
  )
}
