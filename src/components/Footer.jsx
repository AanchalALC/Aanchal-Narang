import { motion } from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react'
import WaveDivider from './WaveDivider.jsx'
import Brandmark from './Brandmark.jsx'

export default function Footer() {
  return (
    <footer className="mt-24 relative">
      <WaveDivider />
      <div className="bg-brand relative overflow-hidden">
        <div className="container-page py-14 sm:py-20 relative z-10">
          <div className="grid gap-10 sm:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-white text-3xl sm:text-4xl font-display leading-tight">
                Looking forward
                <br />
                to meeting you
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 text-white"
            >
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Call &amp; WhatsApp</p>
                  <a href="tel:+918879260310" className="text-white/90 hover:text-sunshine transition-colors">
                    +91 88792 60310
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Drop a mail</p>
                  <a
                    href="mailto:admin@another-light.com"
                    className="text-white/90 hover:text-sunshine transition-colors break-all"
                  >
                    admin@another-light.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="tel:+918879260310"
                  aria-label="Call"
                  className="p-2.5 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <Phone size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between mt-14 pt-8 border-t border-white/20 flex-wrap gap-4">
            <p className="text-white/80 text-xs">
              &copy; {new Date().getFullYear()} Aanchal Narang &middot; Another Light Counselling. All rights reserved.
            </p>
            <Brandmark className="opacity-90" />
          </div>
        </div>
      </div>
    </footer>
  )
}
