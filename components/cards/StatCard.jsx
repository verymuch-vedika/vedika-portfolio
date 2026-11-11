import React from 'react';
import { Icon } from '../core/Icon';
export function StatCard({ icon = 'ask', value, suffix = '%', caption, img, imgAlt = '' }) {
  return (
    <article style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-m)', padding: 24, maxWidth: 400 }}>
      <span style={{ display: 'inline-grid', placeItems: 'center', width: 72, height: 72, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #fff 0, #f2f2f2 55%, #e3e3e3 100%)', boxShadow: 'var(--shadow-avatar)' }}><Icon name={icon} size={32} /></span>
      <p style={{ marginTop: 18, fontSize: 'var(--fs-stat-l)', fontWeight: 300, lineHeight: 1, letterSpacing: '-0.035em' }}>{value}{suffix}</p>
      <p style={{ marginTop: 18, fontSize: 'var(--fs-body)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{caption}</p>
      {img && <div style={{ marginTop: 52, borderRadius: 'var(--radius-s)', aspectRatio: '270 / 320', background: 'var(--surface-media)', overflow: 'hidden' }}><img src={img} alt={imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--photo-mono)' }} /></div>}
    </article>
  );
}
