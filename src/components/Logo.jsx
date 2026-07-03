export default function Logo({ light = false }) {
  return (
    <a href="/" className="flex items-center gap-2 shrink-0">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-500 text-white font-display font-bold text-sm">
        f
      </span>
      <span className={`font-display text-lg font-bold ${light ? 'text-white' : 'text-ink'}`}>
        folio.
      </span>
    </a>
  );
}
