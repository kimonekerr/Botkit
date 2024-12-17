import { AITool } from '../../../types';

export const chatbotTools: AITool[] = [
  {
    id: 'intercom',
    name: 'Intercom',
    description: 'AI-powered customer messaging platform',
    category: 'chatbots',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$74/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Custom chatbots',
      'Live chat',
      'Customer data platform',
      'Automated responses'
    ]
  },
  {
    id: 'manychat',
    name: 'ManyChat',
    description: 'AI chatbot platform for marketing and customer support',
    category: 'chatbots',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$15/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Visual flow builder',
      'Multi-channel support',
      'Analytics dashboard',
      'Integration capabilities'
    ]
  }
];