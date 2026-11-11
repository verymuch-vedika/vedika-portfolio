import React from 'react';
import { IconCircle } from '../core/IconCircle';
export function TimelineStepper({ label, index = 0, count = 1, onPrev, onNext }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
      <IconCircle icon="chevron-left" variant="outline" size={44} label="Previous milestone" disabled={index === 0} onClick={onPrev || (() => {})} />
      <div aria-live="polite" style={{ flex: 1, textAlign: 'center' }}>
        <p style={{ fontSize: 28, letterSpacing: '-0.02em', lineHeight: 1 }}>{label}</p>
        <p style={{ marginTop: 4, fontSize: 12, color: 'var(--text-secondary)' }}>{index + 1} of {count}</p>
      </div>
      <IconCircle icon="chevron-right" variant="outline" size={44} label="Next milestone" disabled={index === count - 1} onClick={onNext || (() => {})} />
    </div>
  );
}
