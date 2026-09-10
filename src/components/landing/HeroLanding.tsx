'use client';

import React from 'react';

export function HeroLanding() {
  return (
    <section className="launch-hero">
      <div className="launch-hero-grid container">
        <div className="launch-hero-left">
          <div className="launch-countdown-tag">
            <span className="launch-fire">🔥</span>
            <span>TODAY’S LEADERBOARD · BATCH CYCLE 08h 24m REMAINING</span>
          </div>

          <h1 className="launch-title">
            The Daily Launchpad for <br />
            <span className="launch-coral">Indie Makers</span>
          </h1>

          <p className="launch-desc">
            Vote on software crafted by independent founders. Discover today’s #1 breakout product before sunset and join the community discussion.
          </p>

          <div className="launch-search-bar">
            <input 
              type="text" 
              placeholder="Search launches, maker handles, or tech stacks..." 
              className="launch-input" 
              aria-label="Search launched products"
            />
            <button className="launch-btn" type="button">
              Explore Podium
            </button>
          </div>

          <div className="launch-stats-row">
            <span className="launch-stat-item">🚀 <strong>Live</strong> Maker Submissions</span>
            <span className="launch-stat-item">▲ <strong>Direct</strong> Community Upvotes</span>
            <span className="launch-stat-item">⭐ <strong>100%</strong> Verified Links</span>
          </div>
        </div>

        <div className="launch-hero-right">
          <div className="podium-card podium-first">
            <div className="podium-header">
              <span className="podium-rank">🥇 LAUNCH LEADERBOARD</span>
              <span className="podium-badge-gold">VERIFIED</span>
            </div>
            <div className="podium-content">
              <h4>Direct Maker Showcase</h4>
              <p>Community-curated discovery with zero paywalls and unfiltered founder feedback</p>
              <div className="podium-action-bar">
                <span className="podium-votes">Daily Reset · 00:00 UTC</span>
                <span className="podium-maker">Open to All Builders</span>
              </div>
            </div>
          </div>

          <div className="podium-card podium-second">
            <div className="podium-header">
              <span className="podium-rank">⭐ CURATION ENGINE</span>
              <span className="podium-badge-silver">LIVE</span>
            </div>
            <div className="podium-content">
              <h4>Instant Community Indexing</h4>
              <p>Every submission is reviewed for security, clean UX, and authentic product utility</p>
              <div className="podium-action-bar">
                <span className="podium-votes">Live Registry</span>
                <span className="podium-maker">Transparent Voting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

