import { AITool } from '../../../types';

export const designGraphicsTools: AITool[] = [
  {
    id: 'canva',
    name: 'Canva',
    description: 'AI-enhanced graphic design platform',
    category: 'design-graphics',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$12.99/mo',
    rating: 4.9,
    affiliateUrl: '#',
    features: [
      'AI Magic Design',
      'Template library',
      'Brand kit',
      'Real-time collaboration'
    ]
  },
  {
    id: 'crello',
    name: 'Crello',
    description: 'Design tool for marketing materials',
    category: 'design-graphics',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$9.99/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Marketing templates',
      'Animation tools',
      'Stock media',
      'Team collaboration'
    ]
  }
];