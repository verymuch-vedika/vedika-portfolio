const FONT_IDS={300:'D7WD5OXZFWQ5T76HSPWAC7MNKAJXE2YG/LUGNSPO5YC34ABNB2O6K7AFDSOJZT56V/WNDVG7O66ENLOD43GS7FBUCC4KMT5OM2',400:'TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY',500:'P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP',700:'LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR'};
async function loadDev(){const f=new FontFace('NotoDev','url(https://fonts.gstatic.com/s/notosansdevanagari/v33/TuG7UUFzXI5FBtUq5a8bjKYTZjtRU6Sgv3NaV_SNmI0b8QQCQmHN5DV_5Kl4-A.woff2)',{weight:'100 900'});await f.load();document.fonts.add(f);}
async function loadFonts(){for(const w in FONT_IDS){const f=new FontFace('Sat'+w,`url(https://cdn.fontshare.com/wf/${FONT_IDS[w]}.woff2)`);await f.load();document.fonts.add(f);}}
// dark=true: dark text on light bg
function makeCtx(x,W,H,BG,dark,thr){
  const bgS=BG[0]+BG[1]+BG[2];const ink=(d,k)=>{const s=d[k]+d[k+1]+d[k+2];if(thr<0)return Math.abs(s-bgS)>-thr;return dark?s<(thr||380):s>(thr||430)};
  function glyphRuns(x0,x1,y0,y1){x0=Math.max(0,x0);x1=Math.min(W-1,x1);const w=x1-x0+1,h=y1-y0;const d=x.getImageData(x0,y0,w,h).data;const col=new Uint8Array(w+1);const top=new Array(w).fill(1e9),bot=new Array(w).fill(-1);
    for(let i=0;i<w;i++)for(let j=0;j<h;j++){const k=(j*w+i)*4;if(ink(d,k)){col[i]=1;top[i]=Math.min(top[i],j);bot[i]=Math.max(bot[i],j)}}
    const g=[];let s=-1;for(let i=0;i<=w;i++){if(col[i]&&s<0)s=i;if(!col[i]&&s>=0){let t=1e9,b=-1;for(let k=s;k<i;k++){t=Math.min(t,top[k]);b=Math.max(b,bot[k])}g.push({x0:x0+s,x1:x0+i-1,top:y0+t,bot:y0+b});s=-1}}return g}
  function replace(g,prev,next,from,to,opt={}){
    const L=Math.max(g.x0-2,(prev?prev.x1:-1e9)+1),R=Math.min(g.x1+2,(next?next.x0:1e9)-1);const pad=4;const by=g.top-pad,bh=g.bot-g.top+1+pad*2,bw=R-L+1;
    const orig=x.getImageData(L,by,bw,bh).data;let mx=null;for(let k=0;k<orig.length;k+=4){const s=orig[k]+orig[k+1]+orig[k+2];if(!mx||(dark?s<mx[3]:s>mx[3]))mx=[orig[k],orig[k+1],orig[k+2],s]}
    const h=g.bot-g.top+1;const tc=createCanvas(bw,bh),tx=tc.getContext('2d');let best=null;
    for(const wt of (opt.weights||[300,400,500,700]))for(const sf of [0.95,0.98,1,1.02])for(const cf of (opt.cfs||[0.75,0.85,0.93,1]))for(const dx of [-1,0,1]){
      tx.fillStyle=`rgb(${BG})`;tx.fillRect(0,0,bw,bh);const fam=opt.family;const FN=(z)=>fam?`${wt} ${z}px ${fam}`:`${z}px Sat${wt}`;tx.font=FN(100);const mm=tx.measureText(from);const sz=100*h/(mm.actualBoundingBoxAscent+mm.actualBoundingBoxDescent)*sf;tx.font=FN(sz);const m2=tx.measureText(from);
      const col=[0,1,2].map(i=>Math.round(BG[i]+(mx[i]-BG[i])*cf));tx.fillStyle=`rgb(${col})`;tx.fillText(from,g.x0-L+m2.actualBoundingBoxLeft+dx,opt.asc?pad+m2.actualBoundingBoxAscent:pad+h);
      const dd=tx.getImageData(0,0,bw,bh).data;let e=0;for(let k=0;k<dd.length;k+=4)e+=Math.abs(dd[k]-orig[k])+Math.abs(dd[k+1]-orig[k+1])+Math.abs(dd[k+2]-orig[k+2]);
      if(!best||e<best.e)best={e,wt,sz,col,dx,asc:m2.actualBoundingBoxAscent}}
    const FF=opt.family?`${best.wt} ${best.sz}px ${opt.family}`:`${best.sz}px Sat${best.wt}`;
    if(opt.blur){const P=6;const tc2=createCanvas(bw+2*P,bh+2*P),t2=tc2.getContext('2d');t2.drawImage(x.canvas,L-P,by-P,bw+2*P,bh+2*P,0,0,bw+2*P,bh+2*P);t2.fillStyle=`rgb(${BG})`;t2.fillRect(P,P,bw,bh);t2.font=FF;const m4=t2.measureText(to);t2.fillStyle=`rgb(${best.col})`;const tw=m4.actualBoundingBoxRight+m4.actualBoundingBoxLeft;const sx=opt.fitW?(g.x1-g.x0+1)/tw:1;t2.save();t2.translate(g.x0-L+P+best.dx,g.bot+1-by+P);t2.scale(sx,1);t2.fillText(to,m4.actualBoundingBoxLeft,0);t2.restore();
      const tc3=createCanvas(bw+2*P,bh+2*P),t3=tc3.getContext('2d');t3.filter=`blur(${opt.blur}px)`;t3.drawImage(tc2,0,0);x.drawImage(tc3,P-1,P-1,bw+2,bh+2,L-1,by-1,bw+2,bh+2);return {to,wt:best.wt,sz:+best.sz.toFixed(1),x:g.x0,y:g.top}}
    x.fillStyle=`rgb(${BG})`;x.fillRect(L,by,bw,bh);x.font=FF;const m3=x.measureText(to);x.fillStyle=`rgb(${best.col})`;const tw3=m3.actualBoundingBoxLeft+m3.actualBoundingBoxRight;const ox=opt.center?Math.round((g.x0+g.x1)/2-tw3/2):g.x0;x.fillText(to,ox+m3.actualBoundingBoxLeft+best.dx,opt.asc?g.top+best.asc:g.bot+1);
    return {to,wt:best.wt,sz:+best.sz.toFixed(1),x:g.x0,y:g.top}}
  function lines(y0,y1,x0=0,x1=W-1){const w=x1-x0+1;const d=x.getImageData(x0,y0,w,y1-y0).data;const out=[];let inL=false,s=0;for(let j=0;j<y1-y0;j++){let n=0;for(let i=0;i<w;i++)if(ink(d,(j*w+i)*4))n++;const any=n>0;if(any&&!inL){inL=true;s=j}if(!any&&inL){inL=false;out.push({y0:y0+s,y1:y0+j,n})}}if(inL)out.push({y0:y0+s,y1:y1});return out}
  function words(gs){const gp=gs.slice(1).map((g,i)=>g.x0-gs[i].x1).sort((a,b)=>a-b);const med=gp[Math.floor(gp.length*0.4)]||2;const th=med*1.8+1;const ws=[];let cur=[];for(const g of gs){if(cur.length&&g.x0-cur[cur.length-1].x1>th){ws.push(cur);cur=[]}cur.push(g)}if(cur.length)ws.push(cur);return ws}
  return {glyphRuns,replace,lines,words};
}
async function fixFooter(path,opt={}){
  const im=await readImage(path);const W=im.width,H=im.height;const c=createCanvas(W,H);const x=c.getContext('2d');x.drawImage(im,0,0);
  const BG=opt.bg||[14,95,157];
  const near=(d,k)=>Math.abs(d[k]-BG[0])<14&&Math.abs(d[k+1]-BG[1])<14&&Math.abs(d[k+2]-BG[2])<14;
  const scanTop=opt.scanTop??0, y1=opt.footerBottom??H;
  let fb=-1,ft=-1,miss=0;
  for(let y=y1-1;y>=scanTop;y--){const d=x.getImageData(0,y,W,1).data;let n=0,m=0;for(let i=0;i<W;i+=4){m++;if(near(d,i*4))n++}
    if(n/m>0.3){if(fb<0)fb=y;ft=y;miss=0}else if(fb>=0){if(++miss>40)break}}
  const T=makeCtx(x,W,H,BG,false);
  const all=T.lines(ft,fb+1);
  const ls=all.filter(l=>l.y1-l.y0>Math.max(6,W*0.004));
  const thin=all.filter(l=>l.y1-l.y0<=Math.max(6,W*0.004));
  const res=[];
  const runs=l=>T.glyphRuns(0,W-1,l.y0-1,l.y1+1);
  const mobile=opt.mobile;
  let header,url,dl,cr;
  if(!mobile){for(let i=0;i+1<ls.length;i++){const wa=T.words(runs(ls[i])),wb=T.words(runs(ls[i+1]));if(wa.length<2)continue;const ux=wb[wb.length-1][0].x0,ax=wa[wa.length-2][0].x0;if(Math.abs(ux-ax)<=3&&ux>W*0.5){header=ls[i];url=ls[i+1];break}}cr=ls[ls.length-1];dl=ls[ls.length-2];}
  else{const W_=ls.map(l=>T.words(runs(l)));for(let i=0;i+2<ls.length;i++){if(W_[i].length==2&&W_[i+1].length==1&&Math.abs(W_[i][0][0].x0-W_[i+1][0][0].x0)<=3){header=ls[i];url=ls[i+1];dl=ls[i+2];break}}
for(let i=ls.length-1;i>=0;i--){const w=W_[i];if(w.length>=3){const w1=w[1];if(w1[w1.length-1].x1-w1[0].x0+1<=ls[i].y1-ls[i].y0+2){cr=ls[i];break}}}}
  // header
  {const g=runs(header);const ws=T.words(g);const w=ws[ws.length-1];const i=g.indexOf(w[0]);res.push(T.replace(w[0],g[i-1],g[i+1],'B','D',{weights:[500,700]}));}
  {const g=runs(url);const ws=T.words(g);const w=ws[ws.length-1];const xt=Math.min(...w.slice(0,3).map(q=>q.top));const t=w.find(q=>q.top<xt-2);const i=g.indexOf(t);res.push(T.replace(t,g[i-1],g[i+1],'b','d',{weights:[300,400]}));}
  {const g=runs(dl);const cap=g[0];let k=-1;for(let i=0;i+3<g.length;i++){if([0,1,2,3].every(j=>Math.abs(g[i+j].top-cap.top)<=1&&Math.abs(g[i+j].bot-cap.bot)<=1)){k=i;break}}res.push(T.replace(g[k],g[k-1],g[k+1],'B','D',{weights:[400,500]}));}
  {const g=runs(cr);const ws=T.words(g);const w=ws[2];const i=g.indexOf(w[0]);res.push(T.replace(w[0],g[i-1],g[i+1],'B','D',{weights:[300,400]}));}
  if(!opt.dry)await saveFile(path,c);
  return {W,H,ft,fb,res,canvas:c};
}

async function fixFooter2(path,opt={}){
  const im=await readImage(path);const W=im.width,H=im.height;const c=createCanvas(W,H);const x=c.getContext('2d');x.drawImage(im,0,0);
  const BG=opt.bg||[14,95,157];
  const near=(d,k)=>Math.abs(d[k]-BG[0])<14&&Math.abs(d[k+1]-BG[1])<14&&Math.abs(d[k+2]-BG[2])<14;
  const scanTop=opt.scanTop??0, y1=opt.footerBottom??H;
  let fb=-1,ft=-1,miss=0;
  for(let y=y1-1;y>=scanTop;y--){const d=x.getImageData(0,y,W,1).data;let n=0,m=0;for(let i=0;i<W;i+=4){m++;if(near(d,i*4))n++}
    if(n/m>0.3){if(fb<0)fb=y;ft=y;miss=0}else if(fb>=0){if(++miss>40)break}}
  const T=makeCtx(x,W,H,BG,false);
  const ls=T.lines(ft,fb+1).filter(l=>l.y1-l.y0>Math.max(6,W*0.004));
  const runs=l=>T.glyphRuns(0,W-1,l.y0-1,l.y1+1);const res=[];const mobile=opt.mobile;let header,url,cr;
  if(!mobile){for(let i=0;i+1<ls.length;i++){const wa=T.words(runs(ls[i])),wb=T.words(runs(ls[i+1]));if(wa.length<2)continue;const ux=wb[wb.length-1][0].x0,ax=wa[wa.length-2][0].x0;if(Math.abs(ux-ax)<=3&&ux>W*0.5){header=ls[i];url=ls[i+1];break}}cr=ls[ls.length-1];}
  else{const W_=ls.map(l=>T.words(runs(l)));for(let i=0;i+2<ls.length;i++){if(W_[i].length==2&&W_[i+1].length==1&&Math.abs(W_[i][0][0].x0-W_[i+1][0][0].x0)<=3){header=ls[i];url=ls[i+1];break}}
    for(let i=ls.length-1;i>=0;i--){const w=W_[i];if(w.length>=3){const w1=w[1];if(w1[w1.length-1].x1-w1[0].x0+1<=ls[i].y1-ls[i].y0+2){cr=ls[i];break}}}}
  const span=(g,ws,a,b)=>{const gs=ws.slice(a,b).flat();const i0=g.indexOf(gs[0]),i1=g.indexOf(gs[gs.length-1]);return {box:{x0:gs[0].x0,x1:gs[gs.length-1].x1,top:Math.min(...gs.map(q=>q.top)),bot:Math.max(...gs.map(q=>q.bot))},prev:g[i0-1],next:g[i1+1]}};
  {const g=runs(header);const ws=T.words(g);const s=span(g,ws,ws.length-1,ws.length);res.push(T.replace(s.box,s.prev,s.next,'Dharatpetroleum','DPCL',{weights:[700],cfs:[1],asc:1}));}
  {const g=runs(url);const ws=T.words(g);const s=span(g,ws,ws.length-1,ws.length);res.push(T.replace(s.box,s.prev,s.next,'www.dharatpetroleum.in','www.dpcl.in',{weights:[300],cfs:[1],asc:1}));}
  {const g=runs(cr);const ws=T.words(g);if(!mobile){const nL=ws.filter(w=>w[0].x0<W*0.5).length;const s=span(g,ws,2,nL);res.push(T.replace(s.box,s.prev,null,'Dharat Petroleum Corporation Limited All Rights Reserved.','DPCL All Rights Reserved.',{weights:[300],cfs:[1],asc:1}));}
    else{const s=span(g,ws,0,ws.length);res.push(T.replace(s.box,null,null,'2024 © Dharat Petroleum Corporation Limited','2024 © DPCL',{weights:[300],center:true,cfs:[1],asc:1}));}}
  if(!opt.dry)await saveFile(path,c);
  return {W,H,ft,fb,n:ls.length,res,canvas:c};
}

async function fixEmail(path,y0,y1,x0,x1,thr){const im=await readImage(path);const W=im.width,H=im.height;const c=createCanvas(W,H);const x=c.getContext('2d');x.drawImage(im,0,0);
  const bgd=x.getImageData(x0,y0,1,1).data;const BG=[bgd[0],bgd[1],bgd[2]];const T=makeCtx(x,W,H,BG,true,thr);
  const ls=T.lines(y0,y1,x0,x1);const out=[];
  for(const l of ls){const g=T.glyphRuns(x0,x1,l.y0-1,l.y1+1);const ws=T.words(g);const w=ws[ws.length-1];if(w.length<15)continue;const base=Math.min(...w.map(q=>q.bot)),tp=Math.min(...w.map(q=>q.top));const at=w.findIndex(q=>q.top<=tp+1&&q.bot>base+1);const t=w[at+1];const i=g.indexOf(t);out.push(T.replace(t,g[i-1],g[i+1],'b','d',{weights:[300,400,500]}));}
  await saveFile(path,c);return {out,canvas:c};}
