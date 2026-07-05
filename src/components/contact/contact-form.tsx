"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const inquiryTypes = [
  { value: "family", label: "I need care support for my family" },
  { value: "professional", label: "I'm interested in joining the team" },
  { value: "partner", label: "Organization/agency partnership" },
  { value: "general", label: "General inquiry" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setSubmitError(
          body?.message ??
            "We couldn't send your message right now. Please try again or email us directly."
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn't send your message right now. Please check your connection and try again."
      );
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-teal mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-navy mb-2">
          Thank You for Reaching Out
        </h3>
        <p className="text-slate-brand">
          We&apos;ve received your message and will respond within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <Label htmlFor="contact-name">Full Name *</Label>
        <Input
          id="contact-name"
          {...register("name")}
          className="mt-1.5"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-terracotta mt-1">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input
            id="contact-email"
            type="email"
            {...register("email")}
            className="mt-1.5"
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-terracotta mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input
            id="contact-phone"
            type="tel"
            {...register("phone")}
            className="mt-1.5"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="contact-inquiry">Inquiry Type *</Label>
        <Select onValueChange={(v: string | null) => { if (v) setValue("inquiryType", v as ContactFormData["inquiryType"]); }}>
          <SelectTrigger id="contact-inquiry" className="mt-1.5 w-full">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {inquiryTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.inquiryType && (
          <p className="text-sm text-terracotta mt-1">
            {errors.inquiryType.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          className="mt-1.5"
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-terracotta mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="contact-consent"
          {...register("consent")}
          className="mt-1 h-4 w-4 accent-teal"
        />
        <Label htmlFor="contact-consent" className="block text-sm text-slate-brand font-normal leading-relaxed">
          I consent to Mapcare Inc collecting and processing my personal
          information as described in the{" "}
          <Link href="/privacy-policy" className="text-teal underline underline-offset-2">
            Privacy Policy
          </Link>
          . *
        </Label>
      </div>
      {errors.consent && (
        <p className="text-sm text-terracotta">{errors.consent.message}</p>
      )}

      {submitError && (
        <p role="alert" className="text-sm text-terracotta">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-teal hover:bg-teal/90 text-warm-white rounded-lg px-8 h-11 font-semibold transition-all duration-200"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
