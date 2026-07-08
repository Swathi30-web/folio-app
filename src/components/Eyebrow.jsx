export default function Eyebrow({ index, label, light = false }) {
  return (
    <div className="flex items-center gap-2 mb-4">
    
      <span className={`text-xs font-semibold tracking-wide ${light ? 'text-white/80' : 'text-[#5468FF]'}`}>
  {index}. {label}
</span>
    </div>
  );
}
