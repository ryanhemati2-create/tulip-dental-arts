import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  HeartIcon,
  CurrencyDollarIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
  PaperAirplaneIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import GradientHero from "@/components/GradientHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import ScannerCompatibility from "@/components/ScannerCompatibility";

export const metadata: Metadata = {
  title: "For Dentists",
  description:
    "Partner with Tulip Dental Arts. Resources for dentists, technicians, and patients, plus a simple four-step process to start sending cases to our Port Coquitlam lab.",
};

const AUDIENCES = [
  {
    icon: BriefcaseIcon,
    title: "For Dentists",
    description:
      "Resources about our services, products, and chairside procedures — everything you need to prescribe with confidence.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "For Technicians",
    description:
      "Technical resources, fabrication instructions, and material safety information to support seamless collaboration.",
  },
  {
    icon: HeartIcon,
    title: "For Patients",
    description:
      "Educational information about dental prosthetics, what to expect, and how to care for your new restoration.",
  },
];

const STEPS = [
  {
    title: "Set Up Your Account",
    description: "Contact us to set up your account and meet your dedicated team.",
  },
  {
    title: "Complete Your Rx",
    description: "Download and complete our prescription (Rx) form for your case.",
  },
  {
    title: "Ship Your Case",
    description:
      "Ship your case to 120 – 1465 Salisbury Ave, Port Coquitlam BC V3B 6J3.",
  },
  {
    title: "Receive Your Restoration",
    description:
      "Receive your precision restoration — backed by our 5-year guarantee.",
  },
];

const ACTIONS = [
  {
    icon: CurrencyDollarIcon,
    title: "Request a Quote",
    description: "Get pricing for your case or a custom restoration.",
    href: "/contact",
    cta: "Get a Quote",
  },
  {
    icon: ArrowDownTrayIcon,
    title: "Download Rx Form",
    description: "Print and complete our prescription form for each case.",
    href: "/tulip-rx-form.pdf",
    cta: "Download PDF",
  },
  {
    icon: PaperAirplaneIcon,
    title: "Send Us Your Case",
    description: "Already set up? Let us know your case is on the way.",
    href: "/contact",
    cta: "Send Case",
  },
  {
    icon: ClockIcon,
    title: "View Turnaround Times",
    // ADD: actual turnaround time information
    description: "Review standard turnaround times for each product type.",
    href: "/contact",
    cta: "View Times",
  },
];

export default function ForDentistsPage() {
  return (
    <>
      <GradientHero
        eyebrow="For Dental Professionals"
        title="Partner With Tulip Dental Arts"
        subtitle="A responsive, digital-ready lab partner that treats your cases — and your patients — with the care they deserve."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "For Dentists" }]}
      >
        <Link href="/contact" className="btn-fuchsia">
          Set Up Your Account
        </Link>
      </GradientHero>

      {/* AUDIENCE COLUMNS */}
      <section className="section-pad bg-white">
        <div className="container-tulip">
          <SectionHeading
            align="center"
            eyebrow="Resources"
            title="Built for Everyone in the Chair"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {AUDIENCES.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="group flex h-full flex-col items-center rounded-2xl bg-tulip-light/60 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-card-hover">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-tulip-primary shadow-sm transition-colors group-hover:bg-tulip-primary group-hover:text-white">
                    <a.icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-tulip-dark">
                    {a.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tulip-dark/70">
                    {a.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="section-pad bg-tulip-dark">
        <div className="container-tulip">
          <SectionHeading
            align="center"
            light
            eyebrow="Getting Started"
            title="Four Simple Steps"
            subtitle="From first contact to finished restoration, we make working with our lab effortless."
          />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
            {/* connecting line on desktop */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-tulip-primary via-tulip-accent to-tulip-primary md:block"
            />
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tulip-accent font-display text-2xl font-bold text-white shadow-glow ring-4 ring-tulip-dark">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL SCANNER COMPATIBILITY */}
      <ScannerCompatibility surface="white" />

      {/* RX FORM DOWNLOAD */}
      <section className="section-pad bg-tulip-dark">
        <div className="container-tulip">
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center rounded-3xl bg-white/5 p-9 text-center ring-1 ring-white/10 sm:p-14">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tulip-accent/15 text-tulip-accent ring-1 ring-tulip-accent/30">
                <DocumentArrowDownIcon className="h-8 w-8" />
              </span>
              <p className="eyebrow mt-6 text-tulip-accent">Prescription Form</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Download Our Rx Form
              </h2>
              <p className="mt-4 max-w-xl text-white/75">
                Save time on every case. Download the Tulip Dental Arts
                prescription (Rx) form, print it, and include the completed form
                with your shipment.
              </p>
              <a
                href="/tulip-rx-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fuchsia mt-8"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download Rx Form (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK ACTION CARDS */}
      <section className="section-pad bg-tulip-light/50">
        <div className="container-tulip">
          <SectionHeading
            align="center"
            eyebrow="Quick Actions"
            title="Everything You Need, One Click Away"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ACTIONS.map((action, i) => (
              <Reveal key={action.title} delay={i * 0.08}>
                <Link
                  href={action.href}
                  target={action.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={
                    action.href.endsWith(".pdf")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex h-full flex-col rounded-2xl border-t-4 border-tulip-accent bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-tulip-light text-tulip-primary transition-colors group-hover:bg-tulip-primary group-hover:text-white">
                    <action.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-tulip-dark">
                    {action.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tulip-dark/70">
                    {action.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-tulip-primary transition-colors group-hover:text-tulip-accent">
                    {action.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let’s Build a Lasting Partnership"
        subtitle="Set up your account today and discover why BC dentists trust Tulip Dental Arts with their cases."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
