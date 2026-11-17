"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
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
      const q = searchTerm.trim().toLowerCase();
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
            aria-label="Search articles by title, topic, or technology"
            placeholder="Search articles by title, topic, or technology..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="min-h-11 w-full rounded-xl border border-brand-border bg-brand-background py-2.5 pl-10 pr-4 text-sm text-brand-text placeholder-brand-muted/60 transition-colors focus:border-brand-accent focus:outline-none"
          />
        </div>

        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-brand-border"
        >
          {categories.map((c) => {
            const isSelected = selectedCategory === c;
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                aria-pressed={isSelected}
                className={`min-h-11 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
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
            className="mt-2 inline-flex min-h-11 items-center px-3 text-xs font-mono text-brand-text hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div aria-live="polite">
          <p className="mb-5 text-xs font-mono text-brand-muted">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}
          </p>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {filteredArticles.slice(0, 1).map((article) => (
              <article
                key={article.id}
                className="border-y border-brand-border py-7 sm:py-9 lg:col-span-7"
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-brand-muted">
                  <span className="text-brand-accent">{article.category}</span>
                  {article.publishDate && <span>{article.publishDate}</span>}
                  <span>{getArticleReadTime(article)}</span>
                </div>
                <h2 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-brand-text sm:text-3xl">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="transition-colors hover:text-brand-accent"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-secondary">
                  {article.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-brand-border px-2.5 py-1.5 text-[11px] font-mono text-brand-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-text"
                >
                  Read article
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}

            {filteredArticles.length > 1 && (
              <div className="divide-y divide-brand-border border-y border-brand-border lg:col-span-5">
                {filteredArticles.slice(1).map((article) => (
                  <article key={article.id} className="py-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono text-brand-muted">
                      <span className="text-brand-accent">{article.category}</span>
                      {article.publishDate && <span>{article.publishDate}</span>}
                      <span>{getArticleReadTime(article)}</span>
                    </div>
                    <h2 className="mt-2 text-base font-semibold leading-snug text-brand-text">
                      <Link
                        href={`/insights/${article.slug}`}
                        className="transition-colors hover:text-brand-accent"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-brand-secondary">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="mt-3 inline-flex min-h-10 items-center gap-2 text-xs font-semibold text-brand-accent hover:text-brand-text"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
