import React from 'react';

export default function ByTheNumbers() {
  const stats = [
    { num: "20", title: "Pre-build Scenes", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." },
    { num: "40+", title: "Scene Objects", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." },
    { num: "150+", title: "Total Elements", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." },
    { num: "500+", title: "Happy Clients", desc: "Bento is the first fully editable, 3D visual design system with global auto-updatable style guides." }
  ];

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
          {stats.map((item, i) => (
            <div key={i} className="flex flex-col space-y-4">
              <h3 className="text-8xl font-black">{item.num}</h3>
              <p className="text-lg font-bold">{item.title} {i === 0 && "🔥"}</p>
              <p className="text-slate-400 text-sm max-w-sm">{item.desc}</p>
              {/* Download button removed here */}
            </div>
          ))}
        </div>

        {/* 3D Slider Area */}
        <div className="relative flex items-center justify-center">
          {/* Slider content here */}
        </div>
      </div>
    </section>
  );
}