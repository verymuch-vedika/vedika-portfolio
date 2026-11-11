import React from 'react';
export function MetaList({ items = [], min = 150 }) {
  return (
    <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(' + min + 'px, 1fr))', gap: '0 24px' }}>
      {items.map((it, i) => (
        <div key={i} style={{ padding: '14px 0', borderTop: '1px solid var(--border-default)' }}>
          <dt style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{it.k}</dt>
          <dd style={{ marginTop: 4, fontSize: 15, lineHeight: 1.4 }}>{it.v}</dd>
        </div>
      ))}
    </dl>
  );
}
