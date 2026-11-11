import React from 'react';
export function EntryList({ items = [], labelWidth = 136 }) {
  const cell = { padding: '7px 0', borderTop: '1px solid var(--grey-85)' };
  return (
    <dl style={{ marginTop: 8, display: 'grid', gridTemplateColumns: labelWidth + 'px minmax(0,1fr)', gap: '0 18px', fontSize: 13, lineHeight: 1.5 }}>
      {items.map((it, i) => <React.Fragment key={i}>
        <dt style={cell}><span style={{ display: 'block', fontWeight: 500 }}>{it.label}</span>
          {it.meta && <span style={{ display: 'block', marginTop: 1, fontSize: 11.5, lineHeight: 1.4, color: 'var(--text-secondary)', whiteSpace: 'pre-line' }}>{it.meta}</span>}</dt>
        <dd style={cell}>{it.text}{it.sub && <span style={{ display: 'block', marginTop: 1, fontSize: 11.5, color: 'var(--text-secondary)' }}>{it.sub}</span>}</dd>
      </React.Fragment>)}
    </dl>
  );
}
