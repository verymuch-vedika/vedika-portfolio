import React from 'react';
export function SectionNav({ items = [], active = 0, onSelect, variant = 'index' }) {
  const idx = variant === 'index';
  return (
    <ol style={{ display: 'grid', gap: idx ? 4 : 2, borderLeft: '1px solid ' + (idx ? 'var(--border-default)' : 'var(--border-subtle)') }}>
      {items.map((it, i) => {
        const on = i === active;
        return (
          <li key={i}><a href={it.href || '#'} onClick={(e) => { e.preventDefault(); onSelect && onSelect(i); }}
            style={{ position: 'relative', display: idx ? 'grid' : 'block', gridTemplateColumns: '34px 1fr', columnGap: 6, padding: idx ? '12px 0 12px 20px' : '7px 0 7px 18px',
              fontSize: idx ? undefined : 14.5, color: on ? 'var(--ink-800)' : idx ? 'var(--text-tertiary)' : 'var(--text-secondary)', transition: 'color .35s var(--ease-soft)' }}>
            <span style={{ position: 'absolute', left: -1, top: idx ? 10 : 8, bottom: idx ? 10 : 8, width: 2, background: 'var(--ink-800)', transition: 'transform .45s var(--ease-out)', transform: on ? 'scaleY(1)' : 'scaleY(0)' }} />
            {idx ? <>
              <span style={{ fontSize: 13, paddingTop: 5, fontVariantNumeric: 'tabular-nums' }}>{it.num}</span>
              <span style={{ fontSize: 22, letterSpacing: '-0.012em', lineHeight: 1.25 }}>{it.label}</span>
              {it.sub && <span style={{ gridColumn: 2, fontSize: 13, opacity: .8 }}>{it.sub}</span>}
            </> : it.label}
          </a></li>
        );
      })}
    </ol>
  );
}
