import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Share2,
  BookOpen,
  Sparkles,
  PhoneCall,
  User,
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
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Article Header */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/insights" className="hover:text-cyan-400 transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {article.title}
            </span>
          </nav>

          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
              <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {article.category}
              </span>
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-4 flex items-center gap-3 border-t border-slate-800/80">
              <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">
                  {article.author.name}
                </div>
                <div className="text-[11px] text-slate-400">
                  {article.author.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents Sticky (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800/80">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Table of Contents
                </span>
              </div>
              <nav className="space-y-1.5 text-xs">
                {article.tableOfContents.map((toc) => (
                  <a
                    key={toc.id}
                    href={`#${toc.id}`}
                    className="block py-1 text-slate-400 hover:text-cyan-300 transition-colors leading-relaxed"
                  >
                    • {toc.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-semibold text-white block">
                  Have questions on this topic?
                </span>
                <Link
                  href="/contact"
                  className="w-full py-2 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors block text-center"
                >
                  Consult an Architect
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Article Body */}
          <div className="lg:col-span-8 space-y-12">
            {article.contentSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="space-y-4 scroll-mt-28"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.heading}
                </h2>

                <div className="space-y-3.5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                {section.callout && (
                  <div className="my-6 p-5 rounded-xl bg-cyan-950/30 border border-cyan-800/60 space-y-1">
                    <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                      {section.callout.title}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {section.callout.body}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Related Articles Strip */}
            {article.relatedArticleSlugs.length > 0 && (
              <div className="pt-10 border-t border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white">
                  Related Insights & Perspectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {article.relatedArticleSlugs.map((relSlug) => {
                    const rel = getArticleBySlug(relSlug);
                    if (!rel) return null;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/insights/${rel.slug}`}
                        className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 hover:border-slate-700 space-y-1.5 block group"
                      >
                        <span className="text-[10px] font-mono text-cyan-400">
                          {rel.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ConversionCTA />
    </div>
  );
}

