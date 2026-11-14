"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { generalAgencyFAQs } from "@/lib/data/faq";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-[#050e0d] border-t border-[#16332d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0d221f] text-[#dae7de] border border-[#1e463e]">
            <HelpCircle className="w-3.5 h-3.5" />
            Transparent Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed max-w-xl mx-auto">
            Direct, plain-language answers regarding our pricing models, communication standards, intellectual property ownership, and technical workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {generalAgencyFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border transition-all shadow-md ${
                  isOpen
                    ? "bg-[#091a17] border-[#dae7de]/40 shadow-xl shadow-black/50"
                    : "bg-[#071412] border-[#183832] hover:border-[#2d584d]"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-[#dae7de] border-[#dae7de] text-[#071312] rotate-180"
                        : "bg-[#0e2622] border-[#1e463e] text-[#8ea79f]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b2c5bd] leading-relaxed border-t border-[#16332d] mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-[#8ea79f]">
            Have a specialized technical question not addressed above?{" "}
            <Link
              href="/contact"
              className="text-[#dae7de] hover:underline font-semibold underline underline-offset-4 ml-1"
            >
              Ask our engineering team directly
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
