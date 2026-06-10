"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";
import Image from "next/image";
import Petals from "./Petals";

type Crumb = { label: string; href?: string };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function GradientHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
  size = "page",
  showPetals = false,
  showTulip = true,
  backgroundImage,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumb?: Crumb[];
  children?: ReactNode;
  size?: "full" | "page";
  showPetals?: boolean;
  showTulip?: boolean;
  backgroundImage?: string;
}) {
  return (
    <section
      className={clsx(
        "relative isolate flex w-full flex-col justify-center overflow-hidden text-white",
        backgroundImage ? "bg-tulip-dark" : "tulip-animated-gradient",
        size === "full"
          ? "min-h-screen pt-28 pb-20"
          : "min-h-[58vh] pt-36 pb-20 sm:min-h-[60vh]"
      )}
    >
      {/* Optional photo background, kept readable behind the brand gradient */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover"
          />
          <div
            aria-hidden="true"
            className="tulip-animated-gradient absolute inset-0 -z-20 opacity-80"
          />
        </>
      )}
      {/* Soft vignette so text stays legible over the gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(80%_80%_at_30%_30%,transparent,rgba(26,0,38,0.55))]"
      />

      {showPetals && <Petals />}

      <div className="container-tulip relative z-10">
        <div
          className={clsx(
            "grid items-center gap-10",
            showTulip && "lg:grid-cols-[1fr_auto] lg:gap-16"
          )}
        >
          <motion.div
            className="max-w-3xl"
            variants={container}
            initial="hidden"
            animate="show"
          >
        {breadcrumb && (
          <motion.nav
            variants={item}
            aria-label="Breadcrumb"
            className="mb-5 flex items-center gap-2 text-xs font-medium text-white/70"
          >
            {breadcrumb.map((c, i) => (
              <span key={c.label} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < breadcrumb.length - 1 && (
                  <span className="text-white/40">/</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {eyebrow && (
          <motion.p variants={item} className="eyebrow mb-4 text-tulip-light">
            {eyebrow}
          </motion.p>
        )}

        <motion.h1
          variants={item}
          className="font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {children}
          </motion.div>
        )}
          </motion.div>

          {showTulip && (
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 0.95, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none hidden justify-self-end lg:block"
            >
              <Image
                src="/images/logo-removebg-preview.png"
                alt=""
                width={367}
                height={155}
                className="w-[20rem] drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)] xl:w-[26rem]"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
