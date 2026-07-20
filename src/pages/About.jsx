import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StatsBar from '../components/StatsBar.jsx'
import PressBadge from '../components/PressBadge.jsx'
import Icon from '../components/Icon.jsx'
import {
  introParagraphs,
  education,
  cpd,
  workExperienceCaptions,
  collegesTrained,
  workshopClients,
  professionalAffiliations,
  mediaRecognition,
} from '../data/about.js'
import { specializations } from '../data/specializations.js'
import { pressBadges } from '../data/mediaFeatures.js'

const cardColors = [
  'from-brand-light/70 to-brand/40',
  'from-sunshine/60 to-sunshine/20',
  'from-bubble/70 to-bubble/30',
]

export default function About() {
  return (
    <PageTransition>
      <PageHero title="Hey Folks, I am Aanchal" subtitle="Founder & head-therapist at Another Light Counselling — rewriting the rulebook on mental health in India." />

      {/* Intro card */}
      <section className="container-page mt-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-cloud border border-black/5 shadow-card p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-8"
        >
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-brand overflow-hidden shrink-0 bg-gradient-to-br from-brand-light to-brand flex items-center justify-center">
            <span className="font-script text-3xl text-white/90">A</span>
          </div>
          <p className="text-ink/70 max-w-xl text-center sm:text-left">
            A trauma-informed, queer-affirmative psychotherapist working across individual,
            couples and family therapy — with a practice built on intersectionality,
            research and community advocacy.
          </p>
        </motion.div>
      </section>

      {/* Get to know me */}
      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Get to Know Me</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6">
          {introParagraphs.map((item, i) => (
            <motion.div
              key={item.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-cloud border border-black/5 p-6 shadow-soft"
            >
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand-dark mb-4">
                <Icon name={item.icon} size={20} />
              </div>
              <h3 className="font-display text-lg text-ink">{item.heading}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Education &amp; Advanced Training</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-brand-light/30 border border-black/5 p-8 flex flex-col items-center text-center justify-center"
          >
            <Icon name="GraduationCap" size={32} className="text-brand-dark mb-4" />
            <p className="font-display text-lg text-ink">{education.degree}</p>
            <p className="mt-1 text-sm text-ink/70">{education.institute}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl bg-cloud border border-black/5 p-6 sm:p-8"
          >
            <p className="font-display text-lg text-ink mb-4">Continuous Professional Development</p>
            <ul className="space-y-2">
              {cpd.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-ink/75">
                  <Icon name="CheckCircle2" size={16} className="text-brand-dark mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <div className="mt-16 sm:mt-24">
        <StatsBar />
      </div>

      {/* Work experience gallery */}
      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Work Experience</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {workExperienceCaptions.map((caption, i) => (
            <motion.div
              key={caption}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className={`aspect-square rounded-2xl bg-gradient-to-br ${cardColors[i % cardColors.length]} flex flex-col items-center justify-center text-center p-3 border border-black/5`}
            >
              <Icon name="Camera" size={22} className="text-ink/50 mb-2" />
              <span className="text-[11px] font-medium text-ink/70 leading-tight">{caption}</span>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center italic text-ink/70 max-w-2xl mx-auto">
          Over the course of my career, I have trained students of several colleges in and
          out of Mumbai, and designed &amp; facilitated training sessions for organisations
          and institutions such as:
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="rounded-2xl bg-cloud border border-black/5 p-6">
            <p className="font-semibold text-ink mb-3">Colleges &amp; Universities</p>
            <div className="flex flex-wrap gap-2">
              {collegesTrained.map((c) => (
                <span key={c} className="text-xs bg-brand/10 text-brand-dark px-3 py-1.5 rounded-pill">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-cloud border border-black/5 p-6">
            <p className="font-semibold text-ink mb-3">Organisations &amp; Institutions</p>
            <div className="flex flex-wrap gap-2">
              {workshopClients.map((c) => (
                <span key={c} className="text-xs bg-sunshine/30 text-ink px-3 py-1.5 rounded-pill">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media recognition + affiliations */}
      <section className="container-page mt-16 sm:mt-24 grid sm:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-brand text-white p-6 sm:p-8"
        >
          <h3 className="font-display text-xl mb-3">Media Recognition &amp; Advocacy</h3>
          <p className="text-white/90 text-sm mb-4">
            A vocal gender and mental-health advocate, quoted in prominent national and
            international media, including:
          </p>
          <ul className="text-sm space-y-1.5 text-white/90">
            {mediaRecognition.map((m) => (
              <li key={m}>&bull; {m}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-brand-dark text-white p-6 sm:p-8"
        >
          <h3 className="font-display text-xl mb-3">Professional Affiliations</h3>
          <ul className="text-sm space-y-2 text-white/90">
            {professionalAffiliations.map((a) => (
              <li key={a} className="flex gap-2">
                <Icon name="BadgeCheck" size={16} className="mt-0.5 shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Core expertise */}
      <section className="container-page mt-16 sm:mt-24">
        <SectionHeading className="mb-10">Core Expertise &amp; Areas of Specialization</SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {specializations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border border-black/5 p-5 flex flex-col items-center text-center gap-3 bg-gradient-to-br ${cardColors[i % cardColors.length]}`}
            >
              <Icon name={item.icon} size={26} className="text-ink/70" />
              <span className="text-xs font-semibold text-ink/80 leading-snug">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media features strip */}
      <section className="container-page mt-16 sm:mt-24 pb-6">
        <SectionHeading className="mb-10">Media Features</SectionHeading>
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {pressBadges.map((p, i) => (
            <PressBadge key={p.name} {...p} index={i} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
