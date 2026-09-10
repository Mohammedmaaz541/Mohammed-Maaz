import { getPortfolioContent } from '@/lib/portfolio-store';

export default async function ResumePage() {
  const portfolioData = await getPortfolioContent();
  return (
    <main className="container-shell py-16">
      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Resume</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900 dark:text-white">{portfolioData.profile.name}</h1>
          </div>
          <a href={portfolioData.profile.resume} className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400">
            Download Resume
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Profile</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{portfolioData.profile.description}</p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Core Strengths</h2>
            <ul className="mt-3 space-y-2 text-slate-600 dark:text-slate-300">
              {portfolioData.resume.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
