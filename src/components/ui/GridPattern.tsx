import React from 'react';

export default function GridPattern() {
  return (
    <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" 
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L6 48M54 12L6 12M30 54L30 6' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E")`
         }} 
    />
  );
}