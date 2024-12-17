import React from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-white text-sm font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}