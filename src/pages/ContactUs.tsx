import React from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, Server, Cpu, Clock, ShieldAlert, Network, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [isTransmitting, setIsTransmitting] = React.useState(false);
  const [transmissionStatus, setTransmissionStatus] = React.useState<{
    type: 'success' | 'error' | 'idle';
    text: string;
  }>({ type: 'idle', text: '' });

  const handleAbort = () => {
    setName('');
    setEmail('');
    setMessage('');
    setTransmissionStatus({ type: 'idle', text: '' });
    console.log('SESSION_ABORTED: BUFFER_CLEARED');
  };

  const handleTransmit = async () => {
    if (!name || !email || !message) {
      setTransmissionStatus({ 
        type: 'error', 
        text: 'CRITICAL_ERROR: INCOMPLETE_PAYLOAD. ALL FIELDS REQUIRED.' 
      });
      return;
    }

    setIsTransmitting(true);
    setTransmissionStatus({ type: 'idle', text: '' });
    
    try {
      // Hardcoding for preview reliability with trimming
      const serviceId = 'service_6llrti9'.trim();
      const templateId = 'template_ytf53yp'.trim();
      const publicKey = 'B402yNyQpyKQH_kzb'.trim();

      console.log('UPLINK_PARAMETERS_CHECK:', { 
        serviceId, 
        templateId, 
        publicKey: publicKey ? `${publicKey.substring(0, 4)}...` : 'MISSING' 
      });
      
      // Initialize EmailJS with public key (as a backup)
      emailjs.init(publicKey);

      const templateParams = {
        from_name: name,
        name: name,
        from_email: email,
        message: message,
        subject: `VANTABLACK_UPLINK: Message from ${name}`,
        time: new Date().toLocaleString()
      };

      console.log('PAYLOAD_READY:', templateParams);

      // Add a timeout to prevent being stuck forever
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('UPLINK_TIMEOUT: CONNECTION_STALLED')), 15000)
      );

      // Pass publicKey directly as 4th argument for maximum compatibility
      const sendPromise = emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      const result = await Promise.race([sendPromise, timeoutPromise]);
      
      console.log('TRANSMISSION_SUCCESS:', result);
      setTransmissionStatus({ 
        type: 'success', 
        text: 'TRANSMISSION_SUCCESS: DATA_ENCAPSULATED_AND_SENT. UPLINK_CONFIRMED.' 
      });
      
      // Clear form on success after a delay
      setTimeout(() => {
        handleAbort();
      }, 3000);

    } catch (error) {
      console.error('TRANSMISSION_FAILED_FULL_LOG:', error);
      let errorMessage = 'UNKNOWN_UPLINK_ERROR';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'object' && error !== null) {
        // Handle EmailJS JSON error responses
        errorMessage = (error as any).text || (error as any).message || JSON.stringify(error);
        console.error('TRANSMISSION_FAILED_OBJECT_DETAILS:', {
          status: (error as any).status,
          text: (error as any).text,
          message: (error as any).message
        });
      } else {
        errorMessage = String(error);
      }

      setTransmissionStatus({ 
        type: 'error', 
        text: `CRITICAL_ERROR: ${errorMessage}. PLEASE CHECK YOUR NETWORK OR CONFIGURATION.` 
      });
    } finally {
      setIsTransmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 md:px-6 py-20">
      {/* Background Technical Art */}
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none select-none hidden md:block">
        <pre className="text-[8px] leading-none text-vanta-green">
          01011010 01010110<br />
          11110000 10101010<br />
          00001111 01010101<br />
          10101010 11110000
        </pre>
      </div>

      {/* Terminal Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-vanta-surface-low relative p-4 md:p-8 border border-vanta-green/20 shadow-2xl terminal-flicker"
        style={{ clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)' }}
      >
        {/* HUD Corner Brackets */}
        <div className="absolute -top-0.5 -left-0.5 w-5 h-5 border-t-2 border-l-2 border-vanta-green" />
        <div className="absolute -top-0.5 -right-0.5 w-5 h-5 border-t-2 border-r-2 border-vanta-green" />
        <div className="absolute -bottom-0.5 -left-0.5 w-5 h-5 border-b-2 border-l-2 border-vanta-green" />
        <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 border-b-2 border-r-2 border-vanta-green" />

        {/* Tactical Readouts */}
        <div className="absolute -top-6 left-4 flex gap-4 text-[8px] md:text-[10px] text-vanta-green font-bold uppercase tracking-widest">
          <span>STATUS: ACTIVE_NODE_0x4F</span>
          <span className="opacity-50 hidden sm:inline">LOCATION: [REDACTED]</span>
        </div>
        <div className="absolute -bottom-6 right-4 flex gap-4 text-[8px] md:text-[10px] text-vanta-cyan font-bold uppercase tracking-widest">
          <span>LATENCY: 12ms</span>
          <span className="opacity-50 hidden sm:inline">ENCRYPTION: AES-256-GCM</span>
        </div>

        {/* Terminal Header */}
        <div className="mb-6 md:mb-8 border-b border-vanta-green/30 pb-4">
          <div className="text-vanta-green font-bold text-base md:text-lg mb-1 flex items-center gap-2">
            <TerminalIcon size={16} />
            VANTABLACK COMMAND_LINE INTERFACE [v2.0.4-STABLE]
          </div>
          <div className="text-vanta-green/60 text-[10px] md:text-xs font-mono uppercase">
            LOGGED IN AS: operator@vantablack // SECURE_UPLINK_ESTABLISHED
          </div>
        </div>

        {/* CLI Prompt Sections */}
        <div className="space-y-6 md:space-y-8 font-mono">
          <div className="flex flex-col gap-2 group">
            <div className="text-vanta-green text-xs md:text-sm">
              operator@vantablack:~$ <span className="text-vanta-cyan">establish_link --identity</span>
            </div>
            <div className="flex items-center gap-4 bg-vanta-surface p-3 md:p-4 border-l-4 border-vanta-green group-focus-within:border-vanta-cyan transition-colors">
              <span className="text-vanta-green/80 text-[10px] md:text-xs font-bold whitespace-nowrap">name --flag</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-vanta-green placeholder:text-vanta-green/20 w-full font-mono uppercase outline-none text-xs md:text-sm" 
                placeholder="[INPUT_NAME_HERE]" 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <div className="text-vanta-green text-xs md:text-sm">
              operator@vantablack:~$ <span className="text-vanta-cyan">establish_link --protocol</span>
            </div>
            <div className="flex items-center gap-4 bg-vanta-surface p-3 md:p-4 border-l-4 border-vanta-green group-focus-within:border-vanta-cyan transition-colors">
              <span className="text-vanta-green/80 text-[10px] md:text-xs font-bold whitespace-nowrap">email --relay</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-vanta-green placeholder:text-vanta-green/20 w-full font-mono uppercase outline-none text-xs md:text-sm" 
                placeholder="[INPUT_EMAIL_ADDRESS]" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 group">
            <div className="text-vanta-green text-xs md:text-sm">
              operator@vantablack:~$ <span className="text-vanta-cyan">load_data --payload</span>
            </div>
            <div className="flex items-start gap-4 bg-vanta-surface p-3 md:p-4 border-l-4 border-vanta-green group-focus-within:border-vanta-cyan transition-colors">
              <span className="text-vanta-green/80 text-[10px] md:text-xs font-bold whitespace-nowrap mt-1">message --payload</span>
              <textarea 
                className="bg-transparent border-none focus:ring-0 text-vanta-green placeholder:text-vanta-green/20 w-full font-mono uppercase resize-none outline-none text-xs md:text-sm" 
                placeholder="[ENTER_MESSAGE_BODY_FOR_TRANSMISSION]" 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-4 flex flex-col gap-4">
            {transmissionStatus.type !== 'idle' && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className={`p-3 border font-mono text-[10px] md:text-xs uppercase tracking-widest ${
                  transmissionStatus.type === 'success' 
                    ? 'bg-vanta-green/10 border-vanta-green text-vanta-green' 
                    : 'bg-vanta-red/10 border-vanta-red text-vanta-red'
                }`}
              >
                {transmissionStatus.type === 'success' ? '>>> ' : '!!! '}
                {transmissionStatus.text}
              </motion.div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex items-center text-vanta-green/60 text-[10px] md:text-xs animate-pulse">
                <Server size={14} className="mr-2" />
                UPLINK_STATUS: {isTransmitting ? 'TRANSMITTING_PAYLOAD...' : 'WAITING_FOR_EXECUTION'}
                <span className="inline-block w-2 h-4 bg-vanta-green ml-2 animate-pulse" />
              </div>
              <div className="flex gap-4 w-full md:w-auto">
                <button 
                  onClick={handleAbort}
                  className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-vanta-red/20 text-vanta-red border border-vanta-red/40 font-black text-[10px] md:text-xs tracking-widest uppercase hover:bg-vanta-red hover:text-white transition-colors"
                >
                  ABORT_SESSION
                </button>
                <button 
                  onClick={handleTransmit}
                  disabled={isTransmitting}
                  className="flex-1 md:flex-none px-4 md:px-6 py-3 bg-vanta-green text-vanta-black font-black text-[10px] md:text-xs tracking-widest uppercase hover:brightness-110 glow-green transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isTransmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      TRANSMITTING...
                    </>
                  ) : (
                    'TRANSMIT_SECURE_PAYLOAD'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* System Telemetry Section */}
      <div className="mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="bg-vanta-surface p-3 md:p-4 border border-vanta-green/10 text-[9px] md:text-[10px] text-vanta-green/60 font-mono relative overflow-hidden">
          <div className="text-vanta-cyan font-bold mb-2 uppercase tracking-tighter flex items-center gap-1">
            <Cpu size={12} /> // CPU_TELEMETRY
          </div>
          <div className="flex justify-between items-center mb-1">
            <span>CORE_LOAD:</span>
            <span className="text-vanta-green">42.8%</span>
          </div>
          <div className="w-full bg-vanta-black h-1 mt-1">
            <div className="bg-vanta-green h-full w-[42.8%] animate-pulse" />
          </div>
        </div>

        <div className="bg-vanta-surface p-3 md:p-4 border border-vanta-green/10 text-[9px] md:text-[10px] text-vanta-green/60 font-mono">
          <div className="text-vanta-cyan font-bold mb-2 uppercase tracking-tighter flex items-center gap-1">
            <Clock size={12} /> // UPTIME_LOG
          </div>
          <div className="flex justify-between"><span>DAYS:</span> <span className="text-vanta-green">14</span></div>
          <div className="flex justify-between"><span>TICKS:</span> <span className="text-vanta-green">142:09:55</span></div>
          <div className="flex justify-between"><span>JITTER:</span> <span className="text-vanta-green">0.02ms</span></div>
        </div>

        <div className="bg-vanta-surface p-3 md:p-4 border border-vanta-green/10 text-[9px] md:text-[10px] text-vanta-green/60 font-mono">
          <div className="text-vanta-cyan font-bold mb-2 uppercase tracking-tighter flex items-center gap-1">
            <ShieldAlert size={12} /> // CRYPTO_STRENGTH
          </div>
          <div className="flex justify-between"><span>CIPHER:</span> <span className="text-vanta-green">CHACHA20</span></div>
          <div className="flex justify-between"><span>ENTROPY:</span> <span className="text-vanta-green">MAX</span></div>
          <div className="flex justify-between"><span>SIG:</span> <span className="text-vanta-green">RSA-4096</span></div>
        </div>

        <div className="bg-vanta-surface p-3 md:p-4 border border-vanta-green/10 text-[9px] md:text-[10px] text-vanta-green/60 font-mono overflow-hidden">
          <div className="text-vanta-cyan font-bold mb-2 uppercase tracking-tighter flex items-center gap-1">
            <Network size={12} /> // NETWORK_GRID
          </div>
          <div className="text-[8px] md:text-[9px] leading-tight text-vanta-green/40 animate-pulse">
            ENCRYPTING PACKET 0xFE22... DONE <br />
            ROUTE: 127.0.0.1 -&gt; SAT_7 <br />
            HANDSHAKE: SUCCESS
          </div>
        </div>
      </div>
    </div>
  );
}
