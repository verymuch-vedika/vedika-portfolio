import React from 'react';
import { Icon } from '../core/Icon';
import { FactChip } from '../core/FactChip';
export function CaseCard({ num = '01', total = '04', name, sector, desc, img, alt = '', facts = [], href = '#', soon = false, onClick }) {
  const [h, setH] = React.useState(false);
  const hov = h && !soon;
  return (
    <a href={soon ? undefined : href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexWrap: 'wrap', background: 'var(--surface-card)', border: '1px solid ' + (hov ? 'var(--border-default)' : 'var(--border-subtle)'),
        borderRadius: 'var(--radius-feature)', padding: 12, cursor: soon ? 'default' : 'pointer', transition: 'border-color .5s var(--ease-soft)' }}>
      <div style={{ position: 'relative', flex: '1.25 1 340px', minHeight: 300, borderRadius: 'var(--radius-media)', background: 'var(--surface-media)', overflow: 'hidden' }}>
        {img && <img src={img} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: soon ? 'saturate(.5) contrast(.9) brightness(1.05)' : 'var(--photo-cover)', transition: 'transform 1.2s var(--ease-out)', transform: hov ? 'scale(1.05)' : 'none' }} />}
        {!soon && <span style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', display: 'grid', placeItems: 'center', width: 76, height: 76, borderRadius: '50%', background: 'var(--ink-800)', color: 'var(--white)', transition: 'opacity .4s, transform .55s var(--ease-out)', opacity: hov ? 1 : 0, transform: hov ? 'scale(1)' : 'scale(.6)' }}><Icon name="arrow-up-right" size={29} /></span>}
        {soon && <span style={{ position: 'absolute', left: '50%', top: '50%', translate: '-50% -50%', padding: '10px 20px', borderRadius: 'var(--radius-pill)', background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(6px)', fontSize: 15 }}>Coming soon</span>}
      </div>
      <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', padding: '18px 18px 14px 30px' }}>
        <p style={{ fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>{num} <span style={{ color: 'var(--text-secondary)' }}>/ {total}</span></p>
        <h3 style={{ marginTop: 'auto', paddingTop: 24, fontSize: 'var(--fs-h3)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}>{name}
          <span style={{ display: 'block', marginTop: 6, fontSize: 15, letterSpacing: 0, color: 'var(--text-secondary)' }}>{sector}</span></h3>
        <p style={{ marginTop: 14, fontSize: 'var(--fs-body-s)', lineHeight: 1.6, color: 'var(--text-secondary)' }}>{desc}</p>
        {facts.length > 0 && <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: 8 }}>{facts.map((f, i) => <FactChip key={i} label={f.k} value={f.v} />)}</div>}
        <span style={{ marginTop: 22, alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, lineHeight: 1, color: soon ? 'var(--text-secondary)' : 'var(--text-primary)', textDecoration: soon ? 'none' : 'underline', textUnderlineOffset: 4, textDecorationThickness: 1 }}>
          {soon ? 'Coming soon' : 'View case study'}{!soon && <Icon name="arrow-up-right" size={16} style={{ transition: 'transform .35s var(--ease-out)', transform: hov ? 'translate(3px,-3px)' : 'none' }} />}
        </span>
      </div>
    </a>
  );
}
