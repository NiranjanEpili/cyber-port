import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  inView: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ inView }) => {
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const projects = [
    {
      title: 'Advance Vulnerability Scanner Dashboard',
      description: 'This is a Streamlit-based web application that performs advanced vulnerability scanning for URLs and files.',
      technologies: ["Python 3.7+","Streamlit","Requests","Python-Whois","Cryptography","Pandas","lsxWriter","Python-dotenv"],
      github: 'https://github.com/NiranjanEpili/Advance-Vulnerability-Scanner-Dashboard',
      demo: 'https://niranjan-epili-advance-vulnerability-scanner-dashboa-app-6vtrvv.streamlit.app/',
    },
    {
      title: 'NCompany.',
      description: 'Startup webiste which is multi ventured company. It is a static website with a contact form.',
      technologies: ["JavaScript","Vercel","HTML","CSS","Web3forms","Vite"],
      github:"https://github.com/NiranjanEpili",
      demo: 'www.ncompanyinc.tech',
    },
    {
      title: 'Diksha Collection',
      description: 'This is a E-commerce website for a jewellry store. It is a full-stack website',
      technologies: ["TypeScript","JavaScript","CSS","HTML","Firebase","imgBB"],
      github: 'https://github.com/NiranjanEpili',
      demo: 'https://dishacollection.vercel.app/',
    }
  ];

  return (
    <animated.div style={animation} className="container mx-auto px-4" id="projects">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyber-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-cyber-surface p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-cyber-secondary">{project.title}</h3>
            <p className="text-cyber-text mb-4">{project.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-cyber-primary mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-cyber-bg text-cyber-accent px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyber-secondary hover:text-cyber-primary"
              >
                <Github className="w-5 h-5 mr-1" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyber-secondary hover:text-cyber-primary"
              >
                <ExternalLink className="w-5 h-5 mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </animated.div>
  );
};

export default Projects;