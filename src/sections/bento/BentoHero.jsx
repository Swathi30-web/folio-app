import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MonitorArt from '../../components/illustrations/MonitorArt';

export default function BentoHero() {
  return (
    <section className="container-page pt-2 pb-16">
      <Link
        to="/"
        className="mb-8 grid h-10 w-10 place-items-center rounded-full bg-primary-500 text-white"
      >
        <ArrowLeft size={16} />
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full bg-amber text-ink text-[11px] font-bold px-3 py-1 mb-6">
            Featured Product
          </span>
          <h1 className="font-display text-5xl sm:text-6xl font-extrabold mb-4">Bento.</h1>
          <p className="text-ink/50 max-w-xs mb-8">Drag &amp; Drop 3D Visual Design System.</p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-50 text-primary-600">
                ●
              </span>
              <span className="text-xs text-ink/50 max-w-[7rem] leading-tight">
                Global Digital Agency of Record
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-50 text-primary-600">
                ●
              </span>
              <span className="text-xs text-ink/50 max-w-[7rem] leading-tight">
                5 Years of Digital Marketing Excellence
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-y-6 right-0 left-10 rounded-[2.5rem] bg-primary-600 -z-10 skew-x-[-4deg]" />
          <MonitorArt
            screen="#DCE4FF"
            grid={['#F7A8C4', '#FDB847', '#BEE3F8', '#5457E5']}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
