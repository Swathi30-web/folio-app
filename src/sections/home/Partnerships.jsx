import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import ProjectCard from '../../components/ProjectCard';
import CharacterArt from '../../components/illustrations/CharacterArt';
import BentoIcon from '../../components/illustrations/BentoIcon';
import logo from '../../assets/Logo.jpeg';

export default function Partnerships() {
  return (
    // Added dark:bg-[#0F172A] and dark:text-gray-100
    <section id="work" className="py-16 md:py-24 bg-white dark:bg-[#0F172A] text-[#1E1A3A] dark:text-gray-100 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
         <img 
            src={logo} 
            alt="Logo" 
            className="w-10 h-10 object-contain rounded-xl shadow-sm"
         />
        
        {/* --- Cabeçalho Superior --- */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 relative">
          <div className="lg:absolute lg:right-0 lg:top-0">
            <Button 
              as={Link} 
              to="/contact" 
              className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md"
            >
              Contact Us
            </Button>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <Eyebrow index="04" label="Famous Projects" className="text-[#4F46E5] dark:text-[#818CF8] justify-center" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Partnerships
            </h2>
            {/* Dark mode gray text adjusted */}
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed pt-2 mx-auto">
              Agency is a full-service agency, busy designing and building beautiful digital
              products, brands, and experiences.
            </p>
          </div>
        </div>

        {/* --- Bento Layout --- */}
        <div className="space-y-24 md:space-y-32 mt-16 md:mt-24">
          
          {/* Example Item (Apply these classes to your other blocks) */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-4 space-y-4 order-2 lg:order-1">
              <span className="inline-block bg-[#EEF2FF] dark:bg-[#1E1B4B] text-[#6366F1] dark:text-[#A5B4FC] text-xs font-bold px-3 py-1.5 rounded-full">
                Featured Product
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                Sapiens: The Free Character Builder App.
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
                Beautiful library of modular, component-based character illustrations free to use for all your personal or client projects.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2 relative">
              <ProjectCard
                bg="bg-[#D9EFFF] dark:bg-[#1E293B]" // Darker bg for cards
                art={<CharacterArt className="w-full max-w-md h-auto mx-auto" />}
                className="w-full aspect-[16/10] rounded-[2.5rem] flex items-center justify-center p-8 relative overflow-hidden group shadow-sm"
              />
              {/* Dark mode button styling */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-[#1E293B] border border-[#1E1A3A]/20 dark:border-white/10 hover:border-[#1E1A3A] dark:hover:border-white text-[#1E1A3A] dark:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Note: Apply the dark:bg-[#1E293B] and dark:text-gray-400 logic to the remaining blocks */}
        </div>
      </div>
    </section>
  );
}