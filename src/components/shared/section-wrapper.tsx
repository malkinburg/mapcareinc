import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "warm-white" | "navy";
  compact?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className,
  background = "white",
  compact = false,
}: SectionWrapperProps) {
  const bgClasses = {
    white: "bg-white",
    "warm-white": "bg-warm-white",
    navy: "bg-navy text-warm-white",
  };

  return (
    <section
      id={id}
      className={cn(
        bgClasses[background],
        compact ? "py-10 md:py-12" : "section-spacing",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
