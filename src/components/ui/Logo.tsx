import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
        <Bot className="h-6 w-6 text-white" />
      </div>
    </Link>
  );
}