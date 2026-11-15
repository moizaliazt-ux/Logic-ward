import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articlesData, getArticleReadTime } from "@/lib/data/insights";

export function InsightsPreview() {
  return (
    <section className="py-20 md:py-28 bg-brand-surface border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
              ENGINEERING PERSPECTIVES & ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text tracking-tight">
              Technical Insights & Knowledge Base
            </h2>
            <p className="text-sm sm:text-base text-brand-secondary leading-relaxed">
              Explore practical articles, decision frameworks, and architectural guides for founders, CTOs, and digital leaders.
            </p>
          </div>

          <Link
            href="/insights"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent inline-flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore all articles & essays</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Articles Grid (PRD § 5.12) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={`/insights/${article.slug}`}
              className="p-7 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-sm transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-muted font-mono">
                  <span className="px-2.5 py-0.5 rounded bg-brand-surface  text-brand-accent border border-brand-border font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{getArticleReadTime(article)}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between text-xs font-semibold text-brand-accent">
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
