// Layered wave divider, echoing the blue wave bands used throughout the
// original site to transition between sections.
export default function WaveDivider({ flip = false, className = '' }) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1440 120" className="w-full h-16 sm:h-24" preserveAspectRatio="none">
        <path
          d="M0,64 C240,120 480,0 720,48 C960,96 1200,32 1440,64 L1440,120 L0,120 Z"
          fill="#8FE0F7"
          opacity="0.55"
        />
        <path
          d="M0,80 C240,32 480,112 720,72 C960,32 1200,104 1440,56 L1440,120 L0,120 Z"
          fill="#25AEE8"
        />
      </svg>
    </div>
  )
}
