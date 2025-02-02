import React, { useEffect, useState, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export default function ScrambleText({ text, className = '', delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef<number>();
  const frameRef = useRef(0);
  const originalTextRef = useRef(text);
  const shouldScrambleRef = useRef<boolean[]>([]);

  useEffect(() => {
    // Randomly decide which characters should be scrambled
    shouldScrambleRef.current = text.split('').map(() => Math.random() > 0.7);

    const startAnimation = () => {
      let frame = 0;
      const totalFrames = 40;
      const finalText = originalTextRef.current;

      const animate = () => {
        frame++;
        const progress = frame / totalFrames;

        let currentText = '';
        for (let i = 0; i < finalText.length; i++) {
          // If this character shouldn't be scrambled, just show it immediately
          if (!shouldScrambleRef.current[i]) {
            currentText += finalText[i];
            continue;
          }

          if (progress * finalText.length > i) {
            currentText += finalText[i];
          } else if (progress * (finalText.length + 12) > i) {
            currentText += characters[Math.floor(Math.random() * characters.length)];
          } else {
            currentText += ' ';
          }
        }

        setDisplayText(currentText);

        if (frame < totalFrames) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };

      frameRef.current = requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timer);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [delay]);

  return (
    <span className={className}>
      {displayText || text}
    </span>
  );
}