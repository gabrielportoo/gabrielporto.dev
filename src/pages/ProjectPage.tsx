import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useEffect } from 'react';

export function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Define quantas imagens existem. Se 0, a galeria sumirá automaticamente por lógica do render.
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="pt-24 pb-20 min-h-screen px-6 max-w-5xl mx-auto">
      <Link 
        to="/#projetos" 
        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Voltar para a página inicial</span>
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="text-sm font-medium text-sky-300 bg-sky-400/10 px-3 py-1.5 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>

      {hasImages ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {project.images.slice(0, 3).map((imgUrl, i) => (
            <div key={i} className="aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800">
              <img src={imgUrl} alt={`Screenshot ${i + 1} de ${project.title}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Placeholders, can be removed entirely if you prefer NO placeholders. 
              The user requested "se eu não colocar ou não indicar as imagens, deixe somente o texto".
              So I will just NOT render placeholders. The condition will be entirely skipped!
           */}
        </div>
      )}

      {/* Since the user specifically asked "se eu não colocar... deixe somente o texto", 
          I will completely hide the grid if there are no images. */}

      {hasImages && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
           {project.images.map((img, i) => (
              <div key={i} className="aspect-video bg-slate-800 rounded-xl overflow-hidden">
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
           ))}
        </div>
      )}

      {!hasImages && (
         <div className="hidden">No images grid</div>
      )}

      <div className="prose prose-invert prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Sobre o Projeto</h2>
        <p className="text-slate-300 leading-relaxed text-lg whitespace-pre-wrap">
          {project.description}
        </p>
      </div>
    </div>
  );
}
