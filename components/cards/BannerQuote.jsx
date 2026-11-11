import React from 'react';
export function BannerQuote({ quote, cite, img }) {
  const [h, setH] = React.useState(false);
  return (
    <figure onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', minHeight: 'clamp(400px, 36vw, 500px)', borderRadius: 'clamp(14px, 1.2vw, 18px)', overflow: 'hidden', background: 'var(--surface-banner)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', isolation: 'isolate' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: -1, overflow: 'hidden' }}>
        {img && <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.1) brightness(.55)', transition: 'transform 2s var(--ease-out)', transform: h ? 'scale(1)' : 'scale(1.04)' }} />}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(70% 90% at 50% 50%, rgba(10,10,10,.72), rgba(10,10,10,.35) 75%)' }} />
      </div>
      <div style={{ position: 'relative', padding: 'clamp(40px, 5vw, 72px) clamp(24px, 4vw, 48px)', maxWidth: 860 }}>
        <blockquote style={{ fontSize: 'var(--fs-quote-banner)', fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.03em', textWrap: 'balance' }}>“{quote}”</blockquote>
        {cite && <figcaption style={{ marginTop: 'clamp(16px, 1.8vw, 26px)', fontSize: 'clamp(15px, 1.2vw, 17px)', color: 'rgba(255,255,255,.8)' }}>{cite}</figcaption>}
      </div>
    </figure>
  );
}
