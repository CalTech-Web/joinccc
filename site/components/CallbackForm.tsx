"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

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
          ...form,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">✓</div>
        <h3 className="text-white font-bold text-xl mb-2">We will call you soon!</h3>
        <p className="text-white/80 text-sm">A care coordinator will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-4"
    >
      <h3 className="text-white font-bold text-xl">Request a Callback</h3>
      <div>
        <label htmlFor="callback-name" className="block text-white/80 text-sm mb-1 font-medium">
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
          className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
      </div>
      <div>
        <label htmlFor="callback-phone" className="block text-white/80 text-sm mb-1 font-medium">
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
          className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm"
        />
      </div>
      <div>
        <label htmlFor="callback-message" className="block text-white/80 text-sm mb-1 font-medium">
          Message
        </label>
        <textarea
          id="callback-message"
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-lg bg-white/90 text-[#1E2828] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-300 text-sm">Something went wrong. Please call us directly at (888) 582-2282.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-white text-[#23779B] font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-60 text-sm"
      >
        {status === "sending" ? "Sending..." : "Request a Callback"}
      </button>
    </form>
  );
}
