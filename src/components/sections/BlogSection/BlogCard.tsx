import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../../types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden">
      <div className="h-48 w-full relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </div>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}