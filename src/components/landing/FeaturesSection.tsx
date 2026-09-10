'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section className="launch-features container">
  <div className="launch-header">
    <span className="launch-tag">// THE MAKER PROMISE</span>
    <h2>Fair, Verified &amp; Bot-Filtered Upvotes</h2>
  </div>
  <div className="launch-grid-3">
    <div className="launch-f-card">
      <div className="l-icon">🏆</div>
      <h3>Daily Reset at Midnight</h3>
      <p>Every product competes on an equal playing field. 24 hours to capture community feedback and users.</p>
    </div>
    <div className="launch-f-card">
      <div className="l-icon">🛡</div>
      <h3>Sybil &amp; Bot Defense</h3>
      <p>Algorithmic vote filtering penalizes automated upvote rings and ensures genuine organic traction.</p>
    </div>
    <div className="launch-f-card">
      <div className="l-icon">🚀</div>
      <h3>Front-Page Spotlight</h3>
      <p>The top 3 products every day receive permanent features in our weekly newsletter to 35,000 subscribers.</p>
    </div>
  </div>
</section>
  );
}
