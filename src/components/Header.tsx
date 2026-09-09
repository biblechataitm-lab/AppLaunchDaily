'use client';

import React from 'react';

export function Header({ siteName = 'AppLaunchDaily' }: { siteName?: string }) {
  return (
    <header className="launch-navbar">
      <div className="container launch-nav-inner">
        <a href="/" className="launch-brand">
          <span className="launch-rocket">🚀</span>
          <span>AppLaunchDaily</span>
        </a>
        <div className="launch-nav-menu">
        <a href="/">Today's Podium</a>
        <a href="/trends">Yesterday's Winners</a>
        <a href="/category/micro-saas">Micro-SaaS</a>
        <a href="/sponsor">Promote</a>
        </div>
        <a href="/submit" className="launch-cta-btn">+ Launch Today</a>
      </div>
    </header>
  );
}
