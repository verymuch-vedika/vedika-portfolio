import React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Footer } from '../../components/navigation/Footer';
import { MetaList } from '../../components/cards/MetaList';
import { InfoCard } from '../../components/cards/InfoCard';
import { Eyebrow } from '../../components/core/Eyebrow';
import { TextLink } from '../../components/core/TextLink';
export function CaseStudyScreen({ go, c }) {
  const [t, setT] = React.useState(0);
  const wrap = { width: 'min(1280px, 100% - 2 * var(--gutter))', marginInline: 'auto' };
  const toc = ['Overview', 'Business problem', 'Research', 'Design', 'Outcome'];
  return <div>
    <NavBar sticky links={[{ label: 'Highlights' }, { label: 'Work', id: 'home' }, { label: 'LinkedIn' }]} onNavigate={(id, e) => { e.preventDefault(); go('home'); }} />
    <header style={{ background: 'var(--surface-canvas)', paddingBottom: 56 }}>
      <div style={{ ...wrap, paddingTop: 28 }}>
        <TextLink href="#" icon="arrow-right" iconLeft underline={false} size="s" onClick={(e) => { e.preventDefault(); go('home'); }}><span style={{ color: 'var(--text-secondary)' }}>All case studies</span></TextLink>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 48px', alignItems: 'flex-end', marginTop: 56 }}>
          <div style={{ flex: '1 1 360px' }}>
            <Eyebrow>Service &amp; UI/UX Design Case Study</Eyebrow>
            <h1 style={{ marginTop: 18, fontSize: 'var(--fs-display-l)', fontWeight: 300, lineHeight: .9, letterSpacing: '-0.035em' }}>{c.name}</h1>
            <p style={{ marginTop: 24, maxWidth: 620, fontSize: 'var(--fs-lede)', lineHeight: 1.4, letterSpacing: '-0.01em', color: 'var(--text-lede)' }}>{c.desc}</p>
          </div>
          <div style={{ flex: '0 1 600px' }}><MetaList items={[...c.facts, { k: 'Team', v: '5 designers, 3 BAs, 1 dev, 1 PM' }, { k: 'Methods', v: 'Service blueprints, user flows' }, { k: 'Tools', v: 'FigJam, Figma' }]} /></div>
        </div>
        <figure style={{ marginTop: 48, borderRadius: 20, overflow: 'hidden', aspectRatio: '21 / 9', background: 'var(--grey-80)' }}><img src={c.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'var(--photo-cover)' }} /></figure>
      </div>
    </header>
    <main style={{ background: '#fff' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '200px minmax(0, 1fr)', gap: 'clamp(40px, 6vw, 110px)', padding: '72px 0 110px' }}>
        <nav style={{ position: 'sticky', top: 136, alignSelf: 'start' }}><p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14 }}>On this page</p><SectionNav variant="toc" items={toc.map((l) => ({ label: l }))} active={t} onSelect={setT} /></nav>
        <div style={{ maxWidth: 880 }}>
          <div style={{ marginBottom: 56 }}><InfoCard variant="outline" label="Disclaimer.">To comply with my non-disclosure agreement, I’ve omitted confidential information and disguised the client’s name.</InfoCard></div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>01</p>
          <h2 style={{ marginTop: 10, fontSize: 'clamp(32px, 3vw, 44px)', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Overview</h2>
          <p style={{ margin: '8px 0 40px', fontSize: 17, color: 'var(--text-secondary)' }}>Too long; didn’t read</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
            <InfoCard label="Problem">Getting piped gas meant one application passing through five roles, entirely offline.</InfoCard>
            <InfoCard label="Approach &amp; what I did">Turned the BRD into to-be service blueprints, then designed one connected web and app system.</InfoCard>
            <InfoCard label="Outcome">Web and app screens for 6 personas were signed off by the client.</InfoCard>
          </div>
          <p style={{ marginTop: 32, fontSize: 18, lineHeight: 1.75, color: 'var(--text-secondary)' }}>Every handoff happened offline: over phone calls, in local offices, and hard-copy documents walked from desk to desk. <span style={{ color: 'var(--ink-800)' }}>Because nothing was connected, no one in the chain could see the whole picture.</span></p>
        </div>
      </div>
    </main>
    <Footer links={[{ label: 'Home' }, { label: 'Work' }, { label: 'Contact' }]} social={[{ label: 'LinkedIn' }, { label: 'Resume' }, { label: 'Behance' }, { label: 'Medium' }]} />
  </div>;
}
