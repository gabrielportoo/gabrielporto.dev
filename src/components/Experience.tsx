import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Desenvolvedor Full Stack",
    company: "JIT Technology",
    location: "Fortaleza, Brasil",
    period: "set/2025 – atual",
    description: [
      "Implementação de módulos de Gestão de Ponto e Funcionários com Node.js e Express.",
      "Construção de interfaces interativas com React e TypeScript integradas a APIs robustas.",
      "Participação ativa em rituais ágeis e code reviews usando Git & GitHub."
    ]
  },
  {
    role: "Coordenador de Projetos & Tech Lead",
    company: "Avante-Tech Jr.",
    location: "Quixadá, Brasil",
    period: "jun/2024 – fev/2025",
    description: [
      "Liderança técnica de equipes e gestão de projetos com Scrum.",
      "Desenvolvimento full-stack com React e PostgreSQL, entregando sistemas escaláveis para clientes da empresa júnior."
    ]
  }
];

export function Experience() {
  return (
    <section id="experiencia">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-sky-400" size={28} />
          <h2 className="text-3xl font-bold text-slate-50">Experiência</h2>
        </div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute w-4 h-4 bg-slate-950 border-2 border-sky-400 rounded-full -left-[9px] top-1.5" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2">
                <h3 className="text-xl font-bold text-slate-50">{exp.role}</h3>
                <span className="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
              
              <div className="text-slate-400 font-medium mb-4">
                {exp.company} <span className="mx-2 text-slate-600">•</span> {exp.location}
              </div>
              
              <ul className="space-y-2 text-slate-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
