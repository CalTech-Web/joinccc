import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0e1414] text-white overflow-hidden">
      {/* Decorative gradient glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#23779B]/25 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-[#F5B642]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 dot-grid-light opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Top gradient hairline */}
      <div className="relative h-0.5 bg-gradient-to-r from-transparent via-[#23779B] to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo + Tagline + CTA */}
          <div className="md:col-span-5">
            <Image
              src="/logos/ccc-logo-blue-fullres.png"
              alt="California Care Coordinators"
              width={220}
              height={60}
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Housing navigation, deposit vouchers, and care coordination for Medi-Cal members in Southern California.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white font-semibold text-sm px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-all shadow-lg shadow-[#23779B]/30"
              >
                Apply Now
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:8885822282"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                (888) 582-2282
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-[0.18em]">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link href="/" className="inline-flex items-center gap-2 hover:text-[#2FB5DB] transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-[#23779B] group-hover:w-3 transition-all" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="inline-flex items-center gap-2 hover:text-[#2FB5DB] transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-[#23779B] group-hover:w-3 transition-all" />
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/tos-privacy-policy" className="inline-flex items-center gap-2 hover:text-[#2FB5DB] transition-colors group">
                  <span className="w-1 h-1 rounded-full bg-[#23779B] group-hover:w-3 transition-all" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-[0.18em]">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-3">
              <p className="text-white font-semibold">CCC | California Care Coordinators</p>
              <p className="flex items-start gap-2.5 text-gray-300">
                <svg className="w-4 h-4 mt-0.5 text-[#2FB5DB] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>901 W. Civic Center Dr. Suite 200<br />Santa Ana, CA 92703</span>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2FB5DB] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:8885822282" className="hover:text-[#2FB5DB] transition-colors font-medium">
                  (888) 582-2282
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2FB5DB] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:apply@joinccc.org" className="hover:text-[#2FB5DB] transition-colors">
                  apply@joinccc.org
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs">
          <p>© 2026 CA Care Coordinators LTD. All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              className="text-white hover:text-[#2FB5DB] transition-colors font-semibold underline underline-offset-2 decoration-[#23779B]/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
