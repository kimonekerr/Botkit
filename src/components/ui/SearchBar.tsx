import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="relative max-w-2xl w-full mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What are you looking for?"
          className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-xl text-white 
                   placeholder-gray-400 rounded-2xl border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-300"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                      opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 
                    rounded-2xl opacity-0 blur group-hover:opacity-100 transition-opacity
                    animate-pulse-slow pointer-events-none" />
    </div>
  );
}