/**
 * Stylised "designer workspace" illustration reused across hero, story and
 * product sections. Colours are passed in so each section can restyle the
 * motif without duplicating markup.
 */
export default function MonitorArt({
  screen = '#DCE4FF',
  grid = ['#5457E5', '#F7A8C4', '#FDB847', '#BEE3F8'],
  sphere = '#FDB847',
  className = '',
}) {
  return (
    <svg viewBox="0 0 420 320" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* monitor stand */}
      <rect x="185" y="255" width="50" height="28" rx="6" fill="#0F0F26" opacity="0.85" />
      <rect x="140" y="283" width="140" height="12" rx="6" fill="#0F0F26" opacity="0.85" />

      {/* monitor body */}
      <rect x="30" y="30" width="360" height="230" rx="18" fill="#0F0F26" />
      <rect x="46" y="46" width="328" height="198" rx="8" fill={screen} />

      {/* grid cards */}
      <rect x="66" y="66" width="120" height="60" rx="10" fill="white" />
      <circle cx="96" cy="96" r="14" fill={sphere} />
      <rect x="118" y="88" width="52" height="6" rx="3" fill="#D8DCF3" />
      <rect x="118" y="100" width="36" height="6" rx="3" fill="#D8DCF3" />

      <rect x="196" y="66" width="60" height="60" rx="10" fill={grid[0]} />
      <rect x="264" y="66" width="60" height="60" rx="10" fill={grid[1]} />
      <rect x="66" y="134" width="60" height="60" rx="10" fill={grid[2]} />
      <rect x="134" y="134" width="60" height="60" rx="10" fill={grid[3]} />
      <rect x="202" y="134" width="122" height="60" rx="10" fill="white" />
      <rect x="216" y="150" width="90" height="6" rx="3" fill="#D8DCF3" />
      <rect x="216" y="164" width="60" height="6" rx="3" fill="#D8DCF3" />

      {/* floating sphere */}
      <circle cx="205" cy="230" r="22" fill={sphere} />

      {/* cursor */}
      <path
        d="M-4 0 L18 8 L9 12 L14 22 L8 25 L3 15 L-4 20 Z"
        fill="white"
        stroke="#0F0F26"
        strokeWidth="2"
        transform="translate(255 205) rotate(10)"
      />

      {/* pencil crossing the frame */}
      <g transform="translate(300 20) rotate(35)">
        <rect x="0" y="0" width="150" height="18" rx="9" fill="#FDB847" />
        <rect x="0" y="0" width="26" height="18" rx="9" fill="#F7A8C4" />
        <polygon points="150,0 168,9 150,18" fill="#0F0F26" />
      </g>
    </svg>
  );
}
