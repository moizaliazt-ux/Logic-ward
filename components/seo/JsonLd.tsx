import React from "react";
import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
    ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
    ...(siteConfig.contact.address.city || siteConfig.contact.address.country
      ? {
          address: {
            "@type": "PostalAddress",
            ...(siteConfig.contact.address.city
              ? { addressLocality: siteConfig.contact.address.city }
              : {}),
            ...(siteConfig.contact.address.country
              ? { addressCountry: siteConfig.contact.address.country }
              : {}),
          },
        }
      : {}),
    ...([
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
      siteConfig.social.facebook,
    ].some(Boolean)
      ? {
          sameAs: [
            siteConfig.social.linkedin,
            siteConfig.social.twitter,
            siteConfig.social.github,
            siteConfig.social.facebook,
          ].filter(Boolean),
        }
      : {}),
    areaServed: siteConfig.marketsServed,
    knowsAbout: [
      "Custom Software Development",
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Mobile Application Development",
      "Artificial Intelligence & Workflow Automation",
      "Web & E-Commerce Development",
      "IT Infrastructure & Network Engineering",
      "Search Engine Optimization & AEO",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  providerName = siteConfig.name,
}: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: providerName,
      url: siteConfig.url,
    },
    areaServed: siteConfig.marketsServed,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

