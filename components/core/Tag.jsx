import React from 'react';
export function Tag({ children, tone = 'dark' }) {
  const dark = tone === 'dark';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', height: 24, padding: '0 10px', borderRadius: 'var(--radius-pill)',
      background: dark ? 'var(--ink-800)' : 'var(--white)', color: dark ? 'var(--white)' : 'var(--ink-800)', boxShadow: dark ? 'none' : 'inset 0 0 0 1px var(--border-default)',
      fontSize: 'var(--fs-tag)', letterSpacing: 'var(--ls-tag)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{children}</span>
  );
}
