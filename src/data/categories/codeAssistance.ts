import { AITool } from '../../types';

export const codeAssistanceTools: AITool[] = [
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer powered by OpenAI Codex',
    category: 'code-assistance',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    price: '$10/mo',
    rating: 4.8,
    affiliateUrl: '#',
    features: [
      'Real-time code suggestions',
      'Multiple language support',
      'IDE integration',
      'Context-aware completions'
    ]
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion assistant',
    category: 'code-assistance',
    imageUrl: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&w=800&q=80',
    price: '$12/mo',
    rating: 4.7,
    affiliateUrl: '#',
    features: [
      'AI code completion',
      'Team learning',
      'Privacy focused',
      'Multi-IDE support'
    ]
  }
];