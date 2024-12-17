import { contentCreationTools } from './categories/contentCreation';
import { seoMarketingTools } from './categories/seoMarketing';
import { socialMediaTools } from './categories/socialMedia';
import { AITool } from '../types';

// Combine all tools into a single array
export const allTools: AITool[] = [
  ...contentCreationTools,
  ...seoMarketingTools,
  ...socialMediaTools
];

// Get tools by category
export const getToolsByCategory = (categoryId: string): AITool[] => {
  return allTools.filter(tool => tool.category === categoryId);
};

// Get featured tools by category
export const getFeaturedToolsByCategory = (categoryId: string): AITool[] => {
  return getToolsByCategory(categoryId).filter(tool => tool.rating >= 4.7);
};

// Get tool by ID
export const getToolById = (toolId: string): AITool | undefined => {
  return allTools.find(tool => tool.id === toolId);
};