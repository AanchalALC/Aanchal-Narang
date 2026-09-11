import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SocialFloat from './components/SocialFloat.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import MediaFeatures from './pages/MediaFeatures.jsx'
import Reviews from './pages/Reviews.jsx'
import FAQs from './pages/FAQs.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media-features" element={<MediaFeatures />} />
          {/* Blog temporarily hidden — route + nav links removed, page kept for later */}
          <Route path="/reviews" element={<Reviews />} />
          {/* Gallery temporarily hidden — route + nav links removed, page kept for later */}
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <SocialFloat />
    </div>
  )
}
