import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Code, Shield, Server, Database } from 'lucide-react';

interface SkillsProps {
  inView: boolean;
}

const Skills: React.FC<SkillsProps> = ({ inView }) => {
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const skills = [
    { name: 'Programming', icon: Code, items: ['Python', 'JavaScript', 'C++', 'Java'] },
    { name: 'Security', icon: Shield, items: ['Penetration Testing', 'Vulnerability Assessment', 'Incident Response'] },
    { name: 'Networking', icon: Server, items: ['TCP/IP', 'Firewalls', 'VPNs', 'IDS/IPS'] },
    { name: 'Databases', icon: Database, items: ['SQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  ];

  return (
    <animated.div style={animation} className="container mx-auto px-4" id="skills">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyber-primary">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-cyber-surface p-6 rounded-lg shadow-lg">
            <skill.icon className="text-cyber-secondary w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4 text-center text-cyber-primary">{skill.name}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <span className="w-2 h-2 bg-cyber-accent rounded-full mr-2"></span>
                  <span className="text-cyber-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Skills;