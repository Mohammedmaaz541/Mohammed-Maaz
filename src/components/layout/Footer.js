import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 py-10 dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xl font-semibold text-slate-900 dark:text-white">{portfolioData.profile.name}</div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {portfolioData.profile.title}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {portfolioData.profile.roles[1]}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            {portfolioData.profile.roles[2]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sky-500">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-sky-500">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.profile.email}`} className="inline-flex items-center gap-2 hover:text-sky-500">
            <Mail className="h-4 w-4" />
            Email
          </a>
        </div>
      </div>

      <div className="container-shell mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 Mohammed Maaz · Built with Next.js, React, JavaScript and ❤️
      </div>
    </footer>
  );
}
