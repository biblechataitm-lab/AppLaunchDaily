'use client';

import React from 'react';

export function Header({ siteName = 'AppLaunchDaily' }: { siteName?: string }) {
  return (
    <header class="launch-navbar">
  <div class="container launch-nav-inner">
    <a href="/" class="launch-brand">
      <span class="launch-rocket">🚀</span>
      <span>AppLaunchDaily</span>
    </a>
    <div class="launch-nav-menu">
      <a href="/">Today's Podium</a>
      <a href="/trends">Yesterday's Winners</a>
      <a href="/category/ai">Categories</a>
      <a href="/sponsor">Promote</a>
    </div>
    <a href="/submit" class="launch-cta-btn">+ Launch Today</a>
  </div>
</header>
  );
}
