import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-navy relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-sky-teal blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1 text-sm text-warm-white/50">
              <li>
                <Link
                  href="/"
                  className="hover:text-sky-teal transition-colors"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-1">
                  <ChevronRight className="h-3.5 w-3.5" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-sky-teal transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-warm-white/80">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-warm-white max-w-3xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg text-warm-white/70 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
