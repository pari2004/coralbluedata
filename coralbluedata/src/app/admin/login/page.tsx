import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Admin sign in", robots: { index: false } };

export default async function LoginPage() {
  // Already signed in → go to dashboard.
  const user = await getSessionUser();
  if (user) redirect("/admin");

  return (
    <main className="grid min-h-screen place-items-center bg-ink-900 px-6">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/brand/coralbluedata-logo-light.png"
            alt="Coral Blue Data"
            width={711}
            height={138}
            priority
            className="h-10 w-auto"
          />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
          <h1 className="text-lg font-semibold text-white">Sign in to the CMS</h1>
          <p className="mt-1 text-sm text-mist-400">Enter your administrator credentials.</p>
          <LoginForm />
        </div>
        <p className="mt-6 text-center text-xs text-mist-500">
          Authorised access only. Sessions expire automatically.
        </p>
      </div>
    </main>
  );
}
