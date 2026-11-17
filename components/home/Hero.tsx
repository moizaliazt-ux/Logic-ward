"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/site-config";

type ArchitectureId = "systems" | "web" | "automation" | "infrastructure";

const architectureViews: {
  id: ArchitectureId;
  label: string;
  icon: LucideIcon;
  discipline: string;
  title: string;
  summary: string;
  nodes: [string, string, string];
  details: [string, string, string];
}[] = [
  {
    id: "systems",
    label: "Business systems",
    icon: Database,
    discipline: "Business systems",
    title: "Operational data, joined by design",
    summary:
      "Connect the records, permissions and workflows your teams rely on without forcing your operation into a generic template.",
    nodes: ["Teams", "Workflows", "Shared records"],
    details: ["PostgreSQL", "Role-based access", "Audit history"],
  },
  {
    id: "web",
    label: "Web & apps",
    icon: Code2,
    discipline: "Web & product engineering",
    title: "A useful product, from interface to API",
    summary:
      "Plan and build responsive digital products around clear user journeys, maintainable code and the right delivery model.",
    nodes: ["Experience", "Application", "Services"],
    details: ["Next.js", "TypeScript", "API integrations"],
  },
  {
    id: "automation",
    label: "Automation",
    icon: Bot,
    discipline: "AI & workflow automation",
    title: "Automate the repeatable. Keep people in control.",
    summary:
      "Use rules and AI where they improve a real process, with structured outputs and human review for decisions that need it.",
    nodes: ["Business event", "Validated steps", "Human review"],
    details: ["Workflow mapping", "Schema validation", "Review thresholds"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    icon: Network,
    discipline: "Cloud & IT infrastructure",
    title: "Infrastructure designed for dependable work",
    summary:
      "Bring networks, cloud services and operational support together with clear ownership and practical safeguards.",
    nodes: ["Network", "Security", "Operations"],
    details: ["Network planning", "Access controls", "Backup strategy"],
  },
];

export function Hero() {
  const whatsAppUrl = getWhatsAppUrl();
  const [activeId, setActiveId] = useState<ArchitectureId>("systems");
  const activeView =
    architectureViews.find((view) => view.id === activeId) ?? architectureViews[0];

  return (
    <section className="relative isolate overflow-hidden border-b border-brand-border bg-brand-background text-brand-text">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-24">
        <div className="space-y-8 lg:col-span-7">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-[0.14em] text-brand-secondary">
            <span className="h-px w-8 bg-brand-accent" />
            Software · digital products · business systems
          </div>

          <div className="max-w-3xl space-y-5">
            <h1 className="text-[clamp(2.8rem,5.2vw,5rem)] font-semibold leading-[1.03] tracking-[-0.055em]">
              Build smarter.
              <br />
              <span className="text-brand-accent">Move your business forward.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-brand-secondary sm:text-lg sm:leading-8">
              Logicward turns complex business needs into practical software,
              digital products and connected systems—planned around the way
              your organization works.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 text-sm font-semibold text-brand-background transition-colors hover:bg-brand-accent-hover"
            >
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-brand-border px-5 text-sm font-semibold text-brand-text transition-colors hover:border-brand-secondary hover:bg-brand-surface"
            >
              Explore our work
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-brand-border pt-5 text-xs text-brand-secondary">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              Documented scope & handover
            </span>
            <span className="inline-flex items-center gap-2">
              <Workflow className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              Reviewable project milestones
            </span>
            <span className="inline-flex items-center gap-2">
              <Network className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              Integration planned from the start
            </span>
          </div>

          {whatsAppUrl && (
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-brand-secondary transition-colors hover:text-brand-text"
            >
              Prefer a quick conversation?{" "}
              <span className="font-semibold text-brand-accent">WhatsApp us</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface shadow-md">
            <div className="flex items-center justify-between gap-4 border-b border-brand-border px-5 py-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-brand-muted">
                  Logicward / field notes 01
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-text">
                  A system shaped around your work
                </p>
              </div>
              <span className="hidden items-center gap-2 rounded-full border border-brand-border px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-brand-secondary sm:inline-flex">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                Architecture view
              </span>
            </div>

            <div
              className="grid grid-cols-2 border-b border-brand-border bg-brand-background/60 sm:grid-cols-4"
              role="group"
              aria-label="Explore engineering disciplines"
            >
              {architectureViews.map((view) => {
                const Icon = view.icon;
                const selected = view.id === activeId;

                return (
                  <button
                    key={view.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveId(view.id)}
                    className={`flex min-h-12 items-center justify-center gap-2 border-b-2 px-2 text-xs font-medium transition-colors ${
                      selected
                        ? "border-brand-accent bg-brand-surface text-brand-text"
                        : "border-transparent text-brand-muted hover:bg-brand-surface hover:text-brand-text"
                    }`}
                  >
                    <Icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                    <span>{view.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-6 p-5 sm:p-7" aria-live="polite">
              <div className="space-y-2">
                <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-brand-accent">
                  {activeView.discipline}
                </p>
                <h2 className="max-w-lg text-xl font-semibold leading-snug tracking-tight text-brand-text sm:text-2xl">
                  {activeView.title}
                </h2>
                <p className="max-w-lg text-sm leading-6 text-brand-secondary">
                  {activeView.summary}
                </p>
              </div>

              <div className="rounded-xl border border-brand-border bg-brand-background p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-brand-muted">
                    System flow
                  </span>
                  <span className="text-[10px] font-mono text-brand-secondary">
                    01 / 03
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 sm:gap-3">
                  {activeView.nodes.map((node, index) => (
                    <div className="contents" key={node}>
                      <div className="flex min-h-16 items-center justify-center rounded-lg border border-brand-border bg-brand-card px-2 text-center text-xs font-medium text-brand-text sm:px-3">
                        {node}
                      </div>
                      {index < activeView.nodes.length - 1 && (
                        <div
                          aria-hidden="true"
                          className="h-px w-3 bg-brand-accent sm:w-5"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeView.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-md border border-brand-border px-2.5 py-1.5 text-[11px] font-mono text-brand-secondary"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
