import React from 'react';
import { blogPosts } from '../data/blog';
import BlogCard from '../components/sections/BlogSection/BlogCard';
import SectionHeader from '../components/ui/SectionHeader';

export default function BlogPage() {
  return (
    <div className="bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeader
          title="AI Tools Blog"
          description="Stay updated with the latest AI trends, tutorials, and insights"
        />

        <div className="mt-16 grid gap-8 grid-cols-1 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}