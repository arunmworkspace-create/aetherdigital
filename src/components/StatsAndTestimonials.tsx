import React from 'react';
import { motion } from 'motion/react';
import { Quote, Sparkles, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';
import { MAIN_TESTIMONIAL } from '../data';

export default function StatsAndTestimonials() {
  const stats = [
    { value: '15M+', label: 'Verified Ad Impressions', description: 'Placed across meta & google programmatic search channels' },
    { value: '84%', label: 'Average Pipeline Lift', description: 'Achieved within first 90 days of media execution models' },
    { value: '12x', label: 'Top-tier Campaign ROAS', description: 'Reopened revenue avenues for consumer brands' },
  ];

  return (
    <section id="testimonials-section" className="py-24 bg-slate-950 text-slate-300 relative overflow-hidden">
      {/* Visual background atmospheric lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl text-left mb-16 flex flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Stories of Scalability
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Proof in Execution. Value in Metrics.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            We do not believe in aesthetic designs that fail to generate revenue. Every creative output must justify its existence in raw business pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Testimonial Card */}
          <div className="lg:col-span-7 flex">
            <motion.div
              id="testimonial-quote-box"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full p-8 sm:p-10 rounded-[2rem] bg-slate-900 border border-slate-800 flex flex-col justify-between shadow-2xl"
            >
              <div className="absolute top-6 right-6 text-indigo-500/10">
                <Quote className="w-24 h-24 stroke-[3px]" />
              </div>

              {/* Main Quote Content */}
              <div className="flex flex-col gap-6 relative z-10 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-indigo-300 font-mono">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  CASE STUDY: MALABAR TECH SOLUTIONS
                </div>
                
                <p className="font-sans text-slate-100 text-base sm:text-lg leading-relaxed font-light italic">
                  "{MAIN_TESTIMONIAL.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 text-left">
                <div>
                  <h4 className="font-display font-bold text-base text-white">
                    {MAIN_TESTIMONIAL.author}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-0.5">
                    {MAIN_TESTIMONIAL.role} &mdash; <span className="text-indigo-400 font-bold">{MAIN_TESTIMONIAL.company}</span>
                  </p>
                </div>

                {/* Micro Metric Block */}
                <div className="flex items-center gap-3 bg-slate-800 px-4 py-2.5 rounded-xl border border-slate-700">
                  <div className="font-mono text-xl font-bold text-indigo-400">
                    {MAIN_TESTIMONIAL.stats.value}
                  </div>
                  <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider font-mono leading-none">
                    {MAIN_TESTIMONIAL.stats.label}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Stats List */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8">
            {stats.map((stat, sIdx) => (
              <motion.div
                key={sIdx}
                id={`stat-block-${sIdx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="flex gap-5 text-left border-l-2 border-indigo-500/30 hover:border-indigo-500 transition-all pl-6 py-2"
              >
                <div className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tighter shrink-0 select-none">
                  {stat.value}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-display font-semibold text-slate-200 text-sm tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-slate-500 text-xs mt-1 leading-snug">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
