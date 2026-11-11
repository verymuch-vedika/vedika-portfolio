import React from 'react';
export function PillTabs({ items = [], active = 0, onSelect }) {
  return (
    <div style={{ display: 'flex', gap: 6, overflowX: 'auto', scrollbarWidth: 'none' }}>
      {items.map((it, i) => {
        const on = i === active;
        return <button key={i} type="button" onClick={() => onSelect && onSelect(i)}
          style={{ display: 'flex', alignItems: 'baseline', gap: 6, padding: '8px 14px', borderRadius: 'var(--radius-pill)', whiteSpace: 'nowrap',
            background: on ? 'var(--ink-800)' : 'transparent', color: on ? 'var(--white)' : 'var(--text-tertiary)', transition: 'background-color .3s, color .3s' }}>
          {it.num && <span style={{ fontSize: 11 }}>{it.num}</span>}<span style={{ fontSize: 15 }}>{it.label}</span>
        </button>;
      })}
    </div>
  );
}
