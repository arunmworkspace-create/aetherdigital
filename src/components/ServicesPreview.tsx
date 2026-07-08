import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Search, Sparkles, Share2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { useNavigate } from 'react-router-dom';

const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  switch (name) {
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    default:
      return <TrendingUp className={className} />;
  }
};

export default function ServicesPreview() {
  const navigate = useNavigate();
  // Let's take the first 3 services for preview, to keep the landing page tight and encourage exploration
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section id="services-preview-section" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl text-left flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
              Mastering the Aether
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
              Growth Services Engineered for Impact.
            </h2>
          </div>
          <div>
            <button
              id="view-all-services-btn"
              onClick={() => {
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-slate-200 hover:border-indigo-600 bg-white hover:bg-indigo-50 text-slate-900 hover:text-indigo-700 font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer"
            >
              View All Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {previewServices.map((service, idx) => (
            <motion.div
              key={service.id}
              id={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col justify-between bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-6 text-left">
                {/* Header Row: Icon and Identifier */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <IconRenderer name={service.iconName} className="w-5.5 h-5.5" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider">
                    0{idx + 1} // CAMPAIGN
                  </span>
                </div>

                {/* Info Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Sub Features Bullet List (Aesthetic representation) */}
                <ul className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
                  {service.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metric Callout Panel */}
              {service.metrics && (
                <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-4 text-left">
                  <div className="font-mono text-2xl font-bold text-slate-900 tracking-tight">
                    {service.metrics.value}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider font-mono leading-none">
                    {service.metrics.label}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
