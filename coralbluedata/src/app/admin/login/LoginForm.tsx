"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { AlertCircle, Loader2 } from "lucide-react";
import { loginAction, type LoginState } from "../actions/auth";

export function LoginForm() {
  const [state, formAction] = useActionState<LoginState, FormData>(loginAction, {});

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-mist-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="username"
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-ink-950/50 px-3 py-2.5 text-sm text-white outline-none focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-mist-200">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-lg border border-white/10 bg-ink-950/50 px-3 py-2.5 text-sm text-white outline-none focus:border-coral-400 focus:ring-2 focus:ring-coral-500/30"
        />
      </div>

      {state.error && (
        <p className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-300" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" /> {state.error}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn-primary w-full">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Signing in…
        </>
      ) : (
        "Sign in"
      )}
    </button>
  );
}
