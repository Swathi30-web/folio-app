import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import Hero from '../sections/home/Hero';
import WhoWeAre from '../sections/home/WhoWeAre';
import WhatWeDo from '../sections/home/WhatWeDo';
import Achievement from '../sections/home/Achievement';
import Partnerships from '../sections/home/Partnerships';
import HiringCTA from '../sections/home/HiringCTA';
import Jobs from '../sections/home/Jobs';

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />

      <Hero />

      <section id="about">
        <WhoWeAre />
      </section>

      <section id="services">
        <WhatWeDo />
      </section>

      <Achievement />

      <Partnerships />

      <HiringCTA />

      <section id="jobs">
        <Jobs />
      </section>

      <ContactCTA
        greeting="Say hello"
        intro="A design team building a curated marketplace for UI designers."
        heading="Let's talk about your next project"
      />

      <Footer />
    </div>
  );
}
