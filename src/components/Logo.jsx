import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex flex-col items-center group ${className}`}>
      <span className="font-script text-4xl sm:text-5xl text-ink leading-none transition-transform duration-300 group-hover:-translate-y-0.5">
        Aanchal
      </span>
      <span className="rainbow-fade w-40 sm:w-48 mt-1" />
    </Link>
  )
}
