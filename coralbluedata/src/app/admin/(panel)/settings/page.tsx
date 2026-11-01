import { CheckCircle2 } from "lucide-react";
import { getSettings } from "@/lib/content";
import { PageHeader, Card, FormRow, TextInput, TextArea } from "@/components/admin/ui";
import { AdminForm } from "@/components/admin/AdminForm";
import { saveSettings } from "../../actions/content";

const SOCIAL_SLOTS = ["LinkedIn", "X", "Facebook", "YouTube"];

export default async function SettingsPage({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  const sp = await searchParams;
  const s = await getSettings();
  const existingSocial = s?.socialLinks ?? [];
  const socialFor = (platform: string) => existingSocial.find((l) => l.platform === platform)?.url ?? "";

  return (
    <>
      <PageHeader title="Site settings" description="Company info, contact details, default SEO and calls to action." />
      {sp.saved && (
        <p className="mb-5 flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle2 className="h-4 w-4" /> Settings saved.
        </p>
      )}
      <Card className="p-6 md:p-8">
        <AdminForm action={saveSettings} submitLabel="Save settings">
          <div className="grid gap-5 sm:grid-cols-2">
            <FormRow label="Company name"><TextInput name="companyName" required defaultValue={s?.companyName ?? "Coral Blue Data"} /></FormRow>
            <FormRow label="Footer tagline"><TextInput name="footerTagline" defaultValue={s?.footerTagline ?? ""} /></FormRow>
          </div>

          <div className="rounded-xl bg-mist-50 p-5">
            <p className="text-sm font-semibold text-ink-800">Contact details</p>
            <p className="mb-4 text-xs text-mist-500">Left blank, these won&apos;t render on the site (no placeholder/fake details are shown).</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormRow label="Contact email"><TextInput name="contactEmail" type="email" defaultValue={s?.contactEmail ?? ""} /></FormRow>
              <FormRow label="Contact phone"><TextInput name="contactPhone" defaultValue={s?.contactPhone ?? ""} /></FormRow>
            </div>
            <div className="mt-5">
              <FormRow label="Address" hint="Multi-line allowed."><TextArea name="contactAddress" rows={2} defaultValue={s?.contactAddress ?? ""} /></FormRow>
            </div>
          </div>

          <div className="rounded-xl bg-mist-50 p-5">
            <p className="text-sm font-semibold text-ink-800">Social links</p>
            <p className="mb-4 text-xs text-mist-500">Only rows with a URL are shown in the footer.</p>
            <div className="space-y-3">
              {SOCIAL_SLOTS.map((platform) => (
                <div key={platform} className="grid grid-cols-[120px_1fr] gap-3">
                  <input type="hidden" name="socialPlatform" value={platform} />
                  <span className="flex items-center text-sm font-medium text-ink-700">{platform}</span>
                  <TextInput name="socialUrl" type="url" placeholder="https://…" defaultValue={socialFor(platform)} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormRow label="Primary CTA label"><TextInput name="primaryCtaLabel" required defaultValue={s?.primaryCtaLabel ?? "Request a Quote"} /></FormRow>
            <FormRow label="Primary CTA link"><TextInput name="primaryCtaHref" required defaultValue={s?.primaryCtaHref ?? "/request-a-quote"} /></FormRow>
            <FormRow label="Secondary CTA label"><TextInput name="secondaryCtaLabel" required defaultValue={s?.secondaryCtaLabel ?? "Explore Solutions"} /></FormRow>
            <FormRow label="Secondary CTA link"><TextInput name="secondaryCtaHref" required defaultValue={s?.secondaryCtaHref ?? "/solutions"} /></FormRow>
          </div>

          <div className="rounded-xl bg-mist-50 p-5">
            <p className="text-sm font-semibold text-ink-800">Default SEO</p>
            <div className="mt-4 space-y-5">
              <FormRow label="Default SEO title"><TextInput name="defaultSeoTitle" defaultValue={s?.defaultSeoTitle ?? ""} /></FormRow>
              <FormRow label="Default SEO description"><TextArea name="defaultSeoDescription" rows={2} defaultValue={s?.defaultSeoDescription ?? ""} /></FormRow>
            </div>
          </div>
        </AdminForm>
      </Card>
    </>
  );
}
