import React from "react";
import { Hero } from "@/components/home/Hero";
import { CapabilityTrust } from "@/components/home/CapabilityTrust";
import { ServiceCategoriesGrid } from "@/components/home/ServiceCategoriesGrid";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TechStackMatrix } from "@/components/home/TechStackMatrix";
import { InsightsPreview } from "@/components/home/InsightsPreview";
import { FAQSection } from "@/components/home/FAQSection";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CapabilityTrust />
      <ServiceCategoriesGrid />
      <SolutionsPreview />
      <FeaturedWork />
      <ProcessTimeline />
      <TechStackMatrix />
      <InsightsPreview />
      <FAQSection />
      <ConversionCTA />
    </div>
  );
}
