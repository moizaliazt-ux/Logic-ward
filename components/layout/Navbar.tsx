"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Code2,
  Bot,
  Globe,
  Smartphone,
  TrendingUp,
  Server,
  PenTool,
  PhoneCall,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "software-systems":
        return <Code2 className="w-4 h-4 text-[#dae7de]" />;
      case "ai-automation":
        return <Bot className="w-4 h-4 text-[#94a49a]" />;
      case "web-ecommerce":
        return <Globe className="w-4 h-4 text-[#dae7de]" />;
      case "mobile-development":
        return <Smartphone className="w-4 h-4 text-[#94a49a]" />;
      case "digital-marketing":
        return <TrendingUp className="w-4 h-4 text-[#dae7de]" />;
      case "it-infrastructure":
        return <Server className="w-4 h-4 text-[#94a49a]" />;
      case "content-creative":
        return <PenTool className="w-4 h-4 text-[#dae7de]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#dae7de]" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-2 px-3 sm:px-6">
      {/* Translucent Floating Global Navigation Bar (Per PRD specification: 12px radius, 57px blur, 10px gaps, 6px controls) */}
      <nav
        className={`max-w-7xl mx-auto rounded-xl transition-all duration-300 border ${
          scrolled
            ? "bg-[#091615]/90 backdrop-blur-[57px] border-[#1a342e] shadow-2xl shadow-black/80 py-2.5 px-4"
            : "bg-[#0d1f1c]/80 backdrop-blur-[57px] border-[#1a342e]/70 shadow-lg py-3 px-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Wordmark Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="w-8 h-8 rounded-md bg-[#1a342e] border border-[#2d584d] flex items-center justify-center font-bold text-[#dae7de] font-mono text-xs">
              LW
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-medium tracking-tight text-[#dae7de] group-hover:text-white transition-colors uppercase font-mono">
                {siteConfig.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#dae7de]" />
            </div>
          </Link>

          {/* Desktop Nav Items (PRD: 14px / 14px, weight 400, -0.14px tracking, 10px gap) */}
          <div className="hidden lg:flex items-center gap-2.5 text-[14px] leading-[14px] tracking-[-0.14px]">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/"
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              INTRO
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/about"
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              ABOUT
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-1.5 rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                    : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>SERVICES</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-[#dae7de]" : "text-[#94a49a]"
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[860px] z-50">
                  <div className="bg-[#091615] border border-[#1a342e] rounded-xl shadow-2xl shadow-black/90 p-6 backdrop-blur-[57px]">
                    <div className="flex items-center justify-between pb-3.5 border-b border-[#1a342e] mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-mono font-bold uppercase tracking-[0.72px] text-[#dae7de]">
                          TECHNOLOGY PORTFOLIO SPECTRUM
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-[12px] font-mono text-[#dae7de] hover:underline inline-flex items-center gap-1 group"
                      >
                        EXPLORE ALL 40+ SERVICES
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                      {serviceCategories.slice(0, 6).map((cat) => (
                        <div key={cat.id} className="space-y-1.5">
                          <Link
                            href={`/services/${cat.featuredSlug}`}
                            className="flex items-center gap-2 text-[13px] font-medium text-[#dae7de] hover:text-white transition-colors group"
                          >
                            <span className="p-1 rounded bg-[#0d1f1c] border border-[#1a342e]">
                              {getCategoryIcon(cat.id)}
                            </span>
                            <span className="leading-snug">{cat.title}</span>
                          </Link>
                          <p className="text-[11px] text-[#94a49a] line-clamp-2 leading-relaxed">
                            {cat.shortSummary}
                          </p>
                          <ul className="space-y-0.5 pt-0.5">
                            {cat.services.slice(0, 3).map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  href={`/services/${sub.slug}`}
                                  className="text-[11px] text-[#94a49a] hover:text-[#dae7de] transition-colors block py-0.5"
                                >
                                  • {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#1a342e] bg-[#050d0c] -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                      <span className="text-[12px] text-[#94a49a]">
                        Need custom enterprise scoping or multi-department architecture?
                      </span>
                      <Link
                        href="/contact"
                        className="text-[12px] font-mono font-bold text-[#091615] bg-[#dae7de] hover:bg-white px-3 py-1.5 rounded-md transition-colors inline-flex items-center gap-1.5"
                      >
                        REQUEST SCOPING
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/solutions"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/solutions"
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              SOLUTIONS
            </Link>

            <Link
              href="/portfolio"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname.startsWith("/portfolio")
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              PORTFOLIO
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              INSIGHTS
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-md transition-colors ${
                pathname === "/contact"
                  ? "text-[#dae7de] bg-[#1a342e]/60 font-medium"
                  : "text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]/40"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Action Buttons (PRD: 6px radius, compact Warm White button and Black outline button) */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-mono font-medium text-[#dae7de] px-3.5 py-2 rounded-md border border-[#1a342e] bg-[#0d1f1c] hover:bg-[#132b27] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#dae7de]" />
              <span>WHATSAPP</span>
            </a>

            <Link
              href="/contact"
              className="text-[12px] font-mono font-bold text-[#091615] bg-[#dae7de] hover:bg-white px-4 py-2 rounded-md transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>BOOK CONSULTATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="text-[11px] font-mono font-bold text-[#091615] bg-[#dae7de] px-3 py-1.5 rounded-md"
            >
              LET'S TALK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-[#94a49a] hover:text-[#dae7de] hover:bg-[#132b27]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-xl bg-[#091615] border border-[#1a342e] p-5 space-y-4 shadow-2xl">
          <div className="space-y-1 text-sm font-mono uppercase">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md ${
                pathname === "/" ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md ${
                pathname === "/about" ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-md ${
                pathname.startsWith("/services") ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              SERVICES (ALL 7 CATEGORIES)
            </Link>
            <Link
              href="/solutions"
              className={`block px-3 py-2 rounded-md ${
                pathname === "/solutions" ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              SOLUTIONS & ERP
            </Link>
            <Link
              href="/portfolio"
              className={`block px-3 py-2 rounded-md ${
                pathname.startsWith("/portfolio") ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              PORTFOLIO
            </Link>
            <Link
              href="/insights"
              className={`block px-3 py-2 rounded-md ${
                pathname.startsWith("/insights") ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              INSIGHTS
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md ${
                pathname === "/contact" ? "bg-[#1a342e] text-[#dae7de]" : "text-[#94a49a]"
              }`}
            >
              CONTACT
            </Link>
          </div>

          <div className="pt-3 border-t border-[#1a342e] space-y-2">
            <Link
              href="/contact"
              className="w-full py-2.5 text-center text-xs font-mono font-bold rounded-md bg-[#dae7de] text-[#091615] block"
            >
              BOOK A FREE CONSULTATION
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-center text-xs font-mono rounded-md bg-[#0d1f1c] border border-[#1a342e] text-[#dae7de] flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WHATSAPP DIRECT</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
