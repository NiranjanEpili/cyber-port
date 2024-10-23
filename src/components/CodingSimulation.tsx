import React, { useState, useEffect } from 'react';
import './simulation.css'; // Custom styles for the hacker look

const CodingSimulation: React.FC = () => {
  const [code, setCode] = useState(''); // Stores typed code
  const [output, setOutput] = useState(''); // Stores the simulated output
  const [isTyping, setIsTyping] = useState(false);

  // Sample "info leak" data (can be anything you want)
  const fakeOutput = `
  Unauthorized Access Granted...
  Retrieving sensitive data...
  Username: user1337
  Password: *********
  IP Address: 192.168.1.101
  Location: Hyderabad, India
  Encryption key: AB43D1F0924H...
  Data transferred: 2.5GB`;

  useEffect(() => {
    // Simulate the "leak" of information after typing stops
    let timeout: NodeJS.Timeout;
    if (!isTyping && code.length > 0) {
      timeout = setTimeout(() => {
        setOutput(fakeOutput);
      }, 1500); // Delay to simulate processing
    }
    return () => clearTimeout(timeout);
  }, [code, isTyping]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    setIsTyping(true);
    setOutput(''); // Clear output when typing
    setTimeout(() => setIsTyping(false), 1000); // Detect typing stop
  };

  return (
    <div className="coding-simulation">
      <h2 className="title">Coding Simulation</h2>
      
      <textarea
        className="code-input"
        placeholder="Start typing your code here..."
        value={code}
        onChange={handleCodeChange}
      />

      <div className="output-box">
        <pre className="output-text">
          {output ? output : <span className="blinking-cursor">|</span>}
        </pre>
      </div>
    </div>
  );
};

export default CodingSimulation;
