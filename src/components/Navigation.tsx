import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Contact', path: '/contact' }
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center text-white">
        <Link 
          to="/"
          onClick={() => setIsMenuOpen(false)}
          className="text-lg font-medium tracking-tighter"
        >
          AB<span className="opacity-50">©</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          {LINKS.slice(1).map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-colors ${location.pathname === link.path ? 'text-violet-400' : 'hover:text-violet-300 text-neutral-400'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden z-50 text-white relative w-6 h-6 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-neutral-950 flex flex-col justify-center items-center gap-8 text-3xl font-light tracking-tighter"
          >
             {LINKS.map((link) => (
               <Link 
                 key={link.path} 
                 to={link.path} 
                 onClick={() => setIsMenuOpen(false)} 
                 className={`transition-all hover:italic hover:text-violet-400 ${location.pathname === link.path ? 'text-violet-500 italic' : 'text-neutral-400'}`}
               >
                 {link.name}
               </Link>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
