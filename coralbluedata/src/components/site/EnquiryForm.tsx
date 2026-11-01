"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { enquirySchema } from "@/lib/validation/schemas";

const INDUSTRIES = ["Technology", "Healthcare", "Manufacturing", "Financial Services", "Business Services", "Other"];
const VOLUMES = ["Not sure yet", "1,000–5,000", "5,000–20,000", "20,000–100,000", "100,000+"];

type FieldErrors = Partial<Record<string, string[]>>;

export function EnquiryForm({ source = "contact" }: { source?: "contact" | "quote" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrors({});
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""),
      industry: String(form.get("industry") ?? ""),
      volume: String(form.get("volume") ?? ""),
      message: String(form.get("message") ?? ""),
      website: String(form.get("website") ?? ""), // honeypot
      source,
    };

    // Client-side validation using the SAME schema as the server.
    const check = enquirySchema.safeParse(payload);
    if (!check.success) {
      setErrors(check.error.flatten().fieldErrors);
      setStatus("error");
      setMessage("Please fix the highlighted fields.");
      return;
    }

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.fields) setErrors(data.fields);
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setMessage(
        data.emailSent === false
          ? "Thanks — your enquiry was received and saved. Our team will follow up by email."
          : "Thanks — your enquiry was received. We'll be in touch by email shortly.",
      );
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-coral-200 bg-coral-50 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-10 w-10 text-coral-600" />
        <h3 className="mt-4 text-lg font-semibold text-ink-900">Enquiry received</h3>
        <p className="mt-2 text-sm text-mist-700">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
      <Field label="Full name" name="name" required error={errors.name} className="sm:col-span-1" />
      <Field label="Work email" name="email" type="email" required error={errors.email} className="sm:col-span-1" />
      <Field label="Company" name="company" error={errors.company} />
      <Field label="Phone" name="phone" type="tel" error={errors.phone} />

      <Select label="Target industry" name="industry" options={INDUSTRIES} error={errors.industry} />
      <Select label="Estimated volume" name="volume" options={VOLUMES} error={errors.volume} />

      <div className="sm:col-span-2">
        <Label htmlFor="message">What are you trying to reach?</Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1.5 w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30"
          placeholder="Job titles, locations, industries or technologies you want to target…"
        />
        {errors.message && <ErrorText id="message-error">{errors.message[0]}</ErrorText>}
      </div>

      {/* Honeypot — visually hidden, not announced to AT */}
      <div className="hidden" aria-hidden>
        <label>
          Leave this field empty
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        {status === "error" && message && (
          <p className="mb-4 flex items-center gap-2 text-sm text-red-600" role="alert">
            <AlertCircle className="h-4 w-4" /> {message}
          </p>
        )}
        <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            "Submit enquiry"
          )}
        </button>
        <p className="mt-3 text-xs text-mist-500">
          We treat your details as confidential and use them only to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink-800">
      {children}
    </label>
  );
}

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="mt-1 text-xs text-red-600" role="alert">
      {children}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name}>
        {label} {required && <span className="text-coral-600">*</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-1.5 w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30"
      />
      {error && <ErrorText id={`${name}-error`}>{error[0]}</ErrorText>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  error?: string[];
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-xl border border-mist-300 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <ErrorText id={`${name}-error`}>{error[0]}</ErrorText>}
    </div>
  );
}
