import { ChevronUp, ChevronDown } from "lucide-react";
import { Card, FormRow, TextInput, TextArea } from "./ui";
import { ConfirmDeleteButton } from "./ConfirmButton";
import { updateSection, deleteSection, moveSection } from "@/app/admin/actions/pages";
import type { SectionType } from "@/db/schema";

type Section = { id: string; type: SectionType; order: number; isVisible: boolean; data: Record<string, unknown> };

const TYPE_LABEL: Record<string, string> = {
  rich_text: "Rich text",
  feature_grid: "Feature grid",
  stat_band: "Stat band",
  cta: "Call to action",
  steps: "Steps",
  faq: "FAQ",
  media: "Media",
  hero: "Hero",
  logo_strip: "Logo strip",
  testimonial_set: "Testimonials",
};

function asItems(data: Record<string, unknown>, keys: [string, string]): string {
  const items = Array.isArray(data.items) ? (data.items as Record<string, string>[]) : [];
  return items.map((it) => `${it[keys[0]] ?? ""} | ${it[keys[1]] ?? ""}`).join("\n");
}

export function SectionEditorCard({
  section,
  pageId,
  index,
  total,
}: {
  section: Section;
  pageId: string;
  index: number;
  total: number;
}) {
  const save = updateSection.bind(null, section.id, pageId);
  const del = deleteSection.bind(null, section.id, pageId);
  const up = moveSection.bind(null, section.id, pageId, "up");
  const down = moveSection.bind(null, section.id, pageId, "down");
  const d = section.data ?? {};
  const heading = String(d.heading ?? "");

  return (
    <Card className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-mist-100 px-3 py-1 text-xs font-semibold text-ink-700">
          {TYPE_LABEL[section.type] ?? section.type}
        </span>
        <div className="flex items-center gap-1">
          <form action={up}>
            <button disabled={index === 0} className="rounded p-1.5 text-mist-500 hover:bg-mist-100 disabled:opacity-30" aria-label="Move up">
              <ChevronUp className="h-4 w-4" />
            </button>
          </form>
          <form action={down}>
            <button disabled={index === total - 1} className="rounded p-1.5 text-mist-500 hover:bg-mist-100 disabled:opacity-30" aria-label="Move down">
              <ChevronDown className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <form action={save} className="space-y-4">
        {section.type !== "media" && (
          <FormRow label="Heading"><TextInput name="heading" defaultValue={heading} /></FormRow>
        )}

        {(section.type === "rich_text" || section.type === "hero") && (
          <FormRow label="Body" hint="Separate paragraphs with a blank line.">
            <TextArea name="body" rows={6} defaultValue={String(d.body ?? "")} />
          </FormRow>
        )}

        {section.type === "cta" && (
          <>
            <FormRow label="Body"><TextArea name="body" rows={2} defaultValue={String(d.body ?? "")} /></FormRow>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormRow label="Button label"><TextInput name="label" defaultValue={String(d.label ?? "")} /></FormRow>
              <FormRow label="Button link"><TextInput name="href" defaultValue={String(d.href ?? "")} /></FormRow>
            </div>
          </>
        )}

        {(section.type === "feature_grid" || section.type === "steps") && (
          <FormRow label="Items" hint="One per line: Title | Description">
            <TextArea name="items" rows={5} defaultValue={asItems(d, ["title", "detail"])} />
          </FormRow>
        )}

        {section.type === "faq" && (
          <FormRow label="Questions" hint="One per line: Question | Answer">
            <TextArea name="items" rows={5} defaultValue={asItems(d, ["q", "a"])} />
          </FormRow>
        )}

        {section.type === "stat_band" && (
          <FormRow label="Stats" hint="One per line: Value | Label. Only add figures the business has confirmed.">
            <TextArea name="items" rows={4} defaultValue={asItems(d, ["value", "label"])} />
          </FormRow>
        )}

        {section.type === "media" && (
          <>
            <FormRow label="Image URL" hint="Paste a URL from the Media library."><TextInput name="url" defaultValue={String(d.url ?? "")} /></FormRow>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormRow label="Alt text"><TextInput name="alt" defaultValue={String(d.alt ?? "")} /></FormRow>
              <FormRow label="Caption"><TextInput name="caption" defaultValue={String(d.caption ?? "")} /></FormRow>
            </div>
          </>
        )}

        <div className="flex items-center justify-between border-t border-mist-100 pt-4">
          <label className="flex items-center gap-2 text-sm text-ink-700">
            <input type="checkbox" name="isVisible" defaultChecked={section.isVisible} className="h-4 w-4" /> Visible
          </label>
          <div className="flex items-center gap-2">
            <ConfirmDeleteButton action={del} label="Remove" confirmText="Remove this block?" />
            <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-800">
              Save block
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}
