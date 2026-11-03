import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";

/**
 * Technology industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/technology.
 *
 * All statistics are real and sourced; citations appear inline and in the
 * Sources section at the foot of the page.
 */
export const metadata: Metadata = {
  title: "Technology Industry Marketing & Growth Solutions",
  description:
    "Technology in 2026: $6.37T IT spending, an AI and cloud capex boom, rising security budgets and a widening AI skills gap. See how data, demand and lead generation help tech vendors grow.",
  alternates: { canonical: "/industries/technology" },
  openGraph: {
    title: "Technology Industry: Trends, Buyer Challenges & Growth Solutions",
    description:
      "What the technology sector is facing in 2026 and how data-driven demand and lead generation help companies that sell into it.",
    type: "website",
    url: "/industries/technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Industry Growth Solutions | Coral Blue Data",
    description:
      "2026 technology trends and how data, demand generation and lead generation help tech vendors grow.",
  },
};

const PAGE_BODY = `<!-- ================= HERO ================= -->
<section class="hero">
  <div class="container hero-inner">
    <div class="hero-copy">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span>Technology</span></nav>
      <p class="eyebrow">Industry · Technology</p>
      <h1>Sell into a technology industry where <span class="grad-text">AI is rewriting every budget</span></h1>
      <p class="hero-sub">IT spending is surging past $6 trillion, but it is concentrating fast — on AI, cloud infrastructure and security — while buying groups grow larger and scrutinise every renewal. For vendors selling to technology companies, that means sharper targeting and clearer proof of value. Coral Blue Data helps you find the right accounts and fuel demand and lead generation that fits how tech buys in 2026.</p>
      <div class="ctas">
        <a class="btn btn-primary" href="/contact">Talk With a Tech Growth Expert →</a>
        <a class="btn btn-ghost" href="/solutions/technology-install-base-data">Explore Install-Base Data</a>
      </div>
      <div class="jump" aria-label="On this page">
        <a href="#trends">2026 industry trends</a>
        <a href="#impact">What it means for vendors</a>
        <a href="#approach">Data → demand → leads</a>
        <a href="#personas">Buyer personas</a>
        <a href="#faq">FAQs</a>
      </div>
    </div>

    <!-- Hero illustration: industry pulse -->
    <div class="hero-art">
      <svg role="img" aria-label="Illustration of a technology industry pulse line with trend signals for AI spend, cloud capex, security, skills gaps, buying groups and consolidation" viewBox="0 0 520 440">
        <defs>
          <linearGradient id="tp-line" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset=".6" stop-color="#00a8ff"/><stop offset="1" stop-color="#38e0f5"/></linearGradient>
          <radialGradient id="tp-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#00a8ff" stop-opacity=".4"/><stop offset="1" stop-color="#00a8ff" stop-opacity="0"/></radialGradient>
          <linearGradient id="tp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2f57"/><stop offset="1" stop-color="#082746"/></linearGradient>
        </defs>
        <circle cx="260" cy="220" r="210" fill="url(#tp-glow)"/>
        <rect x="30" y="120" width="460" height="200" rx="24" fill="url(#tp-card)" stroke="#63cdf7" stroke-opacity=".25"/>
        <g stroke="#63cdf7" stroke-opacity=".12"><line x1="50" y1="170" x2="470" y2="170"/><line x1="50" y1="220" x2="470" y2="220"/><line x1="50" y1="270" x2="470" y2="270"/></g>
        <path d="M50 250 H120 L138 250 L152 210 L168 250 H250 L266 250 L282 150 L300 250 H360 L376 250 L390 185 L406 250 H470" fill="none" stroke="url(#tp-line)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle class="pulse" cx="282" cy="150" r="9" fill="#38e0f5"/>
        <text x="54" y="152" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#9fb0c8" letter-spacing="1.5">TECHNOLOGY INDUSTRY PULSE · 2026</text>
        <g font-family="Inter, sans-serif" font-size="12" font-weight="600">
          <g transform="translate(40 40)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#38e0f5"/><text x="32" y="22" fill="#e9eff7">AI spend surges</text></g>
          <g transform="translate(250 22)"><rect width="150" height="34" rx="17" fill="#0b2a4f" stroke="#63cdf7" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#63cdf7"/><text x="32" y="22" fill="#e9eff7">Cloud capex boom</text></g>
          <g transform="translate(340 72)"><rect width="150" height="34" rx="17" fill="#0b2a4f" stroke="#ff786d" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#ff786d"/><text x="32" y="22" fill="#e9eff7">Security budgets up</text></g>
          <g transform="translate(30 350)"><rect width="130" height="34" rx="17" fill="#0b2a4f" stroke="#ff786d" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#ff786d"/><text x="32" y="22" fill="#e9eff7">AI skills gap</text></g>
          <g transform="translate(176 380)"><rect width="150" height="34" rx="17" fill="#0b2a4f" stroke="#63cdf7" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#63cdf7"/><text x="32" y="22" fill="#e9eff7">Bigger buying groups</text></g>
          <g transform="translate(348 344)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#38e0f5"/><text x="32" y="22" fill="#e9eff7">Consolidation</text></g>
        </g>
      </svg>
    </div>
  </div>
</section>

<!-- ================= TRENDS ================= -->
<section class="section bg-white" id="trends">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Technology industry trends 2026</p>
      <h2 class="h2">What the technology industry is talking about in 2026</h2>
      <p class="lead">Across analyst forecasts, hyperscaler guidance and buyer surveys, the same themes keep surfacing. Each one changes what technology companies buy, who approves it and how long it takes.</p>
    </div>

    <div class="grid g-300">
      <article class="card trend">
        <span class="tag">Market</span>
        <h3>IT spending keeps climbing</h3>
        <div class="stat">$6.37T</div>
        <p class="stat-lbl">Projected worldwide IT spending in 2026, up 14.2% year over year</p>
        <p class="body">Gartner's mid-2026 forecast raised growth to 14.2%, led by data-centre systems and software. The budget is growing — but it is concentrating on a narrow set of AI and infrastructure priorities.</p>
        <p class="so"><strong>So what:</strong> there is money to win, but only for offers that map to this year's priorities.</p>
        <p class="src">Source: <a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer">Gartner, July 2026 forecast</a></p>
      </article>
      <article class="card trend">
        <span class="tag">AI</span>
        <h3>AI is the spend magnet</h3>
        <div class="stat">$2.6T</div>
        <p class="stat-lbl">Projected worldwide AI spending in 2026; AI agents and assistants are the fastest-growing software segment at +77%</p>
        <p class="body">Generative-AI models and AI agents are pulling budget toward a handful of platforms, while non-AI categories compete for what is left.</p>
        <p class="so"><strong>So what:</strong> AI-adjacent offers ride the wave; everyone else must prove ROI against it.</p>
        <p class="src">Source: <a href="https://www.ciodive.com/news/global-AI-spend-2026/820656/" target="_blank" rel="noopener noreferrer">Gartner, via CIO Dive</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Infrastructure</span>
        <h3>A historic data-centre build-out</h3>
        <div class="stat">$600B+</div>
        <p class="stat-lbl">Combined 2026 capital spending guided by the largest cloud operators, most of it aimed at AI infrastructure</p>
        <p class="body">GPUs, data-centre construction and power dominate the bill. The build-out ripples out to chips, networking, cooling, power and the services around them.</p>
        <p class="so"><strong>So what:</strong> new buyers and budgets are appearing across the infrastructure supply chain.</p>
        <p class="src">Source: <a href="https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out" target="_blank" rel="noopener noreferrer">Goldman Sachs; hyperscaler guidance</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Security</span>
        <h3>Security budgets keep rising</h3>
        <div class="stat">$244B</div>
        <p class="stat-lbl">Projected worldwide information-security spending in 2026, up 13.3% year over year</p>
        <p class="body">Securing AI itself is the fastest-accelerating line item. Security review now sits inside almost every technology purchase, not beside it.</p>
        <p class="so"><strong>So what:</strong> expect a CISO and compliance gate on deals that never had one before.</p>
        <p class="src">Source: <a href="https://softwarestrategiesblog.com/2026/03/24/information-security-spending-2026/" target="_blank" rel="noopener noreferrer">Gartner information-security forecast, via Software Strategies</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Workforce</span>
        <h3>The AI skills gap bites</h3>
        <div class="stat">72%</div>
        <p class="stat-lbl">Share of employers reporting difficulty filling roles, with AI skills now the hardest to find globally</p>
        <p class="body">For the first time AI skills top ManpowerGroup's hardest-to-fill ranking, ahead of engineering and traditional IT. Scaling tech teams feel it most.</p>
        <p class="so"><strong>So what:</strong> anything that closes the skills gap — tools, training or talent — moves up the list.</p>
        <p class="src">Source: <a href="https://www.manpowergroup.com/en/news-releases/news/global-talent-shortage-reaches-turning-point-as-ai-skills-claim-top-spot" target="_blank" rel="noopener noreferrer">ManpowerGroup 2026 Talent Shortage Survey</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Go-to-market</span>
        <h3>Buying groups keep growing</h3>
        <div class="stat">~11</div>
        <p class="stat-lbl">Typical number of stakeholders in an enterprise technology buying group</p>
        <p class="body">Gartner finds buyers spend most of the journey researching independently and only a sliver of it with any one vendor. More people, more self-service, less seller access.</p>
        <p class="so"><strong>So what:</strong> you have to reach the whole committee, early, with the right message for each role.</p>
        <p class="src">Source: <a href="https://brixongroup.com/en/the-modern-b2b-buying-journey-why-buyers-complete-80-of-their-journey-alone-and-how-you-can-still-remain-visible" target="_blank" rel="noopener noreferrer">Gartner B2B buying research, via Brixon Group</a></p>
      </article>
    </div>

    <!-- Spend concentration chart -->
    <div class="card chart-card">
      <div class="text">
        <span class="tag" style="display:inline-block">Where growth concentrates</span>
        <h3 style="font-size:22px;margin-top:16px">The budget is growing — and bending toward AI</h3>
        <p style="margin-top:12px;font-size:15px;color:var(--muted)">AI-native software segments are growing many times faster than IT spending overall. For vendors, that gap decides which categories are easy to sell into and which have to fight for a shrinking share of attention.</p>
        <p style="margin-top:14px;font-size:14px;color:var(--muted-2)"><strong style="color:var(--electric)">So what:</strong> position against AI priorities, or make the cost-and-risk case that earns budget anyway.</p>
        <p style="margin-top:12px;font-size:12px;color:var(--faint)">Source: <a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer" style="color:var(--faint)">Gartner 2026 forecasts</a></p>
      </div>
      <div class="chart" role="img" aria-label="Bar chart of projected 2026 growth by segment: GenAI models about 81%, AI agents and assistants 77%, all software 15%, total IT 14%, information security 13%">
        <p style="font-size:13px;font-weight:600;color:var(--muted-2);margin-bottom:18px">Projected 2026 growth, selected segments (YoY)</p>
        <div class="bars">
          <div class="bar-row"><span>GenAI models</span><div class="track"><div class="fill" style="width:100%"></div></div><b>+81%</b></div>
          <div class="bar-row"><span>AI agents &amp; assistants</span><div class="track"><div class="fill" style="width:95%"></div></div><b>+77%</b></div>
          <div class="bar-row"><span>All software</span><div class="track"><div class="fill muted" style="width:18%"></div></div><b>+15%</b></div>
          <div class="bar-row"><span>Total IT</span><div class="track"><div class="fill muted" style="width:17%"></div></div><b>+14%</b></div>
          <div class="bar-row"><span>Information security</span><div class="track"><div class="fill muted" style="width:16%"></div></div><b>+13%</b></div>
        </div>
      </div>
    </div>
    <p style="margin-top:24px;font-size:12px;color:var(--faint)">Last updated: November 2026</p>
  </div>
</section>

<!-- ================= IMPACT ON VENDORS ================= -->
<section class="section bg-dark" id="impact">
  <div class="container">
    <div class="split">
      <div class="text">
        <p class="eyebrow">What it means for you</p>
        <h2 class="h2">Why selling into technology is harder in 2026</h2>
        <p class="lead">A bigger market has not made selling easier. Budget is concentrated, buying groups are larger and more self-directed, and every renewal is under review. Growth now depends on precision and proof, not reach.</p>
      </div>
      <div class="art">
        <!-- Illustration: widening buying committee -->
        <svg role="img" aria-label="Illustration showing a technology deal that once involved one engineer now involving engineering, finance, security, procurement and end-user stakeholders" viewBox="0 0 520 300">
          <rect width="520" height="300" rx="24" fill="#082746"/>
          <g font-family="Inter, sans-serif" font-size="11" font-weight="600"><text x="40" y="42" fill="#9fb0c8" letter-spacing="1.4">THEN</text><text x="220" y="42" fill="#63cdf7" letter-spacing="1.4">NOW</text></g>
          <g transform="translate(90 150)"><circle r="34" fill="#0c2f57" stroke="#9fb0c8" stroke-opacity=".5"/><circle cy="-8" r="10" fill="#9fb0c8"/><path d="M-16 18 q16 -20 32 0" fill="#9fb0c8"/><text y="58" text-anchor="middle" font-family="Inter, sans-serif" font-size="11" fill="#c9d5e6">Engineer</text></g>
          <line x1="180" y1="60" x2="180" y2="260" stroke="#63cdf7" stroke-opacity=".2"/>
          <g transform="translate(360 150)">
            <g stroke="#63cdf7" stroke-opacity=".45" stroke-dasharray="3 4"><line x1="0" y1="0" x2="-100" y2="-70"/><line x1="0" y1="0" x2="0" y2="-90"/><line x1="0" y1="0" x2="100" y2="-70"/><line x1="0" y1="0" x2="-100" y2="70"/><line x1="0" y1="0" x2="100" y2="70"/></g>
            <rect x="-34" y="-22" width="68" height="44" rx="10" fill="#1258e8"/><text y="5" text-anchor="middle" font-family="Sora, sans-serif" font-size="12" font-weight="600" fill="#fff">Deal</text>
            <g font-family="Inter, sans-serif" font-size="10" fill="#e9eff7" text-anchor="middle">
              <g transform="translate(-100 -70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Eng.</text></g>
              <g transform="translate(0 -90)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="-26">Finance</text></g>
              <g transform="translate(100 -70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Security</text></g>
              <g transform="translate(-100 70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Procurement</text></g>
              <g transform="translate(100 70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Users</text></g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="impact">
      <div class="card-dark"><h3>Budget is concentrated</h3><p>IT spend is up, but AI and infrastructure absorb most of the increase. Non-AI categories fight for a shrinking share of attention and dollars.</p></div>
      <div class="card-dark"><h3>Larger, self-directed buying groups</h3><p>Around a dozen stakeholders weigh in, and most of the journey happens before they ever talk to a vendor.</p></div>
      <div class="card-dark"><h3>Security gates every deal</h3><p>CISOs, compliance and vendor-risk reviews now sit inside purchases that used to close on a technical champion alone.</p></div>
      <div class="card-dark"><h3>Crowded, noisy categories</h3><p>Every tool now claims to be AI-powered. Generic outreach drowns; relevance and proof are the only way through.</p></div>
      <div class="card-dark"><h3>Data goes stale fast</h3><p>Layoffs, reorgs, re-platforming and consolidation move people and tech stacks constantly, decaying account and contact data.</p></div>
      <div class="card-dark"><h3>ROI scrutiny on every renewal</h3><p>Finance and FinOps review spend continuously. Expansion and renewal now demand the same proof as a new purchase.</p></div>
    </div>

    <div class="qs">
      <p>Questions technology growth teams are asking</p>
      <ul>
        <li>Which companies run the platforms, clouds and tools my product fits?</li>
        <li>Who is in the buying group, and who actually signs?</li>
        <li>How do I reach buyers before they have shortlisted without me?</li>
        <li>How do I prove ROI against an AI-first budget?</li>
        <li>How do I keep account and stack data current through constant change?</li>
        <li>How do I keep sales and marketing aimed at the same accounts?</li>
      </ul>
    </div>
  </div>
</section>

<!-- ================= APPROACH ================= -->
<section class="section bg-mist" id="approach">
  <div class="container">
    <div class="head">
      <p class="eyebrow">How we help</p>
      <h2 class="h2">Data, demand generation and lead generation — working as one</h2>
      <p class="lead">In technology, these three only work when they build on each other. Accurate data and technographics show you where to play; demand generation earns attention from the whole buying group; lead generation turns that attention into qualified conversations.</p>
    </div>
    <div class="flow">
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
        <p class="k">Step 1 · Data</p>
        <h3>Know your market</h3>
        <p class="q">"Where should we focus?"</p>
        <ul><li>Map your tech TAM by company size, segment, region and funding stage</li><li>Layer in technographics — the clouds, platforms and tools each account runs</li><li>Identify every role in the buying committee</li><li>Enrich and de-duplicate your CRM so records survive reorgs</li></ul>
        <span class="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg></div>
        <p class="k">Step 2 · Demand generation</p>
        <h3>Earn attention</h3>
        <p class="q">"How do we get on their radar?"</p>
        <ul><li>Run account-based campaigns to target accounts and their stacks</li><li>Tailor content by persona: engineering, security, finance</li><li>Fill webinars and events with the right attendees</li><li>Stay visible through long, self-directed evaluations</li></ul>
        <span class="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg></div>
        <p class="k">Step 3 · Lead generation</p>
        <h3>Start the right conversations</h3>
        <p class="q">"Who do we talk to this week?"</p>
        <ul><li>Build verified prospect lists for outbound sales</li><li>Prioritise accounts by fit, stack and readiness signals</li><li>Route qualified leads to reps with full context</li><li>Book meetings with decision-makers, not just champions</li></ul>
      </div>
    </div>
    <p style="margin-top:28px;font-size:15px;color:var(--muted);max-width:860px">Coral Blue Data provides the technology data foundation — accounts, contacts, technographics, enrichment and hygiene — that powers your demand and lead generation programmes, whether you run them in-house or with an agency. <a href="/solutions/technology-install-base-data">See our technology install-base data →</a></p>
  </div>
</section>

<!-- ================= PERSONAS ================= -->
<section class="section bg-white" id="personas">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Buyer personas</p>
      <h2 class="h2">Who we help in the technology market — and how</h2>
      <p class="lead">These personas represent the teams that sell into technology companies most often. Each faces a different version of the 2026 market. Here is how data, demand generation and lead generation change the outcome for each.</p>
    </div>

    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr));gap:24px">

      <!-- Persona 1 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#1258e8"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><path d="M34 34 l6 6 l-6 6 M48 34 l-6 6 l6 6" stroke="#38e0f5" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <div class="who"><h3>The Cloud &amp; Infrastructure Sales Leader</h3><p>Head of Sales · Cloud, DevOps &amp; infrastructure vendor</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Win platform and tooling spend as the AI build-out reshapes stacks.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Budget pulled toward a few AI and cloud platforms</li><li>Technical champions, but finance and security gate the deal</li><li>Needs to know which clouds and tools each account already runs</li></ul>
            <span class="trend-link">Infrastructure</span><span class="trend-link">AI</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Target accounts by technographics — cloud, platform and tooling install base — and reach CTOs, VPs of engineering and architects.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Run ABM with technical proof for engineering and cost cases for finance.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Prioritise accounts whose stack and scale make integration easy to sell.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> fewer deals stalled at the finance or security gate, and pipeline aimed where the stack fits.</p>
        </div>
      </article>

      <!-- Persona 2 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#00a8ff"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><path d="M41 30 l8 3 v6 c0 5 -3.5 8 -8 9 c-4.5 -1 -8 -4 -8 -9 v-6z" fill="#061426"/><path d="M38 39 l2 2 l4 -4" stroke="#38e0f5" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          <div class="who"><h3>The Cybersecurity Vendor Marketer</h3><p>VP Marketing · Security &amp; compliance software</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Reach security leaders at tech companies as budgets and AI risk both rise.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Crowded market; CISOs flooded with pitches</li><li>Securing AI is new, urgent and poorly understood</li><li>Buyers want proof and peer validation before a call</li></ul>
            <span class="trend-link">Security</span><span class="trend-link">AI</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Reach CISOs, security engineers and compliance leaders, segmented by stack and company size.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Educate with risk and AI-security content tuned to each stakeholder.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Prioritise accounts whose technology and maturity match your offer.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> outreach that stands out in a noisy category and lands with the right security buyer.</p>
        </div>
      </article>

      <!-- Persona 3 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#082746" stroke="#38e0f5"/><circle cx="28" cy="22" r="9" fill="#63cdf7"/><path d="M12 46 q16 -18 32 0" fill="#63cdf7"/><circle cx="36" cy="36" r="3" fill="#fff"/><circle cx="45" cy="33" r="3" fill="#fff"/><circle cx="45" cy="43" r="3" fill="#fff"/><path d="M36 36 L45 33 M36 36 L45 43" stroke="#fff" stroke-width="1.6"/></svg>
          <div class="who"><h3>The Data &amp; AI Platform Seller</h3><p>Head of Growth · Data, analytics &amp; ML platform</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Land teams moving from AI experiments to production workloads.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Everyone claims to be "AI-powered"; hard to stand out</li><li>Buyers want measurable outcomes, not demos</li><li>Needs to find accounts with the data maturity to adopt</li></ul>
            <span class="trend-link">AI</span><span class="trend-link">Market</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Target by data stack and signals of AI investment; reach data, ML and platform leaders.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Share ROI-led content and reference architectures with technical and economic buyers.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Focus reps on accounts ready to move from pilot to production.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> pipeline weighted toward accounts that can actually deploy, not just evaluate.</p>
        </div>
      </article>

      <!-- Persona 4 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#1258e8"/><circle cx="22" cy="22" r="7" fill="#fff"/><path d="M9 44 q13 -15 26 0" fill="#fff"/><circle cx="36" cy="24" r="6" fill="#63cdf7"/><path d="M27 44 q9 -12 20 0" fill="#63cdf7"/></svg>
          <div class="who"><h3>The Tech Talent &amp; Staffing Partner</h3><p>Business Development · IT staffing &amp; recruiting</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Become the go-to partner for companies struggling to hire AI and engineering talent.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Demand concentrated in AI and senior engineering roles</li><li>Must reach hiring and engineering leaders before rivals</li><li>Need varies sharply by company stage and location</li></ul>
            <span class="trend-link">Workforce</span><span class="trend-link">AI</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Reach VPs of engineering, talent and HR leaders by company size, stage and metro.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Position your talent model to engineering and finance leaders together.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Focus outreach on fast-scaling firms with the sharpest skills gaps.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> more conversations with the leaders who own hiring, where demand is highest.</p>
        </div>
      </article>

      <!-- Persona 5 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#00a8ff"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><rect x="34" y="34" width="14" height="14" rx="3" fill="#061426"/><path d="M37 41 h8 M41 37 v8" stroke="#38e0f5" stroke-width="2.2" stroke-linecap="round"/></svg>
          <div class="who"><h3>The IT Services &amp; SI Growth Lead</h3><p>VP Sales · Professional services &amp; systems integration</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Win implementation and managed-services work tied to the AI and cloud build-out.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Clients want outcomes and ROI, not headcount</li><li>Long cycles across technical and finance stakeholders</li><li>Hard to spot which accounts are mid-transformation</li></ul>
            <span class="trend-link">Infrastructure</span><span class="trend-link">Go-to-market</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Find accounts showing migration, modernisation and AI-adoption signals; reach IT and transformation leaders.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Lead with outcome and benchmark content for technical and economic buyers.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Build territory lists that separate high-fit accounts from unlikely buyers.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> a pipeline built on accounts actively transforming and able to act.</p>
        </div>
      </article>
    </div>
    <p style="margin-top:28px;font-size:13px;color:var(--faint)">Personas are illustrative composites based on common technology go-to-market teams, not specific individuals.</p>
  </div>
</section>

<!-- ================= BUYING COMMITTEE ================= -->
<section class="section bg-dark" id="committee">
  <div class="container">
    <div class="head">
      <p class="eyebrow">The technology buying group</p>
      <h2 class="h2">Who decides inside technology organisations</h2>
      <p class="lead">Most technology purchases now pass through several hands. Effective demand and lead generation speaks to each of them in their own terms.</p>
    </div>
    <div class="roles">
      <div class="role"><h3>Technical leaders</h3><p>CTOs, VPs of engineering and architects judge fit, scalability and integration effort.</p></div>
      <div class="role"><h3>Finance &amp; FinOps</h3><p>CFOs and FinOps teams weigh cost, ROI and the impact on cloud and tooling spend.</p></div>
      <div class="role"><h3>Security &amp; compliance</h3><p>CISOs and compliance leaders assess data security, AI risk and vendor risk.</p></div>
      <div class="role"><h3>Procurement &amp; vendor management</h3><p>Compare terms, alternatives and consolidation opportunities across the stack.</p></div>
      <div class="role"><h3>End users &amp; champions</h3><p>Developers and practitioners trial tools bottom-up and shape what gets shortlisted.</p></div>
    </div>
    <div style="margin-top:48px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
      <a class="btn btn-primary" href="/solutions/technology-install-base-data">See technology data coverage →</a>
      <span style="font-size:14px;color:var(--on-dark-3)">Segments, technographics and data attributes are on our Technology Data page.</span>
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="section bg-white" id="faq">
  <div class="container faq-wrap">
    <div class="side">
      <p class="eyebrow">FAQs</p>
      <h2 class="h2">Technology industry FAQs</h2>
      <p class="lead" style="font-size:16px">Planning a technology go-to-market? <a href="/contact">Talk with an expert</a>.</p>
    </div>
    <div class="list">
      <details open><summary>What are the biggest trends in the technology industry in 2026?<span class="plus" aria-hidden="true">+</span></summary><p>IT spending is growing toward $6.4 trillion but concentrating on AI and cloud infrastructure, security budgets are rising, the AI skills gap is widening, and B2B buying groups are larger and more self-directed than ever.</p></details>
      <details><summary>How do these trends affect companies that sell to technology firms?<span class="plus" aria-hidden="true">+</span></summary><p>Budget is harder to win unless your offer maps to AI, cloud or security priorities. Expect larger buying committees, a security and finance gate on most deals, and buyers who do most of their research before contacting you.</p></details>
      <details><summary>What is technographic data and why does it matter?<span class="plus" aria-hidden="true">+</span></summary><p>Technographics describe the clouds, platforms and tools a company already runs. They let you target accounts where your product fits, tailor messaging to the existing stack, and prioritise prospects by integration readiness.</p></details>
      <details><summary>What is the difference between demand generation and lead generation?<span class="plus" aria-hidden="true">+</span></summary><p>Demand generation creates interest across your target market. Lead generation captures and qualifies specific people and accounts ready for a sales conversation. In technology, both depend on accurate account, contact and technographic data.</p></details>
      <details><summary>How do you market to a buying group of around a dozen people?<span class="plus" aria-hidden="true">+</span></summary><p>Map the full committee, then tailor messages by role — technical proof for engineering, ROI for finance, risk and compliance for security — and stay visible through a long, mostly self-directed evaluation with consistent account-based outreach.</p></details>
      <details><summary>How does Coral Blue Data support technology demand and lead generation?<span class="plus" aria-hidden="true">+</span></summary><p>We supply the technology data foundation: account, contact and technographic data for software, infrastructure and IT-services companies, plus enrichment, cleansing and verification to keep it current for your campaigns and outbound.</p></details>
    </div>
  </div>
</section>

<!-- ================= FINAL CTA ================= -->
<section class="bg-mist" style="padding:96px 0">
  <div class="container">
    <div class="cta-box">
      <svg class="bg" aria-hidden="true" viewBox="0 0 520 320">
        <g fill="none" stroke="#63cdf7" stroke-opacity=".6"><circle cx="300" cy="160" r="150"/><ellipse cx="300" cy="160" rx="150" ry="60"/><ellipse cx="300" cy="160" rx="60" ry="150"/></g>
        <g fill="#38e0f5"><circle cx="200" cy="70" r="4"/><circle cx="410" cy="110" r="4"/><circle cx="360" cy="270" r="4"/><circle cx="180" cy="230" r="4"/></g>
        <g fill="none" stroke="#38e0f5" stroke-opacity=".7"><path d="M200 70 Q300 20 410 110"/><path d="M410 110 Q420 200 360 270"/><path d="M360 270 Q260 300 180 230"/></g>
      </svg>
      <div style="flex:1 1 520px;min-width:0">
        <h2 class="h2">Build a technology go-to-market that fits 2026</h2>
        <p style="margin-top:16px;font-size:17px;color:var(--on-dark-2);max-width:620px">Tell us who you sell to and what you're trying to grow. We'll show you the technology accounts, stacks and buying groups that fit, and how to put that data to work in your demand and lead generation.</p>
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;align-items:flex-start">
        <div class="ctas" style="margin-top:0">
          <a class="btn btn-primary" href="/contact">Talk With an Expert →</a>
          <a class="btn btn-ghost" href="/request-a-quote">Request a Sample</a>
        </div>
        <p style="font-size:13px;color:var(--on-dark-3)">A specialist reviews every request and replies by email, typically within two business days.</p>
      </div>
    </div>

    <div class="sources" style="margin-top:56px">
      <p style="font-weight:600;color:var(--muted-2)">Sources</p>
      <ol>
        <li><a href="https://www.gartner.com/en/newsroom/press-releases/2026-07-27-gartner-forecasts-worldwide-it-spending-to-grow-14-point-2-percent-in-2026-totaling-6-point-37-trillion" target="_blank" rel="noopener noreferrer">Gartner — Worldwide IT spending to grow 14.2% in 2026 ($6.37T)</a></li>
        <li><a href="https://www.ciodive.com/news/global-AI-spend-2026/820656/" target="_blank" rel="noopener noreferrer">CIO Dive — Gartner: global AI spend to reach $2.59T in 2026</a></li>
        <li><a href="https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out" target="_blank" rel="noopener noreferrer">Goldman Sachs — Scale of the AI build-out (hyperscaler capex)</a></li>
        <li><a href="https://softwarestrategiesblog.com/2026/03/24/information-security-spending-2026/" target="_blank" rel="noopener noreferrer">Software Strategies — Gartner information-security spending 2026 ($244B)</a></li>
        <li><a href="https://www.manpowergroup.com/en/news-releases/news/global-talent-shortage-reaches-turning-point-as-ai-skills-claim-top-spot" target="_blank" rel="noopener noreferrer">ManpowerGroup — 2026 Talent Shortage Survey (AI skills)</a></li>
        <li><a href="https://brixongroup.com/en/the-modern-b2b-buying-journey-why-buyers-complete-80-of-their-journey-alone-and-how-you-can-still-remain-visible" target="_blank" rel="noopener noreferrer">Brixon Group — Gartner B2B buying journey and buying-group size</a></li>
      </ol>
    </div>
  </div>
</section>`;

const JSON_LD = `{
  "@context": "https://schema.org",
  "@graph": [
    {"@type":"WebPage","@id":"https://coralbluedata1.vercel.app/industries/technology#webpage","url":"https://coralbluedata1.vercel.app/industries/technology","name":"Technology Industry Marketing & Growth Solutions | Coral Blue Data","description":"Technology in 2026: $6.37T IT spending, an AI and cloud capex boom, rising security budgets and a widening AI skills gap, and how data, demand and lead generation help tech vendors grow.","dateModified":"2026-11-03","publisher":{"@type":"Organization","name":"Coral Blue Data","url":"https://coralbluedata1.vercel.app/"}},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://coralbluedata1.vercel.app/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://coralbluedata1.vercel.app/industries"},{"@type":"ListItem","position":3,"name":"Technology","item":"https://coralbluedata1.vercel.app/industries/technology"}]},
    {"@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What are the biggest trends in the technology industry in 2026?","acceptedAnswer":{"@type":"Answer","text":"IT spending is growing toward $6.4 trillion but concentrating on AI and cloud infrastructure, security budgets are rising, the AI skills gap is widening, and B2B buying groups are larger and more self-directed than ever."}},
      {"@type":"Question","name":"What is technographic data and why does it matter?","acceptedAnswer":{"@type":"Answer","text":"Technographics describe the clouds, platforms and tools a company already runs. They let you target accounts where your product fits, tailor messaging to the existing stack, and prioritise prospects by integration readiness."}},
      {"@type":"Question","name":"What is the difference between demand generation and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Demand generation creates interest across your target market. Lead generation captures and qualifies specific people and accounts ready for a sales conversation. In technology, both depend on accurate account, contact and technographic data."}},
      {"@type":"Question","name":"How does Coral Blue Data support technology demand and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Coral Blue Data supplies account, contact and technographic data for software, infrastructure and IT-services companies, plus enrichment, cleansing and verification, which marketing and sales teams use to target campaigns and outbound."}}
    ]}
  ]
}`;

export default function TechnologyIndustryPage() {
  return <IndustryLanding bodyHtml={PAGE_BODY} jsonLd={JSON_LD} />;
}
