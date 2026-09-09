import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, Globe } from 'lucide-react';
import { getPortfolioContent } from '@/lib/portfolio-store';

export default async function ProjectDetailPage({ params }) {
  const portfolioData = await getPortfolioContent();
  const project = portfolioData.projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container-shell py-16">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-300">
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <div className={`mb-6 rounded-2xl bg-gradient-to-br ${project.accent} p-8`}>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{project.category}</p>
              <h1 className="mt-3 text-4xl font-black text-white">{project.title}</h1>
            </div>
            {project.badge && (
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Overview</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Problem</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  The project addressed a real operational need by connecting users, service providers, and infrastructure workflows in one system.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Solution</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  A scalable platform with role-aware workflows, automation, and cloud-ready deployment patterns.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Architecture</h3>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
                <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.architecture.map((layer, index) => (
                    <div key={layer} className="flex items-center gap-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sky-500 text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span>{layer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Key Features</h3>
              <ul className="mt-4 grid gap-2 text-slate-600 dark:text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Links</h3>
              <div className="mt-4 space-y-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <Globe className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
