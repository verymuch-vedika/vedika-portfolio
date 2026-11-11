import React from 'react';
export function InfoCard({ label, children, variant = 'filled' }) {
  const filled = variant === 'filled';
  return (
    <div style={{ padding: filled ? 24 : '18px 22px', borderRadius: 'var(--radius-card)', background: filled ? 'var(--surface-canvas)' : 'transparent',
      border: filled ? 'none' : '1px solid var(--border-card)' }}>
      {label && <p style={{ fontSize: 13, marginBottom: filled ? 10 : 4, color: 'var(--text-primary)' }}>{label}</p>}
      <p style={{ fontSize: filled ? 16 : 14, lineHeight: filled ? 1.6 : 1.65, color: 'var(--text-secondary)' }}>{children}</p>
    </div>
  );
}
