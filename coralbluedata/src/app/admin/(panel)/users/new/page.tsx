import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { requireOwner } from "@/lib/auth/guard";
import { PageHeader, Card } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { UserFields } from "@/components/admin/UserFields";
import { saveUser } from "../../../actions/users";

export default async function NewUserPage() {
  await requireOwner();
  const action = saveUser.bind(null, null);
  return (
    <>
      <Link href="/admin/users" className="mb-4 inline-flex items-center gap-2 text-sm text-mist-500 hover:text-ink-900">
        <ArrowLeft className="h-4 w-4" /> Back to users
      </Link>
      <PageHeader title="New user" description="They'll be able to sign in at /admin/login with this email and password." />
      <Card className="p-6 md:p-8">
        <AdminForm action={action} submitLabel="Create user">
          <UserFields />
        </AdminForm>
      </Card>
    </>
  );
}
