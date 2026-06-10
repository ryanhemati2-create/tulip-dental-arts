"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Bars3Icon, XMarkIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-dentists", label: "For Dentists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Add backdrop blur + solid plum once the user scrolls away from the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-tulip-dark/85 shadow-lg shadow-tulip-dark/30 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container-tulip flex h-24 items-center justify-between">
        <Logo variant="dark" size="xl" priority />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "relative font-heading text-sm font-medium tracking-wide transition-colors",
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-tulip-accent"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-fuchsia !px-6 !py-2.5">
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
            Send Us Your Case
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-white lg:hidden"
          aria-label="Open menu"
        >
          <Bars3Icon className="h-8 w-8" />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-tulip-dark lg:hidden"
          >
            <div className="container-tulip flex h-24 items-center justify-between">
              <Logo variant="dark" size="xl" href={null} />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-8 w-8" />
              </button>
            </div>

            <motion.ul
              className="flex flex-1 flex-col items-center justify-center gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {LINKS.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "font-display text-3xl transition-colors",
                      isActive(link.href)
                        ? "text-gradient"
                        : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-fuchsia"
                >
                  <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
                  Send Us Your Case
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
