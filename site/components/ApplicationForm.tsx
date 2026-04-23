"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  iehpId: string;
  housingStatus: string;
  chronicCondition: string;
  additionalInfo: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  iehpId: "",
  housingStatus: "",
  chronicCondition: "",
  additionalInfo: "",
};

export default function ApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          site: "joinccc.org",
          formType: "application",
          name: `${form.firstName} ${form.lastName}`,
          phone: form.phone,
          email: form.email,
          message: `Address: ${form.address}, ${form.city}, ${form.state} ${form.zip} | IEHP ID: ${form.iehpId} | Housing Status: ${form.housingStatus} | Chronic Condition: ${form.chronicCondition} | Additional Info: ${form.additionalInfo}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm(initialState);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#23779B] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#1E2828] mb-2">Application Submitted!</h3>
        <p className="text-gray-600 leading-relaxed">
          Thank you for applying. A CCC case manager will review your application and contact you within 1 to 2 business days. If you have urgent needs, please call us at{" "}
          <a href="tel:8885822282" className="text-[#23779B] font-semibold hover:underline">
            (888) 582-2282
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#23779B] focus:border-transparent text-sm text-[#1E2828]";
  const labelClass = "block text-sm font-medium text-[#1E2828] mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Info */}
      <div>
        <h3 className="font-semibold text-[#23779B] mb-4 pb-2 border-b border-gray-100">Personal Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className={labelClass}>First Name *</label>
            <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} placeholder="First name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>Last Name *</label>
            <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} placeholder="Last name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number *</label>
            <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(888) 000-0000" className={inputClass} />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email Address *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
          </div>
        </div>
      </div>

      {/* Address */}
      <div>
        <h3 className="font-semibold text-[#23779B] mb-4 pb-2 border-b border-gray-100">Current Address</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className={labelClass}>Street Address *</label>
            <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder="Street address" className={inputClass} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label htmlFor="city" className={labelClass}>City *</label>
              <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="City" className={inputClass} />
            </div>
            <div>
              <label htmlFor="state" className={labelClass}>State *</label>
              <input id="state" name="state" type="text" required value={form.state} onChange={handleChange} placeholder="State" className={inputClass} />
            </div>
            <div>
              <label htmlFor="zip" className={labelClass}>ZIP Code *</label>
              <input id="zip" name="zip" type="text" required value={form.zip} onChange={handleChange} placeholder="ZIP Code" className={inputClass} />
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility */}
      <div>
        <h3 className="font-semibold text-[#23779B] mb-4 pb-2 border-b border-gray-100">Eligibility Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="iehpId" className={labelClass}>IEHP ID Number *</label>
            <input id="iehpId" name="iehpId" type="text" required value={form.iehpId} onChange={handleChange} placeholder="Your IEHP member ID" className={inputClass} />
          </div>
          <div>
            <label htmlFor="housingStatus" className={labelClass}>Current Housing Status *</label>
            <select id="housingStatus" name="housingStatus" required value={form.housingStatus} onChange={handleChange} className={inputClass}>
              <option value="">Select your housing status</option>
              <option value="homeless">Currently experiencing homelessness</option>
              <option value="at-risk">At risk of homelessness</option>
              <option value="recently-institutionalized">Recently institutionalized</option>
              <option value="unstable">Unstable housing / staying with others</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="chronicCondition" className={labelClass}>Do you have a chronic physical or psychological condition?</label>
            <select id="chronicCondition" name="chronicCondition" value={form.chronicCondition} onChange={handleChange} className={inputClass}>
              <option value="">Please select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="additionalInfo" className={labelClass}>Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows={4}
              value={form.additionalInfo}
              onChange={handleChange}
              placeholder="Tell us more about your situation or any specific services you are interested in..."
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* HIPAA Notice */}
      <p className="text-xs text-gray-600 leading-relaxed">
        Your information is protected under HIPAA and the California Consumer Privacy Act (CCPA). CCC will never share your personal information without your consent. By submitting this form, you consent to be contacted by a CCC representative regarding your application.
      </p>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          There was an error submitting your application. Please try again or call us at (888) 582-2282.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#23779B] text-white font-bold py-4 rounded-full text-lg hover:bg-[#1a5a75] transition-colors disabled:opacity-60 shadow-md"
      >
        {status === "sending" ? "Submitting..." : "Submit My Free Application"}
      </button>
    </form>
  );
}
