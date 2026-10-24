import { cn } from "@/lib/utils";

/**
 * shadcn-style button classes, usable from .astro on either a <button> or an
 * <a>. Kept as a function rather than a component so links stay real anchors.
 */

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[0.625rem] text-sm font-medium whitespace-nowrap transition-colors outline-none " +
  "focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4";

const VARIANTS = {
  default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
  outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
} as const;

const SIZES = {
  sm: "h-8 gap-1.5 px-3",
  default: "h-9 px-4",
  lg: "h-11 px-6",
  icon: "size-9",
  "icon-sm": "size-8",
} as const;

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export function buttonClass(
  options: {
    variant?: ButtonVariant;
    size?: ButtonSize;
    class?: string | undefined;
  } = {},
): string {
  const { variant = "default", size = "default", class: className } = options;
  return cn(BASE, VARIANTS[variant], SIZES[size], className);
}
