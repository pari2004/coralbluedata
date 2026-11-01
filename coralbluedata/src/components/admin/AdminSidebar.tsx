"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Inbox,
  FileStack,
  Boxes,
  Building2,
  Newspaper,
  Trophy,
  Quote,
  Globe2,
  Image as ImageIcon,
  Settings,
  LogOut,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/leads", label: "Leads", icon: Inbox },
  { href: "/admin/pages", label: "Pages", icon: FileStack },
  { href: "/admin/services", label: "Services", icon: Boxes },
  { href: "/admin/industries", label: "Industries", icon: Building2 },
  { href: "/admin/articles", label: "Articles", icon: Newspaper },
  { href: "/admin/case-studies", label: "Case studies", icon: Trophy },
  { href: "/admin/testimonials", label: "Testimonials", icon: Quote },
  { href: "/admin/coverage", label: "Coverage", icon: Globe2 },
  { href: "/admin/media", label: "Media", icon: ImageIcon },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar({
  user,
  logoutAction,
}: {
  user: { name: string; email: string; role: string };
  logoutAction: () => Promise<void>;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-mist-200 bg-ink-900 px-5 py-3 lg:hidden">
        <Link href="/admin" className="flex items-center gap-2 font-display font-semibold text-white">
          <span className="grid h-7 w-7 place-items-center rounded bg-coral-500 text-sm font-bold text-ink-950">C</span>
          Coral Blue CMS
        </Link>
        <button onClick={() => setOpen((v) => !v)} className="text-white" aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <aside
        className={cn(
          "flex-col border-r border-ink-700/40 bg-ink-900 lg:sticky lg:top-0 lg:flex lg:h-screen",
          open ? "flex" : "hidden lg:flex",
        )}
      >
        <div className="hidden items-center gap-2 px-6 py-6 lg:flex">
          <Image
            src="/favicon.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display font-semibold text-white">Coral Blue CMS</span>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 lg:py-2" aria-label="Admin">
          {NAV.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  active ? "bg-coral-500/15 text-coral-300" : "text-mist-300 hover:bg-white/5 hover:text-white",
                )}
              >
                <item.icon className="h-5 w-5" strokeWidth={1.8} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-mist-400 hover:text-white"
          >
            <ExternalLink className="h-3.5 w-3.5" /> View live site
          </Link>
          <div className="mt-2 rounded-lg bg-white/5 p-3">
            <p className="truncate text-sm font-medium text-white">{user.name}</p>
            <p className="truncate text-xs text-mist-400">{user.email}</p>
            <span className="mt-1 inline-block rounded bg-coral-500/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-coral-300">
              {user.role}
            </span>
          </div>
          <form action={logoutAction} className="mt-2">
            <button
              type="submit"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-mist-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              <LogOut className="h-4 w-4" /> Sign out
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
