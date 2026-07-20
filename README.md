# Aanchal Narang — Another Light Counselling

A modern, minimalist rebuild of the [aanchalnarang.in](https://aanchalnarang.in/)
therapy website as a static single-page app. Built with **React + Vite**,
**Tailwind CSS**, **Framer Motion**, and **lucide-react** icons.

The site is intentionally front-end only (no backend needed) — every page is
static content driven by simple data files, so it's fast, cheap to host, and
easy to edit.

---

## ✨ What's inside

- **9 pages**, all matching the original site's structure and colour theme:
  Home, About, Services, Media Features, Blog, Reviews, Gallery, FAQs, Contact
- Client-side routing with **React Router** and animated page transitions
- Scroll-triggered reveal animations, hover micro-interactions, an animated
  mobile menu and an accessible FAQ accordion (all via **Framer Motion**)
- The original brand look recreated in code: the *Aanchal* script logo with a
  rainbow underline, the pill navigation bar, yellow call-to-action buttons,
  wavy blue section dividers, comic-shadow poster headings, and the
  speech-bubble review cards
- Responsive down to mobile, keyboard-focus styles, and `prefers-reduced-motion`
  friendly

---

## 🎨 Theme & colours

Defined in `tailwind.config.js` so you can tweak them in one place:

| Token            | Hex        | Used for                          |
| ---------------- | ---------- | --------------------------------- |
| `paper`          | `#F2F4F8`  | Page background                   |
| `ink`            | `#141414`  | Near-black text / headings        |
| `brand`          | `#25AEE8`  | Primary blue (buttons, waves)     |
| `brand-dark`     | `#0E82B5`  | Hover / accents                   |
| `bubble`         | `#57C9EE`  | Review speech bubbles             |
| `sunshine`       | `#F6DE23`  | Yellow CTA buttons                |
| `cloud`          | `#FAFBFD`  | Card backgrounds                  |

Fonts (loaded from Google Fonts in `index.html`):
**Pacifico** (script logo), **Anton** (display headings), **Poppins** (body).

---

## 🚀 Getting started (local setup)

You need **Node.js 18+** and **npm** installed. Check with `node -v`.

```bash
# 1. Go into the project folder
cd aanchal-site

# 2. Install dependencies
npm install

# 3. Start the dev server (hot reload)
npm run dev
```

Then open the URL it prints (default **http://localhost:5173**).

### Production build

```bash
npm run build      # outputs static files to /dist
npm run preview    # serve the built /dist locally to test it
```

The `dist/` folder is a plain static site — deploy it anywhere (see below).

---

## 📁 Project structure

```
aanchal-site/
├── index.html                 # HTML entry + Google Fonts
├── package.json
├── vite.config.js
├── tailwind.config.js         # colours, fonts, animations
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx               # React + Router bootstrap
    ├── App.jsx                # routes + layout (Navbar/Footer/SocialFloat)
    ├── index.css              # Tailwind + custom utilities (pop shadow, bubbles…)
    ├── components/            # reusable UI
    │   ├── Navbar.jsx  Footer.jsx  Logo.jsx  Brandmark.jsx
    │   ├── WaveDivider.jsx  SocialFloat.jsx  SectionHeading.jsx
    │   ├── ServiceCard.jsx  StatsBar.jsx  ReviewBubble.jsx
    │   ├── FAQAccordion.jsx  PressBadge.jsx  PageHero.jsx
    │   ├── Icon.jsx           # name-based lucide icon renderer
    │   ├── ScrollToTop.jsx  PageTransition.jsx
    ├── pages/                 # one file per route
    │   ├── Home.jsx  About.jsx  Services.jsx  MediaFeatures.jsx
    │   ├── Blog.jsx  Reviews.jsx  Gallery.jsx  FAQs.jsx
    │   ├── Contact.jsx  NotFound.jsx
    └── data/                  # ← EDIT YOUR CONTENT HERE
        ├── services.js  specializations.js  mediaFeatures.js
        ├── faqs.js  reviews.js  about.js  gallery.js  blog.js
```

**Rule of thumb:** to change *words*, edit files in `src/data/`. To change
*layout/design*, edit `src/pages/` and `src/components/`.

---

## ✏️ Content you should replace before launch

This rebuild was made from screenshots, so a few things are **placeholders**
that you should swap for the real content. They're all clearly commented in code.

1. **Reviews** (`src/data/reviews.js`) — currently generic "Client A/B/C…"
   testimonials. Replace with your real, permission-cleared client reviews.
2. **Images & logos** — press logos (GQ, Hindustan Times, etc.), your profile
   photo, event photography, and the topic illustrations are represented with
   icon/text stand-ins so nothing depends on copyrighted assets. Drop your real
   files into `src/assets/` and swap the placeholder blocks for `<img>` tags.
   Search the code for `PressBadge`, and the gradient/icon tiles in
   `Gallery.jsx`, `About.jsx`, and `Home.jsx`.
3. **FAQ answers** (`src/data/faqs.js`) — only the first answer ("How long is a
   session?") was legible in the source. The rest are sensible drafts — review
   and edit them.
4. **About copy** (`src/data/about.js`) — a couple of stats/research lines were
   partly cut off in the screenshots; the CPD list and some figures are drafts.
5. **Intro video** (`Home.jsx`) — there's a play-button placeholder where the
   original has a 32-second intro clip. Drop your video in and replace it.
6. **Blog** (`src/data/blog.js`) — the original ships placeholder cards too.
   Add real posts when ready.

---

## 📷 Adding real images

```jsx
// 1. Put the file in src/assets, e.g. src/assets/aanchal.jpg
import aanchal from '../assets/aanchal.jpg'

// 2. Use it
<img src={aanchal} alt="Aanchal Narang" className="w-48 h-48 rounded-full object-cover" />
```

For the press-logo strip, replace the `<PressBadge>` text badges with `<img>`
tags pointing at logo files in `src/assets/press/`.

---

## 📨 Making the contact form actually send

The Contact form (`src/pages/Contact.jsx`) currently just logs to the console —
there's no backend. Two easy no-backend options:

**EmailJS** (sends email straight from the browser):

```bash
npm install @emailjs/browser
```

```jsx
import emailjs from '@emailjs/browser'
// inside handleSubmit, after e.preventDefault():
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
```

**Formspree** (point the form action at a Formspree endpoint) is even simpler —
see https://formspree.io.

If you later add a real MERN backend, replace the handler with a
`fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })` call.

---

## 🌐 Deploying

Since this builds to static files, hosting is free/cheap and simple:

- **Vercel / Netlify:** connect the repo, framework preset **Vite**, build
  command `npm run build`, output dir `dist`. Add a rewrite so client-side
  routes work:
  - *Netlify* — create `public/_redirects` with: `/*  /index.html  200`
  - *Vercel* — add `vercel.json` with a catch-all rewrite to `/index.html`
- **GitHub Pages:** run `npm run build` and publish the `dist/` folder (set
  Vite `base` in `vite.config.js` if it's served from a sub-path).

---

## 🧰 Tech / dependencies

| Package             | Why                                    |
| ------------------- | -------------------------------------- |
| `react` / `react-dom` | UI framework                         |
| `vite`              | Dev server + build tool (fast)         |
| `tailwindcss`       | Utility-first styling                  |
| `framer-motion`     | Animations & page transitions          |
| `react-router-dom`  | Client-side routing                    |
| `lucide-react`      | Icon set                               |

---

## 📝 Notes

- No user data is collected or stored by the site itself.
- All animations respect the layout; if you want to dial motion up or down,
  most of it lives in `PageTransition.jsx`, `SectionHeading.jsx`, and the
  `whileInView`/`whileHover` props on each page.
- Accessibility: keyboard focus rings are on by default, the mobile menu and
  accordion use `aria-expanded`, and headings follow a sensible order.

Happy building — reach out if you want help wiring up a CMS for the blog or a
real backend for the contact form.
