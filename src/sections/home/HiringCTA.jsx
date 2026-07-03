import Button from '../../components/Button';
import Eyebrow from '../../components/Eyebrow';
import PhoneArt from '../../components/illustrations/PhoneArt';

export default function HiringCTA() {
  return (
    <section className="container-page pb-20">
      <div className="relative rounded-[2.5rem] bg-primary-600 overflow-hidden px-8 py-14 md:px-14">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-sky/30 blur-2xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blush/30 skew-x-[-8deg] translate-x-10" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="hidden md:flex justify-center">
            <PhoneArt accent="#FDB847" className="w-40 -rotate-6" />
          </div>

          <div className="text-white">
            <Eyebrow index="05" label="Craft'sion" light />
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 max-w-sm">
              We Are Looking for Talented Designers
            </h2>
            <Button variant="light">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
