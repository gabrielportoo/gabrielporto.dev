import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-500/30 font-sans">
      <Hero />
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24 md:space-y-32">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
