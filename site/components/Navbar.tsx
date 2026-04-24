"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-[0_6px_24px_-12px_rgba(30,40,40,0.18)] border-b border-gray-100"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2.5">
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image
              src="/logos/ccc-logo-blue.png"
              alt="California Care Coordinators"
              width={180}
              height={48}
              className="h-11 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
              priority
            />
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className="relative text-[#1E2828] font-medium text-sm hover:text-[#23779B] transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#23779B] after:to-[#2FB5DB] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              href="/tos-privacy-policy"
              className="relative text-[#1E2828] font-medium text-sm hover:text-[#23779B] transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-[#23779B] after:to-[#2FB5DB] hover:after:w-full after:transition-all after:duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/apply-now"
              className="relative border-2 border-[#23779B] text-[#23779B] px-5 py-2 rounded-full font-semibold text-sm hover:bg-[#23779B] hover:text-white transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Apply Now
            </Link>
            <a
              href="tel:8885822282"
              className="group inline-flex items-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-[0_8px_18px_-8px_rgba(35,119,155,0.6)] hover:shadow-[0_12px_22px_-8px_rgba(35,119,155,0.75)] hover:-translate-y-0.5 transition-all"
            >
              <span className="relative flex w-2 h-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-white/70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              (888) 582-2282
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg text-[#1E2828] hover:bg-[#F4F8FC] transition-colors"
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

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3">
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-[#1E2828] hover:text-[#23779B] font-medium py-2 px-1" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/tos-privacy-policy" className="text-[#1E2828] hover:text-[#23779B] font-medium py-2 px-1" onClick={() => setMobileOpen(false)}>
                Privacy Policy
              </Link>
              <Link
                href="/apply-now"
                className="border-2 border-[#23779B] text-[#23779B] px-5 py-3 rounded-full font-semibold text-center hover:bg-[#23779B] hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
              <a
                href="tel:8885822282"
                className="bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white px-5 py-3 rounded-full font-semibold text-center shadow-md hover:shadow-lg transition-all"
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
