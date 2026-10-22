/* Peekaboo cat easter egg (ginger). Bundled from src/cat.js, src/cat.css, src/peekaboo.js.
   Self-contained: injects its own styles. Call window.initPeekaboo() after the page renders. */
(function () {
if (!document.getElementById('peekaboo-css')) {
  const st = document.createElement('style');
  st.id = 'peekaboo-css';
  st.textContent = "/* =========================================================\n   Peekaboo cat\n   The .cat box sits on top of a \"ledge\" (an element's top edge)\n   and clips at its bottom, so the cat appears from behind it.\n   ========================================================= */\n.cat {\n  --cat-w: 112px;\n  position: absolute;\n  z-index: 3;\n  width: var(--cat-w);\n  aspect-ratio: 200 / 150;\n  overflow: hidden;\n  pointer-events: none;\n  -webkit-tap-highlight-color: transparent;\n}\n.cat__svg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  transform: translateY(104%);\n  will-change: transform;\n}\n.cat.is-up .cat__svg { animation: cat-peek 1.7s cubic-bezier(.3, .7, .2, 1) forwards; }\n.cat.is-ducking .cat__svg {\n  transform: translateY(104%);\n  transition: transform .34s cubic-bezier(.55, 0, .85, .35);\n}\n\n/* Cautious peek: ears + eyes first, a beat, then up onto the paws */\n@keyframes cat-peek {\n  0%   { transform: translateY(104%); }\n  28%  { transform: translateY(60%); }\n  50%  { transform: translateY(60%); }\n  74%  { transform: translateY(-3.5%); }\n  86%  { transform: translateY(1%); }\n  100% { transform: translateY(0); }\n}\n\n/* Head tilts toward the pointer */\n.cat__head {\n  transform-box: view-box;\n  transform-origin: 100px 150px;\n  transform: rotate(var(--tilt, 0deg));\n  transition: transform .6s cubic-bezier(.22, .61, .36, 1);\n}\n\n/* Ears */\n.cat__ear { transform-box: view-box; transition: transform .18s ease-out; }\n.cat__ear--l { transform-origin: var(--ear-l); }\n.cat__ear--r { transform-origin: var(--ear-r); }\n.cat__ear--l.is-twitch { animation: cat-twitch-l .38s ease-in-out; }\n.cat__ear--r.is-twitch { animation: cat-twitch-r .38s ease-in-out; }\n@keyframes cat-twitch-l { 30% { transform: rotate(-7deg); } 60% { transform: rotate(2deg); } }\n@keyframes cat-twitch-r { 30% { transform: rotate(7deg); } 60% { transform: rotate(-2deg); } }\n.cat.is-startled .cat__ear--l { transform: rotate(-16deg) translateY(5px); }\n.cat.is-startled .cat__ear--r { transform: rotate(16deg) translateY(5px); }\n\n/* Eyes: eyelid blink, pupil follow, dilate when curious, slit when startled */\n.cat__pupil { transition: transform .35s cubic-bezier(.22, .61, .36, 1); }\n.cat__pupil-shape {\n  transform-box: fill-box;\n  transform-origin: center;\n  transition: transform .4s cubic-bezier(.22, .61, .36, 1);\n}\n.cat.is-curious .cat__pupil-shape { transform: scale(1.1); }\n.cat.is-startled .cat__pupil-shape { transform: scale(.72); transition-duration: .08s; }\n\n/* Lids. Open = soft ease-out; close (while .is-blinking) = fast ease-in. */\n.cat__lid, .cat__lid-low { transition: transform .19s cubic-bezier(.2, .7, .3, 1); }\n.cat__lid-edge { opacity: 0; transition: opacity .12s ease-out; }\n.cat.is-blinking .cat__lid { transform: translateY(var(--close)); transition: transform .085s cubic-bezier(.5, 0, .9, .5); }\n.cat.is-blinking .cat__lid-low { transform: translateY(var(--close)); transition: transform .085s cubic-bezier(.5, 0, .9, .5); }\n.cat.is-blinking .cat__lid-edge { opacity: 1; transition-duration: .05s; }\n.cat.is-slow-blink .cat__lid,\n.cat.is-slow-blink .cat__lid-low { transition-duration: .42s; transition-timing-function: cubic-bezier(.45, 0, .25, 1); }\n.cat.is-slow-blink.is-blinking .cat__lid,\n.cat.is-slow-blink.is-blinking .cat__lid-low { transition-duration: .34s; }\n/* Lidded (sleepy) cat: lids lift when curious or startled */\n.cat--lidded .cat__lid-edge { opacity: 1; }\n.cat--lidded.is-curious:not(.is-blinking) .cat__lid,\n.cat--lidded.is-startled:not(.is-blinking) .cat__lid { transform: translateY(var(--open)); transition-duration: .45s; }\n\n/* Click target (head area only, active only while up) */\n.cat__hit {\n  position: absolute;\n  z-index: 1;\n  left: 18%; right: 18%; top: 8%; bottom: 0;\n  border: 0; padding: 0; background: none;\n  border-radius: 45% 45% 10% 10%;\n  cursor: pointer;\n  pointer-events: none;\n}\n.cat.is-up .cat__hit { pointer-events: auto; }\n.cat__hit:focus-visible { outline: 2px solid currentColor; outline-offset: 2px; }\n\n/* Dark variant: a black cat in the dark — mostly just the eyes */\n.cat--dark .cat__svg { filter: drop-shadow(0 0 .6px rgba(255, 255, 255, .22)); }\n.cat--dark.cat--line .cat__svg { filter: none; }\n\n@media (prefers-reduced-motion: reduce) {\n  .cat { display: none !important; }\n}\n\n.peek-layer { position: absolute; top: 0; left: 0; width: 100%; height: 0; z-index: 4; }\n.peek-layer .cat { --cat-w: clamp(84px, 7vw, 112px); }\n.peek-badge { position: fixed; z-index: 60; left: 16px; bottom: 16px; display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px 8px 10px; border-radius: 999px; background: #222; color: #fff; font-family: \"Inter Tight\", ui-sans-serif, system-ui, sans-serif; font-size: 13px; box-shadow: 0 10px 30px -12px rgba(0,0,0,.45); opacity: 0; transform: translateY(12px); pointer-events: none; transition: opacity .4s cubic-bezier(.22,.61,.36,1), transform .5s cubic-bezier(.16,1,.3,1); }\n.peek-badge svg { width: 18px; height: 18px; color: #fff; }\n.peek-badge svg circle { fill: #222; }\n.peek-badge.is-shown { opacity: 1; transform: none; }\n.peek-badge.is-pulse { animation: peek-pulse .6s cubic-bezier(.16,1,.3,1); }\n@keyframes peek-pulse { 40% { transform: scale(1.08); } }\n.peek-reward { position: fixed; z-index: 61; left: 50%; bottom: 72px; width: min(380px, calc(100vw - 32px)); padding: 22px 22px 18px; border-radius: 18px; background: #fff; border: 1px solid #e3e3e3; box-shadow: 0 24px 60px -24px rgba(0,0,0,.35); font-family: \"Inter Tight\", ui-sans-serif, system-ui, sans-serif; color: #222; opacity: 0; visibility: hidden; transform: translate(-50%, 16px); transition: opacity .4s cubic-bezier(.22,.61,.36,1), transform .5s cubic-bezier(.16,1,.3,1), visibility .4s; }\n.peek-reward.is-open { opacity: 1; visibility: visible; transform: translate(-50%, 0); }\n.peek-reward p { margin: 0; }\n.peek-reward__title { font-size: 20px; letter-spacing: -0.01em; }\n.peek-reward__text { margin-top: 6px !important; font-size: 15px; line-height: 1.6; color: #7b7b7b; }\n.peek-reward__actions { display: flex; align-items: center; justify-content: space-between; margin-top: 16px; }\n.peek-reward__cta { display: inline-flex; align-items: center; gap: 6px; font-size: 15px; text-decoration: underline; text-underline-offset: 4px; color: #222; }\n.peek-reward__cta svg { width: 15px; height: 15px; }\n.peek-reward__close { font: inherit; font-size: 14px; color: #7b7b7b; padding: 6px 4px; background: none; border: 0; cursor: pointer; }\n.peek-reward__close:hover { color: #222; }\n@media (prefers-reduced-motion: reduce) { .peek-layer, .peek-badge, .peek-reward { display: none !important; } }\n";
  document.head.appendChild(st);
}


/* ---------------------------------------------------------------
   Peekaboo cat: hand-built SVG rig, four visual styles.
   createCat({ variant, tail, size, dark }) returns
   { el, peek(), duck(), startle(), onClick(fn), destroy() }.
   --------------------------------------------------------------- */

const SHAPES = {
  // Ears sit BEHIND the head with their base buried inside it, and the outer
  // edge runs tangent into the cheek, so the silhouette reads as one piece and
  // a twitch (small rotation around the buried base) never exposes a seam.
  classic: {
    earL: 'M49 104C48 78 51 47 56.5 29C58.5 22 63.5 20.5 68 24C78 32 88 43 97 58L92 92Z',
    earR: 'M151 104C152 78 149 47 143.5 29C141.5 22 136.5 20.5 132 24C122 32 112 43 103 58L108 92Z',
    innerL: 'M63 36C63.5 46 65.5 55 68.5 62C74 58 79.5 53 84 48C78 42 70.5 37 65 33.5Z',
    innerR: 'M137 36C136.5 46 134.5 55 131.5 62C126 58 120.5 53 116 48C122 42 129.5 37 135 33.5Z',
    head: 'M57 152C53 144 49.5 136 47.5 128.5C44 127.5 41.5 124.5 42.5 121C44 121.8 45.4 122 46.4 121.6C45.6 118 45.3 114.5 45.3 111C45.3 89 56.5 69 76.5 58C84.5 53.6 92.3 51.5 100 51.5C107.7 51.5 115.5 53.6 123.5 58C143.5 69 154.7 89 154.7 111C154.7 114.5 154.4 118 153.6 121.6C154.6 122 156 121.8 157.5 121C158.5 124.5 156 127.5 152.5 128.5C150.5 136 147 144 143 152Z',
    eyeL: 'M60.5 99a16.5 16.5 0 1 0 33.0 0a16.5 16.5 0 1 0 -33.0 0Z',
    eyeR: 'M106.5 99a16.5 16.5 0 1 0 33.0 0a16.5 16.5 0 1 0 -33.0 0Z',
    eyeBox: { top: 82.5, h: 33 },
    pupilL: [77, 100], pupilR: [123, 100],
    earPivotL: [70, 92], earPivotR: [130, 92],
  },
  chubby: {
    earL: 'M38 112C37 88 42 62 50 48C53 42.5 58.5 41.5 63 45C72 52 81 61 88 71L84 98Z',
    earR: 'M162 112C163 88 158 62 150 48C147 42.5 141.5 41.5 137 45C128 52 119 61 112 71L116 98Z',
    innerL: 'M54.5 54C55 61.5 57 68 60 73.5C65.5 70.5 70.5 66.5 75 62C69.5 57.5 62.5 53.5 57 51.5Z',
    innerR: 'M145.5 54C145 61.5 143 68 140 73.5C134.5 70.5 129.5 66.5 125 62C130.5 57.5 137.5 53.5 143 51.5Z',
    head: 'M52 152C44.5 142 38.5 130 37.5 117.5C33.5 116 31.5 112.5 33 109C34.6 110.2 36 110.6 37.2 110.4C38.5 81.5 64 59 100 59C136 59 161.5 81.5 162.8 110.4C164 110.6 165.4 110.2 167 109C168.5 112.5 166.5 116 162.5 117.5C161.5 130 155.5 142 148 152Z',
    eyeL: 'M60 103a17 17 0 1 0 34 0a17 17 0 1 0 -34 0Z',
    eyeR: 'M106 103a17 17 0 1 0 34 0a17 17 0 1 0 -34 0Z',
    eyeBox: { top: 86, h: 34 },
    pupilL: [77, 104], pupilR: [123, 104],
    earPivotL: [66, 96], earPivotR: [134, 96],
  },
};

const NOSE = 'M96 114.5C98.5 113.4 101.5 113.4 104 114.5C103.2 116.8 101.6 118.4 100 118.6C98.4 118.4 96.8 116.8 96 114.5Z';
const MOUTH = 'M100 118.6C100 121.5 98.5 123 96 123M100 118.6C100 121.5 101.5 123 104 123';
const WHISKERS = [
  'M68 115C52 111 38 110 22 111', 'M68 119C53 119 39 121 24 125', 'M70 123C57 126 46 130 34 137',
  'M132 115C148 111 162 110 178 111', 'M132 119C147 119 161 121 176 125', 'M130 123C143 126 154 130 166 137',
];
const PAWS = ['M51 152C51 142.5 59 136.5 71 136.5C83 136.5 91 142.5 91 152Z', 'M109 152C109 142.5 117 136.5 129 136.5C141 136.5 149 142.5 149 152Z'];
const TOES = 'M64.5 142.5Q65 146 64.5 149M71 141.5V149M77.5 142.5Q77 146 77.5 149M122.5 142.5Q123 146 122.5 149M129 141.5V149M135.5 142.5Q135 146 135.5 149';

/* Visual styles. All eyes are flat (no gloss). */
const VARIANTS = {
  classic: {
    label: 'Classic', shape: 'classic', furGrad: true, fur: '#222', inner: '#3a3232',
    iris: '#E0B04A', pupil: '#161616', pupilR: 12.5,
    nose: '#4a3d3d', mouth: '#3c3434', whiskers: { color: '#2a2a2a', op: 0.5, n: 6 },
    paw: '#262626', toes: '#171717', lid: 0, tailW: [13, 8],
  },
  silhouette: {
    label: 'Silhouette', shape: 'classic', fur: '#222', inner: null,
    iris: '#F3F3F3', pupil: '#222', pupilR: 11.5,
    nose: null, mouth: null, whiskers: { color: '#222', op: 0.75, n: 4 },
    paw: '#2a2a2a', toes: null, lid: 0, tailW: [13, 8],
  },
  ginger: {
    label: 'Ginger', shape: 'classic', fur: '#E08A3C', inner: '#F2B784',
    iris: '#FFF8EF', pupil: '#2B1D14', pupilR: 11.5, glint: '#FFF8EF',
    nose: '#C9605A', mouth: null, whiskers: { color: '#7A4A22', op: 0.6, n: 4 },
    paw: '#F0A866', toes: null, lid: 0, tailW: [13, 8],
  },
  line: {
    label: 'Line', shape: 'classic', fur: '#FAFAFA', stroke: '#222', sw: 2.4, inner: 'line',
    iris: '#FAFAFA', pupil: '#222', pupilR: 12.5, eyeStroke: true,
    nose: '#222', mouth: '#222', whiskers: { color: '#222', op: 0.85, n: 6 },
    paw: '#FAFAFA', toes: '#222', lid: 0, tailW: [12, 7.5],
  },
  chubby: {
    label: 'Chubby', shape: 'chubby', furGrad: true, fur: '#222', inner: '#3a3232',
    iris: '#A9C97A', pupil: '#161616', pupilR: 12.5,
    nose: '#4a3d3d', mouth: '#3c3434', whiskers: { color: '#2a2a2a', op: 0.5, n: 6 },
    paw: '#262626', toes: '#171717', lid: 0.34, tailW: [15, 9.5],
  },
};

let uid = 0;
const rand = (a, b) => a + Math.random() * (b - a);

function markup(id, v, s, { tail, dark }) {
  const fur = v.furGrad ? `url(#cf-${id})` : v.fur;
  const flat = v.fur;
  const stroke = v.stroke ? ` stroke="${v.stroke}" stroke-width="${v.sw}" stroke-linejoin="round" stroke-linecap="round"` : '';
  const ear = (d, inner, cls) => `
      <g class="cat__ear ${cls}">
        <path d="${d}" fill="${fur}"${stroke}/>
        ${
          v.inner === 'line'
            ? `<path d="${inner}" fill="none" stroke="${v.stroke}" stroke-width="${v.sw * 0.7}" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>`
            : v.inner
              ? `<path d="${inner}" fill="${v.inner}" opacity=".85"/>`
              : ''
        }
      </g>`;
  const eye = (side) => {
    const d = side === 'l' ? s.eyeL : s.eyeR;
    const [px, py] = side === 'l' ? s.pupilL : s.pupilR;
    const top = s.eyeBox.top;
    const h = s.eyeBox.h;
    const bot = top + h;
    const x0 = px - 20;
    const x1 = px + 20;
    // Upper lid: rests at `v.lid` of the eye height, with a gently curved edge.
    // On blink it sweeps down to ~68% of the eye; the lower lid rises to meet it.
    const rest = v.lid ? top + h * v.lid : top - h * 0.12;
    const meet = top + h * 0.68;
    const sag = h * 0.22;
    const upper = `M${x0} ${top - 40}H${x1}V${rest - sag}Q${px} ${rest + sag} ${x0} ${rest - sag}Z`;
    const upperEdge = `M${x0} ${rest - sag}Q${px} ${rest + sag} ${x1} ${rest - sag}`;
    const lower = `M${x0} ${bot + 40}H${x1}V${bot + sag * 0.6}Q${px} ${bot - sag * 0.4} ${x0} ${bot + sag * 0.6}Z`;
    const lidFill = flat;
    const crease = v.stroke || (dark ? '#111' : '#141414');
    const creaseW = v.stroke ? v.sw * 0.8 : 1.3;
    return `
      <g class="cat__eye">
        <path d="${d}" fill="${v.iris}"/>
        <g clip-path="url(#ce${side}-${id})">
          <g class="cat__pupil"><g class="cat__pupil-shape"><circle cx="${px}" cy="${py}" r="${v.pupilR}" fill="${v.pupil}"/><circle class="cat__glint" cx="${px + v.pupilR * 0.38}" cy="${py - v.pupilR * 0.42}" r="${(v.pupilR * 0.24).toFixed(2)}" fill="${v.glint || '#F3F3F3'}"/></g></g>
          <g class="cat__lid-low" style="--close:${(-(bot - meet) * 0.32).toFixed(2)}px">
            <path d="${lower}" fill="${lidFill}"/>
          </g>
          <g class="cat__lid" style="--close:${(meet - rest + sag * 0.15).toFixed(2)}px;--open:${(-(rest - top) * 0.75).toFixed(2)}px">
            <path d="${upper}" fill="${lidFill}"/>
            <path class="cat__lid-edge" d="${upperEdge}" fill="none" stroke="${crease}" stroke-width="${creaseW}" stroke-linecap="round"/>
          </g>
        </g>
        ${v.eyeStroke ? `<path d="${d}" fill="none" stroke="${v.stroke}" stroke-width="${v.sw * 0.85}"/>` : ''}
      </g>`;
  };
  const whiskers = v.whiskers
    ? `<g class="cat__whiskers" fill="none" stroke="${dark ? '#777' : v.whiskers.color}" stroke-width="${v.stroke ? 1.3 : 1}" stroke-linecap="round" opacity="${v.whiskers.op}">
        ${(v.whiskers.n === 4 ? [WHISKERS[0], WHISKERS[1], WHISKERS[3], WHISKERS[4]] : WHISKERS).map((d) => `<path d="${d}"/>`).join('')}
      </g>`
    : '';

  return `
<svg class="cat__svg" viewBox="0 0 200 150" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="cf-${id}" gradientUnits="userSpaceOnUse" x1="100" y1="20" x2="100" y2="152">
      <stop offset="0" stop-color="#2a2a2a"/><stop offset=".5" stop-color="#212121"/><stop offset="1" stop-color="#1b1b1b"/>
    </linearGradient>
    <clipPath id="cel-${id}"><path d="${s.eyeL}"/></clipPath>
    <clipPath id="cer-${id}"><path d="${s.eyeR}"/></clipPath>
  </defs>
  ${tail ? `<path class="cat__tail" fill="${flat}"${stroke}/>` : ''}
  <g class="cat__body">
    <g class="cat__head" style="--ear-l:${s.earPivotL[0]}px ${s.earPivotL[1]}px;--ear-r:${s.earPivotR[0]}px ${s.earPivotR[1]}px">
      ${ear(s.earL, s.innerL, 'cat__ear--l')}
      ${ear(s.earR, s.innerR, 'cat__ear--r')}
      <path d="${s.head}" fill="${fur}"${stroke}/>
      ${eye('l')}${eye('r')}
      ${v.nose ? `<path d="${NOSE}" fill="${v.nose}"/>` : ''}
      ${v.mouth ? `<path d="${MOUTH}" fill="none" stroke="${v.mouth}" stroke-width="${v.stroke ? 1.6 : 1.1}" stroke-linecap="round"/>` : ''}
      ${whiskers}
    </g>
    <g class="cat__paws">
      ${PAWS.map((d) => `<path d="${d}" fill="${v.paw}"${stroke}/>`).join('')}
      ${v.toes ? `<path d="${TOES}" fill="none" stroke="${v.toes}" stroke-width="${v.stroke ? 1.6 : 1.3}" stroke-linecap="round" opacity="${v.stroke ? 1 : 0.8}"/>` : ''}
    </g>
  </g>
</svg>`;
}

/* ---------------------------------------------------------------
   Tail: a tapered spine that sways like a thinking cat's tail.
   A slow travelling wave runs base -> tip, the tip curls and
   uncurls into a question mark, with the odd quick tip flick.
   --------------------------------------------------------------- */
function tailRig(pathEl, [w0, w1]) {
  const N = 20;
  const SEG = 4.1;
  const base = { x: 168, y: 158 };
  const p = { amp: 0.12, hook: 0.75, lean: 0.1, puff: 1, speed: 1 };
  const target = { ...p };
  let flick = 0;
  let t = rand(0, 10);
  let last = 0;

  const frame = (now) => {
    const dt = Math.min((now - (last || now)) / 1000, 0.05);
    last = now;
    t += dt * p.speed;
    for (const k in p) p[k] += (target[k] - p[k]) * Math.min(dt * 4, 1);
    flick *= Math.pow(0.02, dt);

    const ω = (2 * Math.PI) / 3.8;
    const curlPhase = 0.7 + 0.3 * Math.sin(t * 0.55);
    const pts = [{ x: base.x, y: base.y }];
    let θ = p.lean + 0.05 * Math.sin(t * ω * 0.5);
    for (let i = 1; i <= N; i++) {
      const u = i / N;
      // travelling wave: delay grows toward the tip, amplitude grows too
      const wave = p.amp * Math.sin(t * ω - i * 0.42) * (0.25 + u);
      const hook = u > 0.55 ? -p.hook * curlPhase * Math.pow((u - 0.55) / 0.45, 1.3) * 1.5 : 0;
      const tip = u > 0.75 ? flick * Math.sin(now / 45 + i) * 0.5 * ((u - 0.75) / 0.25) : 0;
      θ += wave * 0.55 + hook * 0.55 + tip;
      const prev = pts[i - 1];
      pts.push({ x: prev.x + Math.sin(θ) * SEG, y: prev.y - Math.cos(θ) * SEG });
    }

    // offset the spine into a tapered outline
    const L = [];
    const R = [];
    pts.forEach((pt, i) => {
      const a = pts[Math.max(i - 1, 0)];
      const b = pts[Math.min(i + 1, N)];
      let nx = -(b.y - a.y);
      let ny = b.x - a.x;
      const len = Math.hypot(nx, ny) || 1;
      nx /= len;
      ny /= len;
      const u = i / N;
      const w = ((w0 + (w1 - w0) * (u * u * (3 - 2 * u))) / 2) * p.puff;
      L.push([pt.x + nx * w, pt.y + ny * w]);
      R.push([pt.x - nx * w, pt.y - ny * w]);
    });
    const smooth = (arr) => {
      let d = '';
      for (let i = 1; i < arr.length - 1; i++) {
        const mx = (arr[i][0] + arr[i + 1][0]) / 2;
        const my = (arr[i][1] + arr[i + 1][1]) / 2;
        d += `Q${arr[i][0].toFixed(2)} ${arr[i][1].toFixed(2)} ${mx.toFixed(2)} ${my.toFixed(2)}`;
      }
      const e = arr[arr.length - 1];
      return d + `L${e[0].toFixed(2)} ${e[1].toFixed(2)}`;
    };
    const tipR = ((w1 / 2) * p.puff).toFixed(2);
    const Rr = R.slice().reverse();
    const d =
      `M${L[0][0].toFixed(2)} ${L[0][1].toFixed(2)}` +
      smooth(L) +
      `A${tipR} ${tipR} 0 0 0 ${Rr[0][0].toFixed(2)} ${Rr[0][1].toFixed(2)}` +
      smooth(Rr) +
      'Z';
    pathEl.setAttribute('d', d);
  };

  let raf = 0;
  const loop = (now) => {
    frame(now);
    raf = requestAnimationFrame(loop);
  };
  frame(performance.now());

  return {
    start() {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    },
    stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    },
    flick() {
      flick = 1;
    },
    mood(m) {
      if (m === 'startled') Object.assign(target, { amp: 0.004, hook: 0, lean: 0, puff: 1.75, speed: 3 });
      else if (m === 'curious') Object.assign(target, { amp: 0.06, hook: 1, lean: 0.05, puff: 1, speed: 0.7 });
      else Object.assign(target, { amp: 0.12, hook: 0.75, lean: 0.1, puff: 1, speed: 1 });
    },
  };
}

const CAT_VARIANTS = Object.keys(VARIANTS);

function createCat({ variant = 'classic', tail = false, size, dark = false, label = 'Peekaboo cat' } = {}) {
  const id = ++uid;
  const v = { ...VARIANTS[variant] };
  if (dark && v.stroke) Object.assign(v, { stroke: '#E8E8E8', fur: '#222', paw: '#222', iris: '#222', pupil: '#E8E8E8', glint: '#222', toes: '#E8E8E8', nose: '#E8E8E8', mouth: '#E8E8E8' });
  if (dark && variant === 'silhouette') v.whiskers = { ...v.whiskers, color: '#666' };
  const s = SHAPES[v.shape];

  const el = document.createElement('div');
  el.className = `cat cat--${variant}${dark ? ' cat--dark' : ''}${v.lid ? ' cat--lidded' : ''}`;
  if (size) el.style.setProperty('--cat-w', size);
  el.innerHTML = `<button class="cat__hit" type="button" tabindex="-1" aria-label="${label}"></button>${markup(id, v, s, { tail, dark })}`;

  const svgEl = el.querySelector('.cat__svg');
  const head = el.querySelector('.cat__head');
  const pupils = [...el.querySelectorAll('.cat__pupil')];
  const ears = [...el.querySelectorAll('.cat__ear')];
  const hit = el.querySelector('.cat__hit');
  const tailEl = el.querySelector('.cat__tail');
  const tailCtl = tailEl ? tailRig(tailEl, v.tailW) : null;

  let up = false;
  let timers = [];
  const later = (fn, ms) => timers.push(setTimeout(fn, ms));
  const clearAll = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  // Blink: quick close, tiny hold, softer open. Slow blink = "I trust you".
  const blink = (slow = false) => {
    if (!up) return;
    el.classList.toggle('is-slow-blink', slow);
    el.classList.add('is-blinking');
    later(() => el.classList.remove('is-blinking'), slow ? 720 : 115);
    later(() => el.classList.remove('is-slow-blink'), slow ? 1250 : 330);
  };
  const life = () => {
    if (!up) return;
    const r = Math.random();
    if (r < 0.5) {
      blink();
      if (Math.random() < 0.25) later(blink, 260);
    } else if (r < 0.8 || !tailCtl) {
      const ear = ears[Math.random() < 0.5 ? 0 : 1];
      ear.classList.add('is-twitch');
      later(() => ear.classList.remove('is-twitch'), 380);
    } else {
      tailCtl.flick();
    }
    later(life, rand(1400, 3600));
  };

  let raf = 0;
  const onPointer = (e) => {
    if (!up || raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = svgEl.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height * 0.68);
      const d = Math.hypot(dx, dy) || 1;
      const k = Math.min(d / 260, 1) * 3.2;
      pupils.forEach((p) => p.setAttribute('transform', `translate(${((dx / d) * k).toFixed(2)} ${((dy / d) * k * 0.7).toFixed(2)})`));
      head.style.setProperty('--tilt', `${Math.max(-5, Math.min(5, dx / 70)).toFixed(2)}deg`);
    });
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  const glance = () => {
    if (!up) return;
    const x = rand(-3, 3);
    const y = rand(-1.5, 1.5);
    pupils.forEach((p) => p.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`));
    later(glance, rand(1200, 2600));
  };

  let hoverTimer;
  hit.addEventListener('pointerenter', () => {
    el.classList.add('is-curious');
    tailCtl?.mood('curious');
    hoverTimer = setTimeout(() => blink(true), 900);
  });
  hit.addEventListener('pointerleave', () => {
    el.classList.remove('is-curious');
    tailCtl?.mood('idle');
    clearTimeout(hoverTimer);
  });

  const api = {
    el,
    variant,
    get isUp() {
      return up;
    },
    peek() {
      if (up) return;
      up = true;
      clearAll();
      el.classList.remove('is-ducking', 'is-startled');
      el.classList.add('is-up');
      hit.tabIndex = 0;
      tailCtl?.mood('idle');
      tailCtl?.start();
      later(life, 1800);
      if (!matchMedia('(hover: hover)').matches) later(glance, 1600);
    },
    duck() {
      if (!up) return;
      up = false;
      clearAll();
      clearTimeout(hoverTimer);
      el.classList.remove('is-up', 'is-curious', 'is-blinking', 'is-slow-blink');
      el.classList.add('is-ducking');
      hit.tabIndex = -1;
      later(() => {
        el.classList.remove('is-ducking', 'is-startled');
        tailCtl?.stop();
      }, 700);
    },
    startle() {
      if (!up) return;
      el.classList.add('is-startled');
      tailCtl?.mood('startled');
      setTimeout(() => api.duck(), 180);
    },
    onClick(fn) {
      hit.addEventListener('click', fn);
    },
    destroy() {
      clearAll();
      tailCtl?.stop();
      window.removeEventListener('pointermove', onPointer);
      el.remove();
    },
  };
  return api;
}



/* ---------------------------------------------------------------
   Peekaboo: a silhouette cat that peeks over real edges on the page.
   Click it before it ducks to "find" it. Find all to get the reward.
   Set ENABLED = false to switch the whole thing off.
   --------------------------------------------------------------- */
const ENABLED = true;
const STORE = 'peekaboo-found-v1';
const REWARD = {
  title: 'You found all 5 cats!',
  text: 'Small details, noticed. That’s exactly how I approach design.',
  cta: { label: 'Say hi', href: '#contact' },
};

/* Each spot: the element whose TOP edge the cat hides behind,
   where along that edge it sits (0..1), and its look. */
const SPOTS = [
  { id: 'about', ledge: '[data-peek="about"]', x: 0.72, tail: true },
  { id: 'banner', ledge: '[data-peek="banner"]', x: 0.86, tail: true },
  { id: 'quotes', ledge: '[data-peek="quotes"]', x: 0.78 },
  { id: 'contact', ledge: '[data-peek="contact"]', x: 0.18, tail: true },
  { id: 'footer', ledge: '[data-peek="footer"]', x: 0.9, dark: true },
];

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initPeekaboo() {
  if (!ENABLED || reduce || window.__peekaboo) return;

  const found = new Set(JSON.parse(localStorage.getItem(STORE) || '[]'));
  const layer = document.createElement('div');
  layer.className = 'peek-layer';
  layer.setAttribute('aria-hidden', 'false');
  document.body.appendChild(layer);

  /* ---------- counter + reward ---------- */
  const badge = document.createElement('div');
  badge.className = 'peek-badge';
  badge.setAttribute('role', 'status');
  badge.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V9.5C4 6 4.6 3.4 5.6 2.6c.5-.4 1.1-.3 1.6.2L10 6h4l2.8-3.2c.5-.5 1.1-.6 1.6-.2C19.4 3.4 20 6 20 9.5V21Z" fill="currentColor"/><circle cx="9.2" cy="13" r="1.6" fill="#F3F3F3"/><circle cx="14.8" cy="13" r="1.6" fill="#F3F3F3"/></svg>
    <span class="peek-badge__text"></span>`;
  document.body.appendChild(badge);
  const badgeText = badge.querySelector('.peek-badge__text');

  const reward = document.createElement('div');
  reward.className = 'peek-reward';
  reward.setAttribute('role', 'dialog');
  reward.setAttribute('aria-live', 'polite');
  reward.innerHTML = `
    <p class="peek-reward__title">${REWARD.title}</p>
    <p class="peek-reward__text">${REWARD.text}</p>
    <div class="peek-reward__actions">
      <a class="peek-reward__cta" href="${REWARD.cta.href}">${REWARD.cta.label} <svg><use href="#i-arrow" /></svg></a>
      <button class="peek-reward__close" type="button">Close</button>
    </div>`;
  document.body.appendChild(reward);
  const closeReward = () => reward.classList.remove('is-open');
  reward.querySelector('.peek-reward__close').addEventListener('click', closeReward);
  reward.querySelector('.peek-reward__cta').addEventListener('click', closeReward);

  const total = SPOTS.length;
  const renderBadge = (pulse) => {
    badgeText.textContent = found.size >= total ? `All ${total} cats found` : `${found.size} / ${total} cats found`;
    badge.classList.toggle('is-shown', found.size > 0);
    if (pulse) {
      badge.classList.remove('is-pulse');
      void badge.offsetWidth;
      badge.classList.add('is-pulse');
    }
  };
  renderBadge(false);

  /* ---------- cats ---------- */
  const spots = SPOTS.map((s) => ({ ...s, cat: null, tries: 0, el: null }));

  const place = (spot) => {
    const ledge = document.querySelector(spot.ledge);
    spot.el = ledge;
    if (!spot.cat || !ledge || !ledge.offsetParent) return false;
    const r = ledge.getBoundingClientRect();
    const w = spot.cat.el.offsetWidth;
    const x = r.left + window.scrollX + r.width * spot.x - w / 2;
    spot.cat.el.style.left = `${Math.max(8, Math.min(x, document.documentElement.clientWidth - w - 8))}px`;
    spot.cat.el.style.top = `${r.top + window.scrollY - spot.cat.el.offsetHeight + 1}px`;
    return true;
  };

  spots.forEach((spot) => {
    spot.cat = createCat({ variant: 'ginger', tail: !!spot.tail, dark: !!spot.dark, label: 'A hiding cat. Click to find it' });
    layer.appendChild(spot.cat.el);
    spot.cat.onClick(() => {
      if (!spot.cat.isUp) return;
      spot.cat.startle();
      if (!found.has(spot.id)) {
        found.add(spot.id);
        localStorage.setItem(STORE, JSON.stringify([...found]));
        renderBadge(true);
        if (found.size === total) setTimeout(() => reward.classList.add('is-open'), 700);
      }
    });
  });
  const placeAll = () => spots.forEach(place);

  /* ---------- when to peek ---------- */
  let lastPeek = 0;
  let scrollIdle = null;
  let active = null;
  const COOLDOWN = 9000;
  const STAY = 6500;

  const visibleEnough = (el) => {
    if (!el || !el.offsetParent) return false;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    // the ledge line should sit comfortably inside the viewport
    return r.top > vh * 0.22 && r.top < vh * 0.85;
  };

  const tryPeek = () => {
    if (active || document.hidden) return;
    if (Date.now() - lastPeek < COOLDOWN) return;
    const candidates = spots.filter((s) => !found.has(s.id) && s.tries < 3 && visibleEnough(document.querySelector(s.ledge)));
    if (!candidates.length) return;
    const spot = candidates[Math.floor(Math.random() * candidates.length)];
    if (!place(spot)) return;
    spot.tries++;
    active = spot;
    lastPeek = Date.now();
    spot.cat.peek();
    setTimeout(() => {
      if (spot.cat.isUp) spot.cat.duck();
      setTimeout(() => {
        if (active === spot) active = null;
      }, 700);
    }, STAY);
  };

  const onScroll = () => {
    // duck if the user scrolls the active cat out of comfortable view
    if (active && !visibleEnough(document.querySelector(active.ledge))) {
      active.cat.duck();
      const a = active;
      setTimeout(() => {
        if (active === a) active = null;
      }, 700);
    }
    clearTimeout(scrollIdle);
    scrollIdle = setTimeout(tryPeek, 1100);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', placeAll);
  window.addEventListener('load', placeAll);
  placeAll();
  // gentle periodic check for readers who pause without scrolling
  setInterval(() => {
    placeAll();
    tryPeek();
  }, 4000);

  // dev helper: localStorage.removeItem('peekaboo-found-v1') to reset, or window.__peekaboo
  window.__peekaboo = {
    reset() {
      found.clear();
      localStorage.removeItem(STORE);
      spots.forEach((s) => (s.tries = 0));
      renderBadge(false);
    },
    peek(id) {
      const s = spots.find((x) => x.id === id) || spots[0];
      if (active && active !== s) active.cat.duck();
      if (place(s)) {
        active = s;
        s.cat.peek();
      }
    },
  };
}

window.initPeekaboo = initPeekaboo;
})();
