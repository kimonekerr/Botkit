import { AITool } from '../../../types';

export const contentCreationTools: AITool[] = [
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'Advanced AI writing assistant with powerful content generation capabilities',
    category: 'content-creation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$49/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Long-form content creation',
      'Marketing copy generation',
      'Brand voice customization',
      'Team collaboration'
    ]
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing and content teams',
    category: 'content-creation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$35/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Digital ad copy',
      'Social media content',
      'Blog post generation',
      'Product descriptions'
    ]
  }
];