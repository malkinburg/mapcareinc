"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="Mapcare Inc home">
          <Image
            src="/images/logo.svg"
            alt="Mapcare Inc — Staffing & Support"
            width={180}
            height={54}
            className="hidden sm:block"
            priority
          />
          <Image
            src="/images/logo-icon.svg"
            alt="Mapcare Inc"
            width={40}
            height={40}
            className="sm:hidden"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-slate-brand hover:text-teal transition-colors duration-200 rounded-md"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-card-hover border border-soft-gray p-2 min-w-[240px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-brand hover:text-teal hover:bg-warm-white rounded-lg transition-colors duration-150"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-slate-brand hover:text-teal transition-colors duration-200 rounded-md"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/careers"
            className={cn(
              buttonVariants(),
              "bg-amber hover:bg-amber/90 text-navy font-semibold rounded-lg px-5 h-10 transition-all duration-200 hover:-translate-y-0.5 shadow-card hover:shadow-card-hover"
            )}
          >
            Join Our Team
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-navy"
              />
            }
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-warm-white p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-soft-gray">
                <Image
                  src="/images/logo-icon.svg"
                  alt="Mapcare Inc"
                  width={36}
                  height={36}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex-1 p-4 space-y-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full px-3 py-3 text-[15px] font-medium text-slate-brand hover:text-teal rounded-lg transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            servicesOpen && "rotate-180"
                          )}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="ml-3 pl-3 border-l-2 border-teal/20 space-y-0.5">
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-teal"
                          >
                            All Services
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-slate-brand hover:text-teal transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-3 text-[15px] font-medium text-slate-brand hover:text-teal rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="p-4 border-t border-soft-gray">
                <Link
                  href="/careers"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "w-full bg-amber hover:bg-amber/90 text-navy font-semibold rounded-lg h-11"
                  )}
                >
                  Join Our Team
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
