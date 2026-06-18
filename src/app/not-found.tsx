"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-warm-white">
      <div className="text-center px-4 py-20">
        <p className="text-6xl font-bold text-teal mb-4">404</p>
        <h1 className="text-2xl font-semibold text-navy mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-brand mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-teal hover:bg-teal/90 text-warm-white rounded-lg px-8 font-semibold"
            )}
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-lg px-8 font-semibold"
            )}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
