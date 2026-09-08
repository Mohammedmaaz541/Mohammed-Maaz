'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { portfolioData as initialPortfolioData } from '@/data/portfolioData';

const sectionMeta = {
  profile: { label: 'Profile', description: 'Edit basic profile details and contact links.' },
  skills: { label: 'Skills', description: 'Manage skills, categories, levels, and featured entries.' },
  experiences: { label: 'Experience', description: 'Manage work history entries.' },
  projects: { label: 'Projects', description: 'Add, update, or remove featured projects.' },
  certifications: { label: 'Certifications', description: 'Manage certification cards and credentials.' },
  achievements: { label: 'Achievements', description: 'Update award and achievement listings.' },
  blogs: { label: 'Blog', description: 'Create and manage blog posts.' },
};

const stringifyList = (value) => (Array.isArray(value) ? value.join(', ') : '');
const parseList = (value) => value
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean);

const createDefaultProject = () => ({
  slug: 'new-project',
  title: 'New Project',
  subtitle: 'Project subtitle',
  category: 'Full Stack',
  description: 'Short project description.',
  technologies: ['Next.js'],
  features: ['Feature 1'],
  github: 'https://github.com/',
  demo: 'https://example.com',
  caseStudy: '/projects/new-project',
  badge: 'New',
  image: '',
  accent: 'from-sky-500 to-blue-500',
  architecture: ['Architecture 1'],
});

const createDefaultExperience = () => ({
  company: 'Company Name',
  role: 'Role Title',
  period: 'Month Year – Month Year',
  location: 'Remote',
  description: 'Describe the role and impact.',
  highlights: ['Highlight 1'],
});

const createDefaultSkill = () => ({
  name: 'New Skill',
  category: 'Languages',
  icon: 'Code2',
  level: 'Intermediate',
  yearsOfExperience: 1,
  featured: false,
});

const createDefaultCertification = () => ({
  title: 'Certification Name',
  issuer: 'Issuer',
  issueDate: '2026',
  credentialId: 'CERT-001',
  credentialUrl: '#',
  image: '',
  skills: ['Skill'],
});

const createDefaultAchievement = () => ({
  title: 'Achievement Name',
  description: 'Describe the achievement.',
  date: '2026',
  organization: 'Organization',
  image: '',
  link: '#',
  featured: true,
});

const createDefaultBlog = () => ({
  slug: 'new-blog-post',
  title: 'New Blog Post',
  excerpt: 'Short excerpt for the blog card.',
  content: ['Add your blog content here.'],
  coverImage: '',
  tags: ['Portfolio'],
  published: true,
  publishedAt: '2026-09-09',
  readingTime: '5 min read',
  author: 'Mohammed Maaz',
  category: 'General',
});

const loadStoredPortfolio = async () => {
  try {
    const response = await fetch('/api/portfolio', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to load portfolio: ${response.status}`);
    }

    const parsed = await response.json();

    return {
      ...initialPortfolioData,
      ...parsed,
      profile: {
        ...initialPortfolioData.profile,
        ...(parsed.profile || {}),
      },
    };
  } catch (error) {
    console.error('Failed to load stored portfolio data:', error);
    return initialPortfolioData;
  }
};

export default function AdminPage() {
  const [portfolio, setPortfolio] = useState(initialPortfolioData);
  const [activeSection, setActiveSection] = useState('profile');
  const [status, setStatus] = useState('Loading content...');

  useEffect(() => {
    const bootstrapPortfolio = async () => {
      const loadedPortfolio = await loadStoredPortfolio();
      setPortfolio(loadedPortfolio);
      setStatus('Content loaded. You can edit sections below.');
    };

    bootstrapPortfolio();
  }, []);

  const savePortfolioData = async (dataToSave) => {
    const response = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSave),
    });

    if (!response.ok) {
      throw new Error('Save failed');
    }
  };

  const savePortfolio = async () => {
    try {
      setStatus('Saving changes...');
      await savePortfolioData(portfolio);
      setStatus('✅ Changes saved to the database. Refresh the homepage to see the updates.');
    } catch (error) {
      console.error('Failed to save portfolio content:', error);
      setStatus('⚠️ Failed to save. Please try again.');
    }
  };

  const resetPortfolio = async () => {
    try {
      setStatus('Resetting content...');
      const response = await fetch('/api/portfolio', { method: 'DELETE' });

      if (!response.ok) {
        throw new Error('Reset failed');
      }

      const resetPortfolioData = await response.json();
      setPortfolio(resetPortfolioData?.portfolio || initialPortfolioData);
      setStatus('🔄 Content reset to the default portfolio data.');
    } catch (error) {
      console.error('Failed to reset portfolio content:', error);
      setStatus('⚠️ Failed to reset. Please try again.');
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  const updateProfileField = (field, value) => {
    setPortfolio((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }));
  };

  const updateArrayItem = (section, index, field, value) => {
    setPortfolio((current) => ({
      ...current,
      [section]: current[section].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: value } : item,
      ),
    }));
  };

  const updateListField = (section, index, field, value) => {
    setPortfolio((current) => ({
      ...current,
      [section]: current[section].map((item, itemIndex) =>
        itemIndex === index ? { ...item, [field]: parseList(value) } : item,
      ),
    }));
  };

  const updateBlogContent = (index, value) => {
    setPortfolio((current) => ({
      ...current,
      blogs: current.blogs.map((blog, blogIndex) =>
        blogIndex === index ? { ...blog, content: value.split('\n').map((row) => row.trim()).filter(Boolean) } : blog,
      ),
    }));
  };

  const addItem = (section) => {
    const newItemMap = {
      skills: createDefaultSkill(),
      projects: createDefaultProject(),
      experiences: createDefaultExperience(),
      certifications: createDefaultCertification(),
      achievements: createDefaultAchievement(),
      blogs: createDefaultBlog(),
    };

    setPortfolio((current) => ({
      ...current,
      [section]: [...current[section], newItemMap[section]],
    }));
  };

  const removeItem = (section, index) => {
    setPortfolio((current) => ({
      ...current,
      [section]: current[section].filter((_, itemIndex) => itemIndex !== index),
    }));
  };

  const uploadImageToStorage = async (section, index, file) => {
    if (!file) {
      return;
    }

    try {
      setStatus('Uploading image...');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', section === 'projects' ? 'projects' : 'blogs');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      const field = section === 'projects' ? 'image' : 'coverImage';
      const updatedPortfolio = {
        ...portfolio,
        [section]: portfolio[section].map((item, itemIndex) =>
          itemIndex === index ? { ...item, [field]: data.url } : item,
        ),
      };

      setPortfolio(updatedPortfolio);
      await savePortfolioData(updatedPortfolio);
      setStatus('✅ Image uploaded and saved to the database.');
    } catch (error) {
      console.error('Failed to upload image:', error);
      setStatus('⚠️ Failed to upload image. Please try again.');
    }
  };

  const renderProfileEditor = () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
          <input value={portfolio.profile.name} onChange={(e) => updateProfileField('name', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Title</span>
          <input value={portfolio.profile.title} onChange={(e) => updateProfileField('title', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
          <input value={portfolio.profile.email} onChange={(e) => updateProfileField('email', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Phone</span>
          <input value={portfolio.profile.phone} onChange={(e) => updateProfileField('phone', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Tagline</span>
          <textarea value={portfolio.profile.tagline} onChange={(e) => updateProfileField('tagline', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={3} />
        </label>
        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Description</span>
          <textarea value={portfolio.profile.description} onChange={(e) => updateProfileField('description', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={3} />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Location</span>
          <input value={portfolio.profile.location} onChange={(e) => updateProfileField('location', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Resume URL</span>
          <input value={portfolio.profile.resume} onChange={(e) => updateProfileField('resume', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">GitHub</span>
          <input value={portfolio.profile.github} onChange={(e) => updateProfileField('github', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">LinkedIn</span>
          <input value={portfolio.profile.linkedin} onChange={(e) => updateProfileField('linkedin', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">X</span>
          <input value={portfolio.profile.x} onChange={(e) => updateProfileField('x', e.target.value)} className="w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
        </label>
      </div>
    </div>
  );

  const renderArrayEditor = (section, newItemLabel) => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{sectionMeta[section].label}</h3>
        <button onClick={() => addItem(section)} className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white">
          + Add {newItemLabel}
        </button>
      </div>

      {portfolio[section].map((item, index) => (
        <div key={`${section}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900/70">
          {section === 'projects' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.title} onChange={(e) => updateArrayItem(section, index, 'title', e.target.value)} placeholder="Title" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.subtitle} onChange={(e) => updateArrayItem(section, index, 'subtitle', e.target.value)} placeholder="Subtitle" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.category} onChange={(e) => updateArrayItem(section, index, 'category', e.target.value)} placeholder="Category" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.badge || ''} onChange={(e) => updateArrayItem(section, index, 'badge', e.target.value)} placeholder="Badge" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
              </div>
              <textarea value={item.description} onChange={(e) => updateArrayItem(section, index, 'description', e.target.value)} placeholder="Description" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={3} />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input value={stringifyList(item.technologies)} onChange={(e) => updateListField(section, index, 'technologies', e.target.value)} placeholder="Technologies (comma separated)" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={stringifyList(item.features)} onChange={(e) => updateListField(section, index, 'features', e.target.value)} placeholder="Features (comma separated)" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.github} onChange={(e) => updateArrayItem(section, index, 'github', e.target.value)} placeholder="GitHub URL" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.demo} onChange={(e) => updateArrayItem(section, index, 'demo', e.target.value)} placeholder="Demo URL" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.caseStudy} onChange={(e) => updateArrayItem(section, index, 'caseStudy', e.target.value)} placeholder="Case study path" className="rounded-xl border border-slate-300 bg-white p-3 md:col-span-2 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.image || ''} onChange={(e) => updateArrayItem(section, index, 'image', e.target.value)} placeholder="Project image URL" className="rounded-xl border border-slate-300 bg-white p-3 md:col-span-2 dark:border-slate-700 dark:bg-slate-900" />
                <label className="flex flex-col gap-2 rounded-xl border border-dashed border-slate-300 bg-white p-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:col-span-2">
                  <span>Upload project image</span>
                  <input type="file" accept="image/*" onChange={(e) => uploadImageToStorage(section, index, e.target.files?.[0])} className="text-sm" />
                </label>
              </div>
            </>
          )}

          {section === 'skills' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.name} onChange={(e) => updateArrayItem(section, index, 'name', e.target.value)} placeholder="Skill name" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.category} onChange={(e) => updateArrayItem(section, index, 'category', e.target.value)} placeholder="Category" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.icon} onChange={(e) => updateArrayItem(section, index, 'icon', e.target.value)} placeholder="Icon name" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.level} onChange={(e) => updateArrayItem(section, index, 'level', e.target.value)} placeholder="Level" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input
                  type="number"
                  value={item.yearsOfExperience}
                  onChange={(e) => updateArrayItem(section, index, 'yearsOfExperience', Number(e.target.value))}
                  placeholder="Years of experience"
                  className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"
                />
              </div>
              <label className="mt-4 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <input type="checkbox" checked={Boolean(item.featured)} onChange={(e) => updateArrayItem(section, index, 'featured', e.target.checked)} />
                Featured skill
              </label>
            </>
          )}

          {section === 'experiences' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.company} onChange={(e) => updateArrayItem(section, index, 'company', e.target.value)} placeholder="Company" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.role} onChange={(e) => updateArrayItem(section, index, 'role', e.target.value)} placeholder="Role" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.period} onChange={(e) => updateArrayItem(section, index, 'period', e.target.value)} placeholder="Period" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.location} onChange={(e) => updateArrayItem(section, index, 'location', e.target.value)} placeholder="Location" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
              </div>
              <textarea value={item.description} onChange={(e) => updateArrayItem(section, index, 'description', e.target.value)} placeholder="Description" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={3} />
              <input value={stringifyList(item.highlights)} onChange={(e) => updateListField(section, index, 'highlights', e.target.value)} placeholder="Highlights (comma separated)" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
            </>
          )}

          {section === 'certifications' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.title} onChange={(e) => updateArrayItem(section, index, 'title', e.target.value)} placeholder="Title" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.issuer} onChange={(e) => updateArrayItem(section, index, 'issuer', e.target.value)} placeholder="Issuer" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.issueDate} onChange={(e) => updateArrayItem(section, index, 'issueDate', e.target.value)} placeholder="Issue Date" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.credentialId} onChange={(e) => updateArrayItem(section, index, 'credentialId', e.target.value)} placeholder="Credential ID" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.credentialUrl} onChange={(e) => updateArrayItem(section, index, 'credentialUrl', e.target.value)} placeholder="Credential URL" className="rounded-xl border border-slate-300 bg-white p-3 md:col-span-2 dark:border-slate-700 dark:bg-slate-900" />
                <input value={stringifyList(item.skills)} onChange={(e) => updateListField(section, index, 'skills', e.target.value)} placeholder="Skills (comma separated)" className="rounded-xl border border-slate-300 bg-white p-3 md:col-span-2 dark:border-slate-700 dark:bg-slate-900" />
              </div>
            </>
          )}

          {section === 'achievements' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.title} onChange={(e) => updateArrayItem(section, index, 'title', e.target.value)} placeholder="Title" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.date} onChange={(e) => updateArrayItem(section, index, 'date', e.target.value)} placeholder="Date" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.organization} onChange={(e) => updateArrayItem(section, index, 'organization', e.target.value)} placeholder="Organization" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.link} onChange={(e) => updateArrayItem(section, index, 'link', e.target.value)} placeholder="Link" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
              </div>
              <textarea value={item.description} onChange={(e) => updateArrayItem(section, index, 'description', e.target.value)} placeholder="Description" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={3} />
              <label className="mt-4 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <input type="checkbox" checked={Boolean(item.featured)} onChange={(e) => updateArrayItem(section, index, 'featured', e.target.checked)} />
                Featured achievement
              </label>
            </>
          )}

          {section === 'blogs' && (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={item.title} onChange={(e) => updateArrayItem(section, index, 'title', e.target.value)} placeholder="Title" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.category} onChange={(e) => updateArrayItem(section, index, 'category', e.target.value)} placeholder="Category" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.publishedAt} onChange={(e) => updateArrayItem(section, index, 'publishedAt', e.target.value)} placeholder="Published At" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.readingTime} onChange={(e) => updateArrayItem(section, index, 'readingTime', e.target.value)} placeholder="Reading Time" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.author} onChange={(e) => updateArrayItem(section, index, 'author', e.target.value)} placeholder="Author" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <input value={item.slug} onChange={(e) => updateArrayItem(section, index, 'slug', e.target.value)} placeholder="Slug" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
              </div>
              <textarea value={item.excerpt} onChange={(e) => updateArrayItem(section, index, 'excerpt', e.target.value)} placeholder="Excerpt" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={2} />
              <textarea value={item.content.join('\n\n')} onChange={(e) => updateBlogContent(index, e.target.value)} placeholder="Blog content (one paragraph per line or blank line)" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" rows={6} />
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input value={item.coverImage || ''} onChange={(e) => updateArrayItem(section, index, 'coverImage', e.target.value)} placeholder="Blog cover image URL" className="rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
                <label className="flex flex-col gap-2 rounded-xl border border-dashed border-slate-300 bg-white p-3 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                  <span>Upload blog cover image</span>
                  <input type="file" accept="image/*" onChange={(e) => uploadImageToStorage(section, index, e.target.files?.[0])} className="text-sm" />
                </label>
              </div>
              <input value={stringifyList(item.tags)} onChange={(e) => updateListField(section, index, 'tags', e.target.value)} placeholder="Tags (comma separated)" className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 dark:border-slate-700 dark:bg-slate-900" />
              <label className="mt-4 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <input type="checkbox" checked={Boolean(item.published)} onChange={(e) => updateArrayItem(section, index, 'published', e.target.checked)} />
                Published
              </label>
            </>
          )}

          <div className="mt-4 flex justify-end">
            <button onClick={() => removeItem(section, index)} className="rounded-full border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container-shell py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-500">Admin</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900 dark:text-white">Content Manager</h1>
        </div>
        <div className="flex gap-3">
          <Link href="/" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
            Back to site
          </Link>
          <button onClick={logout} className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
            Log out
          </button>
          <button onClick={savePortfolio} className="rounded-full bg-sky-500 px-4 py-2 text-sm font-medium text-white">
            Save changes
          </button>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {Object.entries(sectionMeta).map(([key, section]) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === key
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
              : 'border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{sectionMeta[activeSection].label}</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{sectionMeta[activeSection].description}</p>
        </div>

        {activeSection === 'profile' ? renderProfileEditor() : renderArrayEditor(activeSection, sectionMeta[activeSection].label)}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
        <p>{status}</p>
        <button onClick={resetPortfolio} className="rounded-full border border-slate-300 px-4 py-2 font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
          Reset to default
        </button>
      </div>
    </div>
  );
}
