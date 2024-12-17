import React from 'react';
import { useParams } from 'react-router-dom';
import { categories, toolsByCategory } from '../data/tools';
import { CategoryPageView } from '../components/community';
import { CategoryPage } from '../types/community';
import { mockReviews as textGenReviews, mockComments as textGenComments } from '../data/categories/textGeneration';

const getCategoryData = (id: string): CategoryPage => {
  const category = categories.find(cat => cat.id === id);
  const tools = toolsByCategory[id as keyof typeof toolsByCategory] || [];
  const featuredTools = tools.filter(tool => tool.rating >= 4.7);

  // For now, we'll use the text generation reviews/comments as mock data for all categories
  return {
    id: id,
    name: category?.name || 'Category',
    description: category?.description || 'AI tools category',
    featuredTools,
    allTools: tools,
    reviews: textGenReviews,
    comments: textGenComments
  };
};

export default function CategoryPageContainer() {
  const { id } = useParams();
  const category = categories.find(cat => cat.id === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <p className="text-gray-400">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const categoryData = getCategoryData(category.id);
  return <CategoryPageView category={categoryData} />;
}