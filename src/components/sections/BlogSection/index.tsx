import React from 'react';
import { blogPosts } from '../../../data/blog';
import BlogCard from './BlogCard';
import SectionHeader from '../../ui/SectionHeader';

export default function BlogSection() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Latest from Our Blog"
          description="Stay updated with the latest AI trends and tutorials"
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