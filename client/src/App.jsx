import React from 'react';
import DorkBuilder from './components/DorkBuilder';
import ScraperTool from './components/ScraperTool';

function App() {
  return (
    <div className="min-h-screen relative selection:bg-neon-blue selection:text-space-900">
      {/* Starry Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-neon-blue/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-neon-purple/50 rounded-full animate-twinkle delay-500"></div>
      </div>

      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
        <header className="mb-16 text-center relative">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 backdrop-blur-md">
            <span className="text-neon-blue text-xs font-bold tracking-[0.2em] uppercase">System Online</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-blue to-neon-purple drop-shadow-[0_0_15px_rgba(0,243,255,0.5)] mb-6 tracking-tight">
            OSINT <span className="font-light italic">HUNTER</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            Advanced Intelligence Gathering & <span className="text-neon-purple font-medium">Lead Extraction Protocol</span>
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="space-y-8 animate-float">
            <DorkBuilder />
            
            <div className="bg-space-800/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-blue-600 flex items-center justify-center shadow-lg shadow-neon-blue/20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                Mission Briefing
              </h3>
              <ol className="space-y-4 text-sm text-gray-300 relative z-10">
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-neon-blue">01</span>
                  <span>Select target platform and parameters in the <strong className="text-white">Dork Generator</strong>.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-neon-blue">02</span>
                  <span>Execute <strong className="text-white">Google Search</strong> to identify targets.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-neon-blue">03</span>
                  <span>Input target URLs into the <strong className="text-white">Scraper Module</strong>.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-mono text-neon-blue">04</span>
                  <span>Initiate <strong className="text-white">Extraction</strong> to retrieve contact data.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <ScraperTool />
          </div>
        </main>

        <footer className="mt-20 py-8 border-t border-white/5 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-blue/50 to-transparent"></div>
          
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-6">
            Authorized Use Only • OSINT Protocol v1.0
          </p>
          
          <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-gray-400 font-light">
              &copy; {new Date().getFullYear()} All Systems Operational
            </p>
            <div className="inline-flex items-center gap-2 bg-space-800 px-5 py-2.5 rounded-full border border-neon-purple/30 shadow-[0_0_15px_rgba(188,19,254,0.15)] hover:shadow-[0_0_25px_rgba(188,19,254,0.3)] transition-shadow duration-300">
              <span className="text-sm text-gray-300">Engineered with</span>
              <img src="/goku.png" alt="Goku" className="w-8 h-8 -mt-1 animate-bounce drop-shadow-lg" />
              <span className="text-sm text-gray-300">by <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-bold">Abhishek Gali</span></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
