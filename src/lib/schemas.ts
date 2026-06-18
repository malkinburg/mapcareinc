import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  inquiryType: z.enum(
    ["family", "professional", "partner", "general"],
    { message: "Please select an inquiry type" }
  ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
  consent: z.literal(true, {
    message: "You must consent to our privacy policy to submit this form",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const applicationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  positionId: z.string().min(1, "Please select a position"),
  experience: z
    .string()
    .min(20, "Please describe your relevant experience (at least 20 characters)"),
  consent: z.literal(true, {
    message: "You must consent to our privacy policy to submit this application",
  }),
});

export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
