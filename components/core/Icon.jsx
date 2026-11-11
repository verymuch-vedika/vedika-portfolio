import React from 'react';
const P = {
  'arrow-up-right': ['0 0 24 24', <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />],
  'arrow-down': ['0 0 24 24', <path d="M12 5v14M6 13l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />],
  'chevron-left': ['0 0 24 24', <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />],
  'chevron-right': ['0 0 24 24', <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />],
  'arrow-right': ['0 0 24 24', <path d="M4 12h16M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />],
  'spark': ['0 0 24 24', <path d="M12 3c.6 4.6 3.4 7.4 8 8-4.6.6-7.4 3.4-8 8-.6-4.6-3.4-7.4-8-8 4.6-.6 7.4-3.4 8-8Z" fill="currentColor" />],
  'ask': ['0 0 24 24', <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.4 9.2a2.7 2.7 0 0 1 5.2 1c0 1.8-2.6 2.4-2.6 4" /><circle cx="12" cy="17.2" r=".4" fill="currentColor" /></g>],
  'expand': ['0 0 16 16', <path d="M10 2h4v4M14 2 9.5 6.5M6 14H2v-4M2 14l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />],
  'quote': ['0 0 32 24', <path d="M0 24V14C0 6 4 1.3 12 0l1.3 3.4C8.7 4.8 6.6 7.6 6.4 11.3H12V24H0Zm19 0V14c0-8 4-12.7 12-14l1 3.4c-4.6 1.4-6.7 4.2-6.9 7.9H31V24H19Z" fill="currentColor" />],
};
export function Icon({ name = 'arrow-up-right', size = 16, style }) {
  const [vb, body] = P[name] || P['arrow-up-right'];
  const [, , w, h] = vb.split(' ').map(Number);
  return <svg viewBox={vb} aria-hidden="true" style={{ width: size, height: size * h / w, flex: 'none', ...style }}>{body}</svg>;
}
