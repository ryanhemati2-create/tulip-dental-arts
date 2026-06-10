import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Variant = "dark" | "light";
type Size = "sm" | "md" | "lg" | "xl";

/**
 * Real Tulip Dental Arts logo, rendered with next/image.
 * - `dark`  → logo-removebg-preview.png   (for dark backgrounds: navbar, footer)
 * - `light` → logo2-removebg-preview.png  (for light / white backgrounds)
 */
const SOURCES: Record<Variant, { src: string; width: number; height: number }> = {
  dark: { src: "/images/logo-removebg-preview.png", width: 367, height: 155 },
  light: { src: "/images/logo2-removebg-preview.png", width: 177, height: 151 },
};

// Display heights — width scales automatically to preserve aspect ratio.
const HEIGHT: Record<Size, string> = {
  sm: "h-9",
  md: "h-11",
  lg: "h-12",
  xl: "h-14 sm:h-16",
};

export default function Logo({
  variant = "dark",
  size = "md",
  href = "/",
  priority = false,
  className,
}: {
  variant?: Variant;
  size?: Size;
  href?: string | null;
  priority?: boolean;
  className?: string;
}) {
  const { src, width, height } = SOURCES[variant];

  const img = (
    <Image
      src={src}
      alt="Tulip Dental Arts"
      width={width}
      height={height}
      priority={priority}
      quality={90}
      className={clsx("w-auto object-contain", HEIGHT[size], className)}
    />
  );

  if (href === null) return img;

  return (
    <Link
      href={href}
      aria-label="Tulip Dental Arts — home"
      className="inline-flex"
    >
      {img}
    </Link>
  );
}
