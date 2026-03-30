import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { Database, History, ShieldCheck, Eraser, Activity, Network, Lock } from 'lucide-react';

import vantaVaultLogo from '../assets/products/VantaVault.png';
import vantaAuditLogo from '../assets/products/VantaAudit.png';
import vantaGuardLogo from '../assets/products/VantaGuard.png';
import vantaSweepLogo from '../assets/products/VantaSweep.png';
const PillarCard = ({ pillar, title, subtitle, description, status, icon: Icon, githubUrl, exeUrl }: any) => (
  <motion.div 
    whileHover={{ scale: 1.01 }}
    className="bg-vanta-surface border border-vanta-green/10 p-8 relative group hover:bg-vanta-surface-high transition-all clip-hud"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
      <Icon className="text-vanta-green" size={40} />
    </div>
    <div className="text-vanta-green font-mono text-xs mb-2 tracking-widest uppercase">
      {pillar} // {subtitle}
    </div>
    <h3 className="text-2xl font-sans font-bold mb-4 uppercase text-vanta-cyan">{title}</h3>
    <div className="h-px w-16 bg-vanta-green mb-4" />
    <p className="text-sm font-mono text-vanta-green/60 mb-6 leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-3 mb-6">
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-vanta-green/10 border border-vanta-green/40 text-vanta-green font-mono text-[10px] px-3 py-2 hover:bg-vanta-green hover:text-vanta-black transition-all glow-green uppercase tracking-widest flex items-center gap-2"
      >
        GITHUB_REPOSITORY
      </a>
      <a 
        href={exeUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-vanta-cyan/10 border border-vanta-cyan/40 text-vanta-cyan font-mono text-[10px] px-3 py-2 hover:bg-vanta-cyan hover:text-vanta-black transition-all glow-cyan uppercase tracking-widest flex items-center gap-2"
      >
        DOWNLOAD_EXECUTABLE
      </a>
    </div>
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-vanta-green" />
      <span className="text-[10px] font-mono uppercase tracking-tighter">STATUS: {status}</span>
    </div>
  </motion.div>
);


export default function StrategicOverview() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="pb-32 px-4 md:px-12 max-w-[1600px] mx-auto min-h-screen">
      {/* Hero Section */}
      <section className="relative mb-12 md:mb-20 pt-8">
        <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-vanta-green opacity-40 hidden md:block" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-4 text-vanta-green">
              <span className="h-px w-12 bg-vanta-green" />
              <span className="text-[10px] md:text-xs font-mono tracking-[0.5em] uppercase">System_Link: Stable_2.0.4</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black font-sans tracking-tighter text-white leading-none mb-6">
              VANTABLACK 2.0:<br />
              <span className="text-vanta-green drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">INTEGRATED SECURITY</span><br />
              ARCHITECTURE
            </h1>
            <p className="text-lg md:text-xl font-mono text-vanta-cyan uppercase tracking-wider mb-8 max-w-2xl border-l-4 border-vanta-cyan pl-4 md:pl-6">
              PRIORITIZING MONOLITHIC INTEGRITY AND LINEAR PERFORMANCE.
            </p>
            <p className="text-vanta-green/60 text-base md:text-lg max-w-xl font-light leading-relaxed">
              Vantablack 2.0 is a next-generation security framework engineered for high-stakes data environments. By eliminating sharding complexity, we achieve absolute data persistence and zero-latency execution.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
            <div className="text-[10px] font-mono text-vanta-green/40 leading-tight mb-4 lg:mb-0">
              LAT: 40.7128° N<br />
              LONG: 74.0060° W<br />
              SIGNAL: ENCRYPTED<br />
              VECTOR: ALPHA_9
            </div>
            <div className="w-full max-w-[300px] lg:max-w-none aspect-square bg-vanta-surface-high/20 relative border border-vanta-green/20 overflow-hidden clip-hud">
              <motion.img 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                alt="Digital core visualization" 
                className="w-full h-full object-cover group-hover:opacity-100 transition-opacity duration-700" 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=800" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vanta-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 bg-vanta-cyan/5 mix-blend-overlay" />
              <div className="absolute top-4 right-4 text-[10px] font-mono text-vanta-green bg-vanta-black px-2 py-1">LIVE_TELEMETRY</div>
              <div className="scanning-line" />
            </div>
          </div>
        </div>
      </section>

      {/* Active Modules */}
      <section id="active-modules" className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 border-b border-vanta-green/10 pb-4 gap-2">
          <h2 className="font-sans text-xl md:text-2xl font-bold tracking-[0.2em] uppercase text-white flex items-center gap-3">
            <Database className="text-vanta-green" size={24} />
            Active Modules
          </h2>
          <span className="text-[10px] font-mono text-vanta-green/40 uppercase tracking-widest">Protocol: 4_Pillars_Enabled</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PillarCard 
            pillar="PILLAR_01"
            subtitle="PERSISTENCE"
            title="VantaVault"
            description="A Physical-Token based File Encryption Suite. Uses Image based encryption via USB drive."
            status="OPTIMIZED"
            icon={Database}
            githubUrl="https://github.com/aryan1723/VantaBlack"
            exeUrl="https://github.com/aryan1723/VantaBlack/releases"
          />
          <PillarCard 
            pillar="PILLAR_02"
            subtitle="TRUST"
            title="VantaAudit"
            description="A lightweight, high-performance static analysis tool designed to perform rapid triage on suspicious files. Provides a 'Vanta Threat Score' to identify malicious payloads."
            status="MONITORING"
            icon={History}
            githubUrl="https://github.com/aryan1723/VantaAudit"
            exeUrl="https://github.com/aryan1723/VantaAudit/releases"
          />
          <PillarCard 
            pillar="PILLAR_03"
            subtitle="DEFENSE"
            title="VantaGuard"
            description="A portable, kernel-aware security engine to detect and neutralize ransomware attacks in real-time by monitoring file system events and analyzing data entropy."
            status="ACTIVE_SHIELD"
            icon={ShieldCheck}
            githubUrl="https://github.com/aryan1723/VantaGuard"
            exeUrl="https://github.com/aryan1723/VantaGuard/releases"
          />
          <PillarCard 
            pillar="PILLAR_04"
            subtitle="HYGIENE"
            title="VantaSweep"
            description="A native Windows utility built in Java that securely and permanently shreds files using synchronous binary overwriting. Features a self-extracting native installer."
            status="PURGE_READY"
            icon={Eraser}
            githubUrl="https://github.com/aryan1723/CleanSweep"
            exeUrl="https://github.com/aryan1723/CleanSweep/releases"
          />
        </div>
      </section>

      {/* Protocol Identities (Logos) */}
      <section id="protocol-identities" className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 border-b border-vanta-green/10 pb-4 gap-2">
          <h2 className="font-sans text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white flex items-center gap-3">
            <Lock className="text-vanta-cyan" size={20} />
            Protocol Identities
          </h2>
          <span className="text-[10px] font-mono text-vanta-green/40 uppercase tracking-widest">Visual_Signatures_Connected</span>
        </div>
        <div className="bg-vanta-surface border border-vanta-green/20 p-8 clip-hud">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start justify-items-center mt-4">
            {/* VantaVault */}
            <div className="flex flex-col items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="w-24 h-24 md:w-32 md:h-32 bg-black border border-vanta-green/30 relative overflow-hidden group hover:border-vanta-cyan hover:glow-cyan transition-all flex items-center justify-center p-4">
                <div className="scanning-line" />
                <div className="absolute inset-0 bg-vanta-green/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                <img src={vantaVaultLogo} alt="VantaVault Logo" className="w-full h-full object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0" />
              </motion.div>
              <div className="text-center font-mono uppercase tracking-widest leading-tight">
                <div className="text-vanta-cyan font-bold text-[10px] md:text-xs mb-1">VANTAVAULT</div>
                <div className="text-vanta-green/50 text-[8px] md:text-[9px]">PILLAR 01 // PERSISTENCE</div>
              </div>
            </div>

            {/* VantaAudit */}
            <div className="flex flex-col items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="w-24 h-24 md:w-32 md:h-32 bg-black border border-vanta-green/30 relative overflow-hidden group hover:border-vanta-cyan hover:glow-cyan transition-all flex items-center justify-center p-4">
                <div className="scanning-line" />
                <div className="absolute inset-0 bg-vanta-green/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                <img src={vantaAuditLogo} alt="VantaAudit Logo" className="w-full h-full object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0" />
              </motion.div>
              <div className="text-center font-mono uppercase tracking-widest leading-tight">
                <div className="text-vanta-cyan font-bold text-[10px] md:text-xs mb-1">VANTAAUDIT</div>
                <div className="text-vanta-green/50 text-[8px] md:text-[9px]">PILLAR 02 // TRUST</div>
              </div>
            </div>

            {/* VantaGuard */}
            <div className="flex flex-col items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="w-24 h-24 md:w-32 md:h-32 bg-black border border-vanta-green/30 relative overflow-hidden group hover:border-vanta-cyan hover:glow-cyan transition-all flex items-center justify-center p-4">
                <div className="scanning-line" />
                <div className="absolute inset-0 bg-vanta-green/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                <img src={vantaGuardLogo} alt="VantaGuard Logo" className="w-full h-full object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0" />
              </motion.div>
              <div className="text-center font-mono uppercase tracking-widest leading-tight">
                <div className="text-vanta-cyan font-bold text-[10px] md:text-xs mb-1">VANTAGUARD</div>
                <div className="text-vanta-green/50 text-[8px] md:text-[9px]">PILLAR 03 // DEFENSE</div>
              </div>
            </div>

            {/* VantaSweep */}
            <div className="flex flex-col items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="w-24 h-24 md:w-32 md:h-32 bg-black border border-vanta-green/30 relative overflow-hidden group hover:border-vanta-cyan hover:glow-cyan transition-all flex items-center justify-center p-4">
                <div className="scanning-line" />
                <div className="absolute inset-0 bg-vanta-green/20 mix-blend-color z-10 pointer-events-none group-hover:opacity-0 transition-opacity" />
                <img src={vantaSweepLogo} alt="VantaSweep Logo" className="w-full h-full object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all z-0" />
              </motion.div>
              <div className="text-center font-mono uppercase tracking-widest leading-tight">
                <div className="text-vanta-cyan font-bold text-[10px] md:text-xs mb-1">VANTASWEEP</div>
                <div className="text-vanta-green/50 text-[8px] md:text-[9px]">PILLAR 04 // HYGIENE</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 text-[10px] font-mono text-vanta-green/40 mt-8 tracking-widest uppercase">
            // ALL_SYSTEMS_VERIFIED
          </div>
        </div>
      </section>

      {/* Project Execution Matrix */}
      <section className="mb-16 md:mb-24">
        <div className="bg-vanta-surface-low border border-vanta-green/20 p-4 md:p-8 clip-hud-alt">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="text-vanta-cyan" size={24} />
            <h2 className="font-sans text-lg md:text-xl font-bold tracking-widest uppercase">Project Execution Matrix</h2>
          </div>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="w-full text-left font-mono text-xs md:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="text-vanta-green border-b border-vanta-green/30">
                  <th className="py-4 px-4 font-bold tracking-widest">MODULE</th>
                  <th className="py-4 px-4 font-bold tracking-widest">PRIMARY PILLAR FUNCTION</th>
                  <th className="py-4 px-4 font-bold tracking-widest">KEY TECHNOLOGY</th>
                  <th className="py-4 px-4 font-bold tracking-widest text-right">LOAD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-vanta-green/10">
                {[
                  { name: 'VantaVault', func: 'Storage & Persistence', tech: 'Lattice-Based Encryption', load: '0.04%' },
                  { name: 'VantaAudit', func: 'Accountability & Trust', tech: 'Private Ledger Sync', load: '1.12%' },
                  { name: 'VantaGuard', func: 'Defense & Access Control', tech: 'Neural Traffic Analysis', load: '3.45%' },
                  { name: 'VantaSweep', func: 'Hygiene & Data Erasure', tech: 'DoD 5220.22-M Standard', load: '0.00%' },
                ].map((row) => (
                  <tr key={row.name} className="hover:bg-vanta-green/5 transition-colors group">
                    <td className="py-5 px-4 font-bold text-white">{row.name}</td>
                    <td className="py-5 px-4 text-vanta-green/60">{row.func}</td>
                    <td className="py-5 px-4 text-vanta-cyan">{row.tech}</td>
                    <td className="py-5 px-4 text-right text-vanta-green">{row.load}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] font-mono text-vanta-green/40 uppercase tracking-[0.2em] gap-4">
            <div>SYS_LOAD_STABLE: 14% // TEMP: 32C</div>
            <div className="flex gap-4">
              <span className="animate-pulse">RUNNING_HASH_VALIDATION...</span>
              <span className="text-vanta-green">[ OK ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Data Strip */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
        <div className="bg-vanta-surface p-4 md:p-6 flex items-center justify-between clip-hud">
          <div>
            <div className="text-[9px] md:text-[10px] font-mono text-vanta-green/40 mb-1 uppercase">ENCRYPTION_LATENCY</div>
            <div className="text-xl md:text-2xl font-bold font-mono text-vanta-cyan">0.0004ms</div>
          </div>
          <div className="w-16 h-8 bg-vanta-cyan/10 flex items-end gap-1 p-1">
            <motion.div animate={{ height: [12, 20, 16, 24] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 bg-vanta-cyan" />
            <motion.div animate={{ height: [20, 12, 24, 16] }} transition={{ repeat: Infinity, duration: 1.2 }} className="w-1 bg-vanta-cyan" />
            <motion.div animate={{ height: [16, 24, 12, 20] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-vanta-cyan" />
            <motion.div animate={{ height: [24, 16, 20, 12] }} transition={{ repeat: Infinity, duration: 1.1 }} className="w-1 bg-vanta-cyan" />
          </div>
        </div>
        <div className="bg-vanta-surface p-4 md:p-6 flex items-center justify-between clip-hud">
          <div>
            <div className="text-[9px] md:text-[10px] font-mono text-vanta-green/40 mb-1 uppercase">NODE_CONNECTIVITY</div>
            <div className="text-xl md:text-2xl font-bold font-mono text-vanta-green">99.999%</div>
          </div>
          <Network className="text-vanta-green animate-pulse" size={24} />
        </div>
        <div className="bg-vanta-surface p-4 md:p-6 flex items-center justify-between clip-hud sm:col-span-2 lg:col-span-1">
          <div>
            <div className="text-[9px] md:text-[10px] font-mono text-vanta-green/40 mb-1 uppercase">THREAT_LEVEL</div>
            <div className="text-xl md:text-2xl font-bold font-mono text-white">NULL</div>
          </div>
          <div className="px-3 py-1 bg-vanta-surface-high text-[10px] font-mono border border-vanta-green/20 text-vanta-green/60">SECURE</div>
        </div>
      </section>

      {/* Open Source Banner */}
      <section className="mb-12">
        <div className="bg-vanta-green/5 border border-vanta-green/20 p-6 md:p-8 clip-hud relative overflow-hidden group">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-vanta-green/5 rounded-full blur-3xl group-hover:bg-vanta-green/10 transition-colors" />
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-1 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-3 h-3 bg-vanta-green animate-pulse hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black font-sans text-vanta-green tracking-tighter italic uppercase">STATUS: FREE_AND_OPEN_SOURCE</h2>
              </div>
              <p className="text-vanta-cyan font-mono text-xs md:text-sm tracking-widest mt-2">PROJECT_LICENSE: MIT // VANTABLACK_OS_INITIATIVE</p>
            </div>
            <div className="flex flex-col items-center lg:items-end text-center lg:text-right w-full lg:w-auto">
              <div className="text-[10px] md:text-xs font-mono text-vanta-green/40 mb-4 tracking-[0.3em] uppercase">RECRUITMENT_ACTIVE</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-wrap gap-3 md:gap-4 justify-center lg:justify-end w-full">
                <a 
                  href="https://github.com/aryan1723/VantaBlack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-vanta-green text-vanta-green px-3 md:px-4 py-2 font-sans font-black text-[10px] md:text-xs hover:bg-vanta-green hover:text-vanta-black transition-all glow-green uppercase italic tracking-tighter text-center"
                >
                  VANTA_VAULT
                </a>
                <a 
                  href="https://github.com/aryan1723/VantaAudit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-vanta-green text-vanta-green px-3 md:px-4 py-2 font-sans font-black text-[10px] md:text-xs hover:bg-vanta-green hover:text-vanta-black transition-all glow-green uppercase italic tracking-tighter text-center"
                >
                  VANTA_AUDIT
                </a>
                <a 
                  href="https://github.com/aryan1723/VantaGuard" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-vanta-green text-vanta-green px-3 md:px-4 py-2 font-sans font-black text-[10px] md:text-xs hover:bg-vanta-green hover:text-vanta-black transition-all glow-green uppercase italic tracking-tighter text-center"
                >
                  VANTA_GUARD
                </a>
                <a 
                  href="https://github.com/aryan1723/CleanSweep" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-vanta-green text-vanta-green px-3 md:px-4 py-2 font-sans font-black text-[10px] md:text-xs hover:bg-vanta-green hover:text-vanta-black transition-all glow-green uppercase italic tracking-tighter text-center"
                >
                  VANTA_SWEEP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
