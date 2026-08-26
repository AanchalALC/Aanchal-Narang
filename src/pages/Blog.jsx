import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Placeholder from '../components/Placeholder.jsx'
import Icon from '../components/Icon.jsx'
import { blogPosts } from '../data/blog.js'

// A few editorial cards so the grid looks intentional even before real posts exist.
const drafts = [
  { tag: 'Anxiety', title: '5 grounding tricks for anxious mornings', excerpt: 'Small, doable ways to start the day feeling a little more in control.', icon: 'Cloud', variant: 'sky', read: '4 min' },
  { tag: 'Relationships', title: 'How to actually listen to your partner', excerpt: 'Listening to understand, not to reply — and why it changes everything.', icon: 'HeartHandshake', variant: 'peach', read: '6 min' },
  { tag: 'Self-care', title: 'Rest without the guilt', excerpt: 'Reframing rest as maintenance, not laziness — your nervous system will thank you.', icon: 'Sprout', variant: 'mint', read: '3 min' },
  { tag: 'Growth', title: 'Setting boundaries that stick', excerpt: 'A kind, clear framework for saying no without the spiral of guilt.', icon: 'Sparkles', variant: 'sun', read: '5 min' },
  { tag: 'Family', title: 'When home doesn\u2019t feel safe', excerpt: 'Gentle first steps toward healing complicated family dynamics.', icon: 'Users', variant: 'lav', read: '7 min' },
  { tag: 'Trauma', title: 'Your body remembers — and that\u2019s okay', excerpt: 'Understanding trauma responses with compassion instead of shame.', icon: 'ShieldCheck', variant: 'brand', read: '6 min' },
]
// Real data from blog.js takes precedence; fall back to drafts to fill the grid.
const posts = (blogPosts.length && blogPosts[0].title !== 'Service One')
  ? blogPosts.map((p, i) => ({ ...drafts[i % drafts.length], title: p.title, excerpt: p.excerpt }))
  : drafts

export default function Blog() {
  const [featured, ...rest] = posts
  return (
    <PageTransition>
      <PageHero eyebrow="Blog" icon="BookOpen" title="Notes on healing"
        subtitle="Gentle reflections on mental health, relationships and being human — written for the days you need something soft to hold onto." />

      <section className="py-16">
        <div className="container-page">
          {/* FEATURED */}
          <Reveal className="card overflow-hidden mb-10">
            <div className="grid lg:grid-cols-2">
              <Placeholder variant="lav" icon="BookOpen" note="Featured post image" rounded="rounded-none" className="min-h-[300px]" />
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <span className="self-start rounded-full bg-sunshine/60 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-wide text-ink">Featured</span>
                <h2 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold mt-3.5 mb-3">
                  You don&rsquo;t have to be in crisis to deserve support
                </h2>
                <p className="text-muted">
                  Therapy isn&rsquo;t only for breaking points. Sometimes the bravest thing is reaching out while things still look
                  &ldquo;fine&rdquo; on the outside. Here&rsquo;s why starting early matters.
                </p>
                <div className="mt-5 flex items-center gap-5 text-[0.8rem] text-muted">
                  <span className="inline-flex items-center gap-1.5"><Icon name="Calendar" className="h-3.5 w-3.5" /> Latest</span>
                  <span className="inline-flex items-center gap-1.5"><Icon name="Clock" className="h-3.5 w-3.5" /> 5 min read</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="card card-hover overflow-hidden flex flex-col">
                <Placeholder variant={p.variant} icon={p.icon} note="Post image" rounded="rounded-none" className="min-h-[180px]" />
                <div className="p-6 flex flex-col gap-2.5 flex-1">
                  <span className="self-start rounded-full bg-brand/[0.11] px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-dark">{p.tag}</span>
                  <h3 className="text-[1.14rem] font-semibold leading-snug">{p.title}</h3>
                  <p className="text-muted text-[0.9rem] flex-1">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted"><Icon name="Clock" className="h-3.5 w-3.5" /> {p.read}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
