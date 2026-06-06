import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Work from './pages/Work';
import Expertise from './pages/Expertise';
import Contact from './pages/Contact';
import EasterEgg from './components/EasterEgg';

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
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  
  const smoothX = useSpring(cursorX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(cursorY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    document.documentElement.classList.add('antialiased', 'bg-neutral-950', 'text-neutral-200', 'overflow-x-hidden');
    
    // Smooth scrolling setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Smooth pointer logic for ambient background glow
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 300);
      cursorY.set(e.clientY - 300);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
    };
  }, [cursorX, cursorY]);

  return (
    <BrowserRouter>
      <div className="bg-noise" />
      <EasterEgg />
      
      {/* Dynamic Ambient Cursor Glow */}
      <motion.div 
        className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-rose-500/10 to-purple-500/10 blur-[120px] hidden lg:block"
        style={{ x: smoothX, y: smoothY, willChange: "transform" }}
      />
      
      <div className="min-h-screen bg-neutral-950 selection:bg-rose-500 selection:text-white relative z-10 w-full overflow-hidden">
        <Navigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
