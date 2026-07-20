import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function ReviewBubble({ review, index = 0 }) {
  const rightAligned = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, x: rightAligned ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex ${rightAligned ? 'justify-end' : 'justify-start'} mb-14`}
    >
      <div className="max-w-md w-full">
        <div
          className={`speech-bubble ${rightAligned ? 'bubble-right' : ''} bg-bubble p-6 sm:p-7`}
        >
          <Quote className="text-ink/30 mb-2" size={26} fill="currentColor" />
          <p className="text-ink text-sm sm:text-base leading-relaxed font-medium">
            {review.text}
          </p>
        </div>
        <p className={`mt-6 text-xs font-bold uppercase tracking-wide text-ink/60 ${rightAligned ? 'text-right pr-12' : 'pl-12'}`}>
          {review.name}
        </p>
      </div>
    </motion.div>
  )
}
