export default function SpeechBubble({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bubbleGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9AE06A" />
          <stop offset="100%" stopColor="#6FBE4A" />
        </linearGradient>
      </defs>
      <path
        d="M50 12c-21 0-38 15.7-38 35 0 12 7 22.6 17.7 29L27 92l19.4-9.4c1.2.1 2.4.1 3.6.1 21 0 38-15.7 38-35S71 12 50 12z"
        fill="url(#bubbleGrad)"
      />
    </svg>
  );
}
