import { ArrowDown } from "lucide-react";
import Button from "../../components/Button";
import MonitorArt from "../../components/illustrations/MonitorArt";

export default function Hero() {
  const handleScrollDown = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-300">
      {/* Background Curve */}
      <svg
        className="absolute left-1/3 top-0 h-full w-full -z-10 opacity-30"
        viewBox="0 0 900 700"
        fill="none"
      >
        <path
          d="M250 0C380 120 180 250 360 360C540 470 350 650 500 700"
          className="stroke-blue-200 dark:stroke-blue-500"
          strokeWidth="2"
        />
      </svg>

      <div className="container-page py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-10">
          {/* Left Side */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1F2147] dark:text-white transition-colors duration-300">
              Stand Out
              <br />
              from The
              <br />
              Crowd.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500 dark:text-gray-300 transition-colors duration-300">
              Agency is a full-service agency, busy designing and building
              beautiful digital products, brands, and experiences.
            </p>

            <div className="mt-7">
              <Button variant="primary">Recent Work</Button>
            </div>

            <button
              type="button"
              onClick={handleScrollDown}
              className="mt-10 flex items-center gap-3 text-gray-500 dark:text-gray-300 cursor-pointer group transition-colors duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B98AF5] dark:bg-primary-500 text-white transition-all duration-300 group-hover:translate-y-1">
                <ArrowDown size={18} />
              </div>

              <span className="text-sm">Scroll down</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">
            {/* Purple Shape */}
            <div className="absolute right-2 top-6 h-[360px] w-[320px] rounded-[32px] bg-[#C89BF5] dark:bg-[#7B7FF6] transition-colors duration-300"></div>

            {/* Monitor Illustration */}
            <MonitorArt className="w-full max-w-md drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}