import { Edit3, ImageIcon } from 'lucide-react';
import MonitorArt from '../../components/illustrations/MonitorArt';

const FEATURES = [
  { icon: Edit3, label: 'Fully Editable', tint: 'bg-amber/30 text-amber' },
  { icon: ImageIcon, label: 'High Resolution', tint: 'bg-blush/30 text-blush' },
];

export default function Overview() {
  return (
    <section className="container-page pb-20">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
        <div className="grid place-items-center h-52 w-52 rounded-full bg-lavender/60 mx-auto md:mx-0">
          <MonitorArt className="w-32" screen="#F3F0FF" />
        </div>

        <div>
          <p className="text-xs font-semibold text-ink/40 mb-2">01. Overview</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5 max-w-md">
            The First Fully Editable, 3D Visual Design System.
          </h2>
          <p className="text-ink/50 max-w-lg mb-6 leading-relaxed">
            Effortlessly combine different elements to create compelling compositions that will
            surely help you tell a better story for your landing pages, portfolios,
            presentations, and more in just a matter of minutes.
          </p>
          <p className="text-sm font-medium text-ink/70 mb-8 flex items-center gap-2">
            <span aria-hidden>⚠️</span> The number of applications and use cases is nearly
            endless.
          </p>

          <div className="flex flex-wrap gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white shadow-card px-8 py-6"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-full ${f.tint}`}>
                  <f.icon size={20} />
                </span>
                <span className="text-sm font-semibold text-primary-600">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
