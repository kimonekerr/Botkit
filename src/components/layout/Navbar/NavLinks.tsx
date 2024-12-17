import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { categories } from '../../../data/tools';

const navItems = [
  {
    label: 'Tools',
    href: '#',
    subitems: categories.map(cat => ({
      label: cat.name,
      href: `/category/${cat.id}`
    }))
  },
  {
    label: 'Blog',
    href: '/blog'
  },
  {
    label: 'About',
    href: '/about'
  }
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">
          {item.subitems ? (
            <>
              <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 
                            group-hover:visible transition-all duration-200 transform origin-top-left">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                                rounded-lg opacity-50 blur"></div>
                  <div className="relative bg-gray-900/95 backdrop-blur-xl rounded-lg p-2 shadow-xl 
                                border border-gray-800">
                    {item.subitems.map((subitem) => (
                      <Link
                        key={subitem.label}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white 
                                 hover:bg-gray-800/50 rounded-md transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Link
              to={item.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}