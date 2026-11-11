import React from 'react';
export function Eyebrow({ children, surface = 'white' }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px 5px 10px', borderRadius: 'var(--radius-pill)',
      background: surface === 'white' ? 'var(--white)' : 'var(--surface-canvas)', fontSize: 17, lineHeight: 1.2, color: 'var(--text-primary)' }}>
      <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--ink-800)' }} />{children}
    </span>
  );
}
