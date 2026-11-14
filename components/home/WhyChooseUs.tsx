import React from "react";
import {
  FileCheck2,
  TerminalSquare,
  Sparkles,
  Users,
  Clock,
  Layers,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function WhyChooseUs() {
  const differentiators = [
    {
      icon: <FileCheck2 className="w-5 h-5 text-[#dae7de]" />,
      title: "No Vendor Lock-in: You Own the Code",
      description:
        "Every line of source code, database migration, architecture diagram, and deployment key is handed over completely. You are never trapped in a proprietary closed-source platform or agency retainer you cannot leave.",
    },
    {
      icon: <TerminalSquare className="w-5 h-5 text-[#8ea79f]" />,
      title: "Pragmatic Engineering Over Buzzwords",
      description:
        "We choose technology stacks based on operational reliability, maintenance economics, and speed—not hype. We will never recommend an over-engineered microservice or speculative AI bot when a clean relational database solves the problem.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#dae7de]" />,
      title: "Milestone-Driven Transparency",
      description:
        "Payments are tied directly to demonstrable milestones hosted on private staging URLs. You test real functionality before releasing subsequent sprint funds, with zero surprise hidden invoices.",
    },
    {
      icon: <Users className="w-5 h-5 text-[#8ea79f]" />,
      title: "Single Accountable Technology Partner",
      description:
        "Eliminate finger-pointing between separate marketing agencies, freelance developers, and network technicians. We integrate web development, custom software, SEO, and office IT under one cohesive architectural vision.",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#dae7de]" />,
      title: "Realistic Scoping Without Speculative Guarantees",
      description:
        "We refuse to make hollow promises like '#1 on Google' or '100% automated operations'. We provide data-backed feasibility studies and adhere to official search quality guidelines and software engineering best practices.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#8ea79f]" />,
      title: "Seamless Remote Delivery Across Time Zones",
      description:
        "Headquartered in Pakistan with active international clients in the USA, UK, Canada, and UAE. Our engineering rhythms overlap with global business hours, backed by async Slack/WhatsApp communication and weekly video reviews.",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative bg-[#071312]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#dae7de]">
            Transparent Differentiators
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why Ambitious Teams Choose Logicward
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
            We operate as an extension of your leadership team: rigorous engineering, clear business language, and predictable delivery standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-[#091a17] border border-[#1a3832] hover:border-[#2d584d] transition-all space-y-3 group shadow-xl"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#0e2622] border border-[#1e463e] flex items-center justify-center group-hover:border-[#dae7de]/40 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-[#dae7de] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#8ea79f] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Trust Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#061110] border border-[#183832] text-center flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="text-left space-y-0.5">
            <h4 className="text-sm font-semibold text-white">
              Want to review our technical agreements or standard NDA?
            </h4>
            <p className="text-xs text-[#8ea79f]">
              We provide formal IP assignment clauses and mutual non-disclosure agreements before project discovery.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full text-xs font-bold text-[#071312] bg-[#dae7de] hover:bg-[#eaf3ec] transition-colors flex-shrink-0"
          >
            Request Engagement Terms
          </Link>
        </div>
      </div>
    </section>
  );
}
