import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Home Page Subsections
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import ServicesPreview from './components/ServicesPreview';
import StatsAndTestimonials from './components/StatsAndTestimonials';
import CTA from './components/CTA';

// Other Pages
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5F9] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans">
      {/* Sticky Global Header */}
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content Area with Page-level Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero setCurrentPage={setCurrentPage} />
              <BentoGrid />
              <ServicesPreview setCurrentPage={setCurrentPage} />
              <StatsAndTestimonials />
              <CTA setCurrentPage={setCurrentPage} />
            </motion.div>
          )}

          {currentPage === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ServicesPage setCurrentPage={setCurrentPage} />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AboutPage setCurrentPage={setCurrentPage} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ContactPage setCurrentPage={setCurrentPage} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
