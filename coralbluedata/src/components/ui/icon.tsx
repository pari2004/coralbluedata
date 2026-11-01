import {
  Contact,
  Cpu,
  Stethoscope,
  PlusCircle,
  Sparkles,
  ShieldCheck,
  Layers,
  Plug,
  Factory,
  Landmark,
  Briefcase,
  Database,
  Building2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps CMS-stored icon name strings to Lucide components, with a safe default.
 * Keeping an explicit allow-list avoids shipping the whole icon set and keeps
 * the CMS icon field predictable.
 */
const MAP: Record<string, LucideIcon> = {
  contact: Contact,
  cpu: Cpu,
  stethoscope: Stethoscope,
  "plus-circle": PlusCircle,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
  layers: Layers,
  plug: Plug,
  factory: Factory,
  landmark: Landmark,
  briefcase: Briefcase,
  database: Database,
  "building-2": Building2,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = MAP[name] ?? Database;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

export { ArrowRight };
export const ICON_NAMES = Object.keys(MAP);
