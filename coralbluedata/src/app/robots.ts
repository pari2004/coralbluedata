import type { MetadataRoute } from "next";
import { env } from "@/env";

export default function robots(): MetadataRoute.Robots {
  const base = env.APP_URL.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Keep the admin app and APIs out of the index.
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
