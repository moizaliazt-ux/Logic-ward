"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Clock, Calendar, ArrowRight, Tag } from "lucide-react";
import { articlesData, Article } from "@/lib/data/insights";

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
      <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4 shadow-xl shadow-black/40">
        <div className="relative">
          <Search className="w-4 h-4 text-[#94a49a] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by topic, keyword, or technology (e.g. ERP, AEO, Next.js, Automation)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#091615] border border-[#1a342e] text-sm text-[#dae7de] placeholder-[#94a49a]/60 focus:outline-none focus:border-[#2d584d] transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-[#1a342e]">
          {categories.map((c) => {
            const isSelected = selectedCategory === c;
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-[#dae7de] border-[#dae7de] text-[#091615] font-semibold"
                    : "bg-[#091615] border-[#1a342e] text-[#94a49a] hover:text-[#dae7de] hover:border-[#2d584d]"
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
        <div className="p-12 text-center rounded-[24px] bg-[#0d1f1c] border border-dashed border-[#1a342e]">
          <p className="text-[#94a49a] text-sm">
            No articles found matching &quot;{searchTerm}&quot;.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="text-xs font-mono text-[#dae7de] hover:underline mt-2 inline-block"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] hover:border-[#2d584d] transition-all p-6 sm:p-8 flex flex-col justify-between space-y-5 group shadow-xl shadow-black/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#94a49a]">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#091615] text-[#dae7de] border border-[#1a342e]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[11px]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#94a49a]" />
                      <span>{article.publishDate}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#94a49a]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#dae7de] transition-colors tracking-tight">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#94a49a] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091615] border border-[#1a342e] text-[#94a49a]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a342e] flex items-center justify-between">
                <span className="text-xs text-[#94a49a] font-mono">
                  By {article.author.name}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#dae7de] group-hover:underline"
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
