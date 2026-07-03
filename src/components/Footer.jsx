import { Globe, AtSign, Send, Link2 } from 'lucide-react';
import Logo from './Logo';

const LINKS = ['About', 'Work', 'Services', 'Jobs'];
const SOCIALS = [Globe, AtSign, Send, Link2];

export default function Footer() {
  return (
    <footer className="container-page py-14">
      <div className="flex flex-col items-center text-center gap-4">
        <Logo />
        <p className="max-w-sm text-sm text-ink/50">
          Agency is a full-service agency, busy designing and building beautiful digital
          products, brands, and experiences.
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-6 mt-2">
          {LINKS.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-ink/60 hover:text-ink">
              {l}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 mt-4">
          {SOCIALS.map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink/50 hover:bg-mist"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-ink/30 mt-8">
          &copy; {new Date().getFullYear()} Folio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
