import React from 'react';
import { Icon } from '../core/Icon';
export function NavBar({ links = [], cta = 'Get in touch', ctaHref = '#contact', sticky = false, onNavigate }) {
  return (
    <nav style={{ position: sticky ? 'sticky' : 'relative', top: 0, zIndex: 30, display: 'flex', alignItems: 'center', height: 'var(--nav-h)', paddingInline: 'var(--gutter)',
      background: sticky ? 'rgba(243,243,243,.9)' : 'transparent', backdropFilter: sticky ? 'blur(10px)' : 'none' }}>
      <a href="#top" onClick={(e) => onNavigate && onNavigate('home', e)} style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>Vedika</a>
      <ul style={{ display: 'flex', gap: 30, marginLeft: 60, fontSize: 14 }}>
        {links.map((l, i) => <li key={i}><NavLink {...l} onNavigate={onNavigate} /></li>)}
      </ul>
      <a href={ctaHref} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, lineHeight: 1, whiteSpace: 'nowrap', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationThickness: 1 }}>{cta} <Icon name="arrow-up-right" size={16} /></a>
    </nav>
  );
}
function NavLink({ label, href = '#', id, onNavigate }) {
  const [h, setH] = React.useState(false);
  return <a href={href} onClick={(e) => onNavigate && id && onNavigate(id, e)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ borderBottom: '1px solid ' + (h ? 'var(--ink-800)' : 'transparent'), paddingBottom: 2 }}>{label}</a>;
}
