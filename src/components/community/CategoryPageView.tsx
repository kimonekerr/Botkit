import React from 'react';
import { CategoryPage } from '../../types/community';
import ToolGrid from './ToolGrid';
import ReviewSection from './ReviewSection';
import CommentSection from './CommentSection';
import SearchBar from '../ui/SearchBar';
import { cn } from '../../lib/utils';

interface CategoryPageViewProps {
  category: CategoryPage;
}

export default function CategoryPageView({ category }: CategoryPageViewProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {category.description}
            </p>
            <div className="max-w-2xl mx-auto">
              <SearchBar 
                placeholder={`Search ${category.name} tools...`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Tools */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Tools</h2>
          <ToolGrid tools={category.featuredTools} />
        </div>
      </section>

      {/* All Tools */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">All Tools</h2>
          <ToolGrid tools={category.allTools} />
        </div>
      </section>

      {/* Reviews */}
      <section className={cn(
        "py-16 bg-gray-800/50",
        "border-t border-b border-gray-700/50"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ReviewSection reviews={category.reviews} />
        </div>
      </section>

      {/* Comments */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CommentSection comments={category.comments} />
        </div>
      </section>
    </div>
  );
}