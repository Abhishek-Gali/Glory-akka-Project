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
    <div className="bg-space-800/50 backdrop-blur-xl p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/10 transition-all hover:border-neon-blue/30 group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>
      
      <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-neon-blue tracking-wide flex items-center gap-3">
        <span className="w-2 h-8 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"></span>
        TARGET ACQUISITION
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="group/input">
          <label className="block text-xs font-bold text-neon-blue uppercase tracking-[0.15em] mb-2 ml-1">Platform</label>
          <div className="relative">
            <select 
              className="w-full bg-space-900/80 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all appearance-none cursor-pointer hover:bg-space-900"
              value={platform.name}
              onChange={(e) => setPlatform(platforms.find(p => p.name === e.target.value))}
            >
              {platforms.map(p => (
                <option key={p.name} value={p.name}>{p.name}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-blue">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-neon-blue uppercase tracking-[0.15em] mb-2 ml-1">Target Role</label>
          <input 
            type="text" 
            placeholder="e.g. CEO, Founder"
            className="w-full bg-space-900/80 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-neon-blue uppercase tracking-[0.15em] mb-2 ml-1">Location</label>
          <input 
            type="text" 
            placeholder="e.g. New York"
            className="w-full bg-space-900/80 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-neon-blue uppercase tracking-[0.15em] mb-2 ml-1">Email Domain</label>
          <input 
            type="text" 
            placeholder="e.g. @gmail.com"
            className="w-full bg-space-900/80 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600"
            value={emailDomain}
            onChange={(e) => setEmailDomain(e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-neon-blue uppercase tracking-[0.15em] mb-2 ml-1">Additional Keywords</label>
          <input 
            type="text" 
            placeholder="e.g. SaaS, E-commerce, Startup"
            className="w-full bg-space-900/80 border border-white/10 rounded-lg p-3 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-space-900/50 p-4 rounded-lg mb-8 font-mono text-xs text-neon-blue break-all border border-neon-blue/20 shadow-[inset_0_0_20px_rgba(0,243,255,0.05)] relative">
        <div className="absolute top-2 right-2 text-[10px] text-gray-500 uppercase tracking-widest">Query Preview</div>
        {generateDork()}
      </div>

      <button 
        onClick={handleSearch}
        className="w-full bg-neon-blue/10 hover:bg-neon-blue/20 text-neon-blue border border-neon-blue/50 hover:border-neon-blue font-bold py-4 rounded-lg transition-all shadow-[0_0_15px_rgba(0,243,255,0.1)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest group/btn"
      >
        <span className="relative">
          Initialize Search
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue transition-all group-hover/btn:w-full"></span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  );
};

export default DorkBuilder;
