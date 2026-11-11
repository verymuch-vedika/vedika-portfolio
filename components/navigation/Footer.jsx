import React from 'react';
export function Footer({ email = 'hello@vedika.design', links = [], social = [], year = 2026 }) {
  return (
    <footer style={{ position: 'relative', background: 'var(--surface-inverse)', color: 'var(--white)', minHeight: 218, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40, padding: '64px clamp(24px, 8.7vw, 125px) 32px', overflow: 'hidden' }}>
      <div aria-hidden="true">
        {[[-12,-10,100,82],[88,-10,145,82],[-12,72,100,145],[88,72,145,145]].map(([l,t,w,h],i) => <i key={i} style={{ position: 'absolute', border: '1px solid var(--line-on-dark)', borderRadius: 8, left: l, top: t, width: w, height: h }} />)}
        {[[80,-10,145,82],[-12,72,92,160],[80,72,145,160]].map(([r,t,w,h],i) => <i key={'r'+i} style={{ position: 'absolute', border: '1px solid var(--line-on-dark)', borderRadius: 8, right: r, top: t, width: w, height: h }} />)}
      </div>
      <div style={{ position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '28px 32px' }}>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: 4, fontSize: 16 }}>
          {links.map((l, i) => <FootLink key={i} {...l} first={i === 0} />)}
        </nav>
        <a href={'mailto:' + email} style={{ fontSize: 'clamp(30px, 4.4vw, 63px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1, paddingBottom: 6 }}>{email}</a>
      </div>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px 32px', paddingTop: 22, borderTop: '1px solid var(--border-on-dark)', fontSize: 14, color: 'var(--text-on-dark-muted)' }}>
        <p>© {year} Vedika. All rights reserved.</p>
        <ul style={{ display: 'flex', gap: 24 }}>{social.map((s, i) => <li key={i}><a href={s.href || '#'}>{s.label}</a></li>)}</ul>
      </div>
    </footer>
  );
}
function FootLink({ label, href = '#', first }) {
  const [h, setH] = React.useState(false);
  return <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ padding: first ? '8px 24px' : '8px 15px', borderRadius: 'var(--radius-pill)', background: first ? 'var(--surface-inverse-raised)' : h ? 'var(--surface-inverse-hover)' : 'transparent', transition: 'background-color .3s' }}>{label}</a>;
}
