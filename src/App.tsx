import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      {/* @ts-expect-error key is required for AnimatePresence to detect route changes */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.add('antialiased', 'bg-neutral-950', 'text-neutral-200', 'overflow-x-hidden');
    
    // Smooth pointer logic for ambient background glow
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      {/* Dynamic Ambient Cursor Glow */}
      <div 
        className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-rose-500/10 to-purple-500/10 blur-[120px] transition-transform duration-700 ease-out hidden lg:block"
        style={{ transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)` }}
      />
      
      <div className="min-h-screen bg-neutral-950 selection:bg-rose-500 selection:text-white relative z-10 w-full overflow-hidden">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
