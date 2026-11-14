import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Globe2,
  Users2,
  Code2,
  Cpu,
  Target,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const metadata: Metadata = {
  title: "About Us — Engineering Standards, Mission & Global Delivery",
  description:
    "Learn about Logicward: our engineering principles, mission, delivery standards, and how we serve ambitious clients across Pakistan and international markets.",
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Code2 className="w-5 h-5 text-[#dae7de]" />,
      title: "Clean Architecture Over Quick Hacks",
      description:
        "We build for longevity. Our databases are normalized, our code is typed, and our APIs are documented so systems scale smoothly as your transaction volume multiplies.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#94a49a]" />,
      title: "Absolute Transparency & IP Transfer",
      description:
        "We do not hold code hostage. You retain 100% intellectual property rights, source code ownership, and administrative credentials from day one of deployment.",
    },
    {
      icon: <Target className="w-5 h-5 text-[#dae7de]" />,
      title: "Business Value Above Technical Vanity",
      description:
        "Technology exists to solve operational friction, generate revenue, or reduce overhead. If a feature does not move a business metric, we advise against building it.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#94a49a]" />,
      title: "Predictable, Milestone-Driven Timelines",
      description:
        "We scope thoroughly before kickoff. Bi-weekly sprints, interactive staging builds, and clear acceptance criteria protect you from budget inflation.",
    },
  ];

  const teamRoles = [
    {
      role: "Lead Systems Architect & Managing Director",
      department: "Executive Leadership & Architecture",
      placeholderTag: "[Executive Leadership Placeholder]",
      responsibilities:
        "Directs technical architecture, multi-tenant database design, enterprise client scoping, and overall quality governance.",
    },
    {
      role: "Head of Engineering (Web & Custom Software)",
      department: "Full-Stack Development",
      placeholderTag: "[Lead Full-Stack Engineer Placeholder]",
      responsibilities:
        "Leads Next.js, Node.js, and PostgreSQL backend microservice engineering, CI/CD pipelines, and performance optimization.",
    },
    {
      role: "Principal Mobile Applications Lead",
      department: "iOS & Android Engineering",
      placeholderTag: "[Mobile Practice Lead Placeholder]",
      responsibilities:
        "Supervises cross-platform Flutter and React Native application development, offline-first architectures, and App Store releases.",
    },
    {
      role: "AI & Automation Practice Lead",
      department: "Intelligent Workflows",
      placeholderTag: "[AI Engineer Placeholder]",
      responsibilities:
        "Designs deterministic LLM extraction pipelines, webhook orchestrations, and human-in-the-loop review safeguards.",
    },
    {
      role: "Director of Digital Strategy & AEO",
      department: "Growth & Search Engineering",
      placeholderTag: "[Growth Strategist Placeholder]",
      responsibilities:
        "Oversees technical SEO, Answer Engine Optimization (AEO), schema graph architectures, and conversion analytics.",
    },
    {
      role: "Network & IT Infrastructure Engineer",
      department: "Infrastructure & Security",
      placeholderTag: "[Network Specialist Placeholder]",
      responsibilities:
        "Deploys enterprise MikroTik, Cisco, and UniFi networks, VLAN segmentation, and automated cloud backup protocols.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      {/* Hero Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <Globe2 className="w-3.5 h-3.5 text-[#94a49a]" />
              <span>About {siteConfig.name}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              One Dedicated Technology Partner for Your Entire Digital Ecosystem.
            </h1>
            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              We bridge the gap between business objectives and modern software engineering. Based in Pakistan and collaborating with clients across North America, Europe, the Middle East, and worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Mission & Positioning */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-[#94a49a] leading-relaxed text-sm sm:text-base">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
              Our Founding Thesis
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              Why We Built a Full-Spectrum Digital Agency
            </h2>
            <p>
              Growing organizations frequently struggle with fragmented vendor relationships. A marketing agency builds a website that lacks technical depth; a freelance developer delivers code without documentation; and local IT technicians configure office routers with zero security segmentation.
            </p>
            <p>
              <strong className="text-white font-semibold">Logicward</strong> was established to unify these disciplines under one accountable engineering standard. From the physical network cables in your office to the cloud database running your ERP and the search strategy driving your leads—we design every component to work together seamlessly.
            </p>
            <p>
              We deliberately reject generic offshore clichés, unverified claims, and speculative hype. We focus strictly on clean code, predictable milestones, and measurable operational return.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] p-8 space-y-6 shadow-xl shadow-black/40">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Global Delivery Model & Footprint
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#94a49a]">
                <div className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                  <div className="text-[#dae7de] font-semibold flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-[#dae7de]" />
                    <span>Primary Operational Hub</span>
                  </div>
                  <p className="text-[#94a49a]">
                    Pakistan (Lahore / Karachi engineering teams with high-speed fiber backbones and redundant power backup).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                  <div className="text-[#dae7de] font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#94a49a]" />
                    <span>Time Zone Alignment</span>
                  </div>
                  <p className="text-[#94a49a]">
                    Active collaboration hours covering North American EST, European GMT, and Gulf Standard Time (GST).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] space-y-1">
                  <div className="text-[#dae7de] font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#dae7de]" />
                    <span>Contractual & Legal Protections</span>
                  </div>
                  <p className="text-[#94a49a]">
                    Standard international bilateral NDAs, milestone escrow structures, and comprehensive IP transfer covenants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-20 bg-[#091615] border-y border-[#1a342e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Our Engineering Ethos
            </h2>
            <p className="text-sm text-[#94a49a]">
              The non-negotiable principles that guide our technical decisions, code reviews, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0d1f1c] border border-[#1a342e] hover:border-[#2d584d] transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#091615] border border-[#1a342e] flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">{val.title}</h3>
                <p className="text-xs sm:text-sm text-[#94a49a] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Structure & Leadership (Labeled Placeholders per brief) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="team">
        <div className="max-w-3xl space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
            Organizational Structure
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Key Practice Areas & Leadership Roles
          </h2>
          <p className="text-sm text-[#94a49a] leading-relaxed">
            Our engineering team is structured into specialized functional practices, ensuring deep domain expertise across each service division.
          </p>
        </div>

        {/* Team Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#0d1f1c] border border-[#1a342e] hover:border-[#2d584d] transition-all space-y-4"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#091615] text-[#dae7de] border border-[#1a342e]">
                  {role.department}
                </span>
                <h3 className="text-sm font-bold text-white pt-2 tracking-tight">
                  {role.role}
                </h3>
                <div className="text-[11px] font-mono text-[#94a49a]">
                  {role.placeholderTag}
                </div>
              </div>

              <p className="text-xs text-[#94a49a] leading-relaxed border-t border-[#1a342e] pt-3">
                {role.responsibilities}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-[#0d1f1c]/80 border border-dashed border-[#1a342e] text-center text-xs text-[#94a49a] max-w-3xl mx-auto">
          [Team Notice: Specific officer names, LinkedIn profiles, and verified professional biographies are configured in agency onboarding documentation before client contract execution.]
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
