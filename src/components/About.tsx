import { motion } from 'framer-motion';
import { User, Activity } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="text-sky-400" size={28} />
          <h2 className="text-3xl font-bold text-slate-50">Sobre mim</h2>
        </div>
        <div className="text-slate-300 space-y-4 text-lg leading-relaxed">
          <p>
            Meu interesse por tecnologia surgiu em uma feira de ciências escolar e, desde então, 
            transformei essa curiosidade em profissão. Sou estudante de <strong className="text-white font-semibold">Sistemas de Informação na UFC</strong> (campus Quixadá) 
            e atuo como desenvolvedor há mais de 2 anos — construindo interfaces modernas e responsivas sustentadas por APIs robustas e performáticas.
          </p>
          <p>
            Acredito que o melhor software nasce da união entre boa engenharia e atenção à experiência do usuário. 
            É essa filosofia que guia cada projeto que entrego.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <Activity className="text-sky-400" size={24} />
          <h3 className="text-2xl font-bold text-slate-50">O que estou fazendo agora</h3>
        </div>
        <ul className="space-y-4 text-slate-300">
          <li className="flex items-start gap-3">
            <span className="text-xl">🎓</span>
            <div>
              <strong className="text-white">TCC</strong> — pesquisa aplicada em IA e LLMs voltada para o contexto de licitações públicas.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🏥</span>
            <div>
              <strong className="text-white">SpeedMED</strong> — startup de gestão médica e odontológica da qual faço parte.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">🏋️</span>
            <div>
              <strong className="text-white">GyManager</strong> — sistema de gerenciamento de academias desenvolvido como freelance.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-xl">📦</span>
            <div>
              <strong className="text-white">Depósito Barra</strong> — sistema de gestão de estoque e fornecedores para o negócio da minha família.
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
