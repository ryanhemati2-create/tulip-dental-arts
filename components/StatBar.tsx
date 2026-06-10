"use client";

import { motion } from "framer-motion";

export type Stat = { value: string; label: string };

export default function StatBar({ stats }: { stats: Stat[] }) {
  return (
    <section className="bg-tulip-dark">
      <div className="container-tulip grid grid-cols-2 gap-y-10 py-12 lg:grid-cols-4 lg:py-14">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative px-4 text-center lg:px-6 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:border-white/10"
          >
            <p className="font-display text-2xl font-bold text-tulip-accent sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-white/70 sm:text-sm">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
