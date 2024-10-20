import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-cyber-surface py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="text-cyber-primary mr-2" />
          <span className="text-xl font-bold text-cyber-text">CyberPortfolio</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-cyber-text hover:text-cyber-primary">Home</a></li>
            <li><a href="#about" className="text-cyber-text hover:text-cyber-primary">About</a></li>
            <li><a href="#skills" className="text-cyber-text hover:text-cyber-primary">Skills</a></li>
            <li><a href="#projects" className="text-cyber-text hover:text-cyber-primary">Projects</a></li>
            <li><a href="#contact" className="text-cyber-text hover:text-cyber-primary">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;