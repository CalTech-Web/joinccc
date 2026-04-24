"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center border border-white/60">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <span className="absolute inset-0 rounded-full bg-[#23779B]/25 pulse-ring" aria-hidden="true"></span>
          <div className="relative w-16 h-16 bg-gradient-to-br from-[#23779B] to-[#1a5a75] rounded-full flex items-center justify-center shadow-lg shadow-[#23779B]/40">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-[#1E2828] font-bold text-xl mb-2">Request received.</h3>
        <p className="text-gray-500 text-sm leading-relaxed">A CCC care coordinator will call you within one to two business days. For urgent help, call <a href="tel:8885822282" className="text-[#23779B] font-semibold hover:underline">(888) 582-2282</a>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] overflow-hidden border border-white/60">
      <div className="relative bg-gradient-to-br from-[#23779B] via-[#1d6485] to-[#1a5a75] px-6 py-5 overflow-hidden">
        <div className="absolute inset-0 dot-grid-light opacity-50" aria-hidden="true" />
        <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#2FB5DB]/40 blur-2xl" aria-hidden="true" />
        <div className="relative flex items-center gap-2 mb-1">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#F5B642]">
            <svg className="w-3 h-3 text-[#1E2828]" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <p className="text-white/90 text-xs font-bold uppercase tracking-[0.18em]">Free, No Obligation</p>
        </div>
        <h3 className="relative text-white font-bold text-2xl">See If You Qualify</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label htmlFor="callback-name" className="block text-[#1E2828] text-sm mb-1 font-semibold">
            Your Name
          </label>
          <input
            id="callback-name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23779B] focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="callback-phone" className="block text-[#1E2828] text-sm mb-1 font-semibold">
            Phone Number
          </label>
          <input
            id="callback-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(888) 000-0000"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23779B] focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="callback-email" className="block text-[#1E2828] text-sm mb-1 font-semibold">
            Email Address <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            id="callback-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23779B] focus:border-transparent text-sm"
          />
        </div>
        <div>
          <label htmlFor="callback-message" className="block text-[#1E2828] text-sm mb-1 font-semibold">
            Message <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <textarea
            id="callback-message"
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#23779B] focus:border-transparent text-sm resize-none"
          />
        </div>
        {status === "error" && (
          <p className="text-red-600 text-sm">Something went wrong. Please call us at (888) 582-2282.</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#23779B] to-[#1a5a75] hover:-translate-y-0.5 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-60 disabled:translate-y-0 text-base shadow-[0_12px_30px_-10px_rgba(35,119,155,0.55)] hover:shadow-[0_16px_36px_-10px_rgba(35,119,155,0.7)]"
        >
          {status === "sending" ? "Sending..." : "Check My Eligibility"}
          {status !== "sending" && (
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          )}
        </button>
        <p className="text-center text-gray-400 text-xs">No cost, no commitment. We will call you back.</p>
      </form>
    </div>
  );
}
