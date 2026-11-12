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

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Handle scroll state for navbar shadow/blur
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
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "ai-automation":
        return <Bot className="w-4 h-4 text-sky-400" />;
      case "web-ecommerce":
        return <Globe className="w-4 h-4 text-teal-400" />;
      case "mobile-development":
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case "digital-marketing":
        return <TrendingUp className="w-4 h-4 text-indigo-400" />;
      case "it-infrastructure":
        return <Server className="w-4 h-4 text-emerald-400" />;
      case "content-creative":
        return <PenTool className="w-4 h-4 text-purple-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Announcement Bar */}
      <div className="w-full bg-slate-950/90 border-b border-slate-800/80 px-4 py-1.5 text-xs text-slate-400 flex items-center justify-between backdrop-blur-sm">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Global Engineering
            </span>
            <span className="hidden sm:inline text-slate-300">
              Serving ambitious teams in Pakistan, USA, UK, UAE & Worldwide.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 font-medium text-[11px]"
            >
              <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="hidden md:inline text-slate-700">•</span>
            <span className="hidden md:inline text-slate-400 text-[11px]">
              Response within 24h
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? "bg-[#060a12]/95 backdrop-blur-md border-slate-800/90 shadow-lg shadow-black/40 py-3.5"
            : "bg-[#060a12]/80 backdrop-blur-sm border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-950/40 border border-cyan-400/30 group-hover:border-cyan-300 transition-colors">
              <span className="text-base tracking-tight font-mono">LW</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  {siteConfig.name}
                </span>
                <span className="text-cyan-400 font-bold text-lg">.</span>
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider uppercase font-medium -mt-1 hidden sm:block">
                Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === "/"
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === "/about"
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-1.5 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-cyan-400 bg-slate-900/80"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180 text-cyan-400" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              {servicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[840px] z-50">
                  <div className="bg-[#0b101d] border border-slate-800 rounded-xl shadow-2xl shadow-black/80 p-6 backdrop-blur-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                          Full-Service Technology Spectrum
                        </span>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 group"
                      >
                        Explore all 40+ services
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                      {serviceCategories.slice(0, 6).map((cat) => (
                        <div key={cat.id} className="space-y-2">
                          <Link
                            href={`/services/${cat.featuredSlug}`}
                            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-300 transition-colors group"
                          >
                            <span className="p-1 rounded bg-slate-900 border border-slate-800 group-hover:border-cyan-800">
                              {getCategoryIcon(cat.id)}
                            </span>
                            <span className="leading-snug">{cat.title}</span>
                          </Link>
                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {cat.shortSummary}
                          </p>
                          <ul className="space-y-1 pt-1">
                            {cat.services.slice(0, 3).map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  href={`/services/${sub.slug}`}
                                  className="text-xs text-slate-400 hover:text-slate-200 transition-colors block py-0.5 hover:translate-x-0.5 duration-150"
                                >
                                  • {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-800/80 bg-slate-950/40 -mx-6 -mb-6 p-4 rounded-b-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-400">
                          Need custom scoping or multi-department architecture?
                        </span>
                      </div>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        Request Technical Scoping
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/solutions"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === "/solutions"
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              Solutions
            </Link>

            <Link
              href="/portfolio"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith("/portfolio")
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              Portfolio
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              Insights
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                pathname === "/contact"
                  ? "text-cyan-400 bg-slate-900/80"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 px-4 py-2 rounded-lg shadow-sm shadow-cyan-950/50 transition-all duration-150 flex items-center gap-1.5"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="text-xs font-semibold text-slate-950 bg-cyan-400 px-3 py-1.5 rounded-md"
            >
              Let's Talk
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#070b14] border-b border-slate-800 px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === "/" ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === "/about" ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              About Agency
            </Link>
            <Link
              href="/services"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname.startsWith("/services") ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              All Services (7 Categories)
            </Link>

            {/* Quick Mobile Service Links */}
            <div className="pl-4 border-l border-slate-800 space-y-1.5 my-2">
              {serviceCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/services/${cat.featuredSlug}`}
                  className="block py-1 text-xs text-slate-400 hover:text-cyan-300"
                >
                  • {cat.title}
                </Link>
              ))}
            </div>

            <Link
              href="/solutions"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === "/solutions" ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              Business Solutions & ERP
            </Link>
            <Link
              href="/portfolio"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname.startsWith("/portfolio") ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              Case Studies & Portfolio
            </Link>
            <Link
              href="/insights"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname.startsWith("/insights") ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              Articles & Insights
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                pathname === "/contact" ? "bg-cyan-950/40 text-cyan-400" : "text-slate-200"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <Link
              href="/contact"
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 text-slate-950 block shadow-md"
            >
              Book a Free Consultation
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct ({siteConfig.contact.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

