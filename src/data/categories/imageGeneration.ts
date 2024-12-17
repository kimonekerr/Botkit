import { AITool } from '../../types';

export const imageGenerationTools: AITool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Advanced AI image generation with artistic capabilities',
    category: 'image-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$30/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'High-quality image generation',
      'Style customization',
      'Artistic variations',
      'Commercial usage rights'
    ]
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'OpenAI\'s powerful image generation model',
    category: 'image-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: 'Pay per use',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Natural language prompts',
      'High resolution output',
      'Image editing',
      'Multiple styles'
    ]
  }
];