import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2 font-semibold text-white">
          <span className="text-lg">⚡</span>
          <span>Samarth</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex text-sm">
          <a href="#work" className="text-slate-400 hover:text-white transition-colors">Work</a>
          <a href="#skills" className="text-slate-400 hover:text-white transition-colors">Skills</a>
          <a href="#timeline" className="text-slate-400 hover:text-white transition-colors">Timeline</a>
          <a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a>
        </nav>
        <Button asChild size="sm" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10">
          <a href="https://skilledca.in" target="_blank" rel="noopener noreferrer">
            SkilledCA
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </header>
  );
}
