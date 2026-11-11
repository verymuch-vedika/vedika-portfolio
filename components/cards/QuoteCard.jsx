import React from 'react';
import { Icon } from '../core/Icon';
import { Tag } from '../core/Tag';
export function QuoteCard({ tag, quote, cite }) {
  const [h, setH] = React.useState(false);
  return (
    <figure onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', flexDirection: 'column', background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', padding: '30px 28px 32px',
        transition: 'transform .6s var(--ease-out), box-shadow .6s var(--ease-out)', transform: h ? 'translateY(-6px)' : 'none', boxShadow: h ? 'var(--shadow-lift)' : 'none' }}>
      <span style={{ color: 'var(--grey-90)', marginBottom: 26 }}><Icon name="quote" size={34} /></span>
      {tag && <p><Tag>{tag}</Tag></p>}
      <blockquote style={{ marginTop: 16, fontSize: 'var(--fs-quote)', lineHeight: 1.5, color: 'var(--text-quote)', letterSpacing: '-0.01em' }}>“{quote}”</blockquote>
      {cite && <figcaption style={{ marginTop: 'auto', paddingTop: 28, fontSize: 14, color: 'var(--text-secondary)' }}>{cite}</figcaption>}
    </figure>
  );
}
