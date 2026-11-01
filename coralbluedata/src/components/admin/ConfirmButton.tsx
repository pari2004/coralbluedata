"use client";

import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

/**
 * Delete button with an explicit confirmation step to guard destructive
 * actions. Wraps a bound server action passed as `action`.
 */
export function ConfirmDeleteButton({
  action,
  label = "Delete",
  confirmText = "Are you sure? This cannot be undone.",
}: {
  action: () => Promise<void>;
  label?: string;
  confirmText?: string;
}) {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-100"
      >
        <Trash2 className="h-4 w-4" /> {label}
      </button>
    );
  }

  return (
    <form action={action} className="inline-flex items-center gap-2 rounded-lg bg-red-50 p-1">
      <span className="px-2 text-xs text-red-700">{confirmText}</span>
      <DeleteSubmit />
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="rounded-lg px-3 py-1.5 text-sm font-medium text-mist-600 hover:text-ink-900"
      >
        Cancel
      </button>
    </form>
  );
}

function DeleteSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
    >
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />} Confirm
    </button>
  );
}
