import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-300 hover:text-white transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-gray-900/95 backdrop-blur-xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-300 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 mt-8">
            <a href="#" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors">
              Tools
            </a>
            <div className="pl-4 flex flex-col space-y-2">
              <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors">Image AI</a>
              <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors">Chat AI</a>
              <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors">Code AI</a>
              <a href="#" className="text-lg text-gray-400 hover:text-white transition-colors">Audio AI</a>
            </div>
            <a href="#featured" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors">
              New Release
            </a>
            <a href="#blog" className="text-2xl font-medium text-gray-300 hover:text-white transition-colors">
              Blog
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}