export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: string;
  rating: number;
  affiliateUrl: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  readTime: string;
  category: string;
}