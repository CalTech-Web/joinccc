"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.q}
            className={`group relative bg-white rounded-2xl overflow-hidden border transition-all ${
              isOpen
                ? "border-[#23779B]/30 shadow-[0_18px_40px_-20px_rgba(35,119,155,0.4)]"
                : "border-gray-100 shadow-sm hover:border-[#23779B]/25 hover:shadow-md"
            }`}
          >
            <div
              className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2FB5DB] to-[#23779B] transition-opacity ${
                isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-60"
              }`}
              aria-hidden="true"
            />
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              aria-expanded={isOpen}
            >
              <span
                className={`font-bold text-base sm:text-[17px] transition-colors ${
                  isOpen ? "text-[#23779B]" : "text-[#1E2828] group-hover:text-[#23779B]"
                }`}
              >
                {faq.q}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-br from-[#23779B] to-[#1a5a75] text-white rotate-180 shadow-md shadow-[#23779B]/30"
                    : "bg-[#F4F8FC] text-[#23779B] group-hover:bg-[#23779B]/10"
                }`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6">
                  <div className="h-px bg-gradient-to-r from-[#23779B]/20 via-gray-100 to-transparent mb-4" />
                  <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
