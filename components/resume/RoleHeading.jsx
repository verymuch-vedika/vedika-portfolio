import React from 'react';
export function RoleHeading({ title, dates, org, spaced = false }) {
  return (
    <div style={{ marginTop: spaced ? 20 : 12, breakInside: 'avoid-page' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '2px 16px' }}>
        <h3 style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: '-0.01em' }}>{title}</h3>
        {dates && <p style={{ fontSize: 12, color: 'var(--text-secondary)', fontVariantNumeric: 'tabular-nums' }}>{dates}</p>}
      </div>
      {org && <p style={{ fontSize: 12.5, color: 'var(--text-lede)' }}>{org}</p>}
    </div>
  );
}
