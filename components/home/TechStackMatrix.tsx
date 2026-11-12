import React from "react";
import {
  Code,
  Smartphone,
  Database,
  Bot,
  Network,
  Cpu,
  Server,
  Layers,
} from "lucide-react";

export function TechStackMatrix() {
  const stackCategories = [
    {
      title: "Frontend & Web Architecture",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      items: [
        { name: "Next.js 16 (App Router)", detail: "Server Components & Edge Caching" },
        { name: "TypeScript", detail: "Strict type safety across domain models" },
        { name: "React 19", detail: "Concurrent features & Optimistic UI" },
        { name: "Tailwind CSS", detail: "Custom design tokens & responsive systems" },
      ],
    },
    {
      title: "Backend & Relational Data",
      icon: <Database className="w-5 h-5 text-sky-400" />,
      items: [
        { name: "PostgreSQL", detail: "Partitioned tables & transactional integrity" },
        { name: "Node.js & Python FastAPI", detail: "High-throughput asynchronous APIs" },
        { name: "Redis", detail: "In-memory caching & background task queues" },
        { name: "Docker", detail: "Containerized deployments & reproducibility" },
      ],
    },
    {
      title: "Mobile Application Stacks",
      icon: <Smartphone className="w-5 h-5 text-teal-400" />,
      items: [
        { name: "Flutter", detail: "Cross-platform 60fps native compilation" },
        { name: "React Native", detail: "Unified TypeScript mobile codebase" },
        { name: "Native Android & iOS", detail: "Swift / Kotlin for specialized device SDKs" },
        { name: "SQLite / Hive", detail: "Offline-first resilient local data storage" },
      ],
    },
    {
      title: "Network & IT Infrastructure",
      icon: <Network className="w-5 h-5 text-purple-400" />,
      items: [
        { name: "MikroTik & RouterOS", detail: "Multi-WAN failover & bandwidth shaping" },
        { name: "Ubiquiti UniFi", detail: "Commercial mesh Wi-Fi & roaming handoff" },
        { name: "Cisco & Fortinet", detail: "Hardware firewall rules & site-to-site VPNs" },
        { name: "Ubuntu / Linux Servers", detail: "Hardened OS installs, cron & systemd" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-950/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
            Proven Engineering Stacks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technologies We Genuinely Build With
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            We avoid novelty libraries that break next year. We specialize in modern, battle-tested technologies that deliver long-term maintainability, speed, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-colors space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800/80">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xs font-mono font-semibold text-slate-200">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

