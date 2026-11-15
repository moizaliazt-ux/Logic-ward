import PortfolioPage, { metadata as portfolioMetadata } from "@/app/portfolio/page";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  ...portfolioMetadata,
  title: "Our Work & Case Studies | Logicward",
  description:
    "Explore our software engineering reference architectures, concept implementations, and technical solutions across enterprise ERPs, telehealth, and AI automation.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
};

export default PortfolioPage;
