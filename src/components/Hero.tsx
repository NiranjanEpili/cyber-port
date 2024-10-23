import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Terminal } from 'lucide-react';

interface HeroProps {
  inView: boolean;
}

const Hero: React.FC<HeroProps> = ({ inView }) => {
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  return (
    <animated.div 
      style={animation} 
      className="relative min-h-screen flex items-center justify-center text-center z-10"
      id="home"
    >
      <div>
        <Terminal className="text-cyber-primary w-24 h-24 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-4 text-cyber-text">Niranjan Epili</h1>
        <p className="text-2xl text-cyber-secondary mb-8">Google Certified Cybersecurity Professional & Ethical Hacker</p>
        <p className="text-xl text-cyber-text max-w-2xl mx-auto">
          Securing digital frontiers and pushing the boundaries of ethical hacking.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-cyber-primary text-cyber-bg py-3 px-6 rounded-full hover:bg-cyber-secondary transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </animated.div>
  );
};

export default Hero;