import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Shield, Lock, Code } from 'lucide-react';
import CyberSphere from './components/CyberSphere';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <section className="h-screen relative">
          <Canvas className="absolute inset-0">
            <Suspense fallback={null}>
              <CyberSphere />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Niranjan Epili</h1>
              <p className="text-2xl">Ethical hacker & Google Certfied Cybersecurity Professional </p>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-800 text-center py-4">
        <p>&copy; 2024-25 Niranjan Epili. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;