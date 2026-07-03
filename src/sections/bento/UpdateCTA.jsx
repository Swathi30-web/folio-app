import Button from '../../components/Button';
import PhoneArt from '../../components/illustrations/PhoneArt';

export default function UpdateCTA() {
  return (
    <section className="container-page pb-20">
      <div className="relative rounded-[2.5rem] bg-primary-600 overflow-hidden px-8 py-14 md:px-14">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-blush/30 skew-x-[-8deg] translate-x-10" />

        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div className="hidden md:flex justify-center">
            <PhoneArt accent="#FDB847" className="w-40 rotate-6" />
          </div>

          <div className="text-white">
            <p className="text-xs font-semibold text-white/40 mb-2">04. Call to action</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8 max-w-xs">
              Auto-Updatable Global Styleguide
            </h2>
            <Button variant="light">Download Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
