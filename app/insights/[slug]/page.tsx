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
import { getArticleBySlug, articlesData } from "@/lib/data/insights";
import { siteConfig } from "@/lib/site-config";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ConversionCTA } from "@/components/home/ConversionCTA";

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
    openGraph: {
      title: `${article.title} | ${siteConfig.name}`,
      description: article.excerpt,
      url: `${siteConfig.url}/insights/${article.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author.name],
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
    datePublished: article.publishDate,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
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
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#94a49a] mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#dae7de] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <Link href="/insights" className="hover:text-[#dae7de] transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <span className="text-[#dae7de] font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
                {article.category}
              </span>
              <span className="text-xs font-mono text-[#94a49a] flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{article.publishDate}</span>
              </span>
              <span className="text-xs font-mono text-[#94a49a] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-[#1a342e]">
              <div className="w-10 h-10 rounded-full bg-[#091615] border border-[#1a342e] flex items-center justify-center font-bold text-xs font-mono text-[#dae7de]">
                LW
              </div>
              <div className="text-xs font-mono">
                <div className="font-semibold text-white">{article.author.name}</div>
                <div className="text-[#94a49a]">{article.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-12">
            {/* Takeaways Box */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-3 shadow-xl shadow-black/40">
              <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Core Takeaways for Engineering & Leadership
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#94a49a]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de] mt-2 flex-shrink-0" />
                  <span>
                    Direct architecture alignment between engineering constraints and commercial requirements prevents late-stage scope blowups.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de] mt-2 flex-shrink-0" />
                  <span>
                    Deterministic fallback workflows protect operational integrity even when third-party microservices degrade.
                  </span>
                </li>
              </ul>
            </div>

            {/* Structured Sections */}
            <div className="space-y-12 text-[#94a49a] leading-relaxed text-sm sm:text-base">
              {article.contentSections.map((sec) => (
                <div key={sec.id} id={sec.id} className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {sec.heading}
                  </h2>
                  <div className="space-y-4 text-[#94a49a]">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                  {sec.callout && (
                    <div className="p-5 rounded-xl bg-[#091615] border border-[#2d584d] space-y-2 mt-4">
                      <div className="text-xs font-mono font-bold text-[#dae7de] uppercase tracking-wider">
                        {sec.callout.title}
                      </div>
                      <p className="text-xs text-[#94a49a] leading-relaxed">
                        {sec.callout.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Author Bylaw and Notice */}
            <div className="p-6 rounded-xl bg-[#0d1f1c] border border-[#1a342e] text-xs text-[#94a49a] space-y-2">
              <div className="text-[#dae7de] font-semibold font-mono">
                Engineering Governance & Peer Review
              </div>
              <p>
                All technical insights published by Logicward are drafted by practicing systems architects and peer-reviewed against active production codebases.
              </p>
            </div>
          </article>

          {/* Right Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Table of Contents */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4 sticky top-24 shadow-xl shadow-black/40">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                <BookOpen className="w-4 h-4" />
                <span>Table of Contents</span>
              </div>
              <ul className="space-y-2 text-xs font-mono">
                {article.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[#94a49a] hover:text-[#dae7de] transition-colors block py-0.5 truncate"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-[#1a342e] space-y-3">
                <span className="text-[11px] font-mono text-[#94a49a] block">
                  Tags & Disciplines:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#091615] border border-[#1a342e] text-[#dae7de]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation CTA Card */}
              <div className="pt-4 border-t border-[#1a342e]">
                <div className="p-4 rounded-xl bg-[#091615] border border-[#2d584d] space-y-2">
                  <h4 className="text-xs font-bold text-white tracking-tight">
                    Discuss this architecture with our team
                  </h4>
                  <p className="text-[11px] text-[#94a49a]">
                    Schedule a 30-minute discovery call with a lead architect.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full py-2 rounded-lg text-xs font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-colors block text-center"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}
