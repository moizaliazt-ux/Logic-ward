"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Loader2,
  Lock,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { serviceCategories } from "@/lib/data/services";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Software & ERP Solutions",
    budget: "$2,500 - $7,500 (or PKR equivalent)",
    projectDetails: "",
    consent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  const budgetOptions = [
    "Under $2,500 / PKR 700k (MVP or Focused Module)",
    "$2,500 - $7,500 / PKR 700k - 2M (Standard Web/App/System)",
    "$7,500 - $15,000 / PKR 2M - 4.5M (Enterprise Multi-Module)",
    "$15,000+ / PKR 4.5M+ (Full Enterprise Infrastructure)",
    "Monthly Dedicated Engineering Retainer",
    "Undecided / Requires Technical Scoping",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please provide your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = "Contact phone or WhatsApp number is required.";
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails =
        "Please provide at least 15 characters describing your project requirements.";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy to proceed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate safe processing time
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 800);
  };

  const generateWhatsAppMessage = () => {
    if (!submittedData) return "";
    const text = `Hello Logicward, I am submitting a project inquiry:
- Name: ${submittedData.name}
- Email: ${submittedData.email}
- Phone/WhatsApp: ${submittedData.phone}
- Company: ${submittedData.company || "Not specified"}
- Service Required: ${submittedData.service}
- Budget Range: ${submittedData.budget}
- Project Details: ${submittedData.projectDetails}`;
    return encodeURIComponent(text);
  };

  if (submittedData) {
    return (
      <div className="p-8 sm:p-10 rounded-[24px] bg-[#0d1f1c] border border-[#2d584d] shadow-xl shadow-black/50 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-[#091615] border border-[#1a342e] text-[#dae7de] flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold text-[#dae7de] uppercase tracking-wider">
            Inquiry Validated Successfully
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Thank you, {submittedData.name}.
          </h3>
          <p className="text-sm text-[#94a49a] leading-relaxed">
            Your project details have been captured and validated according to our technical inquiry schema.
          </p>
        </div>

        {/* Integration Status Notice per Brief */}
        <div className="p-4 rounded-xl bg-[#091615] border border-[#1a342e] text-xs space-y-2">
          <div className="flex items-center gap-2 text-[#dae7de] font-semibold">
            <Lock className="w-4 h-4 text-[#dae7de]" />
            <span>Pending Backend SMTP Configuration Notice:</span>
          </div>
          <p className="text-[#94a49a] leading-relaxed">
            Per development brief guidelines, backend email transport is awaiting production SMTP credentials. To ensure your inquiry reaches our engineering team immediately, use the one-click WhatsApp button below to transmit your pre-filled inquiry directly to our desk.
          </p>
        </div>

        {/* 1-Click WhatsApp Direct Submission */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${generateWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-lg font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-all text-sm text-center shadow-lg shadow-black/40 inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#091615]" />
            <span>Send Pre-Filled Brief on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setSubmittedData(null);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "Custom Software & ERP Solutions",
                budget: "$2,500 - $7,500 (or PKR equivalent)",
                projectDetails: "",
                consent: true,
              });
            }}
            className="px-5 py-3.5 rounded-lg font-medium text-[#dae7de] bg-[#091615] border border-[#1a342e] hover:bg-[#132b27] transition-colors text-sm text-center"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-[24px] bg-[#0d1f1c] border border-[#1a342e] space-y-6 shadow-xl shadow-black/40"
      noValidate
    >
      <div className="space-y-1">
        <h2 className="text-xl font-bold text-white tracking-tight">
          Project Consultation Request
        </h2>
        <p className="text-xs text-[#94a49a]">
          Complete the form below. Initial architectural feedback is provided within 1 business day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Full Name <span className="text-[#dae7de]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Sarah Jenkins or Tariq Mahmood"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#091615] border text-sm text-[#dae7de] placeholder-[#94a49a]/50 focus:outline-none transition-colors ${
              errors.name
                ? "border-rose-500 focus:border-rose-500"
                : "border-[#1a342e] focus:border-[#2d584d]"
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-rose-400 font-mono">{errors.name}</p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Business Email <span className="text-[#dae7de]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#091615] border text-sm text-[#dae7de] placeholder-[#94a49a]/50 focus:outline-none transition-colors ${
              errors.email
                ? "border-rose-500 focus:border-rose-500"
                : "border-[#1a342e] focus:border-[#2d584d]"
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-rose-400 font-mono">{errors.email}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Phone / WhatsApp <span className="text-[#dae7de]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+92 300 0000000 or +1 555 0000"
            className={`w-full px-4 py-2.5 rounded-xl bg-[#091615] border text-sm text-[#dae7de] placeholder-[#94a49a]/50 focus:outline-none transition-colors ${
              errors.phone
                ? "border-rose-500 focus:border-rose-500"
                : "border-[#1a342e] focus:border-[#2d584d]"
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-rose-400 font-mono">{errors.phone}</p>
          )}
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Company / Organization <span className="text-[#94a49a] font-normal normal-case">(Optional)</span>
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Company or Brand Name"
            className="w-full px-4 py-2.5 rounded-xl bg-[#091615] border border-[#1a342e] text-sm text-[#dae7de] placeholder-[#94a49a]/50 focus:outline-none focus:border-[#2d584d] transition-colors"
          />
        </div>

        {/* Service Required */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Primary Service Required <span className="text-[#dae7de]">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#091615] border border-[#1a342e] text-sm text-[#dae7de] focus:outline-none focus:border-[#2d584d] transition-colors"
          >
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
            <option value="Enterprise ERP or Multi-Warehouse System">
              Enterprise ERP or Multi-Warehouse System
            </option>
            <option value="Mobile App Development (iOS & Android)">
              Mobile App Development (iOS & Android)
            </option>
            <option value="AI Workflow & Document Automation">
              AI Workflow & Document Automation
            </option>
            <option value="Office IT, Network & Firewall Setup">
              Office IT, Network & Firewall Setup
            </option>
            <option value="Full Digital Transformation (Multi-Service)">
              Full Digital Transformation (Multi-Service)
            </option>
          </select>
        </div>

        {/* Budget Range */}
        <div className="space-y-1.5">
          <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
            Target Budget Range <span className="text-[#94a49a] font-normal normal-case">(Optional)</span>
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#091615] border border-[#1a342e] text-sm text-[#dae7de] focus:outline-none focus:border-[#2d584d] transition-colors"
          >
            {budgetOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-mono uppercase tracking-[0.72px] text-[#dae7de] block">
          Project Summary & Technical Objectives <span className="text-[#dae7de]">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.projectDetails}
          onChange={(e) =>
            setFormData({ ...formData, projectDetails: e.target.value })
          }
          placeholder="Briefly describe your business, key challenges, target users, any legacy systems you are replacing, and desired launch timeline..."
          className={`w-full px-4 py-2.5 rounded-xl bg-[#091615] border text-sm text-[#dae7de] placeholder-[#94a49a]/50 focus:outline-none transition-colors ${
            errors.projectDetails
              ? "border-rose-500 focus:border-rose-500"
              : "border-[#1a342e] focus:border-[#2d584d]"
          }`}
        />
        {errors.projectDetails && (
          <p className="text-[11px] text-rose-400 font-mono">{errors.projectDetails}</p>
        )}
      </div>

      {/* Consent & Privacy Checkbox */}
      <div className="space-y-1 pt-1">
        <label className="flex items-start gap-2 text-xs text-[#94a49a] cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="rounded bg-[#091615] border-[#1a342e] text-[#dae7de] focus:ring-0 mt-0.5"
          />
          <span>
            I agree to the confidential handling of my project details in accordance with Logicward&apos;s{" "}
            <a href="/privacy" className="text-[#dae7de] underline hover:text-white">
              Privacy Policy
            </a>
            . We never sell or share client contact information.
          </span>
        </label>
        {errors.consent && (
          <p className="text-[11px] text-rose-400 font-mono">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-lg font-semibold text-[#091615] bg-[#dae7de] hover:bg-white transition-all text-sm shadow-lg shadow-black/40 inline-flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validating Project Details...</span>
            </>
          ) : (
            <>
              <span>Submit Project Consultation Request</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-[#94a49a] pt-1">
        <Lock className="w-3 h-3 text-[#dae7de]" />
        <span>Bilateral Non-Disclosure Agreement (NDA) available upon request.</span>
      </div>
    </form>
  );
}
