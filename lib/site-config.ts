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
    responseTime: string;
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
  tagline: "Technology That Moves Your Business Forward.",
  description:
    "Full-service IT, software, and digital growth agency delivering custom software, AI automation, high-performance web and mobile apps, and IT infrastructure for ambitious businesses worldwide.",
  url: "https://logicward.com",
  primaryMarket: "Pakistan & Worldwide",
  marketsServed: ["Pakistan", "United States", "United Kingdom", "Canada", "UAE", "Europe"],
  contact: {
    email: "contact@logicward.com", // [REPLACE BEFORE LAUNCH: Real agency email]
    phone: "+92 (300) 000-0000", // [REPLACE BEFORE LAUNCH: Real contact number]
    whatsappNumber: "923000000000", // [REPLACE BEFORE LAUNCH: Real WhatsApp digits without plus]
    whatsappDisplay: "+92 300 0000000",
    address: {
      city: "Lahore / Karachi", // [REPLACE BEFORE LAUNCH: Primary office location]
      country: "Pakistan",
      label: "Pakistan Operations & Global Remote Delivery",
    },
    workingHours: "Mon - Fri: 9:00 AM - 6:00 PM (PKT / UTC+5)",
    responseTime: "Guaranteed initial response within 1 business day",
  },
  social: {
    linkedin: "https://linkedin.com/company/logicward",
    twitter: "https://x.com/logicward",
    github: "https://github.com/logicward",
    facebook: "https://facebook.com/logicward",
  },
  nav: {
    main: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Solutions", href: "/solutions" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Insights", href: "/insights" },
      { title: "Contact", href: "/contact" },
    ],
  },
};

