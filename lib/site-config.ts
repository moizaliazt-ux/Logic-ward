export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  primaryMarket: string;
  marketsServed: string[];
  contact: {
    email: string;
    phone: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    address: {
      city: string;
      country: string;
      label: string;
    };
    workingHours: string;
  };
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    facebook: string;
  };
  nav: {
    main: { title: string; href: string }[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Logicward",
  legalName: "Logicward Digital Technologies",
  tagline: "Build smarter. Move your business forward.",
  description:
    "Logicward plans and builds practical software, digital products, business systems, and workflow automation for organizations in Pakistan and international markets.",
  url: "https://logicward.com",
  primaryMarket: "Pakistan & Worldwide",
  marketsServed: ["Pakistan", "United States", "United Kingdom", "Canada", "UAE", "Europe"],
  contact: {
    email: "moizali.azt@gmail.com",
    phone: "",
    whatsappNumber: "",
    whatsappDisplay: "",
    address: {
      city: "",
      country: "",
      label: "",
    },
    workingHours: "",
  },
  social: {
    linkedin: "",
    twitter: "",
    github: "",
    facebook: "",
  },
  nav: {
    main: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/services" },
      { title: "Solutions", href: "/solutions" },
      { title: "Industries", href: "/industries" },
      { title: "Our Work", href: "/work" },
      { title: "Company", href: "/company" },
      { title: "Insights", href: "/insights" },
      { title: "Contact", href: "/contact" },
    ],
  },
};

export function getWhatsAppUrl(message?: string): string | null {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}

