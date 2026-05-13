import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container space-y-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">About</h3>
            <p className="text-sm text-slate-400">
              CA Final Student building bridges between finance and tech.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Projects</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="https://skilledca.in" className="hover:text-white transition-colors">SkilledCA</a></li>
              <li><a href="https://github.com/wolfrec007" className="hover:text-white transition-colors">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Connect</h3>
            <div className="flex gap-3">
              <Button asChild size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                <a href="mailto:samarth@skilledca.in" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                <a href="https://linkedin.com/in/samarth-hs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-slate-400 hover:text-white">
                <a href="https://github.com/wolfrec007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-slate-500">© 2025 Samarth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
