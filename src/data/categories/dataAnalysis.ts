import { AITool } from '../../types';

export const dataAnalysisTools: AITool[] = [
  {
    id: 'tableau',
    name: 'Tableau',
    description: 'Advanced data visualization and analytics platform',
    category: 'data-analysis',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$70/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Interactive dashboards',
      'Real-time analytics',
      'Data blending',
      'Advanced visualizations'
    ]
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    description: 'Microsoft\'s business analytics solution',
    category: 'data-analysis',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$9.99/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Data modeling',
      'Custom visualizations',
      'AI insights',
      'Cloud integration'
    ]
  }
];