"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-ink-900 px-6 text-center">
      <div>
        <h1 className="font-display text-2xl font-semibold text-white">Something went wrong</h1>
        <p className="mx-auto mt-3 max-w-sm text-mist-400">
          An unexpected error occurred. You can try again, or head back to the homepage.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            Try again
          </button>
          <Link href="/" className="btn-ghost-dark">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
