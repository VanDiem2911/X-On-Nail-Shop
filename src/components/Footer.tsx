"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Col 1: X-ON VIP Form */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              X-ON VIP
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Sign up for emails and texts to be the first to know about exclusive deals, launches &amp; more!
            </p>

            {subscribed ? (
              <p className="text-xs text-emerald-400 font-semibold">
                ✓ Thank you for joining X-ON VIP!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="space-y-2.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-xs text-white placeholder-neutral-500 rounded-sm focus:outline-hidden focus:border-white"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 text-xs text-white placeholder-neutral-500 rounded-sm focus:outline-hidden focus:border-white"
                />
                <label className="flex items-start gap-2 text-[10px] text-neutral-500 leading-tight">
                  <input type="checkbox" required className="mt-0.5 rounded-sm" />
                  <span>
                    I agree to receive recurring automated marketing messages. Consent is not a condition of purchase.
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-colors"
                >
                  Join Us
                </button>
              </form>
            )}
          </div>

          {/* Col 2: Brand */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Brand
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/wholesale-signup" className="hover:text-white transition-colors">
                  Wholesale Signup
                </Link>
              </li>
              <li>
                <Link href="/bundle-and-save" className="hover:text-white transition-colors">
                  Bundle and Save
                </Link>
              </li>
              <li>
                <Link href="/sizing-chart" className="hover:text-white transition-colors">
                  Sizing Chart
                </Link>
              </li>
              <li>
                <Link href="/gallery-product" className="hover:text-white transition-colors">
                  Gallery Product
                </Link>
              </li>
              <li>
                <Link href="/gallery-coming-soon" className="hover:text-white transition-colors">
                  Gallery Coming Soon
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Social
            </h3>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Feel Free to Call & Address */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Feel Free to Call
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                <a href="tel:+16892128888" className="hover:text-white font-medium">
                  689-212-8888
                </a>
              </p>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/3168+Bill+Beck+Blvd,+Kissimmee,+FL+34744,+Hoa+K%E1%BB%B3/@28.3421851,-81.384924,96m/data=!3m1!1e3!4m6!3m5!1s0x88dd86f7f805bafd:0x719187b51bbcb7ff!8m2!3d28.3423066!4d-81.3845875!16s%2Fg%2F11bw40bzvw!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-snug hover:text-white transition-colors"
                >
                  3168 Bill Beck Blvd, Kissimmee Fl 34744
                </a>
              </div>

              <div className="pt-2 space-y-1">
                <p className="text-[11px] text-neutral-500 uppercase tracking-wider">
                  Email Support:
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <a href="mailto:info@x-on.com" className="hover:text-white">
                    info@x-on.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} X-ON. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
