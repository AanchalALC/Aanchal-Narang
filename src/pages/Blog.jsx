import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import { blogPosts } from '../data/blog.js'

export default function Blog() {
  return (
    <PageTransition>
      <PageHero title="Blogs" />

      <section className="container-page mt-10 sm:mt-16 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-3xl overflow-hidden bg-cloud border border-black/5 shadow-card"
            >
              <div className="aspect-video bg-gradient-to-br from-ink/90 to-ink/60" />
              <div className="p-6">
                <h3 className="font-display text-lg text-ink uppercase">{post.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{post.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="text-center text-sm text-ink/50 mt-10">
          More posts coming soon.
        </p>
      </section>
    </PageTransition>
  )
}
