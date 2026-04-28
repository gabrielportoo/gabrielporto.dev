import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-sky-800/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Gabriel Porto
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 font-medium mb-4 max-w-2xl leading-relaxed">
          Desenvolvedor Full Stack <span className="text-sky-400">·</span> React.js & Node.js
        </p>

        <div className="flex items-center text-slate-400 gap-2 mb-12">
          <MapPin size={18} />
          <span>Quixadá, Brasil</span>
        </div>

        <div className="flex gap-4">
          <a
            href="#projetos"
            className="px-8 py-3 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-8 py-3 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Contato
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 animate-bounce text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </header>
  );
}
