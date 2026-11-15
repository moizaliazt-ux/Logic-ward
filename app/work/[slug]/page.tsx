import PortfolioDetail, {
  generateStaticParams as portfolioGenerateStaticParams,
  generateMetadata as portfolioGenerateMetadata,
} from "@/app/portfolio/[slug]/page";

export const generateStaticParams = portfolioGenerateStaticParams;
export const generateMetadata = portfolioGenerateMetadata;

export default PortfolioDetail;
