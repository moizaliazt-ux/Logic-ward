import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
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
    <div className="flex flex-col w-full bg-[#071312] text-[#dae7de]">
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero Header with Breadcrumbs */}
      <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#091615] via-[#0d1f1c] to-[#071312] border-b border-[#1a342e]">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2d584d]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb nav */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#94a49a] mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#dae7de] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <Link href="/services" className="hover:text-[#dae7de] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <span className="text-[#94a49a]">{service.categoryName}</span>
            <ChevronRight className="w-3 h-3 text-[#1a342e]" />
            <span className="text-[#dae7de] font-medium truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-[0.72px] bg-[#0d1f1c] text-[#dae7de] border border-[#1a342e]">
              <span className="w-2 h-2 rounded-full bg-[#dae7de] animate-pulse" />
              <span>{service.categoryName}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {service.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#94a49a] leading-relaxed">
              {service.heroSubheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-all text-sm text-center shadow-lg shadow-black/40 inline-flex items-center justify-center gap-2 group"
              >
                <span>Book a Consultation for this Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-lg font-medium text-[#dae7de] bg-[#0d1f1c] border border-[#1a342e] hover:bg-[#132b27] transition-colors text-sm text-center inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#dae7de]" />
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
                <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#b7c7bd] flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  The Operational Challenge
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.clientProblem.title}
                </h2>
                <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed">
                  {service.clientProblem.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {service.clientProblem.painPoints.map((pain, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] text-xs sm:text-sm text-[#94a49a] flex items-start gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{pain}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Solution & Technical Pillars */}
            <div className="space-y-6 pt-6 border-t border-[#1a342e]">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Our Architectural Solution
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {service.ourSolution.title}
                </h2>
                <p className="text-sm sm:text-base text-[#94a49a] leading-relaxed">
                  {service.ourSolution.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.ourSolution.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#0d1f1c] border border-[#1a342e] space-y-2"
                  >
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#94a49a] leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="space-y-6 pt-6 border-t border-[#1a342e]">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                  Tangible Outcomes
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  What We Deliver
                </h2>
                <p className="text-xs sm:text-sm text-[#94a49a]">
                  Concrete deliverables included with this service engagement:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#091615] border border-[#1a342e] flex items-start gap-2.5 text-xs sm:text-sm text-[#dae7de]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#dae7de] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Delivery Process */}
            <div className="space-y-6 pt-6 border-t border-[#1a342e]">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
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
                    className="p-4 rounded-xl bg-[#0d1f1c] border border-[#1a342e] flex items-start gap-4"
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#091615] border border-[#1a342e] font-mono text-[#dae7de] font-bold text-xs flex items-center justify-center flex-shrink-0">
                      0{step.step}
                    </span>
                    <div className="space-y-0.5">
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#94a49a] leading-relaxed">
                        {step.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service-Specific FAQs */}
            <div className="space-y-6 pt-6 border-t border-[#1a342e]">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] flex items-center gap-1.5">
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
                    className="p-5 rounded-xl bg-[#0d1f1c] border border-[#1a342e] space-y-2"
                  >
                    <h3 className="text-sm font-semibold text-white tracking-tight">
                      {faq.question}
                    </h3>
                    <p className="text-xs text-[#94a49a] leading-relaxed">
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
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                Suitable Use Cases & Teams
              </h3>
              <ul className="space-y-2.5 text-xs text-[#94a49a]">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#dae7de] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Benefits Card */}
            <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
                Measurable Business ROI
              </h3>
              <div className="space-y-3">
                {service.businessBenefits.map((b, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h4 className="text-xs font-bold text-[#dae7de]">
                      {b.title}
                    </h4>
                    <p className="text-xs text-[#94a49a] leading-relaxed">
                      {b.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="p-6 rounded-[24px] bg-gradient-to-br from-[#1a342e] via-[#0d1f1c] to-[#091615] border border-[#2d584d] space-y-4">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#dae7de] uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Discuss this service with an engineer
                </h3>
                <p className="text-xs text-[#94a49a]">
                  Receive an architectural review and estimate within 24 hours.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full py-2.5 rounded-lg text-xs font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-colors block text-center"
              >
                Schedule Technical Scoping
              </Link>
            </div>

            {/* Related Services */}
            {service.relatedServiceSlugs.length > 0 && (
              <div className="p-6 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de]">
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
                        className="p-2.5 rounded-lg bg-[#091615] border border-[#1a342e] hover:border-[#2d584d] flex items-center justify-between text-xs text-[#94a49a] hover:text-[#dae7de] transition-colors group"
                      >
                        <span className="truncate pr-2">{rel.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#94a49a] group-hover:text-[#dae7de] flex-shrink-0" />
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
