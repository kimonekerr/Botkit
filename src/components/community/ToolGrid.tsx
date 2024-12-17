import React from 'react';
import { AITool } from '../../types/';
import ToolCard from '../ui/ToolCard';

interface ToolGridProps {
  tools: AITool[];
}

export default function ToolGrid({ tools }: ToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No tools available in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}