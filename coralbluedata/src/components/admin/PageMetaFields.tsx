import { FormRow, TextInput, TextArea, SelectInput } from "./ui";
import { CONTENT_STATUS } from "@/db/schema";

export type PageMeta = {
  slug?: string; title?: string; status?: string;
  heroHeading?: string | null; heroSubheading?: string | null;
  ctaLabel?: string | null; ctaHref?: string | null;
  seoTitle?: string | null; seoDescription?: string | null;
};

export function PageMetaFields({ d = {} }: { d?: PageMeta }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Title"><TextInput name="title" required defaultValue={d.title ?? ""} /></FormRow>
        <FormRow label="Slug" hint="URL: /pages/your-slug · use 'home' for the homepage hero.">
          <TextInput name="slug" required defaultValue={d.slug ?? ""} />
        </FormRow>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Hero heading"><TextInput name="heroHeading" defaultValue={d.heroHeading ?? ""} /></FormRow>
        <FormRow label="Hero subheading"><TextInput name="heroSubheading" defaultValue={d.heroSubheading ?? ""} /></FormRow>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="CTA label"><TextInput name="ctaLabel" defaultValue={d.ctaLabel ?? ""} /></FormRow>
        <FormRow label="CTA link"><TextInput name="ctaHref" defaultValue={d.ctaHref ?? ""} /></FormRow>
      </div>
      <FormRow label="Status" hint="Only 'published' pages are visible publicly.">
        <SelectInput name="status" defaultValue={d.status ?? "draft"}>
          {CONTENT_STATUS.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
        </SelectInput>
      </FormRow>
      <div className="grid gap-5 rounded-xl bg-mist-50 p-5">
        <p className="text-sm font-semibold text-ink-800">SEO</p>
        <FormRow label="SEO title"><TextInput name="seoTitle" defaultValue={d.seoTitle ?? ""} /></FormRow>
        <FormRow label="SEO description"><TextArea name="seoDescription" rows={2} defaultValue={d.seoDescription ?? ""} /></FormRow>
      </div>
    </>
  );
}
