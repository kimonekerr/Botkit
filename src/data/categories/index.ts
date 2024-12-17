import { Category } from '../../types';
import { categories } from './categoryList';
import { toolsByCategory } from './toolsByCategory';

// Helper functions
const getToolsByCategory = (categoryId: string) => {
  return toolsByCategory[categoryId as keyof typeof toolsByCategory] || [];
};

const getFeaturedToolsByCategory = (categoryId: string) => {
  return getToolsByCategory(categoryId).filter(tool => tool.rating >= 4.7);
};

const getToolById = (toolId: string) => {
  return Object.values(toolsByCategory)
    .flat()
    .find(tool => tool.id === toolId);
};

export {
  categories,
  toolsByCategory,
  getToolsByCategory,
  getFeaturedToolsByCategory,
  getToolById
};