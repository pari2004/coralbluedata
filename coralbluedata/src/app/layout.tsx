import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Sora: a refined geometric sans for oversized, confident enterprise headings.
const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL ?? "http://localhost:3000"),
  title: {
    default: "Coral Blue Data — B2B Data Intelligence",
    template: "%s · Coral Blue Data",
  },
  description:
    "Coral Blue Data helps B2B teams find the right companies and contacts, keep records accurate, and act on better sales data.",
  openGraph: {
    type: "website",
    siteName: "Coral Blue Data",
    title: "Coral Blue Data — B2B Data Intelligence",
    description:
      "Find the right companies and contacts, keep records accurate, and act on better sales data.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#061426",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        {/* Progressive enhancement flag: enables reveal animations only when JS runs. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
