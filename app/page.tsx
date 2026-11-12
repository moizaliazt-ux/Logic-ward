import React from "react";
import { Hero } from "@/components/home/Hero";
import { CapabilityTrust } from "@/components/home/CapabilityTrust";
import { ServiceCategoriesGrid } from "@/components/home/ServiceCategoriesGrid";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { TechStackMatrix } from "@/components/home/TechStackMatrix";
import { ClientProofPlaceholder } from "@/components/home/ClientProofPlaceholder";
import { FAQSection } from "@/components/home/FAQSection";
import { ConversionCTA } from "@/components/home/ConversionCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <CapabilityTrust />
      <ServiceCategoriesGrid />
      <SolutionsPreview />
      <WhyChooseUs />
      <ProcessTimeline />
      <FeaturedWork />
      <TechStackMatrix />
      <ClientProofPlaceholder />
      <FAQSection />
      <ConversionCTA />
    </div>
  );
}
