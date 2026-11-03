/**
 * Content for the Manufacturing industry landing page.
 *
 * Source of truth: the hand-authored design. CSS is scoped under the `.hc`
 * wrapper so its generic class names never collide with the app's global
 * styles or the real SiteHeader / SiteFooter. The page's own <header>,
 * <footer> and behaviour <script>s are stripped here; the interactions
 * (persona tabs, stat count-up, reduced-motion SVG pause) are re-implemented
 * in ManufacturingLanding (client).
 */

export const MFG_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
.hc{
  --ink-950:#030b18;--ink-900:#061426;--ink-800:#082746;--ink-700:#0c2f57;
  --mist-50:#f4f7fb;--line:#d7e0ec;--line-soft:#e3e9f2;
  --electric:#1258e8;--coral-500:#00a8ff;--cyan:#38e0f5;--coral-300:#63cdf7;--accent:#ff786d;--violet:#93b2fb;
  --text:#061426;--muted:#4a5a70;--muted-2:#33435a;--faint:#5b6b82;
  --on-dark:#b8c6da;--on-dark-2:#c9d5e6;--on-dark-3:#9fb0c8;
  --radius:14px;--card-radius:20px;
  --mono:"JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,monospace;
}
.hc *{box-sizing:border-box}
.hc{scroll-behavior:smooth;overflow-x:clip}
.hc{margin:0;overflow-x:clip;font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.6;color:var(--text);background:#fff}
.hc img,.hc svg{max-width:100%;display:block}
.hc a{color:var(--electric)}
.hc a:hover{color:#0b3fb0}
.hc h1,.hc h2,.hc h3,.hc h4{font-family:Sora,Inter,sans-serif;font-weight:600;margin:0}
.hc p{margin:0}
.hc .container{max-width:1280px;margin:0 auto;padding:0 24px}
.hc .section{padding:104px 0}
.hc .bg-white{background:#fff}
.hc .bg-mist{background:var(--mist-50)}
.hc .bg-dark{background:var(--ink-900);color:#fff}
.hc .kicker{font-family:var(--mono);font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--electric);margin-bottom:16px;display:inline-flex;align-items:center;gap:8px}
.hc .kicker:before{content:"//";color:var(--coral-500)}
.hc .bg-dark .kicker,.hc .hero .kicker{color:var(--coral-300)}
.hc .bg-dark .kicker:before,.hc .hero .kicker:before{color:var(--cyan)}
.hc .h2{font-size:clamp(28px,3.6vw,44px);line-height:1.1;letter-spacing:-.8px}
.hc .lead{font-size:17px;color:var(--muted);margin-top:20px}
.hc .bg-dark .lead{color:var(--on-dark)}
.hc .center{text-align:center;margin-left:auto;margin-right:auto}
.hc .head{max-width:800px}
.hc .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:var(--radius);font-weight:600;font-size:15px;text-decoration:none;transition:filter .2s,background .2s,border-color .2s}
.hc .btn-primary{background:linear-gradient(135deg,#1258e8,#00a8ff);color:#fff}
.hc .btn-primary:hover{color:#fff;filter:brightness(1.1)}
.hc .btn-ghost{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.18);color:#fff}
.hc .btn-ghost:hover{color:#fff;background:rgba(255,255,255,.1)}
.hc .btn-light{background:#fff;color:var(--ink-900);border:1px solid var(--line)}
.hc .btn-light:hover{color:var(--ink-900);border-color:#9fb6dc}
.hc .mono{font-family:var(--mono)}
.hc /* ---------- header ---------- */
.site-header{position:relative;z-index:3;border-bottom:1px solid rgba(255,255,255,.06)}
.hc .site-header .container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding-top:20px;padding-bottom:20px}
.hc .logo{display:flex;flex-direction:column;text-decoration:none;color:#fff;line-height:1.1}
.hc .logo b{font-family:Sora,Inter,sans-serif;font-weight:700;font-size:22px;letter-spacing:-.3px}
.hc .logo b span{color:var(--cyan)}
.hc .logo small{font-size:9px;letter-spacing:3px;color:var(--coral-300);margin-top:4px}
.hc .nav{display:flex;flex-wrap:wrap;align-items:center;gap:22px;font-size:14px;font-weight:600}
.hc .nav a{color:#e9eff7;text-decoration:none}
.hc .nav a:hover{color:#fff}
.hc .nav .btn{padding:11px 22px;font-size:14px}
.hc /* ---------- hero (centred) ---------- */
.hero{position:relative;overflow:hidden;color:#fff;background:var(--ink-950)}
.hc .hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(99,205,247,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,205,247,.07) 1px,transparent 1px);background-size:48px 48px;mask-image:radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%);-webkit-mask-image:radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 80%)}
.hc .hero-glow{position:absolute;inset:0;background:radial-gradient(ellipse 50% 40% at 50% 0%,rgba(18,88,232,.55),transparent 70%),radial-gradient(ellipse 40% 30% at 85% 70%,rgba(56,224,245,.12),transparent 70%)}
.hc .hero-inner{position:relative;z-index:1;padding:56px 24px 0;text-align:center}
.hc .crumbs{font-size:13px;color:var(--on-dark-3);margin-bottom:28px}
.hc .crumbs a{color:var(--on-dark-3);text-decoration:none}
.hc .crumbs span{color:#e9eff7}
.hc .status{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:12px;color:#e9eff7;padding:7px 14px;border-radius:999px;border:1px solid rgba(99,205,247,.3);background:rgba(18,88,232,.15)}
.hc .status i{width:8px;height:8px;border-radius:50%;background:var(--cyan);box-shadow:0 0 0 4px rgba(56,224,245,.18)}
.hc .hero h1{font-size:clamp(38px,5.6vw,68px);line-height:1.04;letter-spacing:-1.6px;max-width:980px;margin:24px auto 0}
.hc .grad-text{background:linear-gradient(90deg,#38e0f5,#63cdf7 40%,#93b2fb);-webkit-background-clip:text;background-clip:text;color:transparent}
.hc .hero-sub{margin:24px auto 0;font-size:19px;color:var(--on-dark-2);max-width:720px}
.hc .hero .ctas{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:36px}
.hc .hero-visual{position:relative;max-width:1080px;margin:64px auto 0}
.hc .hero-stats{position:relative;z-index:1;border-top:1px solid rgba(255,255,255,.08);margin-top:0;background:rgba(3,11,24,.6);backdrop-filter:blur(6px)}
.hc .hero-stats .container{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}
.hc .hs{padding:28px 24px;border-right:1px solid rgba(255,255,255,.08);text-align:left}
.hc .hs:last-child{border-right:none}
.hc .hs .n{font-family:Sora,Inter,sans-serif;font-weight:600;font-size:34px;letter-spacing:-1px;line-height:1.1}
.hc .hs .l{font-size:13.5px;color:var(--on-dark);margin-top:6px}
.hc .hs .s{font-family:var(--mono);font-size:11px;color:var(--on-dark-3);margin-top:8px}
.hc .hs .s a{color:var(--on-dark-3)}
@media (max-width:700px){
.hc .hs{border-right:none;border-bottom:1px solid rgba(255,255,255,.08)}
}
.hc /* ---------- market chart ---------- */
.market{display:flex;flex-wrap:wrap;gap:56px;align-items:center}
.hc .market>.text{flex:1 1 380px;min-width:0}
.hc .market>.chart{flex:1.4 1 520px;min-width:0;background:var(--mist-50);border:1px solid var(--line);border-radius:24px;padding:32px}
.hc .chart h3{font-size:16px}
.hc .chart .sub{font-size:13px;color:var(--faint);margin-top:4px}
.hc .hbars{margin-top:28px;display:flex;flex-direction:column;gap:16px}
.hc .hb{display:grid;grid-template-columns:160px 1fr 64px;gap:14px;align-items:center;font-size:14px}
.hc .hb .tr{height:28px;background:#fff;border:1px solid var(--line-soft);border-radius:8px;overflow:hidden}
.hc .hb .fl{height:100%;border-radius:7px;background:linear-gradient(90deg,#1258e8,#00a8ff);display:flex;align-items:center;justify-content:flex-end;padding-right:8px;font-family:var(--mono);font-size:11px;color:#fff;white-space:nowrap}
.hc .hb .fl.soft{background:#b9cbea;color:var(--ink-900)}
.hc .hb b{font-family:var(--mono);font-size:14px;text-align:right;color:var(--electric)}
.hc .chart .note{margin-top:20px;font-size:12px;color:var(--faint)}
.hc .chart .note a{color:var(--faint)}
@media (max-width:560px){
.hc .hb{grid-template-columns:110px 1fr 52px;font-size:13px}
}
.hc .callouts{display:grid;gap:14px;margin-top:28px}
.hc .callout{display:flex;gap:14px;align-items:flex-start;padding:16px 18px;border:1px solid var(--line);border-radius:16px;background:#fff}
.hc .callout .ico{flex:none;width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:#eaf1fd}
.hc .callout p{font-size:15px;color:var(--muted-2)}
.hc /* ---------- trends timeline ---------- */
.timeline{margin-top:64px;border-top:1px solid rgba(255,255,255,.1)}
.hc .trow{display:grid;grid-template-columns:96px minmax(0,1.1fr) minmax(0,1fr);gap:32px;padding:40px 0;border-bottom:1px solid rgba(255,255,255,.1);align-items:start}
.hc .trow .idx{font-family:var(--mono);font-size:14px;color:var(--cyan);padding-top:6px}
.hc .trow h3{font-size:24px;line-height:1.25}
.hc .trow .body{font-size:16px;color:var(--on-dark);margin-top:12px}
.hc .trow .tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.hc .trow .tags span{font-family:var(--mono);font-size:11px;color:var(--coral-300);border:1px solid rgba(99,205,247,.3);border-radius:6px;padding:3px 8px}
.hc .metric{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:18px;padding:22px 24px}
.hc .metric .n{font-family:Sora,Inter,sans-serif;font-weight:600;font-size:40px;letter-spacing:-1px;line-height:1.05;color:#fff}
.hc .metric .n small{font-size:18px;color:var(--coral-300);letter-spacing:0}
.hc .metric .l{font-size:14px;color:var(--on-dark);margin-top:8px}
.hc .metric .imp{margin-top:16px;padding-top:14px;border-top:1px dashed rgba(255,255,255,.14);font-size:14px;color:var(--on-dark-2)}
.hc .metric .imp b{color:var(--cyan);font-weight:600}
.hc .metric .src{margin-top:10px;font-family:var(--mono);font-size:11px;color:var(--on-dark-3)}
.hc .metric .src a{color:var(--on-dark-3)}
@media (max-width:900px){
.hc .trow{grid-template-columns:1fr;gap:16px}
.hc .trow .idx{padding:0}
}
.hc /* ---------- shift (old vs new) ---------- */
.shift-wrap{display:flex;flex-wrap:wrap;gap:56px;align-items:center;margin-top:56px}
.hc .shift-wrap>.art{flex:1 1 400px;min-width:0}
.hc .shift-wrap>.tbl{flex:1.3 1 520px;min-width:0}
.hc .shift{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:#fff}
.hc .shift th{font-family:var(--mono);font-size:12px;text-transform:uppercase;letter-spacing:1px;text-align:left;padding:16px 20px;background:var(--mist-50);color:var(--faint);font-weight:600}
.hc .shift th.now{background:var(--ink-900);color:var(--cyan)}
.hc .shift td{padding:16px 20px;font-size:15px;vertical-align:top;border-top:1px solid var(--line-soft)}
.hc .shift td:first-child{color:var(--faint);text-decoration:line-through;text-decoration-color:rgba(255,120,109,.6)}
.hc .shift td:last-child{color:var(--text);font-weight:500;background:#f7faff}
@media (max-width:600px){
.hc .shift th,.hc .shift td{padding:12px 14px;font-size:14px}
}
.hc /* ---------- segments bento ---------- */
.bento{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:16px;margin-top:56px}
.hc .tile{border:1px solid var(--line);border-radius:20px;padding:24px;background:#fff;display:flex;flex-direction:column;gap:10px;position:relative;overflow:hidden}
.hc .tile h3{font-size:18px}
.hc .tile p{font-size:14.5px;color:var(--muted)}
.hc .tile .who{font-family:var(--mono);font-size:11.5px;color:var(--electric);margin-top:auto;padding-top:10px}
.hc .tile.big{grid-column:span 3;background:var(--ink-900);color:#fff;border-color:var(--ink-900)}
.hc .tile.big p{color:var(--on-dark)}
.hc .tile.big .who{color:var(--cyan)}
.hc .tile.w2{grid-column:span 2}
.hc .tile.w3{grid-column:span 3}
.hc .tile .glyph{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;background:#eaf1fd}
.hc .tile.big .glyph{background:rgba(99,205,247,.14)}
@media (max-width:1000px){
.hc .bento{grid-template-columns:repeat(2,minmax(0,1fr))}
.hc .tile.big,.hc .tile.w2,.hc .tile.w3{grid-column:span 2}
}
@media (max-width:640px){
.hc .bento{grid-template-columns:1fr}
.hc .tile.big,.hc .tile.w2,.hc .tile.w3{grid-column:span 1}
}
.hc /* ---------- flywheel ---------- */
.fly{display:flex;flex-wrap:wrap;gap:56px;align-items:center;margin-top:48px}
.hc .fly>.diagram{flex:1 1 440px;min-width:0}
.hc .fly>.steps{flex:1 1 440px;min-width:0;display:flex;flex-direction:column;gap:16px}
.hc .fstep{display:grid;grid-template-columns:52px 1fr;gap:16px;padding:22px;border-radius:18px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03)}
.hc .fstep .dot{width:52px;height:52px;border-radius:14px;display:grid;place-items:center;font-family:var(--mono);font-weight:600;font-size:15px}
.hc .fstep h3{font-size:19px}
.hc .fstep .q{font-family:var(--mono);font-size:12px;color:var(--coral-300);margin-top:4px}
.hc .fstep p{font-size:15px;color:var(--on-dark);margin-top:8px}
.hc /* ---------- personas (tabs) ---------- */
.tabs{display:flex;flex-wrap:wrap;gap:10px;margin-top:48px}
.hc .tab{appearance:none;border:1px solid var(--line);background:#fff;color:var(--muted-2);font:600 14px Inter,sans-serif;padding:12px 18px;border-radius:12px;cursor:pointer;display:inline-flex;align-items:center;gap:10px;min-height:44px;transition:background .2s,color .2s,border-color .2s}
.hc .tab:hover{border-color:#9fb6dc}
.hc .tab[aria-selected="true"]{background:var(--ink-900);color:#fff;border-color:var(--ink-900)}
.hc .tab .tn{font-family:var(--mono);font-size:11px;color:var(--electric)}
.hc .tab[aria-selected="true"] .tn{color:var(--cyan)}
.hc .panel{margin-top:24px;border:1px solid var(--line);border-radius:28px;overflow:hidden;background:#fff;box-shadow:0 20px 50px -30px rgba(6,20,38,.25)}
.hc .panel[hidden]{display:none}
.hc .p-grid{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr)}
.hc .p-side{background:var(--ink-900);color:#fff;padding:36px 32px;display:flex;flex-direction:column;gap:20px;position:relative;overflow:hidden}
.hc .p-side:after{content:"";position:absolute;inset:auto -80px -80px auto;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(18,88,232,.5),transparent 70%)}
.hc .p-side>*{position:relative;z-index:1}
.hc .p-side h3{font-size:24px;line-height:1.2}
.hc .p-side .role{font-size:14px;color:var(--on-dark-3);margin-top:4px}
.hc .p-side blockquote{margin:0;font-family:Sora,Inter,sans-serif;font-size:17px;line-height:1.5;color:#e9eff7;border-left:2px solid var(--cyan);padding-left:16px}
.hc .p-side .meta{display:grid;gap:12px;font-size:13.5px}
.hc .p-side .meta div{display:flex;justify-content:space-between;gap:12px;border-top:1px solid rgba(255,255,255,.1);padding-top:10px}
.hc .p-side .meta span:first-child{font-family:var(--mono);font-size:11px;color:var(--on-dark-3);text-transform:uppercase;letter-spacing:1px}
.hc .p-side .meta span:last-child{color:#fff;text-align:right}
.hc .p-main{padding:36px 36px 32px;display:flex;flex-direction:column;gap:26px}
.hc .lbl{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--faint);margin-bottom:10px}
.hc .pains{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
.hc .pain{display:flex;gap:10px;align-items:flex-start;font-size:15px;color:var(--muted-2);background:#fff6f5;border:1px solid #ffd9d5;border-radius:12px;padding:12px 14px}
.hc .pain svg{flex:none;margin-top:3px}
.hc .solve{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.hc .sv{border-radius:16px;padding:18px;border:1px solid var(--line-soft);background:var(--mist-50)}
.hc .sv .h{display:flex;align-items:center;gap:8px;font-family:Sora,Inter,sans-serif;font-weight:600;font-size:14px}
.hc .sv .h i{width:22px;height:22px;border-radius:6px;display:grid;place-items:center;font-style:normal;font-family:var(--mono);font-size:11px;color:#fff}
.hc .sv p{font-size:14px;color:var(--muted);margin-top:8px;line-height:1.55}
@media (max-width:900px){
.hc .p-grid{grid-template-columns:1fr}
.hc .solve{grid-template-columns:1fr}
}
.hc .result{display:flex;flex-wrap:wrap;gap:10px;align-items:center;font-size:15px;color:var(--muted-2);padding-top:18px;border-top:1px solid var(--line-soft)}
.hc .result b{color:var(--electric)}
.hc .chips{display:flex;flex-wrap:wrap;gap:8px}
.hc .chip{font-size:13px;padding:6px 12px;border-radius:999px;background:#eaf1fd;color:var(--electric);font-weight:500}
.hc /* ---------- buying stages swimlane ---------- */
.lanes{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;margin-top:56px;border:1px solid var(--line);border-radius:24px;overflow:hidden;background:#fff}
.hc .lane{padding:28px 24px;border-right:1px solid var(--line-soft);position:relative}
.hc .lane:last-child{border-right:none}
.hc .lane .st{font-family:var(--mono);font-size:12px;color:var(--electric);font-weight:600}
.hc .lane h3{font-size:20px;margin-top:6px}
.hc .lane .ask{font-size:14px;color:var(--faint);margin-top:6px;font-style:italic}
.hc .lane .roles{display:flex;flex-direction:column;gap:8px;margin-top:18px}
.hc .lane .r{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:500;padding:10px 12px;border-radius:12px;background:var(--mist-50);border:1px solid var(--line-soft)}
.hc .lane .r i{width:10px;height:10px;border-radius:3px;flex:none}
.hc .lane .feed{margin-top:18px;padding-top:14px;border-top:1px dashed var(--line);font-size:13.5px;color:var(--muted-2)}
.hc .lane .feed b{color:var(--electric)}
.hc .lane-bar{height:6px;background:linear-gradient(90deg,#1258e8,#00a8ff,#38e0f5)}
@media (max-width:1000px){
.hc .lanes{grid-template-columns:repeat(2,minmax(0,1fr))}
.hc .lane:nth-child(2n){border-right:none}
.hc .lane{border-bottom:1px solid var(--line-soft)}
}
@media (max-width:600px){
.hc .lanes{grid-template-columns:1fr}
.hc .lane{border-right:none}
}
.hc .legend{display:flex;flex-wrap:wrap;gap:18px;margin-top:20px;font-size:13px;color:var(--muted)}
.hc .legend span{display:inline-flex;align-items:center;gap:8px}
.hc .legend i{width:10px;height:10px;border-radius:3px;display:inline-block}
.hc /* ---------- FAQ grid ---------- */
.faq-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,460px),1fr));gap:20px;margin-top:56px}
.hc .faq{border:1px solid var(--line);border-radius:20px;padding:28px;background:#fff}
.hc .faq h3{font-size:18px;line-height:1.35;display:flex;gap:12px}
.hc .faq h3 span{font-family:var(--mono);font-size:13px;color:var(--electric);padding-top:3px;flex:none}
.hc .faq p{font-size:15px;color:var(--muted);margin-top:12px;padding-left:34px}
.hc /* ---------- CTA band ---------- */
.cta{position:relative;overflow:hidden;border-radius:32px;padding:72px 48px;text-align:center;color:#fff;background:linear-gradient(135deg,#0b3fb0 0%,#1258e8 45%,#00a8ff 100%)}
.hc .cta .grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:40px 40px;mask-image:radial-gradient(ellipse 70% 80% at 50% 50%,#000,transparent 80%);-webkit-mask-image:radial-gradient(ellipse 70% 80% at 50% 50%,#000,transparent 80%)}
.hc .cta>*{position:relative}
.hc .cta h2{font-size:clamp(28px,3.6vw,44px);letter-spacing:-.8px;line-height:1.1;max-width:820px;margin:0 auto}
.hc .cta p{font-size:18px;color:#e6eefc;max-width:680px;margin:18px auto 0}
.hc .cta .ctas{display:flex;flex-wrap:wrap;gap:14px;justify-content:center;margin-top:32px}
.hc .cta .btn-white{background:#fff;color:var(--electric)}
.hc .cta .btn-white:hover{color:#0b3fb0}
.hc .cta .small{font-size:13px;color:#d6e3fb;margin-top:16px}
@media (max-width:640px){
.hc .cta{padding:48px 24px}
.hc .section{padding:76px 0}
}
.hc .sources{font-size:13px;color:var(--faint);margin-top:56px}
.hc .sources ol{margin:12px 0 0;padding-left:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,340px),1fr));gap:6px 32px}
.hc .sources a{color:var(--faint)}
.hc .site-footer{background:var(--ink-950);color:var(--on-dark);padding:64px 0 32px}
.hc .site-footer .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px}
.hc .site-footer h4{margin:0 0 12px;font-size:14px;color:#fff;font-weight:600}
.hc .site-footer ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;font-size:14px}
.hc .site-footer a{color:var(--on-dark);text-decoration:none}
.hc .site-footer a:hover{color:#fff}
.hc .site-footer .bottom{margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;font-size:13px;color:#8a9ab2}
.hc .flow-dash{stroke-dasharray:6 8;animation:dash 6s linear infinite}
@keyframes dash{to{stroke-dashoffset:-140}}
.hc .blink{animation:blink 2.4s ease-in-out infinite}
@keyframes blink{0%,100%{opacity:.35}50%{opacity:1}}
@media (prefers-reduced-motion:reduce){
.hc .flow-dash,.hc .blink{animation:none}
}
@media (max-width:640px){
.hc .nav{gap:14px}
.hc .p-main,.hc .p-side{padding:26px 22px}
}`;

export const MFG_BODY = `<!-- =============== HERO =============== -->
<section class="hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-glow" aria-hidden="true"></div>

  

  <div class="container hero-inner">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span>Manufacturing</span></nav>
    <span class="status"><i aria-hidden="true"></i>Industry · Manufacturing · Market brief</span>
    <h1>Factories are investing again. <span class="grad-text">Getting on the supplier shortlist is harder than ever.</span></h1>
    <p class="hero-sub">Automation, reshoring and the push for uptime are pulling new investment into manufacturing, but buying committees are large, supplier qualification takes months and incumbents are hard to displace. Coral Blue Data helps companies that sell to manufacturers find the right plants, reach the whole buying committee, and turn it into pipeline.</p>
    <div class="ctas">
      <a class="btn btn-primary" href="/contact">Talk With a Manufacturing GTM Expert →</a>
      <a class="btn btn-ghost" href="/solutions">Explore Our Solutions</a>
    </div>

    <!-- Hero illustration: animated factory line + plant buying committee -->
    <div class="hero-visual">
      <svg id="factory-hero" role="img" aria-label="Animated illustration of a factory line, with a robot arm, turning gears and a conveyor, connected to the plant buying committee: plant lead, engineering, maintenance, procurement, safety and operations" viewBox="0 0 1080 380">
        <defs>
          <linearGradient id="hv-win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2f57"/><stop offset="1" stop-color="#061426"/></linearGradient>
          <linearGradient id="hv-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1258e8" stop-opacity=".6"/><stop offset="1" stop-color="#1258e8" stop-opacity="0"/></radialGradient>
          <clipPath id="hv-clip"><rect x="20" y="48" width="240" height="140" rx="10"/></clipPath>
        </defs>
        <ellipse cx="540" cy="250" rx="420" ry="140" fill="url(#hv-glow)"/>
        <!-- connectors -->
        <g fill="none" stroke="#38e0f5" stroke-opacity=".55" stroke-width="1.5">
          <path class="flow-dash" d="M400 150 C 300 150, 260 90, 170 90"/>
          <path class="flow-dash" d="M400 230 C 300 230, 260 220, 170 220"/>
          <path class="flow-dash" d="M400 300 C 300 300, 260 330, 170 330"/>
          <path class="flow-dash" d="M680 150 C 780 150, 820 90, 910 90"/>
          <path class="flow-dash" d="M680 230 C 780 230, 820 220, 910 220"/>
          <path class="flow-dash" d="M680 300 C 780 300, 820 330, 910 330"/>
        </g>
        <!-- central factory-line window -->
        <g transform="translate(400 40)">
          <rect width="280" height="320" rx="18" fill="url(#hv-win)" stroke="#63cdf7" stroke-opacity=".35"/>
          <g fill="#63cdf7" fill-opacity=".5"><circle cx="20" cy="20" r="4.5"/><circle cx="34" cy="20" r="4.5"/><circle cx="48" cy="20" r="4.5"/></g>
          <text x="140" y="24" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#9fb0c8">line-03.assembly</text>
          <g transform="translate(232 20)"><circle class="blink" r="4" fill="#38e0f5"/><text x="-10" y="4" text-anchor="end" font-family="JetBrains Mono, monospace" font-size="9" fill="#38e0f5">RUN</text></g>
          <line x1="0" y1="40" x2="280" y2="40" stroke="#63cdf7" stroke-opacity=".15"/>

          <!-- scene -->
          <rect x="20" y="48" width="240" height="140" rx="10" fill="#030b18" stroke="#63cdf7" stroke-opacity=".15"/>
          <g clip-path="url(#hv-clip)">
            <g stroke="#63cdf7" stroke-opacity=".07"><path d="M20 68h240M20 88h240M20 108h240M20 128h240M20 148h240M20 168h240M40 48v140M60 48v140M80 48v140M100 48v140M120 48v140M140 48v140M160 48v140M180 48v140M200 48v140M220 48v140M240 48v140"/></g>
            <!-- gears -->
            <g>
              <circle cx="206" cy="80" r="17" fill="none" stroke="#38e0f5" stroke-width="2"/>
              <circle cx="206" cy="80" r="5" fill="none" stroke="#38e0f5" stroke-width="2"/>
              <path d="M206 57v6M206 97v6M183 80h6M223 80h6M190 64l4 4M218 92l4 4M190 96l4-4M218 68l4-4" stroke="#38e0f5" stroke-width="5"/>
              <animateTransform attributeName="transform" type="rotate" from="0 206 80" to="360 206 80" dur="8s" repeatCount="indefinite"/>
            </g>
            <g>
              <circle cx="236" cy="106" r="11" fill="none" stroke="#93b2fb" stroke-width="2"/>
              <circle cx="236" cy="106" r="3" fill="#93b2fb"/>
              <path d="M236 91v5M236 116v5M221 106h5M246 106h5M225 95l3 3M244 114l3 3M225 117l3-3M244 98l3-3" stroke="#93b2fb" stroke-width="4"/>
              <animateTransform attributeName="transform" type="rotate" from="360 236 106" to="0 236 106" dur="5.3s" repeatCount="indefinite"/>
            </g>
            <!-- vision scanner -->
            <rect x="148" y="104" width="34" height="7" rx="2" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".6"/>
            <path d="M154 111l-8 46M176 111l8 46" stroke="#38e0f5" stroke-opacity=".45" stroke-dasharray="3 3"/>
            <rect x="148" y="116" width="34" height="1.5" fill="#38e0f5">
              <animate attributeName="y" values="116;150;116" dur="3.4s" repeatCount="indefinite"/>
            </rect>
            <!-- robot arm -->
            <rect x="46" y="164" width="44" height="8" rx="2" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/>
            <g>
              <rect x="63" y="112" width="12" height="54" rx="6" fill="url(#hv-a)"/>
              <circle cx="69" cy="164" r="6" fill="#e9eff7"/>
              <g>
                <rect x="66" y="107" width="62" height="10" rx="5" fill="#63cdf7"/>
                <circle cx="69" cy="112" r="6" fill="#061426" stroke="#e9eff7" stroke-width="2"/>
                <path d="M126 106v-5h7v5M126 118v5h7v-5" stroke="#e9eff7" stroke-width="2.2" fill="none"/>
                <g><circle cx="137" cy="112" r="2.2" fill="#ff786d"/><path d="M140 108l4-3M140 116l4 3M141 112h5" stroke="#ff786d" stroke-width="1.3"/>
                  <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/></g>
                <animateTransform attributeName="transform" type="rotate" values="26 69 112;-14 69 112;26 69 112" dur="4.6s" repeatCount="indefinite"/>
              </g>
              <animateTransform attributeName="transform" type="rotate" values="-12 69 164;16 69 164;-12 69 164" dur="4.6s" repeatCount="indefinite"/>
            </g>
            <!-- conveyor -->
            <rect x="20" y="172" width="240" height="10" rx="5" fill="#082746" stroke="#63cdf7" stroke-opacity=".4"/>
            <g fill="#030b18" stroke="#63cdf7" stroke-opacity=".7" stroke-width="1.2">
              <g><circle cx="36" cy="177" r="3.5"/><path d="M33 177h6"/><animateTransform attributeName="transform" type="rotate" from="0 36 177" to="360 36 177" dur="1.2s" repeatCount="indefinite"/></g>
              <g><circle cx="90" cy="177" r="3.5"/><path d="M87 177h6"/><animateTransform attributeName="transform" type="rotate" from="0 90 177" to="360 90 177" dur="1.2s" repeatCount="indefinite"/></g>
              <g><circle cx="144" cy="177" r="3.5"/><path d="M141 177h6"/><animateTransform attributeName="transform" type="rotate" from="0 144 177" to="360 144 177" dur="1.2s" repeatCount="indefinite"/></g>
              <g><circle cx="198" cy="177" r="3.5"/><path d="M195 177h6"/><animateTransform attributeName="transform" type="rotate" from="0 198 177" to="360 198 177" dur="1.2s" repeatCount="indefinite"/></g>
              <g><circle cx="244" cy="177" r="3.5"/><path d="M241 177h6"/><animateTransform attributeName="transform" type="rotate" from="0 244 177" to="360 244 177" dur="1.2s" repeatCount="indefinite"/></g>
            </g>
            <g><rect x="0" y="156" width="22" height="16" rx="2" fill="#0c2f57" stroke="#63cdf7"/><path d="M0 162h22M11 156v6" stroke="#63cdf7" stroke-opacity=".7"/>
              <animateTransform attributeName="transform" type="translate" from="-10 0" to="270 0" dur="7s" begin="0s" repeatCount="indefinite"/></g>
            <g><rect x="0" y="159" width="18" height="13" rx="2" fill="url(#hv-a)"/>
              <animateTransform attributeName="transform" type="translate" from="-10 0" to="270 0" dur="7s" begin="-2.33s" repeatCount="indefinite"/></g>
            <g><rect x="0" y="154" width="24" height="18" rx="2" fill="#0c2f57" stroke="#38e0f5"/><circle cx="12" cy="163" r="4" fill="none" stroke="#38e0f5"/>
              <animateTransform attributeName="transform" type="translate" from="-10 0" to="270 0" dur="7s" begin="-4.66s" repeatCount="indefinite"/></g>
          </g>

          <!-- investment rows -->
          <g font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">
            <g transform="translate(20 198)"><rect width="240" height="34" rx="10" fill="url(#hv-a)"/><text x="16" y="22" fill="#fff">Automation &amp; robotics</text><text x="224" y="22" text-anchor="end" fill="#e9eff7">↑ hot</text></g>
            <g transform="translate(20 240)"><rect width="240" height="34" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="22" fill="#e9eff7">Predictive maintenance</text><text x="224" y="22" text-anchor="end" fill="#38e0f5">rising</text></g>
            <g transform="translate(20 282)"><rect width="240" height="34" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".3"/><text x="16" y="22" fill="#c9d5e6">Energy &amp; efficiency</text><text x="224" y="22" text-anchor="end" fill="#63cdf7">rising</text></g>
          </g>
        </g>
        <!-- buyer nodes -->
        <g font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#e9eff7">
          <g transform="translate(40 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#1258e8"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">PLT</text><text x="48" y="29">Plant lead</text></g>
          <g transform="translate(40 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#00a8ff"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">ENG</text><text x="48" y="29">Engineering</text></g>
          <g transform="translate(40 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#38e0f5"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">MNT</text><text x="48" y="29">Maintenance</text></g>
          <g transform="translate(910 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#93b2fb"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">PRO</text><text x="48" y="29">Procure</text></g>
          <g transform="translate(910 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#ff786d"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">EHS</text><text x="48" y="29">Safety</text></g>
          <g transform="translate(910 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#63cdf7"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">OPS</text><text x="48" y="29">Operations</text></g>
        </g>
        <circle class="blink" cx="400" cy="150" r="4" fill="#38e0f5"/><circle class="blink" cx="680" cy="230" r="4" fill="#38e0f5" style="animation-delay:.8s"/><circle class="blink" cx="400" cy="300" r="4" fill="#38e0f5" style="animation-delay:1.6s"/>
      </svg>
    </div>
  </div>

  <div class="hero-stats">
    <div class="container">
      <div class="hs"><div class="n">$16T</div><p class="l">Value added by manufacturing worldwide each year</p></div>
      <div class="hs"><div class="n">4.3M</div><p class="l">Industrial robots operating in factories worldwide</p></div>
      <div class="hs"><div class="n">$1.4T</div><p class="l">Lost each year to unplanned downtime at the world's largest companies</p></div>
      <div class="hs"><div class="n">3.8M</div><p class="l">US manufacturing jobs projected to be needed over the next decade</p></div>
    </div>
  </div>
</section>

<!-- =============== MARKET BY THE NUMBERS =============== -->
<section class="section bg-white" id="market">
  <div class="container market">
    <div class="text">
      <p class="kicker">Manufacturing market overview</p>
      <h2 class="h2">Where factory investment is moving</h2>
      <p class="lead">Manufacturing adds about $16 trillion to the world economy every year. Investment is flowing fastest into automation, maintenance technology and energy efficiency, and automation levels still vary widely from country to country.</p>
      <div class="callouts">
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></span><p><b>Budget follows uptime and automation.</b> Robotics, predictive maintenance and line upgrades are the easiest investments to justify.</p></div>
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span><p><b>Most plants still have room to grow.</b> Markets below the global average are where the next wave of automation spending will land.</p></div>
      </div>
    </div>
    <div class="chart" role="img" aria-label="Bar chart of industrial robots per 10,000 manufacturing employees: South Korea 1,012, Singapore 770, China 470, Germany 429, Japan 419, United States 295, global average 162">
      <h3>Robot density by country</h3>
      <p class="sub">Industrial robots per 10,000 manufacturing employees</p>
      <div class="hbars">
        <div class="hb"><span>South Korea</span><div class="tr"><div class="fl" style="width:100%">Leader</div></div><b>1,012</b></div>
        <div class="hb"><span>Singapore</span><div class="tr"><div class="fl" style="width:76%"></div></div><b>770</b></div>
        <div class="hb"><span>China</span><div class="tr"><div class="fl" style="width:46.4%"></div></div><b>470</b></div>
        <div class="hb"><span>Germany</span><div class="tr"><div class="fl soft" style="width:42.4%"></div></div><b>429</b></div>
        <div class="hb"><span>Japan</span><div class="tr"><div class="fl soft" style="width:41.4%"></div></div><b>419</b></div>
        <div class="hb"><span>United States</span><div class="tr"><div class="fl soft" style="width:29.2%"></div></div><b>295</b></div>
        <div class="hb"><span>Global average</span><div class="tr"><div class="fl soft" style="width:16%"></div></div><b>162</b></div>
      </div>
    </div>
  </div>
</section>

<!-- =============== TRENDS (timeline) =============== -->
<section class="section bg-dark" id="trends">
  <div class="container">
    <div class="head">
      <p class="kicker">Manufacturing industry trends</p>
      <h2 class="h2">Six shifts the manufacturing industry is talking about</h2>
      <p class="lead">From automation to the skills gap, these are the themes shaping how manufacturers buy, and what each one means for your go-to-market.</p>
    </div>

    <div class="timeline">
      <div class="trow">
        <div class="idx">01 / AUTOMATION</div>
        <div><h3>Robots and cobots move onto more lines</h3><p class="body">Factories keep automating repetitive, heavy and hazardous work. Collaborative robots that work alongside people are bringing automation to smaller plants and lower-volume lines.</p><div class="tags"><span>robotics</span><span>cobots</span><span>machine-vision</span></div></div>
        <div class="metric"><div class="n">540K<small>+</small></div><p class="l">Industrial robots installed in factories in a single year</p><p class="imp"><b>GTM impact:</b> integrators, component makers and software vendors are chasing new buyers inside every automation project.</p></div>
      </div>
      <div class="trow">
        <div class="idx">02 / UPTIME</div>
        <div><h3>Unplanned downtime becomes a board-level cost</h3><p class="body">A single stoppage can wipe out a week's margin. Plants are investing in condition monitoring, predictive maintenance and faster access to spares.</p><div class="tags"><span>predictive-maintenance</span><span>mro</span><span>iiot</span></div></div>
        <div class="metric"><div class="n">$1.4T</div><p class="l">Lost to unplanned downtime each year, about 11% of revenue at the largest companies</p><p class="imp"><b>GTM impact:</b> lead with hours of downtime avoided, not product features.</p></div>
      </div>
      <div class="trow">
        <div class="idx">03 / WORKFORCE</div>
        <div><h3>The skills gap keeps widening</h3><p class="body">Experienced technicians are retiring faster than they can be replaced. Tools that capture know-how, simplify training and reduce manual work are moving up the shortlist.</p><div class="tags"><span>skills-gap</span><span>training</span><span>connected-worker</span></div></div>
        <div class="metric"><div class="n">1.9M</div><p class="l">US manufacturing roles that could go unfilled over the next decade</p><p class="imp"><b>GTM impact:</b> show how your product saves labour hours and shortens onboarding.</p></div>
      </div>
      <div class="trow">
        <div class="idx">04 / RESHORING</div>
        <div><h3>Production moves closer to end markets</h3><p class="body">Supply chain shocks and trade policy are pushing manufacturers to build new plants nearer home and to dual-source critical parts. New sites mean new equipment, suppliers and service contracts.</p><div class="tags"><span>reshoring</span><span>nearshoring</span><span>greenfield</span></div></div>
        <div class="metric"><div class="n">$200B<small>+</small></div><p class="l">Annual US spending on new manufacturing construction</p><p class="imp"><b>GTM impact:</b> reach new and expanding plants early, while suppliers are still being chosen.</p></div>
      </div>
      <div class="trow">
        <div class="idx">05 / ENERGY</div>
        <div><h3>Energy and emissions become part of the spec</h3><p class="body">Large customers now ask their suppliers for energy and carbon figures. Electrification, heat recovery and efficient motors and drives pay back twice: lower bills and easier audits.</p><div class="tags"><span>decarbonisation</span><span>electrification</span><span>efficiency</span></div></div>
        <div class="metric"><div class="n">37%</div><p class="l">Of global final energy use comes from industry</p><p class="imp"><b>GTM impact:</b> pair savings figures with the sustainability targets EHS and leadership track.</p></div>
      </div>
      <div class="trow">
        <div class="idx">06 / COMMITTEE</div>
        <div><h3>Buying committees keep getting bigger</h3><p class="body">A typical B2B purchase now involves 13 internal stakeholders and 9 external influencers. In a plant that means operations, engineering, maintenance, procurement, EHS and finance all have a say.</p><div class="tags"><span>buying-committee</span><span>abm</span><span>consensus</span></div></div>
        <div class="metric"><div class="n">22</div><p class="l">People influencing an average B2B purchase (13 internal + 9 external)</p><p class="imp"><b>GTM impact:</b> single-threaded deals stall, so multi-thread from the first touch.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- =============== OLD PLAYBOOK VS TODAY =============== -->
<section class="section bg-mist" id="shift">
  <div class="container">
    <div class="head">
      <p class="kicker">What changed for industrial sellers</p>
      <h2 class="h2">The old manufacturing sales playbook vs. today's reality</h2>
      <p class="lead">Cold calls and one big trade show a year worked when plant engineers relied on reps to learn what was available. Today buyers arrive informed, in larger committees, with sharper questions about uptime and payback.</p>
    </div>
    <div class="shift-wrap">
      <div class="art">
        <!-- Illustration: hidden sourcing journey -->
        <svg role="img" aria-label="Illustration of the hidden sourcing journey: plant buyers research through engineering specs, supplier audits, peer plants and trade shows before inviting a vendor to quote" viewBox="0 0 520 420">
          <rect width="520" height="420" rx="24" fill="#fff" stroke="#d7e0ec"/>
          <text x="32" y="44" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#5b6b82" letter-spacing="1">THE SOURCING YOU NEVER SEE</text>
          <rect x="32" y="64" width="456" height="230" rx="18" fill="#061426"/>
          <g fill="none" stroke="#38e0f5" stroke-width="2" stroke-opacity=".7"><path class="flow-dash" d="M88 180 C 150 110, 200 110, 250 150 S 340 230, 400 180"/></g>
          <g font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">
            <g transform="translate(88 180)"><circle r="30" fill="#1258e8"/><circle cy="-6" r="8" fill="#fff"/><path d="M-13 14 q13 -16 26 0" fill="#fff"/><text y="50" fill="#e9eff7">Plant buyer</text></g>
            <g transform="translate(170 120)"><rect x="-42" y="-18" width="84" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Spec sheets</text></g>
            <g transform="translate(250 230)"><rect x="-42" y="-18" width="84" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Peer plants</text></g>
            <g transform="translate(320 110)"><rect x="-42" y="-18" width="84" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Trade shows</text></g>
            <g transform="translate(400 180)"><rect x="-44" y="-18" width="88" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Supplier audits</text></g>
          </g>
          <g transform="translate(32 316)">
            <rect width="456" height="72" rx="16" fill="#eaf1fd"/>
            <g transform="translate(20 18)"><rect width="36" height="36" rx="10" fill="url(#vend)"/><path d="M11 18 h14 M18 11 v14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></g>
            <text x="70" y="32" font-family="Sora, sans-serif" font-size="14" font-weight="600" fill="#061426">Your first request to quote</text>
            <text x="70" y="52" font-family="Inter, sans-serif" font-size="12" fill="#4a5a70">…often arrives after the shortlist is set</text>
          </g>
          <defs><linearGradient id="vend" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient></defs>
        </svg>
      </div>
      <div class="tbl">
        <table class="shift">
          <thead><tr><th scope="col">Old playbook</th><th scope="col" class="now">Today's reality</th></tr></thead>
          <tbody>
            <tr><td>Cold-call every plant in the territory</td><td>Target plants by sector, size, processes and equipment</td></tr>
            <tr><td>Win over one plant engineer</td><td>Multi-thread across operations, engineering, procurement and EHS</td></tr>
            <tr><td>Count on one big trade show a year</td><td>Stay visible all year, before RFQs go out</td></tr>
            <tr><td>Lead with catalogues and spec sheets</td><td>Lead with uptime, scrap reduction and payback</td></tr>
            <tr><td>One message for every role</td><td>Separate stories for plant leads, engineers, procurement and finance</td></tr>
            <tr><td>Wait to be invited to quote</td><td>Build relationships well ahead of supplier qualification</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- =============== SEGMENTS (bento) =============== -->
<section class="section bg-white" id="segments">
  <div class="container">
    <div class="head">
      <p class="kicker">Manufacturing segments</p>
      <h2 class="h2">The manufacturing markets we help you sell into</h2>
      <p class="lead">A stamping plant and a pharmaceutical cleanroom buy very differently. Each segment has its own buyers, budgets and buying triggers.</p>
    </div>
    <div class="bento">
      <div class="tile big">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 15l2-5h14l2 5v4H3z"/><circle cx="7.5" cy="19" r="2"/><circle cx="16.5" cy="19" r="2"/><path d="M7 10l2-4h6l2 4"/></svg></span>
        <h3>Automotive &amp; EV</h3>
        <p>OEMs and tier suppliers retooling for electric vehicles, battery production and lightweight materials, all on just-in-time schedules.</p>
        <span class="who">Plant managers · manufacturing engineers · supplier quality</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M3 14l9-4 9 4M8 21l4-2 4 2"/></svg></span>
        <h3>Aerospace &amp; defence</h3>
        <p>Programmes with strict certification, full traceability and long product lifecycles.</p>
        <span class="who">Programme managers · quality heads · sourcing leads</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg></span>
        <h3>Industrial machinery</h3>
        <p>Equipment builders with engineered-to-order products and aftermarket service.</p>
        <span class="who">VPs engineering · aftermarket leads</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg></span>
        <h3>Electronics &amp; semiconductors</h3>
        <p>Fabs and assembly plants focused on yield, cleanroom control and fast changeovers.</p>
        <span class="who">Process engineers · fab managers</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 9V3"/><path d="M7 15h10"/></svg></span>
        <h3>Chemicals, metals &amp; materials</h3>
        <p>Energy-heavy process plants balancing safety, consistency and emissions.</p>
        <span class="who">Plant heads · EHS · process safety</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8l-1 5H9z"/><path d="M9 7 7.5 22h9L15 7"/></svg></span>
        <h3>Food, beverage &amp; consumer goods</h3>
        <p>High-volume lines where hygiene, packaging speed, shelf life and recall readiness drive purchases.</p>
        <span class="who">Operations directors · packaging engineers · QA leads</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M9.5 9.5l5 5"/></svg></span>
        <h3>Pharma &amp; medical devices</h3>
        <p>Regulated production where validation, cleanroom standards and audit-ready records come first.</p>
        <span class="who">Site heads · validation engineers · compliance</span>
      </div>
    </div>
  </div>
</section>

<!-- =============== FLYWHEEL =============== -->
<section class="section bg-dark" id="approach">
  <div class="container">
    <div class="head center" style="text-align:center">
      <p class="kicker">How we help</p>
      <h2 class="h2">A growth flywheel: target → demand → leads</h2>
      <p class="lead">In manufacturing, targeting, demand generation and lead generation aren't separate projects. Each turn of the wheel makes the next one more precise, because what you learn from engagement sharpens who you go after.</p>
    </div>
    <div class="fly">
      <div class="diagram">
        <svg role="img" aria-label="Flywheel diagram: targeting feeds demand generation, demand generation feeds lead generation, and lead generation results feed back into targeting" viewBox="0 0 480 480">
          <defs>
            <linearGradient id="fw-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient>
            <marker id="fw-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#38e0f5"/></marker>
          </defs>
          <circle cx="240" cy="240" r="170" fill="none" stroke="#63cdf7" stroke-opacity=".15" stroke-width="40"/>
          <path d="M 115 145 A 160 160 0 0 1 365 145" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <path d="M 395 200 A 160 160 0 0 1 280 395" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <path d="M 200 395 A 160 160 0 0 1 85 200" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <circle cx="240" cy="240" r="78" fill="#082746" stroke="#63cdf7" stroke-opacity=".4"/>
          <text x="240" y="232" text-anchor="middle" font-family="Sora, sans-serif" font-size="17" font-weight="600" fill="#fff">Pipeline</text>
          <text x="240" y="254" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#63cdf7">compounds</text>
          <g font-family="Sora, sans-serif" font-size="15" font-weight="600" text-anchor="middle">
            <g transform="translate(240 64)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="url(#fw-a)"/><text y="-2" fill="#fff">1 · Target</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#e6eefc">find the right plants</text></g>
            <g transform="translate(410 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">2 · Demand</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">engage the committee</text></g>
            <g transform="translate(70 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">3 · Leads</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">convert &amp; learn</text></g>
          </g>
        </svg>
      </div>
      <div class="steps">
        <div class="fstep"><span class="dot" style="background:linear-gradient(135deg,#1258e8,#00a8ff);color:#fff">01</span><div><h3>Targeting — know exactly which plants to pursue</h3><p class="q">// which sites, which roles, what equipment?</p><p>Define your market by sector, plant size, processes and the equipment already on the floor. Map the buying committee at each site, from plant lead to procurement.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">02</span><div><h3>Demand generation — get on the shortlist</h3><p class="q">// how do we reach plants before the RFQ goes out?</p><p>Run account-based campaigns, technical content and trade show programmes aimed at the whole committee, with messages for plant leads, engineers, maintenance and finance.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">03</span><div><h3>Lead generation — start real conversations</h3><p class="q">// which plants should sales visit this month?</p><p>Turn engaged plants into prioritised prospects for your reps, distributors and partners, then feed what converts back into your targeting.</p></div></div>
      </div>
    </div>
    <p style="margin-top:40px;text-align:center;font-size:15px;color:var(--on-dark)">Coral Blue Data powers the targeting behind your demand and lead generation, in-house or with your agency.</p>
  </div>
</section>

<!-- =============== PERSONAS (tabs) =============== -->
<section class="section bg-mist" id="personas">
  <div class="container">
    <div class="head">
      <p class="kicker">Buyer personas</p>
      <h2 class="h2">Who we help in the manufacturing market</h2>
      <p class="lead">Pick a persona to see the problems they face today, and how targeting, demand generation and lead generation help solve them.</p>
    </div>

    <div class="tabs" role="tablist" aria-label="Manufacturing personas">
      <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="true"><span class="tn">01</span>Industrial equipment marketer</button>
      <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1"><span class="tn">02</span>Automation &amp; robotics sales</button>
      <button class="tab" role="tab" id="t3" aria-controls="p3" aria-selected="false" tabindex="-1"><span class="tn">03</span>Industrial software GTM</button>
      <button class="tab" role="tab" id="t4" aria-controls="p4" aria-selected="false" tabindex="-1"><span class="tn">04</span>Materials &amp; components supplier</button>
      <button class="tab" role="tab" id="t5" aria-controls="p5" aria-selected="false" tabindex="-1"><span class="tn">05</span>MRO &amp; field services</button>
      <button class="tab" role="tab" id="t6" aria-controls="p6" aria-selected="false" tabindex="-1"><span class="tn">06</span>Distributor &amp; channel</button>
    </div>

    <!-- P1 -->
    <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1">
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><circle cx="55" cy="53" r="9" fill="#38e0f5"/><circle cx="55" cy="53" r="3" fill="#061426"/></svg>
          <div><h3>The Industrial Equipment Marketer</h3><p class="role">Marketing Director · Machinery &amp; equipment maker</p></div>
          <blockquote>"Our best customers buy once every ten years. We need to be in the room before the next replacement cycle starts."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Plant leads, engineering, procurement</span></div><div><span>Measured on</span><span>Pipeline, quotes issued, win rate</span></div><div><span>Linked trends</span><span>01 · 04</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Long, infrequent replacement cycles</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Incumbent suppliers already qualified</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Trade show leads that go cold fast</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Focus on plants by sector, size and the equipment they run, including sites with ageing machines due for replacement.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Stay visible to engineering and operations year-round with application stories and ROI content, not just at shows.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Book follow-up meetings with show contacts and the colleagues who sign off on capital spend.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Earlier in the buying cycle</span><span class="chip">More RFQ invitations</span><span class="chip">Higher show ROI</span></div></div>
        </div>
      </div>
    </div>

    <!-- P2 -->
    <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="36" cy="28" r="11" fill="#63cdf7"/><path d="M16 60 q20 -24 40 0" fill="#63cdf7"/><path d="M50 62v-8l6-6 6 4" stroke="#ff786d" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="62" r="3" fill="#ff786d"/></svg>
          <div><h3>The Automation &amp; Robotics Sales Director</h3><p class="role">Regional Sales Director · Robotics or automation vendor</p></div>
          <blockquote>"Every plant says they want automation. The hard part is finding the ones with a real project and budget this year."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Operations, manufacturing engineering</span></div><div><span>Measured on</span><span>New logos, project value</span></div><div><span>Linked trends</span><span>01 · 03</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Pilots that never scale to more lines</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Integrators control many decisions</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Hard to tell which plants are ready to invest</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Prioritise plants with labour shortages, high-volume repetitive work and expansion plans.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Share payback calculators and peer-plant case studies with operations, engineering and finance.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Set up site assessments with plant leads who have an active automation project.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Projects with budget</span><span class="chip">Multi-line rollouts</span><span class="chip">Shorter cycles</span></div></div>
        </div>
      </div>
    </div>

    <!-- P3 -->
    <div class="panel" role="tabpanel" id="p3" aria-labelledby="t3" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><rect x="46" y="44" width="18" height="18" rx="5" fill="#061426"/><path d="M50 57 l4 -5 l3 3 l4 -6" stroke="#38e0f5" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div><h3>The Industrial Software Head of GTM</h3><p class="role">Head of Growth · MES, quality or asset management software</p></div>
          <blockquote>"Plants still run on spreadsheets and paper. We need to reach the people who feel that pain every shift."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Operations, quality, IT/OT leaders</span></div><div><span>Measured on</span><span>Pilots won, site expansion</span></div><div><span>Linked trends</span><span>02 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Legacy systems and IT/OT gaps</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>One-site pilots stuck in "pilot purgatory"</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Plant and corporate teams want different things</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Find multi-site manufacturers modernising operations, and the plant and corporate roles behind each programme.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Lead with downtime and quality outcomes for plant teams, and standardisation stories for corporate operations.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Connect AEs with sister sites once a first plant goes live, so pilots turn into rollouts.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Better-fit pilots</span><span class="chip">Faster site expansion</span><span class="chip">Executive sponsorship</span></div></div>
        </div>
      </div>
    </div>

    <!-- P4 -->
    <div class="panel" role="tabpanel" id="p4" aria-labelledby="t4" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><path d="M48 46h14v14H48z" fill="#38e0f5"/><path d="M48 51h14M55 46v5" stroke="#061426" stroke-width="1.6"/></svg>
          <div><h3>The Materials &amp; Components Supplier</h3><p class="role">Sales &amp; Marketing Lead · Raw materials or component maker</p></div>
          <blockquote>"Getting qualified takes a year. If we're not on the shortlist before the next sourcing round, we wait another three."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Procurement, design &amp; quality engineers</span></div><div><span>Measured on</span><span>New programmes, share of spend</span></div><div><span>Linked trends</span><span>04 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Long supplier qualification processes</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Price pressure from procurement</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Missing the window when new products are designed</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Find manufacturers dual-sourcing, reshoring or launching new product programmes in your category.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Reach design engineers early with material guides and test results, and procurement with reliability proof.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Open conversations with sourcing leads ahead of their next supplier review.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Earlier design-in</span><span class="chip">More qualification wins</span><span class="chip">Less price-only competition</span></div></div>
        </div>
      </div>
    </div>

    <!-- P5 -->
    <div class="panel" role="tabpanel" id="p5" aria-labelledby="t5" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="30" cy="28" r="9" fill="#63cdf7"/><path d="M14 58 q16 -20 32 0" fill="#63cdf7"/><path d="M52 42l8 8-4 4-8-8a5 5 0 0 1 4-4z" fill="#fff"/><path d="M50 54l-4 6" stroke="#fff" stroke-width="3" stroke-linecap="round"/></svg>
          <div><h3>The MRO &amp; Field Services BD Lead</h3><p class="role">Business Development Manager · Maintenance, repair &amp; operations</p></div>
          <blockquote>"Plants call us after something breaks. We want to be the team they plan with, not the one they panic-call."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Maintenance &amp; reliability leads</span></div><div><span>Measured on</span><span>Service contracts, recurring revenue</span></div><div><span>Linked trends</span><span>02 · 03</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Reactive, one-off service calls</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Many small plants spread across a territory</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Maintenance teams too stretched to take meetings</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Focus on plants by location, asset type and size within your service area.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Run campaigns around planned shutdowns and preventive maintenance seasons.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Book site walk-throughs with maintenance leads before their next shutdown is planned.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">More service contracts</span><span class="chip">Recurring revenue</span><span class="chip">Better territory coverage</span></div></div>
        </div>
      </div>
    </div>

    <!-- P6 -->
    <div class="panel" role="tabpanel" id="p6" aria-labelledby="t6" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><circle cx="50" cy="52" r="5" fill="#061426"/><circle cx="62" cy="52" r="5" fill="#061426"/><path d="M55 52 h2" stroke="#061426" stroke-width="3"/></svg>
          <div><h3>The Distributor &amp; Channel Manager</h3><p class="role">Head of Channel · Industrial products manufacturer</p></div>
          <blockquote>"Our distributors carry thousands of products. If we don't help them sell ours, they push someone else's."</blockquote>
          <div class="meta"><div><span>Sells through</span><span>Distributors, integrators, reps</span></div><div><span>Measured on</span><span>Channel revenue, partner growth</span></div><div><span>Linked trends</span><span>04 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Gaps in regional distributor coverage</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Partners lack quality leads for joint campaigns</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Overlap and conflict between partners</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">T</i>Targeting</div><p>Map distributors and integrators by specialism, product lines and geography to recruit the right ones.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Power through-partner campaigns aimed at the plants in each partner's territory.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Route qualified plant opportunities to the right partner to reduce conflict and speed follow-up.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Stronger partner network</span><span class="chip">More partner-sourced deals</span><span class="chip">Less channel conflict</span></div></div>
        </div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:13px;color:var(--faint)">Personas are illustrative composites of common manufacturing go-to-market roles, not specific individuals.</p>
  </div>
</section>

<!-- =============== BUYING STAGES =============== -->
<section class="section bg-white" id="buying-group">
  <div class="container">
    <div class="head">
      <p class="kicker">The plant buying committee</p>
      <h2 class="h2">Who's involved at each stage of a manufacturing purchase</h2>
      <p class="lead">Different people lead at different stages. Effective demand and lead generation reaches each of them when their voice matters most.</p>
    </div>
    <div class="lanes">
      <div class="lane">
        <span class="st">STAGE 1</span><h3>Discover</h3><p class="ask">"Is this problem costing us output?"</p>
        <div class="roles"><span class="r"><i style="background:#38e0f5"></i>Line supervisors &amp; operators</span><span class="r"><i style="background:#00a8ff"></i>Maintenance &amp; plant engineers</span></div>
        <p class="feed"><b>Reach them with:</b> application stories, trade shows, peer plant visits</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 2</span><h3>Specify</h3><p class="ask">"Which options fit our line and process?"</p>
        <div class="roles"><span class="r"><i style="background:#00a8ff"></i>Process &amp; manufacturing engineers</span><span class="r"><i style="background:#1258e8"></i>Plant manager</span></div>
        <p class="feed"><b>Reach them with:</b> spec sheets, CAD files, trials and sample parts</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 3</span><h3>Qualify</h3><p class="ask">"Is it safe, compliant and reliable?"</p>
        <div class="roles"><span class="r"><i style="background:#ff786d"></i>EHS &amp; quality teams</span><span class="r"><i style="background:#93b2fb"></i>Supplier quality &amp; audits</span></div>
        <p class="feed"><b>Reach them with:</b> certifications, test results, safety documentation</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 4</span><h3>Approve</h3><p class="ask">"What's the payback — and who signs?"</p>
        <div class="roles"><span class="r"><i style="background:#1258e8"></i>VP operations / economic buyer</span><span class="r"><i style="background:#061426"></i>Finance &amp; procurement</span></div>
        <p class="feed"><b>Reach them with:</b> business case, references, clear pricing and lead times</p>
      </div>
    </div>
    <div class="lane-bar" style="margin-top:-1px;border-radius:0 0 24px 24px" aria-hidden="true"></div>
    <div class="legend"><span><i style="background:#1258e8"></i>Executive</span><span><i style="background:#00a8ff"></i>Technical</span><span><i style="background:#38e0f5"></i>Shop floor</span><span><i style="background:#ff786d"></i>Safety</span><span><i style="background:#93b2fb"></i>Quality</span><span><i style="background:#061426"></i>Finance</span></div>
    <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
      <a class="btn btn-primary" href="/contact">Talk with a manufacturing expert →</a>
      <a class="btn btn-light" href="/solutions">Explore our solutions</a>
    </div>
  </div>
</section>

<!-- =============== FAQ =============== -->
<section class="section bg-mist" id="faq">
  <div class="container">
    <div class="head">
      <p class="kicker">FAQs</p>
      <h2 class="h2">Manufacturing industry FAQs</h2>
    </div>
    <div class="faq-grid">
      <div class="faq"><h3><span>Q1</span>What are the biggest manufacturing industry trends today?</h3><p>Wider use of robots and cobots, the push to cut unplanned downtime, a growing skills gap, reshoring and new plant construction, energy and emissions targets, and larger buying committees.</p></div>
      <div class="faq"><h3><span>Q2</span>How big is the manufacturing industry?</h3><p>Manufacturing adds about $16 trillion to the world economy each year, roughly a sixth of global output, and more than 4 million industrial robots now work in factories worldwide.</p></div>
      <div class="faq"><h3><span>Q3</span>Why is selling to manufacturers harder today?</h3><p>Buyers research on their own and involve more people, 13 internal and 9 external on average. Supplier qualification takes months, so vendors who reach the whole committee before the RFQ goes out are the ones who make the shortlist.</p></div>
      <div class="faq"><h3><span>Q4</span>How do manufacturers choose new suppliers?</h3><p>Usually through a trigger such as a quality problem, capacity gap or new programme, followed by a technical evaluation, a trial or sample run, and a qualification process run by procurement and quality.</p></div>
      <div class="faq"><h3><span>Q5</span>How long is a typical manufacturing sales cycle?</h3><p>Consumables and MRO purchases can close in weeks. Capital equipment, automation and software usually take three to twelve months, and longer when several sites or a formal pilot are involved.</p></div>
      <div class="faq"><h3><span>Q6</span>Who is involved in a manufacturing buying decision?</h3><p>Typically a plant manager or operations leader, an engineer who writes the spec, maintenance, a procurement lead who runs the commercial process, and finance for capital purchases. EHS and quality join when safety or compliance is involved.</p></div>
      <div class="faq"><h3><span>Q7</span>How does Coral Blue Data support manufacturing demand and lead generation?</h3><p>We help you pinpoint the right plants and the people on each buying committee, so your marketing, sales or agency teams can run campaigns and outreach that reach the right sites at the right time.</p></div>
      <div class="faq"><h3><span>Q8</span>Can you help us reach distributors as well as plants?</h3><p>Yes. We can help you find distributors, integrators and reps by specialism and geography, so you can recruit partners and support joint campaigns as well as reach manufacturers directly.</p></div>
    </div>
  </div>
</section>

<!-- =============== CTA =============== -->
<section class="bg-white" style="padding:104px 0 96px">
  <div class="container">
    <div class="cta">
      <div class="grid-bg" aria-hidden="true"></div>
      <h2>Build a manufacturing go-to-market that wins today</h2>
      <p>Tell us what you sell and which plants you sell to. We'll show you the sites, segments and buying committees that fit, and how to reach them with demand and lead generation.</p>
      <div class="ctas">
        <a class="btn btn-white" href="/contact">Talk With an Expert →</a>
        <a class="btn btn-ghost" href="/request-a-quote">Request a Quote</a>
      </div>
      <p class="small">A specialist reviews every request and replies by email, typically within two business days.</p>
    </div>
  </div>
</section>

<!-- =============== FOOTER =============== -->`;

export const MFG_JSON_LD = `{
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"WebPage","@id":"https://coralbluedata1.vercel.app/industries/manufacturing#webpage","url":"https://coralbluedata1.vercel.app/industries/manufacturing","name":"Manufacturing Industry Marketing & Growth Solutions | Coral Blue Data","description":"Manufacturing today: record automation, the cost of downtime, a widening skills gap and bigger buying committees. How demand generation and lead generation help companies that sell to manufacturers grow.","publisher":{"@type":"Organization","name":"Coral Blue Data","url":"https://coralbluedata1.vercel.app/"}},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://coralbluedata1.vercel.app/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://coralbluedata1.vercel.app/industries"},{"@type":"ListItem","position":3,"name":"Manufacturing","item":"https://coralbluedata1.vercel.app/industries/manufacturing"}]},
    {"@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What are the biggest manufacturing industry trends today?","acceptedAnswer":{"@type":"Answer","text":"Wider use of robots and cobots, the push to cut unplanned downtime, a growing skills gap, reshoring and new plant construction, energy and emissions targets, and larger buying committees."}},
      {"@type":"Question","name":"How big is the manufacturing industry?","acceptedAnswer":{"@type":"Answer","text":"Manufacturing adds about $16 trillion to the world economy each year, roughly a sixth of global output."}},
      {"@type":"Question","name":"How do manufacturers choose new suppliers?","acceptedAnswer":{"@type":"Answer","text":"Usually through a trigger such as a quality problem, capacity gap or new programme, followed by a technical evaluation, a trial and a qualification process run by procurement and quality."}},
      {"@type":"Question","name":"How long is a typical manufacturing sales cycle?","acceptedAnswer":{"@type":"Answer","text":"Consumables and MRO purchases can close in weeks; capital equipment, automation and software usually take three to twelve months."}}
    ]}
  ]
}`;
