"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

export type NavLink = { label: string; href: string };
export type ServiceLink = { title: string; slug: string; summary: string; icon: string };
export type IndustryLink = { label: string; href: string; icon: string };

export function HeaderClient({
  navLinks,
  services,
  industries,
  cta,
}: {
  navLinks: NavLink[];
  services: ServiceLink[];
  industries: IndustryLink[];
  cta: { primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "solutions" | "industries">(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock scroll when the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // "Explore Solution" sits beside the logo, outside the main nav group.
  const exploreLink = navLinks.find((l) => l.label === "Explore Solution");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium",
        scrolled
          ? "border-b border-mist-200/80 bg-mist-50/90 backdrop-blur-md"
          : "border-b border-white/5 bg-transparent",
      )}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div
        className={cn(
          "container flex items-center justify-between gap-4 transition-[height] duration-500 ease-premium",
          scrolled ? "h-16 md:h-20" : "h-[4.5rem] md:h-24",
        )}
      >
        {/* Left cluster: logo + the "Explore Solution" entry-point link. */}
        <div className="flex items-center gap-4 lg:gap-6">
        {/* Logo: full-colour artwork on the light (scrolled) bar, a white-lettered
            variant (blue icon + "BLUE" kept) over the dark hero. Both are stacked
            and cross-fade on scroll. Images are tightly cropped, so the height
            classes are the real visible logo size. */}
        <Link
          href="/"
          aria-label="Coral Blue Data home"
          className={cn(
            "relative block shrink-0 aspect-[711/138] transition-[height] duration-500 ease-premium",
            scrolled ? "h-10 md:h-12 lg:h-10 xl:h-12" : "h-11 md:h-14 lg:h-11 xl:h-14",
          )}
        >
          <Image
            src="/images/brand/coralbluedata-logo-light.png"
            alt="Coral Blue Data — Data Driven Solution"
            fill
            priority
            sizes="(min-width: 1280px) 330px, (min-width: 768px) 290px, 230px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              scrolled ? "opacity-0" : "opacity-100",
            )}
          />
          <Image
            src="/images/brand/coralbluedata-logo.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="(min-width: 1280px) 330px, (min-width: 768px) 290px, 230px"
            className={cn(
              "object-contain object-left transition-opacity duration-500",
              scrolled ? "opacity-100" : "opacity-0",
            )}
          />
        </Link>

          {exploreLink && (
            <Link
              href={exploreLink.href}
              className={cn(
                "hidden rounded-lg px-3 py-2 text-sm font-semibold transition-colors xl:inline-flex",
                scrolled ? "text-ink-700 hover:text-coral-700" : "text-mist-100 hover:text-white",
              )}
            >
              {exploreLink.label}
            </Link>
          )}
        </div>

        {/* Desktop nav */}
        <nav
          className={cn(
            "hidden items-center gap-1 xl:flex",
            scrolled ? "text-ink-700" : "text-mist-100",
          )}
          aria-label="Primary"
        >
          {navLinks
            .filter((l) => l.label !== "Explore Solution")
            .map((l) =>
            l.label === "Services" ? (
              <MenuTrigger
                key={l.label}
                label="Services"
                open={openMenu === "solutions"}
                onOpen={() => setOpenMenu("solutions")}
                scrolled={scrolled}
              />
            ) : l.label === "Industries" ? (
              <MenuTrigger
                key={l.label}
                label="Industries"
                open={openMenu === "industries"}
                onOpen={() => setOpenMenu("industries")}
                scrolled={scrolled}
              />
            ) : (
              <TopLink key={l.label} href={l.href} scrolled={scrolled}>
                {l.label}
              </TopLink>
            ),
          )}
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-3 xl:flex">
          <Link
            href={cta.secondaryHref}
            className={cn(
              "text-sm font-semibold transition-colors",
              scrolled ? "text-ink-700 hover:text-coral-700" : "text-mist-100 hover:text-white",
            )}
          >
            {cta.secondaryLabel}
          </Link>
          <Link href={cta.primaryHref} className="btn-primary">
            {cta.primaryLabel}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-lg xl:hidden",
            scrolled ? "text-ink-800" : "text-white",
          )}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Desktop mega panels */}
      {openMenu === "solutions" && (
        <MegaPanel>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 md:grid-cols-3 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-mist-100"
              >
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-coral-500/10 text-coral-600">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink-900 group-hover:text-coral-700">
                    {s.title}
                  </span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-mist-500">
                    {s.summary}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-mist-200 pt-4">
            <p className="text-sm text-mist-600">Not sure which fits? We&apos;ll help you scope it.</p>
            <Link href="/solutions" className="text-sm font-semibold text-coral-700 hover:underline">
              View all solutions →
            </Link>
          </div>
        </MegaPanel>
      )}
      {openMenu === "industries" && (
        <MegaPanel>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {industries.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:bg-mist-100 hover:text-coral-700"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-coral-500/10 text-coral-600">
                  <Icon name={i.icon} className="h-5 w-5" />
                </span>
                {i.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end border-t border-mist-200 pt-4">
            <Link href="/industries" className="text-sm font-semibold text-coral-700 hover:underline">
              Explore More →
            </Link>
          </div>
        </MegaPanel>
      )}

      {/* Mobile sheet */}
      {mobileOpen && (
        <div className="xl:hidden">
          <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-mist-200 bg-mist-50 px-5 pb-10 pt-4 md:max-h-[calc(100vh-6rem)]">
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <MobileGroup
                  key={l.label}
                  label="Services"
                  links={services.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` }))}
                />
              ) : l.label === "Industries" ? (
                <MobileGroup key={l.label} label="Industries" links={industries} />
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block border-b border-mist-200 py-3 text-base font-semibold text-ink-900"
                >
                  {l.label}
                </Link>
              ),
            )}
            <div className="mt-6 flex flex-col gap-3">
              <Link href={cta.primaryHref} className="btn-primary w-full">
                {cta.primaryLabel}
              </Link>
              <Link href={cta.secondaryHref} className="btn-secondary w-full">
                {cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function TopLink({ href, scrolled, children }: { href: string; scrolled: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
        scrolled ? "hover:text-coral-700" : "hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}

function MenuTrigger({
  label,
  open,
  onOpen,
  scrolled,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  scrolled: boolean;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onOpen}
      onFocus={onOpen}
      aria-expanded={open}
      className={cn(
        "flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
        scrolled ? "hover:text-coral-700" : "hover:text-white",
        open && (scrolled ? "text-coral-700" : "text-white"),
      )}
    >
      {label}
      <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
    </button>
  );
}

function MegaPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-full hidden xl:block">
      <div className="container">
        <div className="animate-fade-up rounded-2xl border border-mist-200 bg-white p-6 shadow-lift">
          {children}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, links }: { label: string; links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-mist-200">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-base font-semibold text-ink-900"
        aria-expanded={open}
      >
        {label}
        <ChevronDown className={cn("h-5 w-5 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pb-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block py-2 pl-3 text-sm text-mist-600">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
