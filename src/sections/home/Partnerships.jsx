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
    <section id="work" className="py-16 md:py-24 bg-white text-[#1E1A3A] font-sans overflow-hidden">
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
            <Eyebrow index="04" label="Famous Projects" className="text-[#4F46E5] justify-center" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Partnerships
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl leading-relaxed pt-2 mx-auto">
              Agency is a full-service agency, busy designing and building beautiful digital
              products, brands, and experiences.
            </p>
          </div>
        </div>

        {/* --- Bento Layout Assimétrico Fluido --- */}
        <div className="space-y-24 md:space-y-32 mt-16 md:mt-24">

          {/* Bloco 1: Sapiens Character Builder */}
         <div className="space-y-24 md:space-y-32 mt-16 md:mt-24">

          {/* Bloco 1: Sapiens Character Builder */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-4 space-y-4 order-2 lg:order-1">
              <span className="inline-block bg-[#EEF2FF] text-[#6366F1] text-xs font-bold px-3 py-1.5 rounded-full">
                Featured Product
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1E1A3A]">
                Sapiens: The Free Character Builder App.
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Beautiful library of modular, component-based character illustrations free to use for all your personal or client projects.
              </p>
            </div>
            
            <div className="col-span-12 lg:col-span-8 order-1 lg:order-2 relative">
              <ProjectCard
                bg="bg-[#D9EFFF]"
                art={<CharacterArt className="w-full max-w-md h-auto mx-auto" />}
                className="w-full aspect-[16/10] rounded-[2.5rem] flex items-center justify-center p-8 relative overflow-hidden group shadow-sm"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#4F46E5] text-white p-4 rounded-full shadow-lg hidden md:block">
                <ArrowRight size={20} />
              </button>
            </div>
          
              {/* Botão de seta cortando a borda (Igual à imagem) */}
              <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-[#1E1A3A]/20 hover:border-[#1E1A3A] text-[#1E1A3A] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
              
              </button>
            </div>
          </div>

          {/* Bloco 2: Bento 3D Illustration vs Bento Vol. 2 */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Lado Esquerdo: Bento 3D Illustration */}
            <div className="col-span-12 md:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold">Bento 3D Illustration</h3>
              <div className="relative">
                <ProjectCard
                  bg="bg-[#FDE68A]"
                  art={<BentoIcon className="h-48 md:h-64" sphere="#5457E5" />}
                  className="w-full aspect-square rounded-[2.5rem] flex items-center justify-center p-8 shadow-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-[#1E1A3A]/20 hover:border-[#1E1A3A] text-[#1E1A3A] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>

            {/* Lado Direito: Bento Vol. 2 */}
            <div className="col-span-12 md:col-span-6 space-y-6 md:mt-20">
              <h3 className="text-2xl font-bold">Bento Vol. 2</h3>
              <div className="relative">
                <ProjectCard
                  bg="bg-[#E8D5FF]"
                  art={<BentoIcon className="h-48 md:h-64" sphere="#FDB847" />}
                  className="w-full aspect-square rounded-[2.5rem] flex items-center justify-center p-8 shadow-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-[#1E1A3A]/20 hover:border-[#1E1A3A] text-[#1E1A3A] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
          </div>

          {/* Bloco 3: Sapiens Man vs Bento Vol. 3 */}
          <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Lado Esquerdo: Sapiens Man */}
            <div className="col-span-12 md:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold">Sapiens: Man</h3>
              <div className="relative">
                <ProjectCard
                  bg="bg-[#FCE7F3]"
                  art={<CharacterArt className="h-56 md:h-72" variant="man" />}
                  className="w-full aspect-[4/5] rounded-[2.5rem] flex items-center justify-center p-8 shadow-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-[#1E1A3A]/20 hover:border-[#1E1A3A] text-[#1E1A3A] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>

            {/* Lado Direito: Bento Vol. 3 */}
            <div className="col-span-12 md:col-span-6 space-y-6 md:mt-[-4rem]">
              <h3 className="text-2xl font-bold">Bento Vol. 3</h3>
              <div className="relative">
                <ProjectCard
                  bg="bg-[#E0F2FE]"
                  art={<BentoIcon className="h-48 md:h-64" sphere="#F7A8C4" />}
                  className="w-full aspect-square rounded-[2.5rem] flex items-center justify-center p-8 shadow-sm"
                />
                <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border border-[#1E1A3A]/20 hover:border-[#1E1A3A] text-[#1E1A3A] w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-all z-10">
                  <ArrowRight size={18} strokeWidth={1.5} />
                </button>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}