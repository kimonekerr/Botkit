import React, { useState } from 'react';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import { Comment } from '../../types/community';
import { cn } from '../../lib/utils';

interface CommentSectionProps {
  comments: Comment[];
}

export default function CommentSection({ comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Community Discussion</h2>

      {/* Comment Form */}
      <div className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className={cn(
            "w-full px-4 py-3 bg-gray-800/50 backdrop-blur-xl rounded-xl",
            "border border-gray-700/50 text-white placeholder-gray-400",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
            "transition-all duration-200 resize-none h-32"
          )}
        />
        <div className="flex justify-end mt-4">
          <button
            className={cn(
              "px-6 py-2 bg-blue-600 text-white rounded-lg",
              "hover:bg-blue-700 transition-colors"
            )}
          >
            Post Comment
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {comment.userName}
          </h3>
          <p className="text-sm text-gray-400">
            {new Date(comment.createdAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm">{comment.likes}</span>
          </button>
          <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">
              {comment.replies?.length || 0}
            </span>
          </button>
        </div>
      </div>
      <p className="text-gray-300">{comment.content}</p>

      {/* Replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4 pl-6 border-l-2 border-gray-700/50 space-y-4">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="bg-gray-800/30 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {reply.userName}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {new Date(reply.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                  <ThumbsUp className="h-3 w-3" />
                  <span className="text-xs">{reply.likes}</span>
                </button>
              </div>
              <p className="text-sm text-gray-300">{reply.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}