import type { Metadata } from "next";
import { TechnologyLanding } from "./TechnologyLanding";

/**
 * Technology industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/technology.
 *
 * Markup, scoped styling and structured data live in ./content; the
 * interactive tabs are handled by the TechnologyLanding client component.
 */
export const metadata: Metadata = {
  title: "Technology Industry Marketing & Growth Solutions",
  description:
    "Tech in 2026: $6.37T IT spend, an AI infrastructure boom, bigger buying groups and self-serve buyers. See how data, demand generation and lead generation help technology companies grow.",
  alternates: { canonical: "/industries/technology" },
  openGraph: {
    title: "Technology Industry: 2026 Trends, Buyer Shifts & Growth Solutions",
    description:
      "What the technology market looks like in 2026 and how data-driven demand and lead generation help tech vendors reach the full buying group.",
    type: "website",
    url: "/industries/technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Industry Growth Solutions | Coral Blue Data",
    description:
      "2026 tech trends and how data, demand generation and lead generation help technology companies grow pipeline.",
  },
};

export default function TechnologyIndustryPage() {
  return <TechnologyLanding />;
}
