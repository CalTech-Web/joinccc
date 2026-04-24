import Image from "next/image";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

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
  { step: "1", title: "Apply", description: "Fill out a short form online. Takes about five minutes." },
  { step: "2", title: "We Review", description: "We check your application. Most people hear back in one to two days." },
  { step: "3", title: "Get a Case Manager", description: "If you qualify, we assign someone to help you every step of the way." },
  { step: "4", title: "Find Housing", description: "Your case manager handles the search and talks to landlords for you." },
  { step: "5", title: "Stay Stable", description: "After you move in, we stay with you for up to 12 more months." },
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
      <section className="hero-mesh grain relative overflow-hidden flex items-center min-h-[680px]">
        {/* Floating orbs */}
        <div className="orb animate-float-slow hidden sm:block" style={{ background: "#2FB5DB", width: 360, height: 360, top: -80, left: -60 }} aria-hidden="true" />
        <div className="orb animate-float-slow-alt hidden sm:block" style={{ background: "#6FC8DF", width: 280, height: 280, bottom: -60, right: 40, opacity: 0.28 }} aria-hidden="true" />
        {/* Watermark pattern: scattered tiny houses, keys, doors */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="hero-watermark" width="220" height="220" patternUnits="userSpaceOnUse" patternTransform="rotate(-6)">
              <g fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                {/* House */}
                <g transform="translate(22 40)">
                  <path d="M0 12 L12 0 L24 12 L24 24 L0 24 Z" />
                  <path d="M9 24 L9 16 L15 16 L15 24" />
                </g>
                {/* Key */}
                <g transform="translate(140 28) rotate(25)">
                  <circle cx="6" cy="6" r="5" />
                  <path d="M11 6 L28 6 M24 6 L24 11 M20 6 L20 10" />
                </g>
                {/* Door */}
                <g transform="translate(38 150)">
                  <path d="M0 20 L0 2 L14 2 L14 20" />
                  <circle cx="11" cy="12" r="0.9" fill="#ffffff" stroke="none" />
                </g>
                {/* Small house */}
                <g transform="translate(160 140) rotate(8)">
                  <path d="M0 10 L10 0 L20 10 L20 20 L0 20 Z" />
                  <path d="M7 20 L7 14 L13 14 L13 20" />
                </g>
                {/* Small key */}
                <g transform="translate(100 110) rotate(-15)">
                  <circle cx="5" cy="5" r="4" />
                  <path d="M9 5 L22 5 M19 5 L19 9 M16 5 L16 8" />
                </g>
                {/* Tiny house silhouette */}
                <g transform="translate(180 80) rotate(-10)">
                  <path d="M0 8 L8 0 L16 8 L16 16 L0 16 Z" />
                </g>
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-watermark)" />
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Headline + Call CTA */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 glass-strong text-white text-xs sm:text-sm font-semibold pl-2 pr-4 py-1.5 rounded-full mb-7">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                CalAIM Community Supports Provider
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.08] mb-6">
                Free Housing, a Case Manager, and{" "}
                <span className="text-gradient-white">Move-In Funds</span>{" "}
                Through Your <span className="whitespace-nowrap">Medi-Cal</span>.
              </h1>
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                For Medi-Cal members facing homelessness or housing instability. A dedicated case manager is assigned to you, every service is free, and the application takes five minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:8885822282"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#23779B] font-bold px-8 py-4 rounded-full text-base sm:text-lg shadow-[0_18px_45px_-12px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all whitespace-nowrap"
                >
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#23779B]/10">
                    <span className="absolute inset-0 rounded-full bg-[#23779B]/20 pulse-ring"></span>
                    <svg className="w-4 h-4 text-[#23779B]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  (888) 582-2282
                </a>
                <Link
                  href="/apply-now"
                  className="group inline-flex items-center justify-center gap-2 glass-strong text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-white/25 transition-all whitespace-nowrap"
                >
                  Start My Free Application
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-white/70 text-xs sm:text-sm">
                {[
                  { icon: "🛡️", text: "HIPAA Protected" },
                  { icon: "✓", text: "No Cost to You" },
                  { icon: "⏱", text: "Reply in 1-2 Business Days" },
                ].map((b) => (
                  <span key={b.text} className="inline-flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15 text-xs">
                      {b.icon}
                    </span>
                    {b.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Callback Form */}
            <div id="callback-form" className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0 lg:ml-auto mt-4 lg:mt-0 relative">
              {/* Decorative halo behind form */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#2FB5DB]/40 via-transparent to-[#F5B642]/30 blur-2xl opacity-70 pointer-events-none" aria-hidden="true" />
              <div className="relative">
                <CallbackForm />
              </div>
            </div>
          </div>
        </div>
        {/* Faint skyline silhouette sitting above the wave transition */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[5]" aria-hidden="true">
          <svg
            viewBox="0 0 1440 220"
            preserveAspectRatio="none"
            className="block w-full h-28 sm:h-36 md:h-44 opacity-[0.10]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A9DBE8" stopOpacity="0" />
                <stop offset="100%" stopColor="#A9DBE8" stopOpacity="1" />
              </linearGradient>
            </defs>
            <g fill="url(#skyline-fade)">
              {/* Back layer: distant low-rise skyline */}
              <path d="M0,220 L0,160 L40,160 L40,140 L90,140 L90,155 L140,155 L140,130 L180,130 L180,145 L230,145 L230,120 L280,120 L280,150 L330,150 L330,135 L380,135 L380,160 L430,160 L430,125 L480,125 L480,150 L530,150 L530,140 L590,140 L590,165 L640,165 L640,145 L700,145 L700,130 L760,130 L760,150 L820,150 L820,135 L880,135 L880,155 L940,155 L940,140 L1000,140 L1000,160 L1060,160 L1060,145 L1120,145 L1120,130 L1180,130 L1180,150 L1240,150 L1240,140 L1300,140 L1300,155 L1360,155 L1360,145 L1440,145 L1440,220 Z" />
            </g>
            <g fill="#A9DBE8" fillOpacity="0.95">
              {/* Front layer: taller mixed buildings */}
              <path d="M0,220 L0,180 L30,180 L30,170 L60,170 L60,110 L70,110 L70,100 L95,100 L95,110 L110,110 L110,160 L145,160 L145,145 L175,145 L175,95 L190,95 L190,85 L215,85 L215,95 L230,95 L230,155 L260,155 L260,170 L295,170 L295,150 L320,150 L320,130 L345,130 L345,90 L365,90 L365,80 L395,80 L395,90 L415,90 L415,140 L445,140 L445,165 L475,165 L475,150 L505,150 L505,120 L530,120 L530,100 L555,100 L555,120 L580,120 L580,160 L610,160 L610,175 L640,175 L640,155 L670,155 L670,130 L695,130 L695,100 L720,100 L720,110 L745,110 L745,95 L770,95 L770,85 L795,85 L795,75 L820,75 L820,85 L840,85 L840,140 L870,140 L870,160 L900,160 L900,145 L930,145 L930,170 L960,170 L960,140 L990,140 L990,105 L1015,105 L1015,95 L1045,95 L1045,105 L1065,105 L1065,135 L1090,135 L1090,160 L1120,160 L1120,145 L1150,145 L1150,175 L1180,175 L1180,150 L1210,150 L1210,120 L1240,120 L1240,95 L1265,95 L1265,85 L1295,85 L1295,95 L1315,95 L1315,135 L1345,135 L1345,160 L1375,160 L1375,150 L1410,150 L1410,170 L1440,170 L1440,220 Z" />
              {/* Water towers / rooftop details */}
              <rect x="72" y="90" width="8" height="10" />
              <rect x="74" y="82" width="4" height="8" />
              <rect x="195" y="75" width="6" height="10" />
              <rect x="196" y="68" width="4" height="7" />
              <rect x="370" y="70" width="6" height="10" />
              <rect x="371" y="62" width="4" height="8" />
              <rect x="802" y="65" width="6" height="10" />
              <rect x="803" y="58" width="4" height="7" />
              <rect x="1272" y="75" width="6" height="10" />
              <rect x="1273" y="67" width="4" height="8" />
              {/* Small antennae / spires */}
              <rect x="165" y="75" width="2" height="20" />
              <rect x="525" y="90" width="2" height="10" />
              <rect x="710" y="85" width="2" height="15" />
              <rect x="1030" y="85" width="2" height="10" />
              <rect x="1395" y="140" width="2" height="10" />
            </g>
          </svg>
        </div>
        {/* Wave transition into metrics section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block w-full h-10 sm:h-14 md:h-20" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,50 C240,10 480,80 720,40 C960,0 1200,70 1440,30 L1440,80 L0,80 Z" className="wave-fill-card" />
          </svg>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="relative py-20 bg-[#F4F8FC] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[300px] bg-gradient-to-b from-[#23779B]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-[#23779B] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 border border-[#23779B]/15 shadow-sm">
              By the Numbers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2828] mb-4">
              Results <span className="text-gradient-brand">Since 2023</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Most of these members had Medi-Cal for years before learning these services were included in their existing coverage.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 90}>
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-7 sm:p-8 text-center card-lift overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2FB5DB] via-[#23779B] to-[#1a5a75]" />
                  <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-[#23779B]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <AnimatedCounter value={m.value} className="block text-4xl sm:text-5xl font-bold text-gradient-brand mb-2" />
                  <div className="text-sm text-gray-500 font-medium leading-snug">{m.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#callback-form"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white font-bold px-8 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_12px_30px_-10px_rgba(35,119,155,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,119,155,0.7)]"
            >
              See If I Qualify, It&apos;s Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="absolute top-20 -left-40 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#23779B]/7 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 -right-40 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#F5B642]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#23779B]/10 text-[#23779B] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2828] mb-4">
              What&apos;s <span className="text-gradient-brand">Covered</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Six programs, one goal: get you into a stable home and keep you there.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={i * 80} className="h-full">
                <div className="group relative bg-white rounded-3xl border border-gray-100 card-lift h-full flex flex-col overflow-hidden">
                  {/* Thin decorative teal strip */}
                  <div className="relative h-20 bg-gradient-to-br from-[#23779B] via-[#1d6485] to-[#1a5a75] shrink-0 overflow-hidden">
                    <div className="absolute inset-0 dot-grid-light opacity-60" aria-hidden="true" />
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2FB5DB]/30 rounded-full blur-2xl" aria-hidden="true" />
                    {svc.comingSoon && (
                      <span className="absolute top-1/2 -translate-y-1/2 right-6 bg-white text-[#23779B] text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full shadow-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {/* Body with overlapping icon badge anchored to the boundary */}
                  <div className="relative flex-1 flex flex-col px-6 pt-14 pb-7">
                    <div className="absolute left-6 -top-8 w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#23779B] shadow-lg shadow-[#23779B]/20 ring-1 ring-[#23779B]/10 group-hover:scale-[1.04] transition-transform duration-300">
                      {svc.icon}
                    </div>
                    <h3 className="text-[#1E2828] font-bold text-lg mb-2 group-hover:text-[#23779B] transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white font-bold px-8 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_12px_30px_-10px_rgba(35,119,155,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,119,155,0.7)]"
            >
              Apply for Free, See What You Qualify For
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <style>{`
        @keyframes step-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.1); background: rgba(255,255,255,0.22); }
          50% { box-shadow: 0 0 36px 8px rgba(255,255,255,0.25); background: rgba(255,255,255,0.32); }
        }
        .step-active { animation: step-glow 2.8s ease-in-out infinite; }
      `}</style>
      <section className="relative py-20 sm:py-24 overflow-hidden hero-mesh grain">
        <div className="orb animate-float-slow hidden sm:block" style={{ background: "#2FB5DB", width: 280, height: 280, top: 40, right: -50, opacity: 0.4 }} aria-hidden="true" />
        <div className="orb animate-float-slow-alt hidden sm:block" style={{ background: "#F5B642", width: 240, height: 240, bottom: 20, left: -40, opacity: 0.28 }} aria-hidden="true" />
        <div className="absolute inset-0 dot-grid-light opacity-30 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block glass-strong text-white text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Five Steps to a <span className="text-gradient-white">Signed Lease</span>
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              From application to housed. Most applicants hear back within one to two business days.
            </p>
          </div>

          {/* Winding journey trail connecting steps 1 through 5 (desktop) */}
          <div className="relative">
            <div className="hidden lg:block absolute inset-x-0 top-12 h-20 pointer-events-none" aria-hidden="true">
              <svg viewBox="0 0 1280 120" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="trail-grad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#A9DBE8" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#A9DBE8" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                {/* Faint underlay for depth */}
                <path
                  d="M0,60 C30,30 90,30 120,60 C150,90 354,90 384,60 C414,30 618,30 648,60 C678,90 882,90 912,60 C942,30 1146,30 1176,60 C1200,75 1260,50 1280,60"
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.10"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Main dashed trail */}
                <path
                  d="M0,60 C30,30 90,30 120,60 C150,90 354,90 384,60 C414,30 618,30 648,60 C678,90 882,90 912,60 C942,30 1146,30 1176,60 C1200,75 1260,50 1280,60"
                  fill="none"
                  stroke="url(#trail-grad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="2 8"
                />
                {/* Route waypoint dots along the bumps */}
                <g fill="#ffffff" fillOpacity="0.55">
                  <circle cx="60" cy="38" r="1.8" />
                  <circle cx="252" cy="82" r="1.8" />
                  <circle cx="516" cy="38" r="1.8" />
                  <circle cx="780" cy="82" r="1.8" />
                  <circle cx="1044" cy="38" r="1.8" />
                  <circle cx="1220" cy="68" r="1.8" />
                </g>
                {/* Start pin at the beginning of the trail */}
                <g transform="translate(4, 46)" opacity="0.85">
                  <path d="M8 0 C3.6 0 0 3.6 0 8 c0 6 8 16 8 16 s8-10 8-16 C16 3.6 12.4 0 8 0 Z" fill="#ffffff" fillOpacity="0.22" />
                  <circle cx="8" cy="8" r="3" fill="#ffffff" fillOpacity="0.85" />
                </g>
                {/* House icon at the end of the trail */}
                <g transform="translate(1252, 46)" opacity="0.85">
                  <path d="M2,12 L12,2 L22,12 L22,22 L2,22 Z M9,22 L9,15 L15,15 L15,22" fill="none" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
                </g>
              </svg>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((s, i) => {
                const isFirst = i === 0;
                const isLast = i === steps.length - 1;
                const lastColClass = isLast ? " sm:col-start-1 sm:col-span-2 md:col-start-2 md:col-span-1 lg:col-start-auto lg:col-span-1" : "";
                const inner = (
                  <>
                    <div className="relative mx-auto mb-5 w-16 h-16">
                      {isFirst && (
                        <span className="absolute inset-0 rounded-full bg-white/40 pulse-ring" aria-hidden="true"></span>
                      )}
                      <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-xl ${isFirst ? "bg-white text-[#23779B]" : "bg-white/15 text-white border border-white/25 backdrop-blur-sm"}`}>
                        {s.step}
                      </div>
                    </div>
                    {isFirst && (
                      <span className="inline-block text-[#A9DBE8] text-[10px] font-bold uppercase tracking-[0.18em] mb-2">You Are Here</span>
                    )}
                    <h3 className="text-white font-bold mb-2 text-base">{s.title}</h3>
                    <p className="text-white/75 text-sm leading-relaxed">{s.description}</p>
                  </>
                );
                return isFirst ? (
                  <a
                    key={s.step}
                    href="#callback-form"
                    className={`step-active border border-white/30 rounded-2xl p-6 text-center block cursor-pointer transition-transform hover:-translate-y-1${lastColClass}`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={s.step}
                    className={`glass rounded-2xl p-6 text-center hover:bg-white/15 transition-colors${lastColClass}`}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#callback-form"
              className="inline-flex items-center gap-2 bg-white text-[#23779B] font-bold px-10 py-4 rounded-full text-base sm:text-lg shadow-[0_18px_45px_-12px_rgba(0,0,0,0.35)] hover:shadow-[0_22px_55px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all"
            >
              Check If I Qualify, It&apos;s Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── Why CCC ── */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#2FB5DB]/8 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-20 left-0 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#F5B642]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-[#23779B]/10 text-[#23779B] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
              Why California Care Coordinators
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2828] mb-4">
              A Person, <span className="text-gradient-brand">Not a Packet</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
              Most housing programs hand you a waiting list. CCC assigns you a case manager who works on your behalf until you have a signed lease.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: differentiators */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  title: "One person handles everything",
                  body: "Your case manager coordinates housing search, landlord outreach, housing authority paperwork, and every enrolled service. You have one number to call.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                    </svg>
                  ),
                },
                {
                  title: "Up to $5,000 in move-in funds",
                  body: "Qualifying members receive a Housing Deposit Voucher that covers the security deposit and first month's rent so a lack of cash never blocks a signed lease.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <rect x="2" y="6" width="20" height="13" rx="2"/><path d="M2 10h20M6 14h4"/>
                    </svg>
                  ),
                },
                {
                  title: "Completely free through Medi-Cal",
                  body: "Every service is funded under CalAIM. There are no fees, no co-pays, and no hidden costs. If you have Medi-Cal, you likely already have access.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M12 2l2.09 6.26L20 9.27l-4.91 4.73L16.18 20 12 17.27 7.82 20l1.09-6L4 9.27l5.91-.01L12 2z"/>
                    </svg>
                  ),
                },
                {
                  title: "Support continues after move-in",
                  body: "Once you are housed, your case manager stays on for up to 12 more months through Tenancy Sustaining, so your housing stays stable.",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 90}>
                  <div className="group relative flex gap-5 items-start bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 card-lift">
                    <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-[#2FB5DB] to-[#23779B] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#23779B]/25">
                      {item.icon}
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#F5B642] text-[#1E2828] text-[10px] font-bold flex items-center justify-center shadow">
                        {i + 1}
                      </span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-[#1E2828] mb-1 text-base sm:text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="#callback-form"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white font-bold px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_12px_30px_-10px_rgba(35,119,155,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,119,155,0.7)]"
                >
                  Check If I Qualify
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a
                  href="tel:8885822282"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#23779B] text-[#23779B] font-bold px-7 py-3.5 rounded-full hover:bg-[#23779B]/5 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  (888) 582-2282
                </a>
              </div>
            </div>
            {/* Right: stats */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5 lg:sticky lg:top-24">
              {[
                { value: "3,000+", label: "Active Members Served", variant: "primary" },
                { value: "600+", label: "Successfully Housed", variant: "dark" },
                { value: "$1.7M+", label: "Voucher Funds Deployed", variant: "dark" },
                { value: "60+", label: "Case Managers on Staff", variant: "primary" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} delay={i * 90}>
                  <div
                    className={`relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[170px] card-lift ${
                      stat.variant === "primary"
                        ? "bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white"
                        : "bg-gradient-to-br from-[#1E2828] to-[#0e1414] text-white"
                    }`}
                  >
                    <div className="absolute inset-0 dot-grid-light opacity-40 pointer-events-none" aria-hidden="true" />
                    <div className={`absolute -top-8 -right-8 w-28 h-28 rounded-full blur-2xl pointer-events-none ${stat.variant === "primary" ? "bg-[#2FB5DB]/40" : "bg-[#23779B]/30"}`} aria-hidden="true" />
                    <AnimatedCounter value={stat.value} className="relative text-4xl sm:text-5xl font-bold mb-2" />
                    <div className="relative text-white/75 text-xs sm:text-sm font-medium leading-snug uppercase tracking-wide">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="relative py-20 sm:py-24 bg-[#F4F8FC] overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[560px] h-[260px] bg-gradient-to-b from-[#23779B]/10 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-white text-[#23779B] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4 border border-[#23779B]/15 shadow-sm">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E2828] mb-4">
              Common <span className="text-gradient-brand">Questions</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">Questions most people ask before they apply, answered plainly.</p>
          </div>
          <FAQAccordion faqs={faqs} />
          <div className="mt-14 relative rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 text-center shadow-sm overflow-hidden">
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-[#2FB5DB]/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-[#F5B642]/15 to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white mb-4 shadow-lg shadow-[#23779B]/25">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z" />
                </svg>
              </div>
              <p className="text-[#1E2828] font-bold text-xl mb-2">Still have questions? Talk to someone.</p>
              <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">A CCC team member can walk you through your options before you apply.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#callback-form"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white font-bold px-8 py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-[0_12px_30px_-10px_rgba(35,119,155,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,119,155,0.7)]"
                >
                  Request a Callback
                </a>
                <Link
                  href="/apply-now"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#23779B] text-[#23779B] font-bold px-8 py-3.5 rounded-full hover:bg-[#23779B]/5 transition-colors"
                >
                  Apply Online Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#23779B]/10 text-[#23779B] text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-4">
              Partners & Funding
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">
              Trusted by HUD, CalAIM, and Regional{" "}
              <span className="text-gradient-brand">Housing Authorities</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              The vouchers, the funding, and the regional relationships that get members housed run through these organizations.
            </p>
          </div>
          {/* Marquee */}
          <div className="relative overflow-hidden py-6">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-14 animate-marquee w-max">
              {[...partners, ...partners].map((p, idx) => (
                <div key={`${p.alt}-${idx}`} className="flex items-center justify-center px-4 shrink-0" aria-hidden={idx >= partners.length ? "true" : undefined}>
                  <Image
                    src={p.image}
                    alt={idx >= partners.length ? "" : p.alt}
                    width={160}
                    height={80}
                    className="h-16 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative py-20 sm:py-24 overflow-hidden bg-[#0e1414]">
        <div className="absolute inset-0 hero-mesh opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 grain" aria-hidden="true" />
        {/* Topographic contour map layer */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <g fill="none" stroke="#A9DBE8" strokeWidth="1" strokeLinecap="round">
            {/* Peak cluster A — upper left */}
            <g transform="translate(320 220) rotate(-12)">
              <ellipse cx="0" cy="0" rx="40" ry="26" />
              <ellipse cx="6" cy="-4" rx="78" ry="50" />
              <ellipse cx="-6" cy="6" rx="120" ry="76" />
              <ellipse cx="10" cy="-8" rx="168" ry="104" />
              <ellipse cx="-12" cy="10" rx="220" ry="134" />
              <ellipse cx="14" cy="-14" rx="280" ry="168" />
              <ellipse cx="-16" cy="18" rx="346" ry="206" />
            </g>
            {/* Peak cluster B — lower right */}
            <g transform="translate(1140 400) rotate(18)">
              <ellipse cx="0" cy="0" rx="36" ry="24" />
              <ellipse cx="-6" cy="4" rx="72" ry="46" />
              <ellipse cx="8" cy="-4" rx="112" ry="70" />
              <ellipse cx="-10" cy="8" rx="156" ry="96" />
              <ellipse cx="12" cy="-10" rx="204" ry="124" />
              <ellipse cx="-14" cy="14" rx="256" ry="154" />
              <ellipse cx="16" cy="-16" rx="310" ry="184" />
            </g>
            {/* Secondary ridge — center top */}
            <g transform="translate(760 80) rotate(6)">
              <ellipse cx="0" cy="0" rx="60" ry="22" />
              <ellipse cx="-5" cy="4" rx="110" ry="38" />
              <ellipse cx="8" cy="-4" rx="168" ry="56" />
              <ellipse cx="-10" cy="6" rx="230" ry="76" />
            </g>
          </g>
        </svg>
        {/* Street-map grid layer */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern id="street-grid" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
              <path d="M0 0 L80 0 M0 40 L80 40 M0 0 L0 80 M40 0 L40 80" stroke="#A9DBE8" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#street-grid)" />
        </svg>
        <div className="orb animate-float-slow hidden sm:block" style={{ background: "#2FB5DB", width: 340, height: 340, top: -60, left: -40, opacity: 0.4 }} aria-hidden="true" />
        <div className="orb animate-float-slow-alt hidden sm:block" style={{ background: "#6FC8DF", width: 280, height: 280, bottom: -40, right: -40, opacity: 0.3 }} aria-hidden="true" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative glass-strong rounded-3xl p-10 sm:p-14 text-center overflow-hidden">
            <div className="relative">
              <span className="inline-block glass text-white text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full mb-5">
                Ready in Five Minutes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                The Application Takes{" "}
                <span className="text-gradient-white">Five Minutes.</span>
              </h2>
              <p className="text-white/85 text-base sm:text-lg mb-9 leading-relaxed max-w-2xl mx-auto">
                A case manager does the rest. If you have Medi-Cal and are facing housing instability, there is a good chance you already qualify. It costs you nothing to find out.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply-now"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#23779B] font-bold px-10 py-4 rounded-full text-base sm:text-lg shadow-[0_18px_45px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_22px_55px_-10px_rgba(0,0,0,0.7)] hover:-translate-y-0.5 transition-all"
                >
                  Apply Free in 5 Minutes
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:8885822282"
                  className="inline-flex items-center justify-center gap-3 glass-strong text-white font-bold px-10 py-4 rounded-full text-base sm:text-lg hover:bg-white/25 transition-all"
                >
                  <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/15">
                    <span className="absolute inset-0 rounded-full bg-white/20 pulse-ring"></span>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  (888) 582-2282
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
