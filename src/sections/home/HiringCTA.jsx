import Button from '../../components/Button';
import Eyebrow from '../../components/Eyebrow';
import PhoneArt from '../../components/illustrations/PhoneArt';
import logo from '../../assets/Logo.jpeg';
export default function HiringCTA() {
  return (
    <section className="container mx-auto px-6 max-w-7xl pb-20 relative">
      {/* Abas decorativas de fundo (Card azul claro saindo pelo lado esquerdo) */}
      <div className="absolute left-2 top-8 bottom-8 w-12 bg-[#D9EFFF] rounded-l-[2rem] -z-10 hidden lg:block" />
 
      <div className="relative rounded-[2.5rem] bg-[#4F46E5] overflow-hidden px-8 py-16 md:px-16 lg:py-24 shadow-xl">
         <img
  src={logo}
  alt="Logo"
  className="w-10 h-10 object-contain rounded-xl shadow-sm translate-y-1"
/>
        {/* Forma geométrica roxa estilizada com cantos arredondados no canto direito */}
        <div className="absolute right-0 bottom-0 top-0 w-full md:w-[42%] bg-[#C0A5EC] rounded-bl-[4rem] md:rounded-l-[5rem] transform md:skew-x-[-10deg] translate-x-12 md:translate-x-16 origin-top-right z-0 hidden sm:block" />

        <div className="relative grid grid-cols-12 gap-8 md:gap-12 items-center z-10">
          
          {/* Lado Esquerdo: Ilustração do Telefone e Elementos 3D */}
          <div className="col-span-12 md:col-span-6 flex justify-center relative my-6 md:my-0 scale-105 md:scale-110 lg:scale-125">
            <PhoneArt className="w-full max-w-[260px] sm:max-w-[300px] h-auto drop-shadow-2xl" />
          </div>

          {/* Lado Direito: Textos e Botão de Ação */}
          <div className="col-span-12 md:col-span-6 text-white space-y-6 md:pl-6 lg:pl-12">
            <div className="space-y-3">
              {/* Texto do Eyebrow atualizado para "Call to action" */}
              <Eyebrow index="05" label="Call to action" light className="justify-start text-white/90 font-medium" />
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] max-w-xl">
                We Are <br></br>Looking for Talented Designers
              </h2>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="light" 
                className="bg-white text-[#4F46E5] hover:bg-gray-50 px-8 py-3.5 rounded-xl font-bold transition-all shadow-md inline-block text-center min-w-[150px]"
              >
                Apply Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}