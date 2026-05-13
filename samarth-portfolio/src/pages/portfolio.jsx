import { ArrowRight, Code, Lock, Zap, BookOpen, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    title: 'SkilledCA',
    description: 'Knowledge hub bridging chartered accountancy and technology. Tutorials, tools, and resources for professionals.',
    tags: ['React', 'JavaScript', 'Python', 'Automation'],
    icon: '📚',
    url: 'https://skilledca.in',
  },
  {
    title: 'GSTR-3B Utility',
    description: 'Interactive tool for tax professionals to prepare and verify GSTR-3B returns with ease.',
    tags: ['Fintech', 'Tools', 'Tax'],
    icon: '🧾',
    url: 'https://skilledca.in/gstr3b',
  },
  {
    title: 'Python Automation Scripts',
    description: 'Collection of scripts for Excel consolidation, data processing, and finance workflow automation.',
    tags: ['Python', 'Automation', 'Finance'],
    icon: '🐍',
    url: 'https://github.com/wolfrec007',
  },
];

const timeline = [
  {
    year: '2024–Present',
    role: 'Chartered Accountant (Articleship)',
    company: 'PKF Sridhar & Santhanam',
    description: 'Audit, tax compliance, and financial advisory in a top-tier firm.',
  },
  {
    year: '2023',
    role: 'Founder',
    company: 'SkilledCA',
    description: 'Created an independent platform to teach tech skills to finance professionals.',
  },
  {
    year: '2022',
    role: 'Tech Enthusiast',
    company: 'Self-Directed Learning',
    description: 'Transitioned from pure finance to tech—learned Python, web development, Linux.',
  },
];

const skills = [
  {
    category: 'Finance',
    items: ['Auditing', 'Taxation', 'Compliance', 'GST', 'SAP'],
  },
  {
    category: 'Tech',
    items: ['Python', 'JavaScript', 'React', 'Web Dev', 'Linux'],
  },
  {
    category: 'Tools',
    items: ['Excel', 'SQL', 'Git', 'Automation', 'Data Processing'],
  },
];

export function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_28%)]" />
      </div>

      {/* Hero */}
      <section className="container grid gap-12 py-20 md:py-32 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-3">
            <Badge className="bg-cyan-500/15 text-cyan-200 hover:bg-cyan-500/20 w-fit">CA Final × Tech Builder</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              I bridge finance and tech
            </h1>
            <p className="text-lg text-slate-400">
              Chartered Accountant by training, technologist by passion. I create tools that make our respective domains smarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <a href="#work">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <a href="mailto:samarth@skilledca.in">Get In Touch</a>
            </Button>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
          <div className="relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-cyan-400" />
                <span className="text-slate-300">Fast prototyping & shipping</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-purple-400" />
                <span className="text-slate-300">Finance-grade precision</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">Full-stack capable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="container space-y-12 py-20">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">Featured Work</h2>
          <p className="text-slate-400">Projects that showcase the intersection of finance and tech.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group border-white/10 bg-white/5 hover:bg-white/8 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{project.icon}</span>
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="w-full justify-start text-cyan-400 hover:text-cyan-300 pl-0">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container space-y-12 py-20">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">Toolkit</h2>
          <p className="text-slate-400">Skills spanning finance, technology, and their intersection.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill.category} className="border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-white">{skill.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <Badge key={item} variant="outline" className="border-white/20 text-white">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="container space-y-12 py-20">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">Journey</h2>
          <p className="text-slate-400">Key milestones in my professional evolution.</p>
        </div>
        <div className="space-y-6">
          {timeline.map((event, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-cyan-500 ring-4 ring-slate-950" />
              {idx < timeline.length - 1 && (
                <div className="absolute left-[7px] top-6 h-12 w-0.5 bg-gradient-to-b from-cyan-500/50 to-transparent" />
              )}
              <div className="space-y-1">
                <p className="text-sm font-semibold text-cyan-400">{event.year}</p>
                <h3 className="text-lg font-semibold text-white">{event.role}</h3>
                <p className="text-slate-400">{event.company}</p>
                <p className="text-sm text-slate-500 pt-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container space-y-12 py-20">
        <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5">
          <CardHeader className="text-center">
            <CardTitle className="text-white mb-2">Let's create something together</CardTitle>
            <CardDescription>I love collaborating on projects at the intersection of finance and tech.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href="mailto:samarth@skilledca.in">Get In Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <a href="https://linkedin.com/in/samarth-hs" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              <a href="https://github.com/wolfrec007" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
