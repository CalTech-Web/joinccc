"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logos/ccc-logo-blue.png"
              alt="California Care Coordinators"
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-[#1E2828] hover:text-[#23779B] font-medium transition-colors">
              Home
            </Link>
            <Link href="/apply-now" className="text-[#1E2828] hover:text-[#23779B] font-medium transition-colors">
              Apply Now
            </Link>
            <Link href="/tos-privacy-policy" className="text-[#1E2828] hover:text-[#23779B] font-medium transition-colors">
              TOS &amp; Privacy
            </Link>
            <a
              href="tel:8885822282"
              className="bg-[#23779B] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#1a5a75] transition-colors"
            >
              (888) 582-2282
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded text-[#1E2828]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-2">
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-[#1E2828] hover:text-[#23779B] font-medium py-2" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/apply-now" className="text-[#1E2828] hover:text-[#23779B] font-medium py-2" onClick={() => setMobileOpen(false)}>
                Apply Now
              </Link>
              <Link href="/tos-privacy-policy" className="text-[#1E2828] hover:text-[#23779B] font-medium py-2" onClick={() => setMobileOpen(false)}>
                TOS &amp; Privacy
              </Link>
              <a
                href="tel:8885822282"
                className="bg-[#23779B] text-white px-5 py-3 rounded-full font-semibold text-center hover:bg-[#1a5a75] transition-colors"
              >
                Call (888) 582-2282
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
