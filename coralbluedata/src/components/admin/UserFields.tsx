"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormRow, TextInput, SelectInput } from "./ui";

type UserDefaults = { email?: string; name?: string; role?: string };

/**
 * Create/edit fields for an admin user. On edit (`isEdit`) the password is
 * optional — leaving it blank keeps the current password. Includes a
 * show/hide toggle for the password field.
 */
export function UserFields({ d = {}, isEdit = false }: { d?: UserDefaults; isEdit?: boolean }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Name">
          <TextInput name="name" required defaultValue={d.name ?? ""} autoComplete="name" />
        </FormRow>
        <FormRow label="Email" hint="Used to sign in at /admin/login.">
          <TextInput name="email" type="email" required defaultValue={d.email ?? ""} autoComplete="off" />
        </FormRow>
      </div>

      <FormRow label="Role" hint="Owners can manage users & settings. Editors can manage content only.">
        <SelectInput name="role" defaultValue={d.role ?? "editor"}>
          <option value="editor">Editor — content only</option>
          <option value="owner">Owner — full access incl. users</option>
        </SelectInput>
      </FormRow>

      <FormRow
        label={isEdit ? "New password" : "Password"}
        hint={
          isEdit
            ? "Leave blank to keep the current password. Otherwise: min 12 chars, with an uppercase letter, a lowercase letter and a number."
            : "Min 12 characters, with an uppercase letter, a lowercase letter and a number."
        }
      >
        <div className="relative">
          <TextInput
            name="password"
            type={show ? "text" : "password"}
            required={!isEdit}
            minLength={12}
            autoComplete="new-password"
            placeholder={isEdit ? "••••••••••••" : ""}
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-mist-400 transition-colors hover:text-ink-900 focus:outline-none focus-visible:text-ink-900"
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </FormRow>
    </>
  );
}
