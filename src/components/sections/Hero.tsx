import React from 'react';
import { ArrowRight } from 'lucide-react';
import GlowingOrb from '../ui/GlowingOrb';
import GridPattern from '../ui/GridPattern';
import FloatingParticles from '../ui/FloatingParticles';
import SearchBar from '../ui/SearchBar';
import { cn } from '../../lib/utils';

const categoryTags = [
  'Social Media Management',
  'Marketing Automation',
  'Legal Document Review',
  'Financial Modeling',
  'Healthcare AI Tools',
  'AI for Education'
];

export default function Hero() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <GridPattern />
      <FloatingParticles />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <GlowingOrb />
        </div>
        
        <div className="relative text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Discover the Future
            </span>
            <br />
            <span className="text-white">of AI Tools</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Explore our curated collection of cutting-edge AI tools and solutions 
            to enhance your productivity and creativity.
          </p>
          
          <div className="mt-10 max-w-2xl mx-auto">
            <SearchBar />
          </div>
          
          <div className="mt-10 flex justify-center gap-4">
            <a href="#featured" 
               className="group relative inline-flex items-center justify-center px-8 py-3 
                        bg-blue-600 hover:bg-blue-700 text-white rounded-lg overflow-hidden
                        transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 
                            group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative flex items-center">
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </a>
          </div>

          {/* Category Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categoryTags.map((tag, index) => (
              <a
                key={tag}
                href="/discover"
                className={cn(
                  "group relative px-4 py-2 rounded-full text-sm transition-all duration-300",
                  "bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-sm",
                  "text-gray-300 hover:text-white",
                  "border border-gray-700/50 hover:border-blue-500/50",
                  "overflow-hidden"
                )}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 to-purple-500/0 
                              group-hover:from-blue-500/20 group-hover:to-purple-500/20 
                              blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                {/* Text content */}
                <span className="relative">{tag}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}