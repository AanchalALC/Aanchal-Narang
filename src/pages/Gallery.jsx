import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Placeholder from '../components/Placeholder.jsx'
import { galleryItems } from '../data/gallery.js'

const variants = ['sky', 'peach', 'mint', 'sun', 'lav', 'brand']
// Give the masonry some rhythm: certain tiles span extra rows/cols.
const spans = ['sm:row-span-2', '', '', 'sm:col-span-2', '', '', 'sm:row-span-2', 'sm:col-span-2', '']

export default function Gallery() {
  return (
    <PageTransition>
      <PageHero eyebrow="Gallery" icon="Image" title="Moments & spaces"
        subtitle="A little peek into the practice — the calm rooms, the workshops, and the small moments that make this work feel like home." />

      <section className="py-16">
        <div className="container-page">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[200px]">
            {galleryItems.map((g, i) => (
              <Reveal
                key={g.caption + i}
                delay={(i % 3) * 0.05}
                className={`${spans[i % spans.length]}`}
              >
                <Placeholder
                  variant={variants[i % variants.length]}
                  icon={g.icon || (g.type === 'photo' ? 'Camera' : 'Sparkles')}
                  note={g.caption}
                  rounded="rounded-[18px]"
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
