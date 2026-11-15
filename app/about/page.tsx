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
      title: "Clean Architecture Over Quick Hacks",
      description:
        "We build for longevity. Our databases are normalized, our code is typed, and our APIs are documented so systems scale smoothly as your transaction volume multiplies.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-muted" />,
      title: "Absolute Transparency & IP Transfer",
      description:
        "Ownership, source-code access, and handover terms are documented in the project agreement and follow its payment and acceptance milestones.",
    },
    {
      icon: <Target className="w-5 h-5 text-brand-text" />,
      title: "Business Value Above Technical Vanity",
      description:
        "Technology exists to solve operational friction, generate revenue, or reduce overhead. If a feature does not move a business metric, we advise against building it.",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-muted" />,
      title: "Predictable, Milestone-Driven Timelines",
      description:
        "Requirements, milestones, review cadence, and acceptance criteria are defined during scoping so progress and open decisions remain visible.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-brand-background  text-brand-text">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card  text-brand-text border border-brand-border">
              <Globe2 className="w-3.5 h-3.5 text-brand-muted" />
              <span>About {siteConfig.name}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              One Dedicated Technology Partner for Your Entire Digital Ecosystem.
            </h1>
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              We connect business objectives with practical software engineering. Logicward is based in Pakistan and is positioned to work with organizations in local and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Mission & Positioning */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-brand-muted leading-relaxed text-sm sm:text-base">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
              Our Founding Thesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-text tracking-tight leading-snug">
              Why We Built a Full-Spectrum Digital Agency
            </h2>
            <p>
              Growing organizations frequently struggle with fragmented vendor relationships. A marketing agency builds a website that lacks technical depth; a freelance developer delivers code without documentation; and local IT technicians configure office routers with zero security segmentation.
            </p>
            <p>
              <strong className="text-brand-text font-semibold">Logicward</strong> was established to unify these disciplines under one accountable engineering standard. From the physical network cables in your office to the cloud database running your ERP and the search strategy driving your leads—we design every component to work together seamlessly.
            </p>
            <p>
              We deliberately reject generic offshore clichés, unverified claims, and speculative hype. We focus strictly on clean code, predictable milestones, and measurable operational return.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[24px] bg-brand-card border border-brand-border p-8 space-y-6 shadow-md shadow-brand-background/20">
              <h3 className="text-lg font-bold text-brand-text tracking-tight">
                Global Delivery Model & Footprint
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-muted">
                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-brand-text" />
                    <span>Primary Operational Hub</span>
                  </div>
                  <p className="text-brand-muted">
                    Pakistan (Lahore / Karachi engineering teams with high-speed fiber backbones and redundant power backup).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-muted" />
                    <span>Time Zone Alignment</span>
                  </div>
                  <p className="text-brand-muted">
                    Active collaboration hours covering North American EST, European GMT, and Gulf Standard Time (GST).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-1">
                  <div className="text-brand-text font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-text" />
                    <span>Contractual & Legal Protections</span>
                  </div>
                  <p className="text-brand-muted">
                    Standard international bilateral NDAs, milestone escrow structures, and comprehensive IP transfer covenants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-20 bg-brand-background border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-bold text-brand-text tracking-tight">
              Our Engineering Ethos
            </h2>
            <p className="text-sm text-brand-muted">
              The non-negotiable principles that guide our technical decisions, code reviews, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-brand-card border border-brand-border hover:border-brand-border transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-background border border-brand-border flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-brand-text tracking-tight">{val.title}</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
