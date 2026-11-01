import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink-900 px-6 text-center">
      <div>
        <p className="font-display text-7xl font-bold text-coral-400">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-white">Page not found</h1>
        <p className="mx-auto mt-3 max-w-sm text-mist-400">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/solutions" className="btn-ghost-dark">
            Explore solutions
          </Link>
        </div>
      </div>
    </main>
  );
}
