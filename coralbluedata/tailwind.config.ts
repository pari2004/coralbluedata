import type { Config } from "tailwindcss";

/**
 * Coral Blue Data — bespoke design system.
 * Palette: midnight navy + deep ocean blue, a coral-blue (teal/cyan) accent,
 * an electric-blue secondary accent, and cool neutral surfaces.
 * Colours are exposed as CSS variables (see styles/globals.css) so site-wide
 * theme settings in the CMS can later adjust them without a rebuild.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Deep navy / ocean — the dark foundation (Midnight Navy → Deep Ocean)
        ink: {
          950: "#030b18",
          900: "#061426", // Midnight Navy
          800: "#082746", // Deep Ocean
          700: "#0c3a63",
          600: "#124d7f",
          500: "#1a6099",
        },
        // Brand accent family — Electric Blue + Cyan (the primary accent across the UI).
        // Kept under the `coral` key so existing coral-* usages adopt the new brand blue
        // without structural edits; the literal coral colour lives in `accent` below.
        coral: {
          50: "#ecf8ff",
          100: "#d4efff",
          200: "#a9dfff",
          300: "#63cdf7", // cyan-leaning, bright on dark
          400: "#1fb6f2",
          500: "#00a8ff", // Electric Blue — primary
          600: "#0b86e6",
          700: "#1565d6", // strong link on light surfaces
          800: "#1a4fab",
          900: "#183f88",
        },
        // Royal Blue — secondary accent / depth
        electric: {
          50: "#eef3ff",
          100: "#dde7fe",
          200: "#c0d2fd",
          300: "#93b2fb",
          400: "#5b85f6",
          500: "#1258e8", // Royal Blue
          600: "#0f47c4",
          700: "#0e3a9e",
        },
        // Cyan highlight (Electric Cyan brand family)
        cyan: {
          300: "#5ee8f7",
          400: "#38e0f5",
          500: "#20C5F5", // Electric Cyan — brand
          600: "#12c7e6",
        },
        // Restrained coral accent (used sparingly for emphasis)
        accent: {
          300: "#ffb3ab",
          400: "#ff948a",
          500: "#ff786d", // Coral Accent
          600: "#ef5b4f",
          700: "#d1443a",
        },
        // Cool neutral surfaces & text
        mist: {
          50: "#f4f7fb", // Cool Gray
          100: "#e9eff7",
          200: "#d7e0ec",
          300: "#bccbdd",
          400: "#94a3b8",
          500: "#64748b", // Muted Text
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f1a2b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        // Editorial fluid scale
        "display-2xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-xl": ["clamp(2.5rem, 5.5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.6rem, 2.6vw, 2.25rem)", { lineHeight: "1.12", letterSpacing: "-0.015em" }],
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,20,38,0.05), 0 14px 34px -14px rgba(6,20,38,0.14)",
        lift: "0 28px 64px -24px rgba(6,20,38,0.40)",
        glow: "0 0 0 1px rgba(0,168,255,0.22), 0 22px 60px -20px rgba(18,88,232,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 1px 1px, rgba(148,166,191,0.18) 1px, transparent 0)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
