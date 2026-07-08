import React from 'react';
import SectionHeader from "../components/SectionHeader";

// Correctly importing images from the assets folder
import bentoImage from "../assets/img.png";
import icon1 from "../assets/img1.png";
import icon2 from "../assets/img2.png";

const cardData = [
  {
    id: 1,
    iconColor: 'bg-orange-400',
    text: 'Fully Editable',
    iconImage: icon1, 
  },
  {
    id: 2,
    iconColor: 'bg-pink-400',
    text: 'High Resolution',
    iconImage: icon2,
  }
];

export default function OverviewSection() {
  return (
    // section-ல் dark:bg-[#0F172A] சேர்த்து பின்னணி மாற்றப்பட்டுள்ளது
    <section id="overview-content" className="bg-white dark:bg-[#0F172A] py-20 px-6 md:px-16 lg:px-24 w-full scroll-mt-20 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ==================== LEFT COLUMN ==================== */}
        <div className="lg:col-span-5 flex flex-col items-center">
          {/* வட்டத்தின் பின்னணி Dark mode-ல் சற்று வெளிச்சமாக மாற்றப்பட்டுள்ளது */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 bg-purple-300 dark:bg-purple-900/30 rounded-full flex justify-center items-center shadow-lg overflow-visible">
            <img 
              src={bentoImage} 
              alt="3D Visual Design System Layout" 
              className="w-[110%] h-auto object-contain transform -translate-x-2 drop-shadow-xl"
            />
          </div>

          <div className="flex space-x-3 mt-10">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === 1 ? 'bg-indigo-600 dark:bg-[#818CF8] w-6' : 'bg-slate-200 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ==================== RIGHT COLUMN ==================== */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex space-x-4 items-center text-sm font-semibold tracking-wide">
            <span className="text-slate-400 dark:text-slate-500">01</span>
            <span className="text-indigo-600 dark:text-[#818CF8] uppercase">Overview</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight max-w-xl">
            The First Fully Editable, 3D Visual Design System.
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Effortlessly combine different elements to create compelling compositions 
            that will surely help you tell a better story.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 w-full max-w-xl">
            {cardData.map((card) => (
              <div 
                key={card.id} 
                className="bg-white dark:bg-[#1E293B] border border-slate-100 dark:border-slate-700 rounded-[32px] p-8 flex flex-col items-center justify-center space-y-6 shadow-2xl shadow-slate-100/60 dark:shadow-none hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-24 h-24 rounded-full flex justify-center items-center shadow-inner ${card.iconColor} bg-opacity-70 dark:bg-opacity-50 relative`}>
                  <img 
                    src={card.iconImage} 
                    alt={card.text} 
                    className="w-14 h-14 object-contain drop-shadow-md transform hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <p className="text-indigo-600 dark:text-[#818CF8] text-base md:text-lg font-bold tracking-tight">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}