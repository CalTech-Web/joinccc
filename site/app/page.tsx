import Image from "next/image";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    title: "Housing Navigation",
    description:
      "Your assigned case manager works the housing search for up to 12 months, coordinating with landlords and housing authorities on your behalf. One goal, an approved lease in your name.",
    image: "/products/housing-navigation.png",
    alt: "Housing Navigation",
  },
  {
    title: "Housing Deposit Voucher",
    description:
      "The deposit and first month's rent are often what stand between a qualified member and a signed lease. This voucher covers both, up to $5,000. Available once per member, per lifetime. Terms and conditions apply.",
    image: "/products/housing-deposit-voucher.png",
    alt: "Housing Deposit Voucher",
  },
  {
    title: "Tenancy Sustaining",
    description:
      "Getting housed is step one. Staying housed takes continued support. Your case manager stays on for up to 12 more months to help you maintain the tenancy you worked to secure.",
    image: "/products/tenancy-sustaining.png",
    alt: "Tenancy Sustaining",
  },
  {
    title: "Cash Assistance Vouchers",
    description:
      "Qualifying low-income members receive monthly cash payments based on MBSAC household income levels. Twelve months of additional financial support while you stabilize.",
    image: "/products/cash-assistance-vouchers.png",
    alt: "Cash Assistance Vouchers",
  },
  {
    title: "Enhanced Care Management",
    description:
      "Managing appointments, referrals, and healthcare paperwork is a job in itself. Your CCC care manager handles that coordination for you, acting as a dedicated advocate for up to 12 months.",
    image: "/products/enhanced-care-management.png",
    alt: "Enhanced Care Management",
  },
  {
    title: "Day-Habilitation",
    description:
      "In-person coaching for housed members who qualify. A specialized caregiver works with you on financial planning, agency correspondence, and the practical skills independent living requires. Coming soon.",
    image: "/products/day-habilitation.png",
    alt: "Day-Habilitation",
    comingSoon: true,
  },
];

const metrics = [
  { image: "/gallery/metric-3000-active-members.png", alt: "3,000+ Active Members Served", label: "Active Members Served", value: "3,000+" },
  { image: "/gallery/metric-60-case-managers.png", alt: "60+ Case Managers", label: "Case Managers on Staff", value: "60+" },
  { image: "/gallery/metric-600-members-housed.png", alt: "600+ Members Housed", label: "Members Successfully Housed", value: "600+" },
  { image: "/gallery/metric-1.7m-vouchers.png", alt: "$1.7M+ in Vouchers", label: "Total Vouchers Funded", value: "$1.7M+" },
];

const partners = [
  { image: "/gallery/partner-1-unitedway-fullres.png", alt: "United Way" },
  { image: "/gallery/partner-2-hacsb-fullres.png", alt: "HACSB" },
  { image: "/gallery/partner-3-harivco-fullres.png", alt: "HARIVCO" },
  { image: "/gallery/partner-4-hud-fullres.png", alt: "HUD" },
  { image: "/gallery/partner-5-calaim-fullres.png", alt: "CalAIM" },
];

const steps = [
  { step: "1", title: "Apply", description: "Fill out the online application in about five minutes. You'll need your name, contact info, IEHP ID, and a brief description of your current housing situation." },
  { step: "2", title: "Eligibility Review", description: "CCC reviews your application against CalAIM eligibility criteria. Most applicants hear back within one to two business days." },
  { step: "3", title: "Case Manager Assignment", description: "If you qualify, a dedicated case manager is assigned to your case. They become your single point of contact for housing, healthcare, and every enrolled service." },
  { step: "4", title: "Housing Navigation", description: "Your case manager works the housing search and handles coordination with landlords and housing authorities on your behalf, working toward an approved residential lease." },
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
    q: "Are CCC's services free to members?",
    a: "Yes. CCC's services are funded through Medi-Cal under the CalAIM program. There is no cost to qualifying members. To confirm your eligibility, call (888) 582-2282 or email apply@joinccc.org.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center"
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
                Housing Support &amp; Care Coordination for Medi-Cal Members
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8">
                You may already qualify for a personal case manager, up to $5,000 in move-in costs, and monthly cash assistance, all through your existing Medi-Cal benefits. California Care Coordinators connects eligible members to these CalAIM housing supports at no cost.
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
            <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="py-16 bg-[#F4F8FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              600 people have signed a lease through CCC since 2023. Another 3,000 are working toward one right now, each with a dedicated case manager.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center">
                <Image
                  src={m.image}
                  alt={m.alt}
                  width={120}
                  height={120}
                  className="w-24 h-24 object-contain mb-4"
                />
                <div className="text-3xl font-bold text-[#23779B] mb-1">{m.value}</div>
                <div className="text-sm text-gray-600 font-medium">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">Provider Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Six programs, one goal: get you into a stable home and keep you there.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.title} className="bg-[#F4F8FC] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src={svc.image}
                    alt={svc.alt}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#23779B] px-4 py-2">
                    <h3 className="text-white font-bold text-base">
                      {svc.title}
                      {svc.comingSoon && (
                        <span className="ml-2 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-normal">
                          Coming Soon
                        </span>
                      )}
                    </h3>
                  </div>
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
      <section className="py-16" style={{ background: "linear-gradient(135deg, #23779B 0%, #1a5a75 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">How It Works</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Five steps from application to a signed lease. Most applicants hear back within one to two business days.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-white text-[#23779B] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/apply-now"
              className="inline-block bg-white text-[#23779B] font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why CCC ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-6">Why Choose California Care Coordinators?</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2828] mb-3">Frequently Asked Questions</h2>
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
            <p className="text-gray-600">CCC coordinates with housing authorities and federal agencies that have real power to open doors for members.</p>
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
