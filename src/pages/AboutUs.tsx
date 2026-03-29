import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LayoutGrid, Route, BadgeCheck, ChevronRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="pt-8 pb-16 px-4 md:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
      {/* TELEMETRY SIDEBAR LEFT */}
      <aside className="hidden lg:flex flex-col col-span-1 space-y-12 border-l border-vanta-green/20 pl-4 py-8 relative">
        <div className="absolute top-0 -left-1">
          <div className="w-2 h-2 bg-vanta-green animate-pulse" />
        </div>
        <div className="text-[10px] text-vanta-green/40 font-mono space-y-2 uppercase">
          <p>SYNC: MONOLITH</p>
          <p>INTEGRITY: 1.0</p>
          <p>SEQ: EXEC_MATRX</p>
          <div className="h-1 bg-vanta-green/10 w-full overflow-hidden">
            <div className="h-full bg-vanta-green w-full" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-1 h-32 bg-gradient-to-b from-vanta-green via-vanta-cyan to-transparent opacity-30" />
          <div className="text-[8px] text-vanta-cyan/60 font-mono rotate-180 [writing-mode:vertical-lr] tracking-[0.2em] h-max">
            LINEAR_PERFORMANCE_OPTIMIZED
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="col-span-1 md:col-span-12 lg:col-span-10 space-y-16 md:space-y-24">
        {/* SECTION 1: MONOLITHIC_INTEGRITY */}
        <section className="relative group">
          <div className="absolute -left-4 top-0 h-full w-1 bg-vanta-green opacity-20 hidden md:block" />
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tighter leading-none mb-4 uppercase">
                MONOLITHIC_<br /><span className="text-vanta-green drop-shadow-[0_0_10px_rgba(57,255,20,0.3)]">INTEGRITY</span>
              </h2>
              <div className="font-mono text-[10px] md:text-xs text-vanta-green/40 tracking-widest uppercase border-t border-vanta-green/30 pt-2">
                STRAT: LINEAR_EXECUTION_V2
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-vanta-surface/30 p-6 md:p-8 border border-vanta-green/10 backdrop-blur-sm relative clip-hud">
              <div className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-vanta-green" />
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-vanta-green opacity-30" />
              <p className="text-vanta-green/80 leading-relaxed mb-6 font-mono text-base md:text-lg">
                Vantablack 2.0 rejects the fragmented complexity of traditional sharding. By implementing <span className="text-vanta-green font-bold">Monolithic Integrity</span>, we eliminate cross-shard latency and coordination overhead. The result is <span className="text-vanta-cyan font-bold">Linear Performance</span> that scales with mathematical precision across high-stakes data environments.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-vanta-cyan pl-4 py-2">
                  <h4 className="text-vanta-cyan font-mono text-[10px] uppercase font-bold tracking-tighter">Throughput</h4>
                  <p className="text-white font-sans font-bold text-lg md:text-xl uppercase">Linear_Scale</p>
                </div>
                <div className="border-l-2 border-vanta-green pl-4 py-2">
                  <h4 className="text-vanta-green font-mono text-[10px] uppercase font-bold tracking-tighter">Architecture</h4>
                  <p className="text-white font-sans font-bold text-lg md:text-xl uppercase">Unified_Core</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE_COUNCIL */}
        <section className="space-y-8 md:space-y-12">
          <div className="flex items-end space-x-4 border-b border-vanta-green/20 pb-4">
            <h2 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-[0.2em]">THE_COUNCIL</h2>
            <span className="font-mono text-[10px] md:text-xs text-vanta-green/40 mb-1 hidden sm:inline">SYSTEM_AUTHORS // READ_ONLY</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { id: 'ARCH_01', name: 'ARYAN', role: 'Architect', seed: 'tech1' },
              { id: 'EXEC_LEAD', name: 'TUSHAR', role: 'Performance Lead', seed: 'tech2' },
              { id: 'MATRIX_SPEC', name: 'MANNAT', role: 'Matrix Specialist', seed: 'tech3' },
            ].map((member) => (
              <div key={member.id} className="bg-vanta-surface relative group overflow-hidden border border-vanta-green/15 p-1">
                <div className="bg-vanta-surface-low h-48 md:h-64 w-full relative overflow-hidden flex items-center justify-center">
                  <div className="scanning-line" />
                  <div className="absolute inset-0 bg-gradient-to-t from-vanta-black to-transparent opacity-80 z-10" />
                  <img 
                    alt={member.name} 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-80 transition-opacity duration-500" 
                    src={`https://picsum.photos/seed/${member.seed}/400/600`} 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="bg-vanta-green/10 text-vanta-green text-[10px] px-2 py-0.5 font-mono border border-vanta-green/30">{member.id}</span>
                  </div>
                </div>
                <div className="p-4 md:p-6 space-y-2">
                  <h3 className="font-sans font-bold text-lg md:text-xl text-white uppercase tracking-tight">{member.name}</h3>
                  <p className="text-vanta-cyan font-mono text-[10px] md:text-[11px] uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: CORE_VALUES */}
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="md:col-span-2 bg-vanta-surface-high/40 p-6 md:p-10 relative clip-hud group hover:bg-vanta-surface-high/60 transition-all duration-300 border border-vanta-green/20">
              <div className="absolute top-4 right-4 text-vanta-green font-mono text-[10px] opacity-30 hidden sm:block">MATRIX_FOUNDATION</div>
              <LayoutGrid className="text-3xl md:text-4xl text-vanta-green mb-6" size={40} />
              <h3 className="font-sans font-bold text-xl md:text-2xl text-white mb-4 uppercase">Core Execution Matrix</h3>
              <p className="text-vanta-green/60 font-mono text-sm leading-relaxed">
                Vantablack is built upon a deterministic execution matrix. Unlike sharded protocols that trade security for speed, our Matrix ensures total state consistency. Every operation is transparent, mathematically absolute, and hardened against external extraction.
              </p>
            </div>
            <div className="bg-vanta-surface p-6 border-l-4 border-vanta-cyan relative">
              <Route className="text-2xl md:text-3xl text-vanta-cyan mb-4" size={32} />
              <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-2 uppercase">Linear Path</h3>
              <p className="text-vanta-green/60 font-mono text-[10px] md:text-[11px] leading-tight">
                Deterministic processing paths eliminate latency spikes and ensure predictable execution timeframes for high-stakes data.
              </p>
            </div>
            <div className="bg-vanta-surface-low p-6 relative flex flex-col justify-between border-t-4 border-vanta-green/20">
              <div>
                <BadgeCheck className="text-2xl md:text-3xl text-vanta-green mb-4" size={32} />
                <h3 className="font-sans font-bold text-lg md:text-xl text-white mb-2 uppercase">Immutable Log</h3>
              </div>
              <p className="text-vanta-green/60 font-mono text-[10px] md:text-[11px] leading-tight">
                Every execution event is recorded within the Monolith, providing an auditable trail of total integrity and zero-trust verification.
              </p>
            </div>
          </div>
        </section>

        {/* DATA STREAM SECTION */}
        <section className="border border-vanta-green/10 p-6 md:p-8 bg-vanta-surface-low/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-1 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`bg-vanta-green/${(i % 3 + 1) * 10} h-full ${i % 2 === 0 ? 'animate-pulse' : ''}`} />
              ))}
            </div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-sans font-bold text-base md:text-lg text-vanta-green uppercase tracking-widest">MATRIX_STATE_LIVE</h3>
              <p className="font-mono text-[10px] md:text-xs text-vanta-green/60">SYNCING_MONOLITH_CORE_0x0... STATUS: STABLE</p>
            </div>
            <Link to="/#active-modules" className="w-full md:w-auto bg-vanta-green text-vanta-black font-sans font-black px-8 py-3 hover:bg-white transition-colors group flex items-center justify-center gap-2 uppercase italic">
              INITIALIZE_CORE
              <ChevronRight className="text-sm font-bold group-hover:translate-x-1 transition-transform" size={16} />
            </Link>
          </div>
        </section>
      </div>

      {/* TELEMETRY SIDEBAR RIGHT */}
      <aside className="hidden lg:flex flex-col col-span-1 space-y-12 border-r border-vanta-green/20 pr-4 py-8 items-end text-right relative">
        <div className="absolute top-0 -right-1">
          <div className="w-2 h-2 bg-vanta-cyan animate-pulse" />
        </div>
        <div className="text-[10px] text-vanta-cyan/40 font-mono space-y-2 uppercase">
          <p>LATENCY: 0.2MS</p>
          <p>THROUGHPUT: MAX</p>
          <p>LOAD: LINEAR</p>
        </div>
        <div className="flex flex-col items-end space-y-1">
          <div className="w-8 h-[2px] bg-vanta-cyan" />
          <div className="w-12 h-[2px] bg-vanta-cyan opacity-60" />
          <div className="w-4 h-[2px] bg-vanta-cyan opacity-30" />
        </div>
        <div className="font-mono text-[10px] text-vanta-green/20 -rotate-90 origin-right translate-y-24 whitespace-nowrap">
          MONOLITH_PROTOCOL_V2.0
        </div>
      </aside>
    </div>
  );
}
