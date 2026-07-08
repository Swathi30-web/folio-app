import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Sparkles,
  MousePointer2,
  MessageCircle,
} from "lucide-react";
import Eyebrow from "../../components/Eyebrow";
import logo from '../../assets/Logo.jpeg';

const ITEMS = [
  {
    label: "Strategy",
    icon: Compass,
    tint: "bg-sky-100 text-sky-500",
  },
  {
    label: "Branding",
    icon: Sparkles,
    tint: "bg-white/20 text-white",
  },
  {
    label: "Interactive",
    icon: MousePointer2,
    tint: "bg-orange-100 text-orange-500",
  },
  {
    label: "Communicate",
    icon: MessageCircle,
    tint: "bg-pink-100 text-pink-500",
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F8F8FF] py-20"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <div className="w-full mb-12 relative">
          
          {/* Linha das extremidades: Logo na esquerda e Setas na direita */}
          <div className="flex items-center justify-between w-full absolute top-0 left-0 right-0 z-20 pointer-events-none">
            {/* Bloco da Esquerda: Apenas o Logo */}
            <div className="pointer-events-auto">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-10 h-10 object-contain rounded-xl shadow-sm"
              />
            </div>

            {/* Bloco da Direita: Setas de Navegação */}
            <div className="flex gap-3 pointer-events-auto">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
                <ArrowLeft size={16} className="text-[#23244D]" />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5468FF] text-white hover:bg-[#4354ED] transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Bloco do Centro: Eyebrow + Título Principal perfeitamente centralizados */}
          <div className="text-center pt-12 md:pt-0"> 
            <div className="flex justify-center mb-4">
              <Eyebrow index="02" label="What We Do" className="text-[#5468FF] font-semibold text-sm tracking-wide" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#23244D]">
              We Make Designs that
              <br />
              Lead and Inspire.
            </h2>
          </div>

        </div>

        {/* --- CARDS --- */}
        <div className="mx-auto max-w-6xl rounded-[36px] bg-white px-8 py-12 shadow-xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 justify-items-center">
            {ITEMS.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;

              return (
                <button
                  key={item.label}
                  onClick={() => setActive(i)}
                  className={`flex flex-col items-center justify-center rounded-[28px] transition-all duration-300 w-full max-w-[140px]
                    ${
                      isActive
                        ? "h-[205px] bg-[#5568F5] text-white shadow-xl"
                        : "h-[150px] bg-white text-[#23244D] hover:bg-gray-50/50"
                    }`}
                >
                  <div
                    className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-colors
                      ${
                        isActive
                          ? "bg-white/20"
                          : item.tint
                      }`}
                  >
                    <Icon size={28} />
                  </div>

                  <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}