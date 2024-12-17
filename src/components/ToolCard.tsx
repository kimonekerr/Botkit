import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={tool.imageUrl}
          alt={tool.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-900">
          {tool.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{tool.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{tool.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">{tool.description}</p>
        
        <div className="space-y-2">
          {tool.features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-500">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
              {feature}
            </div>
          ))}
        </div>
        
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Learn More
          <ExternalLink className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}