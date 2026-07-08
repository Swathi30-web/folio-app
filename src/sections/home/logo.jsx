export default function Logo({ className = "w-10 h-10" }) {
  return (
    <div
      className={`bg-[#5457E5] rounded-[28%] flex items-center justify-center p-2 shadow-sm ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="32" cy="68" r="13" fill="white" />
        <rect
          x="44"
          y="15"
          width="24"
          height="62"
          rx="12"
          transform="rotate(-30 56 46)"
          fill="white"
        />
      </svg>
    </div>
  );
}