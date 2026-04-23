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
      <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-[#1E2828] font-bold text-xl mb-2">We will call you soon!</h3>
        <p className="text-gray-500 text-sm">A care coordinator will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-[#23779B] px-6 py-4">
        <p className="text-white/80 text-sm font-medium uppercase tracking-wide">Free, No Obligation</p>
        <h3 className="text-white font-bold text-2xl">See If You Qualify</h3>
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
            Email Address
          </label>
          <input
            id="callback-email"
            name="email"
            type="email"
            required
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
          className="w-full bg-[#23779B] hover:bg-[#1d6485] text-white font-bold py-4 rounded-lg transition-colors disabled:opacity-60 text-base shadow-md"
        >
          {status === "sending" ? "Sending..." : "Check My Eligibility"}
        </button>
        <p className="text-center text-gray-400 text-xs">No cost, no commitment. We will call you back.</p>
      </form>
    </div>
  );
}
