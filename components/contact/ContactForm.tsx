"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { serviceCategories } from "@/lib/data/services";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Custom Software & ERP Solutions",
    budget: "Not sure yet",
    projectDetails: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [submissionError, setSubmissionError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    "Project budget to be discussed",
    "Monthly retainer",
    "Not sure yet",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmissionError("");
    setIsSubmitting(true);

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_API_URL;
      if (!endpoint) {
        throw new Error("Contact email is not configured. Please use the published email address.");
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.errors?.join(" ") || "We couldn't send your inquiry. Please try again.");
      }

      setSubmittedData({ ...formData });
    } catch (error) {
      setSubmissionError(
        error instanceof Error ? error.message : "We couldn't send your inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedData) {
    return (
      <div role="status" aria-live="polite" className="p-8 sm:p-10 rounded-[24px] bg-brand-card border border-brand-border shadow-md shadow-brand-background/20 space-y-6">
        <div className="w-12 h-12 rounded-xl bg-brand-background border border-brand-border  text-brand-text flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold text-brand-text uppercase tracking-wider">
            Inquiry sent
          </span>
          <h3 className="text-2xl font-bold text-brand-text tracking-tight">
            Thanks, {submittedData.name}.
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            The email service accepted your inquiry for delivery to Logicward&apos;s contact mailbox. A receipt confirmation was also sent to {submittedData.email}.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-brand-background border border-brand-border text-xs space-y-2">
          <div className="flex items-center gap-2 text-brand-text font-semibold">
            <Lock className="w-4 h-4 text-brand-text" />
            <span>Your details were sent by email and are not stored in a website database.</span>
          </div>
          <p className="text-brand-muted leading-relaxed">
            The configured mail provider and recipient mailbox handle the submitted information under their own practices.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              setSubmittedData(null);
              setSubmissionError("");
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "Custom Software & ERP Solutions",
                budget: "Not sure yet",
                projectDetails: "",
                consent: false,
              });
            }}
            className="px-5 py-3.5 rounded-lg font-medium text-brand-text bg-brand-background border border-brand-border hover:bg-brand-elevated transition-colors text-sm text-center"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-[24px] bg-brand-card border border-brand-border space-y-6 shadow-md shadow-brand-background/20"
      noValidate
      aria-labelledby="contact-form-heading"
    >
      <div className="space-y-1">
        <h2 id="contact-form-heading" className="text-xl font-bold text-brand-text tracking-tight">
          Project Consultation Request
        </h2>
        <p className="text-xs text-brand-muted">
          Submitting this form emails your inquiry to Logicward and sends an automatic receipt confirmation to your address. Do not include passwords, sensitive personal information, or proprietary material.
        </p>
      </div>

      {submissionError && (
        <p role="alert" className="rounded-lg border border-brand-border bg-brand-background px-4 py-3 text-sm text-brand-accent">
          {submissionError}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Full Name <span className="text-brand-text">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Sarah Jenkins or Tariq Mahmood"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-xl bg-brand-background border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none transition-colors ${
              errors.name
                ? "border-brand-accent focus:border-brand-accent"
                : "border-brand-border focus:border-brand-accent"
            }`}
          />
          {errors.name && (
            <p id="contact-name-error" role="alert" className="text-[11px] text-brand-accent font-mono">{errors.name}</p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Business Email <span className="text-brand-text">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`w-full px-4 py-2.5 rounded-xl bg-brand-background border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none transition-colors ${
              errors.email
                ? "border-brand-accent focus:border-brand-accent"
                : "border-brand-border focus:border-brand-accent"
            }`}
          />
          {errors.email && (
            <p id="contact-email-error" role="alert" className="text-[11px] text-brand-accent font-mono">{errors.email}</p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Phone / WhatsApp <span className="text-brand-muted font-normal normal-case">(Optional)</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+92 300 0000000 or +1 555 0000"
            autoComplete="tel"
            className="w-full px-4 py-2.5 rounded-xl bg-brand-background border border-brand-border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-1.5">
          <label htmlFor="contact-company" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Company / Organization <span className="text-brand-muted font-normal normal-case">(Optional)</span>
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Company or Brand Name"
            className="w-full px-4 py-2.5 rounded-xl bg-brand-background border border-brand-border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none focus:border-brand-accent transition-colors"
          />
        </div>

        {/* Service Required */}
        <div className="space-y-1.5">
          <label htmlFor="contact-service" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Primary Service Required <span className="text-brand-text">*</span>
          </label>
          <select
            id="contact-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-brand-background border border-brand-border text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
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
          <label htmlFor="contact-budget" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
            Target Budget Range <span className="text-brand-muted font-normal normal-case">(Optional)</span>
          </label>
          <select
            id="contact-budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-brand-background border border-brand-border text-sm text-brand-text focus:outline-none focus:border-brand-accent transition-colors"
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
        <label htmlFor="contact-details" className="text-xs font-mono uppercase tracking-[0.72px] text-brand-text block">
          Project Summary & Technical Objectives <span className="text-brand-text">*</span>
        </label>
        <textarea
          id="contact-details"
          rows={4}
          value={formData.projectDetails}
          onChange={(e) =>
            setFormData({ ...formData, projectDetails: e.target.value })
          }
          placeholder="Briefly describe your business, key challenges, target users, any legacy systems you are replacing, and desired launch timeline..."
          required
          aria-invalid={Boolean(errors.projectDetails)}
          aria-describedby={errors.projectDetails ? "contact-details-error" : undefined}
          className={`w-full px-4 py-2.5 rounded-xl bg-brand-background border text-sm text-brand-text placeholder-brand-muted/50 focus:outline-none transition-colors ${
            errors.projectDetails
              ? "border-brand-accent focus:border-brand-accent"
              : "border-brand-border focus:border-brand-accent"
          }`}
        />
        {errors.projectDetails && (
          <p id="contact-details-error" role="alert" className="text-[11px] text-brand-accent font-mono">{errors.projectDetails}</p>
        )}
      </div>

      {/* Consent & Privacy Checkbox */}
      <div className="space-y-1 pt-1">
        <div className="flex items-start gap-2 text-xs text-brand-muted">
          <input
            id="privacy-consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData({ ...formData, consent: e.target.checked })
            }
            className="rounded bg-brand-background  border-brand-border  text-brand-text focus:ring-0 mt-0.5"
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "privacy-consent-error" : undefined}
          />
          <div>
            <label htmlFor="privacy-consent" className="cursor-pointer">
              I have read Logicward&apos;s{" "}
            </label>
            <Link href="/privacy" className="text-brand-text underline hover:text-brand-text">
              Privacy Policy
            </Link>
            <span> and consent to sending these inquiry details by email to Logicward and receiving an automatic email confirmation.</span>
          </div>
        </div>
        {errors.consent && (
          <p id="privacy-consent-error" role="alert" className="text-[11px] text-brand-accent font-mono">{errors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-lg font-semibold text-brand-background bg-brand-accent hover:bg-brand-accent-hover transition-all text-sm shadow-sm shadow-brand-background/20 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? "Sending inquiry..." : "Send project inquiry"}</span>
          <Send className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-brand-muted pt-1">
        <Lock className="w-3 h-3 text-brand-text" />
        <span>Do not include passwords, sensitive personal information, or proprietary material.</span>
      </div>
    </form>
  );
}
