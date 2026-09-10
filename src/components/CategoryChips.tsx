'use client';

import React from 'react';

const CATEGORIES = [
  {
    "label": "All",
    "path": "/"
  },
  {
    "label": "Micro-SaaS",
    "path": "/category/micro-saas"
  },
  {
    "label": "Mobile & Apps",
    "path": "/category/mobile"
  },
  {
    "label": "iOS",
    "path": "/category/ios"
  },
  {
    "label": "Android",
    "path": "/category/android"
  },
  {
    "label": "Desktop",
    "path": "/category/desktop"
  },
  {
    "label": "AI Launches",
    "path": "/category/ai"
  }
];

export function CategoryChips({ activeCategory }: { activeCategory?: string }) {
  return (
    <div className="category-chips-wrapper">
      <div className="category-chips-scroll category-chips-list">
        {CATEGORIES.map((cat) => {
          const isAll = cat.path === '/';
          const isActive = isAll ? !activeCategory : activeCategory === cat.path.replace('/category/', '');
          return (
            <a
              key={cat.path}
              href={cat.path}
              className={`category-chip ${isActive ? 'active chip-active' : ''}`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
