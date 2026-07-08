import React, { useState } from 'react';
import { Sparkles, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handlePageLink = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-400 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: Brand & Desc */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Aether<span className="text-indigo-400">Digital</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Engineered execution for performance marketing, SEO mastery, and visual architectures. Bridging Kerala's heritage with global digital standards from our Infopark Kochi studio.
            </p>
            <div className="text-xs font-mono text-slate-500 mt-2">
              📍 Athulya Building, Infopark Phase 1, Kakkanad, Kochi, Kerala 682030
            </div>
          </div>

          {/* Col 2: Services / Solutions */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-slate-100 text-sm tracking-wider uppercase">Solutions</h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <button
                  onClick={() => handlePageLink('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Performance Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  SEO & Search Mastery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Creative Strategy & Visuals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('services')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Social Ecosystems
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-slate-100 text-sm tracking-wider uppercase">Company</h4>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li>
                <button
                  onClick={() => handlePageLink('home')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Home Landing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Our Methodology & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  The Minds Behind Aether
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageLink('contact')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-slate-100 text-sm tracking-wider uppercase">Weekly Insights</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe for tactical performance updates, growth templates, and search breakdown reports. No spam.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="co-founder@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 focus:outline-none rounded-xl py-3 px-4 text-sm text-slate-100 placeholder-slate-600 transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors text-white cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscription successful! Growth reports heading your way.</span>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} AetherDigital LLP. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span className="text-indigo-500 font-bold">Kochi, Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
