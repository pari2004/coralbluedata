import type { Metadata } from "next";
import { EducationLanding } from "./EducationLanding";

/**
 * Education industry landing page — bespoke, hand-designed marketing page
 * (not the generic CMS `industries/[slug]` template). As a static route
 * segment it takes precedence over `[slug]` for /industries/education.
 *
 * Markup and scoped styling live in ./content; the interactions (two
 * accessible tablists, reveal, count-up, chart bars) are handled by the
 * EducationLanding client component.
 */
export const metadata: Metadata = {
  title: "Education Data Solutions",
  description:
    "Verified B2B education data to reach district leaders, school principals, university administrators, faculty and procurement teams across K-12 and higher education.",
  alternates: { canonical: "/industries/education" },
  openGraph: {
    title: "Education Data Solutions · Coral Blue Data",
    description:
      "Reach decision-makers across K-12 and higher education with verified, segmented B2B education data.",
    type: "website",
    url: "/industries/education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Data Solutions · Coral Blue Data",
    description:
      "Verified B2B education data to reach leaders across K-12 and higher education.",
  },
};

export default function EducationIndustryPage() {
  return <EducationLanding />;
}
