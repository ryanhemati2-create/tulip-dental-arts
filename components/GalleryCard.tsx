"use client";

import { motion } from "framer-motion";
import { MagnifyingGlassPlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import clsx from "clsx";

export default function GalleryCard({
  label,
  index,
  heightClass,
  onClick,
}: {
  label: string;
  index: number;
  heightClass: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      className={clsx(
        "group relative mb-5 flex w-full break-inside-avoid items-center justify-center overflow-hidden rounded-2xl",
        "bg-tulip-gradient text-left shadow-card transition-shadow hover:shadow-card-hover",
        heightClass
      )}
    >
      {/* REPLACE: insert real lab photos in /public/images/gallery/ */}

      {/* Logo watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none w-2/3 max-w-[190px] opacity-25 transition-transform duration-500 group-hover:scale-110"
      >
        <Image
          src="/images/logo-removebg-preview.png"
          alt=""
          width={367}
          height={155}
          className="h-auto w-full"
        />
      </div>

      {/* Category label */}
      <span className="absolute left-4 top-4 rounded-full bg-tulip-dark/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white/90 backdrop-blur-sm">
        {label}
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-tulip-dark/70 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <MagnifyingGlassPlusIcon className="h-8 w-8 text-tulip-accent" />
        <span className="font-heading text-sm font-semibold uppercase tracking-label text-white">
          View Work
        </span>
      </div>
    </motion.button>
  );
}
