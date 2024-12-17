import { AITool } from '../../../types';

export const crmTools: AITool[] = [
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'All-in-one CRM platform with AI capabilities',
    category: 'crm',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$45/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Contact management',
      'Deal tracking',
      'Marketing automation',
      'Sales analytics'
    ]
  },
  {
    id: 'zoho-crm',
    name: 'Zoho CRM',
    description: 'AI-powered CRM for sales automation',
    category: 'crm',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$14/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Lead scoring',
      'Process automation',
      'Analytics',
      'Mobile CRM'
    ]
  }
];