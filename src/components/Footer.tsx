import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyber-surface py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-cyber-text">
          &copy; {new Date().getFullYear()} Niranjan Epili. All rights reserved.
        </p>
        <p className="text-cyber-secondary mt-2">
          Google Certified Cybersecurity Expert & Ethical Hacker
        </p>
      </div>
    </footer>
  );
};

export default Footer;