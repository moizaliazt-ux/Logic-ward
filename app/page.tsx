import React from "react";
import { Hero } from "@/components/home/Hero";
import { CapabilityTrust } from "@/components/home/CapabilityTrust";
import { ServiceCategoriesGrid } from "@/components/home/ServiceCategoriesGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { IndustriesPreview } from "@/components/home/IndustriesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStackMatrix } from "@/components/home/TechStackMatrix";
import { ClientProofPlaceholder } from "@/components/home/ClientProofPlaceholder";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 5.2 Hero */}
      <Hero />

      {/* 5.3 Trust & Capability Strip */}
      <CapabilityTrust />

      {/* 5.4 Services Overview */}
      <ServiceCategoriesGrid />

      {/* 5.5 Featured Work */}
      <FeaturedWork />

      {/* 5.6 Solutions Preview */}
      <SolutionsPreview />

      {/* 5.7 Target Industries Preview */}
      <IndustriesPreview />

      {/* 5.8 Why Logicward */}
      <WhyChooseUs />

      {/* 5.9 Delivery Process */}
      <ProcessTimeline />

      {/* 5.10 Technology Ecosystem */}
      <TechStackMatrix />

      {/* 5.11 Client Proof & NDA Governance */}
      <ClientProofPlaceholder />

      {/* 5.12 Insights Knowledge Base Preview */}
      <InsightsPreview />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* 5.13 Final Conversion CTA */}
      <ConversionCTA />
    </div>
  );
}
