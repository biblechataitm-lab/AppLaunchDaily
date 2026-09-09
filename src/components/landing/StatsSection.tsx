'use client';

import React from 'react';

const STATS = [
  { value: '1,800+', label: 'Apps Listed' },
  { value: '80+', label: 'Daily Launches' },
  { value: '28K+', label: 'App Enthusiasts' },
  { value: '93%', label: 'Maker Satisfaction' },
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
