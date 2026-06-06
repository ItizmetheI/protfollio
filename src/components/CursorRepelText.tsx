import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function CursorRepelText({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to container center
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const handleMouseLeave = () => {
      setMousePos({ x: -1000, y: -1000 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      {text.split('').map((char, i) => (
        <RepellingChar key={i} char={char} index={i} containerMouseX={mousePos.x} containerMouseY={mousePos.y} />
      ))}
    </div>
  );
}

function RepellingChar({ char, index, containerMouseX, containerMouseY }: { char: string, index: number, containerMouseX: number, containerMouseY: number }) {
  const charRef = useRef<HTMLSpanElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!charRef.current) return;
    if (containerMouseX === -1000) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const rect = charRef.current.getBoundingClientRect();
    // Use window coordinates to map character distance globally
    const charX = rect.left + rect.width / 2;
    const charY = rect.top + rect.height / 2;

    const dx = window.event && (window.event as MouseEvent).clientX ? (window.event as MouseEvent).clientX - charX : 1000;
    const dy = window.event && (window.event as MouseEvent).clientY ? (window.event as MouseEvent).clientY - charY : 1000;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Repel radius
    const maxRadius = 100;
    if (distance < maxRadius) {
      // Force calculation: closer = stronger push
      const force = (maxRadius - distance) / maxRadius;
      // direction vector
      const nx = dx / distance;
      const ny = dy / distance;
      
      const pushStrength = 30; // max px to push
      setOffset({ x: -nx * force * pushStrength, y: -ny * force * pushStrength });
    } else {
      setOffset({ x: 0, y: 0 });
    }
    
  }, [containerMouseX, containerMouseY]);

  if (char === ' ') return <span className="inline-block w-[0.3em]">&nbsp;</span>;

  return (
    <motion.span 
      ref={charRef} 
      className="inline-block transition-transform duration-200 ease-out"
      animate={{ x: offset.x, y: offset.y, fontWeight: offset.y !== 0 ? 300 : 700 }}
      layout
    >
      {char}
    </motion.span>
  );
}
