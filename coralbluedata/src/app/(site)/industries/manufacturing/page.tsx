import type { Metadata } from "next";
import { ManufacturingLanding } from "./ManufacturingLanding";

/**
 * Manufacturing industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/manufacturing.
 *
 * Markup, scoped styling and structured data live in ./content; the
 * interactions (persona tabs, count-up, reduced-motion SVG pause) are handled
 * by the ManufacturingLanding client component.
 */
export const metadata: Metadata = {
  title: "Manufacturing Industry Marketing & Growth Solutions",
  description:
    "Manufacturing today: record automation, the cost of downtime, a widening skills gap and bigger buying committees. See how demand generation and lead generation help companies that sell to manufacturers grow.",
  alternates: { canonical: "/industries/manufacturing" },
  openGraph: {
    title: "Manufacturing Industry: Trends, Buyer Shifts & Growth Solutions",
    description:
      "What the manufacturing market looks like today and how data-driven demand and lead generation help companies that sell into it.",
    type: "website",
    url: "/industries/manufacturing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manufacturing Industry Growth Solutions | Coral Blue Data",
    description:
      "Manufacturing trends and how data, demand generation and lead generation help industrial vendors grow.",
  },
};

export default function ManufacturingIndustryPage() {
  return <ManufacturingLanding />;
}
