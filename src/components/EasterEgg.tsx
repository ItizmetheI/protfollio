import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);
  const secretCode = ['a', 'u', 'r', 'a'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prev) => {
        const newKeys = [...prev, e.key.toLowerCase()].slice(-secretCode.length);
        if (newKeys.join('') === secretCode.join('')) {
          setIsActive(true);
          setTimeout(() => setIsActive(false), 6000);
        }
        return newKeys;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] pointer-events-none mix-blend-color-dodge flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)' }}
        >
           {/* Crazy effect */}
           <motion.div 
             className="absolute w-full h-full bg-[radial-gradient(circle_at_center,black,transparent)] opacity-80 mix-blend-overlay"
           />
           <motion.div 
             animate={{ 
               rotate: [0, 10, -10, 5, -5, 0],
               scale: [1, 1.5, 0.8, 1.2, 1],
               filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
             }} 
             transition={{ duration: 0.5, repeat: Infinity }}
             className="text-[20vw] font-display font-bold text-white uppercase tracking-tighter drop-shadow-[0_0_100px_white]"
           >
             AURA
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
