'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Smartphone, Apple, Play, Laptop, Sparkles, Star, Download, QrCode, Search, Flame, ArrowUpRight } from 'lucide-react';

const SPOTLIGHT_APPS = [
  {
    id: 'chronocraft',
    name: 'ChronoCraft AI',
    tagline: 'Spatial time-blocking & 3D focus timers for visionOS & iOS.',
    platform: 'iOS • visionOS',
    rating: '4.9',
    reviews: '1.2k',
    iconBg: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    badge: 'App of the Day #1',
    downloads: '14.2k installs',
    testFlightSeats: '18 seats left',
  },
  {
    id: 'lensflow',
    name: 'LensFlow Pro',
    tagline: 'Computational RAW grading studio right in your pocket.',
    platform: 'iOS • macOS',
    rating: '4.8',
    reviews: '850',
    iconBg: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    badge: 'Featured Utility',
    downloads: '9.8k installs',
    testFlightSeats: 'Open Beta',
  },
  {
    id: 'habitpulse',
    name: 'HabitPulse Widget',
    tagline: 'Interactive dynamic island habit tracker with AI nudge.',
    platform: 'iOS • Android',
    rating: '5.0',
    reviews: '2.4k',
    iconBg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    badge: 'Top Micro-App',
    downloads: '28.5k installs',
    testFlightSeats: 'Instant Download',
  },
];

export function HeroSection() {
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const currentApp = SPOTLIGHT_APPS[activeAppIndex];

  return (
    <section className="applaunch-hero">
      <div className="applaunch-hero-grid">
        {/* Left: Value proposition & Search */}
        <div className="applaunch-hero-content">
          <div className="applaunch-badge">
            <Flame size={14} className="text-orange-500 animate-pulse" />
            <span>Discover Today's #1 Trending Mobile Launches</span>
          </div>

          <h1 className="applaunch-title">
            The Launchpad for <span className="applaunch-gradient-text">Breakthrough Mobile</span> & Indie Apps.
          </h1>

          <p className="applaunch-lead">
            Curating high-craft iOS TestFlights, Android utilities, macOS micro-tools, and indie mobile creations before they hit the top charts.
          </p>

          {/* Search Box */}
          <form 
            action="/search" 
            method="GET" 
            className="applaunch-search-bar"
            onSubmit={(e) => {
              if (!searchQuery.trim()) e.preventDefault();
            }}
          >
            <Search size={18} className="applaunch-search-icon" />
            <input
              type="text"
              name="q"
              placeholder="Search indie apps, TestFlight betas, camera tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="applaunch-search-input"
            />
            <button type="submit" className="applaunch-search-btn">
              Explore Apps
            </button>
          </form>

          {/* Platform Pills */}
          <div className="applaunch-platforms-row">
            <span className="applaunch-platforms-label">Platforms:</span>
            <div className="applaunch-platforms-list">
              <Link href="/category/apps" className="applaunch-platform-pill">
                <Apple size={13} /> iOS & TestFlight
              </Link>
              <Link href="/category/productivity" className="applaunch-platform-pill">
                <Laptop size={13} /> macOS Native
              </Link>
              <Link href="/category/developer-tools" className="applaunch-platform-pill">
                <Play size={13} /> Android Utilities
              </Link>
              <Link href="/category/ai" className="applaunch-platform-pill">
                <Sparkles size={13} /> Mobile AI
              </Link>
            </div>
          </div>

          {/* Metrics strip */}
          <div className="applaunch-stats-strip">
            <div className="applaunch-stat-box">
              <span className="applaunch-stat-num">4,200+</span>
              <span className="applaunch-stat-desc">Mobile Apps</span>
            </div>
            <div className="applaunch-stat-divider" />
            <div className="applaunch-stat-box">
              <span className="applaunch-stat-num">85,000+</span>
              <span className="applaunch-stat-desc">Active Testers</span>
            </div>
            <div className="applaunch-stat-divider" />
            <div className="applaunch-stat-box">
              <span className="applaunch-stat-num">100% Free</span>
              <span className="applaunch-stat-desc">Launch Access</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Mobile Mockup Card */}
        <div className="applaunch-mockup-wrapper">
          <div className="phone-spotlight-card">
            {/* Spotlight Header with Switcher */}
            <div className="phone-spotlight-header">
              <div className="phone-spotlight-tag">
                <Sparkles size={13} />
                <span>{currentApp.badge}</span>
              </div>
              <div className="app-switcher-dots">
                {SPOTLIGHT_APPS.map((app, idx) => (
                  <button
                    key={app.id}
                    onClick={() => setActiveAppIndex(idx)}
                    className={`app-dot-btn ${activeAppIndex === idx ? 'active' : ''}`}
                    title={app.name}
                    type="button"
                  />
                ))}
              </div>
            </div>

            {/* Mobile App Card Details */}
            <div className="phone-app-body">
              <div className="phone-app-icon" style={{ background: currentApp.iconBg }}>
                <Smartphone size={28} className="text-white" />
              </div>
              <div className="phone-app-info">
                <h3 className="phone-app-name">{currentApp.name}</h3>
                <div className="phone-app-meta">
                  <span className="phone-app-platform">{currentApp.platform}</span>
                  <div className="phone-app-rating">
                    <Star size={12} className="fill-amber-400 text-amber-400" />
                    <span>{currentApp.rating}</span>
                    <span className="phone-app-reviews">({currentApp.reviews})</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="phone-app-tagline">{currentApp.tagline}</p>

            {/* Live Beta & Download Status Pill */}
            <div className="phone-status-banner">
              <div className="phone-status-left">
                <Download size={14} className="text-orange-400" />
                <span>{currentApp.downloads}</span>
              </div>
              <span className="phone-seats-badge">{currentApp.testFlightSeats}</span>
            </div>

            {/* CTA action row */}
            <div className="phone-actions-row">
              <Link href="/submit" className="phone-btn-primary">
                Launch Your App <ArrowUpRight size={14} />
              </Link>
              <button 
                className="phone-btn-secondary" 
                onClick={() => setActiveAppIndex((prev) => (prev + 1) % SPOTLIGHT_APPS.length)}
                type="button"
              >
                Next App
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
