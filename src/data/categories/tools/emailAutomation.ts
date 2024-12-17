import { AITool } from '../../../types';

export const emailAutomationTools: AITool[] = [
  {
    id: 'mailerlite',
    name: 'MailerLite',
    description: 'AI-powered email marketing automation platform',
    category: 'email-automation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$10/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Email automation',
      'Landing page builder',
      'A/B testing',
      'Advanced segmentation'
    ]
  },
  {
    id: 'convertkit',
    name: 'ConvertKit',
    description: 'Email marketing platform for creators',
    category: 'email-automation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$29/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Visual automation builder',
      'Tag-based segmentation',
      'Landing pages',
      'Creator-focused features'
    ]
  }
];