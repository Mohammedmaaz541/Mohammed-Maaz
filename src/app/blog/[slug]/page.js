import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function BlogDetailPage({ params }) {
  const blog = portfolioData.blogs.find((item) => item.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container-shell py-16">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-300">
        <ArrowLeft className="h-4 w-4" />
        Back to portfolio
      </Link>

      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        {blog.coverImage ? (
          <div className="mb-6 overflow-hidden rounded-2xl">
            <img src={blog.coverImage} alt={blog.title} className="h-64 w-full object-cover" />
          </div>
        ) : (
          <div className="mb-6 h-64 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500" />
        )}

        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-sky-500">
          <span>{blog.category}</span>
          <span>•</span>
          <span>{blog.publishedAt}</span>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">{blog.title}</h1>

        <p className="mt-4 text-xl text-slate-600 dark:text-slate-300">{blog.excerpt}</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-slate-700 dark:text-slate-200">
          {blog.content.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8">{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
