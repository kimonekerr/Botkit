import React from 'react';
import { AITool } from '../../../types';
import { truncateText } from '../../../lib/utils';

interface SearchResultsProps {
  results: AITool[];
  isLoading: boolean;
  onResultClick: (tool: AITool) => void;
}

export default function SearchResults({ results, isLoading, onResultClick }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-xl 
                    rounded-lg border border-gray-700 shadow-xl p-4">
        <div className="animate-pulse space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-700/50 rounded" />
          ))}
        </div>
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-xl 
                  rounded-lg border border-gray-700 shadow-xl max-h-96 overflow-y-auto">
      {results.map((tool) => (
        <button
          key={tool.id}
          onClick={() => onResultClick(tool)}
          className="w-full text-left p-4 hover:bg-gray-700/50 transition-colors"
        >
          <h4 className="text-white font-medium">{tool.name}</h4>
          <p className="text-gray-400 text-sm">{truncateText(tool.description, 100)}</p>
        </button>
      ))}
    </div>
  );
}