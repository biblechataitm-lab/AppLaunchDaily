import React from 'react';
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
                <li><a href="/">Today's Launches</a></li>
                <li><a href="/trends">Trending</a></li>
                <li><a href="/collections/this-week">Weekly Top</a></li>
                <li><a href="/collections/this-month">Monthly Top</a></li>
              </ul>
            </div>
            <div>
              <h4 className="ald-footer-heading">Categories</h4>
              <ul>
                <li><a href="/category/ios-apps">iOS Apps</a></li>
                <li><a href="/category/android-apps">Android Apps</a></li>
                <li><a href="/category/web-apps">Web Apps</a></li>
                <li><a href="/category/desktop">Desktop</a></li>
              </ul>
            </div>
            <div>
              <h4 className="ald-footer-heading">Directory</h4>
              <ul>
                <li><a href="/submit">Submit Product</a></li>
                <li><a href="/sponsor">Sponsor</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
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
