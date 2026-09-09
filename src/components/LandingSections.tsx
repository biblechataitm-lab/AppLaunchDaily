'use client';

import React from 'react';
import Link from 'next/link';
import { Smartphone, Apple, Play, Laptop, Sparkles, Star, Download, Flame, ArrowRight, ShieldCheck, CheckCircle2, Rocket } from 'lucide-react';

export function LandingSections() {
  return (
    <div className="landing-additional-sections">
      {/* 1. Feature Highlights Bento Grid */}
      <section className="landing-feature-grid-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Flame size={12} className="text-orange-500" />
            <span>Curated Mobile Matrix</span>
          </div>
          <h2 className="landing-section-heading">Built for Mobile Creators & Early Adopters</h2>
          <p className="landing-section-sub">
            Discover vetted TestFlight betas, indie app creations, macOS utilities, and VisionOS spatial experiences before they hit the App Store top charts.
          </p>
        </div>

        <div className="landing-bento-grid">
          {/* Bento Card 1: TestFlight Access */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box orange">
                <Apple size={20} />
              </div>
              <span className="bento-badge">Real-Time Seats</span>
            </div>
            <h3 className="bento-card-title">TestFlight Beta Radar & Instant Access</h3>
            <p className="bento-card-desc">
              Get notified the moment exclusive indie iOS TestFlight slots open up. Direct TestFlight links, changelogs, and feedback channels.
            </p>
            <div className="bento-metric-row">
              <div className="metric-pill">
                <span className="pill-val">85,000+</span>
                <span className="pill-lbl">Beta Testers</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">4.9★</span>
                <span className="pill-lbl">Avg Rating</span>
              </div>
              <div className="metric-pill">
                <span className="pill-val">100%</span>
                <span className="pill-lbl">Verified Betas</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: macOS Native Workhorses */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box stone">
                <Laptop size={20} />
              </div>
              <span className="bento-badge">macOS Native</span>
            </div>
            <h3 className="bento-card-title">Menu Bar & Native Micro-Apps</h3>
            <p className="bento-card-desc">
              Ultra-lightweight Swift tools, menu bar utilities, and macOS productivity widgets.
            </p>
            <div className="bento-check-list">
              <span className="check-item"><CheckCircle2 size={13} /> Zero Electron Bloat</span>
              <span className="check-item"><CheckCircle2 size={13} /> Apple Silicon Native</span>
            </div>
          </div>

          {/* Bento Card 3: Dynamic Island & Spatial */}
          <div className="bento-feature-card">
            <div className="bento-card-top">
              <div className="bento-icon-box amber">
                <Sparkles size={20} />
              </div>
              <span className="bento-badge">visionOS / iOS</span>
            </div>
            <h3 className="bento-card-title">Dynamic Island & Spatial Apps</h3>
            <p className="bento-card-desc">
              Interactive live activities, widget stacks, and spatial computing apps for Apple Vision Pro.
            </p>
          </div>

          {/* Bento Card 4: Android & Cross-Platform */}
          <div className="bento-feature-card span-2">
            <div className="bento-card-top">
              <div className="bento-icon-box emerald">
                <Play size={20} />
              </div>
              <span className="bento-badge">Google Play / APK</span>
            </div>
            <h3 className="bento-card-title">Material You & Indie Android Software</h3>
            <p className="bento-card-desc">
              Hand-picked Android open-source tools, F-Droid gems, and early access builds.
            </p>
            <div className="bento-tag-row">
              <span className="tag-chip">Material You v3</span>
              <span className="tag-chip">Kotlin Native</span>
              <span className="tag-chip">F-Droid Curated</span>
              <span className="tag-chip">Jetpack Compose</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Curation Process Section */}
      <section className="landing-process-section">
        <div className="section-title-wrap">
          <div className="section-pill-tag">
            <Rocket size={12} className="text-orange-500" />
            <span>The Launch Lifecycle</span>
          </div>
          <h2 className="landing-section-heading">How AppLaunchDaily Discovers Apps</h2>
          <p className="landing-section-sub">
            From TestFlight beta drop to Product of the Day charting.
          </p>
        </div>

        <div className="process-steps-grid">
          <div className="process-step-card">
            <div className="step-number">01</div>
            <h4 className="step-title">Build & Craft Review</h4>
            <p className="step-desc">
              We check UI craft, dynamic typography, haptics, and battery performance on real devices.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">02</div>
            <h4 className="step-title">Beta Seat Distribution</h4>
            <p className="step-desc">
              Your TestFlight or early access slots are distributed directly to engaged mobile power users.
            </p>
          </div>
          <div className="process-step-card">
            <div className="step-number">03</div>
            <h4 className="step-title">Featured Charting & Growth</h4>
            <p className="step-desc">
              Top launches gain featured badges, App of the Day ranking, and thousands of genuine reviews.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Launch CTA Banner */}
      <section className="landing-launch-cta">
        <div className="launch-cta-content">
          <span className="launch-cta-tag">✦ LAUNCH ON APPLAUNCHDAILY</span>
          <h3 className="launch-cta-heading">Launch Your Mobile App to 85,000+ Active Testers</h3>
          <p className="launch-cta-desc">
            Fill your TestFlight seats, collect actionable crash reports, and build initial launch momentum today.
          </p>
          <div className="launch-cta-buttons">
            <Link href="/submit" className="launch-cta-primary">
              Launch App Now <ArrowRight size={15} />
            </Link>
            <Link href="/category/apps" className="launch-cta-secondary">
              Browse Top Charts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
