import React from "react";
import { ArrowRight } from "lucide-react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import logo from '../assets/Logo.jpeg'; 
export default function RecentWorks() {
  const works = [
    {
      title: "Bento 3D Illustration",
      color: "bg-amber-300",
      featured: true,
      img: img3,
    },
    {
      title: "Bento Vol. 3",
      color: "bg-blue-200",
      featured: false,
      img: img4,
    },
  ];

  return (
    <section className="py-24 px-8 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
       <div className="text-center space-y-4">
  <div className="flex items-center justify-center gap-3">
    <img
      src={logo}
      alt="Logo"
      className="w-8 h-8 object-contain"
    />
    <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest">
      04. You may also like
    </p>
  </div>

  <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight">
    Recent Works
  </h2>
</div>

          <button className="w-16 h-16 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition shadow-lg">
            <ArrowRight size={28} />
          </button>
        </div>

        {/* Description */}
        <div className="max-w-lg mb-14">
          <p className="text-lg text-slate-500 leading-relaxed">
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands, and experiences.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <div key={index} className="group">
              <div
                className={`h-[400px] ${work.color} rounded-[40px] p-8 flex flex-col justify-between mb-6 relative overflow-hidden`}
              >
                {/* Featured Badge */}
                {work.featured && (
                  <span className="bg-white/70 px-4 py-2 rounded-full text-xs font-bold w-fit">
                  
                  </span>
                )}

                {/* Image */}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Arrow */}
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center self-end hover:bg-slate-100 transition">
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{work.title}</h3>

              {/* Description */}
              <p className="text-slate-500 text-sm max-w-sm">
                Agency is a full-service agency, busy designing and building
                beautiful digital products.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}