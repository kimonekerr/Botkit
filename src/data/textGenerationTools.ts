import { AITool } from '../types';

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
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI writing assistant specializing in SEO-optimized content creation',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$29/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Article writer 4.0',
      'GPT-4 integration',
      'Multilingual support',
      'Chrome extension'
    ]
  },
  {
    id: 'frase',
    name: 'Frase',
    description: 'AI-powered content optimization and research platform',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$44.99/mo',
    rating: 4.6,
    affiliateUrl: '#',
    features: [
      'Content research automation',
      'SEO content optimization',
      'Answer engine optimization',
      'Content brief generator'
    ]
  },
  {
    id: 'anyword',
    name: 'Anyword',
    description: 'Data-driven AI copywriting platform with predictive analytics',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$39/mo',
    rating: 4.5,
    affiliateUrl: '#',
    features: [
      'Predictive performance scores',
      'Custom trained AI',
      'Multi-channel optimization',
      'A/B testing capabilities'
    ]
  },
  {
    id: 'prowritingaid',
    name: 'ProWritingAid',
    description: 'Advanced grammar checker and style editor with AI capabilities',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$20/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'Real-time grammar checking',
      'Style suggestions',
      'Contextual thesaurus',
      'Writing reports'
    ]
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI-powered paraphrasing and summarization tool',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$19.95/mo',
    rating: 4.6,
    affiliateUrl: '#',
    features: [
      'Advanced paraphrasing modes',
      'Grammar checker',
      'Citation generator',
      'Summarizer tool'
    ]
  },
  {
    id: 'longshot',
    name: 'LongShot',
    description: 'AI writing tool specialized in long-form content creation',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$29/mo',
    rating: 4.5,
    affiliateUrl: '#',
    features: [
      'Fact-checking integration',
      'Content research assistant',
      'SEO optimization',
      'Team collaboration'
    ]
  },
  {
    id: 'getgenie',
    name: 'GetGenie',
    description: 'WordPress-focused AI content assistant',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$24.99/mo',
    rating: 4.4,
    affiliateUrl: '#',
    features: [
      'WordPress integration',
      'SEO content wizard',
      'WooCommerce support',
      'Multilingual content'
    ]
  },
  {
    id: 'scalenut',
    name: 'Scalenut',
    description: 'AI-powered SEO and content research platform',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$39/mo',
    rating: 4.5,
    affiliateUrl: '#',
    features: [
      'Cruise Mode writing',
      'Topic research',
      'Content grader',
      'SEO optimization'
    ]
  },
  {
    id: 'aiseo',
    name: 'AISEO',
    description: 'AI writing assistant focused on SEO optimization',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$19/mo',
    rating: 4.3,
    affiliateUrl: '#',
    features: [
      'One-click writing',
      'Keyword optimization',
      'Content rewriting',
      'Blog post generator'
    ]
  },
  {
    id: 'hypotenuse',
    name: 'Hypotenuse',
    description: 'AI content generator specialized for e-commerce',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$35/mo',
    rating: 4.4,
    affiliateUrl: '#',
    features: [
      'Product description generator',
      'Bulk content creation',
      'Image generation',
      'E-commerce optimization'
    ]
  },
  {
    id: 'bertha',
    name: 'Bertha',
    description: 'AI writing assistant integrated with WordPress',
    category: 'text-generation',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$29/mo',
    rating: 4.3,
    affiliateUrl: '#',
    features: [
      'WordPress plugin',
      'Template library',
      'Long-form assistant',
      'Marketing copy generator'
    ]
  }
];

// Keep the existing mock reviews and comments
export const mockTextGenerationReviews = [
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
  {
    id: '2',
    userId: 'user2',
    userName: 'Michael Chen',
    toolId: 'writesonic',
    rating: 4,
    content: 'Writesonic has been a game-changer for our marketing team. Great for quick content generation.',
    likes: 28,
    createdAt: '2024-03-14T15:45:00Z'
  }
];

export const mockTextGenerationComments = [
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
  }
];