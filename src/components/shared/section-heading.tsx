import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 lg:mb-14",
        align === "center" && "text-center",
        align === "center" && "max-w-2xl mx-auto"
      )}
    >
      {label && (
        <p
          className={cn(
            "text-[13px] font-medium uppercase tracking-[3px] mb-3",
            dark ? "text-sky-teal" : "text-muted-teal"
          )}
        >
          {label}
        </p>
      )}
      <h2 className={cn(dark && "text-warm-white")}>{title}</h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base lg:text-lg leading-relaxed",
            dark ? "text-warm-white/70" : "text-slate-brand"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
