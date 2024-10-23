import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './simulation.css'; // Assuming glitch effect styles are here

interface AboutProps {
  inView: boolean;
}

const About: React.FC<AboutProps> = ({ inView }) => {
  const [text, setText] = useState('');
  const fullText = "I'm a passionate cybersecurity professional with expertise in ethical hacking and full-stack development. My mission is to make the digital world a safer place by identifying vulnerabilities and developing robust security solutions.";

  useEffect(() => {
    if (inView) {
      let i = 0;
      const typingInterval = setInterval(() => {
        setText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) {
          clearInterval(typingInterval);
        }
      }, 50); // Typing speed
      return () => clearInterval(typingInterval);
    }
  }, [inView]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 30 },
  });

  return (
    <animated.div style={animation} className="container mx-auto px-4" id="about">
      <h2 className="text-4xl font-bold mb-8 text-center glitch" data-text="About Me">
        About Me
      </h2>
      <div className="bg-cyber-surface p-8 rounded-lg shadow-lg glitch-box">
        <p className="text-lg leading-relaxed font-mono text-cyber-text glitch-text">
          {text}
          <span className="animate-pulse text-cyber-primary">|</span>
        </p>
      </div>
    </animated.div>
  );
};

export default About;
