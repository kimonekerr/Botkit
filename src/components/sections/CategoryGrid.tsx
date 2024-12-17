import React from 'react';
import { Link } from 'react-router-dom';
import { categories, categoryIcons } from '../../data/tools';
import { cn } from '../../lib/utils';

export default function CategoryGrid() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of AI tools
          </p>
        </div>
        
        <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.icon as keyof typeof categoryIcons];
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={cn(
                  "group relative bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl",
                  "hover:bg-gray-800/70 transition-all duration-300 overflow-hidden",
                  "border border-gray-700/50 hover:border-blue-500/50"
                )}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Glowing orb effect */}
                <div className="absolute -right-8 -top-8 w-16 h-16 bg-blue-500/20 rounded-full 
                              blur-xl group-hover:bg-blue-400/30 transition-all duration-500" />
                
                <div className="relative flex flex-col items-start space-y-4">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "flex items-center justify-center h-12 w-12 rounded-xl",
                      "bg-gradient-to-br from-blue-500 to-purple-500 text-white",
                      "group-hover:scale-110 transition-transform duration-300"
                    )}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 
                                 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 
                                transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}