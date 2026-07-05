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

// Resume upload constraints, shared by the careers form and API route.
// Netlify functions cap request bodies at ~6MB, so keep the limit below that.
export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_ACCEPT_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const RESUME_ACCEPT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
export const RESUME_TYPE_MESSAGE =
  "Please upload your resume as a PDF or Word document (.pdf, .doc, .docx)";
export const RESUME_SIZE_MESSAGE = "Resume file must be 5MB or smaller";

export function isAcceptedResume(file: { name: string; type: string }) {
  return (
    RESUME_ACCEPT_TYPES.includes(file.type) ||
    RESUME_ACCEPT_EXTENSIONS.some((ext) => file.name.toLowerCase().endsWith(ext))
  );
}
