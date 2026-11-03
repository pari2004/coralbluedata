import type { Metadata } from "next";
import { IndustryLanding } from "@/components/industry/IndustryLanding";

/**
 * Manufacturing industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/manufacturing.
 *
 * All statistics are real and sourced; citations appear inline and in the
 * Sources section at the foot of the page.
 */
export const metadata: Metadata = {
  title: "Manufacturing Industry Marketing & Growth Solutions",
  description:
    "Manufacturing in 2026: a 1.9M worker gap, AI on the factory floor, a reshoring surge, record smart-factory investment and top-ranked cyber risk. See how data, demand and lead generation help industrial vendors grow.",
  alternates: { canonical: "/industries/manufacturing" },
  openGraph: {
    title: "Manufacturing Industry: Trends, Buyer Challenges & Growth Solutions",
    description:
      "What the manufacturing sector is facing in 2026 and how data-driven demand and lead generation help companies that sell into it.",
    type: "website",
    url: "/industries/manufacturing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Industry Growth Solutions | Coral Blue Data",
    description:
      "2026 manufacturing trends and how data, demand generation and lead generation help industrial vendors grow.",
  },
};

const PAGE_BODY = `<!-- ================= HERO ================= -->
<section class="hero">
  <div class="container hero-inner">
    <div class="hero-copy">
      <nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/industries">Industries</a> / <span>Manufacturing</span></nav>
      <p class="eyebrow">Industry · Manufacturing</p>
      <h1>Sell into a manufacturing industry <span class="grad-text">rebuilding itself around AI and reshoring</span></h1>
      <p class="hero-sub">Manufacturers are investing hard in smart factories and AI while facing a widening labour gap, tariff-driven reshoring and the highest cyber-attack rate of any sector. For the companies that sell to them, that means technical, multi-stakeholder buying and a high bar for proof. Coral Blue Data helps you find the right plants and accounts and fuel demand and lead generation that fits how manufacturers buy today.</p>
      <div class="ctas">
        <a class="btn btn-primary" href="/contact">Talk With a Manufacturing Growth Expert →</a>
        <a class="btn btn-ghost" href="/solutions/b2b-contact-company-data">Explore B2B Data</a>
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
      <svg role="img" aria-label="Illustration of a manufacturing industry pulse line with trend signals for the labour gap, AI, reshoring, smart-factory spend, cyber risk and tariffs" viewBox="0 0 520 440">
        <defs>
          <linearGradient id="mp-line" x1="0" x2="1"><stop offset="0" stop-color="#1258e8"/><stop offset=".6" stop-color="#00a8ff"/><stop offset="1" stop-color="#38e0f5"/></linearGradient>
          <radialGradient id="mp-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#00a8ff" stop-opacity=".4"/><stop offset="1" stop-color="#00a8ff" stop-opacity="0"/></radialGradient>
          <linearGradient id="mp-card" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c2f57"/><stop offset="1" stop-color="#082746"/></linearGradient>
        </defs>
        <circle cx="260" cy="220" r="210" fill="url(#mp-glow)"/>
        <rect x="30" y="120" width="460" height="200" rx="24" fill="url(#mp-card)" stroke="#63cdf7" stroke-opacity=".25"/>
        <g stroke="#63cdf7" stroke-opacity=".12"><line x1="50" y1="170" x2="470" y2="170"/><line x1="50" y1="220" x2="470" y2="220"/><line x1="50" y1="270" x2="470" y2="270"/></g>
        <path d="M50 240 H120 L140 240 L156 190 L172 255 L190 215 L210 240 H290 L306 240 L322 165 L340 250 L356 220 L370 240 H470" fill="none" stroke="url(#mp-line)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <circle class="pulse" cx="322" cy="165" r="9" fill="#38e0f5"/>
        <text x="54" y="152" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#9fb0c8" letter-spacing="1.5">MANUFACTURING INDUSTRY PULSE · 2026</text>
        <g font-family="Inter, sans-serif" font-size="12" font-weight="600">
          <g transform="translate(40 40)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#ff786d" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#ff786d"/><text x="32" y="22" fill="#e9eff7">Labour gap widens</text></g>
          <g transform="translate(250 22)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#38e0f5" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#38e0f5"/><text x="32" y="22" fill="#e9eff7">AI on the floor</text></g>
          <g transform="translate(340 72)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#63cdf7" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#63cdf7"/><text x="32" y="22" fill="#e9eff7">Reshoring surges</text></g>
          <g transform="translate(30 350)"><rect width="150" height="34" rx="17" fill="#0b2a4f" stroke="#63cdf7" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#63cdf7"/><text x="32" y="22" fill="#e9eff7">Smart-factory spend</text></g>
          <g transform="translate(194 380)"><rect width="130" height="34" rx="17" fill="#0b2a4f" stroke="#ff786d" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#ff786d"/><text x="32" y="22" fill="#e9eff7">Cyber risk #1</text></g>
          <g transform="translate(348 344)"><rect width="140" height="34" rx="17" fill="#0b2a4f" stroke="#ff786d" stroke-opacity=".6"/><circle cx="18" cy="17" r="5" fill="#ff786d"/><text x="32" y="22" fill="#e9eff7">Tariff pressure</text></g>
        </g>
      </svg>
    </div>
  </div>
</section>

<!-- ================= TRENDS ================= -->
<section class="section bg-white" id="trends">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Manufacturing industry trends 2026</p>
      <h2 class="h2">What the manufacturing industry is talking about in 2026</h2>
      <p class="lead">Across industry outlooks, executive surveys and threat reports, the same themes keep surfacing. Each one changes what manufacturers buy, who signs off and how long it takes.</p>
    </div>

    <div class="grid g-300">
      <article class="card trend">
        <span class="tag">Workforce</span>
        <h3>A widening labour gap</h3>
        <div class="stat">1.9M</div>
        <p class="stat-lbl">US manufacturing jobs that could go unfilled by 2033 — of 3.8M needed</p>
        <p class="body">Deloitte and the Manufacturing Institute project millions of openings as workers retire faster than they can be replaced, even as automation reshapes what the jobs require.</p>
        <p class="so"><strong>So what:</strong> anything that saves labour or closes the skills gap moves up the shortlist.</p>
        <p class="src">Source: <a href="https://manufacturingdigital.com/news/deloitte-2026-manufacturing-outlook" target="_blank" rel="noopener noreferrer">Deloitte 2026 Manufacturing Outlook</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Technology</span>
        <h3>AI reaches the factory floor</h3>
        <div class="stat">72%</div>
        <p class="stat-lbl">Manufacturers that have adopted AI in some form — yet only 10% have done so at scale</p>
        <p class="body">Most manufacturers are experimenting with AI, but few have deployed it across operations. The gap between adoption and scale defines who is buying what in 2026.</p>
        <p class="so"><strong>So what:</strong> buyers want proof and a clear path from pilot to plant-wide rollout.</p>
        <p class="src">Source: <a href="https://www.parsec-corp.com/news-and-events/parsec-survey-72-of-manufacturers-have-adopted-ai-but-only-10-have-done-so-at-scale" target="_blank" rel="noopener noreferrer">Parsec 2026 State of Manufacturing report</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Supply chain</span>
        <h3>Tariffs drive a reshoring surge</h3>
        <div class="stat">70%</div>
        <p class="stat-lbl">Manufacturers reshoring production, up from about a third in 2024</p>
        <p class="body">Tariffs, shipping costs and supply-chain risk are pulling production back toward North America, driving fresh investment in facilities, equipment and automation.</p>
        <p class="so"><strong>So what:</strong> new plants and lines mean new budgets and new buyers to reach early.</p>
        <p class="src">Source: <a href="https://www.parsec-corp.com/blog/how-manufacturers-around-the-world-are-responding-to-tariffs" target="_blank" rel="noopener noreferrer">Parsec; via industry surveys</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Investment</span>
        <h3>Smart-factory spend keeps rising</h3>
        <div class="stat">90%+</div>
        <p class="stat-lbl">Manufacturers planning to maintain or increase smart-factory investment in 2026</p>
        <p class="body">The Manufacturing Leadership Council finds the sector has moved past experimentation into disciplined execution — integrating and operating smart-factory technology at scale.</p>
        <p class="so"><strong>So what:</strong> budgets exist, but buyers now demand integration and measurable results.</p>
        <p class="src">Source: <a href="https://manufacturingleadershipcouncil.com/survey-smart-factories-enter-the-execution-era/" target="_blank" rel="noopener noreferrer">Manufacturing Leadership Council 2026 survey</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Security</span>
        <h3>The most-attacked sector</h3>
        <div class="stat">27.7%</div>
        <p class="stat-lbl">Share of all cyberattacks that hit manufacturing in 2025 — the most of any industry, five years running</p>
        <p class="body">Its critical role in supply chains and reliance on operational technology keep manufacturing in attackers' sights, where downtime is costly and tolerance for it is low.</p>
        <p class="so"><strong>So what:</strong> OT security and vendor-risk review now sit inside most technology purchases.</p>
        <p class="src">Source: <a href="https://www.manufacturingdive.com/news/manufacturing-sector-saw-most-cyberattacks-in-2025-IBM-X-Force/813063/" target="_blank" rel="noopener noreferrer">IBM X-Force, via Manufacturing Dive</a></p>
      </article>
      <article class="card trend">
        <span class="tag">Automation</span>
        <h3>Automation reshapes, not replaces</h3>
        <div class="stat">81%</div>
        <p class="stat-lbl">Share of task hours still performed by people even as automation investment accelerates</p>
        <p class="body">Deloitte projects headcount needs stay largely intact while automation changes the specific skills the work demands — raising the need for tools, training and talent together.</p>
        <p class="so"><strong>So what:</strong> offers that pair technology with workforce enablement land best.</p>
        <p class="src">Source: <a href="https://manufacturingdigital.com/news/deloitte-2026-manufacturing-outlook" target="_blank" rel="noopener noreferrer">Deloitte 2026 Manufacturing Outlook</a></p>
      </article>
    </div>

    <!-- AI adoption chart -->
    <div class="card chart-card">
      <div class="text">
        <span class="tag" style="display:inline-block">AI in manufacturing</span>
        <h3 style="font-size:22px;margin-top:16px">Adoption is broad, but scale is rare</h3>
        <p style="margin-top:12px;font-size:15px;color:var(--muted)">Most manufacturers are using AI somewhere, far fewer have reached production scale. That gap is exactly where vendors win — if they can prove the path from pilot to plant-wide value.</p>
        <p style="margin-top:14px;font-size:14px;color:var(--muted-2)"><strong style="color:var(--electric)">So what:</strong> lead with evidence and a credible route to scale, not another pilot.</p>
        <p style="margin-top:12px;font-size:12px;color:var(--faint)">Source: <a href="https://www.parsec-corp.com/news-and-events/parsec-survey-72-of-manufacturers-have-adopted-ai-but-only-10-have-done-so-at-scale" target="_blank" rel="noopener noreferrer" style="color:var(--faint)">Parsec 2026; KPMG Global Tech Report 2026</a></p>
      </div>
      <div class="chart" role="img" aria-label="Bar chart of AI in manufacturing 2026: adopted AI in some form 72 percent, using generative AI 65 percent, seeing business value 49 percent, deployed at scale 10 percent">
        <p style="font-size:13px;font-weight:600;color:var(--muted-2);margin-bottom:18px">AI in manufacturing, 2026 (share of manufacturers)</p>
        <div class="bars">
          <div class="bar-row"><span>Adopted AI</span><div class="track"><div class="fill" style="width:100%"></div></div><b>72%</b></div>
          <div class="bar-row"><span>Using generative AI</span><div class="track"><div class="fill" style="width:90.3%"></div></div><b>65%</b></div>
          <div class="bar-row"><span>Seeing business value</span><div class="track"><div class="fill muted" style="width:68.1%"></div></div><b>49%</b></div>
          <div class="bar-row"><span>Deployed at scale</span><div class="track"><div class="fill muted" style="width:13.9%"></div></div><b>10%</b></div>
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
        <h2 class="h2">Why selling into manufacturing is harder in 2026</h2>
        <p class="lead">Investment is strong, but it is technical and carefully reviewed. Engineering, operations, procurement, IT and finance all weigh in, downtime risk is unforgiving, and buyers expect proof you understand the plant. Growth now depends on precision and evidence.</p>
      </div>
      <div class="art">
        <!-- Illustration: widening buying committee -->
        <svg role="img" aria-label="Illustration showing a manufacturing deal that once involved one plant engineer now involving engineering, finance, procurement, IT/OT and quality stakeholders" viewBox="0 0 520 300">
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
              <g transform="translate(100 -70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Procurement</text></g>
              <g transform="translate(-100 70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">IT / OT</text></g>
              <g transform="translate(100 70)"><circle r="20" fill="#0c2f57" stroke="#38e0f5"/><circle cy="-5" r="6" fill="#63cdf7"/><path d="M-9 10 q9 -11 18 0" fill="#63cdf7"/><text y="34">Quality</text></g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="impact">
      <div class="card-dark"><h3>Technical, multi-stakeholder buying</h3><p>Engineering, operations, procurement, IT/OT and finance all review purchases. Reaching one plant champion is no longer enough.</p></div>
      <div class="card-dark"><h3>Downtime risk raises the bar</h3><p>On a production line, failure is expensive. Buyers demand proof, references and a credible path to value before they commit.</p></div>
      <div class="card-dark"><h3>New sites, new buyers</h3><p>Reshoring and capacity expansion create fresh facilities and decision-makers that older account lists miss.</p></div>
      <div class="card-dark"><h3>OT security is now in scope</h3><p>As the most-attacked sector, manufacturers put security and vendor-risk review inside purchases that never had one.</p></div>
      <div class="card-dark"><h3>Fragmented, distributed accounts</h3><p>Plants, divisions and HQs sit in different places with different buyers, making account and contact data hard to keep current.</p></div>
      <div class="card-dark"><h3>Pilot-to-scale scrutiny</h3><p>With most AI stuck in pilots, buyers scrutinise ROI and integration before funding a plant-wide rollout.</p></div>
    </div>

    <div class="qs">
      <p>Questions manufacturing growth teams are asking</p>
      <ul>
        <li>Which manufacturers have budget and projects for my category this year?</li>
        <li>Who sits on the buying committee across plant, IT and finance?</li>
        <li>How do I reach new sites created by reshoring and expansion?</li>
        <li>How do I prove ROI and a path from pilot to scale?</li>
        <li>How do I keep account and plant data current across fragmented sites?</li>
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
      <p class="lead">In manufacturing, these three only work when they build on each other. Accurate account and plant data shows you where to play; demand generation earns attention from the whole buying group; lead generation turns that attention into qualified conversations.</p>
    </div>
    <div class="flow">
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg></div>
        <p class="k">Step 1 · Data</p>
        <h3>Know your market</h3>
        <p class="q">"Where should we focus?"</p>
        <ul><li>Map your manufacturing TAM by sub-sector, size, region and plant</li><li>Identify every role in the buying committee across sites and HQ</li><li>Enrich and clean your CRM so records stay current</li><li>Flag signals such as expansion, reshoring and technology in use</li></ul>
        <span class="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l18-8-8 18-2-8-8-2z"/></svg></div>
        <p class="k">Step 2 · Demand generation</p>
        <h3>Earn attention</h3>
        <p class="q">"How do we get on their radar?"</p>
        <ul><li>Run account-based campaigns to target manufacturers and plants</li><li>Tailor content by persona: engineering, operations, IT, finance</li><li>Fill webinars, trade shows and events with the right attendees</li><li>Stay visible through long, technical evaluations</li></ul>
        <span class="arrow" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div>
      <div class="flow-step">
        <div class="icon-tile"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1258e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg></div>
        <p class="k">Step 3 · Lead generation</p>
        <h3>Start the right conversations</h3>
        <p class="q">"Who do we talk to this week?"</p>
        <ul><li>Build verified prospect lists for outbound sales</li><li>Prioritise accounts by fit, project activity and readiness</li><li>Route qualified leads to reps with full context</li><li>Book meetings with decision-makers, not gatekeepers</li></ul>
      </div>
    </div>
    <p style="margin-top:28px;font-size:15px;color:var(--muted);max-width:860px">Coral Blue Data provides the manufacturing data foundation — accounts, plants, contacts, enrichment and hygiene — that powers your demand and lead generation programmes, whether you run them in-house or with an agency. <a href="/contact">Talk with a manufacturing data expert →</a></p>
  </div>
</section>

<!-- ================= PERSONAS ================= -->
<section class="section bg-white" id="personas">
  <div class="container">
    <div class="head">
      <p class="eyebrow">Buyer personas</p>
      <h2 class="h2">Who we help in the manufacturing market — and how</h2>
      <p class="lead">These personas represent the teams that sell into manufacturers most often. Each faces a different version of the 2026 market. Here is how data, demand generation and lead generation change the outcome for each.</p>
    </div>

    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,520px),1fr));gap:24px">

      <!-- Persona 1 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#1258e8"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><circle cx="41" cy="40" r="7" fill="none" stroke="#38e0f5" stroke-width="2.4"/><path d="M41 35 v-2 M41 47 v-2 M46 40 h2 M34 40 h2" stroke="#38e0f5" stroke-width="2.4" stroke-linecap="round"/></svg>
          <div class="who"><h3>The Industrial Automation Sales Leader</h3><p>Head of Sales · Robotics, automation &amp; equipment</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Win automation and equipment projects as plants modernise and reshore.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Technical, capital-heavy, multi-stakeholder decisions</li><li>Buyers wary of downtime and integration risk</li><li>New sites appearing through reshoring and expansion</li></ul>
            <span class="trend-link">Supply chain</span><span class="trend-link">Investment</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Map plant engineers, operations and procurement leaders by sub-sector, plant size and region.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Run ABM with technical proof for engineering and ROI cases for finance.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Give reps verified contacts at new and expanding sites to open territory early.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> fewer deals stalled on risk, and pipeline that follows where capacity is being built.</p>
        </div>
      </article>

      <!-- Persona 2 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#00a8ff"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><rect x="33" y="34" width="16" height="12" rx="2" fill="#061426"/><path d="M36 40 h3 M41 40 h3 M36 43 h8" stroke="#38e0f5" stroke-width="1.8" stroke-linecap="round"/></svg>
          <div class="who"><h3>The Manufacturing Software Seller</h3><p>Head of Growth · MES, ERP &amp; industrial IoT software</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Move manufacturers from AI pilots to plant-wide deployments.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Most AI stuck in pilots; scale is rare</li><li>Buyers want integration with existing systems</li><li>Hard to spot which plants are ready to scale</li></ul>
            <span class="trend-link">Technology</span><span class="trend-link">Automation</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Target by technology in use and digital maturity; reach IT, operations and plant leaders.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Share ROI-led content and reference deployments with technical and economic buyers.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Prioritise accounts ready to move from pilot to scale.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> pipeline weighted toward plants that can deploy, not just evaluate.</p>
        </div>
      </article>

      <!-- Persona 3 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#082746" stroke="#38e0f5"/><circle cx="28" cy="22" r="9" fill="#63cdf7"/><path d="M12 46 q16 -18 32 0" fill="#63cdf7"/><path d="M41 30 l8 3 v6 c0 5 -3.5 8 -8 9 c-4.5 -1 -8 -4 -8 -9 v-6z" fill="#1258e8"/><path d="M38 39 l2 2 l4 -4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
          <div class="who"><h3>The OT Cybersecurity Vendor</h3><p>Demand Gen Manager · Operational-technology security</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Reach security and operations leaders before an attack halts a line.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Manufacturing is the most-attacked sector</li><li>OT security spans IT, operations and plant teams</li><li>Legacy equipment complicates every deployment</li></ul>
            <span class="trend-link">Security</span><span class="trend-link">Technology</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Reach CISOs, OT and plant IT leaders segmented by sub-sector and plant footprint.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Educate with OT-risk and downtime-cost content aimed at each stakeholder.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Segment by technology and maturity to match your offer to each account.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> earlier conversations and a message that fits each plant's real risk profile.</p>
        </div>
      </article>

      <!-- Persona 4 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#1258e8"/><circle cx="22" cy="22" r="7" fill="#fff"/><path d="M9 44 q13 -15 26 0" fill="#fff"/><circle cx="36" cy="24" r="6" fill="#63cdf7"/><path d="M27 44 q9 -12 20 0" fill="#63cdf7"/></svg>
          <div class="who"><h3>The Industrial Staffing Partner</h3><p>Business Development · Manufacturing staffing &amp; training</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Become the go-to workforce partner for plants facing chronic shortages.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Millions of roles going unfilled through 2033</li><li>Automation changing the skills plants need</li><li>Demand varies sharply by region and sub-sector</li></ul>
            <span class="trend-link">Workforce</span><span class="trend-link">Automation</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Reach plant managers, HR and operations leaders by metro, sub-sector and plant size.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Position staffing and upskilling models to operations and finance together.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Focus outreach on regions and plants where shortages are most acute.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> more conversations with the leaders who own staffing and training budgets.</p>
        </div>
      </article>

      <!-- Persona 5 -->
      <article class="persona">
        <div class="persona-head">
          <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="#00a8ff"/><circle cx="28" cy="22" r="9" fill="#fff"/><path d="M12 46 q16 -18 32 0" fill="#fff"/><path d="M34 36 h14 v10 h-14 z" fill="#061426"/><path d="M37 36 v-3 h8 v3" stroke="#38e0f5" stroke-width="2" fill="none"/></svg>
          <div class="who"><h3>The Components &amp; MRO Supplier</h3><p>VP Sales · Parts, components &amp; MRO distribution</p></div>
        </div>
        <div class="persona-body">
          <div><p class="lbl">Goal</p><p class="goal">Win supply agreements with manufacturers as supply chains re-regionalise.</p></div>
          <div><p class="lbl">What they're facing</p>
            <ul class="pains"><li>Procurement scrutinising price, lead time and risk</li><li>Supply chains shifting with reshoring and tariffs</li><li>Long, relationship-driven supplier decisions</li></ul>
            <span class="trend-link">Supply chain</span><span class="trend-link">Investment</span></div>
          <div><p class="lbl">How we help</p>
            <div class="helps">
              <div class="help"><h4><i style="background:#1258e8"></i>Data</h4><p>Find procurement, supply-chain and maintenance leaders by sub-sector, plant and region.</p></div>
              <div class="help"><h4><i style="background:#00a8ff"></i>Demand gen</h4><p>Lead with reliability, lead-time and total-cost content for procurement and operations.</p></div>
              <div class="help"><h4><i style="background:#38e0f5"></i>Lead gen</h4><p>Build territory lists that separate high-fit accounts from unlikely buyers.</p></div>
            </div>
          </div>
          <p class="outcome"><strong>Outcome:</strong> a pipeline built on accounts actively reshaping their supply base.</p>
        </div>
      </article>
    </div>
    <p style="margin-top:28px;font-size:13px;color:var(--faint)">Personas are illustrative composites based on common manufacturing go-to-market teams, not specific individuals.</p>
  </div>
</section>

<!-- ================= BUYING COMMITTEE ================= -->
<section class="section bg-dark" id="committee">
  <div class="container">
    <div class="head">
      <p class="eyebrow">The manufacturing buying group</p>
      <h2 class="h2">Who decides inside manufacturing organisations</h2>
      <p class="lead">Most manufacturing purchases now pass through several hands across plant and HQ. Effective demand and lead generation speaks to each of them in their own terms.</p>
    </div>
    <div class="roles">
      <div class="role"><h3>Engineering &amp; plant operations</h3><p>Plant managers, process and manufacturing engineers judge fit, reliability and line impact.</p></div>
      <div class="role"><h3>Finance &amp; executives</h3><p>CFOs, VPs of operations and plant leadership weigh capital cost, payback and risk.</p></div>
      <div class="role"><h3>Procurement &amp; supply chain</h3><p>Compare price, lead time, alternatives and supplier risk across sites.</p></div>
      <div class="role"><h3>IT &amp; OT security</h3><p>CIOs, OT and plant IT leaders assess integration, connectivity and cyber risk.</p></div>
      <div class="role"><h3>Quality &amp; compliance</h3><p>Quality and EHS leaders judge standards, traceability and regulatory fit.</p></div>
    </div>
    <div style="margin-top:48px;display:flex;flex-wrap:wrap;gap:14px;align-items:center">
      <a class="btn btn-primary" href="/contact">Talk with a manufacturing expert →</a>
      <span style="font-size:14px;color:var(--on-dark-3)">Sub-sectors, plant types and data attributes — tell us who you target and we'll scope it.</span>
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="section bg-white" id="faq">
  <div class="container faq-wrap">
    <div class="side">
      <p class="eyebrow">FAQs</p>
      <h2 class="h2">Manufacturing industry FAQs</h2>
      <p class="lead" style="font-size:16px">Planning a manufacturing go-to-market? <a href="/contact">Talk with an expert</a>.</p>
    </div>
    <div class="list">
      <details open><summary>What are the biggest trends in manufacturing in 2026?<span class="plus" aria-hidden="true">+</span></summary><p>The most discussed trends are a widening labour and skills gap, AI moving onto the factory floor, tariff-driven reshoring, record smart-factory investment, and manufacturing's position as the most-attacked sector for cybersecurity.</p></details>
      <details><summary>How do these trends affect companies that sell to manufacturers?<span class="plus" aria-hidden="true">+</span></summary><p>Buying is technical and multi-stakeholder, and downtime risk raises the bar on proof. Expect longer, committee-led cycles across plant, IT, procurement and finance, plus a security and vendor-risk review on most purchases.</p></details>
      <details><summary>What is OT security and why does it matter in manufacturing?<span class="plus" aria-hidden="true">+</span></summary><p>Operational-technology (OT) security protects the systems that run production lines. It matters because manufacturing is the most-attacked sector, downtime is costly, and connected smart factories expand the attack surface.</p></details>
      <details><summary>What is the difference between demand generation and lead generation?<span class="plus" aria-hidden="true">+</span></summary><p>Demand generation creates interest across your target market. Lead generation captures and qualifies specific accounts and people ready for a sales conversation. In manufacturing, both depend on accurate account, plant and contact data.</p></details>
      <details><summary>How do you market to manufacturers and plants?<span class="plus" aria-hidden="true">+</span></summary><p>Start by mapping target accounts and their full buying committee across sites and HQ. Then tailor messages by role — technical proof for engineering, ROI for finance, risk for IT/OT — and stay visible through long, technical evaluations with account-based outreach.</p></details>
      <details><summary>How does Coral Blue Data support manufacturing demand and lead generation?<span class="plus" aria-hidden="true">+</span></summary><p>We supply the manufacturing data foundation: account, plant and contact data across sub-sectors, plus enrichment, cleansing and verification to keep it current. Your marketing and sales teams, or your agency, use it to target campaigns and outreach precisely.</p></details>
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
        <h2 class="h2">Build a manufacturing go-to-market that fits 2026</h2>
        <p style="margin-top:16px;font-size:17px;color:var(--on-dark-2);max-width:620px">Tell us who you sell to and what you're trying to grow. We'll show you the manufacturers, plants and buying groups that fit, and how to put that data to work in your demand and lead generation.</p>
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
        <li><a href="https://manufacturingdigital.com/news/deloitte-2026-manufacturing-outlook" target="_blank" rel="noopener noreferrer">Deloitte — 2026 Manufacturing Industry Outlook (workforce, automation)</a></li>
        <li><a href="https://www.parsec-corp.com/news-and-events/parsec-survey-72-of-manufacturers-have-adopted-ai-but-only-10-have-done-so-at-scale" target="_blank" rel="noopener noreferrer">Parsec — 2026 State of Manufacturing report (AI adoption)</a></li>
        <li><a href="https://www.parsec-corp.com/blog/how-manufacturers-around-the-world-are-responding-to-tariffs" target="_blank" rel="noopener noreferrer">Parsec — Manufacturers' response to tariffs (reshoring)</a></li>
        <li><a href="https://manufacturingleadershipcouncil.com/survey-smart-factories-enter-the-execution-era/" target="_blank" rel="noopener noreferrer">Manufacturing Leadership Council — 2026 Smart Factories survey</a></li>
        <li><a href="https://www.manufacturingdive.com/news/manufacturing-sector-saw-most-cyberattacks-in-2025-IBM-X-Force/813063/" target="_blank" rel="noopener noreferrer">IBM X-Force Threat Intelligence Index, via Manufacturing Dive</a></li>
      </ol>
    </div>
  </div>
</section>`;

const JSON_LD = `{
  "@context": "https://schema.org",
  "@graph": [
    {"@type":"WebPage","@id":"https://coralbluedata1.vercel.app/industries/manufacturing#webpage","url":"https://coralbluedata1.vercel.app/industries/manufacturing","name":"Manufacturing Industry Marketing & Growth Solutions | Coral Blue Data","description":"Manufacturing in 2026: a 1.9M worker gap, AI on the factory floor, a reshoring surge, record smart-factory investment and top-ranked cyber risk, and how data, demand and lead generation help industrial vendors grow.","dateModified":"2026-11-03","publisher":{"@type":"Organization","name":"Coral Blue Data","url":"https://coralbluedata1.vercel.app/"}},
    {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://coralbluedata1.vercel.app/"},{"@type":"ListItem","position":2,"name":"Industries","item":"https://coralbluedata1.vercel.app/industries"},{"@type":"ListItem","position":3,"name":"Manufacturing","item":"https://coralbluedata1.vercel.app/industries/manufacturing"}]},
    {"@type":"FAQPage","mainEntity":[
      {"@type":"Question","name":"What are the biggest trends in manufacturing in 2026?","acceptedAnswer":{"@type":"Answer","text":"A widening labour and skills gap, AI moving onto the factory floor, tariff-driven reshoring, record smart-factory investment, and manufacturing's position as the most-attacked sector for cybersecurity."}},
      {"@type":"Question","name":"What is OT security and why does it matter in manufacturing?","acceptedAnswer":{"@type":"Answer","text":"Operational-technology (OT) security protects the systems that run production lines. It matters because manufacturing is the most-attacked sector, downtime is costly, and connected smart factories expand the attack surface."}},
      {"@type":"Question","name":"What is the difference between demand generation and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Demand generation creates interest across your target market. Lead generation captures and qualifies specific accounts and people ready for a sales conversation. In manufacturing, both depend on accurate account, plant and contact data."}},
      {"@type":"Question","name":"How does Coral Blue Data support manufacturing demand and lead generation?","acceptedAnswer":{"@type":"Answer","text":"Coral Blue Data supplies account, plant and contact data across manufacturing sub-sectors, plus enrichment, cleansing and verification, which marketing and sales teams use to target campaigns and outreach."}}
    ]}
  ]
}`;

export default function ManufacturingIndustryPage() {
  return <IndustryLanding bodyHtml={PAGE_BODY} jsonLd={JSON_LD} />;
}
