"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

/**
 * Section heading with an optional eyebrow label and a magenta underline
 * accent. Animates up + fades in when scrolled into view.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={clsx(
        centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "eyebrow mb-3",
            light ? "text-tulip-accent" : "text-tulip-mid"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.6rem]",
          light ? "text-white" : "text-tulip-dark"
        )}
      >
        {title}
      </h2>
      <span
        className={clsx(
          "mt-5 block h-1 w-20 rounded-full bg-tulip-accent",
          centered && "mx-auto"
        )}
      />
      {subtitle && (
        <p
          className={clsx(
            "mt-6 text-lg leading-relaxed",
            light ? "text-white/80" : "text-tulip-dark/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
