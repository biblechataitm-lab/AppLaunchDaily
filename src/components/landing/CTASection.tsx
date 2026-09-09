'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket } from 'lucide-react';

export function CTASection() {
  return (
    <section className="ald-cta">
      <div className="ald-cta-glow" aria-hidden="true" />
      <div className="ald-cta-content">
        <h2 className="ald-cta-title">Launch Your App Today</h2>
        <p className="ald-cta-subtitle">Get your app discovered by 28K+ enthusiasts, early adopters, and tech reviewers.</p>
        <div className="ald-cta-buttons">
          <Link href="/submit" className="ald-cta-btn-primary">
            <Rocket size={15} /> Submit Product
          </Link>
          <Link href="/sponsor" className="ald-cta-btn-secondary">
            Sponsor <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
