import React from 'react';
import { featuredTools } from '../../../data/tools';
import ToolCard from '../../ui/ToolCard';
import SectionHeader from '../../ui/SectionHeader';

export default function FeaturedTools() {
  return (
    <div className="bg-gray-900 py-24" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured AI Tools"
          description="Discover our hand-picked selection of the most powerful AI tools"
        />

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
}