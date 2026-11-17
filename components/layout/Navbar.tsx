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
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";
import { industriesData } from "@/lib/data/industries";
import { solutionsData } from "@/lib/data/solutions";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);

  // Mobile accordion state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const whatsAppUrl = getWhatsAppUrl();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setIndustriesDropdownOpen(false);
      setCompanyDropdownOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
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
        return <Code2 className="w-4 h-4 text-brand-accent" />;
      case "ai-automation":
        return <Bot className="w-4 h-4 text-brand-accent" />;
      case "web-ecommerce":
        return <Globe className="w-4 h-4 text-brand-accent" />;
      case "mobile-development":
        return <Smartphone className="w-4 h-4 text-brand-accent" />;
      case "digital-marketing":
        return <TrendingUp className="w-4 h-4 text-brand-accent" />;
      case "it-infrastructure":
        return <Server className="w-4 h-4 text-brand-accent" />;
      case "content-creative":
        return <PenTool className="w-4 h-4 text-brand-accent" />;
      default:
        return <Code2 className="w-4 h-4 text-brand-accent" />;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-background px-4 sm:px-6">
      <nav
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          scrolled
            ? "py-2.5"
            : "py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-md"
            aria-label={`${siteConfig.name} Home`}
          >
            <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center font-bold text-brand-background font-mono text-xs">
              LW
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-semibold tracking-tight text-brand-text group-hover:text-brand-accent transition-colors">
                {siteConfig.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-brand-secondary">
            {/* Services Mega-Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
              onFocus={() => setServicesDropdownOpen(true)}
              onBlur={(event) => {
                if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                  setServicesDropdownOpen(false);
                }
              }}
            >
              <Link
                href="/services"
                className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services")
                    ? "text-brand-text bg-brand-elevated/80 font-semibold"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-brand-text" : "text-brand-muted"
                  }`}
                />
              </Link>

              {/* Services Mega Menu */}
              {servicesDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[840px] z-50">
                  <div className="bg-brand-card border border-brand-border rounded-2xl shadow-md p-6">
                    <div className="flex items-center justify-between pb-3.5 border-b border-brand-border mb-4">
                      <div>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-accent">
                          CAPABILITY DISCIPLINES
                        </span>
                        <p className="text-xs text-brand-muted mt-0.5">
                          Explore our full-stack engineering and digital solutions
                        </p>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-semibold text-brand-text hover:text-brand-accent inline-flex items-center gap-1 group"
                      >
                        <span>Explore the service directory</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                      {serviceCategories.slice(0, 6).map((cat) => (
                        <div key={cat.id} className="space-y-1.5">
                          <Link
                            href={`/services/${cat.featuredSlug}`}
                            className="flex items-center gap-2 text-xs font-bold text-brand-text hover:text-brand-accent transition-colors group"
                          >
                            <span className="p-1 rounded bg-brand-surface border border-brand-border">
                              {getCategoryIcon(cat.id)}
                            </span>
                            <span className="leading-snug">{cat.title}</span>
                          </Link>
                          <p className="text-[11px] text-brand-muted line-clamp-2 leading-relaxed">
                            {cat.shortSummary}
                          </p>
                          <ul className="space-y-0.5 pt-0.5">
                            {cat.services.slice(0, 2).map((sub) => (
                              <li key={sub.slug}>
                                <Link
                                  href={`/services/${sub.slug}`}
                                  className="text-[11px] text-brand-muted hover:text-brand-text transition-colors block py-0.5"
                                >
                                  • {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-brand-border  bg-brand-background -mx-6 -mb-6 p-4 rounded-b-2xl flex items-center justify-between">
                      <span className="text-xs text-brand-muted">
                        Need custom enterprise architecture or technical scoping?
                      </span>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover px-3.5 py-1.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
                      >
                        Request Scoping Call
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
              onFocus={() => setSolutionsDropdownOpen(true)}
              onBlur={(event) => {
                if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                  setSolutionsDropdownOpen(false);
                }
              }}
            >
              <Link
                href="/solutions"
                className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname === "/solutions"
                    ? "text-brand-text bg-brand-elevated/80 font-semibold"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
                }`}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    solutionsDropdownOpen ? "rotate-180 text-brand-text" : "text-brand-muted"
                  }`}
                />
              </Link>

              {solutionsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2.5 w-72 z-50">
                  <div className="bg-brand-card border border-brand-border rounded-xl shadow-md p-3 space-y-1">
                    <span className="px-3 pt-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-brand-accent block">
                      Enterprise Platforms
                    </span>
                    {solutionsData.slice(0, 6).map((sol) => (
                      <Link
                        key={sol.id}
                        href={`/solutions#${sol.slug}`}
                        className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                      >
                        {sol.title}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-brand-border mt-2">
                      <Link
                        href="/solutions"
                        className="px-3 py-1 text-xs font-semibold text-brand-accent hover:underline flex items-center justify-between"
                      >
                        <span>View All 10 Solutions</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
              onFocus={() => setIndustriesDropdownOpen(true)}
              onBlur={(event) => {
                if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                  setIndustriesDropdownOpen(false);
                }
              }}
            >
              <Link
                href="/industries"
                className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/industries")
                    ? "text-brand-text bg-brand-elevated/80 font-semibold"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
                }`}
                aria-expanded={industriesDropdownOpen}
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    industriesDropdownOpen ? "rotate-180 text-brand-text" : "text-brand-muted"
                  }`}
                />
              </Link>

              {industriesDropdownOpen && (
                <div className="absolute left-0 top-full pt-2.5 w-72 z-50">
                  <div className="bg-brand-card border border-brand-border rounded-xl shadow-md p-3 space-y-1">
                    <span className="px-3 pt-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-brand-accent block">
                      Target Domains
                    </span>
                    {industriesData.slice(0, 6).map((ind) => (
                      <Link
                        key={ind.id}
                        href={`/industries/${ind.slug}`}
                        className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                      >
                        {ind.name}
                      </Link>
                    ))}
                    <div className="pt-2 border-t border-brand-border mt-2">
                      <Link
                        href="/industries"
                        className="px-3 py-1 text-xs font-semibold text-brand-accent hover:underline flex items-center justify-between"
                      >
                        <span>View All 9 Sectors</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Work */}
            <Link
              href="/work"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname.startsWith("/work") || pathname.startsWith("/portfolio")
                  ? "text-brand-text bg-brand-elevated/80 font-semibold"
                  : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
              }`}
            >
              Our Work
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCompanyDropdownOpen(true)}
              onMouseLeave={() => setCompanyDropdownOpen(false)}
              onFocus={() => setCompanyDropdownOpen(true)}
              onBlur={(event) => {
                if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) {
                  setCompanyDropdownOpen(false);
                }
              }}
            >
              <Link
                href="/company"
                className={`px-3 py-2 rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/company") || pathname === "/about"
                    ? "text-brand-text bg-brand-elevated/80 font-semibold"
                    : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
                }`}
                aria-expanded={companyDropdownOpen}
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    companyDropdownOpen ? "rotate-180 text-brand-text" : "text-brand-muted"
                  }`}
                />
              </Link>

              {companyDropdownOpen && (
                <div className="absolute left-0 top-full pt-2.5 w-60 z-50">
                  <div className="bg-brand-card border border-brand-border rounded-xl shadow-md p-3 space-y-1">
                    <Link
                      href="/company"
                      className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                    >
                      About Logicward
                    </Link>
                    <Link
                      href="/company#process"
                      className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                    >
                      6-Step Delivery Model
                    </Link>
                    <Link
                      href="/company#team"
                      className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                    >
                      Engineering Leadership
                    </Link>
                    <Link
                      href="/contact"
                      className="px-3 py-1.5 rounded-lg text-xs text-brand-secondary hover:text-brand-text hover:bg-brand-elevated transition-colors block"
                    >
                      Project inquiries
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Insights */}
            <Link
              href="/insights"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-brand-text bg-brand-elevated/80 font-semibold"
                  : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
              }`}
            >
              Insights
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3 py-2 rounded-md transition-colors ${
                pathname === "/contact"
                  ? "text-brand-text bg-brand-elevated/80 font-semibold"
                  : "text-brand-secondary hover:text-brand-text hover:bg-brand-elevated/50"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons: WhatsApp & Start a Project CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-brand-secondary hover:text-brand-text px-3 py-2 rounded-lg border border-brand-border bg-brand-card hover:bg-brand-elevated transition-colors flex items-center gap-1.5"
                title="Direct WhatsApp Inquiry"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-accent" />
                <span>WhatsApp</span>
              </a>
            )}

            <Link
              href="/contact"
              className="text-xs font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm hover:shadow"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger & Quick CTA */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="text-xs font-semibold text-brand-background bg-brand-accent px-3 py-1.5 rounded-lg"
            >
              Inquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-11 min-w-11 rounded-lg text-brand-muted transition-colors hover:text-brand-text hover:bg-brand-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer with Accessible Accordions */}
      <div
        id="mobile-navigation"
        hidden={!mobileMenuOpen}
        className="lg:hidden mx-auto max-h-[calc(100dvh-5rem)] max-w-7xl overflow-y-auto rounded-b-2xl border border-t-0 border-brand-border bg-brand-card p-5 shadow-md"
      >
          <div className="space-y-4">
          <div className="space-y-1 text-sm">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-lg ${
                pathname === "/" ? "bg-brand-elevated text-brand-text font-semibold" : "text-brand-secondary"
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-brand-secondary hover:text-brand-text"
                aria-expanded={mobileServicesOpen}
                aria-controls="mobile-services"
              >
                <span>Services (All Disciplines)</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-brand-text" : ""
                  }`}
                />
              </button>
              <div id="mobile-services" hidden={!mobileServicesOpen} className="pl-4 py-1 space-y-1 border-l border-brand-border ml-3 text-xs text-brand-muted">
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/services/${cat.featuredSlug}`}
                      className="block py-1.5 hover:text-brand-text"
                    >
                      {cat.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="block py-1.5 font-semibold text-brand-accent"
                  >
                    Explore all service areas →
                  </Link>
              </div>
            </div>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-brand-secondary hover:text-brand-text"
                aria-expanded={mobileSolutionsOpen}
                aria-controls="mobile-solutions"
              >
                <span>Solutions & Platforms</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSolutionsOpen ? "rotate-180 text-brand-text" : ""
                  }`}
                />
              </button>
              <div id="mobile-solutions" hidden={!mobileSolutionsOpen} className="pl-4 py-1 space-y-1 border-l border-brand-border ml-3 text-xs text-brand-muted">
                  {solutionsData.slice(0, 5).map((sol) => (
                    <Link
                      key={sol.id}
                      href={`/solutions#${sol.slug}`}
                      className="block py-1.5 hover:text-brand-text"
                    >
                      {sol.title}
                    </Link>
                  ))}
                  <Link
                    href="/solutions"
                    className="block py-1.5 font-semibold text-brand-accent"
                  >
                    View All 10 Solutions →
                  </Link>
              </div>
            </div>

            {/* Mobile Industries Accordion */}
            <div>
              <button
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-brand-secondary hover:text-brand-text"
                aria-expanded={mobileIndustriesOpen}
                aria-controls="mobile-industries"
              >
                <span>Target Industries</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileIndustriesOpen ? "rotate-180 text-brand-text" : ""
                  }`}
                />
              </button>
              <div id="mobile-industries" hidden={!mobileIndustriesOpen} className="pl-4 py-1 space-y-1 border-l border-brand-border ml-3 text-xs text-brand-muted">
                  {industriesData.map((ind) => (
                    <Link
                      key={ind.id}
                      href={`/industries/${ind.slug}`}
                      className="block py-1.5 hover:text-brand-text"
                    >
                      {ind.name}
                    </Link>
                  ))}
              </div>
            </div>

            <Link
              href="/work"
              className={`block px-3 py-2 rounded-lg ${
                pathname.startsWith("/work") || pathname.startsWith("/portfolio")
                  ? "bg-brand-elevated text-brand-text font-semibold"
                  : "text-brand-secondary"
              }`}
            >
              Our Work & Case Studies
            </Link>

            <Link
              href="/company"
              className={`block px-3 py-2 rounded-lg ${
                pathname.startsWith("/company") || pathname === "/about"
                  ? "bg-brand-elevated text-brand-text font-semibold"
                  : "text-brand-secondary"
              }`}
            >
              Company & Delivery Model
            </Link>

            <Link
              href="/insights"
              className={`block px-3 py-2 rounded-lg ${
                pathname.startsWith("/insights")
                  ? "bg-brand-elevated text-brand-text font-semibold"
                  : "text-brand-secondary"
              }`}
            >
              Insights & Engineering Articles
            </Link>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-lg ${
                pathname === "/contact"
                  ? "bg-brand-elevated text-brand-text font-semibold"
                  : "text-brand-secondary"
              }`}
            >
              Contact & Project Inquiry
            </Link>
          </div>

          <div className="pt-3 border-t border-brand-border space-y-2">
            <Link
              href="/contact"
              className="w-full py-2.5 text-center text-xs font-semibold rounded-lg bg-brand-accent hover:bg-brand-accent-hover text-brand-background block"
            >
              Start a Project
            </Link>
            {whatsAppUrl && (
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 text-center text-xs font-mono rounded-lg bg-brand-surface border border-brand-border text-brand-secondary flex items-center justify-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-brand-accent" />
                <span>WhatsApp Direct</span>
              </a>
            )}
          </div>
      </div>
      </div>
    </header>
  );
}
