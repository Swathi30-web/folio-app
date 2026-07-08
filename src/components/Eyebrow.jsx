import React from 'react';

export default function Eyebrow({ index, label, light = false }) {
  
  if (!label) return null;

  return (
    <div className="flex items-center gap-2 mb-4 select-none">
      <span className={`text-xs font-semibold tracking-wide ${light ? 'text-white/80' : 'text-[#5468FF]'}`}>
        {index < 10 ? `0${index}` : index}. {label}
      </span>
    </div>
  );
}