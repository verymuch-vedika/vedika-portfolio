import React from 'react';
import { Icon } from './Icon';
export function IconCircle({ icon = 'arrow-up-right', variant = 'dark', size = 38, onClick, disabled, label }) {
  const v = {
    dark: { background: 'var(--ink-800)', color: 'var(--white)' },
    light: { background: 'var(--white)', color: 'var(--ink-800)', boxShadow: 'var(--shadow-float)' },
    outline: { background: 'var(--white)', color: 'var(--ink-800)', border: '1px solid var(--border-default)' },
  }[variant];
  const Tag = onClick ? 'button' : 'span';
  return (
    <Tag type={onClick ? 'button' : undefined} aria-label={label} onClick={onClick} disabled={disabled}
      style={{ display: 'grid', placeItems: 'center', width: size, height: size, borderRadius: '50%', flex: 'none', opacity: disabled ? .35 : 1, ...v }}>
      <Icon name={icon} size={Math.round(size * (size > 60 ? .38 : .42))} />
    </Tag>
  );
}
