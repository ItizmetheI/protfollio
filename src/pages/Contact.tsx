import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import RevealText from '../components/RevealText';
import ScrambleText from '../components/ScrambleText';
import Magnetic from '../components/Magnetic';

export default function Contact() {
  return (
    <PageTransition className="pt-32 pb-0 px-6 md:px-12 relative z-10 flex flex-col min-h-[100svh] bg-neutral-950">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-violet-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col relative z-10">
        
        <div className="flex flex-col gap-16 items-center text-center mt-12 mb-32">
          <div>
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-neutral-800 bg-neutral-900 mb-8 font-sans font-bold uppercase tracking-widest text-xs text-neutral-400 shadow-xl">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               Accepting 2026 Inquiries
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[8vw] font-display font-medium tracking-tighter leading-[0.85] uppercase rgb-hover mb-12"
            >
              START A <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-500">PROJECT</span>
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.4 }}
            >
               <Magnetic strength={0.2}>
                  {/* TODO: replace with real email */}
                  <a href="mailto:hello@ahmedbarkat.com" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-1 bg-gradient-to-r from-violet-500 to-pink-600">
                    <span className="absolute inset-0 bg-neutral-950 rounded-full group-hover:bg-opacity-0 transition-opacity duration-300" />
                    <span className="relative flex items-center justify-center gap-4 px-12 py-6 bg-transparent text-white text-xl md:text-3xl font-display font-bold tracking-tight">
                      <Mail size={28} /> <ScrambleText text="hello@ahmedbarkat.com" delay={0.8} />
                    </span>
                  </a>
               </Magnetic>
            </motion.div>
          </div>
        </div>

        {/* Footer info grid */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-neutral-800 pt-12 pb-8 text-neutral-400 font-sans">
          
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-display font-medium uppercase tracking-widest text-sm mb-4">Location</h4>
            <div className="text-sm">
               <RevealText text="Located in Cyberspace." delay={0.5} /> <br/>
               <RevealText text="Operating Worldwide." delay={0.6} />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-center">
            <h4 className="text-white font-display font-medium uppercase tracking-widest text-sm mb-4 w-full md:text-center">Social</h4>
            <div className="flex gap-6 w-full md:justify-center">
               <Magnetic><a href="#" className="hover:text-violet-400 transition-colors"><Twitter size={24} /></a></Magnetic>
               <Magnetic><a href="#" className="hover:text-violet-400 transition-colors"><Linkedin size={24} /></a></Magnetic>
               <Magnetic><a href="#" className="hover:text-violet-400 transition-colors"><Github size={24} /></a></Magnetic>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:items-end text-sm">
            <h4 className="text-white font-display font-medium uppercase tracking-widest text-sm mb-4 md:text-right w-full">Legal</h4>
            <p>© {new Date().getFullYear()} AHMED BARKAT</p>
            <p>KUALA LUMPUR, MY</p>
          </div>

        </div>

      </div>
    </PageTransition>
  );
}
