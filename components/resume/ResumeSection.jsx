import React from 'react';
export function ResumeSection({ title, children, first = false }) {
  return (
    <section style={{ marginTop: first ? 0 : 24, paddingTop: 12, borderTop: '1px solid var(--ink-800)' }}>
      {title && <h2 style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase' }}>{title}</h2>}
      {children}
    </section>
  );
}
