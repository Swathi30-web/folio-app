import PhoneArt from "../../components/illustrations/PhoneArt";
import logo from "../../assets/Logo.jpeg";

export default function Achievement() {
  return (
    <section className="bg-mist dark:bg-[#0F172A] py-20 relative overflow-hidden transition-colors duration-300">
      <div className="container-page grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="relative flex justify-center items-center py-10">
          <div className="absolute h-72 w-72 rounded-full bg-blush/60 dark:bg-primary-500/20 -left-4 md:left-10 top-1/2 -translate-y-1/2 -z-10 transition-colors duration-300" />

          <div className="relative z-10">
            <PhoneArt className="w-64 h-auto" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">

          {/* Heading */}
          <div className="mb-6 flex items-center gap-4">
            <img
              src={logo}
              alt="Logo"
              className="w-6 h-6 object-contain"
            />

            <span className="text-gray-500 dark:text-gray-400 text-lg font-semibold transition-colors duration-300">
              03.
            </span>

            <span className="text-[#1E1A3A] dark:text-white text-2xl transition-colors duration-300">
              Achievement
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink dark:text-white max-w-md leading-tight mb-12 transition-colors duration-300">
            A design team building a curated marketplace for UI designers.
          </h3>

          {/* Counter */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-7xl sm:text-8xl font-extrabold text-primary-500 tracking-tight leading-none">
              68
            </span>

            <div className="flex items-center gap-2 text-ink dark:text-white font-semibold text-base sm:text-lg transition-colors duration-300">
              <span
                role="img"
                aria-label="sunglasses"
                className="text-xl"
              >
                😎
              </span>
              Successful Projects
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}