import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Portfolio } from '@/pages/portfolio';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}
