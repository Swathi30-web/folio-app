import React from "react";
import { ArrowRight } from "lucide-react";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import logo from '../assets/Logo.jpeg'; 

export default function RecentWorks() {
  const works = [
    {
      title: "Bento 3D Illustration",
      // Dark mode-ல் நிறம் மாறுவதற்காக தற்காலிகமாக வகுப்பு சேர்க்கப்பட்டுள்ளது
      color: "bg-amber-300 dark:bg-amber-800",
      featured: true,
      img: img3,
    },
    {
      title: "Bento Vol. 3",
      color: "bg-blue-200 dark:bg-blue-900",
      featured: false,
      img: img4,
    },
  ];

  return (
    <section className="py-24 px-8 md:px-24 bg-white dark:bg-[#0F172A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
              <p className="text-sm font-bold text-indigo-600 dark:text-[#818CF8] uppercase tracking-widest">
                04. You may also like
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight">
              Recent Works
            </h2>
          </div>

          <button className="hidden md:flex w-16 h-16 rounded-full bg-indigo-600 text-white items-center justify-center hover:bg-indigo-700 transition shadow-lg">
            <ArrowRight size={28} />
          </button>
        </div>

        {/* Description */}
        <div className="max-w-lg mb-14 text-center md:text-left">
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Agency is a full-service agency, busy designing and building
            beautiful digital products, brands, and experiences.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {works.map((work, index) => (
            <div key={index} className="group">
              <div
                className={`h-[400px] ${work.color} rounded-[40px] p-8 flex flex-col justify-between mb-6 relative overflow-hidden transition-colors`}
              >
                {/* Image */}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Arrow */}
                <button className="w-12 h-12 bg-white dark:bg-[#0F172A] text-slate-900 dark:text-white rounded-full flex items-center justify-center self-end hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
                {work.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
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