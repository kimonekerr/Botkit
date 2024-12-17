import React from 'react';
import { Bot, Users, Shield, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About botkit.ai</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted source for discovering and comparing the best AI tools and solutions.
            We help you make informed decisions about AI technology investments.
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Bot,
              title: 'Curated Selection',
              description: 'Hand-picked AI tools vetted for quality and performance'
            },
            {
              icon: Users,
              title: 'Community Driven',
              description: 'Real reviews and insights from actual users'
            },
            {
              icon: Shield,
              title: 'Trusted Reviews',
              description: 'Unbiased, transparent tool evaluations'
            },
            {
              icon: Globe,
              title: 'Global Reach',
              description: 'Connecting users with AI tools worldwide'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}