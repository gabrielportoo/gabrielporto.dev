import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Navbar() {
  const { pathname, hash } = useLocation();

  // Garante o scroll para o elemento com ID ao mudar de rota ou hash
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight transition-transform hover:scale-105"
          onClick={() => {
            if (pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <span className="text-white">Gabriel</span>
          <span className="text-sky-400">Porto</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link to="/#sobre" className="hover:text-sky-400 transition-colors">Sobre</Link>
          <Link to="/#experiencia" className="hover:text-sky-400 transition-colors">Experiência</Link>
          <Link to="/#skills" className="hover:text-sky-400 transition-colors">Stack</Link>
          <Link to="/#projetos" className="hover:text-sky-400 transition-colors">Projetos</Link>
          <Link to="/#contato" className="hover:text-sky-400 transition-colors">Contato</Link>
        </div>
      </div>
    </nav>
  );
}
