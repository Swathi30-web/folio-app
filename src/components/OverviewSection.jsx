import React from 'react';

const cardData = [
  {
    id: 1,
    iconColor: 'bg-orange-400',
    text: 'Fully Editable',
    iconImage: '/img1.png', 
  },
  {
    id: 2,
    iconColor: 'bg-pink-400',
    text: 'High Resolution',
    iconImage: '/img2.png',
  }
];

export default function OverviewSection() {
  return (
    <section id="overview-content" className="bg-white py-20 px-6 md:px-16 lg:px-24 w-full scroll-mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 bg-purple-300 rounded-full flex justify-center items-center shadow-lg overflow-visible">
            <img 
              src="/img.png" 
              alt="3D Visual Design System" 
              className="w-[110%] h-auto object-contain transform -translate-x-2 drop-shadow-xl"
            />
          </div>

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

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="flex space-x-4 items-center text-sm font-semibold tracking-wide">
            <span className="text-slate-400">01</span>
            <span className="text-indigo-600 uppercase">Overview</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight max-w-xl">
            The First Fully Editable, 3D Visual Design System.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 w-full max-w-xl">
            {cardData.map((card) => (
              <div 
                key={card.id} 
                className="bg-white border border-slate-100 rounded-[32px] p-8 flex flex-col items-center justify-center space-y-6 shadow-2xl"
              >
                <div className={`w-24 h-24 rounded-full flex justify-center items-center shadow-inner ${card.iconColor} bg-opacity-70`}>
                  <img 
                    src={card.iconImage} 
                    alt={card.text} 
                    className="w-14 h-14 object-contain" 
                  />
                </div>
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
