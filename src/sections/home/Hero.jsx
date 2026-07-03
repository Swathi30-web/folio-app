import Button from '../../components/Button';
import MonitorArt from '../../components/illustrations/MonitorArt';

export default function Hero() {
  return (
    <section className="container-page pt-4 pb-16 md:pb-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Stand Out
            <br />
            from The
            <br />
            Crowd.
          </h1>
          <p className="mt-6 max-w-sm text-ink/50 text-[15px] leading-relaxed">
            Agency is a full-service agency, busy designing and building beautiful digital
            products, brands, and experiences.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Button variant="primary">Discover More</Button>
          </div>
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-3">
              {['#5457E5', '#FDB847', '#F7A8C4'].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <span className="text-sm text-ink/50">Scroll down</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-4 rounded-[3rem] bg-lavender/60 -z-10" />
          <MonitorArt className="w-full max-w-md mx-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}
