import { AITool } from '../../../types';

export const legalTools: AITool[] = [
  {
    id: 'docusign',
    name: 'DocuSign',
    description: 'AI-powered electronic signature and agreement platform',
    category: 'legal',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$10/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Electronic signatures',
      'Document automation',
      'Contract analytics',
      'Template management'
    ]
  },
  {
    id: 'lawgeex',
    name: 'LawGeex',
    description: 'AI-powered contract review automation platform',
    category: 'legal',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: 'Custom',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Contract review',
      'Risk analysis',
      'Legal compliance',
      'Policy automation'
    ]
  }
];