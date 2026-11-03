/**
 * Content for the Education industry landing page.
 *
 * Source of truth: the hand-authored design. CSS is scoped under the `.hc`
 * wrapper so its generic class names never collide with the app's global
 * styles or the real SiteHeader / SiteFooter. The page's own <header>,
 * <footer> and behaviour <script> are stripped here; the interactions
 * (two accessible tablists, scroll reveal, count-up, chart bars) are
 * re-implemented in EducationLanding (client).
 */

export const EDU_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;600;700&display=swap');
.hc{
  --navy:#061426; --navy-2:#0a1d36; --ink:#061426; --muted:#4a5a70; --muted-2:#5b6b82;
  --line:#d7e0ec; --soft:#f4f7fb; --white:#ffffff;
  --blue:#1258e8; --blue-2:#00a8ff; --cyan:#38e0f5; --sky:#63cdf7; --periwinkle:#93b2fb;
  --on-dark:#c9d5e6; --on-dark-2:#9fb0c8; --on-dark-3:#b8c6da;
  --display:Sora, Inter, system-ui, sans-serif; --body:Inter, system-ui, sans-serif;
}
.hc *{box-sizing:border-box}
.hc{scroll-behavior:smooth}
.hc{margin:0;background:var(--soft);color:var(--ink);font-family:var(--body);font-size:16px;line-height:1.6;-webkit-font-smoothing:antialiased}
.hc a{color:var(--blue)}
.hc a:hover{color:#0b3fb0}
.hc img,.hc svg{display:block}
.hc .wrap{max-width:1280px;margin:0 auto;padding:0 24px}
.hc h1,.hc h2,.hc h3{font-family:var(--display);font-weight:600;margin:0}
.hc h2{font-size:clamp(28px,3.4vw,40px);line-height:1.12;letter-spacing:-.6px}
.hc h3{font-size:19px;line-height:1.3}
.hc p{margin:0}
.hc .eyebrow{font-size:12px;font-weight:600;letter-spacing:2.6px;text-transform:uppercase;color:var(--blue);margin-bottom:16px}
.hc .dark .eyebrow{color:var(--sky)}
.hc .lead{font-size:17px;color:var(--muted)}
.hc .section{padding:96px 0}
.hc .section-head{display:flex;flex-wrap:wrap;gap:24px 48px;align-items:flex-end;margin-bottom:48px}
.hc .section-head > div{flex:1 1 520px;min-width:0}
.hc .section-head > p{flex:1 1 420px;min-width:0}
.hc .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;padding:14px 26px;border-radius:14px;font-weight:600;font-size:15px;text-decoration:none;transition:transform .15s ease, box-shadow .15s ease, background .15s ease}
.hc .btn-primary{background:linear-gradient(135deg,var(--blue),var(--blue-2));color:#fff}
.hc .btn-primary:hover{color:#fff;transform:translateY(-1px);box-shadow:0 10px 24px -10px rgba(18,88,232,.7)}
.hc .btn-ghost{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.18);color:#fff}
.hc .btn-ghost:hover{color:#fff;background:rgba(255,255,255,.1)}
.hc .btn-outline{border:1px solid var(--line);color:var(--ink);background:#fff}
.hc .btn-outline:hover{color:var(--blue);border-color:var(--blue)}
.hc .grad-text{background:linear-gradient(to right,var(--cyan),var(--sky),var(--periwinkle));-webkit-background-clip:text;background-clip:text;color:transparent}
.hc :focus-visible{outline:3px solid var(--sky);outline-offset:3px;border-radius:6px}
.hc /* HEADER */
.hero{background:radial-gradient(ellipse 70% 60% at 85% 15%,rgba(18,88,232,.35),rgba(6,20,38,0) 70%),radial-gradient(ellipse 50% 50% at 8% 95%,rgba(32,197,245,.14),rgba(6,20,38,0) 70%),var(--navy);color:#fff}
.hc .site-header{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px;max-width:1280px;margin:0 auto;border-bottom:1px solid rgba(255,255,255,.06)}
.hc .logo{display:flex;flex-direction:column;text-decoration:none;color:#fff}
.hc .logo:hover{color:#fff}
.hc .logo b{font-family:var(--display);font-weight:700;font-size:22px;letter-spacing:-.3px}
.hc .logo b span{color:var(--cyan)}
.hc .logo small{font-size:9px;letter-spacing:3px;color:var(--sky)}
.hc .nav{display:flex;flex-wrap:wrap;align-items:center;gap:8px 24px;font-size:14px;font-weight:600}
.hc .nav a{color:#e9eff7;text-decoration:none}
.hc .nav a:hover{color:var(--cyan)}
.hc .nav .btn{padding:12px 22px;min-height:44px}
.hc /* HERO */
.hero-grid{display:flex;flex-wrap:wrap;gap:56px;align-items:center;padding:128px 24px 104px;max-width:1280px;margin:0 auto}
.hc .hero-copy{flex:999 1 560px;min-width:0}
.hc .crumbs{font-size:13px;color:var(--on-dark-2);margin-bottom:28px}
.hc .crumbs a{color:var(--on-dark-2);text-decoration:none}
.hc .crumbs a:hover{color:#fff}
.hc .crumbs span{color:#e9eff7}
.hc .hero .tag{display:flex;align-items:center;gap:12px;margin-bottom:20px;font-size:12px;font-weight:600;letter-spacing:2.6px;text-transform:uppercase;color:var(--sky)}
.hc .hero .tag::before{content:"";width:32px;height:1px;background:var(--sky)}
.hc .hero h1{font-size:clamp(36px,5vw,60px);line-height:1.06;letter-spacing:-1.2px;max-width:820px}
.hc .hero-sub{margin-top:24px;font-size:19px;color:var(--on-dark);max-width:640px}
.hc .hero-ctas{display:flex;flex-wrap:wrap;gap:14px;margin-top:36px}
.hc .checks{list-style:none;padding:0;margin:40px 0 0;display:flex;flex-wrap:wrap;gap:12px 28px;font-size:14px;color:var(--on-dark-3)}
.hc .checks li{display:flex;align-items:center;gap:8px}
.hc /* Hero panel: education ecosystem */
.eco{flex:1 1 380px;min-width:0;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:28px}
.hc .eco-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;gap:12px}
.hc .eco-top p{font-size:12px;font-weight:600;letter-spacing:2.4px;text-transform:uppercase;color:var(--sky)}
.hc .eco-switch{display:inline-flex;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:999px;padding:3px}
.hc .eco-switch button{font:600 12px var(--body);color:var(--on-dark-2);background:transparent;border:0;border-radius:999px;padding:8px 14px;min-height:36px;cursor:pointer}
.hc .eco-switch button[aria-selected="true"]{background:#fff;color:var(--navy)}
.hc .tier{position:relative;padding-left:28px}
.hc .tier + .tier{margin-top:12px}
.hc .tier::before{content:"";position:absolute;left:8px;top:22px;bottom:-22px;width:1px;background:rgba(99,205,247,.35)}
.hc .tier:last-child::before{display:none}
.hc .tier::after{content:"";position:absolute;left:3px;top:17px;width:11px;height:11px;border-radius:50%;background:var(--navy);border:2px solid var(--cyan)}
.hc .tier-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:13px 16px}
.hc .tier-card b{display:block;font-family:var(--display);font-weight:600;font-size:15px}
.hc .tier-card span{font-size:13px;color:var(--on-dark-2)}
.hc .eco-foot{margin-top:20px;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);font-size:13px;color:var(--on-dark-2)}
.hc /* STATS */
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1px;background:var(--line);border:1px solid var(--line);border-radius:20px;overflow:hidden}
.hc .stat{background:#fff;padding:32px 28px}
.hc .stat .num{font-family:var(--display);font-weight:600;font-size:clamp(38px,4vw,50px);line-height:1;letter-spacing:-1px;color:var(--ink);font-variant-numeric:tabular-nums}
.hc .stat .num em{font-style:normal;color:var(--blue)}
.hc .stat .lbl{margin-top:14px;font-weight:600;font-size:15px}
.hc .stat .desc{margin-top:6px;font-size:14px;color:var(--muted)}
.hc /* Chart */
.chart-card{margin-top:32px;background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px;display:flex;flex-wrap:wrap;gap:32px 56px}
.hc .chart-intro{flex:1 1 280px;min-width:0}
.hc .chart-intro h3{margin-bottom:10px}
.hc .chart-intro p{font-size:15px;color:var(--muted)}
.hc .bars{flex:2 1 460px;min-width:0;list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:18px}
.hc .bar-row{display:grid;grid-template-columns:minmax(120px,190px) 1fr 72px;align-items:center;gap:16px;font-size:14px}
.hc .bar-row .name{font-weight:600}
.hc .bar-track{display:block;height:14px;background:#eef2f8;border-radius:999px;overflow:hidden}
.hc .bar-fill{display:block;height:100%;width:0;border-radius:999px;background:linear-gradient(90deg,var(--blue),var(--blue-2));transition:width 1.4s cubic-bezier(.2,.7,.2,1)}
.hc .bar-row .val{text-align:right;font-family:var(--display);font-weight:600;font-variant-numeric:tabular-nums}
.hc /* CHALLENGES */
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}
.hc .card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px}
.hc .card .idx{font-family:var(--display);font-weight:600;font-size:13px;color:var(--blue);letter-spacing:1px}
.hc .card h3{margin:12px 0 8px}
.hc .card p{font-size:15px;color:var(--muted)}
.hc .card .fix{margin-top:16px;padding-top:14px;border-top:1px dashed var(--line);font-size:14px;color:var(--ink);display:flex;gap:10px}
.hc .card .fix svg{flex:none;margin-top:3px}
.hc /* PERSONAS */
.personas{background:var(--navy);color:#fff}
.hc .personas .lead{color:var(--on-dark)}
.hc .tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.hc .tabs button{font:600 14px var(--body);color:var(--on-dark);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:10px 18px;min-height:44px;cursor:pointer;transition:background .15s,color .15s}
.hc .tabs button:hover{background:rgba(255,255,255,.09);color:#fff}
.hc .tabs button[aria-selected="true"]{background:#fff;color:var(--navy);border-color:#fff}
.hc .panel{display:flex;flex-wrap:wrap;gap:32px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:36px}
.hc .panel[hidden]{display:none}
.hc .panel-main{flex:1 1 380px;min-width:0}
.hc .panel-main h3{font-size:26px;letter-spacing:-.3px}
.hc .panel-main p{margin-top:12px;color:var(--on-dark);font-size:16px}
.hc .role-list{list-style:none;padding:0;margin:24px 0 0;display:flex;flex-wrap:wrap;gap:8px}
.hc .role-list li{font-size:13px;font-weight:500;padding:7px 12px;border-radius:999px;background:rgba(99,205,247,.1);border:1px solid rgba(99,205,247,.22);color:#dff6fd}
.hc .panel-side{flex:1 1 300px;min-width:0;display:flex;flex-direction:column;gap:12px}
.hc .side-box{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:16px 18px}
.hc .side-box b{display:block;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:var(--sky);margin-bottom:6px;font-weight:600}
.hc .side-box span{font-size:15px;color:#e9eff7}
.hc /* COVERAGE */
.cover-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px}
.hc .cover{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px}
.hc .cover-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.hc .ic{width:40px;height:40px;border-radius:12px;background:#eaf1ff;display:grid;place-items:center;flex:none}
.hc .cover h3{font-size:17px}
.hc .cover ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;font-size:14px;color:var(--muted)}
.hc .cover li{display:flex;gap:10px;align-items:baseline}
.hc .cover li::before{content:"";width:5px;height:5px;border-radius:50%;background:var(--blue);flex:none;transform:translateY(-2px)}
.hc /* CALENDAR */
.calendar{background:#fff;border:1px solid var(--line);border-radius:22px;padding:32px;overflow:hidden}
.hc .months{display:grid;grid-template-columns:repeat(12,1fr);gap:4px;margin-bottom:10px;font-size:12px;font-weight:600;color:var(--muted-2);text-align:center}
.hc .phases{display:grid;grid-template-columns:repeat(12,1fr);gap:4px}
.hc .phase{border-radius:12px;padding:16px 14px;min-height:150px;display:flex;flex-direction:column;gap:6px}
.hc .phase b{font-family:var(--display);font-size:15px;font-weight:600}
.hc .phase span{font-size:13px}
.hc .p1{grid-column:1 / 4;background:#eaf1ff;color:#0a2f7a}
.hc .p2{grid-column:4 / 7;background:linear-gradient(135deg,var(--blue),var(--blue-2));color:#fff}
.hc .p3{grid-column:7 / 9;background:var(--navy);color:#fff}
.hc .p3 span,.hc .p2 span{color:rgba(255,255,255,.86)}
.hc .p4{grid-column:9 / 13;background:#f1f5fa;color:var(--ink);border:1px solid var(--line)}
.hc .p1 span{color:#29426e}
.hc .p4 span{color:var(--muted)}
.hc .cal-note{margin-top:20px;font-size:14px;color:var(--muted);display:flex;gap:10px;align-items:flex-start}
.hc .cal-note svg{flex:none;margin-top:3px}
.hc /* FIELDS */
.fields{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.hc .field{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px}
.hc .field h3{margin-bottom:10px}
.hc .field p{font-size:14px;color:var(--muted)}
.hc /* TRENDS */
.trends{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px}
.hc .trend{background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px;display:flex;flex-direction:column}
.hc .trend .pill{align-self:flex-start;font-size:12px;font-weight:600;color:var(--blue);background:#eaf1ff;padding:5px 10px;border-radius:999px}
.hc .trend h3{margin:16px 0 8px}
.hc .trend p{font-size:15px;color:var(--muted)}
.hc .trend .angle{margin-top:auto;padding-top:16px;font-size:14px;font-weight:600;color:var(--ink)}
.hc .trend .angle span{color:var(--blue)}
.hc /* USE CASES */
.uses{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:20px}
.hc .use{display:flex;gap:18px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px}
.hc .use h3{margin-bottom:6px}
.hc .use p{font-size:15px;color:var(--muted)}
.hc .use .who{margin-top:10px;font-size:13px;color:var(--muted-2)}
.hc .use .who b{color:var(--ink);font-weight:600}
.hc /* SERVICES */
.services{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
.hc .svc{display:block;background:#fff;border:1px solid var(--line);border-radius:16px;padding:22px;text-decoration:none;color:var(--ink);transition:border-color .15s, transform .15s}
.hc .svc:hover{color:var(--ink);border-color:var(--blue);transform:translateY(-2px)}
.hc .svc b{display:flex;justify-content:space-between;font-family:var(--display);font-weight:600;font-size:16px}
.hc .svc b span{color:var(--blue)}
.hc .svc p{margin-top:6px;font-size:14px;color:var(--muted)}
.hc /* PROCESS */
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:20px;counter-reset:s}
.hc .step{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;padding:28px}
.hc .step .n{font-family:var(--display);font-weight:700;font-size:14px;color:#fff;background:var(--blue);width:34px;height:34px;border-radius:10px;display:grid;place-items:center}
.hc .step h3{margin:16px 0 8px;font-size:20px}
.hc .step p{font-size:15px;color:var(--muted)}
.hc .notice{margin-top:24px;display:flex;flex-wrap:wrap;gap:20px;align-items:center;background:var(--navy);color:#fff;border-radius:18px;padding:26px 28px}
.hc .notice h3{margin-bottom:6px}
.hc .notice p{color:var(--on-dark);font-size:15px}
.hc .notice > div{flex:1 1 420px;min-width:0}
.hc /* WHY */
.why{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px}
.hc .why-item{border-top:2px solid var(--blue);padding-top:20px}
.hc .why-item h3{margin-bottom:8px}
.hc .why-item p{font-size:15px;color:var(--muted)}
.hc /* FAQ */
.faq-wrap{display:flex;flex-wrap:wrap;gap:48px}
.hc .faq-wrap > div:first-child{flex:1 1 320px;min-width:0}
.hc .faq{flex:2 1 560px;min-width:0;border-top:1px solid var(--line)}
.hc details{border-bottom:1px solid var(--line);padding:20px 0}
.hc summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:16px;font-family:var(--display);font-weight:600;font-size:17px}
.hc summary::-webkit-details-marker{display:none}
.hc .plus{color:var(--blue);font-size:22px;line-height:1;transition:transform .2s;flex:none}
.hc details[open] .plus{transform:rotate(45deg)}
.hc details p{margin-top:12px;font-size:15px;color:var(--muted)}
.hc /* CTA + FOOTER */
.cta{max-width:1280px;margin:0 auto;background:radial-gradient(ellipse 60% 80% at 90% 10%,rgba(18,88,232,.45),rgba(6,20,38,0) 70%),var(--navy);color:#fff;border-radius:28px;padding:64px 48px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between}
.hc .cta > div:first-child{flex:1 1 520px;min-width:0}
.hc .cta p{margin-top:16px;font-size:17px;color:var(--on-dark);max-width:620px}
.hc .cta .small{margin-top:12px;font-size:13px;color:var(--on-dark-2)}
.hc footer{background:#030b18;color:var(--on-dark-3);padding:64px 0 32px;margin-top:96px}
.hc .foot-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:32px}
.hc .foot-grid p.h{margin-bottom:12px;font-weight:600;color:#fff;font-size:14px}
.hc .foot-grid ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;font-size:14px}
.hc .foot-grid a{color:var(--on-dark-3);text-decoration:none}
.hc .foot-grid a:hover{color:#fff}
.hc .foot-bottom{margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,.08);display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;font-size:13px;color:#8a9ab2}
.hc /* reveal */
.reveal{opacity:0;transform:translateY(14px);transition:opacity .6s ease, transform .6s ease}
.hc .reveal.in{opacity:1;transform:none}
@media (max-width:900px){
.hc .months{display:none}
.hc .phases{grid-template-columns:1fr}
.hc .p1,.hc .p2,.hc .p3,.hc .p4{grid-column:auto;min-height:0}
.hc .phase b::after{content:attr(data-months);display:block;font-family:var(--body);font-size:12px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;opacity:.75;margin-top:2px}
}
@media (max-width:640px){
.hc .section{padding:72px 0}
.hc .nav{gap:8px 16px;font-size:13px}
.hc .nav .hide-sm{display:none}
.hc .hero-grid{padding:40px 16px 80px}
.hc .wrap{padding:0 16px}
.hc .site-header{padding:16px}
.hc .panel{padding:24px}
.hc .chart-card,.hc .calendar{padding:24px}
.hc .bar-row{grid-template-columns:1fr 64px;gap:6px 12px}
.hc .bar-row .name{grid-column:1 / -1}
.hc .cta{padding:44px 24px;border-radius:22px;margin:0 16px}
.hc .use{flex-direction:column}
.hc .uses,.hc .cards,.hc .trends{grid-template-columns:1fr}
}
@media (prefers-reduced-motion:reduce){
.hc{scroll-behavior:auto}
.hc .reveal{opacity:1;transform:none;transition:none}
.hc .bar-fill{transition:none}
.hc .btn,.hc .svc{transition:none}
}`;

export const EDU_BODY = `<!-- HERO -->
<section class="hero dark">
  

  <div class="hero-grid">
    <div class="hero-copy">
      <nav aria-label="Breadcrumb" class="crumbs"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span aria-current="page">Education</span></nav>
      <p class="tag">Industry · Education</p>
      <h1>Education data that reaches the people who <span class="grad-text">approve, budget and buy</span></h1>
      <p class="hero-sub">Verified contacts for district leaders, principals, university administrators, faculty and procurement teams — segmented by institution type, grade level, enrollment size and region.</p>
      <div class="hero-ctas">
        <a href="#sample" class="btn btn-primary">Request an Education Data Sample →</a>
        <a href="#sample" class="btn btn-ghost">Talk With an Education Data Expert</a>
      </div>
      <ul class="checks">
        <li><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>K-12 and higher education</li>
        <li><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Public, private &amp; charter</li>
        <li><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>GDPR- and CCPA-aligned sourcing</li>
        <li><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>No student data, ever</li>
      </ul>
    </div>

    <aside class="eco" aria-label="Who decides in education">
      <div class="eco-top">
        <p>Who decides</p>
        <div class="eco-switch" role="tablist" aria-label="Education sector">
          <button type="button" role="tab" id="eco-k12" aria-selected="true" aria-controls="eco-k12-panel">K-12</button>
          <button type="button" role="tab" id="eco-he" aria-selected="false" aria-controls="eco-he-panel" tabindex="-1">Higher Ed</button>
        </div>
      </div>
      <div id="eco-k12-panel" role="tabpanel" aria-labelledby="eco-k12">
        <div class="tier"><div class="tier-card"><b>School board &amp; superintendent</b><span>Sets priorities, approves budgets and major contracts</span></div></div>
        <div class="tier"><div class="tier-card"><b>District cabinet</b><span>Curriculum, technology, finance, operations leads</span></div></div>
        <div class="tier"><div class="tier-card"><b>Purchasing &amp; business office</b><span>RFPs, cooperative contracts, vendor onboarding</span></div></div>
        <div class="tier"><div class="tier-card"><b>Principals &amp; teachers</b><span>Pilot, evaluate and champion what gets adopted</span></div></div>
      </div>
      <div id="eco-he-panel" role="tabpanel" aria-labelledby="eco-he" hidden>
        <div class="tier"><div class="tier-card"><b>President &amp; provost</b><span>Strategy, academic priorities, large investments</span></div></div>
        <div class="tier"><div class="tier-card"><b>Vice presidents &amp; CIO</b><span>Finance, enrollment, student affairs, IT</span></div></div>
        <div class="tier"><div class="tier-card"><b>Procurement &amp; contracts</b><span>Sourcing, security reviews, purchase approval</span></div></div>
        <div class="tier"><div class="tier-card"><b>Deans, chairs &amp; faculty</b><span>Course materials, lab tools, department spend</span></div></div>
      </div>
      <p class="eco-foot">Reach every level with one consistent, verified dataset.</p>
    </aside>
  </div>
</section>

<!-- OVERVIEW + STATS -->
<section class="section" style="background:#fff">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Education industry overview</p>
        <h2>The US education market at a glance</h2>
      </div>
      <p class="lead">Education is one of the most distributed B2B markets in the country. Thousands of districts and campuses each run their own budgets, approvals and buying cycles — which makes accurate, well-segmented contact data the difference between reaching a buyer and reaching an inbox nobody reads.</p>
    </div>

    <div class="stats">
      <div class="stat">
        <div class="num"><span class="count" data-to="13" data-suffix=",000">0</span><em>+</em></div>
        <p class="lbl">Public school districts</p>
        <p class="desc">Each with its own board, budget and purchasing rules</p>
      </div>
      <div class="stat">
        <div class="num"><span class="count" data-to="99" data-suffix=",000">0</span><em>+</em></div>
        <p class="lbl">Public schools</p>
        <p class="desc">Elementary, middle, high and charter campuses</p>
      </div>
      <div class="stat">
        <div class="num"><span class="count" data-to="3.9" data-decimals="1">0</span><em>K</em></div>
        <p class="lbl">Colleges &amp; universities</p>
        <p class="desc">Degree-granting public and private institutions</p>
      </div>
      <div class="stat">
        <div class="num"><span class="count" data-to="3.8" data-decimals="1">0</span><em>M</em></div>
        <p class="lbl">Public school teachers</p>
        <p class="desc">The largest professional audience in education</p>
      </div>
    </div>

    <div class="chart-card reveal">
      <div class="chart-intro">
        <h3>Where education buyers sit</h3>
        <p>Approximate number of US institutions by type. Most purchases are decided at the district or campus level, so the right segment matters more than the total count.</p>
      </div>
      <ul class="bars" aria-label="Approximate number of US education institutions by type">
        <li class="bar-row"><span class="name">Public schools</span><span class="bar-track"><span class="bar-fill" data-w="100"></span></span><span class="val">99,000</span></li>
        <li class="bar-row"><span class="name">Private schools</span><span class="bar-track"><span class="bar-fill" data-w="30"></span></span><span class="val">30,000</span></li>
        <li class="bar-row"><span class="name">School districts</span><span class="bar-track"><span class="bar-fill" data-w="13.4"></span></span><span class="val">13,300</span></li>
        <li class="bar-row"><span class="name">Charter schools</span><span class="bar-track"><span class="bar-fill" data-w="7.9"></span></span><span class="val">7,800</span></li>
        <li class="bar-row"><span class="name">Colleges &amp; universities</span><span class="bar-track"><span class="bar-fill" data-w="3.9"></span></span><span class="val">3,900</span></li>
      </ul>
    </div>
  </div>
</section>

<!-- CHALLENGES -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">The challenge</p>
        <h2>Education marketing and sales challenges we help solve</h2>
      </div>
      <p class="lead">Selling into schools and universities rewards patience and precision. These are the obstacles education vendors tell us cost them the most time.</p>
    </div>
    <div class="cards">
      <article class="card reveal"><span class="idx">01</span><h3>Fixed budget and buying windows</h3><p>Most districts plan spend months ahead of a July fiscal year. Miss the window and the deal waits a full year.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Reach budget owners while plans are still open.</p></article>
      <article class="card reveal"><span class="idx">02</span><h3>Layered approvals</h3><p>Teachers champion, principals recommend, cabinets decide and boards approve. One contact is never enough.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Map every role in a district or campus.</p></article>
      <article class="card reveal"><span class="idx">03</span><h3>Summer staff turnover</h3><p>Principals, administrators and faculty change roles between school years, so last spring's list goes stale fast.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Records re-verified before each delivery.</p></article>
      <article class="card reveal"><span class="idx">04</span><h3>Formal procurement rules</h3><p>RFPs, bid thresholds and cooperative contracts decide who gets considered — often before sales gets a call.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Reach purchasing and business officers directly.</p></article>
      <article class="card reveal"><span class="idx">05</span><h3>A fragmented market</h3><p>Rural districts, urban systems, charter networks and private schools buy in very different ways.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Segment by type, size, locale and grade level.</p></article>
      <article class="card reveal"><span class="idx">06</span><h3>Privacy expectations</h3><p>Schools are cautious about vendors. Outreach that feels careless with data closes doors for good.</p><p class="fix"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Professional contacts only, compliantly sourced.</p></article>
    </div>
  </div>
</section>

<!-- PERSONAS -->
<section class="section personas dark">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Decision-makers</p>
        <h2>Reach every education decision-maker who shapes a purchase</h2>
      </div>
      <p class="lead">Pick an audience to see the roles we cover and what they typically buy.</p>
    </div>

    <div class="tabs" role="tablist" aria-label="Education audiences">
      <button type="button" role="tab" id="t1" aria-selected="true" aria-controls="p1">District leadership</button>
      <button type="button" role="tab" id="t2" aria-selected="false" aria-controls="p2" tabindex="-1">School leaders &amp; teachers</button>
      <button type="button" role="tab" id="t3" aria-selected="false" aria-controls="p3" tabindex="-1">Higher-ed administration</button>
      <button type="button" role="tab" id="t4" aria-selected="false" aria-controls="p4" tabindex="-1">Faculty &amp; departments</button>
      <button type="button" role="tab" id="t5" aria-selected="false" aria-controls="p5" tabindex="-1">Technology &amp; procurement</button>
    </div>

    <div class="panel" role="tabpanel" id="p1" aria-labelledby="t1">
      <div class="panel-main">
        <h3>District leadership</h3>
        <p>The people who set strategy, own the budget and sign off on district-wide adoption.</p>
        <ul class="role-list"><li>Superintendents</li><li>Assistant superintendents</li><li>Chief academic officers</li><li>Curriculum &amp; instruction directors</li><li>Special education directors</li><li>Chief financial officers</li><li>School board members</li></ul>
      </div>
      <div class="panel-side">
        <div class="side-box"><b>They buy</b><span>Core curriculum, assessment platforms, professional development, student services</span></div>
        <div class="side-box"><b>Best approach</b><span>Outcome-led messaging timed to budget planning in late winter and spring</span></div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p2" aria-labelledby="t2" hidden>
      <div class="panel-main">
        <h3>School leaders &amp; teachers</h3>
        <p>Building-level leaders and educators who pilot products and champion what works in the classroom.</p>
        <ul class="role-list"><li>Principals</li><li>Assistant principals</li><li>Department heads</li><li>Instructional coaches</li><li>Media specialists &amp; librarians</li><li>Counselors</li><li>Classroom teachers by subject</li></ul>
      </div>
      <div class="panel-side">
        <div class="side-box"><b>They buy</b><span>Classroom resources, supplemental programs, school-level software, library materials</span></div>
        <div class="side-box"><b>Best approach</b><span>Free trials, pilots and practical content that saves teachers time</span></div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p3" aria-labelledby="t3" hidden>
      <div class="panel-main">
        <h3>Higher-ed administration</h3>
        <p>Campus executives responsible for enrollment, operations, finance and the student experience.</p>
        <ul class="role-list"><li>Presidents &amp; chancellors</li><li>Provosts</li><li>VPs of enrollment</li><li>Admissions directors</li><li>Registrars</li><li>Deans of students</li><li>Financial aid directors</li></ul>
      </div>
      <div class="panel-side">
        <div class="side-box"><b>They buy</b><span>Enrollment marketing, student success platforms, campus services, consulting</span></div>
        <div class="side-box"><b>Best approach</b><span>Data-backed proof on retention, enrollment and cost per student</span></div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p4" aria-labelledby="t4" hidden>
      <div class="panel-main">
        <h3>Faculty &amp; departments</h3>
        <p>Academic leaders and instructors who choose course materials and control department budgets.</p>
        <ul class="role-list"><li>Deans</li><li>Department chairs</li><li>Professors by discipline</li><li>Lab &amp; research directors</li><li>Online learning directors</li><li>Continuing education heads</li></ul>
      </div>
      <div class="panel-side">
        <div class="side-box"><b>They buy</b><span>Textbooks &amp; courseware, lab equipment, research tools, assessment software</span></div>
        <div class="side-box"><b>Best approach</b><span>Discipline-specific outreach ahead of each term's adoption deadlines</span></div>
      </div>
    </div>
    <div class="panel" role="tabpanel" id="p5" aria-labelledby="t5" hidden>
      <div class="panel-main">
        <h3>Technology &amp; procurement</h3>
        <p>The teams who evaluate security, integration and contract terms before anything is approved.</p>
        <ul class="role-list"><li>CIOs &amp; CTOs</li><li>Technology directors</li><li>Network &amp; security managers</li><li>Data &amp; privacy officers</li><li>Purchasing directors</li><li>Business managers</li><li>Facilities directors</li></ul>
      </div>
      <div class="panel-side">
        <div class="side-box"><b>They buy</b><span>Devices, networks, cybersecurity, SIS &amp; LMS platforms, facilities and safety</span></div>
        <div class="side-box"><b>Best approach</b><span>Clear privacy, security and integration documentation up front</span></div>
      </div>
    </div>
  </div>
</section>

<!-- COVERAGE -->
<section class="section" style="background:#fff">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Coverage</p>
        <h2>Education institutions and segments we cover</h2>
      </div>
      <p class="lead">From early childhood centres to research universities, build lists around the exact institutions your product serves.</p>
    </div>
    <div class="cover-grid">
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg></span><h3>Public K-12</h3></div>
        <ul><li>Public school districts</li><li>Elementary schools</li><li>Middle &amp; junior high schools</li><li>High &amp; senior high schools</li><li>Charter schools &amp; networks</li></ul></div>
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M4 21V11l8-4 8 4v10M2 21h20M10 21v-5h4v5"/></svg></span><h3>Private &amp; independent</h3></div>
        <ul><li>Private &amp; independent schools</li><li>Catholic schools</li><li>Christian &amp; religious schools</li><li>Non-public &amp; boarding schools</li><li>Early childhood &amp; kindergarten</li></ul></div>
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg></span><h3>Higher education</h3></div>
        <ul><li>Public colleges &amp; universities</li><li>Private colleges &amp; universities</li><li>Community &amp; technical colleges</li><li>Online &amp; continuing education</li><li>University systems</li></ul></div>
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/></svg></span><h3>Professional schools</h3></div>
        <ul><li>Medical schools</li><li>Nursing schools</li><li>Dental schools</li><li>Aviation colleges</li><li>Law &amp; business schools</li></ul></div>
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z"/><path d="M8 7h6M8 11h6"/></svg></span><h3>Training &amp; enrichment</h3></div>
        <ul><li>Test prep centres</li><li>Coaching &amp; tutoring institutes</li><li>Vocational &amp; trade schools</li><li>Language schools</li><li>Corporate training providers</li></ul></div>
      <div class="cover reveal"><div class="cover-head"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span><h3>Education organisations</h3></div>
        <ul><li>State education agencies</li><li>Regional service agencies</li><li>EdTech companies</li><li>Education associations</li><li>Education foundations &amp; nonprofits</li></ul></div>
    </div>
  </div>
</section>

<!-- BUYING CALENDAR -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Timing</p>
        <h2>Plan outreach around the education buying calendar</h2>
      </div>
      <p class="lead">Most US districts run a July-to-June fiscal year. Reaching buyers in the right phase is often worth more than reaching more of them.</p>
    </div>
    <div class="calendar reveal">
      <div class="months" aria-hidden="true"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      <div class="phases">
        <div class="phase p1"><b data-months="Jan – Mar">Plan &amp; budget</b><span>Needs assessments and draft budgets. Best time to reach superintendents, CFOs and cabinet leads.</span></div>
        <div class="phase p2"><b data-months="Apr – Jun">Approve &amp; purchase</b><span>Board approvals, RFPs and year-end spend. Purchasing and business offices are most active.</span></div>
        <div class="phase p3"><b data-months="Jul – Aug">Implement</b><span>New fiscal year, rollout and training before students return.</span></div>
        <div class="phase p4"><b data-months="Sep – Dec">Evaluate &amp; discover</b><span>Pilots, conferences and research for next year. Ideal for awareness and nurture campaigns.</span></div>
      </div>
      <p class="cal-note"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/></svg>Higher education follows its own cycle, with course material decisions made ahead of each academic term. We can segment and schedule deliveries to match either calendar.</p>
    </div>
  </div>
</section>

<!-- DATA FIELDS -->
<section class="section" style="background:#fff">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Segmentation</p>
        <h2>Segment the education market with precision</h2>
      </div>
      <p class="lead">Combine contact, institution and technology attributes to build the exact audience your campaign needs.</p>
    </div>
    <div class="fields">
      <div class="field reveal"><h3>Professional profile</h3><p>Full name, job title, job function, seniority, department and subject area taught.</p></div>
      <div class="field reveal"><h3>Contact details</h3><p>Verified email, direct and office phone, mailing address and LinkedIn profile.</p></div>
      <div class="field reveal"><h3>Institution profile</h3><p>Institution type, public or private status, grade levels, enrollment size, district affiliation and NAICS code.</p></div>
      <div class="field reveal"><h3>Geography &amp; technology</h3><p>State, county, ZIP and locale (urban, suburban, rural), plus the learning and student information systems in use.</p></div>
    </div>
  </div>
</section>

<!-- TRENDS -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Market brief</p>
        <h2>Education industry trends</h2>
      </div>
      <p class="lead">The shifts changing what schools and universities buy — and the conversations that open doors right now.</p>
    </div>
    <div class="trends">
      <article class="trend reveal"><span class="pill">Budgets</span><h3>Tighter budgets after federal relief</h3><p>With pandemic-era relief funds spent, districts are reviewing every contract and keeping only what shows results.</p><p class="angle">Lead with <span>measurable outcomes and ROI</span></p></article>
      <article class="trend reveal"><span class="pill">Enrollment</span><h3>Shifting enrollment</h3><p>Falling birth rates and families moving between public, charter and private options are reshaping school and campus sizes.</p><p class="angle">Lead with <span>efficiency and retention</span></p></article>
      <article class="trend reveal"><span class="pill">AI</span><h3>AI in teaching and administration</h3><p>Schools are moving from banning AI tools to writing policies, training staff and choosing approved platforms.</p><p class="angle">Lead with <span>safe, policy-ready AI</span></p></article>
      <article class="trend reveal"><span class="pill">Security</span><h3>Cybersecurity pressure</h3><p>Schools hold sensitive records with small IT teams, making them frequent targets for ransomware and phishing.</p><p class="angle">Lead with <span>protection that small teams can run</span></p></article>
      <article class="trend reveal"><span class="pill">Wellbeing</span><h3>Student safety and mental health</h3><p>Safety, attendance and student wellbeing are now board-level priorities with dedicated staff and budgets.</p><p class="angle">Lead with <span>proven support programs</span></p></article>
      <article class="trend reveal"><span class="pill">Careers</span><h3>Career and technical pathways</h3><p>Dual enrollment, industry credentials and work-based learning are growing in both high schools and colleges.</p><p class="angle">Lead with <span>workforce-ready skills</span></p></article>
    </div>
  </div>
</section>

<!-- USE CASES -->
<section class="section" style="background:#fff">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Use cases</p>
        <h2>Education data use cases by business type</h2>
      </div>
      <p class="lead">However you serve education, start with the people who can say yes.</p>
    </div>
    <div class="uses">
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span><div><h3>EdTech &amp; software companies</h3><p>Fill the pipeline with district and campus buyers, and target accounts by the platforms they already use.</p><p class="who"><b>Reach:</b> CTOs, curriculum directors, principals</p></div></article>
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z"/><path d="M8 7h6M8 11h6"/></svg></span><div><h3>Publishers &amp; curriculum providers</h3><p>Reach educators by grade level and subject ahead of adoption and term deadlines.</p><p class="who"><b>Reach:</b> Teachers, department chairs, faculty</p></div></article>
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11"/></svg></span><div><h3>Furniture, facilities &amp; safety</h3><p>Connect with the teams who manage buildings, security and capital projects.</p><p class="who"><b>Reach:</b> Facilities directors, business managers</p></div></article>
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg></span><div><h3>Higher-ed service providers</h3><p>Offer enrollment, retention and campus services to the administrators who own those goals.</p><p class="who"><b>Reach:</b> VPs of enrollment, deans, registrars</p></div></article>
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M16 11h5M18.5 8.5v5"/></svg></span><div><h3>Staffing &amp; recruitment</h3><p>Reach HR leaders and principals hiring teachers, substitutes and support staff.</p><p class="who"><b>Reach:</b> HR directors, principals</p></div></article>
      <article class="use reveal"><span class="ic"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span><div><h3>Events, training &amp; associations</h3><p>Promote conferences, webinars and professional development to the right roles and regions.</p><p class="who"><b>Reach:</b> Coaches, administrators, educators</p></div></article>
    </div>
  </div>
</section>

<!-- SERVICES -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Solutions</p>
        <h2>Education data solutions and services</h2>
      </div>
      <p class="lead">Buy a ready list, build a custom one, or fix the data you already have.</p>
    </div>
    <div class="services">
      <a href="#" class="svc"><b>Custom education lists <span>→</span></b><p>Built to your roles, institution types and regions.</p></a>
      <a href="#" class="svc"><b>Data appending <span>→</span></b><p>Fill missing emails, phones and titles in your CRM.</p></a>
      <a href="#" class="svc"><b>Data cleansing <span>→</span></b><p>Remove duplicates and contacts who have moved on.</p></a>
      <a href="#" class="svc"><b>Data enrichment <span>→</span></b><p>Add enrollment size, grade levels and technology used.</p></a>
      <a href="#" class="svc"><b>Account-based marketing <span>→</span></b><p>Target named districts and campuses with every buyer mapped.</p></a>
      <a href="#" class="svc"><b>Email &amp; event campaigns <span>→</span></b><p>Plan, launch and measure outreach to education audiences.</p></a>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section class="section" style="background:#fff">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Data quality</p>
        <h2>How we keep education data accurate and compliant</h2>
      </div>
      <p class="lead">Every record goes through the same four-step process before it reaches your team.</p>
    </div>
    <div class="steps">
      <div class="step reveal"><span class="n">1</span><h3>Source</h3><p>Collected from public institutional directories, professional sources and verified business records.</p></div>
      <div class="step reveal"><span class="n">2</span><h3>Match</h3><p>Each contact is linked to the right school, district or campus and tagged by role and segment.</p></div>
      <div class="step reveal"><span class="n">3</span><h3>Verify</h3><p>Emails and phone numbers are checked, with extra attention after the summer turnover season.</p></div>
      <div class="step reveal"><span class="n">4</span><h3>Review</h3><p>Specialists review samples by hand before delivery and honour every opt-out request.</p></div>
    </div>
    <div class="notice reveal">
      <svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#38e0f5" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></svg>
      <div><h3>Professional data only — no student information</h3><p>We provide contacts for educators, administrators and institutional staff only. We never collect, sell or supply student or minor records.</p></div>
    </div>
  </div>
</section>

<!-- WHY -->
<section class="section">
  <div class="wrap">
    <div class="section-head reveal">
      <div>
        <p class="eyebrow">Why Coral Blue Data</p>
        <h2>Why education teams choose Coral Blue Data</h2>
      </div>
    </div>
    <div class="why">
      <div class="why-item reveal"><h3>Built for both sectors</h3><p>K-12 and higher education in one dataset, with the segments each one needs.</p></div>
      <div class="why-item reveal"><h3>Fresh when it counts</h3><p>Records re-verified before delivery, so new-year role changes don't cost you deals.</p></div>
      <div class="why-item reveal"><h3>Every buyer mapped</h3><p>From the board to the classroom, see the whole group behind each decision.</p></div>
      <div class="why-item reveal"><h3>A real specialist</h3><p>A person reviews your brief, confirms counts and helps shape the right segment.</p></div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section class="section" style="background:#fff">
  <div class="wrap faq-wrap">
    <div class="reveal">
      <p class="eyebrow">FAQ</p>
      <h2>Education data questions, answered</h2>
      <p class="lead" style="margin-top:16px">Can't find what you need? <a href="#sample">Talk with an expert</a>.</p>
    </div>
    <div class="faq">
      <details><summary>What is an education industry email list?<span class="plus" aria-hidden="true">+</span></summary><p>It's a database of verified professional contacts at schools, districts, colleges and education organisations — such as superintendents, principals, deans and IT directors — used for marketing and sales outreach.</p></details>
      <details><summary>Do you cover both K-12 and higher education?<span class="plus" aria-hidden="true">+</span></summary><p>Yes. We cover public and private K-12 schools and districts, charter schools, colleges and universities, professional schools and training providers.</p></details>
      <details><summary>Can I target by grade level, enrollment size or location?<span class="plus" aria-hidden="true">+</span></summary><p>Yes. You can filter by institution type, grade levels, enrollment size, public or private status, state, county, ZIP and urban, suburban or rural locale, as well as by job title and department.</p></details>
      <details><summary>Do you provide student data?<span class="plus" aria-hidden="true">+</span></summary><p>No. We provide professional contacts only — educators, administrators and staff. We never supply student or minor records.</p></details>
      <details><summary>How do you keep contacts current after staff changes?<span class="plus" aria-hidden="true">+</span></summary><p>Education roles change most between school years, so records are re-verified before each delivery and outdated contacts are removed or replaced.</p></details>
      <details><summary>Is the data compliant with privacy regulations?<span class="plus" aria-hidden="true">+</span></summary><p>Our data is professionally sourced and handled in line with GDPR, CCPA and CAN-SPAM requirements, and we honour opt-out and removal requests. You remain responsible for using the data in line with the laws that apply to your outreach.</p></details>
      <details><summary>Can I see a sample before buying?<span class="plus" aria-hidden="true">+</span></summary><p>Yes. Share your target roles, institution types and regions and we'll prepare a sample built around that segment. A specialist typically replies within two business days.</p></details>
      <details><summary>How is pricing calculated?<span class="plus" aria-hidden="true">+</span></summary><p>Pricing depends on the segment, number of matching records, data fields requested and delivery method. We confirm the available count and a quote after reviewing your requirements.</p></details>
    </div>
  </div>
</section>

<!-- FINAL CTA -->
<section id="sample" style="padding-top:96px">
  <div class="cta">
    <div>
      <h2>Start building your education pipeline</h2>
      <p>You don't need every educator in the country — just the schools and campuses that fit your product. Tell us which roles, institution types and regions matter, and we'll show you what's available.</p>
    </div>
    <div>
      <div class="hero-ctas" style="margin-top:0">
        <a href="#" class="btn btn-primary">Request an Education Data Sample →</a>
        <a href="#" class="btn btn-ghost">Talk With an Expert</a>
      </div>
      <p class="small">A specialist reviews every request and replies by email, typically within two business days.</p>
    </div>
  </div>
</section>

<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div><div style="font-family:var(--display);font-weight:700;font-size:20px;color:#fff">CORAL<span style="color:var(--cyan)">BLUE</span>DATA</div><p style="margin-top:12px;font-size:14px">B2B data intelligence — accurate company and contact data, cleansed, verified and delivered the way your team works.</p></div>
      <div><p class="h">Solutions</p><ul><li><a href="#">B2B Contact &amp; Company Data</a></li><li><a href="#">Technology Install-Base Data</a></li><li><a href="#">Healthcare Data</a></li><li><a href="#">Education Data</a></li></ul></div>
      <div><p class="h">Services</p><ul><li><a href="#">Data Cleansing</a></li><li><a href="#">Data Verification</a></li><li><a href="#">Data Enrichment</a></li><li><a href="#">Data Licensing &amp; API</a></li></ul></div>
      <div><p class="h">Company</p><ul><li><a href="#">About</a></li><li><a href="#">Contact</a></li><li><a href="#">Request a Quote</a></li><li><a href="#">Privacy &amp; Responsible Use</a></li></ul></div>
    </div>
    <div class="foot-bottom"><span>© 2026 Coral Blue Data. All rights reserved.</span><span>Privacy Policy · Terms of Service · Cookie Policy</span></div>
  </div>
</footer>`;
