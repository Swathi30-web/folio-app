import { useState } from 'react';
import { ArrowRight, Compass, Sparkles, MousePointer2, MessageCircle } from 'lucide-react';
import Eyebrow from '../../components/Eyebrow';

const ITEMS = [
  { label: 'Strategy', icon: Compass, tint: 'bg-sky/50 text-primary-600' },
  { label: 'Branding', icon: Sparkles, tint: 'bg-white/20 text-white' },
  { label: 'Interactive', icon: MousePointer2, tint: 'bg-amber/30 text-amber' },
  { label: 'Communicate', icon: MessageCircle, tint: 'bg-blush/40 text-blush' },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(1);

  return (
    <section id="services" className="bg-mist py-20">
      <div className="container-page">
        <div className="flex items-start justify-between mb-10">
          <Eyebrow index="02" label="What We Do" />
          <button className="grid h-9 w-9 place-items-center rounded-full bg-primary-500 text-white">
            <ArrowRight size={16} />
          </button>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold max-w-md mb-12">
          We Make Designs that Lead and Inspire.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            const isActive = active === i;
            return (
              <button
                key={item.label}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl p-6 h-40 flex flex-col justify-between transition-all shadow-card
                  ${isActive ? 'bg-primary-500 text-white -translate-y-2' : 'bg-white text-ink'}`}
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-full ${
                    isActive ? 'bg-white/20' : item.tint
                  }`}
                >
                  <Icon size={20} />
                </span>
                <span className="font-semibold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
