import Image from "next/image";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    title: "Housing Navigation",
    description:
      "Your assigned case manager works the housing search for up to 12 months, coordinating with landlords and housing authorities on your behalf. One goal, an approved lease in your name.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    title: "Housing Deposit Voucher",
    description:
      "The deposit and first month's rent are often what stand between a qualified member and a signed lease. This voucher covers both, up to $5,000. Available once per member, per lifetime. Terms and conditions apply.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 14h4" />
      </svg>
    ),
  },
  {
    title: "Tenancy Sustaining",
    description:
      "Getting housed is step one. Staying housed takes continued support. Your case manager stays on for up to 12 more months to help you maintain the tenancy you worked to secure.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2l2.09 6.26L20 9.27l-4.91 4.73L16.18 20 12 17.27 7.82 20l1.09-6L4 9.27l5.91-.01L12 2z" />
      </svg>
    ),
  },
  {
    title: "Cash Assistance Vouchers",
    description:
      "Qualifying low-income members receive monthly cash payments based on Medi-Cal income guidelines for low-income households. Twelve months of additional support while you stabilize.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v1m0 8v1m-3-5h6m-5-2a2 2 0 114 0c0 1.5-4 2-4 3.5h4" />
      </svg>
    ),
  },
  {
    title: "Enhanced Care Management",
    description:
      "Managing appointments, referrals, and healthcare paperwork is a job in itself. Your CCC care manager handles that coordination for you, acting as a dedicated advocate for up to 12 months.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Day-Habilitation",
    description:
      "In-person coaching for housed members who qualify. A specialized caregiver works with you on financial planning, agency correspondence, and the practical skills independent living requires. Coming soon.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="7" r="3" />
        <path d="M5.5 21a7 7 0 0113 0" />
        <path d="M12 14v4m-2-2h4" />
      </svg>
    ),
    comingSoon: true,
  },
];

const metrics = [
  { label: "Active Members Served", value: "3,000+" },
  { label: "Case Managers on Staff", value: "60+" },
  { label: "Members Successfully Housed", value: "600+" },
  { label: "Total Vouchers Funded", value: "$1.7M+" },
];

const partners = [
  { image: "/gallery/partner-1-unitedway-fullres.png", alt: "United Way - Community nonprofit partner of California Care Coordinators" },
  { image: "/gallery/partner-2-hacsb-fullres.png", alt: "HACSB - Housing Authority of the County of San Bernardino" },
  { image: "/gallery/partner-3-harivco-fullres.png", alt: "HARIVCO - Housing Authority of the County of Riverside" },
  { image: "/gallery/partner-4-hud-fullres.png", alt: "HUD - U.S. Department of Housing and Urban Development" },
  { image: "/gallery/partner-5-calaim-fullres.png", alt: "CalAIM - California Advancing and Innovating Medi-Cal" },
];

const steps = [
  { step: "1", title: "Apply", description: "Fill out the online application in about five minutes. You'll need your name, contact info, IEHP ID, and a brief description of your current housing situation." },
  { step: "2", title: "Eligibility Review", description: "CCC reviews your application to confirm you qualify. Most applicants hear back within one to two business days." },
  { step: "3", title: "Case Manager Assignment", description: "If you qualify, a dedicated case manager is assigned to you. They become your single point of contact for housing, healthcare, and every enrolled service." },
  { step: "4", title: "Housing Navigation", description: "Your case manager works the housing search and handles coordination with landlords and housing authorities until you have an approved lease." },
  { step: "5", title: "Sustained Support", description: "Once you're housed, support continues for up to 12 more months. Tenancy Sustaining keeps you connected to your case manager so your housing stays stable." },
];

const faqs = [
  {
    q: "Who qualifies for CCC's services?",
    a: "Medi-Cal members who are homeless, at risk of homelessness, or recently institutionalized. You'll need an IEHP ID number to apply, and some applicants may be asked about chronic health conditions. If you're not sure whether you qualify, call (888) 582-2282 and a team member can walk you through it.",
  },
  {
    q: "How do I apply?",
    a: "The online application at joinccc.org/apply-now takes about five minutes. You'll need your name, phone, address, IEHP ID, and a brief description of your housing situation. If you'd rather talk to someone first, call (888) 582-2282.",
  },
  {
    q: "What is the Housing Deposit Voucher and how much is it?",
    a: "The voucher covers your security deposit and first month's rent, up to $5,000 total. It removes the upfront cash barrier that prevents most low-income applicants from signing a lease. This benefit is available once per member, per lifetime. Terms and conditions apply.",
  },
  {
    q: "How long do services last?",
    a: "Housing Navigation, Tenancy Sustaining, Enhanced Care Management, and Cash Assistance Vouchers each run for 12-month terms. The Housing Deposit Voucher is a single-use benefit. Day-Habilitation duration is still being finalized.",
  },
  {
    q: "What is CalAIM and how does it relate to CCC?",
    a: "CalAIM, short for California Advancing and Innovating Medi-Cal, is a state initiative that expanded Medi-Cal to include housing-related services. CCC is an approved CalAIM provider, which is why its services are available through your existing Medi-Cal benefits at no cost.",
  },
  {
    q: "What is Enhanced Care Management?",
    a: "Enhanced Care Management is a 12-month service where your CCC care manager acts as a Personal Healthcare Assistant. They coordinate your appointments, referrals, and healthcare paperwork so you can focus on your health instead of the administrative burden. It's available to qualifying members who have difficulty managing their ongoing healthcare needs.",
  },
  {
    q: "Are CCC's services free to members?",
    a: "Yes. CCC's services are funded through Medi-Cal under the CalAIM program. There is no cost to qualifying members. To confirm your eligibility, call (888) 582-2282 or email apply@joinccc.org.",
  },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "SocialService"],
  "@id": "https://joinccc.org/#organization",
  "name": "California Care Coordinators",
  "alternateName": "CCC",
  "url": "https://joinccc.org",
  "logo": "https://joinccc.org/logos/ccc-logo-blue-fullres.png",
  "image": "https://joinccc.org/logos/ccc-logo-blue-fullres.png",
  "telephone": "+18885822282",
  "faxNumber": "+17142429802",
  "email": "contact@joinccc.org",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "901 W. Civic Center Dr., Suite 200",
    "addressLocality": "Santa Ana",
    "addressRegion": "CA",
    "postalCode": "92703",
    "addressCountry": "US",
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Orange County, CA" },
    { "@type": "AdministrativeArea", "name": "San Bernardino County, CA" },
    { "@type": "AdministrativeArea", "name": "Riverside County, CA" },
    { "@type": "City", "name": "Santa Ana", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Anaheim", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Irvine", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Riverside", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "San Bernardino", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Ontario", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Garden Grove", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Fullerton", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Orange", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Corona", "addressRegion": "CA", "addressCountry": "US" },
    { "@type": "City", "name": "Fontana", "addressRegion": "CA", "addressCountry": "US" },
  ],
  "description":
    "California Care Coordinators is a Santa Ana-based Medi-Cal CalAIM provider delivering housing navigation, enhanced care management, and cash assistance vouchers to help qualifying members achieve and sustain stable housing.",
  "foundingDate": "2023",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+18885822282",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "English",
  },
  "potentialAction": {
    "@type": "ApplyAction",
    "name": "Apply for CalAIM Housing Support",
    "target": "https://joinccc.org/apply-now",
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "CalAIM Community Supports Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Housing Navigation",
          "description": "Dedicated case management for up to 12 months helping qualifying Medi-Cal members secure an approved residential lease.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Housing Deposit Voucher",
          "description": "Covers security deposit and first month's rent up to $5,000 for qualifying Medi-Cal members. Once-per-member-per-lifetime benefit.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tenancy Sustaining",
          "description": "Up to 12 months of continued case management support after housing is secured to help members maintain their tenancy.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cash Assistance Vouchers",
          "description": "Monthly cash assistance for up to 12 months for qualifying low-income Medi-Cal members based on MBSAC household income levels.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enhanced Care Management",
          "description": "A dedicated personal healthcare advocate coordinates appointments, referrals, and healthcare paperwork for qualifying Medi-Cal members for up to 12 months.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Apply for Free CalAIM Housing Support Through Medi-Cal",
  "description": "Apply for free housing navigation, up to $5,000 in move-in funds, and Enhanced Care Management as a qualifying Medi-Cal member in Southern California.",
  "totalTime": "PT5M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0",
  },
  "supply": [
    { "@type": "HowToSupply", "name": "Medi-Cal membership" },
    { "@type": "HowToSupply", "name": "IEHP ID number" },
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Apply Online",
      "text": "Fill out the online application in about five minutes. You'll need your name, contact info, IEHP ID, and a brief description of your current housing situation.",
      "url": "https://joinccc.org/apply-now",
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Eligibility Review",
      "text": "CCC reviews your application to confirm you qualify. Most applicants hear back within one to two business days.",
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Case Manager Assignment",
      "text": "If you qualify, a dedicated case manager is assigned to you. They become your single point of contact for housing, healthcare, and every enrolled service.",
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Housing Navigation",
      "text": "Your case manager works the housing search and handles coordination with landlords and housing authorities until you have an approved lease.",
    },
    {
      "@type": "HowToStep",
      "position": 5,
      "name": "Sustained Support",
      "text": "Once you're housed, support continues for up to 12 more months. Tenancy Sustaining keeps you connected to your case manager so your housing stays stable.",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://joinccc.org/#website",
  "name": "California Care Coordinators",
  "alternateName": "CCC",
  "url": "https://joinccc.org",
  "description": "California Care Coordinators provides qualifying Medi-Cal recipients with free housing navigation, Enhanced Care Management, and CalAIM Community Supports in Southern California.",
  "publisher": {
    "@type": "Organization",
    "@id": "https://joinccc.org/#organization",
  },
};

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "CalAIM Community Supports Services",
  "description": "Free housing and healthcare coordination services available to qualifying Medi-Cal members through California Care Coordinators in Southern California.",
  "url": "https://joinccc.org",
  "numberOfItems": 6,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Housing Navigation",
      "description": "Dedicated case management for up to 12 months helping qualifying Medi-Cal members experiencing homelessness or housing instability secure an approved residential lease.",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Housing Deposit Voucher",
      "description": "Covers security deposit and first month's rent up to $5,000 for qualifying Medi-Cal members. A once-per-member-per-lifetime benefit under CalAIM Community Supports.",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tenancy Sustaining",
      "description": "Up to 12 months of continued case management after housing is secured to help Medi-Cal members maintain stable long-term tenancy.",
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cash Assistance Vouchers",
      "description": "Monthly cash assistance for up to 12 months for qualifying low-income Medi-Cal members based on MBSAC household income levels.",
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "Enhanced Care Management",
      "description": "A dedicated personal healthcare advocate coordinates appointments, referrals, and healthcare paperwork for qualifying Medi-Cal members for up to 12 months.",
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "Day-Habilitation",
      "description": "In-person coaching for housed Medi-Cal members on financial planning, independent living skills, and administrative tasks. Coming soon.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }}
      />
      {/* ── Hero ── */}
      <section
        className="relative min-h-[600px] flex items-center"
        style={{ background: "linear-gradient(135deg, #23779B 0%, #1a5a75 60%, #1E2828 100%)" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline + Call CTA */}
            <div>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                CalAIM Community Supports Provider
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Free Housing, a Case Manager, and Move-In Funds. Through Medi-Cal.
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                Qualifying Medi-Cal members get a personal case manager, up to $5,000 in move-in costs, and monthly cash assistance at no cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8885822282"
                  className="flex items-center justify-center gap-3 bg-white text-[#23779B] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Us Now: (888) 582-2282
                </a>
                <Link
                  href="/apply-now"
                  className="flex items-center justify-center bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/10 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Right: Callback Form */}
            <div id="callback-form" className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto mt-8 lg:mt-0 border-t border-white/20 pt-8 lg:border-0 lg:pt-0">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="py-16 bg-[#F4F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">Results Since 2023</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most of these members had Medi-Cal for years before learning these services were included in their existing coverage.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#23779B] mb-2">{m.value}</div>
                <div className="text-sm text-gray-500 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">What&apos;s Covered</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six programs, one goal: get you into a stable home and keep you there.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-[#23779B] px-5 py-5 flex items-center gap-4">
                  <div className="text-white/90 shrink-0">{svc.icon}</div>
                  <h3 className="text-white font-bold text-base leading-snug flex items-center flex-wrap gap-2">
                    <span>{svc.title}</span>
                    {svc.comingSoon && (
                      <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-normal">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <style>{`
        @keyframes step-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.1); background: rgba(255,255,255,0.18); }
          50% { box-shadow: 0 0 28px 6px rgba(255,255,255,0.2); background: rgba(255,255,255,0.28); }
        }
        .step-active { animation: step-glow 2.8s ease-in-out infinite; }
      `}</style>
      <section className="py-16" style={{ background: "linear-gradient(135deg, #23779B 0%, #1a5a75 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Five steps from application to a signed lease. Most applicants hear back within one to two business days.
            </p>
          </div>

          {/* Progress track — desktop only */}
          <div className="hidden lg:flex items-center justify-center mb-6">
            {steps.map((s, i) => (
              <div key={s.step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${i === 0 ? "bg-white text-[#23779B] ring-4 ring-white/30" : "bg-white/20 text-white/60"}`}>
                  {s.step}
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 w-20 ${i === 0 ? "bg-white/60" : "bg-white/20"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => {
              const inner = (
                <>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 ${i === 0 ? "bg-white text-[#23779B]" : "bg-white/20 text-white"}`}>
                    {s.step}
                  </div>
                  {i === 0 && (
                    <span className="inline-block text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">You Are Here</span>
                  )}
                  <h3 className="text-white font-bold mb-2">{s.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{s.description}</p>
                </>
              );
              return i === 0 ? (
                <a
                  key={s.step}
                  href="#callback-form"
                  className={`step-active border border-white/30 rounded-2xl p-6 text-center block cursor-pointer${i === 4 ? " sm:col-start-1 sm:col-span-2 md:col-start-2 md:col-span-1 lg:col-start-auto lg:col-span-1" : ""}`}
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={s.step}
                  className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center${i === 4 ? " sm:col-start-1 sm:col-span-2 md:col-start-2 md:col-span-1 lg:col-start-auto lg:col-span-1" : ""}`}
                >
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <a
              href="#callback-form"
              className="inline-block bg-white text-[#23779B] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Check If I Qualify — It&apos;s Free
            </a>
          </div>
        </div>
      </section>

      {/* ── Why CCC ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-6">A Person, Not a Packet</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>Most housing programs pass you through a waiting list and hand you a packet. CCC assigns you a person.</p>
                <p>Your case manager handles the housing search, coordinates with local housing authorities, and manages the paperwork so you don&apos;t have to. If you qualify for the Housing Deposit Voucher, we&apos;ll cover your security deposit and first month&apos;s rent, up to $5,000. Monthly cash assistance is available for low-income members on top of that.</p>
                <p>We&apos;ve deployed over $1.7 million in voucher funds and helped 600 members sign a lease since 2023. All through your existing Medi-Cal benefits, at no cost to you.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#23779B] text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">3,000+</div>
                <div className="text-white/80 text-sm">Active Members</div>
              </div>
              <div className="bg-[#1E2828] text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">600+</div>
                <div className="text-white/80 text-sm">Members Housed</div>
              </div>
              <div className="bg-[#1E2828] text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">$1.7M+</div>
                <div className="text-white/80 text-sm">Vouchers Funded</div>
              </div>
              <div className="bg-[#23779B] text-white rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">60+</div>
                <div className="text-white/80 text-sm">Case Managers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-[#F4F8FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">Common Questions</h2>
            <p className="text-gray-600">Questions most people ask before they apply, answered plainly.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E2828] mb-3">Valued Partners</h2>
            <p className="text-gray-600">The vouchers, the funding, and the regional relationships that get members housed run through these organizations.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((p) => (
              <div key={p.alt} className="flex items-center justify-center p-4">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={140}
                  height={70}
                  className="h-14 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 bg-[#1E2828]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Application Takes Five Minutes
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            A case manager does the rest. If you have Medi-Cal and are facing housing instability, there is a good chance you already qualify. It costs you nothing to find out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/apply-now"
              className="bg-[#23779B] text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-[#1a5a75] transition-colors shadow-lg"
            >
              Apply Now
            </Link>
            <a
              href="tel:8885822282"
              className="flex items-center justify-center gap-2 bg-white text-[#1E2828] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (888) 582-2282
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
