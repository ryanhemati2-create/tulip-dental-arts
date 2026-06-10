"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTABanner({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonHref: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-tulip">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-3xl bg-tulip-gradient-soft px-7 py-14 text-center shadow-card-hover sm:px-12 sm:py-16"
        >
          {/* decorative marks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-8 w-60 opacity-10"
          >
            <Image
              src="/images/logo-removebg-preview.png"
              alt=""
              width={367}
              height={155}
              className="h-auto w-full"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-8 w-64 opacity-10"
          >
            <Image
              src="/images/logo-removebg-preview.png"
              alt=""
              width={367}
              height={155}
              className="h-auto w-full"
            />
          </div>

          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="relative mx-auto mt-4 max-w-2xl text-lg text-white/90">
              {subtitle}
            </p>
          )}
          <div className="relative mt-8 flex justify-center">
            <Link href={buttonHref} className="btn-outline-white">
              {buttonLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
