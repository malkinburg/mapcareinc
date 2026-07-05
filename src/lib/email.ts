import { Resend } from "resend";
import { COMPANY } from "@/lib/constants";
import type { ContactFormData, ApplicationFormData } from "@/lib/schemas";

// Where notifications are delivered. Defaults to the company inbox but can be
// overridden per-environment via env vars (e.g. a dedicated careers inbox).
const TO_DEFAULT = process.env.CONTACT_EMAIL_TO ?? COMPANY.email;
const CAREERS_TO = process.env.CAREERS_EMAIL_TO ?? TO_DEFAULT;

// Must be an address on a domain you've verified in Resend.
const FROM = process.env.CONTACT_EMAIL_FROM ?? "Mapcare Website <noreply@mapcare.ca>";

const INQUIRY_LABELS: Record<ContactFormData["inquiryType"], string> = {
  family: "Family / person seeking support",
  professional: "Care professional",
  partner: "Partner organization",
  general: "General inquiry",
};

/**
 * Sends an email via Resend. In development without an API key, logs the
 * payload instead so the forms can be tested locally. In production a missing
 * key throws, so the form surfaces an error rather than silently losing a
 * submission.
 */
async function send(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not configured");
    }
    console.warn("[email] RESEND_API_KEY not set — not sending. Payload:", {
      ...opts,
      attachments: opts.attachments?.map((a) => `${a.filename} (${a.content.length} bytes)`),
    });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM,
    to: opts.to,
    replyTo: opts.replyTo,
    subject: opts.subject,
    html: opts.html,
    attachments: opts.attachments,
  });

  if (error) {
    throw new Error(`Resend failed: ${error.message}`);
  }
}

function row(label: string, value: string) {
  return `<tr><td style="padding:4px 12px 4px 0;font-weight:600;vertical-align:top">${label}</td><td style="padding:4px 0">${value}</td></tr>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactEmail(data: ContactFormData) {
  const html = `
    <h2>New contact form submission</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${row("Name", escapeHtml(data.name))}
      ${row("Email", escapeHtml(data.email))}
      ${row("Phone", data.phone ? escapeHtml(data.phone) : "—")}
      ${row("Inquiry type", INQUIRY_LABELS[data.inquiryType])}
      ${row("Message", escapeHtml(data.message).replace(/\n/g, "<br>"))}
    </table>`;

  await send({
    to: TO_DEFAULT,
    subject: `New contact inquiry from ${data.name}`,
    html,
    replyTo: data.email,
  });
}

export async function sendApplicationEmail(
  data: ApplicationFormData,
  positionTitle?: string,
  resume?: { filename: string; content: Buffer }
) {
  const html = `
    <h2>New career application</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${row("Name", escapeHtml(data.name))}
      ${row("Email", escapeHtml(data.email))}
      ${row("Phone", escapeHtml(data.phone))}
      ${row("Position", escapeHtml(positionTitle ?? data.positionId))}
      ${row("Experience", escapeHtml(data.experience).replace(/\n/g, "<br>"))}
      ${row("Resume", resume ? escapeHtml(resume.filename) + " (attached)" : "—")}
    </table>`;

  await send({
    to: CAREERS_TO,
    subject: `New application from ${data.name}${positionTitle ? ` — ${positionTitle}` : ""}`,
    html,
    replyTo: data.email,
    attachments: resume ? [resume] : undefined,
  });
}
