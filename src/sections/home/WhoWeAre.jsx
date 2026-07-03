import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Eyebrow from '../../components/Eyebrow';
import Button from '../../components/Button';
import MonitorArt from '../../components/illustrations/MonitorArt';

const YEARS = ['2017', '2018', '2019', '2020', '2021'];

export default function WhoWeAre() {
  return (
    <section id="about" className="bg-navy text-white py-20">
      <div className="container-page">
        <div className="flex items-start justify-between mb-10">
          <Eyebrow index="01" label="Who We Are" light />
          <button className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20">
            <ArrowRight size={16} />
          </button>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold max-w-md mb-14">
          We Make Designs that Lead and Inspire.
        </h2>

        <div className="grid md:grid-cols-[80px_1fr] gap-8">
          <div className="hidden md:flex flex-col justify-between text-xs text-white/30 font-medium py-2">
            {YEARS.map((y) => (
              <span key={y} className={y === '2020' ? 'text-white' : ''}>
                {y}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-6 rounded-[3rem] bg-gradient-to-br from-violet to-primary-600 -z-10" />
              <MonitorArt
                screen="#EEF0FF"
                grid={['#F7A8C4', '#FDB847', '#BEE3F8', '#5457E5']}
                className="w-full max-w-md mx-auto"
              />
            </div>

            <div>
              <p className="text-white/50 leading-relaxed mb-8 max-w-sm">
                A design team building a curated marketplace for UI designers. We're a growing
                family of 324,237 designers and makers from around the world.
              </p>
              <Button variant="primary" as={Link} to="/contact" className="mb-10">
                Contact Us
              </Button>

              <div className="flex items-end gap-2">
                <span className="font-display text-6xl font-extrabold">28</span>
              </div>
              <span className="text-sm text-white/40">Biggest Branding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
