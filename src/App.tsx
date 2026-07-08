import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <ServicesPreview />
      <StatsAndTestimonials />
      <CTA />
    </>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#F1F5F9] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 antialiased font-sans">
      <ScrollToTop />
      {/* Sticky Global Header */}
      <Navbar />

      {/* Main Content Area with Page-level Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div key={location.pathname}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ServicesPage />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
          </Routes>
          </div>
        </AnimatePresence>
      </main>

      {/* Global Brand Footer */}
      <Footer />
    </div>
  );
}
