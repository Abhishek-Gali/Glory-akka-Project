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
    <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-dark-700/50 h-full flex flex-col transition-all hover:border-primary-500/30">
      <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Page Scraper</h2>
      <p className="text-gray-400 text-sm mb-4">
        Paste URLs found from the Dork Search here (one per line) to extract emails.
      </p>
      
      <textarea
        className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-green-500/50 focus:border-green-500 outline-none h-32 font-mono text-sm mb-4 resize-none transition-all placeholder-gray-600"
        placeholder="https://example.com/contact&#10;https://another-site.com/about"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />

      <button 
        onClick={handleScrape}
        disabled={loading}
        className={`w-full font-bold py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-0.5 ${
          loading ? 'bg-gray-700 cursor-not-allowed text-gray-400' : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-500/20 hover:shadow-green-500/40'
        }`}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Scraping...
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Extract Emails
          </>
        )}
      </button>

      {error && (
        <div className="mt-4 p-3 bg-red-900/50 border border-red-700 text-red-200 rounded-lg text-sm">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="font-bold text-lg text-white">Results ({results.length})</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {results.map((res, idx) => (
              <div key={idx} className="bg-dark-900 p-4 rounded-lg border border-dark-700">
                <div className="flex justify-between items-start mb-2">
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline text-sm truncate max-w-[70%]">
                    {res.url}
                  </a>
                  <span className={`text-xs px-2 py-1 rounded ${res.emails.length > 0 ? 'bg-green-900 text-green-300' : 'bg-gray-800 text-gray-400'}`}>
                    {res.emails.length} emails
                  </span>
                </div>
                {res.emails.length > 0 ? (
                  <ul className="space-y-1">
                    {res.emails.map(email => (
                      <li key={email} className="flex justify-between items-center text-sm text-gray-300 bg-dark-800 p-2 rounded">
                        <span>{email}</span>
                        <button onClick={() => copyToClipboard(email)} className="text-gray-500 hover:text-white" title="Copy">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-500 italic">No emails found.</p>
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
