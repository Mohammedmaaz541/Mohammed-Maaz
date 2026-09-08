'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X, SunMedium, MoonStar } from 'lucide-react';
import { portfolioData as initialPortfolioData } from '@/data/portfolioData';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [portfolioData, setPortfolioData] = useState(initialPortfolioData);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    const nextTheme = storedTheme || 'dark';
    setTheme(nextTheme);
    document.body.classList.toggle('light', nextTheme === 'light');
    document.body.classList.toggle('dark', nextTheme === 'dark');

    const loadPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio', { cache: 'no-store' });

        if (!response.ok) {
          throw new Error('Failed to load portfolio from API');
        }

        const parsed = await response.json();
        setPortfolioData(parsed);
      } catch (error) {
        console.error('Failed to load portfolio content from API:', error);
      }
    };

    loadPortfolio();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('dark', theme === 'dark');
  }, [mounted, theme]);

  const handleThemeToggle = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="container-shell flex items-center justify-between py-4">
        <Link href="#home" className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white">
          {portfolioData.profile.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {portfolioData.navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300">
            <Github className="h-4 w-4" />
          </a>
          <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300">
            <Linkedin className="h-4 w-4" />
          </a>
          <button
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
            className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:text-slate-300"
          >
            {mounted && theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
          </button>
          <a
            href={portfolioData.profile.resume}
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300 md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
          <div className="flex flex-col gap-4">
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                  <Github className="h-4 w-4" />
                </a>
                <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <button onClick={handleThemeToggle} className="rounded-full border border-slate-200 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                {mounted && theme === 'dark' ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
