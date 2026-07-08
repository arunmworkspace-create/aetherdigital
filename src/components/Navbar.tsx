import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; path: string }[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="nav-logo"
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 group cursor-pointer text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-md">
            <Sparkles className="w-5 h-5 text-indigo-400 group-hover:text-cyan-400 transition-colors" />
          </div>
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-900">
              Aether<span className="text-indigo-600">Digital</span>
            </span>
            <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase -mt-1 font-medium">
              Kochi Studio
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                id={`nav-link-${link.path.replace('/', '') || 'home'}`}
                onClick={() => handleNavClick(link.path)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? 'text-indigo-600' : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute inset-0 bg-indigo-50/70 border border-indigo-100/30 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-button"
            onClick={() => handleNavClick('/contact')}
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-indigo-500/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-xl border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer text-slate-700"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-slate-50 overflow-hidden shadow-inner"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={link.path}
                    id={`mobile-nav-link-${link.path.replace('/', '') || 'home'}`}
                    onClick={() => handleNavClick(link.path)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-600'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                id="mobile-nav-cta"
                onClick={() => handleNavClick('/contact')}
                className="w-full flex items-center justify-center gap-2 mt-4 px-4 py-3.5 rounded-xl bg-indigo-600 text-stone-50 font-medium text-sm hover:bg-indigo-700 transition-colors shadow-md"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
