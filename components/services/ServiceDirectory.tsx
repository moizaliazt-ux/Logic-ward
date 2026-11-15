"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  Code2,
  Bot,
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  PenTool,
  Filter,
  X,
} from "lucide-react";
import { serviceCategories } from "@/lib/data/services";

export function ServiceDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return [
      { id: "all", title: "All Disciplines" },
      ...serviceCategories.map((c) => ({ id: c.id, title: c.title })),
    ];
  }, []);

  const filteredCategories = useMemo(() => {
    return serviceCategories
      .filter((cat) => {
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return false;
        }
        return true;
      })
      .map((cat) => {
        const filteredServices = cat.services.filter((s) => {
          if (!searchTerm.trim()) return true;
          const query = searchTerm.toLowerCase();
          return (
            s.title.toLowerCase().includes(query) ||
            s.description.toLowerCase().includes(query)
          );
        });
        return {
          ...cat,
          filteredServices,
        };
      })
      .filter((cat) => cat.filteredServices.length > 0);
  }, [selectedCategory, searchTerm]);

  const totalMatchingServices = useMemo(() => {
    return filteredCategories.reduce(
      (acc, cat) => acc + cat.filteredServices.length,
      0
    );
  }, [filteredCategories]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "software-systems":
        return <Code2 className="w-5 h-5 text-brand-accent" />;
      case "ai-automation":
        return <Bot className="w-5 h-5 text-brand-accent" />;
      case "web-ecommerce":
        return <Globe className="w-5 h-5 text-brand-accent" />;
      case "mobile-development":
        return <Smartphone className="w-5 h-5 text-brand-accent" />;
      case "digital-marketing":
        return <TrendingUp className="w-5 h-5 text-brand-accent" />;
      case "it-infrastructure":
        return <Server className="w-5 h-5 text-brand-accent" />;
      case "content-creative":
        return <PenTool className="w-5 h-5 text-brand-accent" />;
      default:
        return <Code2 className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <div className="p-6 rounded-2xl bg-brand-card border border-brand-border space-y-5 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Accessible Live Search Input */}
          <div className="relative w-full md:flex-1">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              aria-label="Search across services directory"
              placeholder="Search across all 40+ services (e.g., ERP, Next.js, Flutter, SEO, Firewall)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-brand-surface border border-brand-border text-sm text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-accent transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear search input"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-muted hover:text-brand-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs text-brand-muted font-mono whitespace-nowrap self-start md:self-center">
            Showing <strong className="text-brand-text">{totalMatchingServices}</strong> services across{" "}
            <strong className="text-brand-text">{filteredCategories.length}</strong> disciplines
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-brand-border">
          <span className="text-xs text-brand-muted font-semibold uppercase tracking-wider flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5 text-brand-accent" />
            Discipline:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isActive
                    ? "bg-brand-background border-brand-border  text-brand-text font-semibold"
                    : "bg-brand-surface border-brand-border  text-brand-secondary hover:text-brand-text hover:border-brand-border"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Listing by Category */}
      {filteredCategories.length === 0 ? (
        <div className="p-12 rounded-2xl bg-brand-card border border-brand-border text-center space-y-4 shadow-sm">
          <p className="text-base text-brand-text font-semibold">
            No services matching &quot;{searchTerm}&quot; in the selected discipline.
          </p>
          <p className="text-xs text-brand-muted max-w-md mx-auto">
            Try adjusting your search keywords, or reset your filters to explore our full technology portfolio.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-6">
              {/* Category Group Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-brand-border gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center shadow-2xs">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-text">
                      {cat.title}
                    </h2>
                    <p className="text-xs text-brand-muted line-clamp-1">
                      {cat.shortSummary}
                    </p>
                  </div>
                </div>

                <Link
                  href={`/services/${cat.featuredSlug}`}
                  className="text-xs font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1 group flex-shrink-0"
                >
                  <span>Discipline Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Sub-Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.filteredServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-sm transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface  text-brand-accent border border-brand-border font-semibold">
                          SERVICE OVERVIEW
                        </span>
                        <span className="text-[11px] font-mono text-brand-muted">
                          Details
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-brand-text group-hover:text-brand-accent transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-brand-secondary leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs font-semibold text-brand-accent">
                      <span>Inspect Service Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
