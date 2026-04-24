import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply Now",
  description:
    "Apply for free CalAIM housing support in Southern California. Qualifying Medi-Cal members can receive housing navigation, up to $5,000 in move-in funds, and Enhanced Care Management at no cost.",
  alternates: {
    canonical: "/apply-now",
  },
  openGraph: {
    type: "website",
    url: "https://joinccc.org/apply-now",
    title: "Apply Now | California Care Coordinators",
    description:
      "Apply online for free CalAIM housing support, up to $5,000 in move-in funds, and Enhanced Care Management for qualifying Medi-Cal members in Southern California.",
    images: [
      {
        url: "/logos/ccc-logo-blue-fullres.png",
        alt: "California Care Coordinators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply Now | California Care Coordinators",
    description:
      "Apply online for free CalAIM housing support, up to $5,000 in move-in funds, and Enhanced Care Management for qualifying Medi-Cal members.",
    images: ["/logos/ccc-logo-blue-fullres.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joinccc.org" },
    { "@type": "ListItem", "position": 2, "name": "Apply Now", "item": "https://joinccc.org/apply-now" },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://joinccc.org/apply-now#webpage",
  "name": "Apply for CalAIM Housing Support | California Care Coordinators",
  "url": "https://joinccc.org/apply-now",
  "datePublished": "2023-01-01",
  "dateModified": "2026-04-22",
  "description": "Apply online for free CalAIM housing support in Southern California. Qualifying Medi-Cal members receive housing navigation, up to $5,000 in move-in funds, and Enhanced Care Management at no cost.",
  "inLanguage": "en-US",
  "isPartOf": { "@type": "WebSite", "@id": "https://joinccc.org/#website" },
  "publisher": { "@type": "Organization", "@id": "https://joinccc.org/#organization" },
  "about": {
    "@type": "Service",
    "name": "CalAIM Community Supports",
    "provider": { "@type": "Organization", "@id": "https://joinccc.org/#organization" },
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://joinccc.org" },
      { "@type": "ListItem", "position": 2, "name": "Apply Now", "item": "https://joinccc.org/apply-now" },
    ],
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "h2"],
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "name": "Apply for CalAIM Housing Support",
    "target": "https://joinccc.org/apply-now",
    "object": {
      "@type": "Service",
      "name": "CalAIM Community Supports",
      "provider": { "@type": "Organization", "@id": "https://joinccc.org/#organization" },
    },
  },
};

export default function ApplyNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Page Header */}
      <section className="hero-mesh grain relative overflow-hidden h-[300px] flex items-center">
        <div className="orb animate-float-slow hidden sm:block" style={{ background: "#2FB5DB", width: 260, height: 260, top: -60, left: -40, opacity: 0.35 }} aria-hidden="true" />
        <div className="absolute inset-0 dot-grid-light opacity-30 pointer-events-none" aria-hidden="true" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 glass-strong text-white text-xs sm:text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            HIPAA Protected Application
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-[1.1]">
            Apply for <span className="text-gradient-white">CalAIM Housing Support</span> in Five Minutes
          </h1>
          <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A CCC case manager will review your information and reach out within one to two business days. If your situation is urgent, call (888) 582-2282 directly.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="relative py-16 sm:py-20 bg-[#F4F8FC] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-10 lg:gap-12 items-start">

            {/* Eligibility aside (sticky on desktop) */}
            <aside className="lg:sticky lg:top-24">
              <div className="relative bg-white rounded-2xl p-7 border border-[#23779B]/20 overflow-hidden shadow-sm">
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br from-[#23779B]/10 to-transparent blur-2xl pointer-events-none" aria-hidden="true" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white shadow-md shadow-[#23779B]/25 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#1E2828] mb-3 text-lg">Who is Eligible?</h3>
                  <ul className="text-gray-600 text-sm space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#23779B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Medi-Cal members homeless, at risk, or recently institutionalized
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#23779B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Members with chronic physical or psychological conditions
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-[#23779B] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Low-income households eligible for cash assistance
                    </li>
                  </ul>
                  <p className="text-gray-500 text-xs mt-5 pt-4 border-t border-gray-100">
                    Have questions? Call us at{" "}
                    <a href="tel:8885822282" className="text-[#23779B] font-semibold hover:underline">
                      (888) 582-2282
                    </a>{" "}
                    or email{" "}
                    <a href="mailto:apply@joinccc.org" className="text-[#23779B] font-semibold hover:underline">
                      apply@joinccc.org
                    </a>
                    .
                  </p>
                </div>
              </div>
            </aside>

            {/* Form column */}
            <div className="min-w-0">
              <div className="relative bg-white rounded-3xl shadow-[0_30px_80px_-30px_rgba(30,40,40,0.25)] border border-gray-100 p-8 sm:p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2FB5DB] via-[#23779B] to-[#1a5a75]" aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2828] mb-2">Your Application</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Fields marked with * are required. Your information is protected under HIPAA and CCPA.
                </p>
                <ApplicationForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
