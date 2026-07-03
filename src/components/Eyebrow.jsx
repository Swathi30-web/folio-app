export default function Eyebrow({ index, label, light = false }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="grid h-6 w-6 place-items-center rounded-md bg-primary-500 text-white text-[11px] font-bold">
        A
      </span>
      <span className={`text-xs font-semibold tracking-wide ${light ? 'text-white/60' : 'text-ink/40'}`}>
        {index}. {label}
      </span>
    </div>
  );
}
