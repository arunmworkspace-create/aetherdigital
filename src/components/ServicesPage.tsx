import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';
import { useNavigate } from 'react-router-dom';
import {
  TrendingUp,
  Search,
  Sparkles,
  Share2,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Activity,
  Award,
  ChevronRight,
  PieChart,
  Target
} from 'lucide-react';


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

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  const caseStudies = [
    {
      company: 'Malabar Tech Solutions',
      niche: 'Enterprise SaaS Scaling',
      challenge: 'High client acquisition cost (CAC) and attribution gaps across programmatic ad accounts.',
      solution: 'Rebuilt custom pixel integration, established high-converting semantic hubs, mapped tailored retargeting funnels.',
      metrics: [
        { label: 'ROAS', value: '4.8x' },
        { label: 'CAC reduction', value: '-35%' },
        { label: 'Lead Velocity', value: '+84%' }
      ]
    },
    {
      company: 'SpiceRoute Hospitality',
      niche: 'B2C Luxury Travel',
      challenge: 'Virtually zero organic search presence in standard tourist intent categories.',
      solution: 'Constructed an immersive content silo covering luxury Kerala retreats, resulting in exponential topical rankings.',
      metrics: [
        { label: 'Organic Traffic', value: '+320k' },
        { label: 'Booking conversions', value: '+112%' },
        { label: 'Domain Authority', value: 'from 12 to 44' }
      ]
    }
  ];

  return (
    <div id="services-page" className="bg-[#F1F5F9] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Banner Intro */}
        <div className="text-left mb-16 max-w-3xl flex flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
            Performance Systems
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
            Engineered for <span className="text-indigo-600">Growth</span>.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mt-2">
            We don’t write fluff. We build conversion architectures. Every SEO node, paid campaign, and creative visual has a mathematical job: to drive users into your pipeline.
          </p>
        </div>

        {/* Dynamic Services Selector (Interactive Module) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left: Interactive list selector */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-widest mb-2 pl-2">
              Capabilities Selector
            </span>
            {SERVICES.map((srv) => {
              const isSelected = srv.id === selectedService;
              return (
                <button
                  key={srv.id}
                  id={`service-select-${srv.id}`}
                  onClick={() => setSelectedService(srv.id)}
                  className={`w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-indigo-600 shadow-sm ring-1 ring-indigo-600/10'
                      : 'bg-white/60 border-slate-200 hover:bg-white hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200/50'
                      }`}
                    >
                      <IconRenderer name={srv.iconName} className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-display font-bold text-sm ${isSelected ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {srv.title}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest mt-0.5">
                        {srv.metrics?.value || 'Active'} Performance
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isSelected ? 'text-indigo-600 translate-x-1' : 'text-slate-300 group-hover:text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Showcase Container */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                id={`service-detail-panel-${activeService.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 p-8 sm:p-10 rounded-[2rem] shadow-sm flex flex-col justify-between text-left min-h-[500px]"
              >
                <div className="flex flex-col gap-6">
                  {/* Title and Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                    <div>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                        {activeService.title}
                      </h2>
                      <p className="text-xs text-indigo-600 font-mono tracking-wider uppercase mt-1">
                        Core Agency Competence // {activeService.id.replace('-', ' ')}
                      </p>
                    </div>

                    {activeService.metrics && (
                      <div className="flex items-center gap-3.5 bg-indigo-50/80 border border-indigo-100 px-5 py-3 rounded-2xl shrink-0">
                        <div className="font-mono text-3xl font-bold text-indigo-700 leading-none">
                          {activeService.metrics.value}
                        </div>
                        <div className="text-[9px] uppercase font-bold text-indigo-900 tracking-wider font-mono leading-tight">
                          {activeService.metrics.label}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Descriptions */}
                  <div className="flex flex-col gap-4">
                    <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
                      {activeService.shortDescription}
                    </p>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                      {activeService.fullDescription}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="mt-4">
                    <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400 mb-4 font-mono">
                      Scope of Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeService.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sub CTA row inside the panel */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-400 font-mono">
                    💡 Perfect for companies scaling above ₹10L/month ad budgets.
                  </div>
                  <button
                    id="service-panel-cta"
                    onClick={() => {
                      navigate('/contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 text-sm font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer group"
                  >
                    Discuss this solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Section: Results that Speak */}
        <div className="mt-32 border-t border-slate-200 pt-24 text-left">
          <div className="flex flex-col gap-3 max-w-2xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
              Results that Speak
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Validated Success Across Active Channels
            </h2>
            <p className="text-slate-500 text-sm">
              We align visual design, campaign management, and keyword strategies to output measurable metrics. Here are real client briefs of campaigns managed by AetherDigital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div
                key={idx}
                id={`case-study-card-${idx}`}
                className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {study.niche}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 font-display">
                      {study.company}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h4 className="font-display font-bold text-base text-slate-900">
                      The Challenge:
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 mt-2">
                    <h4 className="font-display font-bold text-base text-slate-900">
                      Our Strategy:
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Performance stats bar */}
                <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-slate-100 text-center">
                  {study.metrics.map((met, mIdx) => (
                    <div key={mIdx} className="flex flex-col">
                      <span className="font-mono text-xl sm:text-2xl font-bold text-indigo-600">
                        {met.value}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 uppercase font-semibold mt-1">
                        {met.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section link */}
        <div className="mt-20 p-8 sm:p-12 rounded-[2rem] bg-slate-900 text-slate-100 text-center flex flex-col items-center gap-4 max-w-4xl mx-auto">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Need a bespoke strategy for your company?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg font-light leading-relaxed">
            Let us draft a personalized performance blueprint pointing out current optimization leaks in your organic and paid acquisition efforts.
          </p>
          <button
            id="services-page-cta-btn"
            onClick={() => {
              navigate('/contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold mt-2 transition-all cursor-pointer shadow-md"
          >
            Get Free Pipeline Evaluation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
