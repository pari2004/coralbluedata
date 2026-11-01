import { env } from "@/env";

/**
 * Organization JSON-LD. Only emits verifiable facts (name, site URL, and any
 * contact point / social links the owner has actually set in Settings).
 * No fabricated ratings, founding dates, or address unless configured.
 */
export function OrganizationJsonLd({
  companyName,
  email,
  social,
}: {
  companyName: string;
  email?: string | null;
  social?: { platform: string; url: string }[];
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    url: env.APP_URL,
  };
  if (email) data.contactPoint = { "@type": "ContactPoint", email, contactType: "sales" };
  const sameAs = (social ?? []).map((s) => s.url).filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, serialized server-side from our own data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
