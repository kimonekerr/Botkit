import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Review } from '../../types/community';
import { cn } from '../../lib/utils';

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  const [activeFilter, setActiveFilter] = useState('recent');

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Reviews</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveFilter('recent')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm transition-colors",
              activeFilter === 'recent' 
                ? "bg-blue-600 text-white" 
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            )}
          >
            Most Recent
          </button>
          <button
            onClick={() => setActiveFilter('helpful')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm transition-colors",
              activeFilter === 'helpful'
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            )}
          >
            Most Helpful
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">
                    {review.userName}
                  </h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4",
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-600"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <ThumbsUp className="h-4 w-4" />
                <span className="text-sm">{review.likes}</span>
              </button>
            </div>
            <p className="text-gray-300">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}