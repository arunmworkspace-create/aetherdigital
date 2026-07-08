import React from 'react';
import { motion } from 'motion/react';
import { TEAM, ASSETS } from '../data';
import { Page } from '../types';
import { Sparkles, Award, Heart, ShieldAlert, Zap, Compass, Building, Linkedin, MapPin, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export default function AboutPage({ setCurrentPage }: AboutPageProps) {
  const values = [
    {
      title: 'Mathematical Rigor',
      desc: 'We replace guesses with statistics. If we cannot measure, split-test, or trace a campaign asset back to pipeline impact, we do not launch it.',
      icon: Compass,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      title: 'Aesthetic Honesty',
      desc: 'Visual design is a product feature, not mere makeup. We design beautiful, ultra-clean web views and high-end typography that project authority.',
      icon: Award,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    },
    {
      title: 'Hyper-Speed Moat',
      desc: 'In digital marketing, velocity beats perfection. We script, build, launch, and optimize in days, giving our clients immense market speed.',
      icon: Zap,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Kerala to the World',
      desc: 'We are proudly based in Infopark Kochi. We leverage local talent, regional work ethic, and cost-efficiency to execute global-scale campaigns.',
      icon: Heart,
      color: 'text-rose-600',
      bgColor: 'bg-rose-50'
    }
  ];

  return (
    <div id="about-page" className="bg-[#F1F5F9] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro Hero banner */}
        <div className="text-left mb-16 max-w-4xl flex flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
            Our Identity & Core Beliefs
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
            Bridging Kerala's Heritage with <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">Global Digital Standards</span>.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mt-2 font-light">
            We founded AetherDigital to escape the typical noisy "social media management agency" mold. We do not write empty captions or post stock graphics. We design scalable acquisition funnels for ambitious brands looking to scale.
          </p>
        </div>

        {/* Our Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12 border-t border-slate-200">
          {/* Text block */}
          <div className="lg:col-span-7 text-left flex flex-col gap-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              The Genesis of the Kochi Studio
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
              AetherDigital was established with a singular focus: <strong>Execution over promises</strong>. The digital space is flooded with agencies selling visual vanity metrics. We noticed a major gap: businesses in Kerala and national companies targeting Indian demographics needed high-fidelity copywriting and quantitative marketing logic.
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
              Based in the technology corridor of Infopark Kochi, we built an elite, multi-disciplinary studio of search architects, conversion strategists, and graphic designers. By keeping our team small and specialized, we avoid bureaucratic layers, allowing us to deploy client assets at lightning speed.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-slate-900">30+</span>
                <span className="text-xs text-slate-400 font-mono">Brands Scaled</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-slate-900">₹15Cr+</span>
                <span className="text-xs text-slate-400 font-mono">Spent & Optimized</span>
              </div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-mono text-xl font-bold text-slate-900">92%</span>
                <span className="text-xs text-slate-400 font-mono">Client Retention</span>
              </div>
            </div>
          </div>

          {/* Styled Photo Frame representing Kochi environment */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl bg-slate-900 group">
              <img
                src={ASSETS.kochiWorkspace}
                alt="Our Creative Studio in Kochi"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-left">
                <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-mono uppercase font-bold tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Athulya Block, Infopark
                </div>
                <h4 className="text-slate-100 font-display font-semibold text-sm mt-1">
                  Our core operations and creative laboratory.
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Core Values */}
        <div className="mt-24 pt-20 border-t border-slate-200 text-left">
          <div className="flex flex-col gap-3 max-w-xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
              Operating Principles
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Values That Drive Every Metric
            </h2>
            <p className="text-slate-500 text-sm">
              We do not believe in bureaucratic guidelines. We operate by four simple standards to deliver outsized results to our brand partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  id={`value-card-${idx}`}
                  className="bg-white p-6.5 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between hover:border-indigo-100 transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    <div className={`w-10 h-10 rounded-xl ${val.bgColor} ${val.color} flex items-center justify-center`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 tracking-tight">
                      {val.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: The Minds Behind Aether */}
        <div className="mt-32 pt-20 border-t border-slate-200 text-left">
          <div className="flex flex-col gap-3 max-w-xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
              Leadership team
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              The Minds Behind Aether
            </h2>
            <p className="text-slate-500 text-sm">
              A collective of quantitative marketers, conversion writers, and semantic optimization architects focused entirely on client pipeline velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.name}
                id={`team-card-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm group hover:border-indigo-200 transition-colors flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="aspect-[4/5] w-full bg-slate-100 overflow-hidden relative">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-15 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  {/* Floating Identity tag */}
                  <div className="absolute bottom-4 left-5 text-left">
                    <h3 className="font-display font-bold text-lg text-white tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs text-indigo-300 font-mono tracking-wider font-semibold uppercase mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Bio Footer info */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left">
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {member.bio}
                  </p>
                  
                  {/* LinkedIn alignment */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-[10px] font-mono font-bold text-slate-300">
                      STUDIO LEADER // 0{idx + 1}
                    </span>
                    <a
                      href={member.linkedinUrl}
                      className="w-8 h-8 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      title="Connect on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Life at Aether section */}
        <div className="mt-32 pt-20 border-t border-slate-200 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col items-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
                Studio Culture
              </span>
              <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight leading-tight">
                Life at the Aether Studio
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Our space overlooking the scenic waterways and modern structures of Kakkanad is designed to stimulate high creative focus and peaceful coding environments.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                We work in continuous sprint loops, breaking for rich South Indian filter coffee, visual alignment sessions, and strategic performance debates. No artificial work hours, just raw accountability to client metrics.
              </p>
              <button
                id="about-join-us-btn"
                onClick={() => {
                  setCurrentPage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs transition-all duration-300 shadow-md cursor-pointer mt-2"
              >
                Collab with our studio
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Visual Mosaic layout */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-[2rem] bg-slate-200 overflow-hidden border border-slate-300/40 relative group">
                <img
                  src={ASSETS.kochiWorkspace}
                  alt="Aether Lab"
                  className="w-full h-full object-cover brightness-95 group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-3 left-4 text-left font-mono text-[9px] text-slate-100 font-semibold uppercase">
                  Workspace Desk
                </div>
              </div>
              <div className="aspect-square rounded-[2rem] bg-slate-200 overflow-hidden border border-slate-300/40 relative group translate-y-6">
                <div className="w-full h-full bg-gradient-to-br from-indigo-900 to-slate-950 flex flex-col justify-between p-6 text-left">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center text-indigo-400">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono text-indigo-300 uppercase font-semibold">Environment</div>
                    <h4 className="text-sm font-semibold font-display text-white mt-1">
                      Kochi Infopark Tech Corridor
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
