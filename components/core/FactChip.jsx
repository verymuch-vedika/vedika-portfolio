import React from 'react';
export function FactChip({ label, value }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 30, padding: '4px 12px', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)', fontSize: 'var(--fs-chip)', color: 'var(--text-primary)' }}>
      {label && <span style={{ color: 'var(--text-secondary)' }}>{label}</span>}{value}
    </span>
  );
}
