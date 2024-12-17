import React from 'react';
import { Mail, Twitter, Github } from 'lucide-react';
import { siteConfig } from '../../../config/site';
import FooterSection from './FooterSection';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm">{siteConfig.description}</p>
            <div className="mt-4 flex space-x-4">
              <SocialLink href={siteConfig.links.twitter} icon={Twitter} />
              <SocialLink href={siteConfig.links.github} icon={Github} />
              <SocialLink href={siteConfig.links.contact} icon={Mail} />
            </div>
          </div>
          
          <FooterSection title="Quick Links">
            <FooterLinks
              links={[
                { href: '#', text: 'Categories' },
                { href: '#', text: 'Featured Tools' },
                { href: '#', text: 'Blog' },
                { href: '#', text: 'About Us' },
              ]}
            />
          </FooterSection>
          
          <FooterSection title="Legal">
            <FooterLinks
              links={[
                { href: '#', text: 'Privacy Policy' },
                { href: '#', text: 'Terms of Service' },
                { href: '#', text: 'Affiliate Disclosure' },
                { href: '#', text: 'Contact Us' },
              ]}
            />
          </FooterSection>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <a href={href} className="text-gray-400 hover:text-white">
      <Icon className="h-6 w-6" />
    </a>
  );
}

interface FooterLinksProps {
  links: Array<{ href: string; text: string }>;
}

function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href} className="text-gray-400 hover:text-white text-sm">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
}