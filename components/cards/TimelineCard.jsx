import React from 'react';
import { Tag } from '../core/Tag';
export function TimelineCard({ year, place, title, text, img, alt = '', active = true, width = 340 }) {
  return (
    <article style={{ flex: 'none', width, background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', overflow: 'hidden',
      transition: 'box-shadow .6s var(--ease-out), opacity .5s', opacity: active ? 1 : .55, boxShadow: active ? 'var(--shadow-active)' : 'none' }}>
      <div style={{ aspectRatio: '4 / 3', overflow: 'hidden', background: 'var(--surface-media)' }}>{img && <img src={img} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}</div>
      <div style={{ padding: '22px 24px 28px' }}>
        <p style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 15 }}><Tag>{year}</Tag>{place}</p>
        <h3 style={{ marginTop: 14, fontSize: 'var(--fs-title-xs)', fontWeight: 400, letterSpacing: '-0.012em', lineHeight: 1.25 }}>{title}</h3>
        <p style={{ marginTop: 8, fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)' }}>{text}</p>
      </div>
    </article>
  );
}
