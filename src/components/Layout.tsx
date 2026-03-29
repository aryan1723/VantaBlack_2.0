import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Radio, Shield, Terminal, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [time, setTime] = React.useState(new Date().toISOString().split('T')[1].split('.')[0]);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toISOString().split('T')[1].split('.')[0]);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-vanta-black">
      <div className="crt-overlay pointer-events-none" />
      
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 h-16 bg-vanta-black/80 backdrop-blur-xl border-b border-vanta-green/20 shadow-[0_0_20px_rgba(57,255,20,0.1)]">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-black text-vanta-green tracking-tighter italic font-sans hover:brightness-125 transition-all group">
          <Globe size={24} className="group-hover:rotate-12 transition-transform duration-500" />
          <span>VANTABLACK</span>
        </NavLink>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink 
            to="/" 
            className={({ isActive }) => `font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all ${isActive ? 'text-vanta-green border-b-2 border-vanta-green pb-1 animate-pulse' : 'text-vanta-green/50 hover:text-vanta-green'}`}
          >
            STRATEGIC_OVERVIEW
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all ${isActive ? 'text-vanta-green border-b-2 border-vanta-green pb-1 animate-pulse' : 'text-vanta-green/50 hover:text-vanta-green'}`}
          >
            ABOUT_US
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `font-sans uppercase tracking-[0.2em] text-xs font-bold transition-all ${isActive ? 'text-vanta-green border-b-2 border-vanta-green pb-1 animate-pulse' : 'text-vanta-green/50 hover:text-vanta-green'}`}
          >
            CONTACT_US
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <NavLink 
            to="/contact"
            className="text-vanta-green hover:bg-vanta-green/10 p-2 transition-all hover:skew-x-1 flex items-center gap-2 group"
          >
            <span className="hidden sm:inline text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity">CMD</span>
            <Terminal size={20} />
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-vanta-green p-2 hover:bg-vanta-green/10 transition-all"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-vanta-black/95 backdrop-blur-2xl md:hidden pt-24 px-8"
          >
            <div className="flex flex-col gap-8">
              <NavLink 
                to="/" 
                className={({ isActive }) => `font-sans uppercase tracking-[0.3em] text-lg font-black transition-all ${isActive ? 'text-vanta-green' : 'text-vanta-green/40'}`}
              >
                STRATEGIC_OVERVIEW
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `font-sans uppercase tracking-[0.3em] text-lg font-black transition-all ${isActive ? 'text-vanta-green' : 'text-vanta-green/40'}`}
              >
                ABOUT_US
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `font-sans uppercase tracking-[0.3em] text-lg font-black transition-all ${isActive ? 'text-vanta-green' : 'text-vanta-green/40'}`}
              >
                CONTACT_US
              </NavLink>
              
              <div className="mt-12 pt-8 border-t border-vanta-green/10">
                <div className="text-[10px] font-mono text-vanta-green/20 uppercase tracking-widest mb-4">System Diagnostics</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-vanta-green/40">
                    <span>CORE_OS:</span>
                    <span className="text-vanta-green">v2.0.4</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-vanta-green/40">
                    <span>UPTIME:</span>
                    <span className="text-vanta-green">NOMINAL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 pt-16 pb-16 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-2 bg-vanta-black/90 border-t border-vanta-cyan/10 text-[8px] md:text-[10px] tracking-widest uppercase font-mono gap-2 md:gap-0">
        <div className="text-vanta-cyan/40 hidden sm:block">CORE_OS_V2.0.4_STABLE</div>
        <div className="flex gap-4 md:gap-6 items-center">
          <span className="text-vanta-cyan hover:text-vanta-green cursor-crosshair transition-all opacity-80">HEARTBEAT_ACTIVE</span>
          <div className="hidden md:block w-1 h-1 bg-vanta-cyan/30 rounded-full" />
          <span className="hidden md:block text-vanta-cyan/40 hover:text-vanta-green cursor-crosshair">ENCRYPTION_LAYER_7</span>
          <div className="hidden md:block w-1 h-1 bg-vanta-cyan/30 rounded-full" />
          <span className="text-vanta-cyan/40 hover:text-vanta-green cursor-crosshair">SYS_SYNC_00</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-vanta-green animate-ping rounded-full" />
          <span className="text-vanta-cyan">SYSTEM_ONLINE</span>
          <span className="ml-2 md:ml-4 text-vanta-cyan/30">UTC: {time}</span>
        </div>
      </footer>

      {/* Static HUD Elements */}
      <div className="fixed top-20 right-4 w-48 h-48 pointer-events-none opacity-20 hidden xl:block">
        <div className="absolute inset-0 border-r-2 border-b-2 border-vanta-cyan" />
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] leading-tight text-vanta-cyan text-right">
          // SCANNING_SECTOR_7G<br/>
          // RECOGNITION_ENABLED<br/>
          // AI_OVERRIDE_DISABLED<br/>
          // TRACE_ROUTE_ACTIVE
        </div>
      </div>
      <div className="fixed bottom-20 left-4 w-48 h-48 pointer-events-none opacity-20 hidden xl:block">
        <div className="absolute inset-0 border-l-2 border-t-2 border-vanta-green" />
        <div className="absolute bottom-0 left-0 p-4 font-mono text-[8px] leading-tight text-vanta-green">
          // UPTIME: 412:12:05:44<br/>
          // KERNEL: MONOLITH_V2<br/>
          // SHELL: OBSIDIAN_ZSH<br/>
          // STATUS: NOMINAL
        </div>
      </div>
    </div>
  );
}
