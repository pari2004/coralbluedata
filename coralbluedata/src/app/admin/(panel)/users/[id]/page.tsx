import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { ArrowLeft } from "lucide-react";
import { db } from "@/db";
import { adminUsers } from "@/db/schema";
import { requireOwner } from "@/lib/auth/guard";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { UserFields } from "@/components/admin/UserFields";
import { ConfirmDeleteButton } from "@/components/admin/ConfirmButton";
import { saveUser, deleteUser } from "../../../actions/users";

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  const current = await requireOwner();
  const { id } = await params;
  const u = await db.select().from(adminUsers).where(eq(adminUsers.id, id)).then((r) => r[0]);
  if (!u) notFound();

  const save = saveUser.bind(null, id);
  const del = deleteUser.bind(null, id);
  const isSelf = u.id === current.id;

  return (
    <>
      <Link href="/admin/users" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to users
      </Link>
      <PageHeader title={`Edit: ${u.name}`} description={u.email} />
      <Card className="p-6 md:p-8">
        <AdminForm action={save} submitLabel="Save changes">
          <UserFields d={{ email: u.email, name: u.name, role: u.role }} isEdit />
        </AdminForm>
      </Card>

      {!isSelf && (
        <div className="mt-6">
          <ConfirmDeleteButton
            action={del}
            label="Delete user"
            confirmText="Delete this account? They'll be signed out and lose access. This cannot be undone."
          />
        </div>
      )}
    </>
  );
}
