import React from 'react';
import { Share2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ShareButton() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    }
  };

  return (
    <button
      onClick={handleShare}
      className={cn(
        "inline-flex items-center gap-2 px-6 py-3",
        "bg-blue-600 hover:bg-blue-700 text-white rounded-lg",
        "transition-colors duration-200"
      )}
    >
      <Share2 className="h-5 w-5" />
      <span>Share</span>
    </button>
  );
}