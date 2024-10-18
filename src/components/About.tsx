import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="John Doe"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              I'm Niranjan Epili, a passionate cybersecurity expert and ethical hacker with over 10 years of experience in protecting digital assets and uncovering vulnerabilities.
            </p>
            <p className="text-lg mb-4">
              My mission is to make the digital world a safer place by identifying and mitigating security risks before they can be exploited by malicious actors.
            </p>
            <p className="text-lg">
              When I'm not securing networks or conducting penetration tests, you can find me participating in CTF competitions or mentoring the next generation of cybersecurity professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;