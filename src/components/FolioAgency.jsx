import React from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
// Make sure to import your logo path correctly
import logo from '../assets/Logo.jpeg'; 

export default function FolioAgency() {
  return (
    <section className="relative w-full bg-[#1e223d] text-white py-24 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden rounded-t-[50px] md:rounded-t-[80px]">
      
      {/* Logo in the top-left corner */}
      <div className="absolute top-8 left-8 md:top-12 md:left-16 z-20">
        <img 
          src={logo} 
          alt="Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>

      {/* Background Decorative Abstract Swirl Line */}
      <div className="absolute top-12 left-6 w-full h-full pointer-events-none opacity-20 hidden md:block z-0">
        <svg viewBox="0 0 600 600" className="w-[50%] h-auto text-pink-300 stroke-current fill-none stroke-[2]">
          <path d="M 0 100 C 50 50, 100 150, 150 100 C 200 50, 120 250, 250 200 C 350 150, 300 400, 400 350" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* TOP BADGE & HEADLINE */}
        <div className="space-y-3 mb-16 px-2 text-center">
  <div className="flex items-center justify-center space-x-3 text-xs font-bold tracking-widest text-slate-400">
    <span>02.</span>
    <span className="uppercase">Folio Agency</span>
  </div>

  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
    By the Numbers.
  </h2>
</div>
        

        {/* STATS GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl px-2">
          
          {/* STAT 1 */}
          <div className="flex flex-col space-y-6 border-b border-slate-700/50 pb-8 md:border-b-0 md:pb-0">
            <h3 className="text-7xl md:text-8xl font-black text-white tracking-tighter">20</h3>
            <p className="text-lg font-bold text-white flex items-center gap-2">
              Pre-build Scenes <span className="text-orange-400">🔥</span>
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bento is the first fully editable, 3D visual design system with global auto-updatable style guides built right in Figma.
            </p>
            <button className="flex items-center space-x-3 text-xs font-bold tracking-wider uppercase hover:text-indigo-400 transition-colors w-fit pt-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
                <ArrowDown size={14} />
              </div>
              <span>Download</span>
            </button>
          </div>

          {/* STAT 2 */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-7xl md:text-8xl font-black text-white tracking-tighter">
              40<span className="text-indigo-500">+</span>
            </h3>
            <p className="text-lg font-bold text-white">Scene Objects</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bento is the first fully editable, 3D visual design system with global auto-updatable style guides built right in Figma.
            </p>
            <button className="flex items-center space-x-3 text-xs font-bold tracking-wider uppercase hover:text-indigo-400 transition-colors w-fit pt-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-md">
                <ArrowDown size={14} />
              </div>
              <span>Download</span>
            </button>
          </div>
        </div>

        {/* BOTTOM TAB INDICATORS */}
        <div className="mt-16 max-w-3xl border-b border-slate-700/50 pb-4 overflow-x-auto scrollbar-none">
          <div className="flex justify-between md:grid md:grid-cols-4 min-w-[340px] text-center md:text-left text-xs md:text-sm font-bold tracking-wide text-slate-400 px-2">
            <span className="cursor-pointer hover:text-white transition-colors">Overview</span>
            <span className="text-white relative pb-4 cursor-pointer whitespace-nowrap">
              Features
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-indigo-600 rounded-full" />
              <span className="absolute bottom-[-1.5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full border border-indigo-600" />
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">Highlights</span>
            <span className="cursor-pointer hover:text-white transition-colors">Compatibility</span>
          </div>
        </div>

        {/* OVERLAPPING 3D SLIDER GRAPHICS */}
        <div className="relative mt-20 w-full flex justify-center items-center px-2">
          <button className="absolute left-0 md:left-4 lg:left-8 z-30 w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-all">
            <ArrowLeft size={18} />
          </button>

          <div className="relative w-full max-w-3xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] rounded-[32px] md:rounded-[40px] overflow-visible flex items-center justify-center">
            <div className="absolute left-0 bottom-[5%] w-[58%] h-[82%] bg-amber-400 rounded-[24px] md:rounded-[40px] z-10 transform -rotate-2 shadow-xl" />
            <div className="absolute right-0 top-[5%] w-[62%] h-[86%] bg-purple-400 rounded-[24px] md:rounded-[40px] z-0 transform rotate-1 shadow-xl" />

            <div className="relative z-20 w-[85%] max-w-xl transform hover:scale-[1.02] transition-transform duration-500 p-2">
              <img 
                src="src/assets/img1.png" 
                alt="Bento Grid Layout" 
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]" 
              />
            </div>
          </div>

          <button className="absolute right-0 md:right-4 lg:right-8 z-30 w-10 h-10 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-indigo-700 transition-all">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}