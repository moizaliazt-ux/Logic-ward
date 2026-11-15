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
    <section className="py-20 md:py-28 bg-brand-surface border-b border-brand-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold uppercase tracking-wider bg-brand-card text-brand-accent border border-brand-border">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            TRANSPARENT ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed max-w-xl mx-auto">
            Direct, plain-language answers regarding our milestone models, communication standards, intellectual property ownership, and technical workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {generalAgencyFAQs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "bg-brand-card border-brand-accent shadow-sm"
                    : "bg-brand-card border-brand-border hover:border-brand-border"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-brand-text">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-all flex-shrink-0 ${
                      isOpen
                        ? "bg-brand-accent border-brand-accent  text-brand-background rotate-180"
                        : "bg-brand-surface border-brand-border  text-brand-muted"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-secondary leading-relaxed border-t border-brand-border">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-brand-card border border-brand-border text-center space-y-2">
          <p className="text-sm font-semibold text-brand-text">
            Have a technical question not covered in our FAQ?
          </p>
          <p className="text-xs text-brand-muted">
            Our engineering leads are available to discuss your architectural constraints directly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5"
            >
              <span>Contact Our Engineering Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
