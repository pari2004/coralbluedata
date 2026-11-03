import type { Metadata } from "next";
import { HealthcareLanding } from "./HealthcareLanding";

/**
 * Healthcare industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/healthcare.
 *
 * Markup, scoped styling and structured data live in ./content; the
 * interactions (tabs, reveal, count-up, chart bars, lanes) are handled by
 * the HealthcareLanding client component.
 */
export const metadata: Metadata = {
  title: "Healthcare Industry Marketing & Growth Solutions",
  description:
    "Healthcare today: thin margins, Medicaid cuts, workforce gaps and fast AI adoption. See how data, demand generation and lead generation help companies that sell into healthcare grow.",
  alternates: { canonical: "/industries/healthcare" },
  openGraph: {
    title: "Healthcare Industry: Trends, Buyer Shifts & Growth Solutions",
    description:
      "What the healthcare market looks like today and how data-driven demand and lead generation help companies that sell into it.",
    type: "website",
    url: "/industries/healthcare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Industry Growth Solutions | Coral Blue Data",
    description:
      "Healthcare trends and how data, demand generation and lead generation help healthcare vendors grow.",
  },
};

export default function HealthcareIndustryPage() {
  return <HealthcareLanding />;
}
