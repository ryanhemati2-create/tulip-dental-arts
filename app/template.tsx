"use client";

import { motion } from "framer-motion";

/**
 * Next.js renders template.tsx fresh on every route change (unlike layout.tsx),
 * which makes it the ideal place for a route-level fade-in page transition.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
