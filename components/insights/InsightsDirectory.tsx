"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight } from "lucide-react";
import { articlesData, getArticleReadTime } from "@/lib/data/insights";

export function InsightsDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Business Systems",
    "AI & Automation",
    "Strategy & Growth",
    "Engineering",
  ];

  const filteredArticles = useMemo(() => {
    return articlesData.filter((art) => {
      if (selectedCategory !== "All" && art.category !== selectedCategory) {
        return false;
      }
      if (!searchTerm.trim()) return true;
      const q = searchTerm.toLowerCase();
      return (
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Search & Category Filter */}
      <div className="p-6 rounded-[24px] bg-brand-card border border-brand-border space-y-4 shadow-md shadow-brand-background/20">
        <div className="relative">
          <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by topic, keyword, or technology (e.g. ERP, AEO, Next.js, Automation)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-background border border-brand-border text-sm text-brand-text placeholder-brand-muted/60 focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-brand-border">
          {categories.map((c) => {
            const isSelected = selectedCategory === c;
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-brand-accent border-brand-accent  text-brand-background font-semibold"
                    : "bg-brand-background border-brand-border  text-brand-muted hover:text-brand-text hover:border-brand-border"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="p-12 text-center rounded-[24px] bg-brand-card border border-dashed border-brand-border">
          <p className="text-brand-muted text-sm">
            No articles found matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="text-xs font-mono text-brand-text hover:underline mt-2 inline-block"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-[24px] bg-brand-card border border-brand-border hover:border-brand-border transition-all p-6 sm:p-8 flex flex-col justify-between space-y-5 group shadow-md shadow-brand-background/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-brand-background  text-brand-text border border-brand-border">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    {article.publishDate && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-muted" />
                        <span>{article.publishDate}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-muted" />
                      <span>{getArticleReadTime(article)}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-text group-hover:text-brand-text transition-colors tracking-tight">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-background border border-brand-border  text-brand-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                {article.author && (
                  <span className="text-xs text-brand-muted font-mono">
                    By {article.author.name}
                  </span>
                )}
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-text group-hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
