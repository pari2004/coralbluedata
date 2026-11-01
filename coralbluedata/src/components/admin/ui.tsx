import Link from "next/link";
import { cn } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="font-display text-2xl font-semibold text-ink-900">{title}</h1>
        {description && <p className="mt-1 text-sm text-mist-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-mist-200 bg-white shadow-card", className)}>{children}</div>;
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    published: "bg-green-100 text-green-700",
    draft: "bg-amber-100 text-amber-700",
    archived: "bg-mist-200 text-mist-600",
    new: "bg-electric-100 text-electric-700",
    contacted: "bg-amber-100 text-amber-700",
    qualified: "bg-coral-100 text-coral-700",
    closed: "bg-mist-200 text-mist-600",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize",
        map[status] ?? "bg-mist-200 text-mist-600",
      )}
    >
      {status}
    </span>
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-dashed border-mist-300 bg-white p-12 text-center">
      <h3 className="font-semibold text-ink-900">{title}</h3>
      {description && <p className="mx-auto mt-2 max-w-md text-sm text-mist-600">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function AdminButton({
  children,
  href,
  variant = "primary",
  type = "button",
  className,
  ...rest
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = {
    primary: "bg-ink-900 text-white hover:bg-ink-800",
    secondary: "border border-mist-300 bg-white text-ink-800 hover:border-coral-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  }[variant];
  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60",
    styles,
    className,
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}

/* Form field primitives --------------------------------------------------- */

export function FieldLabel({ htmlFor, children }: { htmlFor?: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink-800">
      {children}
    </label>
  );
}

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-lg border border-mist-300 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30",
        props.className,
      )}
    />
  );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "w-full rounded-lg border border-mist-300 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30",
        props.className,
      )}
    />
  );
}

export function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "w-full rounded-lg border border-mist-300 bg-white px-3 py-2.5 text-sm text-ink-900 outline-none transition focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30",
        props.className,
      )}
    />
  );
}

export function FormRow({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      {hint && <p className="mt-0.5 text-xs text-mist-500">{hint}</p>}
      <div className="mt-1.5">{children}</div>
    </div>
  );
}
