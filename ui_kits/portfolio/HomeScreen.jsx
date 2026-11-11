import React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { SectionNav } from '../../components/navigation/SectionNav';
import { Footer } from '../../components/navigation/Footer';
import { CaseCard } from '../../components/cards/CaseCard';
import { StatCard } from '../../components/cards/StatCard';
import { TimelineCard } from '../../components/cards/TimelineCard';
import { BannerQuote } from '../../components/cards/BannerQuote';
import { QuoteCard } from '../../components/cards/QuoteCard';
import { Eyebrow } from '../../components/core/Eyebrow';
import { IconCircle } from '../../components/core/IconCircle';
import { TextLink } from '../../components/core/TextLink';
export function HomeScreen({ go }) {
  const A = '../../assets/';
  const [ac, setAc] = React.useState(0);
  const [j, setJ] = React.useState(0);
  const wrap = { width: 'min(1280px, 100% - 2 * var(--gutter))', marginInline: 'auto' };
  const H2 = ({ children }) => <h2 style={{ marginTop: 14, fontSize: 'var(--fs-h2)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.012em' }}>{children}</h2>;
  const cases = [
    { num: '01', name: 'DPCL', sector: 'Oil & Gas Company', img: A + 'images/cover-dpcl.jpg', desc: 'Digitising a PNG ecosystem for 1.7 lakh+ households and India’s second largest oil and gas company', facts: [{ k: 'Role', v: 'Service & UI UX designer' }, { k: 'Industry', v: 'Oil and natural gas' }, { k: 'Duration', v: 'Oct’24, 7 months' }] },
    { num: '02', name: 'ZMW', sector: 'Automobile Company', img: A + 'images/cover-zmw.webp', desc: 'A redesign of legacy systems for a German multinational, impacting workflows of 650+ dealerships and 50,000+ direct users', facts: [{ k: 'Role', v: 'Service & UI UX designer' }, { k: 'Industry', v: 'Automotive' }, { k: 'Duration', v: '6 months' }] },
    { num: '03', name: 'Pearstream', sector: 'Financial infrastructure', img: A + 'images/cover-pearstream.jpg', desc: 'Redesigning the Xact Web Portal, a post-trade connectivity channel for a financial infrastructure provider', facts: [{ k: 'Role', v: 'UX Research & UI UX' }, { k: 'Area', v: 'Finance' }, { k: 'Duration', v: '6 months' }] },
  ];
  const journey = [
    { year: '2019', place: 'Graduation', title: 'Graduated in Interaction Design', text: 'Finished the BA specialising in Interaction Design (UI/UX).', img: A + 'images/convocation.jpg' },
    { year: '2022', place: 'Glasgow School of Art', title: 'Started an MDes in Service Design', text: 'Left Accenture for an MDes in Service Design and Innovation at the GSA, UK.', img: A + 'images/glasgow.jpg' },
    { year: '2023', place: 'Freelance', title: 'Came back, went solo', text: 'Came back and worked as a freelance designer.', img: A + 'images/freelance-crop.jpg' },
  ];
  return <div>
    <header style={{ position: 'relative', minHeight: 760, background: 'var(--surface-canvas)', overflow: 'hidden' }}>
      <NavBar links={[{ label: 'Work', href: '#work' }, { label: 'Highlights', href: '#journey' }, { label: 'LinkedIn' }, { label: 'Resume ↓' }]} />
      <div style={{ position: 'relative', zIndex: 2, padding: '108px var(--gutter) 64px calc(var(--gutter) + 121px)' }}>
        <div style={{ display: 'flex', gap: 58 }}>
          {[['6', 'Years designing'], ['100M', 'Users impacted']].map(([n, l]) => <div key={l}><p style={{ fontSize: 46, fontWeight: 300, lineHeight: 1, letterSpacing: '-0.03em', display: 'flex' }}><sup style={{ fontSize: '.5em', lineHeight: 1, marginRight: 2, marginTop: '.05em', fontWeight: 400 }}>+</sup>{n}</p><p style={{ marginTop: 8, paddingLeft: 18, fontSize: 14, color: 'var(--ink-400)' }}>{l}</p></div>)}
        </div>
        <h1 style={{ marginTop: 80, fontWeight: 300 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 22, fontWeight: 400 }}>Hi, I’m</span>
          <span style={{ display: 'block', fontSize: 'var(--fs-display-xl)', lineHeight: .86, letterSpacing: '-0.022em', marginLeft: '-.06em' }}>Vedika</span>
          <span style={{ display: 'block', marginTop: 30, fontSize: 18, fontWeight: 400 }}>Optimist | Realist | Workist</span>
        </h1>
      </div>
      <img src={A + 'images/hero.webp'} alt="Portrait of Vedika" style={{ position: 'absolute', right: '9vw', bottom: 0, height: '86%', aspectRatio: '876 / 1119', objectFit: 'cover' }} />
    </header>
    <section style={{ background: 'var(--surface-canvas)', display: 'flex', flexWrap: 'wrap', gap: '48px clamp(32px, 4vw, 92px)', padding: '60px var(--gutter)', alignItems: 'flex-start' }}>
      <div style={{ flex: '1 1 320px', maxWidth: 470, paddingTop: 20 }}>
        <h2 style={{ fontSize: 'clamp(34px, 3.2vw, 46px)', fontWeight: 400, lineHeight: 1.12 }}>About Me</h2>
        <p style={{ marginTop: 22, fontSize: 17, lineHeight: 1.75, color: 'var(--text-secondary)' }}>I’m a service and experience designer and researcher with 6+ years of work experience. Since 2019 I’ve helped teams in energy, automotive, finance and banking turn tangled, offline processes into calm digital services.</p>
      </div>
      <div style={{ flex: '0 1 315px' }}><StatCard value={98} caption="Chance I’ll ask a “why?” or “how?” one more time" img={A + 'images/thumbs-up.jpg'} /></div>
      <ul style={{ flex: '1 1 320px', display: 'grid', gap: 40, maxWidth: 460, paddingTop: 122 }}>
        {['I make sense of complexity quickly, whether it’s a workshop room or a web of systems.', 'I bring structure, strategic and analytical thinking, picking up new domains early.'].map((t) => <li key={t} style={{ display: 'grid', gridTemplateColumns: '38px 1fr', gap: 16 }}><IconCircle icon="spark" /><p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--text-secondary)' }}>{t}</p></li>)}
      </ul>
    </section>
    <section style={{ background: 'var(--surface-canvas)', display: 'flex', alignItems: 'center', gap: 48, padding: '36px var(--gutter) 72px' }}>
      <p style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 90, lineHeight: 1.35 }}>Trusted by teams at</p>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40, flexWrap: 'wrap' }}>
        {[['accenture', 30], ['bmw', 40], ['virgin-money', 42], ['deutsche-boerse', 50], ['bpcl', 48], ['roche', 40], ['adnoc', 50]].map(([n, h]) => <img key={n} src={A + 'logos/' + n + '.png'} alt={n} style={{ height: h, width: 'auto' }} />)}
      </div>
    </section>
    <section id="work" style={{ background: 'var(--surface-canvas)', padding: '40px 0 110px' }}>
      <div style={{ ...wrap, display: 'grid', gridTemplateColumns: '290px minmax(0, 1fr)', gap: 'clamp(32px, 5vw, 88px)', alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 96 }}>
          <div style={{ marginBottom: 44 }}><Eyebrow>Selected Work</Eyebrow><H2>Case Studies</H2></div>
          <SectionNav items={cases.map((c) => ({ num: c.num, label: c.name, sub: c.sector }))} active={ac} onSelect={setAc} />
        </div>
        <div style={{ display: 'grid', gap: 40 }}>
          {cases.map((c, i) => <div key={c.num} onMouseEnter={() => setAc(i)}><CaseCard {...c} total="03" onClick={(e) => { e.preventDefault(); go('case', c); }} /></div>)}
        </div>
      </div>
    </section>
    <section id="journey" style={{ padding: '136px 0 72px', background: 'radial-gradient(60% 50% at 100% 15%, var(--glow-sand), transparent 70%), radial-gradient(55% 45% at 0% 70%, var(--glow-mint), transparent 70%), var(--grey-20)' }}>
      <div style={wrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap', marginBottom: 56 }}>
          <div><Eyebrow>Highlights</Eyebrow><H2>My Journey</H2></div>
          <div style={{ flex: '0 1 515px' }}><p style={{ fontSize: 17, lineHeight: 1.72, color: 'var(--text-secondary)' }}>From design school to service design in Glasgow and back. These are the moments that shaped how I work.</p>
            <div style={{ marginTop: 28, display: 'flex', gap: 10 }}><IconCircle icon="chevron-left" variant="outline" size={44} label="Previous" disabled={j === 0} onClick={() => setJ(Math.max(0, j - 1))} /><IconCircle icon="chevron-right" variant="outline" size={44} label="Next" disabled={j === 2} onClick={() => setJ(Math.min(2, j + 1))} /></div></div>
        </div>
        <div style={{ display: 'flex', gap: 24, paddingBottom: 40 }}>
          {journey.map((m, i) => <TimelineCard key={i} {...m} active={i === j} width="clamp(270px, 28vw, 380px)" />)}
        </div>
      </div>
    </section>
    <section style={{ background: '#fff', padding: '52px var(--gutter)' }}>
      <BannerQuote quote="Your work can be trusted without the need for micromanagement." cite="Design lead · BMW" img={A + 'images/banner-workshop.jpg'} />
    </section>
    <section style={{ background: 'var(--surface-section)', padding: '92px 0 126px' }}>
      <div style={{ width: 'min(1200px, 100% - 2 * var(--gutter))', marginInline: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12, marginBottom: 50 }}><Eyebrow>In their words</Eyebrow><h2 style={{ fontSize: 'var(--fs-h1)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.016em' }}>What people I’ve worked with say</h2></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
          <QuoteCard tag="Leading a team" quote="She effectively guided the team through the synthesis process … and delivered the final output on time." cite="Workshop lead · Shell" />
          <QuoteCard tag="Collaboration" quote="…created space for brainstorming, which helped team members finalize design decisions quickly." cite="Experience designer · BPCL" />
          <QuoteCard tag="Leadership" quote="Her leadership stands out through ownership, clarity in direction, and ability to keep the team aligned." cite="New joiner · AI initiative" />
        </div>
      </div>
    </section>
    <section id="contact" style={{ background: 'var(--surface-section)' }}>
      <div style={{ background: 'var(--grey-70)', borderRadius: '54px 54px 0 0', textAlign: 'center', padding: '108px var(--gutter)' }}>
        <h2 style={{ fontSize: 'var(--fs-h2)', fontWeight: 400, lineHeight: 1.12, letterSpacing: '-0.022em' }}>Want to get in touch? Drop me a line</h2>
        <p style={{ margin: '12px auto 0', fontSize: 17, color: 'var(--text-secondary)' }}>I read every message and try to reply within a couple of days.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, marginTop: 44 }}><TextLink size="l" href="mailto:hello@vedika.design">Email me</TextLink><TextLink size="l">Message on LinkedIn</TextLink></div>
      </div>
    </section>
    <Footer links={[{ label: 'Home' }, { label: 'Highlights' }, { label: 'Work' }, { label: 'Testimonials' }, { label: 'Contact' }]} social={[{ label: 'LinkedIn' }, { label: 'Resume' }, { label: 'Behance' }, { label: 'Medium' }]} />
  </div>;
}
