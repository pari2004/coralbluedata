/**
 * Content for the Technology industry landing page.
 *
 * Source of truth: the hand-authored design. CSS is scoped under the `.hc`
 * wrapper so its generic class names never collide with the app's global
 * styles or the real SiteHeader / SiteFooter. The page's own <header>,
 * <footer> and interactive tabs <script> are stripped here; the tabs are
 * re-implemented in TechnologyLanding (client) and the real site chrome
 * comes from the (site) layout.
 */

export const TECH_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
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
.hc .hero-inner{position:relative;z-index:1;padding:128px 24px 0;text-align:center}
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

export const TECH_BODY = `<!-- =============== HERO =============== -->
<section class="hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-glow" aria-hidden="true"></div>

  

  <div class="container hero-inner">
    <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span>Technology</span></nav>
    <span class="status"><i aria-hidden="true"></i>Industry · Technology · 2026 market brief</span>
    <h1>Tech budgets are growing. <span class="grad-text">Getting picked is harder than ever.</span></h1>
    <p class="hero-sub">AI is pulling record investment into the technology market, but buyers research on their own, buying groups keep getting bigger, and every category is crowded. Coral Blue Data gives technology companies the data to find the right accounts, earn the whole buying group's attention, and turn it into pipeline.</p>
    <div class="ctas">
      <a class="btn btn-primary" href="/contact">Talk With a Tech GTM Expert →</a>
      <a class="btn btn-ghost" href="/solutions/technology-install-base-data">Explore Technology Install-Base Data</a>
    </div>

    <!-- Hero illustration: tech stack + buying group network -->
    <div class="hero-visual">
      <svg role="img" aria-label="Illustration of a technology stack — devices, infrastructure, cloud, software and AI — connected to the buying group: CIO, CTO, CISO, engineering lead, procurement and end users" viewBox="0 0 1080 380">
        <defs>
          <linearGradient id="hv-win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2f57"/><stop offset="1" stop-color="#061426"/></linearGradient>
          <linearGradient id="hv-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient>
          <linearGradient id="hv-line" x1="0" x2="1"><stop offset="0" stop-color="#38e0f5" stop-opacity="0"/><stop offset=".5" stop-color="#38e0f5"/><stop offset="1" stop-color="#38e0f5" stop-opacity="0"/></linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1258e8" stop-opacity=".6"/><stop offset="1" stop-color="#1258e8" stop-opacity="0"/></radialGradient>
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
        <!-- central stack window -->
        <g transform="translate(400 40)">
          <rect width="280" height="320" rx="18" fill="url(#hv-win)" stroke="#63cdf7" stroke-opacity=".35"/>
          <g fill="#63cdf7" fill-opacity=".5"><circle cx="20" cy="20" r="4.5"/><circle cx="34" cy="20" r="4.5"/><circle cx="48" cy="20" r="4.5"/></g>
          <text x="140" y="24" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#9fb0c8">your-tech-market.stack</text>
          <line x1="0" y1="40" x2="280" y2="40" stroke="#63cdf7" stroke-opacity=".15"/>
          <g font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">
            <g transform="translate(20 58)"><rect width="240" height="40" rx="10" fill="url(#hv-a)"/><text x="16" y="25" fill="#fff">AI &amp; agents</text><text x="224" y="25" text-anchor="end" fill="#e9eff7">↑ hot</text></g>
            <g transform="translate(20 108)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Software &amp; SaaS</text><text x="224" y="25" text-anchor="end" fill="#63cdf7">+15.5%</text></g>
            <g transform="translate(20 158)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Cloud &amp; security</text><text x="224" y="25" text-anchor="end" fill="#63cdf7">+12.2%</text></g>
            <g transform="translate(20 208)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Data center</text><text x="224" y="25" text-anchor="end" fill="#38e0f5">+62.5%</text></g>
            <g transform="translate(20 258)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".3"/><text x="16" y="25" fill="#c9d5e6">Devices &amp; services</text><text x="224" y="25" text-anchor="end" fill="#9fb0c8">steady</text></g>
          </g>
        </g>
        <!-- buyer nodes -->
        <g font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#e9eff7">
          <g transform="translate(40 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#1258e8"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">CIO</text><text x="48" y="29">Economic</text></g>
          <g transform="translate(40 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#00a8ff"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">CTO</text><text x="48" y="29">Technical</text></g>
          <g transform="translate(40 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#38e0f5"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">ENG</text><text x="48" y="29">Builders</text></g>
          <g transform="translate(910 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#ff786d"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">CISO</text><text x="48" y="29">Security</text></g>
          <g transform="translate(910 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#93b2fb"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">PRO</text><text x="48" y="29">Procure</text></g>
          <g transform="translate(910 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#63cdf7"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">USR</text><text x="48" y="29">End users</text></g>
        </g>
        <circle class="blink" cx="400" cy="150" r="4" fill="#38e0f5"/><circle class="blink" cx="680" cy="230" r="4" fill="#38e0f5" style="animation-delay:.8s"/><circle class="blink" cx="400" cy="300" r="4" fill="#38e0f5" style="animation-delay:1.6s"/>
      </svg>
    </div>
  </div>

  <div class="hero-stats">
    <div class="container">
      <div class="hs"><div class="n">$6.37T</div><p class="l">Worldwide IT spending in 2026, up 14.2%</p><p class="s"><a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer">Gartner, Jul 2026</a></p></div>
      <div class="hs"><div class="n">67%</div><p class="l">of B2B buyers prefer a rep-free buying experience</p><p class="s"><a href="https://www.biztechreports.com/news-archive/2026/4/1/gartner-sales-survey-finds-67-of-b2b-buyers-prefer-a-rep-free-experience-gartner-april-4-2026" target="_blank" rel="noopener noreferrer">Gartner buyer survey</a></p></div>
      <div class="hs"><div class="n">13 + 9</div><p class="l">Internal stakeholders + external influencers in a typical B2B purchase</p><p class="s"><a href="https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/" target="_blank" rel="noopener noreferrer">Forrester, 2026</a></p></div>
      <div class="hs"><div class="n">$246B</div><p class="l">Information security spending in 2026, up 12.2%</p><p class="s"><a href="https://softwarestrategiesblog.com/2026/04/01/top-10-fastest-growing-security-categories-gartner-2026-forecast/" target="_blank" rel="noopener noreferrer">Gartner forecast</a></p></div>
    </div>
  </div>
</section>

<!-- =============== MARKET BY THE NUMBERS =============== -->
<section class="section bg-white" id="market">
  <div class="container market">
    <div class="text">
      <p class="kicker">Technology market overview</p>
      <h2 class="h2">Where tech money is moving in 2026</h2>
      <p class="lead">Gartner expects worldwide IT spending to reach $6.37 trillion in 2026. The growth isn't spread evenly: AI infrastructure and software are pulling ahead, while devices, services and communications grow more slowly.</p>
      <div class="callouts">
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></span><p><b>Budget follows AI.</b> AI-optimised servers, cloud services and AI-ready software are the fastest-growing lines.</p></div>
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg></span><p><b>Other categories must fight for share.</b> Vendors outside the AI wave compete for flatter budgets and need sharper targeting.</p></div>
      </div>
    </div>
    <div class="chart" role="img" aria-label="Bar chart of Gartner 2026 IT spending growth by segment: data center systems 62.5%, software 15.5%, devices 9.8%, services 5.3%, communications services 4.4%">
      <h3>2026 IT spending growth by segment</h3>
      <p class="sub">Year-over-year growth, worldwide · 2026 spend in brackets</p>
      <div class="hbars">
        <div class="hb"><span>Data center systems</span><div class="tr"><div class="fl" style="width:100%">$822B</div></div><b>+62.5%</b></div>
        <div class="hb"><span>Software</span><div class="tr"><div class="fl" style="width:24.8%">$1.47T</div></div><b>+15.5%</b></div>
        <div class="hb"><span>Devices</span><div class="tr"><div class="fl soft" style="width:15.7%"></div></div><b>+9.8%</b></div>
        <div class="hb"><span>Services</span><div class="tr"><div class="fl soft" style="width:8.5%"></div></div><b>+5.3%</b></div>
        <div class="hb"><span>Communications</span><div class="tr"><div class="fl soft" style="width:7%"></div></div><b>+4.4%</b></div>
      </div>
      <p class="note">Source: <a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer">Gartner IT spending forecast, July 2026</a>. Devices $868B, services $1.57T, communications $1.35T.</p>
    </div>
  </div>
</section>

<!-- =============== TRENDS (timeline) =============== -->
<section class="section bg-dark" id="trends">
  <div class="container">
    <div class="head">
      <p class="kicker">Technology industry trends 2026</p>
      <h2 class="h2">Six shifts the tech industry is talking about</h2>
      <p class="lead">From analyst forecasts to buyer surveys, these are the themes shaping how technology gets bought and sold this year — and what each one means for your go-to-market.</p>
    </div>

    <div class="timeline">
      <div class="trow">
        <div class="idx">01 / AI INFRA</div>
        <div><h3>The AI infrastructure build-out is the biggest story in tech</h3><p class="body">Gartner calls building AI compute capacity "the largest infrastructure project ever attempted." Data center spending is surging as enterprises and cloud providers race to add AI-optimised servers and capacity.</p><div class="tags"><span>data-center</span><span>gpu</span><span>cloud</span></div></div>
        <div class="metric"><div class="n">+62.5%</div><p class="l">Data center systems spending growth in 2026, to $822B</p><p class="imp"><b>GTM impact:</b> infrastructure, energy, networking and data vendors are chasing new buyers inside AI programmes.</p><p class="src">Gartner, Jul 2026</p></div>
      </div>
      <div class="trow">
        <div class="idx">02 / AGENTIC AI</div>
        <div><h3>Agentic AI: big promise, tough proof</h3><p class="body">Every vendor now claims "agents," but Gartner estimates only about 130 of thousands are the real thing, and expects many projects to be scrapped over cost and unclear value. Buyers are getting sceptical.</p><div class="tags"><span>agents</span><span>roi</span><span>agent-washing</span></div></div>
        <div class="metric"><div class="n">40%<small>+</small></div><p class="l">of agentic AI projects expected to be cancelled by the end of 2027</p><p class="imp"><b>GTM impact:</b> lead with outcomes and proof, not AI buzzwords — and target teams with a real use case.</p><p class="src"><a href="https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says" target="_blank" rel="noopener noreferrer">Gartner prediction</a></p></div>
      </div>
      <div class="trow">
        <div class="idx">03 / SOFTWARE</div>
        <div><h3>Software budgets grow — but move toward AI and usage pricing</h3><p class="body">Software spending keeps climbing, yet money is shifting from seat-based SaaS toward AI-native tools and usage- or outcome-based pricing. CFOs are consolidating overlapping apps.</p><div class="tags"><span>saas</span><span>consolidation</span><span>pricing</span></div></div>
        <div class="metric"><div class="n">+15.5%</div><p class="l">Worldwide software spending growth in 2026, to $1.47T</p><p class="imp"><b>GTM impact:</b> find accounts reviewing their stack before renewal — that's when displacement happens.</p><p class="src">Gartner, Jul 2026</p></div>
      </div>
      <div class="trow">
        <div class="idx">04 / SECURITY</div>
        <div><h3>Security spending keeps outpacing the threat headlines</h3><p class="body">Cloud and AI adoption widen the attack surface. Cloud security posture management, threat intelligence and zero-trust access are among the fastest-growing categories.</p><div class="tags"><span>cspm</span><span>zero-trust</span><span>ciso</span></div></div>
        <div class="metric"><div class="n">$246.2B</div><p class="l">Information security spend in 2026, +12.2%; CSPM growing 33.4%</p><p class="imp"><b>GTM impact:</b> crowded vendor space — reach CISOs with context on their stack and maturity.</p><p class="src"><a href="https://softwarestrategiesblog.com/2026/04/01/top-10-fastest-growing-security-categories-gartner-2026-forecast/" target="_blank" rel="noopener noreferrer">Gartner forecast, via Software Strategies</a></p></div>
      </div>
      <div class="trow">
        <div class="idx">05 / BUYER</div>
        <div><h3>Buyers go self-serve and AI-assisted</h3><p class="body">Most B2B buyers would rather research without a sales rep, and many now use AI tools during a purchase. Shortlists are often set before a vendor is ever contacted.</p><div class="tags"><span>self-serve</span><span>dark-funnel</span><span>genai</span></div></div>
        <div class="metric"><div class="n">67%</div><p class="l">of B2B buyers prefer a rep-free experience; 45% used AI in a recent purchase</p><p class="imp"><b>GTM impact:</b> you need to be visible to the right accounts long before they raise a hand.</p><p class="src"><a href="https://www.biztechreports.com/news-archive/2026/4/1/gartner-sales-survey-finds-67-of-b2b-buyers-prefer-a-rep-free-experience-gartner-april-4-2026" target="_blank" rel="noopener noreferrer">Gartner survey of 646 buyers</a></p></div>
      </div>
      <div class="trow">
        <div class="idx">06 / COMMITTEE</div>
        <div><h3>Buying groups keep getting bigger</h3><p class="body">Forrester finds that a typical B2B purchase now involves 13 internal stakeholders and 9 external influencers — and purchases with generative AI features roughly double the size of the group.</p><div class="tags"><span>buying-group</span><span>abm</span><span>consensus</span></div></div>
        <div class="metric"><div class="n">22</div><p class="l">People influencing an average B2B purchase (13 internal + 9 external)</p><p class="imp"><b>GTM impact:</b> single-threaded deals stall — multi-thread from the first touch.</p><p class="src"><a href="https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/" target="_blank" rel="noopener noreferrer">Forrester State of Business Buying 2026</a></p></div>
      </div>
    </div>
    <p style="margin-top:28px;font-family:var(--mono);font-size:12px;color:var(--on-dark-3)">Last updated: November 2026</p>
  </div>
</section>

<!-- =============== OLD PLAYBOOK VS 2026 =============== -->
<section class="section bg-mist" id="shift">
  <div class="container">
    <div class="head">
      <p class="kicker">What changed for tech sellers</p>
      <h2 class="h2">The old tech GTM playbook vs. the 2026 reality</h2>
      <p class="lead">Spray-and-pray outbound and single-threaded deals made sense when buyers needed vendors to learn about products. Today buyers arrive informed, in larger groups, with sharper questions about value.</p>
    </div>
    <div class="shift-wrap">
      <div class="art">
        <!-- Illustration: dark funnel - research you never see -->
        <svg role="img" aria-label="Illustration of the hidden buyer journey: buyers research through AI assistants, peer reviews, communities and documentation before contacting a vendor" viewBox="0 0 520 420">
          <rect width="520" height="420" rx="24" fill="#fff" stroke="#d7e0ec"/>
          <text x="32" y="44" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#5b6b82" letter-spacing="1">THE RESEARCH YOU NEVER SEE</text>
          <rect x="32" y="64" width="456" height="230" rx="18" fill="#061426"/>
          <g fill="none" stroke="#38e0f5" stroke-width="2" stroke-opacity=".7"><path class="flow-dash" d="M88 180 C 150 110, 200 110, 250 150 S 340 230, 400 180"/></g>
          <g font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">
            <g transform="translate(88 180)"><circle r="30" fill="#1258e8"/><circle cy="-6" r="8" fill="#fff"/><path d="M-13 14 q13 -16 26 0" fill="#fff"/><text y="50" fill="#e9eff7">Buyer</text></g>
            <g transform="translate(170 120)"><rect x="-38" y="-18" width="76" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">AI assistant</text></g>
            <g transform="translate(250 230)"><rect x="-38" y="-18" width="76" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Peer reviews</text></g>
            <g transform="translate(320 110)"><rect x="-38" y="-18" width="76" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Communities</text></g>
            <g transform="translate(400 180)"><rect x="-40" y="-18" width="80" height="36" rx="10" fill="#0c2f57" stroke="#63cdf7" stroke-opacity=".5"/><text y="4" fill="#e9eff7">Docs &amp; demos</text></g>
          </g>
          <g transform="translate(32 316)">
            <rect width="456" height="72" rx="16" fill="#eaf1fd"/>
            <g transform="translate(20 18)"><rect width="36" height="36" rx="10" fill="url(#vend)"/><path d="M11 18 h14 M18 11 v14" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/></g>
            <text x="70" y="32" font-family="Sora, sans-serif" font-size="14" font-weight="600" fill="#061426">Your first sales call</text>
            <text x="70" y="52" font-family="Inter, sans-serif" font-size="12" fill="#4a5a70">…often arrives after the shortlist is set</text>
          </g>
          <defs><linearGradient id="vend" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient></defs>
        </svg>
      </div>
      <div class="tbl">
        <table class="shift">
          <thead><tr><th scope="col">Old playbook</th><th scope="col" class="now">2026 reality</th></tr></thead>
          <tbody>
            <tr><td>Buy a big list and blast it</td><td>Define your TAM by fit, tech stack and growth signals</td></tr>
            <tr><td>Win over one champion</td><td>Multi-thread across a buying group of 13+ people</td></tr>
            <tr><td>Wait for inbound demo requests</td><td>Reach accounts before they raise a hand</td></tr>
            <tr><td>Lead with features and "AI-powered"</td><td>Lead with outcomes, proof and ROI</td></tr>
            <tr><td>Generic messaging for every role</td><td>Separate stories for CIO, CISO, engineering and finance</td></tr>
            <tr><td>CRM data refreshed once a year</td><td>Continuous enrichment as people and stacks change</td></tr>
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
      <p class="kicker">Technology segments</p>
      <h2 class="h2">The tech markets we help you sell into</h2>
      <p class="lead">Whether you sell to enterprises running large IT estates or to fast-growing tech companies, each segment has its own buyers, budgets and buying signals.</p>
    </div>
    <div class="bento">
      <div class="tile big">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 1 3 3v1a3 3 0 0 1-1 5.8V18a4 4 0 0 1-8 0 4 4 0 0 1-8 0v-1.2A3 3 0 0 1 3 11v-1a3 3 0 0 1 3-3V6a4 4 0 0 1 6-3.5"/><path d="M12 2v20"/></svg></span>
        <h3>AI, data &amp; analytics</h3>
        <p>Organisations funding AI programmes, data platforms and analytics — from early pilots to enterprise rollout.</p>
        <span class="who">CDOs · CTOs · heads of data &amp; ML · AI leads</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg></span>
        <h3>Cybersecurity</h3>
        <p>Security teams buying cloud security, identity, zero-trust, threat intelligence and managed detection.</p>
        <span class="who">CISOs · security architects · SOC leads</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.8A6 6 0 1 0 6 16.5"/><path d="M6 19h11.5"/></svg></span>
        <h3>Cloud &amp; infrastructure</h3>
        <p>Cloud migration, data center, networking and storage buyers.</p>
        <span class="who">CIOs · cloud architects · infra heads</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg></span>
        <h3>SaaS &amp; enterprise apps</h3>
        <p>ERP, CRM, HCM and productivity buyers reviewing and consolidating their stack.</p>
        <span class="who">CIOs · app owners · RevOps · HR tech</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg></span>
        <h3>DevOps &amp; developer tools</h3>
        <p>Engineering teams adopting platforms, observability and AI coding tools.</p>
        <span class="who">VPs engineering · platform · DevOps</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></svg></span>
        <h3>IT services, MSPs &amp; channel</h3>
        <p>Managed service providers, systems integrators, VARs and distributors — as customers and as partners.</p>
        <span class="who">Owners · practice leads · alliance managers</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span>
        <h3>Hardware, devices &amp; telecom</h3>
        <p>End-user computing, IoT, networking equipment and communications services buyers.</p>
        <span class="who">IT directors · procurement · network managers</span>
      </div>
    </div>
  </div>
</section>

<!-- =============== FLYWHEEL =============== -->
<section class="section bg-dark" id="approach">
  <div class="container">
    <div class="head center" style="text-align:center">
      <p class="kicker">How we help</p>
      <h2 class="h2">A growth flywheel: data → demand → leads</h2>
      <p class="lead">In tech, data, demand generation and lead generation aren't separate projects. Each turn of the wheel makes the next one more precise, because what you learn from engagement sharpens your targeting.</p>
    </div>
    <div class="fly">
      <div class="diagram">
        <svg role="img" aria-label="Flywheel diagram: data feeds demand generation, demand generation feeds lead generation, and lead generation results feed back into data" viewBox="0 0 480 480">
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
            <g transform="translate(240 64)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="url(#fw-a)"/><text y="-2" fill="#fff">1 · Data</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#e6eefc">find &amp; enrich</text></g>
            <g transform="translate(410 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">2 · Demand</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">engage the group</text></g>
            <g transform="translate(70 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">3 · Leads</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">convert &amp; learn</text></g>
          </g>
        </svg>
      </div>
      <div class="steps">
        <div class="fstep"><span class="dot" style="background:linear-gradient(135deg,#1258e8,#00a8ff);color:#fff">01</span><div><h3>Data — know exactly who to target</h3><p class="q">// which accounts, which people, what stack?</p><p>Build your TAM by firmographics, technology install base and growth signals. Map the buying group at each account and keep CRM records accurate as people and tools change.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">02</span><div><h3>Demand generation — be on the shortlist</h3><p class="q">// how do we reach buyers before they reach us?</p><p>Run account-based campaigns, content syndication and events aimed at the full buying group, with messages tailored to the CIO, CISO, engineering lead and finance.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">03</span><div><h3>Lead generation — start real conversations</h3><p class="q">// who should sales call this week?</p><p>Turn engaged accounts into verified, prioritised prospects for SDRs and partners — then feed what converts back into your targeting.</p></div></div>
      </div>
    </div>
    <p style="margin-top:40px;text-align:center;font-size:15px;color:var(--on-dark)">Coral Blue Data provides the data layer — contacts, companies, install-base data, enrichment and hygiene — that powers your demand and lead generation, in-house or with your agency.</p>
  </div>
</section>

<!-- =============== PERSONAS (tabs) =============== -->
<section class="section bg-mist" id="personas">
  <div class="container">
    <div class="head">
      <p class="kicker">Buyer personas</p>
      <h2 class="h2">Who we help in the technology market</h2>
      <p class="lead">Pick a persona to see the problems they face in 2026, and how data, demand generation and lead generation help solve them.</p>
    </div>

    <div class="tabs" role="tablist" aria-label="Technology personas">
      <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="true"><span class="tn">01</span>SaaS growth marketer</button>
      <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1"><span class="tn">02</span>Cybersecurity sales</button>
      <button class="tab" role="tab" id="t3" aria-controls="p3" aria-selected="false" tabindex="-1"><span class="tn">03</span>AI startup GTM</button>
      <button class="tab" role="tab" id="t4" aria-controls="p4" aria-selected="false" tabindex="-1"><span class="tn">04</span>Cloud &amp; infra marketer</button>
      <button class="tab" role="tab" id="t5" aria-controls="p5" aria-selected="false" tabindex="-1"><span class="tn">05</span>MSP &amp; IT services</button>
      <button class="tab" role="tab" id="t6" aria-controls="p6" aria-selected="false" tabindex="-1"><span class="tn">06</span>Channel &amp; alliances</button>
    </div>

    <!-- P1 -->
    <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1">
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><rect x="46" y="44" width="18" height="18" rx="5" fill="#38e0f5"/><path d="M50 57 l4 -5 l3 3 l4 -6" stroke="#061426" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div><h3>The SaaS Growth Marketer</h3><p class="role">Director of Demand Gen · B2B SaaS</p></div>
          <blockquote>"Our MQLs look fine on a dashboard, but sales says half of them will never buy."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Mid-market &amp; enterprise ops teams</span></div><div><span>Measured on</span><span>Pipeline, CAC, win rate</span></div><div><span>Linked trends</span><span>03 · 05</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Customers consolidating apps and cutting seats</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Buyers self-educate, so form fills arrive late</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Rising CAC on paid channels</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Build an ICP list using firmographics plus the tools accounts already run, so you target companies that fit — and competitor users ripe for a switch.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Run ABM and content syndication to the ops, finance and IT roles that sign off, ahead of renewal season.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Hand SDRs verified contacts at high-fit accounts, so fewer MQLs are wasted on poor-fit companies.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Higher MQL-to-SQL rate</span><span class="chip">Lower CAC</span><span class="chip">More competitive displacements</span></div></div>
        </div>
      </div>
    </div>

    <!-- P2 -->
    <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="36" cy="28" r="11" fill="#63cdf7"/><path d="M16 60 q20 -24 40 0" fill="#63cdf7"/><path d="M55 40 l9 3.5 v7 c0 6 -4 9.5 -9 10.5 c-5 -1 -9 -4.5 -9 -10.5 v-7z" fill="#ff786d"/><path d="M51.5 51 l2.5 2.5 l5 -5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          <div><h3>The Cybersecurity Sales Director</h3><p class="role">Regional Sales Director · Security vendor</p></div>
          <blockquote>"Every CISO gets fifty security pitches a week. Ours has to be the one that's relevant."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CISOs, security architects</span></div><div><span>Measured on</span><span>New logos, ACV</span></div><div><span>Linked trends</span><span>04 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>One of the most crowded categories in tech</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Deals need security, IT, risk and finance sign-off</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Hard to know which tools a prospect already runs</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Segment by cloud provider, security stack and company size; reach CISOs plus the architects and IT leaders who influence them.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Share threat research and benchmarks matched to each account's environment and maturity.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Prioritise accounts with high-growth needs, such as cloud-first companies without CSPM or zero-trust tools.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Relevant first touch</span><span class="chip">Multi-threaded deals</span><span class="chip">Shorter cycles</span></div></div>
        </div>
      </div>
    </div>

    <!-- P3 -->
    <div class="panel" role="tabpanel" id="p3" aria-labelledby="t3" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><circle cx="55" cy="53" r="10" fill="#061426"/><path d="M55 47 v12 M49 53 h12 M51 49 l8 8 M59 49 l-8 8" stroke="#38e0f5" stroke-width="1.6" stroke-linecap="round"/></svg>
          <div><h3>The AI Startup Head of GTM</h3><p class="role">Head of Growth · AI-native software company</p></div>
          <blockquote>"Buyers are tired of AI hype. We need to reach teams that have a real use case and budget."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Data, product &amp; ops leaders</span></div><div><span>Measured on</span><span>Pilots won, pilot-to-paid</span></div><div><span>Linked trends</span><span>02 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>"Agent washing" makes buyers sceptical</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>AI purchases pull in larger buying groups</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Small team, no time for wrong-fit pilots</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Find companies investing in data platforms and AI roles, with the data stack your product plugs into.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Lead with use-case proof and ROI stories for the business owner, IT and security reviewers.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Focus founders and AEs on a short list of high-fit accounts instead of broad outbound.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Better-fit pilots</span><span class="chip">Faster pilot-to-paid</span><span class="chip">Credible positioning</span></div></div>
        </div>
      </div>
    </div>

    <!-- P4 -->
    <div class="panel" role="tabpanel" id="p4" aria-labelledby="t4" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><path d="M62 58 a6 6 0 0 0 -2 -11.6 a8 8 0 0 0 -15 2.6 a5 5 0 0 0 1 9z" fill="#38e0f5"/></svg>
          <div><h3>The Cloud &amp; Infrastructure Marketer</h3><p class="role">Field Marketing Lead · Cloud, data center &amp; networking</p></div>
          <blockquote>"AI is driving huge infrastructure demand — the question is which accounts are actually building."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CIOs, infra &amp; cloud architects</span></div><div><span>Measured on</span><span>Sourced pipeline, deal size</span></div><div><span>Linked trends</span><span>01 · 04</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Large, complex deals with long evaluations</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Need to spot who is scaling AI workloads</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Events and field budgets under ROI scrutiny</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Identify accounts by cloud platform, infrastructure install base, size and region.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Fill executive roundtables and field events with the infrastructure decision-makers that matter.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Give field reps target account lists with complete buying-group contacts for each territory.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Higher event ROI</span><span class="chip">Bigger deals</span><span class="chip">Territory focus</span></div></div>
        </div>
      </div>
    </div>

    <!-- P5 -->
    <div class="panel" role="tabpanel" id="p5" aria-labelledby="t5" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="30" cy="28" r="9" fill="#63cdf7"/><path d="M14 58 q16 -20 32 0" fill="#63cdf7"/><circle cx="46" cy="30" r="7" fill="#fff"/><path d="M36 58 q10 -16 24 0" fill="#fff"/><rect x="50" y="46" width="16" height="12" rx="3" fill="#1258e8"/></svg>
          <div><h3>The MSP &amp; IT Services BD Lead</h3><p class="role">Business Development Manager · MSP / systems integrator</p></div>
          <blockquote>"Small and mid-sized businesses need us, but finding the ones ready to outsource IT is the hard part."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>SMB owners, IT managers</span></div><div><span>Measured on</span><span>New MRR, meetings set</span></div><div><span>Linked trends</span><span>03 · 04</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Fragmented local markets, many tiny accounts</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Decision-makers wear many hats</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Services spending grows slowly</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Target businesses by size, industry, location and the technologies they run — Microsoft 365, cloud and security tools.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Run local campaigns around security and compliance needs that SMBs can't handle alone.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Book conversations with owners and IT managers at accounts that match your service area.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Steady meeting flow</span><span class="chip">Higher-value contracts</span><span class="chip">Local market coverage</span></div></div>
        </div>
      </div>
    </div>

    <!-- P6 -->
    <div class="panel" role="tabpanel" id="p6" aria-labelledby="t6" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><circle cx="50" cy="52" r="5" fill="#061426"/><circle cx="62" cy="52" r="5" fill="#061426"/><path d="M55 52 h2" stroke="#061426" stroke-width="3"/></svg>
          <div><h3>The Channel &amp; Alliances Manager</h3><p class="role">Head of Partnerships · Hardware or software vendor</p></div>
          <blockquote>"Our partners need pipeline too. If we can't feed them good accounts, they sell someone else's product."</blockquote>
          <div class="meta"><div><span>Sells through</span><span>VARs, MSPs, distributors</span></div><div><span>Measured on</span><span>Partner-sourced revenue</span></div><div><span>Linked trends</span><span>01 · 05</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p>
            <div class="pains">
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Recruiting the right partners in each region</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Partners lack quality leads for joint campaigns</div>
              <div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Overlap and conflict between partners</div>
            </div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Map resellers, MSPs and integrators by specialism, vendor relationships and geography to recruit the right ones.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Power through-partner campaigns with shared target lists for each territory.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Distribute verified, de-duplicated leads to partners to reduce conflict and speed follow-up.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Stronger partner network</span><span class="chip">More partner-sourced deals</span><span class="chip">Less channel conflict</span></div></div>
        </div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:13px;color:var(--faint)">Personas are illustrative composites of common technology go-to-market roles, not specific individuals.</p>
  </div>
</section>

<!-- =============== BUYING STAGES =============== -->
<section class="section bg-white" id="buying-group">
  <div class="container">
    <div class="head">
      <p class="kicker">The tech buying group</p>
      <h2 class="h2">Who's involved at each stage of a tech purchase</h2>
      <p class="lead">Different people lead at different stages. Effective demand and lead generation reaches each of them when their voice matters most.</p>
    </div>
    <div class="lanes">
      <div class="lane">
        <span class="st">STAGE 1</span><h3>Discover</h3><p class="ask">"Do we have a problem worth solving?"</p>
        <div class="roles"><span class="r"><i style="background:#38e0f5"></i>End users &amp; team leads</span><span class="r"><i style="background:#00a8ff"></i>Engineering / IT managers</span></div>
        <p class="feed"><b>Reach them with:</b> educational content, communities, events</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 2</span><h3>Evaluate</h3><p class="ask">"Which options fit our stack?"</p>
        <div class="roles"><span class="r"><i style="background:#00a8ff"></i>Architects &amp; tech evaluators</span><span class="r"><i style="background:#1258e8"></i>CTO / VP engineering</span></div>
        <p class="feed"><b>Reach them with:</b> comparisons, demos, technical proof</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 3</span><h3>Validate</h3><p class="ask">"Is it secure, compliant and worth it?"</p>
        <div class="roles"><span class="r"><i style="background:#ff786d"></i>CISO &amp; security review</span><span class="r"><i style="background:#93b2fb"></i>Legal &amp; compliance</span></div>
        <p class="feed"><b>Reach them with:</b> security documentation, ROI cases</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 4</span><h3>Approve</h3><p class="ask">"Can we afford it — and who signs?"</p>
        <div class="roles"><span class="r"><i style="background:#1258e8"></i>CIO / economic buyer</span><span class="r"><i style="background:#061426"></i>Finance &amp; procurement</span></div>
        <p class="feed"><b>Reach them with:</b> business case, references, pricing clarity</p>
      </div>
    </div>
    <div class="lane-bar" style="margin-top:-1px;border-radius:0 0 24px 24px" aria-hidden="true"></div>
    <div class="legend"><span><i style="background:#1258e8"></i>Executive</span><span><i style="background:#00a8ff"></i>Technical</span><span><i style="background:#38e0f5"></i>Users</span><span><i style="background:#ff786d"></i>Security</span><span><i style="background:#93b2fb"></i>Risk &amp; legal</span><span><i style="background:#061426"></i>Finance</span></div>
    <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
      <a class="btn btn-primary" href="/solutions/technology-install-base-data">See technology install-base data →</a>
      <a class="btn btn-light" href="/solutions/b2b-contact-company-data">B2B contact &amp; company data</a>
    </div>
  </div>
</section>

<!-- =============== FAQ =============== -->
<section class="section bg-mist" id="faq">
  <div class="container">
    <div class="head">
      <p class="kicker">FAQs</p>
      <h2 class="h2">Technology industry FAQs</h2>
    </div>
    <div class="faq-grid">
      <div class="faq"><h3><span>Q1</span>What are the biggest technology industry trends in 2026?</h3><p>Record AI infrastructure investment, the rise (and scrutiny) of agentic AI, software budgets shifting toward AI and usage-based pricing, fast-growing security spend, self-serve buyers who prefer to research without a rep, and larger B2B buying groups.</p></div>
      <div class="faq"><h3><span>Q2</span>How much will companies spend on IT in 2026?</h3><p>Gartner forecasts worldwide IT spending of $6.37 trillion in 2026, up 14.2% from 2025, with data center systems (+62.5%) and software (+15.5%) growing fastest.</p></div>
      <div class="faq"><h3><span>Q3</span>Why is selling technology harder today?</h3><p>Buyers research independently, often with AI tools, and involve more stakeholders — Forrester counts 13 internal and 9 external on average. Vendors that reach the full group early, with relevant messages, are the ones that make the shortlist.</p></div>
      <div class="faq"><h3><span>Q4</span>What is demand generation for technology companies?</h3><p>It's the work of building awareness and preference among your target accounts before they're ready to buy — through account-based marketing, content, events and campaigns aimed at every member of the buying group.</p></div>
      <div class="faq"><h3><span>Q5</span>How is lead generation different from demand generation?</h3><p>Demand generation creates interest across your market. Lead generation captures and qualifies specific people and accounts ready for a sales conversation. Both rely on accurate data about who belongs in your market.</p></div>
      <div class="faq"><h3><span>Q6</span>What is technology install-base data?</h3><p>Data showing which software, hardware and cloud platforms a company uses. Tech vendors use it to find accounts that run complementary tools, competitor products ready for replacement, or the stack their product integrates with.</p></div>
      <div class="faq"><h3><span>Q7</span>How does Coral Blue Data support tech demand and lead generation?</h3><p>We supply the data layer — B2B contacts and companies, technology install-base data, enrichment, cleansing and verification — that your marketing, sales or agency teams use to target campaigns and outreach precisely.</p></div>
      <div class="faq"><h3><span>Q8</span>Can you help us reach channel partners as well as end customers?</h3><p>Yes. Data can cover MSPs, VARs, systems integrators and distributors by specialism and geography, so you can recruit partners and support joint campaigns as well as reach end customers.</p></div>
    </div>
  </div>
</section>

<!-- =============== CTA =============== -->
<section class="bg-white" style="padding:104px 0 96px">
  <div class="container">
    <div class="cta">
      <div class="grid-bg" aria-hidden="true"></div>
      <h2>Build a tech go-to-market that wins in 2026</h2>
      <p>Tell us what you sell and who you sell to. We'll show you the accounts, technologies and buying groups that fit — and how to put that data to work in your demand and lead generation.</p>
      <div class="ctas">
        <a class="btn btn-white" href="/contact">Talk With an Expert →</a>
        <a class="btn btn-ghost" href="/request-a-quote">Request a Sample</a>
      </div>
      <p class="small">A specialist reviews every request and replies by email, typically within two business days.</p>
    </div>

    <div class="sources">
      <p style="font-weight:600;color:var(--muted-2)">Sources</p>
      <ol>
        <li><a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer">Gartner — Worldwide IT spending forecast, July 2026</a></li>
        <li><a href="https://www.biztechreports.com/news-archive/2026/4/1/gartner-sales-survey-finds-67-of-b2b-buyers-prefer-a-rep-free-experience-gartner-april-4-2026" target="_blank" rel="noopener noreferrer">Gartner sales survey — 67% of B2B buyers prefer rep-free (via BizTech Reports)</a></li>
        <li><a href="https://digitalcommerce360.com/2026/01/22/forrester-b2b-buying-ai-2026/" target="_blank" rel="noopener noreferrer">Forrester — State of Business Buying 2026 (via Digital Commerce 360)</a></li>
        <li><a href="https://softwarestrategiesblog.com/2026/04/01/top-10-fastest-growing-security-categories-gartner-2026-forecast/" target="_blank" rel="noopener noreferrer">Gartner information security forecast 2026 (via Software Strategies Blog)</a></li>
        <li><a href="https://www.thestar.com.my/tech/tech-news/2025/06/25/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-gartner-says" target="_blank" rel="noopener noreferrer">Gartner — Over 40% of agentic AI projects to be cancelled by 2027 (via The Star)</a></li>
      </ol>
    </div>
  </div>
</section>

<!-- =============== FOOTER =============== -->`;

export const TECH_JSON_LD = `{
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"WebPage","@id":"https://coralbluedata1.vercel.app/industries/technology#webpage","url":"https://coralbluedata1.vercel.app/industries/technology","name":"Technology Industry Marketing & Growth Solutions | Coral Blue Data","description":"Tech in 2026: $6.37T IT spend, an AI infrastructure boom, bigger buying groups and self-serve buyers. How data, demand generation and lead generation help technology companies grow.","dateModified":"2026-11-03","publisher":{"@type":"Organization","name":"Coral Blue Data","url":"https://coralbluedata1.vercel.app/"}},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://coralbluedata1.vercel.app/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://coralbluedata1.vercel.app/industries"},{"@type":"ListItem","position":3,"name":"Technology","item":"https://coralbluedata1.vercel.app/industries/technology"}]},
    {"@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What are the biggest technology industry trends in 2026?","acceptedAnswer":{"@type":"Answer","text":"Record AI infrastructure investment, scrutiny of agentic AI, software budgets shifting toward AI and usage-based pricing, fast-growing security spend, self-serve buyers, and larger B2B buying groups."}},
      {"@type":"Question","name":"How much will companies spend on IT in 2026?","acceptedAnswer":{"@type":"Answer","text":"Gartner forecasts worldwide IT spending of $6.37 trillion in 2026, up 14.2% from 2025, with data center systems and software growing fastest."}},
      {"@type":"Question","name":"What is technology install-base data?","acceptedAnswer":{"@type":"Answer","text":"Data showing which software, hardware and cloud platforms a company uses, which tech vendors use to find accounts running complementary or competing tools."}},
      {"@type":"Question","name":"How does Coral Blue Data support tech demand and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Coral Blue Data supplies B2B contacts and companies, technology install-base data, enrichment, cleansing and verification that marketing and sales teams use to target campaigns and outreach."}}
    ]}
  ]
}`;
