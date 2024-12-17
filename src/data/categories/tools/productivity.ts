import { AITool } from '../../../types';

export const productivityTools: AITool[] = [
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace with AI capabilities',
    category: 'productivity',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$8/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'AI writing assistant',
      'Project management',
      'Knowledge base',
      'Team collaboration'
    ]
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    description: 'AI-enhanced project management platform',
    category: 'productivity',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$5/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Task automation',
      'Custom workflows',
      'Time tracking',
      'Document collaboration'
    ]
  }
];