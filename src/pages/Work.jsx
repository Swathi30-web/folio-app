import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// Base Components
import Logo from "../components/Logo"; 
import Button from "../components/Button";

// Ensure these paths match your folder structure exactly!
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
  { label: 'Work', to: '/work' }, // Ensure your Route matches this lowercase path
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
      <header className="relative z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-6 md:px-16 lg:px-24">
          <Logo light={light} />

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`relative flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  l.label === 'Work' ? 'text-indigo-600' : light ? 'text-white/80' : 'text-slate-600'
                }`}
              >
                {l.label}
                {l.dot && <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />}
              </Link>
            ))}
          </nav>

          <Button as={Link} to="/contact" variant={light ? 'light' : 'dark'}>
            Contact Us
          </Button>
        </div>
      </header>

      <section className="relative min-h-[85vh] w-full flex items-center px-6 py-12 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-6xl font-black text-slate-900">Bento<span className="text-indigo-600">.</span></h1>
            <p className="text-xl font-extrabold text-slate-800">Drag & Drop 3D Visual Design System.</p>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <img src={bentoImage} alt="Bento Grid" className="w-full max-w-xl" />
          </div>
        </div>
      </section>

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
