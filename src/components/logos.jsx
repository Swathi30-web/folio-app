import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      {/* லோகோ ஐகான் */}
      <div className={`w-8 h-8 rounded-lg ${light ? 'bg-white' : 'bg-indigo-600'}`} />
      {/* லோகோ பெயர் */}
      <span className={`text-2xl font-black ${light ? 'text-white' : 'text-slate-950'}`}>
        folio<span className="text-indigo-600">.</span>
      </span>
    </Link>
  );
}