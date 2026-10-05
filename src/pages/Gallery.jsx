import { useEffect, useState } from 'react'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const galleryImages = Object.entries(
  import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,webp,avif,gif}', {
    eager: true,
    import: 'default',
    query: '?url',
  }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src], index) => {
    const filename = path.split('/').pop().replace(/\.[^.]+$/, '')
    const label = /^(image|whatsapp image)|^\{?[0-9a-f-]{30,}\}?$/i.test(filename)
      ? `Gallery photo ${index + 1}`
      : filename.replace(/^\{|\}$/g, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()

    return { src, alt: label }
  })

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelectedImage(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [selectedImage])

  return (
    <PageTransition>
      <PageHero eyebrow="Gallery" icon="Image" title="Moments & spaces"
        subtitle="A glimpse into Aanchal's work, the spaces she shares, and the moments in between." />

      <section className="py-12 sm:py-16">
        <div className="container-page">
          <Reveal className="mb-7 flex items-center justify-between gap-4">
            <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              A collection from the practice, workshops, and conversations that make this work meaningful.
            </p>
            <span className="flex-shrink-0 rounded-pill border border-line bg-white px-4 py-2 text-sm font-medium text-muted shadow-soft">
              {galleryImages.length} {galleryImages.length === 1 ? 'photo' : 'photos'}
            </span>
          </Reveal>

          {galleryImages.length > 0 ? (
            <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
              {galleryImages.map((image, index) => (
                <Reveal key={image.src} delay={(index % 4) * 0.04} className="mb-4 break-inside-avoid">
                  <button
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    aria-label={`View ${image.alt}`}
                    className="group relative block w-full overflow-hidden rounded-[20px] bg-white p-1.5 text-left shadow-card transition-shadow duration-300 hover:shadow-lift focus-visible:outline-offset-4"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-auto w-full rounded-[15px] transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="pointer-events-none absolute inset-x-1.5 bottom-1.5 flex items-center justify-end rounded-b-[15px] bg-gradient-to-t from-black/45 to-transparent px-4 pb-3 pt-10 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Icon name="Expand" className="h-5 w-5" />
                    </span>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="rounded-[20px] border border-line bg-white p-8 text-center text-muted">
              No gallery photos were found.
            </p>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null)
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:right-7 sm:top-7"
          >
            <Icon name="X" className="h-6 w-6" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-h-full max-w-full rounded-[18px] object-contain shadow-lift"
          />
        </div>
      )}
    </PageTransition>
  )
}
