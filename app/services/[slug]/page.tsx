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
  Sparkles,
} from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getRelatedServices,
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
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
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

  const relatedServices = getRelatedServices(service.relatedServiceSlugs);

  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/services` },
    { name: service.categoryName, url: `${siteConfig.url}/services` },
    { name: service.title, url: `${siteConfig.url}/services/${service.slug}` },
  ];

  return (
    <div className="flex flex-col w-full bg-brand-surface  text-brand-text">
      <ServiceJsonLd
        name={service.title}
        description={service.shortDescription}
        url={`${siteConfig.url}/services/${service.slug}`}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* 1. Breadcrumbs & 2. Service-Specific Hero & CTA (PRD § 6.2) */}
      <section className="relative py-14 md:py-20 bg-brand-surface  text-brand-text border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-brand-muted mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-brand-text transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <Link href="/services" className="hover:text-brand-text transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-muted">{service.categoryName}</span>
            <ChevronRight className="w-3 h-3 text-brand-secondary" />
            <span className="text-brand-text font-medium truncate max-w-[200px] sm:max-w-none">
              {service.title}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{service.categoryName}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-brand-text leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-base sm:text-lg text-brand-secondary leading-relaxed max-w-2xl">
                {service.heroSubheadline}
              </p>

              {/* Scope Checklist */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-brand-secondary">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  <span>Contractual IP Handover</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  <span>Documented TRD Specifications</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                  <span>Staging Demonstrations</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-all inline-flex items-center gap-2 shadow-sm shadow-brand-background/20"
                >
                  <span>Request Scoping for this Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Logicward,%20I%20am%20interested%20in%20scoping%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg text-sm font-semibold text-brand-secondary hover:text-brand-text bg-brand-card border border-brand-border hover:bg-brand-elevated transition-colors inline-flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-brand-accent" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Quick Service Specification Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-brand-card border border-brand-border text-xs font-mono space-y-4 shadow-md">
              <span className="text-brand-accent uppercase font-bold tracking-wider block">
                DELIVERY FRAMEWORK
              </span>
              <div className="space-y-2.5 text-brand-secondary">
                <div className="flex justify-between border-b border-brand-border pb-1.5">
                  <span className="text-brand-muted">DISCIPLINE:</span>
                  <span className="text-brand-text font-semibold">{service.categoryName}</span>
                </div>
                <div className="flex justify-between border-b border-brand-border pb-1.5">
                  <span className="text-brand-muted">ENGAGEMENT:</span>
                  <span className="text-brand-text font-semibold">Fixed Milestone / Sprint</span>
                </div>
                <div className="flex justify-between border-b border-brand-border pb-1.5">
                  <span className="text-brand-muted">IP TRANSFER:</span>
                  <span className="text-brand-accent font-semibold">100% Client Title</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-brand-muted">REVIEWS:</span>
                  <span className="text-brand-text font-semibold">Bi-Weekly Staging Demos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections (PRD § 6.2 parts 3-11) */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* 3. What the service is and who it helps & 4. Business challenges addressed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 6 Columns: Who It Helps & Problem Overview */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  AUDIENCE & OPERATIONAL FIT
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  What This Service Is & Who It Helps
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed mt-3">
                  {service.shortDescription}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-brand-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                  Best Suited For:
                </span>
                <div className="flex flex-wrap gap-2">
                  {service.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-surface  text-brand-secondary border border-brand-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 Columns: 4. Business Challenges Addressed */}
            <div className="lg:col-span-6 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  CHALLENGES TO ADDRESS
                </span>
                <h2 className="text-2xl font-bold text-brand-text mt-1">
                  {service.clientProblem.title}
                </h2>
                <p className="text-sm text-brand-secondary leading-relaxed mt-3">
                  {service.clientProblem.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-brand-border">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-text block">
                  Identified Operational Pain Points:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-brand-secondary">
                  {service.clientProblem.painPoints.map((pain, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                      <span>{pain}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Proposed approach and technical considerations */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                ARCHITECTURAL METHODOLOGY
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-text">
                {service.ourSolution.title}
              </h2>
              <p className="text-sm text-brand-secondary leading-relaxed">
                {service.ourSolution.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.ourSolution.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-brand-surface border border-brand-border space-y-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center font-mono font-bold text-xs text-brand-accent">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-brand-text">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Deliverables and scope examples & 7. Relevant integrations and technologies */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Deliverables */}
            <div className="lg:col-span-7 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  TANGIBLE OUTPUTS
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-1">
                  Deliverables & Scope Examples
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Possible deliverables, confirmed in the agreed project scope:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-brand-surface border border-brand-border flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-accent mt-0.5 flex-shrink-0" />
                    <span className="text-xs font-medium text-brand-text">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Business Benefits */}
            <div className="lg:col-span-5 bg-brand-card rounded-2xl border border-brand-border p-8 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                  POTENTIAL BUSINESS BENEFITS
                </span>
                <h3 className="text-2xl font-bold text-brand-text mt-1">
                  Practical Operational Gains
                </h3>
                <p className="text-xs text-brand-muted mt-1">
                  Possible gains depend on the workflow, implementation, and agreed measures:
                </p>
              </div>

              <div className="space-y-3">
                {service.businessBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-surface border border-brand-border space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                      <h4 className="text-xs font-bold text-brand-text">
                        {benefit.title}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-secondary leading-relaxed pl-5">
                      {benefit.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8. Delivery Process */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-10 shadow-sm space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                EXECUTION LIFECYCLE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-text">
                How We Deliver {service.title}
              </h3>
              <p className="text-sm text-brand-secondary leading-relaxed">
                The review cadence and checkpoints are agreed during scoping:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="p-5 rounded-xl bg-brand-surface border border-brand-border space-y-2"
                >
                  <span className="text-xl font-mono font-bold text-brand-accent">
                    0{step.step}
                  </span>
                  <h4 className="text-sm font-bold text-brand-text">
                    {step.title}
                  </h4>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 9. Relevant case study or clearly labelled demonstration (PRD § 6.2 part 9) */}
          <div className="bg-brand-surface text-brand-text rounded-2xl border border-brand-border p-8 sm:p-10 space-y-4 shadow-md">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="px-3 py-1 rounded text-xs font-mono uppercase tracking-wider bg-brand-card border border-brand-border  text-brand-accent">
                REFERENCE ARCHITECTURE DEMONSTRATION
              </span>
              <span className="text-xs text-brand-muted font-mono">
                EXAMPLES CLEARLY LABELED
              </span>
            </div>
            <h3 className="text-2xl font-bold text-brand-text">
              Reference Architectures & Demonstrations
            </h3>
            <p className="text-sm text-brand-secondary leading-relaxed max-w-3xl">
              Explore the labeled reference architectures and demonstration projects in our work directory. These examples do not represent client deliveries or measured service outcomes.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/work"
                className="text-xs font-bold uppercase tracking-wider text-brand-accent hover:underline inline-flex items-center gap-1.5"
              >
                <span>Browse Reference Case Studies Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* 10. Service FAQs */}
          <div className="bg-brand-card rounded-2xl border border-brand-border p-8 sm:p-10 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                SERVICE QUESTIONS & ANSWERS
              </span>
              <h3 className="text-2xl font-bold text-brand-text mt-1">
                Frequently Asked Questions about {service.title}
              </h3>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-brand-border  bg-brand-card space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <h4 className="text-sm font-bold text-brand-text">
                      {faq.question}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 11. Related Services */}
          {relatedServices.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-brand-accent font-semibold">
                    CROSS-DISCIPLINE CAPABILITIES
                  </span>
                  <h3 className="text-2xl font-bold text-brand-text mt-1">
                    Related Engineering Services
                  </h3>
                </div>
                <Link
                  href="/services"
                  className="text-xs font-semibold text-brand-accent hover:underline"
                >
                  View All Services →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-accent/50 hover:shadow-sm transition-all space-y-3 block group"
                  >
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-surface  text-brand-muted border border-brand-border">
                      {rel.categoryName}
                    </span>
                    <h4 className="text-base font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-brand-secondary leading-relaxed line-clamp-2">
                      {rel.shortDescription}
                    </p>
                    <div className="pt-2 text-xs font-semibold text-brand-accent inline-flex items-center gap-1">
                      <span>Inspect Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 12. Contact CTA */}
      <ConversionCTA />
    </div>
  );
}
