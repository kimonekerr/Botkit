import { AITool } from '../../../types';

export const salesLeadsTools: AITool[] = [
  {
    id: 'apollo',
    name: 'Apollo.io',
    description: 'AI-powered sales intelligence and engagement platform',
    category: 'sales-leads',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$49/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Lead generation',
      'Sales automation',
      'Email sequences',
      'Analytics dashboard'
    ]
  },
  {
    id: 'outreach',
    name: 'Outreach.io',
    description: 'Sales engagement platform with AI capabilities',
    category: 'sales-leads',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$100/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Sales sequences',
      'AI-powered insights',
      'Pipeline management',
      'Team collaboration'
    ]
  }
];