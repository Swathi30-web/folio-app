import { useState } from 'react';
import { Download, ChevronLeft, ChevronRight } from 'lucide-react';

const TABS = ['Overview', 'Features', 'Highlights', 'Compatibility'];

export default function ByTheNumbers() {
  const [tab, setTab] = useState(1);

  return (
    <section className="bg-navy text-white py-20">
      <div className="container-page">
        <p className="text-xs font-semibold text-white/40 mb-2">Folio Agency</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-14">By the Numbers.</h2>

        <div className="grid sm:grid-cols-2 gap-10 mb-14">
          <div>
            <span className="font-display text-6xl font-extrabold">20</span>
            <p className="font-semibold mt-2 mb-3">Pre-build Scenes 🔥</p>
            <p className="text-white/40 text-sm max-w-xs mb-4 leading-relaxed">
              Bento is the first fully editable, 3D visual design system with global
              auto-updatable style guides built right in Figma.
            </p>
            <button className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-500">
                <Download size={14} />
              </span>
              Download
            </button>
          </div>

          <div>
            <span className="font-display text-6xl font-extrabold">
              40<sup className="text-2xl align-super">+</sup>
            </span>
            <p className="font-semibold mt-2 mb-3">Scene Objects</p>
            <p className="text-white/40 text-sm max-w-xs mb-4 leading-relaxed">
              Bento is the first fully editable, 3D visual design system with global
              auto-updatable style guides built right in Figma.
            </p>
            <button className="flex items-center gap-2 text-sm font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-500">
                <Download size={14} />
              </span>
              Download
            </button>
          </div>
        </div>

        <div className="flex items-center gap-8 border-t border-white/10 pt-6 mb-12 overflow-x-auto">
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setTab(i)}
              className={`text-sm font-medium whitespace-nowrap pb-3 border-b-2 transition-colors ${
                tab === i ? 'text-white border-primary-500' : 'text-white/30 border-transparent'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="relative flex items-center justify-center">
          <button className="hidden sm:grid absolute left-0 h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
            <ChevronLeft size={18} />
          </button>

          <div className="w-full max-w-xl aspect-[16/9] rounded-[2rem] overflow-hidden grid grid-cols-2">
            <div className="bg-amber flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <rect x="10" y="10" width="80" height="60" rx="8" fill="#0F0F26" />
                <rect x="18" y="18" width="64" height="44" rx="4" fill="#DCE4FF" />
                <rect x="26" y="26" width="20" height="8" fill="#F7A8C4" />
                <rect x="26" y="38" width="30" height="6" fill="white" />
              </svg>
            </div>
            <div className="bg-lavender flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16">
                <circle cx="50" cy="45" r="22" fill="#FDB847" />
                <rect x="30" y="70" width="40" height="8" rx="4" fill="#0F0F26" />
              </svg>
            </div>
          </div>

          <button className="hidden sm:grid absolute right-0 h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
