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
      icon: <Code className="w-5 h-5 text-[#dae7de]" />,
      items: [
        { name: "Next.js 16 (App Router)", detail: "Server Components & Edge Caching" },
        { name: "TypeScript", detail: "Strict type safety across domain models" },
        { name: "React 19", detail: "Concurrent features & Optimistic UI" },
        { name: "Tailwind CSS", detail: "Custom design tokens & responsive systems" },
      ],
    },
    {
      title: "Backend & Relational Data",
      icon: <Database className="w-5 h-5 text-[#8ea79f]" />,
      items: [
        { name: "PostgreSQL", detail: "Partitioned tables & transactional integrity" },
        { name: "Node.js & Python FastAPI", detail: "High-throughput asynchronous APIs" },
        { name: "Redis", detail: "In-memory caching & background task queues" },
        { name: "Docker", detail: "Containerized deployments & reproducibility" },
      ],
    },
    {
      title: "Mobile Application Stacks",
      icon: <Smartphone className="w-5 h-5 text-[#dae7de]" />,
      items: [
        { name: "Flutter", detail: "Cross-platform 60fps native compilation" },
        { name: "React Native", detail: "Unified TypeScript mobile codebase" },
        { name: "Native Android & iOS", detail: "Swift / Kotlin for specialized device SDKs" },
        { name: "SQLite / Hive", detail: "Offline-first resilient local data storage" },
      ],
    },
    {
      title: "Network & IT Infrastructure",
      icon: <Network className="w-5 h-5 text-[#8ea79f]" />,
      items: [
        { name: "MikroTik & RouterOS", detail: "Multi-WAN failover & bandwidth shaping" },
        { name: "Ubiquiti UniFi", detail: "Commercial mesh Wi-Fi & roaming handoff" },
        { name: "Cisco & Fortinet", detail: "Hardware firewall rules & site-to-site VPNs" },
        { name: "Ubuntu / Linux Servers", detail: "Hardened OS installs, cron & systemd" },
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#050e0d] border-t border-[#16332d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#dae7de]">
            Proven Engineering Stacks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technologies We Genuinely Build With
          </h2>
          <p className="text-sm sm:text-base text-[#b2c5bd] leading-relaxed">
            We avoid novelty libraries that break next year. We specialize in modern, battle-tested technologies that deliver long-term maintainability, speed, and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#091a17] border border-[#1a3832] hover:border-[#2d584d] transition-colors space-y-4 shadow-xl"
            >
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#16332d]">
                <div className="p-2.5 rounded-2xl bg-[#0e2622] border border-[#1e463e]">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-3">
                {cat.items.map((item, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xs font-mono font-semibold text-[#dae7de]">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-[#8ea79f] leading-relaxed">
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
