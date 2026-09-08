import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-10 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The content you are looking for is not available.
        </p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-400">
          Return home
        </Link>
      </div>
    </main>
  );
}
