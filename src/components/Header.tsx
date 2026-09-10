'use client';

import React from 'react';

export function Header({ siteName = 'AppLaunchDaily' }: { siteName?: string }) {
  return (
    <header className="launch-navbar">
      <div className="container launch-nav-inner">
        <a href="/" className="launch-brand">
          <span className="launch-rocket">🚀</span>
          <span className="launch-brand-text">{siteName}</span>
          <span className="launch-badge-live">LIVE·CYCLE</span>
        </a>

        <div className="launch-nav-menu">
          <a href="/" className="launch-nav-item active">Today's Podium</a>
          <a href="/trends" className="launch-nav-item">Weekly Winners</a>
          <a href="/category/micro-saas" className="launch-nav-item">Micro-SaaS</a>
          <a href="/category/ai" className="launch-nav-item">AI Products</a>
          <a href="/sponsor" className="launch-nav-item launch-nav-highlight">Featured Ad</a>
        </div>

        <div className="launch-nav-actions">
          <div className="launch-batch-timer">
            <span className="launch-flame">🔥</span>
            <span>BATCH: 08H LEFT</span>
          </div>
          <a href="/submit" className="launch-cta-btn">
            + Launch Product <span>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}

