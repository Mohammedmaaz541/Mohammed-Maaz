import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function BlogPage() {
  return (
    <main className="container-shell py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Blog</p>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white">Insights & Articles</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Notes on software engineering, AI workflows, cloud architecture, and building systems that are resilient by design.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {portfolioData.blogs.map((blog) => (
          <article key={blog.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
            <div className="h-52 bg-gradient-to-br from-sky-500 to-violet-500" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-sky-500">
                <span>{blog.category}</span>
                <span>{blog.readingTime}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{blog.title}</h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{blog.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${blog.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-300">
                Read article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
