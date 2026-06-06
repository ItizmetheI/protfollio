import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function RevealText({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 -mb-1 mr-[0.3em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.16, 1, 0.3, 1], 
              delay: delay + (i * 0.05) 
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
