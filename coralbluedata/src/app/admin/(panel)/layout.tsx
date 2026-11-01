import type { Metadata } from "next";
import { requireUser } from "@/lib/auth/guard";
import { logoutAction } from "../actions/auth";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata: Metadata = { title: { default: "CMS", template: "%s · Coral Blue CMS" }, robots: { index: false } };

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  return (
    <div className="min-h-screen bg-mist-100 lg:grid lg:grid-cols-[260px_1fr]">
      <AdminSidebar user={{ name: user.name, email: user.email, role: user.role }} logoutAction={logoutAction} />
      <div className="min-w-0">
        <div className="mx-auto max-w-6xl px-5 py-8 lg:px-10 lg:py-10">{children}</div>
      </div>
    </div>
  );
}
