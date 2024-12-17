import React from 'react';
import Hero from '../components/sections/Hero';
import CategoryGrid from '../components/sections/CategoryGrid';
import FeaturedTools from '../components/sections/FeaturedTools';
import BlogSection from '../components/sections/BlogSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedTools />
      <BlogSection />
    </>
  );
}