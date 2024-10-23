import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const fadeIn = useSpring({
    opacity: loading ? 0 : 1,
    config: { duration: 1000 },
  });

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-cyan-400 text-xl sm:text-2xl lg:text-3xl font-mono typing-effect">
          Initializing secure connection...
        </div>
      </div>
    );
  }
  
  return (
    <animated.div style={fadeIn} className="relative min-h-screen">
      <NetworkBackground />
      <div className="relative z-10">
        <Header />
        <main className="px-4 sm:px-8 lg:px-16">
          <section ref={heroRef} className="mb-12">
            <Hero inView={heroInView} />
          </section>
          <section ref={aboutRef} className="py-10 sm:py-20">
            <About inView={aboutInView} />
          </section>
          <section ref={skillsRef} className="py-10 sm:py-20 bg-gray-800">
            <Skills inView={skillsInView} />
          </section>
          <section ref={projectsRef} className="py-10 sm:py-20">
            <Projects inView={projectsInView} />
          </section>
          <section ref={contactRef} className="py-10 sm:py-20 bg-gray-800">
            <Contact inView={contactInView} />
          </section>
        </main>
        <Footer />
      </div>
    </animated.div>
  );
}

export default App;