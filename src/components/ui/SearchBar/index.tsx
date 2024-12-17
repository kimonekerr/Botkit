import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../../hooks/useSearch';
import SearchResults from './SearchResults';
import { cn } from '../../../lib/utils';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
}

export default function SearchBar({ className, placeholder = "What are you looking for?" }: SearchBarProps) {
  const { query, results, isLoading, handleSearch } = useSearch();

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-xl text-white 
                   placeholder-gray-400 rounded-2xl border border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                   transition-all duration-300"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <Search className="h-6 w-6 text-gray-400" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 
                      rounded-2xl opacity-0 blur group-hover:opacity-100 transition-opacity
                      animate-pulse-slow pointer-events-none" />
      </div>

      <SearchResults
        results={results}
        isLoading={isLoading}
        onResultClick={(tool) => {
          // Handle tool selection
          console.log('Selected tool:', tool);
        }}
      />
    </div>
  );
}