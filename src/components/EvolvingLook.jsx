import React from 'react';
import logo from '../assets/Logo.jpeg'; 

export default function EvolvingLook() {
  const features = [
    { title: "Auto-updatable Global Styleguide", color: "bg-pink-200 dark:bg-pink-900" },
    { title: "The number of applications and use cases is nearly endless.", color: "bg-indigo-200 dark:bg-indigo-900" },
    { title: "Auto-updatable Global Styleguide", color: "bg-amber-200 dark:bg-amber-900" }
  ];

  return (
    <section className="py-24 px-8 md:px-24 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-8 h-8 object-contain" 
            />
            <p className="text-xs font-bold tracking-widest text-indigo-600 dark:text-[#818CF8] uppercase">
              03. Visual Identity
            </p>
          </div>
          <h2 className="text-5xl font-black tracking-tight">Evolving the <br />look & feel.</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm">
            Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
          </p>
          <h3 className="text-7xl font-black text-indigo-600 dark:text-[#818CF8]">80+</h3>
          <p className="font-bold">UI Elements</p>
        </div>

        {/* Right Feature List */}
        <div className="bg-white dark:bg-[#1E293B] border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-100 dark:shadow-none rounded-3xl p-8 space-y-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-[#0F172A] rounded-2xl transition">
              <div className={`w-12 h-12 rounded-full ${f.color}`} />
              <p className="font-bold text-lg">{f.title}</p>
            </div>
          ))}
          <button className="w-full bg-indigo-600 dark:bg-[#4F46E5] text-white py-4 rounded-xl font-bold hover:bg-indigo-700 dark:hover:bg-[#4338CA] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}