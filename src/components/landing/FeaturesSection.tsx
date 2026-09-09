'use client';

import React from 'react';

export function FeaturesSection() {
  return (
    <section class="launch-features container">
  <div class="launch-header">
    <span class="launch-tag">// THE MAKER PROMISE</span>
    <h2>Fair, Verified &amp; Bot-Filtered Upvotes</h2>
  </div>
  <div class="launch-grid-3">
    <div class="launch-f-card">
      <div class="l-icon">🏆</div>
      <h3>Daily Reset at Midnight</h3>
      <p>Every product competes on an equal playing field. 24 hours to capture community feedback and users.</p>
    </div>
    <div class="launch-f-card">
      <div class="l-icon">🛡</div>
      <h3>Sybil &amp; Bot Defense</h3>
      <p>Algorithmic vote filtering penalizes automated upvote rings and ensures genuine organic traction.</p>
    </div>
    <div class="launch-f-card">
      <div class="l-icon">🚀</div>
      <h3>Front-Page Spotlight</h3>
      <p>The top 3 products every day receive permanent features in our weekly newsletter to 35,000 subscribers.</p>
    </div>
  </div>
</section>
  );
}
