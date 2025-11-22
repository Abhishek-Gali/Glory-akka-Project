import React, { useState } from 'react';

const platforms = [
  { name: 'LinkedIn', site: 'linkedin.com/in/' },
  { name: 'YCombinator', site: 'ycombinator.com' },
  { name: 'Crunchbase', site: 'crunchbase.com' },
  { name: 'Apollo.io', site: 'apollo.io' },
  { name: 'Clutch.co', site: 'clutch.co' },
  { name: 'Instagram', site: 'instagram.com' },
  { name: 'Twitter/X', site: 'twitter.com' },
];

const DorkBuilder = () => {
  const [platform, setPlatform] = useState(platforms[0]);
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [keywords, setKeywords] = useState('');
  const [emailDomain, setEmailDomain] = useState('@gmail.com');

  const generateDork = () => {
    let query = `site:${platform.site}`;
    if (role) query += ` "${role}"`;
    if (location) query += ` "${location}"`;
    if (keywords) query += ` ${keywords}`;
    if (emailDomain) query += ` "${emailDomain}"`;
    return query;
  };

  const handleSearch = () => {
    const query = generateDork();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };

  return (
    <div className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-dark-700/50 transition-all hover:border-primary-500/30">
      <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Google Dork Generator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Platform</label>
          <select 
            className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all"
            value={platform.name}
            onChange={(e) => setPlatform(platforms.find(p => p.name === e.target.value))}
          >
            {platforms.map(p => (
              <option key={p.name} value={p.name}>{p.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Target Role</label>
          <input 
            type="text" 
            placeholder="e.g. CEO, Founder"
            className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all placeholder-gray-600"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Location</label>
          <input 
            type="text" 
            placeholder="e.g. New York"
            className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all placeholder-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Domain</label>
          <input 
            type="text" 
            placeholder="e.g. @gmail.com"
            className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all placeholder-gray-600"
            value={emailDomain}
            onChange={(e) => setEmailDomain(e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Additional Keywords</label>
          <input 
            type="text" 
            placeholder="e.g. SaaS, E-commerce, Startup"
            className="w-full bg-dark-900/80 border border-dark-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 outline-none transition-all placeholder-gray-600"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-dark-900/80 p-4 rounded-lg mb-6 font-mono text-sm text-gray-300 break-all border border-dark-700 shadow-inner">
        {generateDork()}
      </div>

      <button 
        onClick={handleSearch}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        Search on Google
      </button>
    </div>
  );
};

export default DorkBuilder;
