import { AITool } from '../../types';

export const socialMediaTools: AITool[] = [
  {
    id: 'socialbee',
    name: 'SocialBee',
    description: 'AI-powered social media management and scheduling tool',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    price: '$49/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Content scheduling and automation',
      'Category-based posting',
      'Analytics dashboard',
      'Team collaboration features'
    ]
  },
  {
    id: 'hootsuite',
    name: 'Hootsuite',
    description: 'Comprehensive social media management platform',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80',
    price: '$99/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Multi-platform management',
      'Advanced scheduling',
      'Real-time analytics',
      'Team workflows'
    ]
  },
  {
    id: 'buffer',
    name: 'Buffer',
    description: 'Intuitive social media scheduling and analytics platform',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80',
    price: '$85/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Visual planning tools',
      'Performance analytics',
      'Engagement tracking',
      'Multi-channel publishing'
    ]
  },
  {
    id: 'agorapulse',
    name: 'Agorapulse',
    description: 'Social media management and monitoring solution',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1611162616677-b1b4af6e8bf9?auto=format&fit=crop&w=800&q=80',
    price: '$79/mo',
    rating: 4.6,
    affiliateUrl: '#',
    features: [
      'Unified social inbox',
      'Content scheduling',
      'Social listening',
      'ROI reporting'
    ]
  },
  {
    id: 'coschedule',
    name: 'CoSchedule',
    description: 'Marketing suite with social media management capabilities',
    category: 'social-media',
    imageUrl: 'https://images.unsplash.com/photo-1611162617263-4ec3060a058e?auto=format&fit=crop&w=800&q=80',
    price: '$89/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Marketing calendar',
      'Content optimization',
      'Social analytics',
      'Team collaboration'
    ]
  }
];

// Mock reviews for social media tools
export const mockReviews = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Emily Rodriguez',
    toolId: 'socialbee',
    rating: 5,
    content: 'SocialBee has transformed our social media management. The automation features are incredible!',
    likes: 45,
    createdAt: '2024-03-15T10:30:00Z'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'David Kim',
    toolId: 'hootsuite',
    rating: 4,
    content: 'Hootsuite\'s analytics capabilities have helped us optimize our social media strategy.',
    likes: 32,
    createdAt: '2024-03-14T15:45:00Z'
  }
];

// Mock comments for social media tools
export const mockComments = [
  {
    id: '1',
    userId: 'user3',
    userName: 'Sophie Chen',
    content: 'These social media tools have made managing multiple accounts so much easier!',
    likes: 18,
    createdAt: '2024-03-15T09:00:00Z',
    replies: [
      {
        id: '1-1',
        userId: 'user4',
        userName: 'Marcus Johnson',
        content: 'Which one would you recommend for a small business?',
        likes: 7,
        createdAt: '2024-03-15T09:30:00Z'
      }
    ]
  }
];