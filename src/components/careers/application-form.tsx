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
import { applicationFormSchema, type ApplicationFormData } from "@/lib/schemas";
import { CheckCircle } from "lucide-react";
import { positions } from "@/data/positions";
import Link from "next/link";

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationFormSchema),
  });

  async function onSubmit(data: ApplicationFormData) {
    console.log("Application submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="h-12 w-12 text-teal mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-navy mb-2">
          Application Received
        </h3>
        <p className="text-slate-brand">
          Thank you for your interest in joining the Mapcare team. We&apos;ll
          review your application and be in touch within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="app-name">Full Name *</Label>
          <Input
            id="app-name"
            {...register("name")}
            className="mt-1.5"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "app-name-error" : undefined}
          />
          {errors.name && (
            <p id="app-name-error" className="text-sm text-terracotta mt-1">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="app-email">Email Address *</Label>
          <Input
            id="app-email"
            type="email"
            {...register("email")}
            className="mt-1.5"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "app-email-error" : undefined}
          />
          {errors.email && (
            <p id="app-email-error" className="text-sm text-terracotta mt-1">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="app-phone">Phone Number *</Label>
          <Input
            id="app-phone"
            type="tel"
            {...register("phone")}
            className="mt-1.5"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-sm text-terracotta mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="app-position">Position of Interest *</Label>
          <Select onValueChange={(v: string | null) => { if (v) setValue("positionId", v); }}>
            <SelectTrigger id="app-position" className="mt-1.5">
              <SelectValue placeholder="Select a position" />
            </SelectTrigger>
            <SelectContent>
              {positions.map((pos) => (
                <SelectItem key={pos.id} value={pos.id}>
                  {pos.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.positionId && (
            <p className="text-sm text-terracotta mt-1">
              {errors.positionId.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="app-experience">Relevant Experience *</Label>
        <Textarea
          id="app-experience"
          rows={5}
          placeholder="Tell us about your relevant experience, certifications, and why you're interested in joining Mapcare..."
          {...register("experience")}
          className="mt-1.5"
          aria-invalid={!!errors.experience}
          aria-describedby={
            errors.experience ? "app-exp-error" : undefined
          }
        />
        {errors.experience && (
          <p id="app-exp-error" className="text-sm text-terracotta mt-1">
            {errors.experience.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="app-consent"
          {...register("consent")}
          className="mt-1 h-4 w-4 accent-teal"
        />
        <Label htmlFor="app-consent" className="text-sm text-slate-brand font-normal leading-relaxed">
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-amber hover:bg-amber/90 text-navy rounded-lg px-8 h-11 font-semibold transition-all duration-200"
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
