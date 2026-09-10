'use client';

import React from 'react';

const STATS = [
  { value: '100%', label: 'Direct Maker Submissions' },
  { value: 'Realtime', label: 'Verified Catalog Releases' },
  { value: 'Community', label: 'Upvote & Feedback Engine' },
  { value: 'Zero Tracking', label: 'Privacy First Directory' },
];

export function StatsSection() {
  return (
    <section className="ald-stats">
      <div className="ald-stats-grid">
        {STATS.map((s) => (
          <div key={s.label} className="ald-stat-card">
            <div className="ald-stat-value">{s.value}</div>
            <div className="ald-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
