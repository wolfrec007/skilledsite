import { ArrowRight, Zap } from 'lucide-react';
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
    <main className="min-h-screen text-white relative">
      {/* Subtle accent overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 py-20 md:py-32">
        <div className="space-y-6">
          <div className="space-y-3">
            <Badge variant="default" className="bg-purple-500/50 text-white border-purple-400/30">CA Final × Tech Builder</Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              I bridge finance and tech
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              Chartered Accountant by training, technologist by passion. I create tools that make our respective domains smarter.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href="#work" className="gap-2 flex items-center">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="glass border-purple-400/30 text-white hover:bg-purple-500/10">
              <a href="mailto:samarth@skilledca.in">Get In Touch</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Featured Work</h2>
            <p className="text-slate-300">Projects that showcase the intersection of finance and tech.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <a key={project.title} href={project.url} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full glass border-cyan-400/20 hover:border-cyan-400/40 transition-all hover:bg-cyan-500/5">
                  <CardHeader>
                    <span className="text-3xl mb-2 block">{project.icon}</span>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-purple-500/30 border-purple-400/30 text-cyan-200">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">Toolkit</h2>
            <p className="text-slate-300">Skills spanning finance, technology, and their intersection.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skill) => (
              <Card key={skill.category} className="glass border-purple-400/20 hover:border-purple-400/40 transition-all hover:bg-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="outline" className="border-cyan-400/30 text-cyan-200 bg-cyan-500/10">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Journey</h2>
            <p className="text-slate-300">Key milestones in my professional evolution.</p>
          </div>
          <div className="space-y-6">
            {timeline.map((event, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                  {idx < timeline.length - 1 && <div className="w-0.5 h-12 bg-purple-500/30" />}
                </div>
                <div className="pb-6 p-4 glass border-l border-purple-400/20 rounded-lg">
                  <p className="text-sm font-semibold text-cyan-300">{event.year}</p>
                  <h3 className="text-lg font-bold text-white">{event.role}</h3>
                  <p className="text-purple-200">{event.company}</p>
                  <p className="text-sm text-slate-400 mt-1">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-20 pb-32">
        <Card className="glass border-purple-400/20 hover:border-purple-400/40 transition-all">
          <CardHeader className="text-center">
            <CardTitle className="text-white mb-2 text-3xl bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">Let's create something together</CardTitle>
            <CardDescription className="text-slate-300">I love collaborating on projects at the intersection of finance and tech.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
              <a href="mailto:samarth@skilledca.in">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" className="glass border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/10">
              <a href="https://linkedin.com/in/samarth-hs" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" className="glass border-blue-400/30 text-blue-200 hover:bg-blue-500/10">
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
