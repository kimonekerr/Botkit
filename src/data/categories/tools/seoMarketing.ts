import { AITool } from '../../../types';

export const seoMarketingTools: AITool[] = [
  {
    id: 'semrush',
    name: 'SEMrush',
    description: 'Comprehensive SEO tools and marketing platform',
    category: 'seo-marketing',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$119.95/mo',
    rating: 4.9,
    affiliateUrl: '#',
    features: [
      'Keyword research',
      'Site audit',
      'Competitor analysis',
      'Content marketing toolkit'
    ]
  },
  {
    id: 'ahrefs',
    name: 'Ahrefs',
    description: 'Advanced SEO toolset for backlink and content analysis',
    category: 'seo-marketing',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$99/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Backlink analysis',
      'Content explorer',
      'Rank tracking',
      'Technical SEO audit'
    ]
  }
];