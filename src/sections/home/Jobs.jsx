import { ArrowRight } from 'lucide-react';
import Eyebrow from '../../components/Eyebrow';
import MonitorArt from '../../components/illustrations/MonitorArt';
import logo from '../../assets/Logo.jpeg';

const JOBS = [
  { title: 'Graphic Designer', exp: '2 years experience', active: false, count: 2 },
  { title: 'Visual Designer', exp: '2 years experience', active: true, count: null },
  { title: 'Art Director', exp: '2 years experience', active: false, count: null },
  { title: 'Web Designer', exp: '2 years experience', active: false, count: 6 },
];

export default function Jobs() {
  return (
    // Updated background and text color classes
    <section id="jobs" className="bg-[#FAF9FF] dark:bg-[#0F172A] py-16 md:py-24 text-[#1E1A3A] dark:text-gray-100 font-sans overflow-hidden transition-colors">
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-12 gap-8 items-start relative">
        
        {/* Linha decorativa fluida - Opacidade reduzida no dark mode */}
        <div className="absolute left-[25%] top-0 bottom-0 w-[35%] pointer-events-none opacity-30 dark:opacity-10 hidden lg:block">
          <svg className="w-full h-full" viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M300 0C200 150 100 100 200 300C300 500 50 450 150 800" stroke="#C0A5EC" strokeWidth="1.5" />
          </svg>
        </div>

        {/* --- Coluna da Esquerda --- */}
        <div className="col-span-12 lg:col-span-4 space-y-5 lg:sticky lg:top-10 relative pl-0 md:pl-6">
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain rounded-xl shadow-sm" />
              <span className="text-gray-400 dark:text-gray-500 text-base font-semibold">05.</span>
              <span className="text-[#4F46E5] dark:text-[#818CF8] text-base font-semibold">We are hiring</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E1A3A] dark:text-white">
              Jobs
            </h2>
          </div>
          
          <p className="text-sm text-gray-400 dark:text-gray-400 max-w-xs leading-relaxed relative z-10">
            Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
          </p>
          
          <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#DBCBF6] dark:bg-[#312E81] flex items-center justify-center text-[#4F46E5] dark:text-[#A5B4FC]">
              <ArrowRight size={12} className="transform -rotate-12" />
            </div>
            <span>Available<br />jobs</span>
          </div>
        </div>

        {/* --- Coluna da Direita --- */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4 w-full">
          {JOBS.map((job) => (
            <div
              key={job.title}
              className={`rounded-[1.5rem] p-5 md:p-6 flex items-center justify-between transition-all duration-300 relative overflow-hidden group min-h-[120px] md:min-h-[130px]
                ${job.active 
                  ? 'bg-[#1E1A3A] dark:bg-[#4F46E5] text-white' 
                  : 'bg-white dark:bg-[#1E293B] text-[#1E1A3A] dark:text-white shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-700'
                }`}
            >
              <div className="flex flex-col justify-between h-full space-y-4 z-10 flex-1">
                <div className="space-y-1">
                  <h4 className="text-xl md:text-2xl font-bold flex items-center gap-2 tracking-tight">
                    {job.title}
                    {job.count && (
                      <span className="inline-flex items-center justify-center bg-[#2563EB] text-white text-[10px] font-bold w-4 h-4 rounded-full">
                        {job.count}
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-400">
                    {job.exp}
                  </p>
                </div>
                
                <div className={`transition-transform duration-300 group-hover:translate-x-1 ${job.active ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </div>
              </div>

              {job.active && (
                <div className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 w-36 md:w-40 h-auto z-0 transform scale-100">
                  <MonitorArt className="w-full h-full drop-shadow-md" screen={job.active ? "#C7D2FE" : "#EEF0FF"} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}