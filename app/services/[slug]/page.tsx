import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  PhoneCall,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  serviceCategories,
} from "@/lib/data/services";
import { siteConfig } from "@/lib/site-config";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} — ${service.categoryName}`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.shortDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ];

  return (
    <div className="flex flex-col w-full">
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header with Breadcrumbs */}
      <section className="py-14 md:py-20 bg-gradient-to-b from-[#060a12] via-[#091122] to-[#060a12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-400">{service.categoryName}</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-medium truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 text-cyan-400 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{service.categoryName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all text-sm text-center shadow-lg shadow-cyan-950/40 inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Consultation for this Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-850 transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* The Challenge / Client Problem */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  The Operational Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.clientProblem.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.clientProblem.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.clientProblem.painPoints.map((pain, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution & Technical Pillars */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Our Architectural Solution
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.ourSolution.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.ourSolution.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.ourSolution.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#090e1a] border border-slate-800 space-y-2"
                  >
                    <h3 className="text-sm font-bold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Tangible Outcomes
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  What We Deliver
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Concrete deliverables included with this service engagement:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Delivery Process */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Structured Lifecycle
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Our Engineering Process for {service.title}
                </h2>
              </div>

              <div className="space-y-3">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="p-4 rounded-xl bg-[#090e1a] border border-slate-800 flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 font-mono text-cyan-400 font-bold text-xs flex items-center justify-center flex-shrink-0">
                      0{step.step}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {step.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            <div className="space-y-6 pt-6 border-t border-slate-800/80">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4" />
                  Service FAQs
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#090e1a] border border-slate-800 space-y-2"
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Suitable For Card */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Suitable Use Cases & Teams
              </h3>
              <ul className="space-y-2.5 text-xs text-slate-300">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Benefits Card */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Measurable Business ROI
              </h3>
              <div className="space-y-3">
                {service.businessBenefits.map((b, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs font-bold text-cyan-300">
                      {b.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {b.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-800/40 space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 uppercase">
                  Direct Inquiries
                </span>
                <h3 className="text-base font-bold text-white">
                  Discuss this service with an engineer
                </h3>
                <p className="text-xs text-slate-400">
                  Receive an architectural review and estimate within 24 hours.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors block text-center"
              >
                Schedule Technical Scoping
              </Link>
            </div>

            {/* Related Services */}
            {service.relatedServiceSlugs.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#090e1a] border border-slate-800 space-y-3">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Related Services
                </h3>
                <div className="space-y-2">
                  {service.relatedServiceSlugs.map((relSlug) => {
                    const rel = getServiceBySlug(relSlug);
                    if (!rel) return null;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-800 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-colors group"
                      >
                        <span className="truncate pr-2">{rel.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 flex-shrink-0" />
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

