import { useEffect, useState } from 'react';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$*&%";

interface ScrambleTextProps {
  text: string;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function ScrambleText({ text, delay = 0, className = "", duration = 1.5 }: ScrambleTextProps) {
  // Start with invisible characters or blanks to prevent layout shift initially, 
  // but it's simpler to just start with scrambled characters right away
  const [displayText, setDisplayText] = useState(() => 
    text.replace(/[^\s]/g, () => CHARS[Math.floor(Math.random() * CHARS.length)])
  );

  useEffect(() => {
    let iteration = 0;
    let interval: NodeJS.Timeout | null = null;
    
    const frames = (duration * 1000) / 40; // 40ms per frame
    const step = text.length / frames;
    
    // Start with a brief delay of random chars if we want that, 
    // or just lock them in from the start. We'll start randomizing immediately 
    // when startAnimation is called.
    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === ' ') return ' ';
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });
        
        if (iteration >= text.length) {
          clearInterval(interval!);
          setDisplayText(text); // Ensure precise final string
        }
        
        iteration += step;
      }, 40);
    };

    const timeout = setTimeout(startAnimation, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, duration]);

  return <span className={`inline-block whitespace-nowrap ${className}`}>{displayText}</span>;
}
