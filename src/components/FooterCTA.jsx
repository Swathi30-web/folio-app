import React from 'react';
import logo from '../assets/Logo.jpeg'; 
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-20 px-8 md:px-24 bg-white dark:bg-[#0F172A] transition-colors duration-300">
      {/* 1. FooterCTA Section */}
      <div className="bg-indigo-600 dark:bg-indigo-900 rounded-[40px] overflow-hidden text-white mb-20">
        <div className="p-12 md:p-24 text-center border-b border-white/10">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">A</div>
            <p className="font-bold">👋 Say hello</p>
            <h2 className="text-3xl md:text-4xl font-bold max-w-lg leading-snug">
              A design team building a curated marketplace for UI designers.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 p-12 md:p-24 items-center gap-8">
          <h3 className="text-5xl md:text-6xl font-black leading-tight">
            Let's talk <br />about your <br />next project
          </h3>
          <div className="flex flex-col md:items-end justify-center gap-6">
            <div className="flex items-center gap-4 bg-white/10 p-6 rounded-2xl w-full md:w-auto">
              <MessageCircle className="w-10 h-10 text-lime-300" />
              <p className="font-bold text-lg">Invest in your designs <br />today!</p>
            </div>
            <button className="w-16 h-16 bg-white dark:bg-slate-900 text-indigo-600 dark:text-white rounded-full flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              <ArrowRight size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Footer Links Section */}
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-2 mb-6">
           <img 
              src={logo} 
              alt="Logo" 
              className="w-8 h-8 object-contain"
            />
          <span className="text-slate-900 dark:text-white font-bold">folio.</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mb-8">
          Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
        </p>
        <nav className="flex gap-8 mb-12">
          {['About', 'Work', 'Services', 'Jobs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-900 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-[#818CF8] transition">
              {item}
            </a>
          ))}
        </nav>
        
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 pt-8 border-t border-slate-100 dark:border-slate-800">
          <p>© 2020, UI8 LLC.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <span>Follow us</span>
            <div className="flex gap-4 font-bold text-slate-900 dark:text-slate-300">
              <a href="#" className="hover:text-indigo-600">FB</a>
              <a href="#" className="hover:text-indigo-600">YT</a>
              <a href="#" className="hover:text-indigo-600">IG</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}