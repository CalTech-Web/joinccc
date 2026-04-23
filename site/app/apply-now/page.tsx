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
  "name": "Apply for CalAIM Housing Support | California Care Coordinators",
  "url": "https://joinccc.org/apply-now",
  "description": "Apply online for free CalAIM housing support in Southern California. Qualifying Medi-Cal members receive housing navigation, up to $5,000 in move-in funds, and Enhanced Care Management at no cost.",
  "inLanguage": "en-US",
  "isPartOf": { "@type": "WebSite", "url": "https://joinccc.org" },
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
      "provider": {
        "@type": "Organization",
        "name": "California Care Coordinators",
        "url": "https://joinccc.org",
      },
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
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #23779B 0%, #1E2828 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Apply for CalAIM Housing Support in Five Minutes</h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto">
            A CCC case manager will review your information and reach out within one to two business days. If your situation is urgent, call (888) 582-2282 directly.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#F4F8FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-[#1E2828] mb-2">Your Application</h2>
            <p className="text-gray-500 text-sm mb-8">
              Fields marked with * are required. Your information is protected under HIPAA and CCPA.
            </p>
            <ApplicationForm />
          </div>

          {/* Eligibility Note */}
          <div className="mt-8 bg-[#23779B]/10 border border-[#23779B]/20 rounded-xl p-6">
            <h3 className="font-bold text-[#1E2828] mb-2">Who is Eligible?</h3>
            <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Medi-Cal members homeless, at risk, or recently institutionalized
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Members with chronic physical or psychological conditions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Low-income households eligible for cash assistance
              </li>
            </ul>
            <p className="text-gray-500 text-xs mt-4">
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
      </section>
    </>
  );
}
