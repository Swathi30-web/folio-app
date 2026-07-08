import React from 'react';
import logo from '../assets/Logo.jpeg'; 
export default function CallToAction() {
  return (
    <section className="py-24 px-8 md:px-24 bg-white">
      <div className="container mx-auto">
        <div className="bg-indigo-600 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center text-white relative">
          
          {/* Mobile Mockup Area */}
          {/* Mobile Mockup Area */}
<div className="md:w-1/2 p-12 flex justify-center">
  <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm shadow-xl">
    <div className="w-64 h-96 bg-white rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
      {/*  */}
      <img 
        src="src/assets/img2.png" 
        alt="3D Mobile Mockup" 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

          {/* Text Content */}
          <div className="md:w-1/2 p-12 pr-24">
          <div className="flex items-center gap-3 mb-4">
  <img
    src={logo}
    alt="Logo"
    className="w-8 h-8 object-contain"
  />
  <p className="text-xs font-bold tracking-widest uppercase opacity-80">
    04. Call to action
  </p>
</div>

            <h2 className="text-5xl font-black mb-8 leading-tight">Auto-Updatable <br />Global Styleguide</h2>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition">
              Download Now
            </button>
          </div>

          {/* Decorative Pink Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-pink-300/30 rounded-l-[40px] z-0 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}