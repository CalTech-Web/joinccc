import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Apply Now | California Care Coordinators",
  description:
    "Apply for CalAIM Community Supports services including housing navigation, Enhanced Care Management, and cash assistance vouchers. Qualifying Medi-Cal members can apply online.",
};

export default function ApplyNowPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #23779B 0%, #1E2828 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Apply Now</h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl mx-auto">
            A CCC case manager will review your information and reach out within one to two business days. If your situation is urgent, call (888) 582-2282 directly.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-[#F4F8FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-[#1E2828] mb-2">Membership Application</h2>
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
                Medi-Cal recipients experiencing homelessness or at risk of homelessness
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Individuals recently institutionalized
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Members with chronic physical or psychological conditions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#23779B] font-bold mt-0.5">•</span>
                Low-income households eligible for cash assistance based on MBSAC levels
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
