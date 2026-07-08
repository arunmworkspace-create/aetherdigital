import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles, MapPin, Award } from 'lucide-react';
import { Page } from '../types';
import { ASSETS } from '../data';

interface HeroProps {
  setCurrentPage: (page: Page) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section id="hero-section" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200/50">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Subtle Tag */}
            <motion.div
              id="hero-tag"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/50 text-xs font-semibold text-indigo-700 tracking-wide uppercase font-mono"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-pulse" />
              <span>Scale in the Digital Aether</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]"
            >
              Elevate Your Brand <br className="hidden sm:inline" />
              in the Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 underline decoration-indigo-200 decoration-wavy">Aether</span>.
            </motion.h1>

            {/* Description */}
            <motion.p
              id="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-sans"
            >
              We are AetherDigital. We merge quantitative analytical precision with storytelling to build high-converting performance marketing, SEO networks, and design systems. Engineered in Kochi, built for global scale.
            </motion.p>

            {/* Buttons */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mt-2"
            >
              <button
                id="hero-btn-solutions"
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Solutions
                <ArrowRight className="w-4.5 h-4.5" />
              </button>
              <button
                id="hero-btn-methodology"
                onClick={() => {
                  setCurrentPage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-1 px-7 py-3.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer hover:border-slate-300"
              >
                Our Methodology
                <ChevronRight className="w-4.5 h-4.5 text-zinc-400" />
              </button>
            </motion.div>

            {/* Quick Metrics banner */}
            <motion.div
              id="hero-quick-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-200 w-full"
            >
              <div className="flex flex-col">
                <span className="font-mono font-bold text-2xl text-slate-900 tracking-tight">15M+</span>
                <span className="text-xs text-slate-500 font-mono">Ads Impressions</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-2xl text-slate-900 tracking-tight">84%</span>
                <span className="text-xs text-slate-500 font-mono">Avg Increase in lead gen</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-mono font-bold text-2xl text-slate-900 tracking-tight">100%</span>
                <span className="text-xs text-slate-500 font-mono">ROI Focused</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Beautiful Kochi Workspace Presentation */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              id="hero-image-container"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none group"
            >
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-[2.2rem] blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Photo Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-slate-950 border-4 border-slate-50 shadow-2xl">
                <img
                  id="hero-workspace-img"
                  src={ASSETS.kochiWorkspace}
                  alt="AetherDigital Kochi Infopark Office Space"
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
                
                {/* Visual Glassmorphic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Corner Accents (Stylistic) */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-200/15 text-[10px] font-semibold text-white font-mono">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  Kochi, Infopark Phase I
                </div>

                <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/40 shadow-lg">
                  <Award className="w-4 h-4 text-indigo-600" />
                  <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wider font-mono">Premium Partner</span>
                </div>
              </div>

              {/* Backing structural details to convey agency craft */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-slate-100 rounded-[2rem] border border-slate-200 -z-20 flex items-center justify-center font-mono text-[9px] text-slate-400 tracking-wider uppercase rotate-6">
                AETHER
              </div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-slate-200/30 rounded-full blur-md -z-20" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
