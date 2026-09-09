'use client';

import React, { useEffect, useRef } from 'react';
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

export function HeroLanding() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const children = hero.querySelectorAll('.ald-animate');
    children.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      setTimeout(() => {
        htmlEl.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        htmlEl.style.opacity = '1';
        htmlEl.style.transform = 'translateY(0)';
      }, 100 + i * 100);
    });
  }, []);

  return (
    <section ref={heroRef} className="ald-hero">
      <div className="ald-hero-bg" aria-hidden="true" />
      <div className="ald-hero-container">
        <div className="ald-hero-content">
          <div className="ald-animate ald-hero-badge">
            <span>Fresh Apps, Every Day</span>
          </div>
          <h1 className="ald-animate ald-hero-title">
            Discover Amazing{' '}
            <span className="ald-accent-text">Mobile & Web Apps</span>
          </h1>
          <p className="ald-animate ald-hero-subtitle">
            Daily curated app launches across iOS, Android, web, and desktop — from indie makers to established studios. Find your next favorite app.
          </p>
          <form
            className="ald-animate ald-hero-search"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector('input');
              if (input?.value.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
              }
            }}
          >
            <Search size={16} className="ald-hero-search-icon" />
            <input type="text" placeholder="Search apps, mobile tools..." />
            <button type="submit">Explore <ArrowRight size={14} /></button>
          </form>
          <div className="ald-animate ald-hero-tags">
            <a href="/category/ai" className="ald-tag">AI Apps</a>
            <a href="/category/productivity" className="ald-tag">Productivity</a>
            <a href="/category/developer-tools" className="ald-tag">Dev Tools</a>
            <a href="/trends" className="ald-tag ald-tag-hot">
              <TrendingUp size={12} /> Trending
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
