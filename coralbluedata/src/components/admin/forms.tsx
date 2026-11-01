import { FormRow, TextInput, TextArea, SelectInput } from "./ui";
import { CONTENT_STATUS } from "@/db/schema";
import { ICON_NAMES } from "@/components/ui/icon";

/** Shared status dropdown. */
function StatusSelect({ value }: { value?: string }) {
  return (
    <FormRow label="Status" hint="Only 'published' content appears on the public site.">
      <SelectInput name="status" defaultValue={value ?? "draft"}>
        {CONTENT_STATUS.map((s) => (
          <option key={s} value={s} className="capitalize">
            {s}
          </option>
        ))}
      </SelectInput>
    </FormRow>
  );
}

function IconSelect({ value }: { value?: string }) {
  return (
    <FormRow label="Icon">
      <SelectInput name="icon" defaultValue={value ?? "database"}>
        {ICON_NAMES.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </SelectInput>
    </FormRow>
  );
}

function SeoFields({ title, description }: { title?: string | null; description?: string | null }) {
  return (
    <div className="grid gap-5 rounded-xl bg-mist-50 p-5">
      <p className="text-sm font-semibold text-ink-800">SEO</p>
      <FormRow label="SEO title" hint="Shown in search results & browser tab. Falls back to the title.">
        <TextInput name="seoTitle" defaultValue={title ?? ""} maxLength={200} />
      </FormRow>
      <FormRow label="SEO description" hint="~155 characters.">
        <TextArea name="seoDescription" defaultValue={description ?? ""} rows={2} maxLength={320} />
      </FormRow>
    </div>
  );
}

type ServiceDefaults = {
  slug?: string; title?: string; summary?: string; icon?: string;
  heroHeading?: string | null; heroSubheading?: string | null; body?: string;
  benefits?: string[]; useCases?: string[]; workflow?: { title: string; detail: string }[];
  seoTitle?: string | null; seoDescription?: string | null; status?: string; order?: number;
};

export function ServiceFields({ d = {} }: { d?: ServiceDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Title"><TextInput name="title" required defaultValue={d.title ?? ""} /></FormRow>
        <FormRow label="Slug" hint="URL: /solutions/your-slug"><TextInput name="slug" required defaultValue={d.slug ?? ""} placeholder="data-cleansing" /></FormRow>
      </div>
      <FormRow label="Summary" hint="One or two sentences for cards and listings.">
        <TextArea name="summary" rows={2} defaultValue={d.summary ?? ""} />
      </FormRow>
      <div className="grid gap-5 sm:grid-cols-2">
        <IconSelect value={d.icon} />
        <FormRow label="Order" hint="Lower numbers appear first."><TextInput name="order" type="number" defaultValue={String(d.order ?? 0)} /></FormRow>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Hero heading"><TextInput name="heroHeading" defaultValue={d.heroHeading ?? ""} /></FormRow>
        <FormRow label="Hero subheading"><TextInput name="heroSubheading" defaultValue={d.heroSubheading ?? ""} /></FormRow>
      </div>
      <FormRow label="Body" hint="Separate paragraphs with a blank line.">
        <TextArea name="body" rows={8} defaultValue={d.body ?? ""} />
      </FormRow>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Benefits" hint="One per line."><TextArea name="benefits" rows={5} defaultValue={(d.benefits ?? []).join("\n")} /></FormRow>
        <FormRow label="Use cases" hint="One per line."><TextArea name="useCases" rows={5} defaultValue={(d.useCases ?? []).join("\n")} /></FormRow>
      </div>
      <FormRow label="Workflow steps" hint="One per line, format: Title | Description">
        <TextArea name="workflow" rows={4} defaultValue={(d.workflow ?? []).map((w) => `${w.title} | ${w.detail}`).join("\n")} />
      </FormRow>
      <StatusSelect value={d.status} />
      <SeoFields title={d.seoTitle} description={d.seoDescription} />
    </>
  );
}

type IndustryDefaults = {
  slug?: string; title?: string; summary?: string; body?: string; icon?: string;
  seoTitle?: string | null; seoDescription?: string | null; status?: string; order?: number;
};
export function IndustryFields({ d = {} }: { d?: IndustryDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Title"><TextInput name="title" required defaultValue={d.title ?? ""} /></FormRow>
        <FormRow label="Slug" hint="URL: /industries/your-slug"><TextInput name="slug" required defaultValue={d.slug ?? ""} /></FormRow>
      </div>
      <FormRow label="Summary"><TextArea name="summary" rows={2} defaultValue={d.summary ?? ""} /></FormRow>
      <div className="grid gap-5 sm:grid-cols-2">
        <IconSelect value={d.icon} />
        <FormRow label="Order"><TextInput name="order" type="number" defaultValue={String(d.order ?? 0)} /></FormRow>
      </div>
      <FormRow label="Body" hint="Separate paragraphs with a blank line."><TextArea name="body" rows={8} defaultValue={d.body ?? ""} /></FormRow>
      <StatusSelect value={d.status} />
      <SeoFields title={d.seoTitle} description={d.seoDescription} />
    </>
  );
}

type ArticleDefaults = {
  slug?: string; title?: string; summary?: string; body?: string;
  seoTitle?: string | null; seoDescription?: string | null; status?: string;
};
export function ArticleFields({ d = {} }: { d?: ArticleDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Title"><TextInput name="title" required defaultValue={d.title ?? ""} /></FormRow>
        <FormRow label="Slug" hint="URL: /resources/your-slug"><TextInput name="slug" required defaultValue={d.slug ?? ""} /></FormRow>
      </div>
      <FormRow label="Summary" hint="Shown in listings and as the intro."><TextArea name="summary" rows={2} defaultValue={d.summary ?? ""} /></FormRow>
      <FormRow label="Body" hint="Separate paragraphs with a blank line."><TextArea name="body" rows={12} defaultValue={d.body ?? ""} /></FormRow>
      <StatusSelect value={d.status} />
      <SeoFields title={d.seoTitle} description={d.seoDescription} />
    </>
  );
}

type CaseStudyDefaults = {
  slug?: string; title?: string; client?: string | null; summary?: string;
  challenge?: string; solution?: string; outcomes?: string[]; verified?: boolean; status?: string; order?: number;
};
export function CaseStudyFields({ d = {} }: { d?: CaseStudyDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Title"><TextInput name="title" required defaultValue={d.title ?? ""} /></FormRow>
        <FormRow label="Slug"><TextInput name="slug" required defaultValue={d.slug ?? ""} /></FormRow>
      </div>
      <FormRow label="Client" hint="Leave blank if not approved to name the client."><TextInput name="client" defaultValue={d.client ?? ""} /></FormRow>
      <FormRow label="Summary"><TextArea name="summary" rows={2} defaultValue={d.summary ?? ""} /></FormRow>
      <FormRow label="Challenge"><TextArea name="challenge" rows={5} defaultValue={d.challenge ?? ""} /></FormRow>
      <FormRow label="Our approach"><TextArea name="solution" rows={5} defaultValue={d.solution ?? ""} /></FormRow>
      <FormRow label="Outcomes" hint="One per line."><TextArea name="outcomes" rows={4} defaultValue={(d.outcomes ?? []).join("\n")} /></FormRow>
      <label className="flex items-center gap-3 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
        <input type="checkbox" name="verified" defaultChecked={d.verified} className="h-4 w-4" />
        Verified & approved by the client (required before publishing)
      </label>
      <FormRow label="Order"><TextInput name="order" type="number" defaultValue={String(d.order ?? 0)} /></FormRow>
      <StatusSelect value={d.status} />
    </>
  );
}

type TestimonialDefaults = {
  author?: string; role?: string | null; company?: string | null; quote?: string; verified?: boolean; status?: string; order?: number;
};
export function TestimonialFields({ d = {} }: { d?: TestimonialDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-3">
        <FormRow label="Author"><TextInput name="author" required defaultValue={d.author ?? ""} /></FormRow>
        <FormRow label="Role"><TextInput name="role" defaultValue={d.role ?? ""} /></FormRow>
        <FormRow label="Company"><TextInput name="company" defaultValue={d.company ?? ""} /></FormRow>
      </div>
      <FormRow label="Quote"><TextArea name="quote" rows={4} required defaultValue={d.quote ?? ""} /></FormRow>
      <label className="flex items-center gap-3 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
        <input type="checkbox" name="verified" defaultChecked={d.verified} className="h-4 w-4" />
        Verified & approved for use (required before publishing)
      </label>
      <FormRow label="Order"><TextInput name="order" type="number" defaultValue={String(d.order ?? 0)} /></FormRow>
      <StatusSelect value={d.status} />
    </>
  );
}

type CoverageDefaults = {
  region?: string; country?: string; detail?: string; verified?: boolean; status?: string; order?: number;
};
export function CoverageFields({ d = {} }: { d?: CoverageDefaults }) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormRow label="Region" hint="e.g. North America, EMEA"><TextInput name="region" required defaultValue={d.region ?? ""} /></FormRow>
        <FormRow label="Country / area" hint="Optional; defaults to region."><TextInput name="country" defaultValue={d.country ?? ""} /></FormRow>
      </div>
      <FormRow label="Detail"><TextArea name="detail" rows={3} defaultValue={d.detail ?? ""} /></FormRow>
      <label className="flex items-center gap-3 rounded-lg bg-amber-50 p-4 text-sm text-amber-800">
        <input type="checkbox" name="verified" defaultChecked={d.verified} className="h-4 w-4" />
        Verified coverage (required before publishing — we don&apos;t claim unverified coverage)
      </label>
      <FormRow label="Order"><TextInput name="order" type="number" defaultValue={String(d.order ?? 0)} /></FormRow>
      <StatusSelect value={d.status} />
    </>
  );
}
