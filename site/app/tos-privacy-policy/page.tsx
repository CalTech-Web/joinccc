import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service & Privacy Policy",
  description:
    "Read the Terms of Service and Privacy Policy for California Care Coordinators (CCC). Learn how we protect your personal information under HIPAA and CCPA.",
  alternates: {
    canonical: "/tos-privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://joinccc.org/tos-privacy-policy",
    title: "Terms of Service & Privacy Policy | California Care Coordinators",
    description:
      "Read the Terms of Service and Privacy Policy for California Care Coordinators. Learn how we protect your personal information under HIPAA and CCPA.",
    images: [
      {
        url: "/logos/ccc-logo-blue-fullres.png",
        alt: "California Care Coordinators",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service & Privacy Policy | California Care Coordinators",
    description:
      "Read the Terms of Service and Privacy Policy for California Care Coordinators. Your information is protected under HIPAA and CCPA.",
    images: ["/logos/ccc-logo-blue-fullres.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joinccc.org" },
    { "@type": "ListItem", "position": 2, "name": "Terms of Service & Privacy Policy", "item": "https://joinccc.org/tos-privacy-policy" },
  ],
};

export default function TosPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Page Header */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #23779B 0%, #1E2828 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms of Service &amp; Privacy Policy
          </h1>
          <p className="text-white/80 text-lg">
            Last updated: April 2026 | CA Care Coordinators LTD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-[#1E2828]">

            {/* Terms of Service */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#1E2828] mb-6 pb-3 border-b border-gray-200">Terms of Service</h2>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">1. Acceptance of Terms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                By accessing or using the California Care Coordinators (CCC) website at joinccc.org, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">2. Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCC provides CalAIM Community Supports services including Housing Navigation, Housing Deposit Vouchers, Tenancy Sustaining, Cash Assistance Vouchers, and Enhanced Care Management to qualifying Medi-Cal recipients. Services are subject to eligibility requirements established under California's CalAIM initiative. CCC reserves the right to modify, suspend, or discontinue any service at any time.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">3. Eligibility</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Services are available to qualifying Medi-Cal recipients who meet CalAIM Community Supports eligibility criteria. CCC does not guarantee services to any individual. Eligibility determinations are made at the sole discretion of CCC in accordance with CalAIM program guidelines.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">4. Housing Deposit Voucher Terms</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Housing Deposit Voucher is a once-per-member-per-lifetime benefit. It covers qualifying move-in costs including security deposit and first month's rent up to $5,000. Specific terms and conditions apply. Contact CCC for full voucher terms and eligibility requirements.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">5. Disclaimer</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information on this website is provided for general informational purposes only. CCC makes no warranties, expressed or implied, regarding the accuracy, adequacy, completeness, legality, reliability, or usefulness of any information on this site. All information is provided on an "as is" basis.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">6. Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CA Care Coordinators LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, this website or its services.
              </p>
            </div>

            {/* Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-[#1E2828] mb-6 pb-3 border-b border-gray-200">Privacy Policy</h2>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">1. Information We Collect</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCC collects information you provide directly, including your name, phone number, email address, mailing address, IEHP ID number, housing status, and health condition information when you submit an application or contact form. We may also collect technical information such as IP address, browser type, and pages visited.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">2. HIPAA Compliance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCC is committed to complying with the Health Insurance Portability and Accountability Act (HIPAA). Protected Health Information (PHI) collected in connection with our services is handled in accordance with HIPAA Privacy Rule requirements. We maintain appropriate administrative, physical, and technical safeguards to protect your health information.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">3. California Consumer Privacy Act (CCPA)</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                California residents have the right to know what personal information CCC collects, to request deletion of their personal information, and to opt out of the sale of their personal information. CCC does not sell personal information. To exercise your CCPA rights, contact us at contact@joinccc.org.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">4. How We Use Your Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use your information to process and evaluate your application for CalAIM Community Supports services, to contact you regarding your application, to coordinate care and housing services, to comply with legal and regulatory requirements, and to improve our services.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">5. Information Sharing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCC may share your information with managed care partners (including IEHP and CalOptima), housing authorities (including HACSB and HARIVCO), and other service providers as necessary to deliver CalAIM Community Supports services. We will not share your information for marketing purposes or sell it to third parties. All sharing is conducted in compliance with HIPAA and applicable state law.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">6. Data Security</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                CCC implements industry-standard security measures to protect your personal and health information. However, no method of transmission over the Internet is 100% secure. We encourage you to contact us directly at (888) 582-2282 if you have concerns about sharing sensitive information online.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">7. reCAPTCHA</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                This site may use Google reCAPTCHA to protect against spam and abuse. Use of reCAPTCHA is subject to the Google Privacy Policy and Terms of Service.
              </p>

              <h3 className="text-xl font-bold text-[#23779B] mt-8 mb-3">8. Contact Us</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about these Terms or our Privacy Policy, contact us:
              </p>
              <address className="not-italic bg-[#F4F8FC] rounded-xl p-6 text-gray-600 text-sm space-y-1">
                <p className="font-semibold text-[#1E2828]">CA Care Coordinators LTD</p>
                <p>901 W. Civic Center Dr., Suite 200</p>
                <p>Santa Ana, CA 92703</p>
                <p>
                  Phone:{" "}
                  <a href="tel:8885822282" className="text-[#23779B] hover:underline">
                    (888) 582-2282
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:contact@joinccc.org" className="text-[#23779B] hover:underline">
                    contact@joinccc.org
                  </a>
                </p>
              </address>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block bg-[#23779B] text-white font-bold px-8 py-3 rounded-full hover:bg-[#1a5a75] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
