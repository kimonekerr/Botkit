import { AITool } from '../../../types';

export const ecommerceTools: AITool[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    description: 'E-commerce platform with AI-powered features',
    category: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$29/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'AI product recommendations',
      'Inventory management',
      'Marketing automation',
      'Analytics dashboard'
    ]
  },
  {
    id: 'klaviyo',
    name: 'Klaviyo',
    description: 'E-commerce marketing automation platform',
    category: 'ecommerce',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$45/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Predictive analytics',
      'Email automation',
      'SMS marketing',
      'Customer segmentation'
    ]
  }
];