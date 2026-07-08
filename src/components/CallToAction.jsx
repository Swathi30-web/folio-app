import React from 'react';
import logo from '../assets/Logo.jpeg';
import img2 from '../assets/img2.png';

export default function CallToAction() {
  return (
    <section className="py-24 px-8 md:px-24 bg-white dark:bg-[#0F172A] transition-colors duration-300">
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center overflow-hidden rounded-[40px] bg-indigo-600 text-white md:flex-row shadow-2xl">

          {/* Mobile Mockup Area */}
          <div className="flex justify-center p-12 md:w-1/2">
            <div className="rounded-3xl bg-white/10 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex h-96 w-64 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-2xl">
                <img
                  src={img2}
                  alt="3D Mobile Mockup"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="p-12 md:w-1/2 md:pr-24 z-10">
            <div className="mb-4 flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 object-contain"
              />
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">
                04. Call to action
              </p>
            </div>

            <h2 className="mb-8 text-5xl font-black leading-tight">
              Auto-Updatable
              <br />
              Global Styleguide
            </h2>

            <button className="rounded-xl bg-white dark:bg-slate-900 px-8 py-4 font-bold text-indigo-600 dark:text-white transition hover:bg-indigo-50 dark:hover:bg-slate-800">
              Download Now
            </button>
          </div>

          {/* Decorative Pink Panel */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-0 w-1/3 rounded-l-[40px] bg-pink-300/30 dark:bg-pink-900/20" />
        </div>
      </div>
    </section>
  );
}