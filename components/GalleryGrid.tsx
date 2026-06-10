"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import GalleryCard from "./GalleryCard";

const FILTERS = [
  "All",
  "Crowns",
  "Bridges",
  "Veneers",
  "Dentures",
  "Implants",
] as const;
type Filter = (typeof FILTERS)[number];

type Item = { id: number; category: Exclude<Filter, "All">; height: string };

// 12 placeholder cards. REPLACE: insert real lab photos in /public/images/gallery/
const HEIGHTS = ["h-64", "h-80", "h-72", "h-96", "h-72", "h-64"];
const CATEGORIES: Item["category"][] = [
  "Crowns",
  "Veneers",
  "Bridges",
  "Implants",
  "Dentures",
  "Crowns",
  "Veneers",
  "Bridges",
  "Implants",
  "Dentures",
  "Crowns",
  "Veneers",
];

const ITEMS: Item[] = CATEGORIES.map((category, i) => ({
  id: i + 1,
  category,
  height: HEIGHTS[i % HEIGHTS.length],
}));

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? ITEMS : ITEMS.filter((i) => i.category === filter)),
    [filter]
  );

  // Reset the lightbox whenever the filter changes.
  useEffect(() => {
    setActive(null);
  }, [filter]);

  // Keyboard controls for the lightbox.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((a) => (a === null ? a : (a + 1) % visible.length));
      if (e.key === "ArrowLeft")
        setActive((a) =>
          a === null ? a : (a - 1 + visible.length) % visible.length
        );
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, visible.length]);

  const current = active === null ? null : visible[active];

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={clsx(
              "rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all duration-300",
              filter === f
                ? "bg-tulip-accent text-white shadow-glow"
                : "border border-tulip-primary/20 bg-white text-tulip-primary hover:border-tulip-accent hover:text-tulip-accent"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Masonry grid (CSS columns) */}
      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {visible.map((item, index) => (
            <GalleryCard
              key={item.id}
              label={item.category}
              index={index}
              heightClass={item.height}
              onClick={() => setActive(index)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-tulip-dark/90 p-4 backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 text-white/80 transition-colors hover:text-tulip-accent"
              aria-label="Close"
            >
              <XMarkIcon className="h-9 w-9" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) =>
                  a === null ? a : (a - 1 + visible.length) % visible.length
                );
              }}
              className="absolute left-4 text-white/80 transition-colors hover:text-tulip-accent sm:left-8"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="h-10 w-10" />
            </button>

            <motion.div
              key={current.id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex aspect-[4/3] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-2xl bg-tulip-gradient shadow-card-hover"
            >
              {/* REPLACE: insert real lab photos in /public/images/gallery/ */}
              <div className="w-1/2 max-w-sm opacity-25">
                <Image
                  src="/images/logo-removebg-preview.png"
                  alt=""
                  width={367}
                  height={155}
                  className="h-auto w-full"
                />
              </div>
              <p className="mt-2 font-display text-2xl text-white">
                {current.category}
              </p>
              <p className="text-sm text-white/60">
                Case #{String(current.id).padStart(2, "0")}
              </p>
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) => (a === null ? a : (a + 1) % visible.length));
              }}
              className="absolute right-4 text-white/80 transition-colors hover:text-tulip-accent sm:right-8"
              aria-label="Next"
            >
              <ChevronRightIcon className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
