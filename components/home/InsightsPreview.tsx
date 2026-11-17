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

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {articlesData.slice(0, 1).map((article) => (
            <article
              key={article.id}
              className="border-y border-brand-border py-7 sm:py-9 lg:col-span-7"
            >
              <div className="flex items-center gap-4 text-xs font-mono text-brand-muted">
                <span className="text-brand-accent">{article.category}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {getArticleReadTime(article)}
                </span>
              </div>
              <h3 className="mt-5 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-brand-text sm:text-3xl">
                <Link
                  href={`/insights/${article.slug}`}
                  className="transition-colors hover:text-brand-accent"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-brand-secondary">
                {article.excerpt}
              </p>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-text"
              >
                Read the article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}

          <div className="divide-y divide-brand-border border-y border-brand-border lg:col-span-5">
            {articlesData.slice(1, 4).map((article) => (
              <article key={article.id} className="py-5">
                <div className="flex items-center gap-3 text-[11px] font-mono text-brand-muted">
                  <span className="text-brand-accent">{article.category}</span>
                  <span>{getArticleReadTime(article)}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold leading-snug text-brand-text">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="transition-colors hover:text-brand-accent"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-brand-secondary">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
