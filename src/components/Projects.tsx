import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

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
            <Link 
              to={`/projeto/${project.id}`} 
              key={project.id}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full flex flex-col bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-sky-900/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold text-slate-50 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowRight className="text-slate-600 group-hover:text-sky-400 transition-colors" size={20} />
                </div>
                
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
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
