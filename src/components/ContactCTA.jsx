import { Link } from 'react-router-dom';
import SpeechBubble from './illustrations/SpeechBubble';

export default function ContactCTA({
  greeting = 'Say hello',
  intro = 'A design team building a curated marketplace for UI designers.',
  heading = "Let's talk about your next project",
  buttonLabel = 'Contact Us',
  to = '/contact',
}) {
  return (
    <section className="container-page pb-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-600 text-white px-6 py-12 sm:px-14 sm:py-16">
        {/* decorative ring lines */}
        <svg
          className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-[420px] max-w-none opacity-15"
          viewBox="0 0 420 320"
          fill="none"
        >
          <circle cx="230" cy="90" r="140" stroke="white" strokeWidth="1" />
          <circle cx="140" cy="150" r="80" stroke="white" strokeWidth="1" />
          <circle cx="330" cy="210" r="100" stroke="white" strokeWidth="1" />
        </svg>

        <div className="relative flex flex-col items-center text-center">
          <SpeechBubble className="h-16 w-16 mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]" />
          <p className="flex items-center gap-2 text-sm font-semibold mb-6">
            <span aria-hidden>👋</span> {greeting}
          </p>
          <p className="max-w-xs text-lg font-semibold leading-snug text-white/95">{intro}</p>
        </div>

        <div className="relative border-t border-white/15 mt-10 pt-10 sm:mt-14 sm:pt-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold mb-8 max-w-sm mx-auto sm:mx-0 text-center sm:text-left">
            {heading}
          </h2>
          <Link
            to={to}
            className="block w-full sm:w-auto sm:min-w-[220px] sm:mx-0 mx-auto rounded-full bg-white text-primary-600 font-semibold py-4 px-8 text-center hover:bg-mist transition-colors"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
