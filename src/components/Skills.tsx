import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Styled Components"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "API REST"]
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MongoDB", "Firebase Firestore"]
  },
  {
    title: "Outros",
    skills: ["Docker", "Git", "GitHub", "Python", "Metodologias Ágeis"]
  }
];

export function Skills() {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="text-sky-400" size={28} />
          <h2 className="text-3xl font-bold text-slate-50">Stack Principal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-slate-50 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-md border border-slate-700/50"
                  >
                    {skill}
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
