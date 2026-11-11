import React from 'react';
import { Icon } from '../core/Icon';
export function MobileNav({ links = [], cta = 'Get in touch', ctaHref = '#contact', phone = true, defaultOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const bar = (t) => ({ display: 'block', height: 1.5, background: 'var(--ink-800)', transition: 'transform .35s var(--ease-out)', transform: open ? t : 'none' });
  return (
    <nav style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', height: phone ? 80 : 100, paddingInline: 'var(--gutter)' }}>
      <a href="#top" style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>Vedika</a>
      <a href={ctaHref} style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 15, lineHeight: 1, whiteSpace: 'nowrap', textDecoration: 'underline', textUnderlineOffset: 4, textDecorationThickness: 1 }}>{cta} <Icon name="arrow-up-right" size={16} /></a>
      <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}
        style={{ display: 'grid', alignContent: 'center', gap: 6, width: 44, height: 44, marginLeft: 18, marginRight: -8, padding: 10 }}>
        <span style={bar('translateY(3.75px) rotate(45deg)')} /><span style={bar('translateY(-3.75px) rotate(-45deg)')} />
      </button>
      <ul style={{ position: 'absolute', top: phone ? 70 : 84, left: 'var(--gutter)', right: 'var(--gutter)', display: 'flex', flexDirection: 'column', padding: '10px 22px', background: 'var(--white)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-menu)', fontSize: 20,
        transition: 'opacity .3s, transform .4s var(--ease-out), visibility .3s', opacity: open ? 1 : 0, visibility: open ? 'visible' : 'hidden', transform: open ? 'none' : 'translateY(-8px)' }}>
        {links.map((l, i) => <li key={i} style={{ borderTop: i ? '1px solid var(--grey-85)' : 'none' }}><a href={l.href || '#'} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 0' }}>{l.label}</a></li>)}
      </ul>
    </nav>
  );
}
