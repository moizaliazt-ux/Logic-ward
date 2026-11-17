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
          const query = searchTerm.trim().toLowerCase();
          if (!query) return true;
          const categoryMatches =
            cat.title.toLowerCase().includes(query) ||
            cat.description.toLowerCase().includes(query);
          if (categoryMatches) return true;
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
              placeholder="Search by service, discipline, technology, or workflow..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="min-h-11 w-full rounded-xl border border-brand-border bg-brand-surface py-2.5 pl-10 pr-12 text-sm text-brand-text placeholder-brand-muted transition-colors focus:border-brand-accent focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                aria-label="Clear search input"
                className="absolute right-1.5 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center text-brand-muted hover:text-brand-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div
            aria-live="polite"
            className="text-xs text-brand-muted font-mono whitespace-nowrap self-start md:self-center"
          >
            <strong className="text-brand-text">{totalMatchingServices}</strong> service topics
            {" · "}
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
                aria-pressed={isActive}
                className={`min-h-11 px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
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
            className="min-h-11 px-4 py-2 rounded-lg text-xs font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} id={cat.id} className="space-y-6 scroll-mt-24">
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
                      <p className="text-xs text-brand-muted line-clamp-2">
                        {cat.shortSummary}
                      </p>
                  </div>
                </div>

                <Link
                  href={`/services/${cat.featuredSlug}`}
                  className="text-xs font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1 group flex-shrink-0"
                >
                  <span>Featured service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {cat.filteredServices.map((service, index) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group grid min-h-28 grid-cols-[2.5rem_1fr_auto] items-start gap-4 border-t border-brand-border py-5 transition-colors hover:bg-brand-card/60 sm:gap-5 sm:px-3"
                  >
                    <span className="pt-1 font-mono text-xs text-brand-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="space-y-2">
                      <span className="block text-base font-semibold leading-snug text-brand-text transition-colors group-hover:text-brand-accent">
                        {service.title}
                      </span>
                      <span className="block text-sm leading-relaxed text-brand-secondary">
                        {service.description}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 text-brand-muted transition-transform group-hover:translate-x-1 group-hover:text-brand-accent"
                    />
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
