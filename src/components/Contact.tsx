import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg mb-4">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <div className="flex items-center mb-4">
              <Mail className="h-6 w-6 mr-2" />
              <a href="mailto:niranjanepili@outlook.in" className="text-green-500 hover:text-green-400">
                Niranjan Epili
              </a>
            </div>
            <div className="flex items-center mb-4">
              <Linkedin className="h-6 w-6 mr-2" />
              <a href="https://linkedin.com/in/niranjanepili" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                Niranjan Epili
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-6 w-6 mr-2" />
              <a href="https://github.com/niranjanepili" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400">
                Niranjan Epili
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;