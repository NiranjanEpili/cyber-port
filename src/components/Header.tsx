import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyber-surface py-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="text-cyber-primary mr-2" />
          <span className="text-xl font-bold text-cyber-text">Niranjan Epili</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-cyber-text hover:text-cyber-primary">Home</a></li>
            <li><a href="#about" className="text-cyber-text hover:text-cyber-primary">About</a></li>
            <li><a href="#skills" className="text-cyber-text hover:text-cyber-primary">Skills</a></li>
            <li><a href="#projects" className="text-cyber-text hover:text-cyber-primary">Projects</a></li>
            <li><a href="#contact" className="text-cyber-text hover:text-cyber-primary">Contact</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="text-cyber-primary" /> : <Menu className="text-cyber-primary" />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
        }`}
        style={{ height: isMenuOpen ? 'auto' : '0', overflow: 'hidden' }}
      >
        <nav>
          <ul className="flex flex-col space-y-4 bg-cyber-surface py-4">
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
