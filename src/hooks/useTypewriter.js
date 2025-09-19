import { useState, useEffect } from 'react';

const useTypewriter = (text, speed = 50, delay = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, isComplete]);

  const reset = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsComplete(false);
  };

  return { displayText, isComplete, reset };
};

export default useTypewriter;
