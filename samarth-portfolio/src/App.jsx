import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Portfolio } from '@/pages/portfolio';
import { ShootingStars } from '@/components/shooting-stars';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-space-dark via-space-blue to-space-dark text-slate-50 overflow-hidden">
      {/* Static starfield background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-indigo-950/20 to-slate-950/40" />
        {/* Static stars */}
        <div className="absolute w-1 h-1 bg-white rounded-full top-10% left-10% opacity-70 blur-0.5" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-20% left-30% opacity-50" />
        <div className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full top-15% left-60% opacity-60" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-40% left-20% opacity-40" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-50% left-80% opacity-70" />
        <div className="absolute w-1.5 h-1.5 bg-purple-300 rounded-full top-35% left-85% opacity-50" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-60% left-15% opacity-60" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-70% left-70% opacity-50" />
        <div className="absolute w-1.5 h-1.5 bg-cyan-200 rounded-full top-75% left-40% opacity-70" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-80% left-85% opacity-40" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-90% left-25% opacity-60" />
        <div className="absolute w-1 h-1 bg-white rounded-full top-95% left-75% opacity-50" />
      </div>

      {/* Shooting stars */}
      <ShootingStars />

      {/* Glow effects */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}
