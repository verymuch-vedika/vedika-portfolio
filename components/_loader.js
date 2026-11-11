// Loads the Vedika DS components: uses the compiled bundle if present, else transpiles the JSX sources.
(function(){
  const FILES = ['core/Icon.jsx','core/TextLink.jsx','core/Eyebrow.jsx','core/Tag.jsx','core/FactChip.jsx','core/IconCircle.jsx',
    'cards/CaseCard.jsx','cards/QuoteCard.jsx','cards/StatCard.jsx','cards/TimelineCard.jsx','cards/InfoCard.jsx','cards/BannerQuote.jsx','cards/MetaList.jsx',
    'navigation/NavBar.jsx','navigation/SectionNav.jsx','navigation/PillTabs.jsx','navigation/Footer.jsx',
    'resume/ResumeHeader.jsx','resume/ResumeSection.jsx','resume/RoleHeading.jsx','resume/EntryList.jsx','mobile/MobileNav.jsx','mobile/TimelineStepper.jsx'];
  window.loadVDS = async function(root){
    const scan = () => { for (const k of Object.keys(window)) { try { const v = window[k]; if (v && typeof v === 'object' && v.CaseCard && v.NavBar && v.Footer) return v; } catch (e) {} } return null; };
    let found = scan();
    if (!found) {
      try { const r = await fetch(root + '_ds_bundle.js', { method: 'HEAD' }); if (r.ok) { await new Promise((res) => { const s = document.createElement('script'); s.src = root + '_ds_bundle.js'; s.onload = res; s.onerror = res; document.head.appendChild(s); }); found = scan(); } } catch (e) {}
    }
    if (found) return found;
    const texts = await Promise.all(FILES.map((f) => fetch(root + 'components/' + f).then((r) => r.text())));
    const src = texts.map((t) => t.replace(/^import .*$/mg, '').replace(/^export\s+/mg, '')).join('\n');
    const names = [...src.matchAll(/^function ([A-Z]\w*)/mg)].map(m => m[1]);
    const code = Babel.transform('var __ns=(function(){' + src + '\nreturn {' + names.join(',') + '};})();', { presets: ['react'] }).code;
    return new Function('React', code + '\nreturn __ns;')(React);
  };
})();
