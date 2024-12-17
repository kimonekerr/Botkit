import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { AITool } from '../../types';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden 
                    hover:bg-gray-800/70 transition-all duration-300">
      <div className="relative h-48">
        <img
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
        <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-xl px-3 py-1 
                      rounded-full text-sm font-medium text-white">
          {tool.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{tool.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-400">{tool.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6">{tool.description}</p>
        
        <div className="space-y-2">
          {tool.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-400">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 
                   bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg
                   hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Learn More
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}