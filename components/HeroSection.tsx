'use client';

import React from 'react';
import Hero12 from '@/components/ui/hero-12';

export function HeroSection() {
  return (
    <div className="w-full mb-12">
      <Hero12
        brandName="AppLaunchDaily"
        badgeText="✦ The #1 Discovery Radar for iOS & macOS"
        headingLine1="Discover the Best Indie"
        headingLine2="iOS, macOS & Web Apps."
        description="The premier daily launchpad showcasing handpicked mobile applications, TestFlight early betas, and macOS utility software built by indie creators."
        primaryCtaLabel="Explore Mobile & Desktop Apps"
        primaryCtaHref="/category/mobile"
        secondaryCtaLabel="Submit Your App"
        secondaryCtaHref="/submit"
        signUpLabel="Launch App"
        signUpHref="/submit"
        bottomTagline="Connecting 42,000+ early adopters with game-changing indie products daily."
        scrollText="Explore Daily Radar"
      />
    </div>
  );
}
