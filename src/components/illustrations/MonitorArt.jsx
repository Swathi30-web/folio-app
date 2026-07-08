// Reusable "monitor" illustration used across Hero, WhoWeAre, etc.
// Keep this as the single source of truth for this artwork — every
// place that needs it should import this component rather than
// redrawing it, so it stays visually identical everywhere.
// NOTE: this component only draws the monitor + floating badges.
// The purple->blue background block is drawn by the parent wrapper
// (see the gradient <div> around <MonitorArt /> in WhoWeAre.jsx / Hero.jsx).
export default function MonitorArt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* keyboard, separated from the stand with real spacing */}
      <rect x="120" y="352" width="160" height="20" rx="8" fill="#FFFFFF" stroke="#E3E7F5" strokeWidth="1.5" />
      <rect x="132" y="358" width="136" height="3" rx="1.5" fill="#E3E7F5" />

      {/* stand */}
      <rect x="184" y="288" width="10" height="30" fill="#EDEFF7" />
      <path d="M150 318 h100 l10 14 h-120 z" fill="#EDEFF7" />

      {/* monitor bezel */}
      <rect x="90" y="30" width="260" height="240" rx="18" fill="#FFFFFF" />
      <rect x="90" y="30" width="260" height="240" rx="18" fill="url(#bezelShade)" />

      {/* traffic-light dots, top-left of bezel */}
      <circle cx="110" cy="50" r="4" fill="#F4A6B8" />
      <circle cx="124" cy="50" r="4" fill="#FBD98A" />
      <circle cx="138" cy="50" r="4" fill="#9BE0BE" />

      {/* screen */}
      <rect x="104" y="64" width="232" height="188" rx="12" fill="#BFE0FB" />

      {/* grid lines on screen */}
      <g stroke="#9FCBF3" strokeWidth="1.4" opacity="0.75">
        <line x1="104" y1="120" x2="336" y2="120" />
        <line x1="104" y1="176" x2="336" y2="176" />
        <line x1="104" y1="232" x2="336" y2="232" />
        <line x1="168" y1="64" x2="168" y2="252" />
        <line x1="232" y1="64" x2="232" y2="252" />
      </g>

      {/* sphere */}
      <circle cx="160" cy="168" r="38" fill="url(#sphereGrad)" />
      <ellipse cx="147" cy="153" rx="11" ry="7" fill="#FFE6AE" opacity="0.85" />

      {/* 2x2 colour cards */}
      <rect x="248" y="88" width="40" height="40" rx="9" fill="#F58FC0" />
      <rect x="296" y="88" width="36" height="40" rx="9" fill="#5B9BF5" />
      <rect x="248" y="136" width="40" height="40" rx="9" fill="#F6A821" />
      <rect x="296" y="136" width="36" height="40" rx="9" fill="#57C98E" />

      {/* little placeholder lines on each card */}
      <rect x="254" y="112" width="24" height="3.5" rx="1.75" fill="white" opacity="0.85" />
      <rect x="302" y="112" width="20" height="3.5" rx="1.75" fill="white" opacity="0.85" />
      <rect x="254" y="160" width="24" height="3.5" rx="1.75" fill="white" opacity="0.85" />
      <rect x="302" y="160" width="20" height="3.5" rx="1.75" fill="white" opacity="0.85" />

      {/* pencil — dark shaft, two-tone metal band + tip, diagonal top-right */}
      <g transform="translate(268, 18) rotate(48 30 30)">
        <rect x="14" y="0" width="14" height="86" rx="6" fill="#2B2B3D" />
        <rect x="14" y="70" width="14" height="10" fill="#D9A441" />
        <rect x="14" y="80" width="14" height="8" fill="#F6A821" />
        <path d="M14 88 L28 88 L21 100 Z" fill="#EFC98A" />
      </g>

      {/* cursor — bigger, white 3D arrow, hanging off bottom-left of bezel */}
      <g transform="translate(56, 244)">
        <path
          d="M0 0 L46 17 L24 24 L15 48 Z"
          fill="#FFFFFF"
          stroke="#C7CEE3"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>

      {/* heart / like bubble, floating top-left, with speech tail */}
      <g transform="translate(30, 96)">
        <path
          d="M12 0 H74 a12 12 0 0 1 12 12 V22 a12 12 0 0 1 -12 12 H26 L10 44 L14 34 H12 a12 12 0 0 1 -12 -12 V12 A12 12 0 0 1 12 0 Z"
          fill="#FFFFFF"
        />
        <path
          d="M20 16c0-3 2.4-5 5-5 1.4 0 2.7.7 3.5 1.8.8-1.1 2.1-1.8 3.5-1.8 2.6 0 5 2 5 5 0 4-4.5 7-8.5 9.5-4-2.5-8.5-5.5-8.5-9.5z"
          fill="#F35D77"
        />
        <rect x="46" y="14" width="26" height="4" rx="2" fill="#D8DEF0" />
      </g>

      {/* chat bubble, floating right, with speech tail */}
      <g transform="translate(316, 178)">
        <path
          d="M10 0 H54 a10 10 0 0 1 10 10 V20 a10 10 0 0 1 -10 10 H16 L6 38 L9 30 H10 A10 10 0 0 1 0 20 V10 A10 10 0 0 1 10 0 Z"
          fill="#FFFFFF"
        />
        <circle cx="18" cy="15" r="3" fill="#9AA6C9" />
        <circle cx="30" cy="15" r="3" fill="#9AA6C9" />
        <circle cx="42" cy="15" r="3" fill="#9AA6C9" />
      </g>

      <defs>
        <linearGradient id="bezelShade" x1="90" y1="30" x2="350" y2="270" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" stopOpacity="0.1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="sphereGrad" cx="0.35" cy="0.3" r="0.85">
          <stop stopColor="#FFD98A" />
          <stop offset="1" stopColor="#F6A821" />
        </radialGradient>
      </defs>
    </svg>
  );
}