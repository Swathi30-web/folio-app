import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ROWS = [
  { color: 'bg-blush', label: 'Auto-updatable Global Styleguide' },
  { color: 'bg-primary-500', label: 'The number of applications and use cases is nearly endless.' },
  { color: 'bg-amber', label: 'Auto-updatable Global Styleguide' },
];

export default function VisualIdentity() {
  return (
    <section className="py-20">
      <div className="container-page grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs font-semibold text-ink/40 mb-2">03. Visual Identity</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Evolving the look &amp; feel.
          </h2>
          <p className="text-ink/50 max-w-sm mb-10 leading-relaxed">
            Agency is a full-service agency, busy designing and building beautiful digital
            products, brands, and experiences.
          </p>
          <span className="font-display text-6xl font-extrabold text-primary-500">
            80<sup className="text-2xl align-super">+</sup>
          </span>
          <p className="text-ink/50 text-sm">UI Elements</p>
        </div>

        <div className="rounded-[2rem] bg-white shadow-soft p-8">
          <ul className="flex flex-col gap-5 mb-8">
            {ROWS.map((r, i) => (
              <li key={i} className="flex items-center gap-4">
                <span className={`h-8 w-8 rounded-full ${r.color} shrink-0`} />
                <span className="text-sm font-medium text-ink/70">{r.label}</span>
              </li>
            ))}
          </ul>
          <Button as={Link} to="/contact" variant="primary" className="w-full">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
