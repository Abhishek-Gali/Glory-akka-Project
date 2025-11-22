import React from 'react';
import DorkBuilder from './components/DorkBuilder';
import ScraperTool from './components/ScraperTool';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white p-4 md:p-8 font-sans selection:bg-primary-500 selection:text-white">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-dark-900 to-dark-900 -z-10 pointer-events-none"></div>
      
      <header className="max-w-6xl mx-auto mb-12 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary-500/30 blur-[100px] -z-10 rounded-full"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-primary-400 animate-gradient bg-300% mb-4 tracking-tight">
          OSINT Email Hunter
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Advanced Google Dorking & Automated Page Scraping Tool for <span className="text-gray-200 font-semibold">Lead Generation</span>
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="space-y-8">
          <DorkBuilder />
          
          <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-dark-700/50 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
              <span className="bg-primary-500/10 text-primary-400 p-1.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              How to use
            </h3>
            <ol className="list-decimal list-inside text-gray-400 space-y-3 text-sm ml-2">
              <li>Select a platform (e.g., LinkedIn) and enter target criteria.</li>
              <li>Click <strong className="text-white">Search on Google</strong>. This opens a new tab with targeted results.</li>
              <li>Copy the URLs of interesting profiles or company pages from Google.</li>
              <li>Paste them into the <strong className="text-white">Page Scraper</strong> tool on the right.</li>
              <li>Click <strong className="text-white">Extract Emails</strong> to find contact info automatically.</li>
            </ol>
          </div>
        </div>

        <div>
          <ScraperTool />
        </div>
      </main>

      <footer className="max-w-6xl mx-auto mt-12 py-8 border-t border-dark-800 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Disclaimer: This tool is for OSINT and educational purposes only. Respect privacy and Terms of Service.
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1.5 bg-dark-800/50 px-4 py-2 rounded-full border border-dark-700/50">
            Made with <span className="text-red-500 animate-pulse">❤️</span> by <span className="text-primary-400 font-semibold">Abhishek Gali</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
