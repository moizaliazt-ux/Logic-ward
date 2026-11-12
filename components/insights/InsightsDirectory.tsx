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
      <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search articles by topic, keyword, or technology (e.g. ERP, AEO, Next.js, Automation)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-800/80">
          {categories.map((c) => {
            const isSelected = selectedCategory === c;
            return (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border ${
                  isSelected
                    ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-300"
                    : "bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200"
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
        <div className="p-12 text-center rounded-2xl bg-slate-950/40 border border-dashed border-slate-800">
          <p className="text-slate-400 text-sm">
            No articles found matching "{searchTerm}".
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("All");
            }}
            className="text-xs font-semibold text-cyan-400 hover:underline mt-2 inline-block"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 transition-all p-6 sm:p-8 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-950 border border-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono">
                  By {article.author.role.split(",")[0]}
                </span>
                <Link
                  href={`/insights/${article.slug}`}
                  className="font-semibold text-cyan-400 group-hover:text-cyan-300 inline-flex items-center gap-1"
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

