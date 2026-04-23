import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1E2828] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <Image
              src="/logos/ccc-logo-blue-fullres.png"
              alt="California Care Coordinators"
              width={220}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Housing navigation, deposit vouchers, and care coordination for Medi-Cal members in Southern California.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-[#23779B] transition-colors">Home</Link></li>
              <li><Link href="/apply-now" className="hover:text-[#23779B] transition-colors">Apply Now</Link></li>
              <li><Link href="/tos-privacy-policy" className="hover:text-[#23779B] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact Us</h3>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>CCC | California Care Coordinators</p>
              <p>901 W. Civic Center Dr. Suite 200<br />Santa Ana, CA 92703</p>
              <p>
                <a href="tel:8885822282" className="hover:text-[#23779B] transition-colors font-medium">
                  (888) 582-2282
                </a>
              </p>
              <p>
                <a href="mailto:apply@joinccc.org" className="hover:text-[#23779B] transition-colors">
                  apply@joinccc.org
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-xs">
          <p>© 2026 CA Care Coordinators LTD. All Rights Reserved.</p>
          <p>
            Powered by{" "}
            <a href="https://caltechweb.com" className="hover:text-[#23779B] transition-colors underline" target="_blank" rel="noopener noreferrer">
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
