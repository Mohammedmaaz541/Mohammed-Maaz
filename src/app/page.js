import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Download, Sparkles, Briefcase, Cpu, Cloud, ShieldCheck, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import SectionHeading from '@/components/ui/SectionHeading';

const cardClass = 'rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70';

const XLogo = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.901 2h3.68l-8.04 9.19L22.5 22h-7.29l-5.69-7.86L3.48 22H-0.2l8.61-9.84L1.5 2h7.46l5.15 7.14L18.901 2Zm-1.28 18h2.03L7.12 3.9H4.98l13.64 16.1Z" />
  </svg>
);

export default function HomePage() {
  return (
    <div>
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-[length:32px_32px] opacity-30" />
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="container-shell relative grid gap-10 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
              <Sparkles className="h-3.5 w-3.5" />
              Build full systems
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
              Hi, I&apos;m <span className="text-sky-500">Mohammed Maaz</span>
            </h1>

            <div className="mt-6 space-y-3 text-2xl font-semibold md:text-3xl">
              {portfolioData.profile.roles.map((role, index) => (
                <div key={role} className={index === 0 ? 'text-sky-500' : 'text-slate-700 dark:text-slate-200'}>
                  {role}
                </div>
              ))}
            </div>

            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              {portfolioData.profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                Let&apos;s Connect
              </Link>
              <a href={portfolioData.profile.resume} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 rounded-full border border-slate-200 p-3 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700">
                <Github className="h-4 w-4" />
              </a>
              <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-full border border-slate-200 p-3 hover:border-sky-400 hover:text-sky-500 dark:border-slate-700">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 p-4 shadow-glow dark:border-slate-700">
              <div className="mb-4 flex items-center gap-2 text-xs text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2">portfolio-terminal</span>
              </div>

              <div className="rounded-2xl bg-slate-950 p-5 font-mono text-sm text-sky-300">
                <div className="mb-3 text-slate-400">$ whoami</div>
                <div className="mb-3 ml-4 text-slate-200">Mohammed Maaz</div>
                <div className="mb-3 text-slate-400">$ skills</div>
                <div className="ml-4 text-slate-200">Full-Stack • AI • Automation • Azure • Terraform • DevOps • DevSecOps</div>
                <div className="mt-6 text-slate-400">$ approach</div>
                <div className="mt-3 ml-4 space-y-2 text-slate-200">
                  <div>Understand</div>
                  <div>Design</div>
                  <div>Build</div>
                  <div>Automate</div>
                  <div>Secure</div>
                  <div>Deploy</div>
                  <div>Scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="About"
            title="About Me"
            description="I’m passionate about building technology that solves real business problems."
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Mohammed combines software development, AI, automation, and cloud engineering to deliver complete systems that move from idea to production with clarity and reliability.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Full-Stack Development',
                  'AI & Generative AI',
                  'Automation',
                  'Cloud & DevOps',
                  'DevSecOps',
                  'Infrastructure as Code',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                    <CheckCircle2 className="h-5 w-5 text-sky-500" />
                    <span className="font-medium text-slate-700 dark:text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900/70">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">Lifecycle</div>
                <div className="flex flex-wrap gap-2 text-sm text-slate-600 dark:text-slate-300">
                  {['Idea', 'Architecture', 'Development', 'AI Integration', 'Automation', 'Security', 'Cloud Infrastructure', 'CI/CD', 'Deployment', 'Monitoring'].map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 dark:border-slate-600 dark:bg-slate-950">
                      {step}
                      {index < 9 && <ChevronRight className="h-3.5 w-3.5 text-sky-500" />}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-surface rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700">
                  <Image src={portfolioData.profile.photo} alt={portfolioData.profile.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{portfolioData.profile.name}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{portfolioData.profile.title}</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
                  <Briefcase className="h-5 w-5 text-sky-500" />
                  <span className="text-slate-700 dark:text-slate-200">Full-stack, AI, Cloud, DevOps</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
                  <Cpu className="h-5 w-5 text-violet-500" />
                  <span className="text-slate-700 dark:text-slate-200">AI systems and automation workflows</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
                  <Cloud className="h-5 w-5 text-cyan-500" />
                  <span className="text-slate-700 dark:text-slate-200">Azure, Terraform, Kubernetes, CI/CD</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span className="text-slate-700 dark:text-slate-200">{portfolioData.profile.location}</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-950">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-200">Security-first engineering and DevSecOps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Approach"
            title="How I Build"
            description="A practical process that connects business needs to production-ready software and infrastructure."
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.processSteps.map((step) => (
              <div key={step.step} className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 hover:shadow-glow dark:border-slate-700 dark:bg-slate-900/70">
                <div className={`mb-4 inline-flex rounded-full bg-gradient-to-r ${step.accent} px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white`}>
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Skills"
            title="Engineering Skills"
            description="A balanced stack across frontend, backend, AI, cloud, DevOps, security, and monitoring."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.skills.filter((skill) => skill.featured).slice(0, 12).map((skill) => (
              <div key={skill.name} className="card-surface rounded-2xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{skill.name}</h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{skill.category}</p>
                  </div>
                  <span className="rounded-full bg-sky-500/10 px-2 py-1 text-xs font-medium text-sky-600 dark:text-sky-300">
                    {skill.level}
                  </span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
                </div>
                <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{skill.yearsOfExperience} years of experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Experience"
            title="Career Timeline"
            description="Hands-on experience building products, infrastructure, and developer workflows across internships and engineering work."
          />

          <div className="space-y-8">
            {portfolioData.experiences.map((experience, index) => (
              <div key={`${experience.company}-${experience.role}`} className="relative rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                <div className="absolute left-6 top-6 h-full w-px bg-gradient-to-b from-sky-500 to-transparent" />
                <div className="relative flex flex-col gap-4 md:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-500 text-lg font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
                        <p className="text-lg text-sky-600 dark:text-sky-300">{experience.company}</p>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{experience.period}</div>
                    </div>
                    <p className="mt-3 text-slate-600 dark:text-slate-300">{experience.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.highlights.map((highlight) => (
                        <span key={highlight} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            description="A portfolio of full-stack systems, AI applications, cloud automation, and DevSecOps pipelines."
          />

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
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
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
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Certifications"
            title="Credentials"
            description="Professional certifications that reinforce my cloud, infrastructure, and web engineering foundation."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.certifications.map((cert) => (
              <div key={cert.title} className="card-surface rounded-2xl p-5">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">{cert.issuer}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{cert.title}</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Issued {cert.issueDate}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition"
            description="Milestones and learning experiences that shaped my engineering journey."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.achievements.map((achievement) => (
              <div key={achievement.title} className="card-surface rounded-2xl p-6">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">{achievement.organization}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
                <p className="mt-3 text-slate-600 dark:text-slate-300">{achievement.description}</p>
                <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">{achievement.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Blog"
            title="Insights & Notes"
            description="Thoughts on AI, cloud architecture, software engineering, and building systems that scale responsibly."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {portfolioData.blogs.map((blog) => (
              <article key={blog.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
                <div className="h-52 bg-gradient-to-br from-sky-500 to-violet-500" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-sky-500">
                    <span>{blog.category}</span>
                    <span>{blog.readingTime}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{blog.title}</h3>
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
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s Build Something Impactful"
            description="Whether you need a web application, SaaS platform, AI agent, automated workflow, API integration, or cloud infrastructure, let&apos;s build a reliable solution together."
          />

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="card-surface rounded-3xl p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MailIcon />
                  <span className="text-slate-700 dark:text-slate-200">{portfolioData.profile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-sky-500/10 p-2 text-sky-500">📞</span>
                  <span className="text-slate-700 dark:text-slate-200">{portfolioData.profile.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <a href={portfolioData.profile.github} className="text-slate-700 dark:text-slate-200">GitHub</a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <a href={portfolioData.profile.linkedin} className="text-slate-700 dark:text-slate-200">LinkedIn</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-full bg-sky-500/10 p-2 text-sky-500">
                    <XLogo className="h-4 w-4" />
                  </span>
                  <a href={portfolioData.profile.x} className="text-slate-700 dark:text-slate-200">X</a>
                </div>
              </div>
            </div>

            <form className="card-surface rounded-3xl p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                  <input className="w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                  <input type="email" className="w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="you@example.com" />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Subject</label>
                <input className="w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Project inquiry" />
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea rows="5" className="w-full rounded-xl border border-slate-200 bg-white p-3 text-slate-900 outline-none ring-0 transition focus:border-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white" placeholder="Tell me about your project..." />
              </div>

              <button type="button" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function MailIcon() {
  return <span className="inline-flex rounded-full bg-sky-500/10 p-2 text-sky-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v7.5A2.25 2.25 0 0118.75 18H5.25A2.25 2.25 0 013 15.75v-7.5zm0 0l9 6 9-6" /></svg></span>;
}
