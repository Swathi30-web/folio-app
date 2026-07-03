export default function CharacterArt({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="180" rx="70" ry="10" fill="#0F0F26" opacity="0.06" />
      <circle cx="108" cy="52" r="20" fill="#F4B183" />
      <path d="M60 190 L75 110 Q100 90 125 110 L145 190" fill="#2E7D6B" />
      <rect x="75" y="70" width="66" height="70" rx="20" fill="#3AA893" />
      <path d="M70 100 L40 140" stroke="#F4B183" strokeWidth="12" strokeLinecap="round" />
      <path d="M140 95 L165 60" stroke="#F4B183" strokeWidth="12" strokeLinecap="round" />
      <circle cx="167" cy="55" r="8" fill="#F4B183" />
    </svg>
  );
}
