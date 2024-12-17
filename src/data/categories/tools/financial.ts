import { AITool } from '../../../types';

export const financialTools: AITool[] = [
  {
    id: 'quickbooks',
    name: 'QuickBooks',
    description: 'AI-enhanced accounting and financial management platform',
    category: 'financial',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$25/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Automated bookkeeping',
      'Financial reporting',
      'Invoice management',
      'Tax preparation'
    ]
  },
  {
    id: 'xero',
    name: 'Xero',
    description: 'Cloud-based accounting software with AI features',
    category: 'financial',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$30/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Bank reconciliation',
      'Expense tracking',
      'Financial insights',
      'Multi-currency support'
    ]
  }
];