import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// Base Components
import Logo from "../components/Logo"; 
import Button from "../components/Button";
import bentoImage from "../assets/img.png";

// Custom Section Components
import OverviewSection from "../components/OverviewSection";
import FolioAgency from "../components/FolioAgency"; 
import ByTheNumbers from '../components/ByTheNumbers'; 
import EvolvingLook from '../components/EvolvingLook';
import CallToAction from '../components/CallToAction';
import RecentWorks from '../components/RecentWorks';
import FooterCTA from '../components/FooterCTA';

const LINKS = [
  { label: 'About', to: '/#about' },
  { label: 'Work', to: '/Work' }, 
  { label: 'Services', to: '/#services' },
  { label: 'Jobs', to: '/jobs', dot: true },
];

export default function Work({ light = false }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      
      {/* ==================== 1. NAVBAR SECTION ==================== */}
      <header className="relative z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-6 md:px-16 lg:px-24">
          <Logo light={light} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`relative flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  l.label === 'Work' 
                    ? 'text-indigo-600' 
                    : light ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {l.label}
                {l.dot && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button as={Link} to="/contact" variant={light ? 'light' : 'dark'}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden grid h-10 w-10 place-items-center rounded-full ${
              light ? 'text-white' : 'text-slate-900'
            }`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <div className="md:hidden px-6 pb-6 absolute w-full left-0 top-full bg-white z-50 shadow-xl border-b border-slate-100">
            <div className="flex flex-col gap-4 p-6">
              {LINKS.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-slate-700 hover:text-indigo-600"
                >
                  {l.label}
                </Link>
              ))}
              <Button as={Link} to="/contact" variant="dark" className="mt-2 w-full justify-center">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* ==================== 2. FIRST PAGE: BENTO HERO SECTION ==================== */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-white px-6 py-12 md:px-16 lg:px-24 flex items-center">
        
        {/* Background Decorative Pink Swirl Line */}
        <div className="absolute top-0 left-12 w-full h-full pointer-events-none opacity-50 hidden md:block z-0">
          <svg viewBox="0 0 600 600" className="w-full h-full text-pink-200 stroke-current fill-none stroke-[1.5]">
            <path d="M 100 0 C 200 150, 50 300, 250 350 C 400 380, 150 500, 300 600" />
          </svg>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          {/* LEFT SIDE: Typography Content */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all">
              <ArrowRight size={20} />
            </div>

            <div>
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide">
                Featured Product
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight">
              Bento<span className="text-indigo-600">.</span>
            </h1>

            <p className="text-xl md:text-2xl font-extrabold text-slate-800 leading-snug max-w-sm">
              Drag & Drop 3D Visual Design System.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-slate-100 w-full">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Globe size={16} />
                </div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  Global Digital Agency of Record
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  <Award size={16} />
                </div>
                <p className="text-xs font-bold text-slate-800 leading-tight">
                  5 Years of Digital Marketing Excellence
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Image Container Layout */}
          <div className="lg:col-span-7 relative flex justify-center items-center w-full">
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[100%] h-[480px] bg-indigo-600 rounded-l-[100px] rounded-r-[40px] rotate-[-4deg] transform scale-y-105 z-0" />
            <div className="relative z-10 w-full max-w-xl p-4 flex justify-center">
              <img
                src={bentoImage}
                alt="Bento Grid Layout"
                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAIN CONTENT AREA ==================== */}
      <main>
        <OverviewSection />
        <FolioAgency />
        <ByTheNumbers />
        <EvolvingLook />
        <CallToAction />
        <RecentWorks />
        <FooterCTA />
      </main>
    </div>
  );
}