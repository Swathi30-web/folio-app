import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Logo from './Logo';
import Button from './Button';

const LINKS = [
  { label: 'About', to: '/#about', type: 'hash' },
  { label: 'Work', to: '/Work', type: 'route' },
  { label: 'Services', to: '/#services', type: 'hash' },
  { label: 'Jobs', to: '/#jobs', type: 'hash', dot: true },
];

export default function Navbar({ light = false }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40">
      <div className="container-page flex items-center justify-between py-6">
        <Logo light={light} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) =>
            l.type === 'hash' ? (
              <HashLink
                key={l.label}
                smooth
                to={l.to}
                className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  light
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                {l.label}
                {l.dot && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                )}
              </HashLink>
            ) : (
              <NavLink
                key={l.label}
                to={l.to}
                className={`relative flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  light
                    ? 'text-white/80 hover:text-white'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button as={Link} to="/contact" variant={light ? 'light' : 'dark'}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden grid h-10 w-10 place-items-center rounded-full ${
            light ? 'text-white' : 'text-ink'
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden container-page pb-6">
          <div
            className={`flex flex-col gap-4 rounded-2xl p-6 shadow-soft ${
              light ? 'bg-navy' : 'bg-white'
            }`}
          >
            {LINKS.map((l) =>
              l.type === 'hash' ? (
                <HashLink
                  key={l.label}
                  smooth
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    light ? 'text-white/80' : 'text-ink/70'
                  }`}
                >
                  {l.label}
                </HashLink>
              ) : (
                <NavLink
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium ${
                    light ? 'text-white/80' : 'text-ink/70'
                  }`}
                >
                  {l.label}
                </NavLink>
              )
            )}

            <Button
              as={Link}
              to="/contact"
              variant={light ? 'light' : 'dark'}
              className="mt-2"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
