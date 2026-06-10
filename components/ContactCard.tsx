import type { ComponentType, ReactNode } from "react";

type IconType = ComponentType<{ className?: string }>;

/**
 * Icon + label + value row used on the Contact page and elsewhere.
 * Renders as a link when `href` is provided.
 */
export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: IconType;
  label: string;
  value: ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 rounded-xl border border-tulip-light bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-tulip-accent/40 hover:shadow-card-hover">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-tulip-light text-tulip-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <p className="eyebrow text-tulip-mid">{label}</p>
        <div className="mt-1 font-heading text-base font-medium text-tulip-dark">
          {value}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {inner}
      </a>
    );
  }
  return inner;
}
