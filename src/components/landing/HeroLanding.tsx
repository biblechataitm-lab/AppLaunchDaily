'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section class="launch-hero">
  <div class="launch-hero-grid container">
    <div class="launch-hero-left">
      <div class="launch-countdown-tag">
        <span class="launch-fire">🔥</span>
        <span>TODAY’S LEADERBOARD · LAUNCH CYCLE 08h 24m REMAINING</span>
      </div>
      <h1 class="launch-title">
        The Daily Launchpad for <span class="launch-coral">Indie Makers</span>
      </h1>
      <p class="launch-desc">
        Vote on genuine software crafted by independent founders. Discover today’s #1 breakout product before sunset.
      </p>
      <div class="launch-search-bar">
        <input type="text" placeholder="Search launches, maker names, or tech stacks..." class="launch-input" />
        <button class="launch-btn">Explore Podium</button>
      </div>
    </div>
    <div class="launch-hero-right">
      <div class="podium-card podium-first">
        <div class="podium-rank">#1 TODAY</div>
        <div class="podium-content">
          <h4>Happy Voice</h4>
          <p>AI phone orders directly into Clover POS tickets</p>
          <div class="podium-votes">▲ 480 Upvotes</div>
        </div>
      </div>
      <div class="podium-card podium-second">
        <div class="podium-rank">#2 TODAY</div>
        <div class="podium-content">
          <h4>ShipFast</h4>
          <p>Next.js boilerplate to launch micro-SaaS in days</p>
          <div class="podium-votes">▲ 450 Upvotes</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
