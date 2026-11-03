/**
 * Content for the Healthcare industry landing page.
 *
 * Source of truth: the hand-authored design. CSS is scoped under the `.hc`
 * wrapper so its generic class names never collide with the app's global
 * styles or the real SiteHeader / SiteFooter. The `html.js` ancestor is
 * preserved (the root layout sets the `js` class on <html>) so the
 * progressive-enhancement reveal styles keep working. The page's own
 * <header>, <footer> and behaviour <script>s are stripped here; the
 * interactions (tabs, reveal, count-up, chart bars, lanes) are
 * re-implemented in HealthcareLanding (client) and the real site chrome
 * comes from the (site) layout.
 */

export const HEALTH_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
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
}
.hc /* ---- healthcare variations ---- */
.market.rev{flex-direction:row-reverse}
.hc .trow.mir{grid-template-columns:minmax(0,1fr) minmax(0,1.1fr) 120px}
.hc .trow.mir .idx{text-align:right}
@media (max-width:900px){
.hc .trow.mir{grid-template-columns:1fr}
.hc .trow.mir .idx{text-align:left;order:-1}
}
.hc .shift-wrap.rev{flex-direction:row-reverse}
.hc .fly.rev{flex-direction:row-reverse}
.hc .hb.wide{grid-template-columns:190px 1fr 64px}
@media (max-width:560px){
.hc .hb.wide{grid-template-columns:120px 1fr 52px}
}
.hc .tile.w4{grid-column:span 4}
@media (max-width:1000px){
.hc .tile.w4{grid-column:span 2}
}
@media (max-width:640px){
.hc .tile.w4{grid-column:span 1}
}
.hc .hero .split-hero{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:24px;text-align:left;max-width:1180px;margin:0 auto}
.hc .hero .split-hero .copy{flex:999 1 560px;min-width:0}
.hc .hero .split-hero .side{flex:1 1 300px;min-width:0;display:flex;flex-direction:column;gap:12px}
.hc .hero .split-hero h1{margin:24px 0 0;max-width:780px}
.hc .hero .split-hero .hero-sub{margin:24px 0 0}
.hc .hero .split-hero .ctas{justify-content:flex-start}
.hc .jump{display:flex;flex-direction:column;gap:8px}
.hc .jump a{display:flex;justify-content:space-between;align-items:center;gap:12px;font-family:var(--mono);font-size:12px;color:#e9eff7;text-decoration:none;padding:12px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04)}
.hc .jump a:hover{border-color:var(--coral-300)}
.hc .jump a span{color:var(--cyan)}
.hc /* ---------- motion & interaction ---------- */
html.js .hc .rv{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
html.js .hc .rv.in{opacity:1;transform:none}
html.js .hc .hb .fl{transition:width 1.4s cubic-bezier(.2,.7,.2,1)}
.hc .metric,.hc .tile,.hc .fstep,.hc .callout,.hc .lane .r,.hc .pain,.hc .sv{transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease,background .25s ease}
.hc .metric:hover{transform:translateY(-4px);border-color:rgba(56,224,245,.5);box-shadow:0 18px 40px -20px rgba(0,168,255,.55)}
.hc .tile:hover{transform:translateY(-4px);box-shadow:0 20px 40px -24px rgba(6,20,38,.35);border-color:#9fb6dc}
.hc .tile.big:hover{border-color:var(--cyan)}
.hc .fstep:hover{border-color:rgba(56,224,245,.5);background:rgba(56,224,245,.06);transform:translateX(4px)}
.hc .callout:hover,.hc .sv:hover{transform:translateY(-2px);box-shadow:0 12px 28px -18px rgba(18,88,232,.45)}
.hc .trow{position:relative}
.hc .trow:before{content:"";position:absolute;left:0;top:-1px;height:2px;width:0;background:linear-gradient(90deg,#1258e8,#38e0f5);transition:width 1s ease}
.hc .trow.in:before{width:100%}
.hc .panel{animation:panelIn .45s ease}
@keyframes panelIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
.hc .tab{position:relative;overflow:hidden}
.hc .tab .bar{position:absolute;left:0;bottom:0;height:3px;width:0;background:var(--cyan)}
.hc .tab[aria-selected="true"] .bar{animation:tabbar 7s linear forwards}
.hc .tabs.paused .tab .bar{animation-play-state:paused}
@keyframes tabbar{to{width:100%}}
.hc .lane{cursor:pointer;transition:background .25s ease}
.hc .lane:focus-visible{outline:3px solid var(--sky,#00a8ff);outline-offset:-3px}
.hc .lanes.has-active .lane{opacity:.55}
.hc .lanes.has-active .lane.active{opacity:1;background:#f2f7ff}
.hc .lane.active .r{border-color:#9fb6dc;background:#fff;box-shadow:0 8px 20px -14px rgba(18,88,232,.5)}
.hc .lane.active .st{color:var(--coral-500)}
.hc .lane-hint{margin-top:14px;font-family:var(--mono);font-size:12px;color:var(--faint)}
.hc .hero h1 .grad-text{background-size:200% 100%;animation:shine 6s ease-in-out infinite}
@keyframes shine{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
.hc .hs .n,.hc .metric .n{font-variant-numeric:tabular-nums}
.hc .scroll-cue{display:flex;justify-content:center;margin-top:28px}
.hc .scroll-cue span{width:22px;height:36px;border:2px solid rgba(255,255,255,.3);border-radius:12px;position:relative}
.hc .scroll-cue span:after{content:"";position:absolute;left:50%;top:7px;width:4px;height:8px;border-radius:2px;background:var(--cyan);transform:translateX(-50%);animation:cue 1.8s ease-in-out infinite}
@keyframes cue{0%{opacity:0;top:6px}40%{opacity:1}100%{opacity:0;top:20px}}
@media (prefers-reduced-motion:reduce){
html.js .hc .rv{opacity:1;transform:none;transition:none}
html.js .hc .hb .fl{transition:none}
.hc .panel,.hc .hero h1 .grad-text,.hc .scroll-cue span:after{animation:none}
.hc .tab[aria-selected="true"] .bar{animation:none}
}`;

export const HEALTH_BODY = `<!-- =============== HERO =============== -->
<section class="hero">
  <div class="hero-grid" aria-hidden="true"></div>
  <div class="hero-glow" aria-hidden="true"></div>

  

  <div class="container hero-inner">
    <div class="split-hero">
      <div class="copy">
        <nav class="crumbs" aria-label="Breadcrumb" style="text-align:left"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span>Healthcare</span></nav>
        <span class="status"><i aria-hidden="true"></i>Industry · Healthcare · Market brief</span>
        <h1>Healthcare is under pressure. <span class="grad-text">Its buyers are more careful than ever.</span></h1>
        <p class="hero-sub">Hospitals and health systems are working through thin margins, Medicaid cuts, staff shortages and a rush to adopt AI. For the companies that sell to them, that means bigger committees, tougher proof and slower decisions. Coral Blue Data gives healthcare vendors the data to find the right accounts, reach the whole buying group and turn interest into pipeline.</p>
        <div class="ctas">
          <a class="btn btn-primary" href="/contact">Talk With a Healthcare GTM Expert →</a>
          <a class="btn btn-ghost" href="/solutions/healthcare-data">Explore Healthcare Data</a>
        </div>
      </div>
      <nav class="side jump" aria-label="On this page">
        <a href="#trends">Industry trends <span>01</span></a>
        <a href="#shift">How healthcare buying changed <span>02</span></a>
        <a href="#approach">Data → demand → leads <span>03</span></a>
        <a href="#personas">Buyer personas <span>04</span></a>
        <a href="#buying-group">Who decides <span>05</span></a>
      </nav>
    </div>

    <!-- Hero illustration: care network + buying committee -->
    <div class="hero-visual">
      <svg role="img" aria-label="Illustration of a health system spanning hospitals, ambulatory surgery centres, clinics, home health and virtual care, connected to its buying committee: CMO, CNO, CFO, value analysis committee, CIO and supply chain" viewBox="0 0 1080 380">
        <defs>
          <linearGradient id="hv-win" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2f57"/><stop offset="1" stop-color="#061426"/></linearGradient>
          <linearGradient id="hv-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient>
          <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#1258e8" stop-opacity=".6"/><stop offset="1" stop-color="#1258e8" stop-opacity="0"/></radialGradient>
        </defs>
        <ellipse cx="540" cy="250" rx="420" ry="140" fill="url(#hv-glow)"/>
        <g fill="none" stroke="#38e0f5" stroke-opacity=".55" stroke-width="1.5">
          <path class="flow-dash" d="M400 150 C 300 150, 260 90, 170 90"/>
          <path class="flow-dash" d="M400 230 C 300 230, 260 220, 170 220"/>
          <path class="flow-dash" d="M400 300 C 300 300, 260 330, 170 330"/>
          <path class="flow-dash" d="M680 150 C 780 150, 820 90, 910 90"/>
          <path class="flow-dash" d="M680 230 C 780 230, 820 220, 910 220"/>
          <path class="flow-dash" d="M680 300 C 780 300, 820 330, 910 330"/>
        </g>
        <g transform="translate(400 40)">
          <rect width="280" height="320" rx="18" fill="url(#hv-win)" stroke="#63cdf7" stroke-opacity=".35"/>
          <g transform="translate(18 12)"><rect width="22" height="22" rx="6" fill="url(#hv-a)"/><path d="M11 6 v10 M6 11 h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g>
          <text x="52" y="28" font-family="JetBrains Mono, monospace" font-size="11" fill="#9fb0c8">health-system.network</text>
          <line x1="0" y1="44" x2="280" y2="44" stroke="#63cdf7" stroke-opacity=".15"/>
          <g font-family="JetBrains Mono, monospace" font-size="12" font-weight="600">
            <g transform="translate(20 58)"><rect width="240" height="40" rx="10" fill="url(#hv-a)"/><text x="16" y="25" fill="#fff">Home &amp; post-acute</text><text x="224" y="25" text-anchor="end" fill="#e9eff7">+31%</text></g>
            <g transform="translate(20 108)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Outpatient &amp; ASCs</text><text x="224" y="25" text-anchor="end" fill="#38e0f5">+20%</text></g>
            <g transform="translate(20 158)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Virtual care</text><text x="224" y="25" text-anchor="end" fill="#63cdf7">1 in 5 visits</text></g>
            <g transform="translate(20 208)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".5"/><text x="16" y="25" fill="#e9eff7">Hospitals</text><text x="224" y="25" text-anchor="end" fill="#63cdf7">+7%</text></g>
            <g transform="translate(20 258)"><rect width="240" height="40" rx="10" fill="#0c2f57" stroke="#38e0f5" stroke-opacity=".3"/><text x="16" y="25" fill="#c9d5e6">Emergency</text><text x="224" y="25" text-anchor="end" fill="#9fb0c8">+6%</text></g>
          </g>
        </g>
        <g font-family="Inter, sans-serif" font-size="13" font-weight="600" fill="#e9eff7">
          <g transform="translate(40 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#1258e8"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">CMO</text><text x="48" y="29">Clinical</text></g>
          <g transform="translate(40 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#00a8ff"/><text x="24" y="28" text-anchor="middle" font-size="9" font-family="JetBrains Mono, monospace">CNO</text><text x="48" y="29">Nursing</text></g>
          <g transform="translate(40 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#38e0f5"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">VAC</text><text x="48" y="29">Value</text></g>
          <g transform="translate(910 66)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#ff786d"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">CFO</text><text x="48" y="29">Finance</text></g>
          <g transform="translate(910 196)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#93b2fb"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">CIO</text><text x="48" y="29">IT</text></g>
          <g transform="translate(910 306)"><rect width="130" height="48" rx="24" fill="#082746" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="24" cy="24" r="14" fill="#63cdf7"/><text x="24" y="28" text-anchor="middle" font-size="9" fill="#061426" font-family="JetBrains Mono, monospace">SCM</text><text x="48" y="29">Supply</text></g>
        </g>
        <circle class="blink" cx="400" cy="150" r="4" fill="#38e0f5"/><circle class="blink" cx="680" cy="230" r="4" fill="#38e0f5" style="animation-delay:.8s"/><circle class="blink" cx="400" cy="300" r="4" fill="#38e0f5" style="animation-delay:1.6s"/>
      </svg>
    </div>
  </div>

  <div class="scroll-cue" aria-hidden="true"><span></span></div>
  <div class="hero-stats">
    <div class="container">
      <div class="hs"><div class="n">$5.28T</div><p class="l">US national health spending in 2024, about $15,474 per person</p></div>
      <div class="hs"><div class="n">1.9%</div><p class="l">Median US hospital operating margin, year to date</p></div>
      <div class="hs"><div class="n">86,000</div><p class="l">Projected US physician shortage by 2036</p></div>
      <div class="hs"><div class="n">75%</div><p class="l">of US health systems now use at least one AI application</p></div>
    </div>
  </div>
</section>

<!-- =============== MARKET (chart left) =============== -->
<section class="section bg-white" id="market">
  <div class="container market rev">
    <div class="text">
      <p class="kicker">Healthcare market overview</p>
      <h2 class="h2">Where healthcare demand is moving next</h2>
      <p class="lead">The US healthcare market is huge — health spending is projected to reach 20.3% of GDP by 2033, up from 17.6% in 2023. But growth is shifting away from the hospital bed toward outpatient sites, the home and virtual care.</p>
      <div class="callouts">
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M12 8v6M9 11h6"/></svg></span><p><b>New sites, new buyers.</b> ASCs, clinics, home health and virtual care bring decision-makers that older account lists miss.</p></div>
        <div class="callout"><span class="ico"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></svg></span><p><b>Consolidated buying.</b> 70% of community hospitals are now part of a health system, so decisions often sit at system level.</p></div>
      </div>
    </div>
    <div class="chart" role="img" aria-label="Bar chart of projected US healthcare volume growth over the next 10 years: post-acute care 31%, outpatient 20%, outpatient cancer 20%, inpatient discharges 7%, emergency department 6%">
      <h3>Projected US care volume growth over the next 10 years</h3>
      <p class="sub">Ten-year change in patient volumes by care setting</p>
      <div class="hbars">
        <div class="hb wide"><span>Post-acute &amp; home</span><div class="tr"><div class="fl" style="width:100%">fastest</div></div><b>+31%</b></div>
        <div class="hb wide"><span>Outpatient</span><div class="tr"><div class="fl" style="width:64.5%"></div></div><b>+20%</b></div>
        <div class="hb wide"><span>Outpatient cancer</span><div class="tr"><div class="fl" style="width:64.5%"></div></div><b>+20%</b></div>
        <div class="hb wide"><span>Inpatient discharges</span><div class="tr"><div class="fl soft" style="width:22.6%"></div></div><b>+7%</b></div>
        <div class="hb wide"><span>Emergency department</span><div class="tr"><div class="fl soft" style="width:19.4%"></div></div><b>+6%</b></div>
      </div>
      
    </div>
  </div>
</section>

<!-- =============== TRENDS (mirrored timeline) =============== -->
<section class="section bg-dark" id="trends">
  <div class="container">
    <div class="head">
      <p class="kicker">Healthcare industry trends</p>
      <h2 class="h2">Six pressures the healthcare industry is talking about</h2>
      <p class="lead">Across hospital finance data, policy analysis and executive surveys, the same themes keep coming up. Each one changes what healthcare organisations buy, who signs off and how long it takes.</p>
    </div>

    <div class="timeline">
      <div class="trow mir">
        <div class="metric"><div class="n">1.9%</div><p class="l">Median hospital operating margin, year to date</p><p class="imp"><b>GTM impact:</b> every purchase needs a clear cost or revenue case before it reaches the CFO.</p></div>
        <div><h3>Hospital margins remain fragile</h3><p class="body">Expenses are running ahead of last year while inpatient volumes soften and payer mix erodes. Hospitals with 26–99 beds saw the steepest year-over-year margin decline; the largest systems held up best.</p><div class="tags"><span>finance</span><span>cost</span><span>payer-mix</span></div></div>
        <div class="idx">01 / MARGINS</div>
      </div>
      <div class="trow mir">
        <div class="metric"><div class="n">~$800B</div><p class="l">Federal Medicaid reductions in the 2025 budget law</p><p class="imp"><b>GTM impact:</b> rural and safety-net buyers prioritise survival; budgets tighten and decisions slow.</p></div>
        <div><h3>Medicaid cuts hit rural and safety-net hospitals</h3><p class="body">An estimated 7.8 million more people could be uninsured by 2034, and 432 rural hospitals are vulnerable to closure, and close to half of rural hospitals already operate in the red.</p><div class="tags"><span>policy</span><span>medicaid</span><span>rural</span></div></div>
        <div class="idx">02 / POLICY</div>
      </div>
      <div class="trow mir">
        <div class="metric"><div class="n">42%</div><p class="l">of practising physicians are 55 or older (20% are 65+)</p><p class="imp"><b>GTM impact:</b> staffing, automation and anything that saves clinician time moves up the shortlist.</p></div>
        <div><h3>Clinician shortages keep widening</h3><p class="body">The US faces a projected shortage of up to 86,000 physicians by 2036, and a global shortfall of 4.5 million nurses is projected by 2030. Over 90% of health system executives call productivity a priority.</p><div class="tags"><span>workforce</span><span>nursing</span><span>burnout</span></div></div>
        <div class="idx">03 / WORKFORCE</div>
      </div>
      <div class="trow mir">
        <div class="metric"><div class="n">68%</div><p class="l">of health systems use AI for clinical note-taking — the top use case</p><p class="imp"><b>GTM impact:</b> buyers are ready, but want proof — reach the right system at the right stage.</p></div>
        <div><h3>AI moves from pilot to practice</h3><p class="body">75% of US health systems now use at least one AI application, up from 59% a year earlier. Yet only 2% have deployed AI across the enterprise, and half haven't measured ROI.</p><div class="tags"><span>ambient-ai</span><span>rcm-ai</span><span>roi</span></div></div>
        <div class="idx">04 / AI</div>
      </div>
      <div class="trow mir">
        <div class="metric"><div class="n">+2.41%</div><p class="l">Projected annual medical supply chain cost growth; pharma +3.35%</p><p class="imp"><b>GTM impact:</b> value analysis committees scrutinise price, evidence and alternatives more closely.</p></div>
        <div><h3>Supply and drug costs keep rising</h3><p class="body">IT services, capital equipment and surgical supplies drive the increase, while high-cost therapies such as GLP-1s push drug spend. Tariffs add uncertainty to imported devices and supplies.</p><div class="tags"><span>supply-chain</span><span>tariffs</span><span>vac</span></div></div>
        <div class="idx">05 / SUPPLY</div>
      </div>
      <div class="trow mir">
        <div class="metric"><div class="n">710</div><p class="l">Large healthcare data breaches reported in 2025, affecting 61.6M people</p><p class="imp"><b>GTM impact:</b> security and vendor-risk reviews now sit inside almost every IT purchase.</p></div>
        <div><h3>Cyber risk stays a board-level issue</h3><p class="body">Breach counts dipped slightly from 2024's record, but ransomware and third-party attacks remain constant threats, and cybersecurity ranks among executives' top concerns.</p><div class="tags"><span>security</span><span>ransomware</span><span>third-party</span></div></div>
        <div class="idx">06 / CYBER</div>
      </div>
    </div>
  </div>
</section>

<!-- =============== THEN VS NOW (mirrored) =============== -->
<section class="section bg-mist" id="shift">
  <div class="container">
    <div class="head">
      <p class="kicker">What changed for healthcare sellers</p>
      <h2 class="h2">How healthcare buying used to work vs. today</h2>
      <p class="lead">Selling to a physician champion and waiting for a signature no longer works. Purchases now pass through finance, value analysis, IT and security — and each one can stall the deal.</p>
    </div>
    <div class="shift-wrap rev">
      <div class="art">
        <!-- Illustration: approval path -->
        <svg role="img" aria-label="Illustration of a healthcare approval path: a clinical champion's request passes through finance, the value analysis committee, IT and security review and contracting, with risk of stalling at each gate" viewBox="0 0 520 420">
          <defs><linearGradient id="ap-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient></defs>
          <rect width="520" height="420" rx="24" fill="#fff" stroke="#d7e0ec"/>
          <text x="32" y="44" font-family="JetBrains Mono, monospace" font-size="11" font-weight="600" fill="#5b6b82" letter-spacing="1">THE APPROVAL PATH TODAY</text>
          <rect x="32" y="64" width="456" height="250" rx="18" fill="#061426"/>
          <path d="M80 190 H 440" stroke="#63cdf7" stroke-opacity=".25" stroke-width="10" stroke-linecap="round"/>
          <path class="flow-dash" d="M80 190 H 440" stroke="#38e0f5" stroke-width="2.5" fill="none"/>
          <g font-family="Inter, sans-serif" font-size="11" font-weight="600" text-anchor="middle">
            <g transform="translate(80 190)"><circle r="26" fill="url(#ap-a)"/><circle cy="-6" r="7" fill="#fff"/><path d="M-11 12 q11 -14 22 0" fill="#fff"/><text y="46" fill="#e9eff7">Clinician</text></g>
            <g transform="translate(170 190)"><circle r="18" fill="#0c2f57" stroke="#ff786d" stroke-width="2"/><text y="4" fill="#ff786d" font-family="JetBrains Mono, monospace">$</text><text y="-30" fill="#e9eff7">Finance</text></g>
            <g transform="translate(260 190)"><circle r="18" fill="#0c2f57" stroke="#38e0f5" stroke-width="2"/><text y="4" fill="#38e0f5" font-family="JetBrains Mono, monospace">VAC</text><text y="40" fill="#e9eff7">Value analysis</text></g>
            <g transform="translate(350 190)"><circle r="18" fill="#0c2f57" stroke="#93b2fb" stroke-width="2"/><text y="4" fill="#93b2fb" font-family="JetBrains Mono, monospace">IT</text><text y="-30" fill="#e9eff7">IT &amp; security</text></g>
            <g transform="translate(440 190)"><rect x="-24" y="-24" width="48" height="48" rx="12" fill="url(#ap-a)"/><path d="M-9 0 l6 6 l12 -12" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/><text y="46" fill="#e9eff7">Contract</text></g>
          </g>
          <g font-family="JetBrains Mono, monospace" font-size="10" fill="#ff786d" text-anchor="middle"><text x="170" y="250">stall?</text><text x="350" y="250">stall?</text></g>
          <g transform="translate(32 336)">
            <rect width="456" height="56" rx="14" fill="#eaf1fd"/>
            <text x="20" y="24" font-family="Sora, sans-serif" font-size="14" font-weight="600" fill="#061426">Each gate is a different person</text>
            <text x="20" y="42" font-family="Inter, sans-serif" font-size="12" fill="#4a5a70">…with different questions you need to answer first</text>
          </g>
        </svg>
      </div>
      <div class="tbl">
        <table class="shift">
          <thead><tr><th scope="col">How it used to work</th><th scope="col" class="now">Today's reality</th></tr></thead>
          <tbody>
            <tr><td>Win one physician champion</td><td>Engage clinical, finance, VAC, IT and procurement together</td></tr>
            <tr><td>Sell features and clinical preference</td><td>Lead with cost savings, staff time and outcome evidence</td></tr>
            <tr><td>Target hospitals only</td><td>Follow care into ASCs, clinics, home health and virtual care</td></tr>
            <tr><td>Sell to each facility separately</td><td>Map system-level buyers across consolidated networks</td></tr>
            <tr><td>Field reps carry the relationship</td><td>Reach busy clinicians through digital and account-based programmes</td></tr>
            <tr><td>Contact lists updated once a year</td><td>Continuous refresh as clinicians and affiliations change</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- =============== SEGMENTS (bento, different arrangement) =============== -->
<section class="section bg-white" id="segments">
  <div class="container">
    <div class="head">
      <p class="kicker">Healthcare segments</p>
      <h2 class="h2">The healthcare markets we help you sell into</h2>
      <p class="lead">Each part of healthcare has its own buyers, budgets and pressures. Precision starts with knowing which segment you're really selling to.</p>
    </div>
    <div class="bento">
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/></svg></span>
        <h3>Physician groups &amp; practices</h3>
        <p>Independent and system-owned practices across primary and specialty care.</p>
        <span class="who">Physicians · practice managers · medical directors</span>
      </div>
      <div class="tile big w4">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-4 7 4v13"/><path d="M12 8v6M9 11h6"/><path d="M10 21v-4h4v4"/></svg></span>
        <h3>Hospitals &amp; health systems</h3>
        <p>Acute-care hospitals, academic medical centres and multi-hospital systems — the largest budgets and the biggest buying committees in healthcare.</p>
        <span class="who">CEOs · CFOs · CMOs · CNOs · VACs · supply chain · CIOs</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="12" rx="2"/><path d="M7 9h2l1.5-3 2 6 1.5-3H17"/><path d="M8 21h8M12 15v6"/></svg></span>
        <h3>Ambulatory surgery &amp; outpatient</h3>
        <p>ASCs, imaging centres, urgent care and outpatient clinics — where procedure volumes are growing fastest.</p>
        <span class="who">Administrators · medical directors · materials managers</span>
      </div>
      <div class="tile w3">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M12 13v5M9.5 15.5h5"/></svg></span>
        <h3>Post-acute, home &amp; long-term care</h3>
        <p>Home health, hospice, skilled nursing and senior living — the fastest-growing care setting through 2036.</p>
        <span class="who">Administrators · DONs · operators</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/></svg></span>
        <h3>Pharma &amp; life sciences</h3>
        <p>Drug makers, biotech and CROs — as buyers and as partners to providers.</p>
        <span class="who">Commercial · medical affairs · R&amp;D</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 11h3l1.5-3 2 6 1.5-3H17"/></svg></span>
        <h3>Digital health &amp; virtual care</h3>
        <p>Telehealth, remote monitoring and digital therapeutics providers.</p>
        <span class="who">Founders · product · clinical ops</span>
      </div>
      <div class="tile w2">
        <span class="glyph"><svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/></svg></span>
        <h3>Rural &amp; community hospitals</h3>
        <p>Critical access and community hospitals facing the sharpest funding pressure.</p>
        <span class="who">CEOs · CFOs · DONs</span>
      </div>
    </div>
  </div>
</section>

<!-- =============== FLYWHEEL (mirrored) =============== -->
<section class="section bg-dark" id="approach">
  <div class="container">
    <div class="head center" style="text-align:center">
      <p class="kicker">How we help</p>
      <h2 class="h2">A growth flywheel for healthcare: data → demand → leads</h2>
      <p class="lead">In healthcare, data, demand generation and lead generation only work when they build on each other. Each turn of the wheel makes the next one more precise.</p>
    </div>
    <div class="fly rev">
      <div class="diagram">
        <svg role="img" aria-label="Flywheel diagram: data feeds demand generation, demand generation feeds lead generation, and lead generation results feed back into data, building healthcare pipeline in the centre" viewBox="0 0 480 480">
          <defs>
            <linearGradient id="fw-a" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset="1" stop-color="#00a8ff"/></linearGradient>
            <marker id="fw-arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="#38e0f5"/></marker>
          </defs>
          <circle cx="240" cy="240" r="170" fill="none" stroke="#63cdf7" stroke-opacity=".15" stroke-width="40"/>
          <path d="M 115 145 A 160 160 0 0 1 365 145" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <path d="M 395 200 A 160 160 0 0 1 280 395" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <path d="M 200 395 A 160 160 0 0 1 85 200" fill="none" stroke="#38e0f5" stroke-width="2.5" marker-end="url(#fw-arr)"/>
          <circle cx="240" cy="240" r="78" fill="#082746" stroke="#63cdf7" stroke-opacity=".4"/>
          <g transform="translate(228 196)"><rect width="24" height="24" rx="6" fill="url(#fw-a)"/><path d="M12 6 v12 M6 12 h12" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/></g>
          <text x="240" y="248" text-anchor="middle" font-family="Sora, sans-serif" font-size="17" font-weight="600" fill="#fff">Pipeline</text>
          <text x="240" y="268" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="11" fill="#63cdf7">compounds</text>
          <g font-family="Sora, sans-serif" font-size="15" font-weight="600" text-anchor="middle">
            <g transform="translate(240 64)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="url(#fw-a)"/><text y="-2" fill="#fff">1 · Data</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#e6eefc">map the market</text></g>
            <g transform="translate(410 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">2 · Demand</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">reach the committee</text></g>
            <g transform="translate(70 330)"><rect x="-70" y="-26" width="140" height="52" rx="14" fill="#0c2f57" stroke="#38e0f5"/><text y="-2" fill="#fff">3 · Leads</text><text y="16" font-family="JetBrains Mono, monospace" font-size="10" fill="#63cdf7">book &amp; learn</text></g>
          </g>
        </svg>
      </div>
      <div class="steps">
        <div class="fstep"><span class="dot" style="background:linear-gradient(135deg,#1258e8,#00a8ff);color:#fff">01</span><div><h3>Data — know your healthcare market</h3><p class="q">// which facilities, which people, which system?</p><p>Map your TAM by facility type, bed size, region and parent health system. Identify every role in the buying committee and keep CRM records current as clinicians move.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">02</span><div><h3>Demand generation — earn the committee's attention</h3><p class="q">// how do we stay visible through long cycles?</p><p>Run account-based campaigns, webinars and events with evidence for clinicians, ROI for finance and security answers for IT.</p></div></div>
        <div class="fstep"><span class="dot" style="background:#0c2f57;color:#38e0f5;border:1px solid #38e0f5">03</span><div><h3>Lead generation — start the right conversations</h3><p class="q">// who should we meet this week?</p><p>Turn engaged accounts into verified, prioritised prospects and book meetings with decision-makers, not gatekeepers — then feed results back into targeting.</p></div></div>
      </div>
    </div>
    <p style="margin-top:40px;text-align:center;font-size:15px;color:var(--on-dark)">Coral Blue Data provides the healthcare data layer — accounts, contacts, enrichment and hygiene — that powers your demand and lead generation, in-house or with your agency.</p>
  </div>
</section>

<!-- =============== PERSONAS (tabs) =============== -->
<section class="section bg-mist" id="personas">
  <div class="container">
    <div class="head">
      <p class="kicker">Buyer personas</p>
      <h2 class="h2">Who we help in the healthcare market</h2>
      <p class="lead">Pick a persona to see the problems they face today, and how data, demand generation and lead generation help solve them.</p>
    </div>

    <div class="tabs" role="tablist" aria-label="Healthcare personas">
      <button class="tab" role="tab" id="t1" aria-controls="p1" aria-selected="true"><span class="tn">01</span>MedTech marketer</button>
      <button class="tab" role="tab" id="t2" aria-controls="p2" aria-selected="false" tabindex="-1"><span class="tn">02</span>HealthTech sales</button>
      <button class="tab" role="tab" id="t3" aria-controls="p3" aria-selected="false" tabindex="-1"><span class="tn">03</span>Pharma commercial</button>
      <button class="tab" role="tab" id="t4" aria-controls="p4" aria-selected="false" tabindex="-1"><span class="tn">04</span>Staffing growth</button>
      <button class="tab" role="tab" id="t5" aria-controls="p5" aria-selected="false" tabindex="-1"><span class="tn">05</span>Revenue cycle seller</button>
      <button class="tab" role="tab" id="t6" aria-controls="p6" aria-selected="false" tabindex="-1"><span class="tn">06</span>Healthcare cybersecurity</button>
    </div>

    
    <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1">
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><rect x="46" y="44" width="18" height="18" rx="5" fill="#38e0f5"/><path d="M55 48 v10 M50 53 h10" stroke="#061426" stroke-width="2.4" stroke-linecap="round"/></svg>
          <div><h3>The MedTech Marketer</h3><p class="role">VP Marketing · Medical device &amp; equipment manufacturer</p></div>
          <blockquote>"Clinicians love our device. Then it disappears into the value analysis committee for six months."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Hospitals, IDNs &amp; ASCs</span></div><div><span>Measured on</span><span>Pipeline, win rate</span></div><div><span>Linked trends</span><span>01 · 05</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>VACs scrutinise price and clinical evidence</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Supply costs and tariffs make buyers cautious</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Procedures moving to outpatient sites they don't cover</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Map surgeons, department heads, VAC members and supply chain at target hospitals and ASCs by specialty and bed size.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Run ABM to the whole committee: outcome evidence for clinicians, cost cases for finance and supply chain.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Give reps verified contacts at fast-growing outpatient sites and system-level buyers to open new territory.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Fewer stalled VAC reviews</span><span class="chip">Outpatient pipeline</span><span class="chip">System-level deals</span></div></div>
        </div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><rect x="45" y="45" width="20" height="14" rx="3" fill="#061426"/><path d="M49 52 h3 l2 -3 l3 6 l2 -3 h3" stroke="#38e0f5" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div><h3>The HealthTech Sales Leader</h3><p class="role">Head of Sales · Healthcare IT, AI &amp; SaaS vendor</p></div>
          <blockquote>"Every health system says it's doing AI. We need the ones ready to move from pilot to rollout."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CIOs, CMIOs, clinical ops</span></div><div><span>Measured on</span><span>New logos, ACV</span></div><div><span>Linked trends</span><span>04 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Crowded AI market; CIOs flooded with pitches</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Buyers want measurable ROI before they commit</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Need to know which EHR a prospect runs</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Target systems by EHR platform, size and IT maturity; reach CIOs, CMIOs, informatics and nursing leaders.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Share ROI-led content and peer case studies with clinical, IT and security stakeholders.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Prioritise accounts with the right stack and scale so reps call where integration is easy.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Stand out in a noisy category</span><span class="chip">Faster security review</span><span class="chip">Pilot-to-rollout deals</span></div></div>
        </div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p3" aria-labelledby="t3" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="36" cy="28" r="11" fill="#63cdf7"/><path d="M16 60 q20 -24 40 0" fill="#63cdf7"/><rect x="49" y="40" width="12" height="22" rx="6" fill="#ff786d"/><rect x="49" y="51" width="12" height="11" rx="0" fill="#fff"/><rect x="49" y="40" width="12" height="22" rx="6" fill="none" stroke="#fff" stroke-width="1"/></svg>
          <div><h3>The Pharma Commercial Lead</h3><p class="role">Director, Commercial Strategy · Pharma &amp; life sciences</p></div>
          <blockquote>"Our reps get less face time every year. Digital has to reach the same specialists they do."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>Specialists, P&amp;T committees</span></div><div><span>Measured on</span><span>Reach, share of voice</span></div><div><span>Linked trends</span><span>03 · 05</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Less access to busy physicians</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Specialty care moving into outpatient settings</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Formulary decisions shaped by cost pressure</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Segment specialists by therapy area and practice setting; add pharmacy directors and P&amp;T influencers.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Support medical education, webinars and digital programmes with precise, permission-aware audiences.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Point field and inside teams at high-fit practices and cancer centres by region.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Field + digital aligned</span><span class="chip">Right specialists</span><span class="chip">Sites of care covered</span></div></div>
        </div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p4" aria-labelledby="t4" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#1258e8"/><circle cx="30" cy="28" r="9" fill="#fff"/><path d="M14 58 q16 -20 32 0" fill="#fff"/><circle cx="48" cy="30" r="7" fill="#63cdf7"/><path d="M38 58 q10 -16 24 0" fill="#63cdf7"/></svg>
          <div><h3>The Staffing Growth Director</h3><p class="role">Business Development · Healthcare staffing &amp; workforce</p></div>
          <blockquote>"Hospitals need nurses, but they're also cutting contract labour. Timing and targeting are everything."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CNOs, HR &amp; talent leaders</span></div><div><span>Measured on</span><span>New accounts, fill rate</span></div><div><span>Linked trends</span><span>01 · 03</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Hospitals cutting contract labour to protect margins</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Need to reach nursing leaders before competitors</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Demand varies sharply by region</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Reach CNOs, directors of nursing and talent leaders by metro, facility type and size.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Position cost-effective staffing models to finance and nursing leaders together.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Focus outreach on regions and facilities where shortages are most acute.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Budget-owner conversations</span><span class="chip">Regional focus</span><span class="chip">Faster account wins</span></div></div>
        </div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p5" aria-labelledby="t5" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#00a8ff"/><circle cx="36" cy="28" r="11" fill="#fff"/><path d="M16 60 q20 -24 40 0" fill="#fff"/><circle cx="55" cy="53" r="10" fill="#061426"/><text x="55" y="58" text-anchor="middle" font-family="Sora, sans-serif" font-size="13" font-weight="700" fill="#38e0f5">$</text></svg>
          <div><h3>The Revenue Cycle Seller</h3><p class="role">VP Sales · RCM, finance &amp; operations services</p></div>
          <blockquote>"CFOs know they're leaking revenue. Getting them to spend money to fix it is the hard part."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CFOs, revenue cycle directors</span></div><div><span>Measured on</span><span>Pipeline, deal size</span></div><div><span>Linked trends</span><span>01 · 02</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>CFOs under pressure but wary of new spend</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Medicaid changes hit rural and safety-net hospitals hardest</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Long cycles across finance and operations</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Find CFOs, revenue cycle directors and practice managers by ownership, size, payer mix and region.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Lead with benchmarks and savings content for community and rural hospital finance teams.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Build territory lists that separate high-fit systems from accounts unlikely to buy.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Accounts with real need</span><span class="chip">Shorter finance cycles</span><span class="chip">Higher win rate</span></div></div>
        </div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p6" aria-labelledby="t6" hidden>
      <div class="p-grid">
        <div class="p-side">
          <svg aria-hidden="true" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" rx="20" fill="#0c2f57" stroke="#38e0f5"/><circle cx="36" cy="28" r="11" fill="#63cdf7"/><path d="M16 60 q20 -24 40 0" fill="#63cdf7"/><path d="M55 40 l9 3.5 v7 c0 6 -4 9.5 -9 10.5 c-5 -1 -9 -4.5 -9 -10.5 v-7z" fill="#1258e8"/><path d="M51.5 51 l2.5 2.5 l5 -5" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          <div><h3>The Healthcare Cybersecurity Vendor</h3><p class="role">Demand Gen Manager · Security &amp; compliance solutions</p></div>
          <blockquote>"We want to talk to hospitals before a breach — not after one makes the news."</blockquote>
          <div class="meta"><div><span>Sells to</span><span>CISOs, IT &amp; compliance</span></div><div><span>Measured on</span><span>SQLs, new logos</span></div><div><span>Linked trends</span><span>04 · 06</span></div></div>
        </div>
        <div class="p-main">
          <div><p class="lbl">What they're up against</p><div class="pains"><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Hundreds of large breaches a year keep risk high</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Smaller hospitals lack dedicated security staff</div><div class="pain"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff786d" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>Deals need IT, compliance and executive buy-in</div></div></div>
          <div><p class="lbl">How we help</p>
            <div class="solve">
              <div class="sv"><div class="h"><i style="background:#1258e8">D</i>Data</div><p>Reach CISOs, IT directors and compliance officers, including smaller facilities where IT leads security.</p></div>
              <div class="sv"><div class="h"><i style="background:#00a8ff">G</i>Demand gen</div><p>Educate with risk assessments and regulatory content aimed at each stakeholder.</p></div>
              <div class="sv"><div class="h"><i style="background:#38e0f5;color:#061426">L</i>Lead gen</div><p>Segment by technology stack and size to match your offer to each account's maturity.</p></div>
            </div></div>
          <div class="result"><b>What changes:</b><div class="chips"><span class="chip">Earlier conversations</span><span class="chip">Right-sized offers</span><span class="chip">Executive buy-in</span></div></div>
        </div>
      </div>
    </div>
    <p style="margin-top:20px;font-size:13px;color:var(--faint)">Personas are illustrative composites of common healthcare go-to-market roles, not specific individuals.</p>
  </div>
</section>

<!-- =============== BUYING STAGES =============== -->
<section class="section bg-white" id="buying-group">
  <div class="container">
    <div class="head">
      <p class="kicker">The healthcare buying group</p>
      <h2 class="h2">Who decides at each stage of a healthcare purchase</h2>
      <p class="lead">Different people lead at different stages. Effective demand and lead generation reaches each of them when their voice matters most.</p>
    </div>
    <div class="lanes">
      <div class="lane">
        <span class="st">STAGE 1</span><h3>Identify need</h3><p class="ask">"What problem are we trying to fix?"</p>
        <div class="roles"><span class="r"><i style="background:#38e0f5"></i>Clinicians &amp; nurse managers</span><span class="r"><i style="background:#00a8ff"></i>Department heads</span></div>
        <p class="feed"><b>Reach them with:</b> clinical education, peer case studies, events</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 2</span><h3>Clinical review</h3><p class="ask">"Does it work for our patients and staff?"</p>
        <div class="roles"><span class="r"><i style="background:#1258e8"></i>CMO / CNO</span><span class="r"><i style="background:#00a8ff"></i>Medical directors</span></div>
        <p class="feed"><b>Reach them with:</b> outcome evidence, workflow demos</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 3</span><h3>Value analysis</h3><p class="ask">"Is it worth the cost — and is it safe?"</p>
        <div class="roles"><span class="r"><i style="background:#93b2fb"></i>Value analysis committee</span><span class="r"><i style="background:#ff786d"></i>IT, security &amp; compliance</span></div>
        <p class="feed"><b>Reach them with:</b> cost comparisons, security documentation</p>
      </div>
      <div class="lane">
        <span class="st">STAGE 4</span><h3>Approve &amp; contract</h3><p class="ask">"Can we afford it — and who signs?"</p>
        <div class="roles"><span class="r"><i style="background:#1258e8"></i>CEO / CFO</span><span class="r"><i style="background:#061426"></i>Supply chain &amp; procurement</span></div>
        <p class="feed"><b>Reach them with:</b> ROI case, references, contract clarity</p>
      </div>
    </div>
    <div class="lane-bar" style="margin-top:-1px;border-radius:0 0 24px 24px" aria-hidden="true"></div>
    <p class="lane-hint">Tip: select a stage to focus on who leads it.</p>
    <div class="legend"><span><i style="background:#1258e8"></i>Executive</span><span><i style="background:#00a8ff"></i>Clinical leaders</span><span><i style="background:#38e0f5"></i>Front-line clinicians</span><span><i style="background:#93b2fb"></i>Value analysis</span><span><i style="background:#ff786d"></i>IT &amp; security</span><span><i style="background:#061426"></i>Procurement</span></div>
    <div style="margin-top:36px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
      <a class="btn btn-primary" href="/solutions/healthcare-data">See healthcare data coverage →</a>
      <a class="btn btn-light" href="/solutions/data-enrichment">Data enrichment</a>
    </div>
  </div>
</section>

<!-- =============== FAQ =============== -->
<section class="section bg-mist" id="faq">
  <div class="container">
    <div class="head">
      <p class="kicker">FAQs</p>
      <h2 class="h2">Healthcare industry FAQs</h2>
    </div>
    <div class="faq-grid">
      <div class="faq"><h3><span>Q1</span>What are the biggest challenges facing the healthcare industry today?</h3><p>Thin hospital operating margins, federal Medicaid reductions that hit rural and safety-net hospitals hardest, physician and nurse shortages, rising supply and drug costs, persistent cyber risk and pressure to adopt AI with measurable returns.</p></div>
      <div class="faq"><h3><span>Q2</span>How big is the US healthcare market?</h3><p>The US spent $5.28 trillion on healthcare in 2024. Health spending is projected to reach 20.3% of GDP by 2033, up from 17.6% in 2023.</p></div>
      <div class="faq"><h3><span>Q3</span>How do these trends affect companies that sell to healthcare?</h3><p>Buyers are more cautious and more people are involved. Expect longer cycles, closer review by value analysis committees and finance, and a stronger need to prove cost savings, revenue protection or staff time saved.</p></div>
      <div class="faq"><h3><span>Q4</span>What is a value analysis committee?</h3><p>A multidisciplinary group inside a hospital or health system that reviews new products, supplies and equipment for clinical value, cost and evidence before they're approved for purchase.</p></div>
      <div class="faq"><h3><span>Q5</span>What is demand generation in healthcare marketing?</h3><p>Building awareness and preference among target healthcare organisations before they're ready to buy — through account-based campaigns, content, webinars and events aimed at clinical, financial and IT stakeholders.</p></div>
      <div class="faq"><h3><span>Q6</span>How is lead generation different from demand generation?</h3><p>Demand generation creates interest across your market. Lead generation captures and qualifies specific people and accounts ready for a sales conversation. In healthcare, both depend on accurate data about who belongs in your market.</p></div>
      <div class="faq"><h3><span>Q7</span>How do you market to hospitals and health systems?</h3><p>Map target accounts and their full buying committee, tailor messages by role — evidence for clinicians, ROI for finance, integration and security for IT — and stay visible through long evaluation cycles.</p></div>
      <div class="faq"><h3><span>Q8</span>How does Coral Blue Data support healthcare demand and lead generation?</h3><p>We supply the healthcare data foundation — account and contact data plus enrichment, cleansing and verification — that your marketing, sales or agency teams use to target campaigns and outreach precisely.</p></div>
    </div>
  </div>
</section>

<!-- =============== CTA =============== -->
<section class="bg-white" style="padding:104px 0 96px">
  <div class="container">
    <div class="cta">
      <div class="grid-bg" aria-hidden="true"></div>
      <h2>Build a healthcare go-to-market that fits today's market</h2>
      <p>Tell us who you sell to and what you're trying to grow. We'll show you the healthcare accounts and buying groups that fit, and how to put that data to work in your demand and lead generation.</p>
      <div class="ctas">
        <a class="btn btn-white" href="/contact">Talk With an Expert →</a>
        <a class="btn btn-ghost" href="/request-a-quote">Request a Sample</a>
      </div>
      <p class="small">A specialist reviews every request and replies by email, typically within two business days.</p>
    </div>
  </div>
</section>

<!-- =============== FOOTER =============== -->`;

export const HEALTH_JSON_LD = `{
  "@context":"https://schema.org",
  "@graph":[
    {"@type":"WebPage","@id":"https://coralbluedata1.vercel.app/industries/healthcare#webpage","url":"https://coralbluedata1.vercel.app/industries/healthcare","name":"Healthcare Industry Marketing & Growth Solutions | Coral Blue Data","description":"Healthcare today: thin margins, Medicaid cuts, workforce gaps and fast AI adoption. How data, demand generation and lead generation help healthcare vendors grow.","dateModified":"2026-11-03","publisher":{"@type":"Organization","name":"Coral Blue Data","url":"https://coralbluedata1.vercel.app/"}},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://coralbluedata1.vercel.app/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://coralbluedata1.vercel.app/industries"},{"@type":"ListItem","position":3,"name":"Healthcare","item":"https://coralbluedata1.vercel.app/industries/healthcare"}]},
    {"@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What are the biggest challenges facing the healthcare industry today?","acceptedAnswer":{"@type":"Answer","text":"Thin hospital operating margins, federal Medicaid reductions hitting rural and safety-net hospitals, physician and nurse shortages, rising supply and drug costs, persistent cyber risk, and pressure to adopt AI with measurable returns."}},
      {"@type":"Question","name":"How big is the US healthcare market?","acceptedAnswer":{"@type":"Answer","text":"The US spent $5.28 trillion on healthcare in 2024, and Health spending is projected to reach 20.3% of GDP by 2033."}},
      {"@type":"Question","name":"What is a value analysis committee?","acceptedAnswer":{"@type":"Answer","text":"A multidisciplinary group inside a hospital or health system that reviews new products, supplies and equipment for clinical value, cost and evidence before purchase approval."}},
      {"@type":"Question","name":"How does Coral Blue Data support healthcare demand and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Coral Blue Data supplies healthcare account and contact data plus enrichment, cleansing and verification that marketing and sales teams use to target campaigns and outreach."}}
    ]}
  ]
}`;
