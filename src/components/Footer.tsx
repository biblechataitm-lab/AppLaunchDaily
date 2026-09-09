import React from 'react';
import Link from 'next/link';
import { ExternalLink, MessageCircle, Mail } from 'lucide-react';

export function Footer({ siteName = 'AppLaunchDaily' }: { siteName?: string }) {
  return (
    <footer className="ald-footer">
      <div className="ald-footer-content">
        <div className="ald-footer-top">
          <div className="ald-footer-brand-area">
            <div className="ald-footer-brand"><span>{siteName}</span></div>
            <p className="ald-footer-tagline">Daily curated app launches. Discover iOS, Android, and web apps from indie makers and studios worldwide.</p>
            <div className="ald-footer-socials">
              <a href="#" aria-label="Website"><ExternalLink size={16} /></a>
              <a href="#" aria-label="Community"><MessageCircle size={16} /></a>
              <a href="#" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="ald-footer-links-grid">
            <div>
              <h4 className="ald-footer-heading">Explore</h4>
              <ul>
                <li><Link href="/">Today's Launches</Link></li>
                <li><Link href="/trends">Trending</Link></li>
                <li><Link href="/collections/this-week">Weekly Top</Link></li>
                <li><Link href="/collections/this-month">Monthly Top</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="ald-footer-heading">Categories</h4>
              <ul>
                <li><Link href="/category/ios-apps">iOS Apps</Link></li>
                <li><Link href="/category/android-apps">Android Apps</Link></li>
                <li><Link href="/category/web-apps">Web Apps</Link></li>
                <li><Link href="/category/desktop">Desktop</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="ald-footer-heading">Directory</h4>
              <ul>
                <li><Link href="/submit">Submit Product</Link></li>
                <li><Link href="/sponsor">Sponsor</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
                <li><Link href="/terms">Terms</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ald-footer-bottom">
          <span>&copy; {new Date().getFullYear()} {siteName}. All rights reserved.</span>
          <span>Powered by the Publisher Ad Network</span>
        </div>
      </div>
    </footer>
  );
}
