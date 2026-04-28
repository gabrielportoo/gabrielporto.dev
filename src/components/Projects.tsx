import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Depósito Barra",
    description: "Sistema completo de gestão de estoque com autenticação JWT.",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "InnCommand Hotel",
    description: "Plataforma de reservas hoteleiras com foco em UX.",
    tech: ["React", "Bootstrap", "Firebase"]
  },
  {
    title: "Clone Spotify",
    description: "Réplica funcional do player de música e listagem de artistas.",
    tech: ["React", "Vite", "MongoDB"]
  },
  {
    title: "FrogDash",
    description: "Jogo de plataforma com fases desafiadoras, obstáculos e design de níveis, desenvolvido como projeto acadêmico na UFC.",
    tech: ["Unity", "C#", "ShaderLab"]
  }
];

export function Projects() {
  return (
    <section id="projetos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <FolderGit2 className="text-sky-400" size={28} />
          <h2 className="text-3xl font-bold text-slate-50">Projetos em Destaque</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-sky-900/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium text-sky-300 bg-sky-400/10 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
