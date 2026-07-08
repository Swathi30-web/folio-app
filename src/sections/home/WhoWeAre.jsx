import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import MonitorArt from "../../components/illustrations/MonitorArt";
import logo from '../../assets/Logo.jpeg';

const YEARS = ["2017", "2018", "2019", "2020", "2021"];

export default function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1E1A3A] py-12 md:py-20 lg:py-24 text-white font-sans"
    >
      {/* Background Shape Superior Direito */}
      <div className="absolute right-0 top-0 h-[400px] w-[35%] bg-[#2A2552] rounded-bl-[100px] pointer-events-none hidden md:block" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* --- Cabeçalho Principal (Título Centralizado) --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 relative">
          <div className="hidden md:block w-24" />
          
          <div className="flex flex-col items-center text-center">
            <p className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[4px] text-gray-400 font-medium">
                  <div className="absolute top-1 -left-5">
  <img
    src={logo}
    alt="Logo"
    className="w-10 h-10 object-contain"
  />
</div>
              <span>01 Who We Are</span>
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
              We Make Designs that
              <br />
              Lead and Inspire.
            </h2>
          </div>

          <div className="flex gap-3 justify-center md:justify-end md:w-24 self-center md:self-end">
            <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors">
              <ArrowLeft size={18} className="text-white/70" />
            </button>
            <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[#4F46E5] hover:bg-[#4338CA] transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* --- GRID PRINCIPAL RESPONSIVO --- */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* ================= SEÇÃO SUPERIOR ================= */}
          
          {/* Linha do Tempo Lateral Esquerda (Visível apenas em LG/Desktop) */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-9 text-sm text-gray-500 font-medium relative border-r border-white/5 pr-8 items-start mb-24">
            {YEARS.map((year) => (
              <div
                key={year}
                className={`relative transition-colors w-full text-left ${
                  year === "2020" ? "text-white font-bold" : "hover:text-white/80"
                }`}
              >
                {year === "2020" && (
                  <div className="absolute -right-[33px] top-1/2 -translate-y-1/2 flex items-center z-20">
                    <span className="h-[2px] w-6 bg-white" />
                    <span className="h-2 w-2 rounded-full bg-white -ml-1" />
                  </div>
                )}
                {year}
              </div>
            ))}
          </div>

          {/* Card Roxo com o Monitor */}
          <div className="col-span-12 lg:col-span-10 relative flex justify-center items-center w-full mb-12 md:mb-16 lg:mb-24">
            <div className="relative w-full max-w-4xl aspect-[16/10] sm:aspect-[16/9.5] bg-[#BA86ED] rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden p-6 sm:p-8 md:p-12 shadow-2xl">
              <div className="absolute top-0 right-0 w-[45%] h-full bg-[#1E56E3] rounded-l-[1.5rem] sm:rounded-l-[2.5rem] transform translate-x-1" />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <MonitorArt className="w-full max-w-2xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] md:drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)]" />
              </div>
            </div>
          </div>


          {/* ================= SEÇÃO INFERIOR RESPONSIVA ================= */}
          
          {/* Continuação da Linha do Tempo */}
          <div className="hidden lg:flex lg:col-span-2 border-r border-white/5 h-64 pr-8 items-start">
            <div className="w-[1px] h-16 bg-[#BA86ED]/40 mt-2" />
          </div>

          {/* Bloco de Textos e Botão */}
          <div className="col-span-12 lg:col-span-6 pt-8 lg:pt-12 border-t border-white/5 text-center md:text-left">
            <div className="space-y-6 max-w-xl mx-auto md:mx-0">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                A design team building a curated marketplace for UI designers.
              </h3>
              <p className="text-xs sm:text-sm leading-7 text-gray-400 max-w-md mx-auto md:mx-0">
                4,404 curated design resources to energize your creative workflow.
                We're a growing family of 334,531 designers and makers from around the world.
              </p>
              <div className="pt-2">
                <Button
                  as={Link}
                  to="/contact"
                  className="bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl transition-all inline-block"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>

          {/* Lado Direito: Bloco "28 Bigest Branding" */}
          <div className="col-span-12 lg:col-span-4 pt-8 lg:pt-12 border-t md:border-t-0 lg:border-t border-white/5 flex justify-center lg:justify-end">
            <div className="text-center flex flex-col items-center">
              <h2 className="text-[6.5rem] sm:text-[8rem] lg:text-[9.5rem] font-extrabold leading-none tracking-tighter select-none">
                28
              </h2>
              <p className="text-xs sm:text-sm font-bold tracking-wider text-gray-300 uppercase -mt-2 sm:text-center">
                Bigest Branding
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}