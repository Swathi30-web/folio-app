export default function PhoneArt({ accent = '#5457E5', className = '' }) {
  return (
    <svg viewBox="0 0 260 340" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="10" width="200" height="320" rx="30" fill="#0F0F26" />
      <rect x="46" y="30" width="168" height="280" rx="14" fill="#EEF0FF" />

      <rect x="62" y="46" width="60" height="60" rx="12" fill={accent} />
      <rect x="130" y="46" width="52" height="60" rx="12" fill="#FDB847" />
      <rect x="62" y="114" width="120" height="40" rx="10" fill="white" />
      <rect x="74" y="128" width="70" height="6" rx="3" fill="#D8DCF3" />
      <rect x="74" y="140" width="46" height="6" rx="3" fill="#D8DCF3" />

      <rect x="62" y="164" width="120" height="90" rx="12" fill="#F7A8C4" />
      <circle cx="122" cy="209" r="20" fill="white" />

      <g transform="translate(150 250) rotate(-20)">
        <rect width="80" height="14" rx="7" fill="#FDB847" />
        <polygon points="80,0 94,7 80,14" fill="#0F0F26" />
      </g>
    </svg>
  );
}
