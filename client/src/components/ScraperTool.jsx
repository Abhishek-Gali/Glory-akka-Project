import React, { useState } from 'react';

const ScraperTool = () => {
  const [urls, setUrls] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScrape = async () => {
    setLoading(true);
    setError('');
    setResults([]);
    
    const urlList = urls.split('\n').filter(u => u.trim());
    
    if (urlList.length === 0) {
      setError('Please enter at least one URL.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ urls: urlList }),
      });
      
      const data = await response.json();
      if (data.success) {
        setResults(data.results);
      } else {
        setError(data.message || 'Scraping failed');
      }
    } catch (err) {
      setError('Failed to connect to server. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-space-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10 h-full flex flex-col transition-all hover:border-neon-purple/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>

      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-purple tracking-wide flex items-center gap-3">
        <span className="w-2 h-8 bg-neon-purple rounded-full shadow-[0_0_10px_#bc13fe]"></span>
        DATA EXTRACTION
      </h2>
      
      <p className="text-gray-400 text-sm mb-6 font-light">
        Input target coordinates (URLs) below to initiate deep scan protocol.
      </p>
      
      <textarea
        className="w-full bg-space-900/80 border border-white/10 rounded-lg p-4 text-white focus:ring-1 focus:ring-neon-purple focus:border-neon-purple outline-none h-40 font-mono text-sm mb-6 resize-none transition-all placeholder-gray-700 shadow-inner"
        placeholder="https://example.com/contact&#10;https://another-site.com/about"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />

      <button 
        onClick={handleScrape}
        disabled={loading}
        className={`w-full font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-3 uppercase tracking-widest shadow-lg ${
          loading ? 'bg-space-700 cursor-not-allowed text-gray-500 border border-white/5' : 'bg-neon-purple/10 hover:bg-neon-purple/20 text-neon-purple border border-neon-purple/50 hover:border-neon-purple shadow-[0_0_15px_rgba(188,19,254,0.1)] hover:shadow-[0_0_25px_rgba(188,19,254,0.3)]'
        }`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-neon-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            SCANNING SECTOR...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            EXTRACT DATA
          </>
        )}
      </button>

      {error && (
        <div className="mt-6 p-4 bg-red-900/20 border border-red-500/50 text-red-200 rounded-lg text-sm flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 space-y-4">
          <h3 className="font-bold text-sm text-gray-400 uppercase tracking-widest flex items-center justify-between">
            <span>Scan Results</span>
            <span className="text-neon-purple">{results.length} Targets Found</span>
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-space-700 scrollbar-track-transparent">
            {results.map((res, idx) => (
              <div key={idx} className="bg-space-900/50 p-4 rounded-lg border border-white/5 hover:border-neon-purple/30 transition-colors group">
                <div className="flex justify-between items-start mb-3">
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:text-white text-xs truncate max-w-[70%] font-mono transition-colors">
                    {res.url}
                  </a>
                  <span className={`text-[10px] px-2 py-1 rounded-full border ${res.emails.length > 0 ? 'bg-neon-purple/10 text-neon-purple border-neon-purple/30' : 'bg-gray-800 text-gray-500 border-gray-700'}`}>
                    {res.emails.length} EMAILS
                  </span>
                </div>
                {res.emails.length > 0 ? (
                  <ul className="space-y-2">
                    {res.emails.map(email => (
                      <li key={email} className="flex justify-between items-center text-sm text-gray-300 bg-space-800/50 p-2 rounded border border-white/5 group-hover:border-white/10 transition-colors">
                        <span className="font-mono text-xs">{email}</span>
                        <button onClick={() => copyToClipboard(email)} className="text-gray-500 hover:text-neon-blue transition-colors" title="Copy">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-600 italic font-mono">No data extracted from this sector.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScraperTool;
