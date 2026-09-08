import Link from 'next/link';
import { ArrowRight, Github, Globe } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function ProjectsPage() {
  return (
    <main className="container-shell py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Projects</p>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Selected Work</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          A collection of real-world platforms spanning full-stack product development, AI systems, cloud automation, and DevSecOps delivery.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <article key={project.slug} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-glow dark:border-slate-700 dark:bg-slate-900/70">
            <div className={`h-40 bg-gradient-to-br ${project.accent} p-6`}>
              <div className="flex h-full items-end justify-between">
                <div className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {project.category}
                </div>
                {project.badge && (
                  <div className="rounded-full bg-slate-950/20 px-3 py-1 text-xs font-semibold text-white">
                    {project.badge}
                  </div>
                )}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h2>
              <p className="mt-2 text-sm font-medium text-sky-600 dark:text-sky-300">{project.subtitle}</p>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <Link href={project.caseStudy} className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-300">
                  Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                    <Globe className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
