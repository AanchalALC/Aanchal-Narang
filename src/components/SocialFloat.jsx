import { motion } from 'framer-motion'
import { Instagram, Phone, MessageCircle } from 'lucide-react'

const items = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Phone, href: 'tel:+918879260310', label: 'Call' },
  { icon: MessageCircle, href: 'https://wa.me/918879260310', label: 'WhatsApp' },
]

export default function SocialFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col gap-3"
    >
      {items.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-11 h-11 rounded-2xl bg-brand text-white flex items-center justify-center shadow-card hover:bg-brand-dark hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icon size={19} />
        </a>
      ))}
    </motion.div>
  )
}
