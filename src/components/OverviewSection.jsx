import React from 'react';

// Use these imports. If they turn grey/unused, the path is wrong!
i
const cardData = [
  {
    id: 1,
    iconColor: 'bg-orange-400',
    text: 'Fully Editable',
    iconImage: icon1, // Use the imported variable
  },
  {
    id: 2,
    iconColor: 'bg-pink-400',
    text: 'High Resolution',
    iconImage: icon2, // Use the imported variable
  }
];

export default function OverviewSection() {
  return (
    <section id="overview-content" className="bg-white py-20 px-6 md:px-16 lg:px-24 w-full scroll-mt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 bg-purple-300 rounded-full flex justify-center items-center shadow-lg overflow-visible">
         
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 w-full max-w-xl">
            {cardData.map((card) => (
              <div key={card.id} className="bg-white border border-slate-100 rounded-[32px] p-8 flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full flex justify-center items-center ${card.iconColor} bg-opacity-70`}>
                  
                </div>
                <p className="text-indigo-600 text-base md:text-lg font-bold">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
