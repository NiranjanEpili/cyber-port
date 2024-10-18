import React from 'react';
import { Shield, Lock, Code, Wifi, Server, Database } from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'Penetration Testing', icon: Shield },
    { name: 'Network Security', icon: Wifi },
    { name: 'Malware Analysis', icon: Lock },
    { name: 'Secure Coding', icon: Code },
    { name: 'Incident Response', icon: Server },
    { name: 'Database Security', icon: Database },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <skill.icon className="h-12 w-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;