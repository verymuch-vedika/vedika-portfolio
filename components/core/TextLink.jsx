import React from 'react';
import { Icon } from './Icon';
export function TextLink({ children, href = '#', icon = 'arrow-up-right', size = 'm', underline = true, iconLeft = false, onClick }) {
  const [h, setH] = React.useState(false);
  const fs = size === 's' ? 14 : size === 'l' ? 16 : 15;
  const ic = icon && <Icon name={icon} size={16} style={{ transition: 'transform .35s var(--ease-out)', transform: iconLeft ? (h ? 'translateX(-3px) rotate(180deg)' : 'rotate(180deg)') : (h ? 'translate(3px,-3px)' : 'none') }} />;
  return (
    <a href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: fs, lineHeight: 1, whiteSpace: 'nowrap', color: 'var(--text-primary)',
        textDecoration: underline ? 'underline' : 'none', textUnderlineOffset: 4, textDecorationThickness: 1 }}>
      {iconLeft && ic}{children}{!iconLeft && ic}
    </a>
  );
}
