import React from 'react';
import { Search, Menu } from 'lucide-react';
import { siteConfig } from '../../config/site';
import Logo from '../ui/Logo';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-gray-800">{siteConfig.name}</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <SearchBar />
            <NavLinks />
          </div>

          <div className="flex items-center">
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search AI tools..."
        className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
}

function NavLinks() {
  return (
    <nav className="flex space-x-6">
      <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
    </nav>
  );
}