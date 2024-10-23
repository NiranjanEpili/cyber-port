import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Mail, Linkedin, Github } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

interface ContactProps {
  inView: boolean;
}

const Contact: React.FC<ContactProps> = ({ inView }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 1000 },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        'service_angt0ij', // EmailJS service ID
        'template_k66orvj', // EmailJS template ID
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        'M0LzPj7JlEpnL4-1A' // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          toast.success("Your message has been sent! We will contact you soon."); // Success toast
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('Failed to send email.', error.text);
          toast.error("Failed to send message. Please try again."); // Error toast
        }
      );
  };

  return (
    <animated.div style={animation} className="container mx-auto px-4" id="contact">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyber-primary">Get in Touch</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyber-secondary mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-cyber-bg text-cyber-text rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyber-secondary mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-cyber-bg text-cyber-text rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyber-secondary mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-3 py-2 bg-cyber-bg text-cyber-text rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyber-primary text-cyber-bg py-2 px-4 rounded-md hover:bg-cyber-secondary transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-cyber-secondary">Connect with Me</h3>
          <div className="space-y-4">
            <a href="mailto:niranjanepili@outlook.in" className="flex items-center text-cyber-text hover:text-cyber-primary">
              <Mail className="w-6 h-6 mr-3" />
              niranjanepili@outlook.in
            </a>
            <a href="https://www.linkedin.com/in/niranjan-epili-24509528b/" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyber-text hover:text-cyber-primary">
              <Linkedin className="w-6 h-6 mr-3" />
              LinkedIn
            </a>
            <a href="https://github.com/NiranjanEpili" target="_blank" rel="noopener noreferrer" className="flex items-center text-cyber-text hover:text-cyber-primary">
              <Github className="w-6 h-6 mr-3" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toast container for notifications */}
    </animated.div>
  );
};

export default Contact;
