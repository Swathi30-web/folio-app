import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import BentoHero from '../sections/bento/BentoHero';
import Overview from '../sections/bento/Overview';
import ByTheNumbers from '../sections/bento/ByTheNumbers';
import VisualIdentity from '../sections/bento/VisualIdentity';
import UpdateCTA from '../sections/bento/UpdateCTA';
import RecentWorks from '../sections/bento/RecentWorks';

export default function BentoProduct() {
  return (
    <div className="bg-white">
      <Navbar />
      <BentoHero />
      <Overview />
      <ByTheNumbers />
      <VisualIdentity />
      <UpdateCTA />
      <RecentWorks />
      <ContactCTA
        greeting="Say hello"
        intro="A design team building a curated marketplace for UI designers."
        heading="Let's talk about your next project"
      />
      <Footer />
    </div>
  );
}
