import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, Building, MessageSquare, Info } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'performance-marketing',
    budget: '₹1L - ₹3L/month',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'performance-marketing',
        budget: '₹1L - ₹3L/month',
        message: '',
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact-page" className="bg-[#F1F5F9] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Banner Title */}
        <div className="text-left mb-16 max-w-3xl flex flex-col items-start gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 font-mono">
            Get in touch
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
            We'd love to <br className="hidden sm:inline" />
            <span className="text-indigo-600">hear from you</span>.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mt-2 font-light">
            Have a project or campaign you want to scale? Reach out for a comprehensive digital channels audit and data assessment report.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 text-left"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 font-display">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Arjun Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-900 transition-all placeholder-slate-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 font-display">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        placeholder="arjun@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-900 transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-company" className="text-xs font-bold text-slate-700 font-display">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-900 transition-all placeholder-slate-400"
                      />
                    </div>

                    {/* Service Target */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-service" className="text-xs font-bold text-slate-700 font-display">
                        What solution are you targeting?
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-800 transition-all cursor-pointer"
                      >
                        <option value="performance-marketing">Performance Marketing</option>
                        <option value="search-mastery">SEO & Search Mastery</option>
                        <option value="creative-strategy">Creative Strategy & Visuals</option>
                        <option value="social-ecosystems">Social Ecosystems</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-700 font-display">
                      Estimated Monthly Marketing Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-1">
                      {['< ₹1L/mo', '₹1L - ₹3L/mo', '₹3L - ₹10L/mo', '₹10L+/mo'].map((bTier) => {
                        const isSelected = formData.budget === bTier;
                        return (
                          <button
                            type="button"
                            key={bTier}
                            id={`budget-tier-${bTier.replace(/[^a-zA-Z0-9]/g, '')}`}
                            onClick={() => setFormData((prev) => ({ ...prev, budget: bTier }))}
                            className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-center ${
                              isSelected
                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-350 hover:bg-slate-100/50'
                            }`}
                          >
                            {bTier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 font-display">
                      Tell us about your pipeline bottlenecks *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="e.g. We are seeing high CPC rates on Meta, or we want to establish top positions for organic queries in luxury retail niches..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-900 transition-all placeholder-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto self-start mt-4 px-8 py-4 rounded-full bg-slate-900 hover:bg-indigo-600 text-white font-bold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Initializing Audit Pipeline...
                      </>
                    ) : (
                      <>
                        Request Free Campaign Audit
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 gap-5"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
                      Campaign Audit Request Logged!
                    </h2>
                    <p className="text-slate-500 text-sm max-w-md mt-2">
                      Thank you for submitting. Our Lead Media Buyer (Arjun) and Search Architect (Kiran) will review your digital footprint and reach back within 24 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs mt-4 transition-colors cursor-pointer"
                  >
                    Submit another brief
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Information & Coordinate Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            {/* Contact Details Card */}
            <div className="bg-slate-900 text-slate-100 p-8 rounded-[2rem] border border-slate-800 shadow-lg flex flex-col gap-6">
              <h3 className="font-display font-bold text-lg tracking-tight text-white border-b border-slate-800 pb-3">
                Direct Coordinates
              </h3>
              
              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">Email Studio</span>
                    <a href="mailto:hello@aetherdigital.in" className="text-sm font-medium text-slate-100 hover:text-indigo-400 transition-colors mt-0.5">
                      hello@aetherdigital.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">Direct Dial</span>
                    <a href="tel:+914842984210" className="text-sm font-medium text-slate-100 hover:text-indigo-400 transition-colors mt-0.5">
                      +91 484 298 4210
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-800 border border-slate-700/60 text-indigo-400 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-semibold">Infopark Studio</span>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      Athulya Building, Infopark Phase 1, Kakkanad, Kochi, Kerala 682030
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Kochi Map Section */}
            <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center">
                  <Building className="w-4 h-4" />
                </div>
                <h4 className="font-display font-semibold text-sm text-slate-900">
                  Infopark Kochi Coordinates
                </h4>
              </div>

              {/* Vector representation map */}
              <div className="relative aspect-[1.8/1] w-full rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden">
                {/* SVG stylistic digital map grid */}
                <svg className="absolute inset-0 w-full h-full text-slate-200" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Decorative roads/lines */}
                  <path d="M -50 40 Q 100 80 300 30" fill="none" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
                  <path d="M 120 -20 Q 150 100 180 200" fill="none" stroke="#cbd5e1" strokeWidth="4" />
                  {/* Water body indicator */}
                  <path d="M 240 120 Q 260 140 280 160 T 350 170" fill="none" stroke="#bae6fd" strokeWidth="16" strokeLinecap="round" opacity="0.4" />
                </svg>

                {/* Pin indicator */}
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-12 bg-slate-900 text-slate-100 text-[10px] font-mono px-2 py-1 rounded-md shadow-lg border border-slate-800 shrink-0 whitespace-nowrap flex items-center gap-1 z-10">
                    AetherDigital
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="w-5 h-5 bg-indigo-600 rounded-full border-4 border-white shadow-xl animate-bounce flex items-center justify-center relative">
                    <div className="absolute -inset-2 bg-indigo-500/20 rounded-full animate-ping pointer-events-none" />
                  </div>
                </div>

                {/* Coordinates indicator label */}
                <div className="absolute bottom-2.5 right-3 text-[9px] font-mono text-slate-400">
                  Lat 10.0094° N, Lon 76.3631° E
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <Info className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                <span>Our studio is inside the Athulya Phase 1 IT block. Visitor parking is available at the south terminal entrance.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
