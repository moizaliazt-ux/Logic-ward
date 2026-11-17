import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ChevronRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  getArticleBySlug,
  getArticleReadTime,
  getRelatedArticles,
  articlesData,
} from "@/lib/data/insights";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export const instant = false;

export async function generateStaticParams() {
  return articlesData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} — Technical Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `${siteConfig.url}/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: `${siteConfig.url}/insights/${article.slug}`,
      siteName: siteConfig.name,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article);
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Insights", url: `${siteConfig.url}/insights` },
    { name: article.title, url: `${siteConfig.url}/insights/${article.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/insights/${article.slug}`,
    },
  };

  return (
    <div className="flex flex-col w-full bg-brand-background  text-brand-text">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header */}
      <section className="page-hero relative py-14 md:py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-brand-muted mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-brand-text transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <Link href="/insights" className="hover:text-brand-text transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-text font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-brand-card  text-brand-text border border-brand-border">
                {article.category}
              </span>
              {article.publishDate && (
                <span className="text-xs font-mono text-brand-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{article.publishDate}</span>
                </span>
              )}
              <span className="text-xs font-mono text-brand-muted flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{getArticleReadTime(article)}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-muted leading-relaxed">
              {article.excerpt}
            </p>

          </div>
        </div>
      </section>

      <nav
        aria-label="Article sections"
        className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:hidden"
      >
        <details className="rounded-xl border border-brand-border bg-brand-card">
          <summary className="flex min-h-12 cursor-pointer items-center gap-2 px-4 text-sm font-semibold text-brand-text">
            <BookOpen className="h-4 w-4 text-brand-accent" aria-hidden="true" />
            On this page
          </summary>
          <ul className="space-y-2 border-t border-brand-border px-4 py-4 text-sm">
            {article.tableOfContents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block py-1 text-brand-secondary transition-colors hover:text-brand-accent"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </nav>

      {/* Main Content Layout */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Article Body */}
          <article className="space-y-10 lg:col-span-8 lg:pr-8">
            <div className="max-w-[72ch] border-l-2 border-brand-accent py-1 pl-4">
              <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
                <Sparkles className="w-3.5 h-3.5" />
                In brief
              </span>
              <p className="mt-2 text-sm leading-6 text-brand-secondary">{article.excerpt}</p>
            </div>

            {/* Structured Sections */}
            <div className="max-w-[72ch] space-y-12 text-base leading-7 text-brand-secondary">
              {article.contentSections.map((sec) => (
                <div key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight text-brand-text sm:text-3xl">
                    {sec.heading}
                  </h2>
                  <div className="space-y-5 text-brand-secondary">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  {sec.callout && (
                    <aside className="mt-5 space-y-2 border-t border-brand-border pt-4">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-brand-text">
                        {sec.callout.title}
                      </div>
                      <p className="text-sm leading-6 text-brand-secondary">
                        {sec.callout.body}
                      </p>
                    </aside>
                  )}
                </div>
              ))}
            </div>

          </article>

          {/* Right Sticky Sidebar */}
          <aside className="hidden space-y-6 lg:col-span-4 lg:block">
            {/* Table of Contents */}
            <div className="sticky top-24 space-y-4 rounded-2xl border border-brand-border bg-brand-card p-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-brand-text">
                <BookOpen className="w-4 h-4" />
                <span>Table of Contents</span>
              </div>
              <nav aria-label="Article sections">
                <ul className="space-y-2 text-sm">
                  {article.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block py-0.5 text-brand-muted transition-colors hover:text-brand-accent"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="pt-4 border-t border-brand-border space-y-3">
                <span className="text-[11px] font-mono text-brand-muted block">
                  Tags & Disciplines:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-background border border-brand-border  text-brand-text"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="pt-4 border-t border-brand-border">
                <div className="p-4 rounded-xl bg-brand-background border border-brand-border space-y-2">
                  <h4 className="text-xs font-bold text-brand-text tracking-tight">
                    Discuss this topic
                  </h4>
                  <p className="text-[11px] text-brand-muted">
                    Send a project inquiry if you want to explore a related question.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full py-2 rounded-lg text-xs font-semibold text-brand-background  bg-brand-accent hover:bg-brand-accent-hover transition-colors block text-center"
                  >
                    Open the inquiry form
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="border-t border-brand-border pt-10">
            <h2 className="text-xl font-bold text-brand-text mb-5">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/insights/${relatedArticle.slug}`}
                  className="rounded-2xl bg-brand-card border border-brand-border p-6 hover:border-brand-border transition-colors"
                >
                  <span className="text-xs font-mono text-brand-muted">{relatedArticle.category}</span>
                  <h3 className="text-lg font-semibold text-brand-text mt-2">{relatedArticle.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed mt-2">{relatedArticle.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConversionCTA />
    </div>
  );
}
