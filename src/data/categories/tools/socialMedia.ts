import { AITool } from '../../../types';

export const socialMediaTools: AITool[] = [
  {
    id: 'socialbee',
    name: 'SocialBee',
    description: 'Social media scheduling and management platform',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$49/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Content scheduling',
      'Category-based posting',
      'Analytics dashboard',
      'Team collaboration'
    ]
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    description: 'Comprehensive social media management platform',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$99/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Multi-platform management',
      'Advanced scheduling',
      'Real-time analytics',
      'Team workflows'
    ]
  }
];