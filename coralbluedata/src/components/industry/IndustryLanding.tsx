/**
 * IndustryLanding — shared scaffold for the bespoke, hand-designed industry
 * landing pages (e.g. /industries/healthcare, /industries/technology).
 *
 * These pages are intentionally NOT the generic CMS `industries/[slug]`
 * template. Each is a static route segment (which takes precedence over
 * `[slug]`) that passes a block of pre-rendered HTML + its JSON-LD here.
 *
 * All styling lives in INDUSTRY_CSS below, scoped under the `.hc` wrapper so
 * the pages' generic class names (.section, .card, .btn, .container, .eyebrow,
 * …) never collide with the app's global styles or restyle the real
 * SiteHeader / SiteFooter that the (site) layout wraps around every page.
 */

const INDUSTRY_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');
.hc{
  --ink-950:#030b18;--ink-900:#061426;--ink-800:#082746;
  --mist-50:#f4f7fb;--line:#d7e0ec;--line-soft:#e3e9f2;
  --electric:#1258e8;--coral-500:#00a8ff;--cyan:#38e0f5;--coral-300:#63cdf7;--accent:#ff786d;
  --text:#061426;--muted:#4a5a70;--muted-2:#33435a;--faint:#5b6b82;
  --on-dark:#b8c6da;--on-dark-2:#c9d5e6;--on-dark-3:#9fb0c8;
  --radius:14px;--card-radius:20px;
  margin:0;font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.6;color:var(--text);background:var(--mist-50);overflow-x:clip;
}
.hc *{box-sizing:border-box}
.hc img,.hc svg{max-width:100%;display:block}
.hc a{color:var(--electric)}
.hc a:hover{color:#0b3fb0}
.hc h1,.hc h2,.hc h3,.hc h4{font-family:Sora,Inter,sans-serif;font-weight:600;margin:0}
.hc p{margin:0}
.hc .container{max-width:1280px;margin:0 auto;padding:0 24px}
.hc .section{padding:96px 0}
.hc .bg-white{background:#fff}
.hc .bg-mist{background:var(--mist-50)}
.hc .bg-dark{background:var(--ink-900);color:#fff}
.hc .eyebrow{font-size:12px;font-weight:600;letter-spacing:2.6px;text-transform:uppercase;color:var(--electric);margin-bottom:16px}
.hc .bg-dark .eyebrow,.hc .hero .eyebrow{color:var(--coral-300)}
.hc .h2{font-size:clamp(28px,3.4vw,40px);line-height:1.12;letter-spacing:-.6px}
.hc .lead{font-size:17px;color:var(--muted);margin-top:20px}
.hc .bg-dark .lead{color:var(--on-dark)}
.hc .head{max-width:780px}
.hc .split{display:flex;flex-wrap:wrap;gap:56px;align-items:center}
.hc .split>.text{flex:1 1 480px;min-width:0}
.hc .split>.art{flex:1 1 420px;min-width:0}
.hc .grid{display:grid;gap:20px;margin-top:56px}
.hc .g-300{grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.hc .g-270{grid-template-columns:repeat(auto-fit,minmax(270px,1fr))}
.hc .card{background:#fff;border:1px solid var(--line);border-radius:var(--card-radius);padding:28px;box-shadow:0 1px 2px rgba(6,20,38,.05)}
.hc .card-dark{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:var(--card-radius);padding:28px}
.hc .icon-tile{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,rgba(18,88,232,.12),rgba(0,168,255,.12));margin-bottom:18px;flex:none}
.hc .bg-dark .icon-tile{background:rgba(99,205,247,.12)}
.hc .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:var(--radius);font-weight:600;font-size:15px;text-decoration:none;transition:filter .2s,background .2s}
.hc .btn-primary{background:linear-gradient(135deg,#1258e8,#00a8ff);color:#fff}
.hc .btn-primary:hover{color:#fff;filter:brightness(1.1)}
.hc .btn-ghost{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.18);color:#fff}
.hc .btn-ghost:hover{color:#fff;background:rgba(255,255,255,.1)}
.hc .btn-outline{border:1px solid var(--line);color:var(--text);background:#fff}
.hc .btn-outline:hover{color:var(--text);border-color:#9fb6dc}
.hc .hero{position:relative;overflow:hidden;color:#fff;background:radial-gradient(ellipse 70% 60% at 85% 20%,rgba(18,88,232,.35),rgba(6,20,38,0) 70%),radial-gradient(ellipse 50% 50% at 10% 90%,rgba(32,197,245,.14),rgba(6,20,38,0) 70%),var(--ink-900)}
.hc .hero-inner{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:56px;align-items:center;padding:56px 24px 104px}
.hc .hero-copy{flex:999 1 540px;min-width:0}
.hc .crumbs{font-size:13px;color:var(--on-dark-3);margin-bottom:28px}
.hc .crumbs a{color:var(--on-dark-3);text-decoration:none}
.hc .crumbs span{color:#e9eff7}
.hc .hero .eyebrow{display:flex;align-items:center;gap:12px}
.hc .hero .eyebrow:before{content:"";width:32px;height:1px;background:var(--coral-300)}
.hc .hero h1{font-size:clamp(36px,5vw,60px);line-height:1.06;letter-spacing:-1.2px;max-width:860px}
.hc .grad-text{background:linear-gradient(to right,#38e0f5,#63cdf7,#93b2fb);-webkit-background-clip:text;background-clip:text;color:transparent}
.hc .hero-sub{margin-top:24px;font-size:19px;color:var(--on-dark-2);max-width:660px}
.hc .ctas{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.hc .hero-art{flex:1 1 400px;min-width:0}
.hc .jump{display:flex;flex-wrap:wrap;gap:10px;margin-top:40px}
.hc .jump a{font-size:13px;color:#e9eff7;text-decoration:none;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04)}
.hc .jump a:hover{border-color:var(--coral-300)}
.hc .trend{display:flex;flex-direction:column}
.hc .trend .tag{display:inline-flex;align-self:flex-start;font-size:11px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;padding:5px 10px;border-radius:999px;background:#eaf1fd;color:var(--electric)}
.hc .trend h3{font-size:20px;margin-top:16px}
.hc .trend .stat{font-family:Sora,Inter,sans-serif;font-weight:600;font-size:38px;letter-spacing:-1px;color:var(--electric);margin-top:16px;line-height:1.1}
.hc .trend .stat-lbl{font-size:14px;color:var(--muted-2);margin-top:6px}
.hc .trend p.body{font-size:15px;color:var(--muted);margin-top:14px;flex:1}
.hc .trend .so{margin-top:18px;padding-top:14px;border-top:1px solid var(--line-soft);font-size:14px;color:var(--muted-2)}
.hc .trend .so strong{color:var(--electric)}
.hc .trend .src{margin-top:12px;font-size:12px;color:var(--faint)}
.hc .chart-card{margin-top:20px;display:flex;flex-wrap:wrap;gap:40px;align-items:center}
.hc .chart-card>.text{flex:1 1 320px;min-width:0}
.hc .chart-card>.chart{flex:2 1 520px;min-width:0}
.hc .bars{display:flex;flex-direction:column;gap:14px}
.hc .bar-row{display:grid;grid-template-columns:150px 1fr 52px;gap:14px;align-items:center;font-size:14px}
.hc .bar-row .track{height:14px;background:var(--line-soft);border-radius:7px;overflow:hidden}
.hc .bar-row .fill{height:100%;border-radius:7px;background:linear-gradient(90deg,#1258e8,#00a8ff)}
.hc .bar-row .fill.muted{background:#9fb6dc}
.hc .bar-row b{font-family:Sora,Inter,sans-serif;text-align:right}
@media (max-width:560px){
.hc .bar-row{grid-template-columns:110px 1fr 44px;font-size:13px}
}
.hc .impact{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:56px}
.hc .impact .card-dark h3{font-size:18px;margin-bottom:8px}
.hc .impact .card-dark p{font-size:15px;color:var(--on-dark)}
.hc .qs{margin-top:48px;border-top:1px solid rgba(255,255,255,.1);padding-top:36px;display:flex;flex-wrap:wrap;gap:32px}
.hc .qs>p{flex:1 1 260px;font-family:Sora,Inter,sans-serif;font-weight:600;font-size:20px}
.hc .qs ul{flex:3 1 520px;margin:0;padding:0;list-style:none;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px 32px;font-size:15px;color:var(--on-dark-2)}
.hc .qs li{padding-left:22px;position:relative}
.hc .qs li:before{content:"?";position:absolute;left:0;top:0;color:var(--cyan);font-weight:700}
.hc .flow{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:0;margin-top:56px;position:relative}
.hc .flow-step{position:relative;padding:28px;border:1px solid var(--line);background:#fff}
.hc .flow-step:first-child{border-radius:20px 0 0 20px}
.hc .flow-step:last-child{border-radius:0 20px 20px 0}
.hc .flow-step+.flow-step{border-left:none}
.hc .flow-step .k{font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:var(--electric)}
.hc .flow-step h3{font-size:22px;margin-top:8px}
.hc .flow-step .q{font-size:14px;color:var(--muted-2);margin-top:6px;font-style:italic}
.hc .flow-step ul{margin:16px 0 0;padding-left:18px;font-size:15px;color:var(--muted);display:flex;flex-direction:column;gap:6px}
.hc .flow-step .arrow{position:absolute;right:-17px;top:50%;transform:translateY(-50%);width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#1258e8,#00a8ff);display:grid;place-items:center;z-index:2;box-shadow:0 0 0 4px #f4f7fb}
@media (max-width:860px){
.hc .flow-step,.hc .flow-step:first-child,.hc .flow-step:last-child{border-radius:20px;border-left:1px solid var(--line)}
.hc .flow{gap:28px}
.hc .flow-step .arrow{right:50%;top:auto;bottom:-30px;transform:translateX(50%) rotate(90deg)}
}
.hc .persona{background:#fff;border:1px solid var(--line);border-radius:24px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 1px 2px rgba(6,20,38,.05)}
.hc .persona-head{display:flex;gap:18px;align-items:center;padding:24px 28px;background:var(--ink-900);color:#fff}
.hc .persona-head .who h3{font-size:20px}
.hc .persona-head .who p{font-size:13px;color:var(--on-dark-3);margin-top:2px}
.hc .persona-body{padding:24px 28px 28px;display:flex;flex-direction:column;gap:18px;flex:1}
.hc .persona .lbl{font-size:11px;font-weight:600;letter-spacing:1.6px;text-transform:uppercase;color:var(--faint);margin-bottom:6px}
.hc .persona .goal{font-size:15px;color:var(--muted-2)}
.hc .persona .pains{margin:0;padding-left:18px;font-size:15px;color:var(--muted);display:flex;flex-direction:column;gap:4px}
.hc .persona .trend-link{font-size:12px;font-weight:600;color:var(--electric);background:#eaf1fd;border-radius:999px;padding:4px 10px;display:inline-block;margin-right:6px;margin-top:4px}
.hc .helps{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-top:2px}
.hc .help{border-radius:14px;padding:14px;background:var(--mist-50);border:1px solid var(--line-soft)}
.hc .help h4{font-size:13px;display:flex;align-items:center;gap:8px}
.hc .help h4 i{width:8px;height:8px;border-radius:50%;display:inline-block}
.hc .help p{font-size:13.5px;color:var(--muted);margin-top:6px;line-height:1.5}
.hc .outcome{margin-top:auto;padding-top:16px;border-top:1px solid var(--line-soft);font-size:14px;color:var(--muted-2)}
.hc .outcome strong{color:var(--electric)}
.hc .roles{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:56px}
.hc .role{border-top:2px solid var(--coral-500);padding-top:18px}
.hc .role h3{font-size:18px}
.hc .role p{font-size:15px;color:var(--on-dark);margin-top:8px}
.hc .faq-wrap{display:flex;flex-wrap:wrap;gap:48px}
.hc .faq-wrap>.side{flex:1 1 300px;min-width:0}
.hc .faq-wrap>.list{flex:999 1 560px;min-width:0}
.hc details{border-bottom:1px solid var(--line);padding:20px 0}
.hc summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;font-family:Sora,Inter,sans-serif;font-weight:600;font-size:17px}
.hc summary::-webkit-details-marker{display:none}
.hc summary .plus{color:var(--electric);font-size:22px;line-height:1;transition:transform .2s;flex:none}
.hc details[open] summary .plus{transform:rotate(45deg)}
.hc details p{margin-top:12px;font-size:15px;color:var(--muted)}
.hc .sources{margin-top:0;font-size:13px;color:var(--faint)}
.hc .sources ol{margin:12px 0 0;padding-left:20px;display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:6px 32px}
.hc .sources a{color:var(--faint)}
.hc .cta-box{position:relative;overflow:hidden;background:radial-gradient(ellipse 60% 80% at 90% 10%,rgba(18,88,232,.45),rgba(6,20,38,0) 70%),var(--ink-900);color:#fff;border-radius:28px;padding:64px 48px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between}
.hc .cta-box .bg{position:absolute;right:-40px;top:-20px;width:520px;opacity:.3;pointer-events:none}
.hc .cta-box>*{position:relative}
.hc .pulse{animation:hc-pulse 3s ease-in-out infinite}
@keyframes hc-pulse{0%,100%{opacity:.45}50%{opacity:1}}
@media (prefers-reduced-motion:reduce){
.hc .pulse{animation:none}
}
@media (max-width:640px){
.hc .section{padding:72px 0}
.hc .cta-box{padding:40px 24px}
.hc .persona-head,.hc .persona-body{padding-left:20px;padding-right:20px}
}`;

export function IndustryLanding({
  bodyHtml,
  jsonLd,
}: {
  bodyHtml: string;
  jsonLd: string;
}) {
  return (
    <div className="hc">
      <style dangerouslySetInnerHTML={{ __html: INDUSTRY_CSS }} />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </div>
  );
}
