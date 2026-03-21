import React from 'react';

const MenuItem = ({ item, onClick }) => (
  <div
    onClick={() => onClick(item)}
    className="border-b border-white/20 pb-5 mb-5 last:border-0 last:pb-0 last:mb-0 group hover:bg-white/5 p-4 rounded-xl transition-all cursor-pointer block active:scale-[0.98]"
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(item); }}
  >
    <div className="flex justify-between items-baseline mb-2">
      <h3 className="text-2xl font-semibold text-white tracking-wide group-hover:text-amber-200 transition-colors">
        {item.name}
        {item.nameEn && <span className="text-sm font-light text-gray-400 ml-2">{item.nameEn}</span>}
      </h3>
      <span className="text-xl font-medium text-amber-300 ml-4 shrink-0">{item.price}</span>
    </div>
    <p className="text-gray-300 text-sm font-light leading-relaxed group-hover:text-white transition-colors">{item.description}</p>
    <span className="inline-block mt-2 text-xs text-amber-400/60 group-hover:text-amber-300 transition-colors tracking-wider uppercase">
      ↗ Click for details
    </span>
  </div>
);

export default MenuItem;
