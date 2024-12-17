import { AITool } from './index';

export interface Review {
  id: string;
  userId: string;
  userName: string;
  toolId: string;
  rating: number;
  content: string;
  likes: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  likes: number;
  createdAt: string;
  replies?: Comment[];
}

export interface CategoryPage {
  id: string;
  name: string;
  description: string;
  featuredTools: AITool[];
  allTools: AITool[];
  reviews: Review[];
  comments: Comment[];
}