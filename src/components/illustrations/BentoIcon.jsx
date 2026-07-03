export default function BentoIcon({ sphere = '#FDB847', className = '' }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="140" height="100" rx="14" fill="white" fillOpacity="0.9" />
      <rect x="26" y="26" width="40" height="40" rx="8" fill="#5457E5" />
      <rect x="74" y="26" width="30" height="18" rx="6" fill="#F7A8C4" />
      <rect x="74" y="50" width="30" height="16" rx="6" fill="#BEE3F8" />
      <circle cx="46" cy="90" r="16" fill={sphere} />
      <rect x="74" y="76" width="60" height="16" rx="8" fill="#EEF0FF" />
    </svg>
  );
}
