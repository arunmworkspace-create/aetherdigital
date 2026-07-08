import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, MapPin, Zap, ShieldCheck } from 'lucide-react';
import { BENTO_ITEMS } from '../data';

// Helper to render the appropriate icon
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
};

export default function BentoGrid() {
  return (
    <section id="why-us-section" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
            Value Architecture
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Designed for Performance, Built for Scalability.
          </h2>
          <p className="text-slate-500 text-base max-w-xl">
            We operate at the nexus of quantitative statistics and creative storytelling. Here is why ambitious brands choose AetherDigital.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              id={`bento-item-${idx}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between min-h-[250px] shadow-sm hover:shadow-lg hover:shadow-indigo-500/[0.03] ${
                item.className || ''
              }`}
            >
              {/* Background gradient decorative element on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-cyan-50/0 group-hover:from-indigo-50/10 group-hover:to-cyan-50/10 transition-all duration-500 pointer-events-none" />

              {/* Top Row: Icon and Tag */}
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 group-hover:bg-indigo-600 text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                  <IconRenderer name={item.iconName} className="w-5.5 h-5.5" />
                </div>
                {item.tag && (
                  <span className="px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100/50 text-[10px] font-bold text-indigo-700 font-mono uppercase tracking-wider">
                     {item.tag}
                  </span>
                )}
              </div>

              {/* Bottom Row: Text content */}
              <div className="mt-8 relative z-10 flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-indigo-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Graphic accents in the bento boxes */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-indigo-100/10 rounded-full group-hover:bg-indigo-100/20 transition-colors pointer-events-none blur-xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
