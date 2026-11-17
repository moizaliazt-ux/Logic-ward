import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Globe2,
  Code2,
  Target,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "About Us — Engineering Approach & Principles",
  description:
    "Learn about Logicward's engineering principles, project delivery approach, and practical approach to software and digital systems.",
  alternates: {
    canonical: `${siteConfig.url}/company`,
  },
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Code2 className="w-5 h-5 text-brand-text" />,
      title: "Maintainable by intent",
      description:
        "Architecture, data structures, and documentation are considered against the requirements and maintenance needs in the agreed scope.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-muted" />,
      title: "Agreements before delivery",
      description:
        "Scope, ownership, acceptance, and handover terms belong in the written project agreement—not in assumptions made from marketing copy.",
    },
    {
      icon: <Target className="w-5 h-5 text-brand-text" />,
      title: "Business context before tooling",
      description:
        "Understand the current workflow and constraints before recommending a technical approach or adding complexity.",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-muted" />,
      title: "Clear expectations",
      description:
        "Schedule, review cadence, deliverables, and acceptance criteria are discussed and confirmed for each engagement.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-brand-background  text-brand-text">
      {/* Hero Header */}
      <section className="page-hero relative py-16 md:py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card  text-brand-text border border-brand-border">
              <Globe2 className="w-3.5 h-3.5 text-brand-muted" />
              <span>About {siteConfig.name}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              Software shaped around the way your business works.
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              Logicward focuses on software, digital products, and connected systems planned around real workflows and clearly scoped requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Mission & Positioning */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-brand-muted leading-relaxed text-sm sm:text-base">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
              Our focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight leading-snug">
              Make complex technology decisions easier to navigate
            </h2>
            <p>
              Organizations often work across multiple tools, manual processes, and separate sources of information. New software is useful only when it fits the people, systems, and constraints around the work.
            </p>
            <p>
              <strong className="text-brand-text font-semibold">Logicward</strong> brings software, digital product, and business-systems work into a clear project scope. The right disciplines and delivery approach depend on the needs confirmed during discovery.
            </p>
            <p>
              Our public examples are labeled, and we avoid presenting proposed capabilities as delivered outcomes. Commercial terms, timelines, and success measures are agreed for each engagement.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[24px] bg-brand-card border border-brand-border p-8 space-y-6 shadow-md shadow-brand-background/20">
              <h3 className="text-lg font-bold text-brand-text tracking-tight">
                How We Work Together
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-muted">
                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-brand-text" />
                    <span>Location and Context</span>
                  </div>
                  <p className="text-brand-muted">
                    Project location, working hours, and collaboration needs are confirmed during discovery.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-muted" />
                    <span>Project Rhythm</span>
                  </div>
                  <p className="text-brand-muted">
                    Review cadence, communication channels, and response expectations are agreed during scoping.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-text" />
                    <span>Clear Agreements</span>
                  </div>
                  <p className="text-brand-muted">
                    Scope, ownership, acceptance criteria, and payment milestones are recorded in the project agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-background border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
              Working principles
            </span>
            <h2 className="text-3xl font-bold text-brand-text tracking-tight">
              Our Engineering Ethos
            </h2>
            <p className="text-sm text-brand-muted">
              Practical standards for scoping decisions and communicating project boundaries.
            </p>
          </div>

          <div className="divide-y divide-brand-border border-y border-brand-border">
            {coreValues.map((val, idx) => (
              <article
                key={val.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 py-5 sm:grid-cols-[3rem_minmax(14rem,0.8fr)_2fr] sm:gap-6 sm:py-6"
              >
                <span className="pt-1 font-mono text-xs text-brand-muted">
                  0{idx + 1}
                </span>
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-brand-border bg-brand-card">
                    {val.icon}
                  </span>
                  <h3 className="pt-1 text-base font-semibold tracking-tight text-brand-text">
                    {val.title}
                  </h3>
                </div>
                <p className="col-start-2 text-sm leading-6 text-brand-secondary sm:col-start-auto">
                  {val.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
