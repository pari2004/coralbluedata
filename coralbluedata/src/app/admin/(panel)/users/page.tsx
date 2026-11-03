import Link from "next/link";
import { asc } from "drizzle-orm";
import { Plus, Pencil, AlertCircle } from "lucide-react";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireOwner } from "@/lib/auth/guard";
import { PageHeader, Card, EmptyState, AdminButton } from "@/components/admin/ui";

const ERRORS: Record<string, string> = {
  "self-delete": "You can't delete your own account while signed in.",
  "last-owner": "You can't delete the last owner. Promote another user to owner first.",
};

function RoleBadge({ role }: { role: string }) {
  const cls =
    role === "owner"
      ? "bg-coral-100 text-coral-700"
      : "bg-mist-200 text-mist-600";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${cls}`}>
      {role}
    </span>
  );
}

export default async function UsersListPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const current = await requireOwner();
  const { error } = await searchParams;
  const rows = await db.select().from(adminUsers).orderBy(asc(adminUsers.createdAt));

  return (
    <>
      <PageHeader
        title="Users"
        description="Admin accounts that can sign in at /admin/login. Owners manage users; editors manage content only."
        action={
          <AdminButton href="/admin/users/new">
            <Plus className="h-4 w-4" /> New user
          </AdminButton>
        }
      />

      {error && ERRORS[error] && (
        <p className="mb-6 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" /> {ERRORS[error]}
        </p>
      )}

      {rows.length === 0 ? (
        <EmptyState
          title="No users yet"
          description="Create the first admin with the create-admin script, then manage the rest here."
          action={<AdminButton href="/admin/users/new">Create one</AdminButton>}
        />
      ) : (
        <Card className="divide-y divide-mist-100">
          {rows.map((u) => (
            <Link
              key={u.id}
              href={`/admin/users/${u.id}`}
              className="flex items-center justify-between gap-4 p-4 hover:bg-mist-50"
            >
              <div className="min-w-0">
                <p className="truncate font-medium text-ink-900">
                  {u.name}
                  {u.id === current.id && <span className="ml-2 text-xs font-normal text-mist-500">(you)</span>}
                </p>
                <p className="truncate text-xs text-mist-500">{u.email}</p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden text-xs text-mist-400 sm:inline">
                  {u.lastLoginAt ? `Last login ${u.lastLoginAt.toLocaleDateString()}` : "Never signed in"}
                </span>
                <RoleBadge role={u.role} />
                <Pencil className="h-4 w-4 text-mist-400" />
              </div>
            </Link>
          ))}
        </Card>
      )}
    </>
  );
}
