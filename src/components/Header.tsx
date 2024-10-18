import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 fixed w-full z-10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">Niranjan Epili</span>
        </div>
        <div>
          <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">About</a>
          <a href="#skills" className="text-gray-300 hover:text-white px-3 py-2">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white px-3 py-2">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;