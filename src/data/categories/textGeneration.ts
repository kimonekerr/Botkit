import { AITool } from '../../types';

export const textGenerationTools: AITool[] = [
  {
    id: 'jasper-ai',
    name: 'Jasper AI',
    description: 'Advanced AI content creation platform with templates for various content types',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$49/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Boss Mode for long-form content',
      'SEO optimization',
      'Brand voice customization',
      '50+ content templates'
    ]
  },
  // ... (keep existing text generation tools)
];

export const mockReviews = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Johnson',
    toolId: 'jasper-ai',
    rating: 5,
    content: 'Jasper AI has revolutionized how I create content. The quality and speed are unmatched.',
    likes: 42,
    createdAt: '2024-03-15T10:30:00Z'
  },
  // ... (keep existing reviews)
];

export const mockComments = [
  {
    id: '1',
    userId: 'user3',
    userName: 'Alex Thompson',
    content: 'These AI writing tools have completely transformed my content creation workflow.',
    likes: 15,
    createdAt: '2024-03-15T09:00:00Z',
    replies: [
      {
        id: '1-1',
        userId: 'user4',
        userName: 'Emma Davis',
        content: 'Agreed! Which one do you find most useful for blog writing?',
        likes: 8,
        createdAt: '2024-03-15T09:30:00Z'
      }
    ]
  },
  // ... (keep existing comments)
];