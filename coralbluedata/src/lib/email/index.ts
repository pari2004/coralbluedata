/**
 * Email transport. Honest by design: if SMTP isn't configured, we DO NOT
 * pretend to send. We return `{ sent: false, reason }` and log it, so the
 * caller can surface the truth. Enquiries are always persisted regardless.
 */
import "server-only";
import nodemailer from "nodemailer";
import { env, emailConfigured } from "@/env";

export type SendResult = { sent: boolean; reason?: string };

let transporter: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter | null {
  if (!emailConfigured) return null;
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      secure: env.SMTP_PORT === 465,
      auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    });
  }
  return transporter;
}

export async function sendMail(opts: {
  subject: string;
  text: string;
  html?: string;
  to?: string;
}): Promise<SendResult> {
  const t = getTransport();
  if (!t) {
    const reason = "SMTP not configured — notification skipped (enquiry still saved).";
    console.warn(`[email] ${reason}`);
    return { sent: false, reason };
  }
  try {
    await t.sendMail({
      from: env.MAIL_FROM ?? env.SMTP_USER,
      to: opts.to ?? env.MAIL_TO,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
    });
    return { sent: true };
  } catch (err) {
    const reason = err instanceof Error ? err.message : "unknown email error";
    console.error("[email] send failed:", reason);
    return { sent: false, reason };
  }
}

export { emailConfigured };
