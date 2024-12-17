import { AITool } from '../types';
import { categories, toolsByCategory } from './categories';
import { categoryIcons } from './icons';

// Get featured tools across all categories
const featuredTools: AITool[] = Object.values(toolsByCategory)
  .flat()
  .filter(tool => tool.rating >= 4.7)
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);

// Helper functions
const getToolsByCategory = (categoryId: string): AITool[] => {
  return toolsByCategory[categoryId as keyof typeof toolsByCategory] || [];
};

const getFeaturedToolsByCategory = (categoryId: string): AITool[] => {
  return getToolsByCategory(categoryId).filter(tool => tool.rating >= 4.7);
};

const getToolById = (toolId: string): AITool | undefined => {
  return Object.values(toolsByCategory)
    .flat()
    .find(tool => tool.id === toolId);
};

export {
  categories,
  categoryIcons,
  featuredTools,
  getToolsByCategory,
  getFeaturedToolsByCategory,
  getToolById,
  toolsByCategory
};