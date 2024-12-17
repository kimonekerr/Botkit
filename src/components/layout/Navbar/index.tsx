import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { siteConfig } from '../../../config/site';
import Logo from '../../ui/Logo';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <div className="flex items-center">
            <Logo />
            <Link to="/" className="ml-2 text-xl font-bold text-white hover:text-blue-400 transition-colors">
              {siteConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="relative">
              <input
                type="text"
                placeholder="Search AI tools..."
                className="w-64 px-4 py-2 bg-gray-800/50 text-white placeholder-gray-400 
                         rounded-lg border border-gray-700 focus:outline-none focus:ring-2 
                         focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}