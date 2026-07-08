import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();
  return (
    <section id="cta-section" className="py-24 bg-transparent overflow-hidden relative">
      {/* Decorative vector meshes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-50/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          id="cta-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] bg-slate-900 text-slate-100 p-8 sm:p-12 lg:p-16 overflow-hidden border border-slate-800 shadow-2xl text-center flex flex-col items-center max-w-5xl mx-auto"
        >
          {/* Ambient background glow inside */}
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          {/* Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg relative z-10 mb-6">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-2xl relative z-10">
            Ready to enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Aether</span>?
          </h2>

          {/* Subtext */}
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mt-4 leading-relaxed relative z-10">
            Let's dissect your current media channels, identify attribution leaks, and design a scalable performance blueprint. Get a comprehensive digital evaluation report.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 relative z-10 w-full sm:w-auto">
            <button
              id="cta-contact-btn"
              onClick={() => {
                navigate('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-1.5 w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-indigo-600/10 hover:shadow-indigo-500/20 hover:-translate-y-0.5 cursor-pointer"
            >
              Request Campaign Audit
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
            
            <button
              id="cta-about-btn"
              onClick={() => {
                navigate('/about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center justify-center gap-1 w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 font-bold text-sm transition-all duration-300 cursor-pointer"
            >
              See Our Principles
            </button>
          </div>

          {/* Floating Tag */}
          <div className="absolute bottom-4 right-6 hidden lg:block font-mono text-[9px] text-slate-600 tracking-wider">
            AETHERDIGITAL STUDIO // KOCHI, IN
          </div>
        </motion.div>
      </div>
    </section>
  );
}
