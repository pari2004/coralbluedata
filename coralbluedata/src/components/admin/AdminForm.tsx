"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, Loader2, Save } from "lucide-react";

type ActionResult = { error?: string } | void;

/**
 * Wraps content forms: binds a `(prevState, formData)` server action via
 * useActionState so validation errors returned by the action are shown inline.
 * On success the action redirects, so no success state is needed here.
 */
export function AdminForm({
  action,
  children,
  submitLabel = "Save",
}: {
  action: (prev: ActionResult, formData: FormData) => Promise<ActionResult>;
  children: React.ReactNode;
  submitLabel?: string;
}) {
  const [state, formAction] = useActionState<ActionResult, FormData>(action, undefined);

  return (
    <form action={formAction} className="space-y-6">
      {state?.error && (
        <p className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" /> {state.error}
        </p>
      )}
      {children}
      <div className="flex items-center gap-3 border-t border-mist-200 pt-6">
        <SubmitButton label={submitLabel} />
        <span className="text-xs text-mist-400">Changes save to the database immediately.</span>
      </div>
    </form>
  );
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800 disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
      {pending ? "Saving…" : label}
    </button>
  );
}
