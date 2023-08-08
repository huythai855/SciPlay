import React, { useState, useEffect } from 'react';
import './Interactive.css';

const TypewriterEffect = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <div className="typewriter">
      <h1>{displayText}</h1>
    </div>
  );
};

export default TypewriterEffect;