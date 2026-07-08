import React from 'react';
import SectionHeader from "../components/SectionHeader";

// 1. Import your images from the assets folder
// Make sure these filenames match EXACTLY (check if it's .png or .jpg)
import bentoImage from "../assets/img.png"; 
import icon1 from "../assets/img1.png"; 
import icon2 from "../assets/img2.png"; 

const cardData = [
  {
    id: 1,
    iconColor: 'bg-orange-400',
    text: 'Fully Editable',
    iconImage: icon1, // Use the icon1 import here
  },
  {
    id: 2,
    iconColor: 'bg-pink-400',
    text: 'High Resolution',
    iconImage: icon2, // Use the icon2 import here
  }
];
export default function OverviewSection() {
  return (
    <section id="overview-content" className="bg-white py-20 px-6 md:px-16 lg:px-24 w-full scroll-mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ==================== LEFT COLUMN: 3D Illustration & Slider Dots ==================== */}
        <div className="lg:col-span-5 flex flex-col items-center">
         
          {/* Circular Purple Background Wrapper */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 bg-purple-300 rounded-full flex justify-center items-center shadow-lg overflow-visible">
            
            <img 
  src={bentoImage} 
  alt="3D Visual Design System Layout" 
  className="w-[110%] h-auto object-contain transform -translate-x-2 drop-shadow-xl"
/>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex space-x-3 mt-10">
            {[1, 2, 3].map((_, index) => (
              <div 
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === 1 ? 'bg-indigo-600 w-6' : 'bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ==================== RIGHT COLUMN: Detailed Typography & Info ==================== */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          
          {/* Top Overview Badge Label */}
          <div className="flex space-x-4 items-center text-sm font-semibold tracking-wide">
            <span className="text-slate-400">01</span>
            <span className="text-indigo-600 uppercase">Overview</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight max-w-xl">
            The First Fully Editable, 3D Visual Design System.
          </h2>

          {/* Body Paragraph */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            Effortlessly combine different elements to create compelling compositions 
            that will surely help you tell a better story for your landing pages, websites, 
            portfolios, presentations, and more in just a matter of minutes.
          </p>

          {/* Highlighted Emphasized Bold Text with Fire Emoji */}
          <div className="flex items-start space-x-2 text-slate-900 pt-2">
            <span className="text-xl leading-none">🔥</span>
            <p className="font-extrabold text-base md:text-lg leading-snug max-w-md">
              The number of applications and use cases is nearly endless.
            </p>
          </div>

          {/* Bottom Feature Cards (2 Column Layout Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 w-full max-w-xl">
            {cardData.map((card) => (
              <div 
                key={card.id} 
                className="bg-white border border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center space-y-6 shadow-2xl shadow-slate-100/60 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Inner Circle Container for 3D Icon */}
                <div className={`w-24 h-24 rounded-full flex justify-center items-center shadow-inner ${card.iconColor} bg-opacity-70 relative`}>
              <img 
  src={card.iconImage} 
  alt={card.text} 
  className="w-14 h-14 object-contain drop-shadow-md transform hover:scale-110 transition-transform duration-300" 
/>
                </div>
                
                {/* Card Label */}
                <p className="text-indigo-600 text-base md:text-lg font-bold tracking-tight">
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
