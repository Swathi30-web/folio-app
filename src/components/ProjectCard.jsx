import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({
  title,
  description,
  tag,
  bg = 'bg-sky/60',
  to = '/bento',
  art,
  className = '',
  dark = false,
}) {
  return (
    <div className={`rounded-2xl ${bg} p-6 flex flex-col justify-between overflow-hidden relative ${className}`}>
      {tag && (
        <span className="self-start mb-4 rounded-full bg-amber text-ink text-[11px] font-bold px-3 py-1">
          {tag}
        </span>
      )}

      <div className="flex-1 flex items-center justify-center py-4">{art}</div>

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <h4 className={`font-display text-lg font-bold ${dark ? 'text-white' : 'text-ink'}`}>
            {title}
          </h4>
          <Link
            to={to}
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
              dark ? 'bg-white text-ink' : 'bg-ink text-white'
            }`}
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>
        {description && (
          <p className={`text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-ink/50'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
