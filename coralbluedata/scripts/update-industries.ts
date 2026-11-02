/**
 * Targeted, idempotent update of the Industries nav/content list.
 * Replaces ONLY the seeded industries rows (isSeed=true); leaves all other
 * content (pages, services, articles, case studies, testimonials) untouched.
 *
 *   npx tsx scripts/update-industries.ts
 */
import { existsSync } from "node:fs";
if (existsSync(".env.local")) process.loadEnvFile(".env.local");

const { db } = await import("@/db");
const schema = await import("@/db/schema");
const { eq } = await import("drizzle-orm");
const { slugify } = await import("@/lib/utils");

const uid = () => crypto.randomUUID();
const PLACEHOLDER = "Seed placeholder — edit in /admin before publishing.";

type IndustrySeed = {
  title: string;
  icon: string;
  summary: string;
  /** Optional long-form page copy. Falls back to summary + placeholder. */
  body?: string;
};

const body = (...paragraphs: string[]) => paragraphs.join("\n\n");

const HEALTHCARE_BODY = body(
  "Healthcare is a sector where getting the audience right matters more than almost anywhere else. The people who specify, approve and buy — clinicians, department heads, administrators and procurement teams — sit inside complex organisations with long approval chains. Reaching the right person, in the right facility, with context that respects how the sector works is what turns outreach into a conversation.",
  "The sector also carries dynamics that haven't changed in years: long sales cycles, hard-to-reach gatekeepers, cautious adoption of new technology, and steady cost pressure. The answer isn't more volume — it's precision. Mapping your total addressable market properly, then focusing effort on the accounts and personas most likely to engage, is what drives better appointments and higher-quality pipeline.",
  "Begin with the questions a decision-maker would ask. Can you get a clear picture of ready-to-convert medical and pharma buyers by location? How do you align sales and marketing around a single physician or facility persona? Can you understand how products are actually selected inside healthcare institutions, and who the real influencers are? And how do you combine inbound and outbound tactics for targeting that holds up in a regulated sector?",
  "A few bottlenecks are worth addressing head-on: the growing consumerisation of healthcare and the diversifying expectations that come with it; delivering a consistent experience across touchpoints with a varied marketing mix; earning sign-off for equipment and devices by backing claims with credible evidence; and staying visible on the buyer's radar long enough to convert and retain. Good data underpins every one of these.",
  "We help you reach roles across the care continuum — physicians by specialty, nurses and directors of nursing, pharmacists, practice managers, hospital and health-system administrators, heads of department, and C-level leaders such as CMOs and CNOs. Just as important are the people who now drive buying decisions: value analysis committees (VACs), procurement and purchasing officers, hospital equipment buyers, technology assessment teams, and directors of departments and diagnostic centres. Modern healthcare purchases are rarely made by a single physician — they run through cost-driven administrators and data-driven committees, so your targeting has to account for the whole buying group.",
  "Depending on your requirements, records can include fields such as full name, role and specialty, organisation name and type, business email and phone, facility and employee size, geographic location (state, ZIP, country), LinkedIn profile, and NAICS classification. These attributes let you build precise segments — by specialty, facility type, size and region — and enrich the records you already hold so sales and marketing work from the same picture.",
  "Our healthcare coverage spans a wide range of specialties and facility types, from primary care and the major physician specialties through to nursing, pharmacy, diagnostics, therapy and allied-health roles, as well as hospitals, clinics, long-term care, urgent care and specialist centres. If the exact specialty or facility segment you need isn't obvious, we can scope it with you rather than hand you a generic list.",
  "Because healthcare data is sensitive, it should be sourced and handled with sector-appropriate care — accuracy, permissioning and compliance are not optional extras. We focus on current, business-relevant professional contact information rather than anything that strays into protected territory.",
  "When marketing and sales work from the same data, the results compound: more immersive content that books direct meetings, intent-rich prospect data that makes sales operations efficient, and the context reps need to build genuine rapport with influencers. Clean, current data shortens the path to the right conversations and spares your team from chasing dead records. If you'd like a sample for a specific specialty, facility type or region, get in touch and we'll scope it with you.",
);

const TECHNOLOGY_BODY = body(
  "Knowing your technology customers well is the foundation of a reliable conversion funnel. The teams that buy, build and run software have distinct purchase habits, specific pain points, and clear signals when they are actively evaluating a product. Targeting against those signals — rather than a generic firmographic list — is what separates a campaign that lands from one that gets ignored.",
  "The dynamics of technology buying are their own challenge: long evaluation cycles, multiple technical and commercial stakeholders, and buyers who tune out anything that isn't relevant to their stack. Precision beats volume here. Mapping your total addressable market accurately, then concentrating effort on the accounts showing real intent, is what produces better demos and a healthier pipeline.",
  "Start with the questions that define your audience: Who is actually purchasing IT services and solutions? Which accounts are evaluating areas like network security, virtualisation, cloud backup or managed workstations? How do you separate warm, in-market leads from the rest? Where are the procurement decision-makers located, and what is the realistic size of the opportunity for your product?",
  "A few bottlenecks are worth tackling head-on: adjusting to shifting IT-buyer behaviour; reaching niche audiences buying specific services rather than broad job-title lists; shortening the path from lead to deal; and connecting with the C-level sponsors who ultimately approve technology spend. Reliable data underpins every one of these.",
  "We help you reach the people who make and influence technology decisions — IT directors and managers, DevOps and cloud engineers, security specialists, database and systems administrators, front-end and software developers, system architects, IT procurement managers, and C-level roles such as CIOs, CTOs and CISOs. You can segment by role, seniority, function and location so your outreach reaches the right person rather than the switchboard.",
  "Depending on your requirements, records can include fields such as full name, job title, business email, phone, company name and website, LinkedIn profile, employee and revenue size, geographic location, and SIC/NAICS industry codes. These attributes let you build precise segments and enrich what you already hold in your CRM.",
  "Install-base and technology-adoption data lets you target accounts by the software and infrastructure they already run — useful for competitive displacement, integration plays and stack-based segmentation. Our coverage spans common enterprise categories such as ERP and CRM platforms, cloud and infrastructure, data and analytics, networking, storage and backup, and communications and collaboration tools. Combined with intent signals, it helps you focus budget on the accounts most likely to be in-market.",
  "Technology sales cycles tend to be long and involve several stakeholders, so aligning sales and marketing around the same account picture pays off: content that books real meetings, intent-rich prospect data for efficient sales operations, and the context reps need to open credible conversations. Accurate, current contact data shortens the path to the right people and cuts time wasted on dead records. If you'd like a sample for a specific segment, get in touch and we'll scope it with you.",
);

const EDUCATION_BODY = body(
  "Education covers a wide range of organisations — from K-12 schools and districts to universities, colleges and private training providers — each with its own budget cycle, decision-making structure and procurement rules. A list that treats them all the same rarely performs. Matching your message to the institution type and the role you're reaching is what makes the difference.",
  "The sector has dynamics that shape every campaign: budgets tied to the academic calendar and public funding, formal tender and approval processes, and committees rather than individuals making the call. Precision beats volume here too — mapping your addressable market by institution type and region, then focusing on the accounts that fit, is what turns outreach into meetings.",
  "The questions worth answering first: Are you selling into K-12, higher education, or professional and vocational training? Are the decisions made at the institution, the district, or a central procurement body? Are you reaching academic leadership, administration and operations, or the IT teams who evaluate and deploy technology? And which regions and institution sizes matter to you?",
  "A few bottlenecks are worth addressing: navigating multi-stakeholder approval chains; timing outreach around term dates and budget windows; reaching the person who actually scopes a purchase rather than a general inbox; and demonstrating value in a sector that is cautious with public money. Good data makes each of these easier.",
  "We help you reach roles across the sector — superintendents and principals, deans and department heads, registrars, bursars and operations leads, procurement officers, and the IT directors and managers who own technology decisions in education. You can segment by institution type, enrolment size, funding model and location so your message reaches the right desk.",
  "Depending on your requirements, records can include fields such as full name and role, institution name and type, business contact details, enrolment or size band, geographic location, and relevant classifications. These attributes let you build targeted segments and keep your existing records current.",
  "Our coverage spans the breadth of the sector — public and private schools, school districts, colleges and universities, and professional and corporate training providers — so you can target as narrowly or as broadly as the opportunity requires.",
  "Education buying rewards patience and precision: reach the right contact at the right point in the calendar, with a message that speaks to how the institution works. Accurate, current data keeps your pipeline moving instead of stalling on bounced records. If you'd like a sample for a particular institution type, region or role, get in touch and we'll scope it with you.",
);

const MANUFACTURING_BODY = body(
  "Manufacturing is not one audience but many: discrete and process manufacturers, automotive, industrial equipment, consumer goods, electronics and more, each with distinct operations and buying teams. Targeting by sub-sector, function and company size — rather than a single catch-all list — is what keeps outreach relevant to the person reading it.",
  "The sector's buying dynamics are demanding: capital budgets, technical evaluation, long lead times and several sign-offs before anything is approved. Volume outreach gets lost in that process. Precision wins — map your addressable market by sub-sector and size, then concentrate on the accounts and stakeholders who actually move a purchase forward.",
  "Start with the questions that define the account: Which sub-sectors fit your product? Are you selling into operations and the plant floor, into engineering and quality, or into procurement and supply chain? Are you reaching smaller shops or large multi-site manufacturers? And which regions make up your addressable market?",
  "A few bottlenecks are worth addressing head-on: reaching both the technical evaluators and the commercial approvers in the same account; navigating multi-site structures where buying can be central or local; timing outreach around capital-budget and maintenance cycles; and standing out to buyers who are cautious with large spend. Reliable data underpins all of these.",
  "We help you reach the roles that run and buy for manufacturing operations — plant and operations managers, production and supply-chain leads, procurement and purchasing managers, process, quality and design engineers, maintenance and facilities leads, and C-level roles such as COOs. Segmentation by sub-sector, function, company size and location keeps the list tight.",
  "Depending on your requirements, records can include fields such as full name and job title, company name and website, business email and phone, employee and revenue size, geographic location, and SIC/NAICS codes that pin down the sub-sector precisely. These attributes let you build targeted segments and enrich what you already hold.",
  "Our coverage spans the breadth of manufacturing — automotive and transport equipment, industrial machinery and equipment, electronics and components, consumer and packaged goods, chemicals and materials, and more — so you can target a single niche or the whole sector.",
  "Manufacturing purchases reward sellers who map the buying group early rather than guessing at it. Reaching the right mix of technical and commercial stakeholders, with accurate contacts, keeps a complex pursuit on track. If you'd like a sample for a specific sub-sector, function or region, get in touch and we'll scope it with you.",
);

const PHARMACEUTICAL_BODY = body(
  "Pharmaceutical organisations run on tightly regulated, specialised functions — research and development, clinical, regulatory, manufacturing, quality and commercial — and the people in them are precise about who they'll engage with. Reaching the right function with relevant context matters far more than volume in this sector.",
  "The buying dynamics are demanding: evidence-driven decisions, strict regulatory constraints, long evaluation cycles and multiple functions weighing in. Broad outreach rarely survives that scrutiny. Precision wins — map your addressable market by company type and function, then focus on the accounts and roles that genuinely influence the decision.",
  "The questions to answer first: Are you targeting large pharma, generics manufacturers, biotech, or the CROs and CMOs that serve them? Are you selling into R&D and clinical, into regulatory and quality, into production and supply, or into commercial and medical affairs? And which regions and company sizes are in scope?",
  "A few bottlenecks are worth addressing head-on: reaching specialised functions with messaging they'll take seriously; aligning with formal evaluation and compliance processes; connecting with the right combination of scientific, operational and commercial stakeholders; and standing out without overstepping the sector's regulatory lines. Reliable, well-sourced data underpins each of these.",
  "We help you reach roles across the pharmaceutical value chain — R&D and clinical leaders, regulatory affairs and quality (QA/QC) professionals, production and manufacturing managers, supply-chain and procurement teams, medical affairs, and C-level leadership. Segmentation by company type, function, size and location keeps outreach focused.",
  "Depending on your requirements, records can include fields such as full name, role and function, organisation name and type, business email and phone, company size, geographic location, and relevant industry classifications. These attributes support precise segments and cleaner CRM records.",
  "Our coverage spans the breadth of the sector — large and mid-size pharmaceutical companies, generics manufacturers, biotech firms, and the contract research and manufacturing organisations (CROs and CMOs) that serve them — so you can target a specific niche or the wider value chain.",
  "Given how regulated the sector is, data should be sourced and handled responsibly, with accuracy and permissioning treated as core requirements rather than afterthoughts — we focus on current, business-relevant professional contact information. Pharmaceutical sales cycles are long and evidence-driven, so reaching the right function early, with accurate contacts, is what keeps a complex pursuit on track. If you'd like a sample for a specific function, company type or region, get in touch and we'll scope it with you.",
);

const MEDICAL_DEVICES_BODY = body(
  "Medical-device companies sit at the intersection of engineering, regulation and healthcare buying. Whether you're selling into the manufacturers themselves or to the clinicians and procurement teams who specify and buy devices, the audience is specialised and the approvals are rigorous — so precision in your list pays off quickly.",
  "The buying dynamics combine the toughest parts of healthcare and manufacturing: clinical evidence requirements, regulatory scrutiny, technical evaluation, and procurement committees that weigh cost against outcomes. Broad outreach doesn't survive that. Precision wins — map your addressable market by device category and account type, then focus on the stakeholders who genuinely shape the decision.",
  "Begin with the questions that frame the account: Are you targeting device manufacturers, or the hospitals and clinics that purchase devices? Which device categories are relevant? Are you reaching R&D and engineering, regulatory and quality, procurement, or the clinical end-users who influence selection? And which regions and company sizes matter?",
  "A few bottlenecks are worth addressing head-on: engaging both the clinical influencers and the procurement/value-analysis teams who approve spend; backing claims with the evidence a regulated buyer expects; coordinating a buying group that spans technical, clinical and commercial roles; and timing outreach around evaluation and budget cycles. Reliable data underpins each of these.",
  "We help you reach roles across the sector — biomedical and R&D engineers, regulatory affairs and quality professionals, product managers, procurement and supply-chain teams, hospital and health-system buyers and value-analysis committees, and C-level leadership. Segmentation by device category, role, company size and location keeps the list relevant.",
  "Depending on your requirements, records can include fields such as full name and role, organisation name and type, business email and phone, company size, geographic location, and relevant industry classifications — enough to build targeted segments and enrich what you already hold.",
  "Our coverage spans the breadth of the sector — from diagnostic and imaging equipment to surgical instruments, implants, monitoring and therapeutic devices, and the manufacturers and distributors behind them — so you can target a specific category or the wider market.",
  "Because the sector touches patient care, data should be sourced and handled responsibly, with accuracy and permissioning treated as core requirements. Device purchases involve technical evaluation, regulatory considerations and clinical input, so reaching the right mix of stakeholders early is essential — accurate data lets you map the buying group instead of guessing at it. If you'd like a sample for a specific device category, role or region, get in touch and we'll scope it with you.",
);

const industries: IndustrySeed[] = [
  { title: "Healthcare", icon: "stethoscope", summary: "Connect with healthcare organisations and professionals, handled with sector-appropriate care.", body: HEALTHCARE_BODY },
  { title: "Technology", icon: "cpu", summary: "Reach technology companies and the teams that buy, build and run software.", body: TECHNOLOGY_BODY },
  { title: "Education", icon: "graduation-cap", summary: "Engage schools, universities and training providers across the education sector.", body: EDUCATION_BODY },
  { title: "Manufacturing", icon: "factory", summary: "Target manufacturers across sub-sectors, functions and company sizes.", body: MANUFACTURING_BODY },
  { title: "Pharmaceutical", icon: "pill", summary: "Reach pharmaceutical companies and the teams driving research, production and distribution.", body: PHARMACEUTICAL_BODY },
  { title: "Medical Devices", icon: "heart-pulse", summary: "Connect with medical-device manufacturers and the professionals who specify and buy.", body: MEDICAL_DEVICES_BODY },
];

console.log("🔄 Replacing seeded industries…");

await db.delete(schema.industries).where(eq(schema.industries.isSeed, true));

for (const [i, ind] of industries.entries()) {
  await db.insert(schema.industries).values({
    id: uid(),
    slug: slugify(ind.title),
    title: ind.title,
    icon: ind.icon,
    summary: ind.summary,
    body: ind.body ?? `${ind.summary}\n\n${PLACEHOLDER}`,
    seoDescription: ind.summary,
    status: "published",
    order: i,
    isSeed: true,
  });
  console.log(`   ✓ ${ind.title}`);
}

console.log("✅ Industries updated.");
process.exit(0);
