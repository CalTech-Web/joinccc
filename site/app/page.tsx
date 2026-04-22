import Image from "next/image";
import Link from "next/link";
import CallbackForm from "@/components/CallbackForm";
import FAQAccordion from "@/components/FAQAccordion";

const services = [
  {
    title: "Housing Navigation",
    description:
      "Dedicated, comprehensive, and ongoing case management for qualified Medi-Cal members with the primary goal of securing an approved residential lease. Duration: 12 months.",
    image: "/products/housing-navigation.png",
    alt: "Housing Navigation",
  },
  {
    title: "Housing Deposit Voucher",
    description:
      "Covers initial move-in costs including security deposit and first month's rent, up to $5,000. A once-per-member-per-lifetime benefit. Terms and conditions apply.",
    image: "/products/housing-deposit-voucher.png",
    alt: "Housing Deposit Voucher",
  },
  {
    title: "Tenancy Sustaining",
    description:
      "Continued dedicated case management after housing is secured, focused on sustaining the established tenancy for the duration of the lease and beyond. Duration: 12 months.",
    image: "/products/tenancy-sustaining.png",
    alt: "Tenancy Sustaining",
  },
  {
    title: "Cash Assistance Vouchers",
    description:
      "Monthly cash assistance for qualifying members based on Minimum Basic Standard of Adequate Care household income levels. Duration: 12 months.",
    image: "/products/cash-assistance-vouchers.png",
    alt: "Cash Assistance Vouchers",
  },
  {
    title: "Enhanced Care Management",
    description:
      "CCC staff act as Personal Healthcare Assistants for qualified members, helping manage the ongoing administrative demands of their healthcare needs. Duration: 12 months.",
    image: "/products/enhanced-care-management.png",
    alt: "Enhanced Care Management",
  },
  {
    title: "Day-Habilitation",
    description:
      "Coming soon: In-person coaching by a specialized caregiver for housed members who qualify. Teaches social and administrative skills necessary for independent living.",
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
  { step: "1", title: "Apply", description: "Submit your application at joinccc.org/apply-now with your name, contact info, IEHP ID, and housing status details." },
  { step: "2", title: "Eligibility Review", description: "CCC reviews your application to confirm you meet CalAIM Community Supports eligibility, including homelessness risk and chronic condition factors." },
  { step: "3", title: "Case Manager Assignment", description: "A dedicated case manager is assigned to act as your personal advocate and coordinate all housing and healthcare services." },
  { step: "4", title: "Housing Navigation", description: "Your case manager actively works to secure an approved residential lease over a 12-month engagement." },
  { step: "5", title: "Sustained Support", description: "Once housed, Tenancy Sustaining services continue for up to 12 months to ensure stable long-term residency and independent living." },
];

const faqs = [
  {
    q: "Who qualifies for CCC's services?",
    a: "Qualifying individuals must be Medi-Cal recipients who are experiencing homelessness, at risk of homelessness, or recently institutionalized. Applicants must also have an IEHP ID number and may be asked about chronic physical or psychological conditions.",
  },
  {
    q: "How do I apply?",
    a: 'Applications are submitted online at joinccc.org/apply-now. You can also call (888) 582-2282 for assistance.',
  },
  {
    q: "What is the Housing Deposit Voucher and how much is it?",
    a: "The Housing Deposit Voucher covers initial move-in costs such as security deposit and first month's rent, up to $5,000. It is a once-per-member-per-lifetime benefit. Terms and conditions apply.",
  },
  {
    q: "How long do services last?",
    a: "Most services including Housing Navigation, Tenancy Sustaining, Cash Assistance Vouchers, and Enhanced Care Management run for 12-month terms. The Housing Deposit Voucher is a one-time benefit.",
  },
  {
    q: "What is CalAIM and how does it relate to CCC?",
    a: "CalAIM (California Advancing and Innovating Medi-Cal) is a statewide initiative by the California Department of Health Care Services that expands Medi-Cal to include Community Supports. CCC is an approved provider delivering these services to eligible members.",
  },
  {
    q: "Are CCC's services free to members?",
    a: "CCC's services are funded through Medi-Cal as CalAIM Community Supports. Qualifying members receive services at no direct cost. Contact CCC at (888) 582-2282 or apply@joinccc.org to confirm eligibility.",
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
                California Care Coordinators delivers housing navigation, Enhanced Care Management, and cash assistance vouchers to help qualifying Medi-Cal members achieve and sustain stable housing.
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
              Since 2023, CCC has helped thousands of Medi-Cal members find stable housing and quality care coordination.
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
              A full continuum of housing and care support, from navigation through deposit funding to tenancy sustainment.
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
              Getting started with CCC is simple. Here is what to expect from application to stable housing.
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
              <ul className="space-y-4">
                {[
                  "Certified CalAIM Community Supports provider under California's Medi-Cal transformation initiative",
                  "Full continuum of support from housing navigation through deposit funding to tenancy sustainment",
                  "Once-per-lifetime Housing Deposit Voucher up to $5,000 removes the biggest barrier to move-in",
                  "Personal Healthcare Assistant model through Enhanced Care Management, a dedicated friend and advocate",
                  "Cash assistance vouchers for qualifying low-income members based on MBSAC levels",
                  "Partnered with major housing authorities (HACSB, HARIVCO) and federal agencies (HUD)",
                  "600+ members successfully housed and $1.7M+ in vouchers funded since 2023",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex-shrink-0 w-5 h-5 bg-[#23779B] text-white rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
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
            <p className="text-gray-600">Get answers to common questions about our services and eligibility.</p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E2828] mb-3">Valued Partners</h2>
            <p className="text-gray-600">Working alongside trusted organizations to bring housing stability to our members.</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            If you are a Medi-Cal member experiencing homelessness or housing instability, CCC is here to help. Apply online or call us today, our services are available at no cost to qualifying members.
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
