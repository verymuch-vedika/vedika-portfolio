import React from 'react';
export function ResumeHeader({ name = 'Vedika Merchant', title, portrait, contacts = [] }) {
  return (
    <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch', gap: '10px 24px', paddingBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        {portrait && <div style={{ flex: 'none', alignSelf: 'stretch', width: 82, borderRadius: 6, overflow: 'hidden', background: 'var(--surface-media)' }}><img src={portrait} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) sepia(.12) contrast(1.2) brightness(1.4)' }} /></div>}
        <div style={{ display: 'grid', gap: 8 }}>
          <h1 style={{ fontSize: 42, fontWeight: 300, lineHeight: .95, letterSpacing: '-0.035em', whiteSpace: 'nowrap' }}>{name}</h1>
          {title && <p style={{ fontSize: 16, lineHeight: 1.35, color: 'var(--text-lede)' }}>{title}</p>}
        </div>
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2, fontSize: 12.5, color: 'var(--text-quote)' }}>
        {contacts.map((c, i) => <li key={i}>{c.href ? <a href={c.href} style={{ textDecoration: c.underline ? 'underline' : 'none', textDecorationColor: '#c4c4c4', textUnderlineOffset: 3 }}>{c.label}</a> : c.label}</li>)}
      </ul>
    </header>
  );
}
