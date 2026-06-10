"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

/**
 * `icon` is a rendered node (e.g. `<SparklesIcon className="h-7 w-7" />`) rather
 * than a component reference. This keeps the component usable from Server
 * Components, since functions can't be serialized across the server→client
 * boundary but rendered elements can.
 */
export default function ServiceCard({
  icon,
  title,
  description,
  href = "/contact",
  cta,
  index = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-t-4 border-tulip-accent bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
    >
      {/* subtle blush wash that grows on hover */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-tulip-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-tulip-light text-tulip-primary transition-colors duration-300 group-hover:bg-tulip-primary group-hover:text-white">
        {icon}
      </span>

      <h3 className="relative mt-6 font-display text-xl font-bold text-tulip-dark">
        {title}
      </h3>
      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-tulip-dark/70">
        {description}
      </p>

      {cta && (
        <Link
          href={href}
          className="relative mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold text-tulip-primary transition-colors hover:text-tulip-accent"
        >
          {cta}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </motion.div>
  );
}
