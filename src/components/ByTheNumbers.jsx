import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

export default function ByTheNumbers() {
  return (
    <section className="bg-[#1e223d] text-white py-24 px-8 md:px-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">02. Folio Agency</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">By the Numbers.</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {[
            { num: "20", title: "Pre-build Scenes", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." },
            { num: "40+", title: "Scene Objects", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col space-y-4">
              <h3 className="text-8xl font-black">{item.num}</h3>
              <p className="text-lg font-bold">{item.title} {i === 0 && "🔥"}</p>
              <p className="text-slate-400 text-sm max-w-sm">{item.desc}</p>
              <button className="flex items-center gap-3 text-sm font-bold uppercase mt-4">
                <span className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center"><ArrowDown size={16} /></span>
                Download
              </button>
            </div>
          ))}
        </div>

        {/* 3D Slider Area */}
        <div className="relative flex items-center justify-center">
          <button className="absolute left-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center"><ArrowLeft /></button>
          
          <div className="relative w-full max-w-3xl h-[400px] flex items-center justify-center">
            {/* Background Layers */}
            <div className="absolute w-[60%] h-[80%] bg-amber-400 rounded-[40px] -rotate-3" />
            <div className="absolute w-[60%] h-[80%] bg-purple-400 rounded-[40px] rotate-2" />
            
            {/* Main Content Card */}
            <div className="relative z-10 w-[70%] bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
              <h4 className="text-xl font-bold mb-4">UI Elements Mockup</h4>
              <div className="bg-slate-100 h-32 rounded-lg flex items-center justify-center">Laptop Graphic</div>
            </div>
          </div>

          <button className="absolute right-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center"><ArrowRight /></button>
        </div>
      </div>
    </section>
  );
}