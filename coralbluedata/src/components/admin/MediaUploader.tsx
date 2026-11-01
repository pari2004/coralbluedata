"use client";

import { useActionState, useRef, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Upload, Loader2, AlertCircle } from "lucide-react";
import { uploadMedia } from "@/app/admin/actions/media";

type Result = { error?: string; ok?: boolean } | void;

export function MediaUploader() {
  const [state, action] = useActionState<Result, FormData>(uploadMedia, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.ok) formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={action} className="rounded-xl border border-dashed border-mist-300 bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
        <div>
          <label htmlFor="file" className="block text-sm font-semibold text-ink-800">
            Image file
          </label>
          <input
            id="file"
            name="file"
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml"
            required
            className="mt-1.5 block w-full text-sm text-mist-600 file:mr-3 file:rounded-lg file:border-0 file:bg-ink-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </div>
        <div>
          <label htmlFor="alt" className="block text-sm font-semibold text-ink-800">
            Alt text
          </label>
          <input
            id="alt"
            name="alt"
            placeholder="Describe the image"
            className="mt-1.5 w-full rounded-lg border border-mist-300 px-3 py-2 text-sm outline-none focus:border-coral-400"
          />
        </div>
        <UploadButton />
      </div>
      {state?.error && (
        <p className="mt-3 flex items-center gap-2 text-sm text-red-600" role="alert">
          <AlertCircle className="h-4 w-4" /> {state.error}
        </p>
      )}
      <p className="mt-3 text-xs text-mist-400">PNG, JPG, WEBP, GIF or SVG · max 8 MB · validated on the server.</p>
    </form>
  );
}

function UploadButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral-500 px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-coral-400 disabled:opacity-60">
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
      {pending ? "Uploading…" : "Upload"}
    </button>
  );
}
