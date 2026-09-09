'use client';

import React from 'react';
import { Smartphone, Star, Users, Zap, Shield, TrendingUp } from 'lucide-react';

const FEATURES = [
  { icon: Smartphone, title: 'Cross-Platform', desc: 'iOS, Android, Web, and Desktop — every platform covered.' },
  { icon: Star, title: 'Daily Picks', desc: 'Hand-selected editor\'s choice apps featured every single day.' },
  { icon: Users, title: 'Maker Stories', desc: 'Behind-the-scenes interviews with the indie makers and studios.' },
  { icon: Zap, title: 'Launch Calendar', desc: 'Schedule your launch and get maximum visibility on launch day.' },
  { icon: Shield, title: 'Privacy Scores', desc: 'Data collection, tracking, and privacy policy analysis for every app.' },
  { icon: TrendingUp, title: 'App Trends', desc: 'Rising categories, seasonal patterns, and market movement reports.' },
];

export function FeaturesSection() {
  return (
    <section className="ald-features">
      <div className="ald-features-header">
        <h2 className="ald-section-title">
          Why <span className="ald-accent-text">AppLaunchDaily</span>
        </h2>
        <p className="ald-section-subtitle">More than a directory — a curated ecosystem built for your workflow.</p>
      </div>
      <div className="ald-features-grid">
        {FEATURES.map((f) => (
          <div key={f.title} className="ald-feature-card">
            <div className="ald-feature-icon"><f.icon size={22} /></div>
            <h3 className="ald-feature-title">{f.title}</h3>
            <p className="ald-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
