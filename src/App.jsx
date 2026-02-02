import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import ExperienceCircuit from './components/ExperienceCircuit';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import LapProgress from './components/LapProgress';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <LapProgress />
          <Navbar />
          <main>
            <section id="home">
              <Hero />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="certifications">
              <Certifications />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="experience">
              <ExperienceCircuit />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </main>
          <footer>
            <div className="container" style={{ padding: '20px', textAlign: 'center', opacity: 0.5 }}>
              <small>&copy; 2026 Vansh Sharma. Powered by High Performance Code.</small>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}

export default App;
