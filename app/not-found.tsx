import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20 bg-[#091615]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-xl bg-[#0d1f1c] border border-[#1a342e] flex items-center justify-center text-[#dae7de]">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="space-y-2">
          <span className="text-[12px] font-mono uppercase tracking-[0.72px] text-[#94a49a]">
            Error 404
          </span>
          <h1 className="text-3xl font-normal text-[#dae7de] tracking-[-1.08px]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#94a49a] leading-relaxed">
            The page or resource you are looking for has been moved, renamed, or is currently under technical maintenance.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-[6px] text-xs font-mono font-bold uppercase text-[#091615] bg-[#dae7de] hover:bg-white transition-all inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto px-5 py-2.5 rounded-[6px] text-xs font-mono font-bold uppercase text-[#dae7de] bg-[#0d1f1c] border border-[#1a342e] hover:border-[#43634f] transition-colors inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
