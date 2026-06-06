import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  return (
    <PageTransition className="pt-32 md:pt-48 pb-12 px-6 md:px-12 relative z-10 flex flex-col min-h-screen bg-neutral-950">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-rose-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col relative z-10">
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 flex-grow items-center">
          
          {/* Left Side: Massive Title */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[8vw] font-medium tracking-tighter leading-[0.8] mb-8"
            >
              LET'S <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">TALK</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-neutral-400 font-light max-w-md mx-auto md:mx-0"
            >
              Currently available for selected freelance opportunities. Ready to create something extraordinary together?
            </motion.p>
          </div>

          {/* Right Side: Contact Info / Fake Form Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-medium mb-8 text-white flex items-center gap-3">
              <Mail className="text-rose-400" /> Start a Conversation
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Email Inquiry</label>
                <a href="mailto:hello@studio.com" className="text-2xl md:text-4xl hover:text-rose-400 transition-colors font-medium tracking-tight">
                  hello@studio.com
                </a>
              </div>

              <div className="w-full h-px bg-neutral-800 my-4" />

              <div className="flex flex-col gap-4">
                <label className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Social Presence</label>
                <div className="flex flex-col gap-3">
                  <a href="#" className="flex items-center justify-between group p-4 rounded-xl border border-neutral-800 hover:border-rose-500/50 bg-neutral-950 transition-colors">
                    <div className="flex items-center gap-3 text-white">
                      <Twitter size={20} /> <span className="font-medium">Twitter / X</span>
                    </div>
                    <ArrowRight size={16} className="text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </a>
                  <a href="#" className="flex items-center justify-between group p-4 rounded-xl border border-neutral-800 hover:border-rose-500/50 bg-neutral-950 transition-colors">
                    <div className="flex items-center gap-3 text-white">
                      <Linkedin size={20} /> <span className="font-medium">LinkedIn</span>
                    </div>
                    <ArrowRight size={16} className="text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </a>
                  <a href="#" className="flex items-center justify-between group p-4 rounded-xl border border-neutral-800 hover:border-rose-500/50 bg-neutral-950 transition-colors">
                    <div className="flex items-center gap-3 text-white">
                      <Github size={20} /> <span className="font-medium">GitHub</span>
                    </div>
                    <ArrowRight size={16} className="text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-neutral-600">
          <p>© {new Date().getFullYear()} STUDIO CRAFT</p>
          <p>LOCATED IN CYBERSPACE</p>
        </div>

      </div>
    </PageTransition>
  );
}
