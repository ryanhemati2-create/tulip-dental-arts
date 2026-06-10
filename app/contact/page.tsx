import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  IdentificationIcon,
  ClockIcon,
  TruckIcon,
  ArrowDownTrayIcon,
  DocumentArrowDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import GradientHero from "@/components/GradientHero";
import SectionHeading from "@/components/SectionHeading";
import ContactCard from "@/components/ContactCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Tulip Dental Arts at 120 – 1465 Salisbury Ave., Port Coquitlam, BC. Phone (604) 944-9800 or email tulipmilling@gmail.com.",
};

const INFO_CARDS = [
  {
    icon: TruckIcon,
    title: "Request Shipping Supplies",
    description: "Need case boxes or shipping labels? Let us restock you.",
    href: "/contact",
    cta: "Request Supplies",
  },
  {
    icon: ArrowDownTrayIcon,
    title: "Download Rx Form",
    description: "Grab our prescription form to include with each case.",
    href: "/tulip-rx-form.pdf",
    cta: "Download PDF",
  },
  {
    icon: ClockIcon,
    title: "Turnaround Times",
    // ADD: actual turnaround time information
    description: "Review standard production times by restoration type.",
    href: "/for-dentists",
    cta: "View Times",
  },
];

export default function ContactPage() {
  return (
    <>
      <GradientHero
        eyebrow="Get In Touch"
        title="Contact Us"
        subtitle="Have a case to send or a question about our services? We’d love to hear from you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* CONTACT INFO + FORM */}
      <section className="section-pad bg-white">
        <div className="container-tulip grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — info */}
          <div>
            <SectionHeading
              eyebrow="Our Lab"
              title="Visit or Reach Out"
            />

            <div className="mt-8 space-y-4">
              <ContactCard
                icon={MapPinIcon}
                label="Address"
                value="120 – 1465 Salisbury Ave., Port Coquitlam, BC V3B 6J3"
                href="https://www.google.com/maps?q=1465+Salisbury+Ave,+Port+Coquitlam,+BC"
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <ContactCard
                  icon={PhoneIcon}
                  label="Phone & Fax"
                  value={
                    <span>
                      <a href="tel:+16049449800" className="hover:text-tulip-primary">
                        (604) 944-9800
                      </a>
                      <span className="block text-sm font-normal text-tulip-dark/60">
                        Fax: (604) 944-9800
                      </span>
                    </span>
                  }
                />
                <ContactCard
                  icon={EnvelopeIcon}
                  label="Email"
                  value={
                    <a
                      href="mailto:tulipmilling@gmail.com"
                      className="hover:text-tulip-primary"
                    >
                      tulipmilling@gmail.com
                    </a>
                  }
                />
                <ContactCard
                  icon={IdentificationIcon}
                  label="Tero Digital ID"
                  value="14852"
                />
                <ContactCard
                  icon={ClockIcon}
                  label="Hours"
                  value={
                    <span>
                      Mon–Fri: 8:00 AM – 5:00 PM
                      <span className="block text-sm font-normal text-tulip-dark/60">
                        {/* ADD: confirm actual business hours */}
                        Sat–Sun: Closed
                      </span>
                    </span>
                  }
                />
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-tulip-light shadow-card">
              <iframe
                title="Tulip Dental Arts location"
                src="https://www.google.com/maps?q=1465+Salisbury+Ave,+Port+Coquitlam,+BC&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* RIGHT — form */}
          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-2xl font-bold text-tulip-dark">
                Send Us a Message
              </h2>
              <p className="mt-2 text-tulip-dark/65">
                Fill out the form below and we’ll get back to you promptly.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RX FORM DOWNLOAD + ADDITIONAL INFO CARDS */}
      <section className="section-pad bg-tulip-light/50 pt-0">
        <div className="container-tulip">
          {/* Prominent Rx form download band */}
          <Reveal>
            <div className="mb-12 flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-tulip-gradient-soft p-8 text-center shadow-card-hover sm:flex-row sm:justify-between sm:p-10 sm:text-left">
              <div className="flex items-center gap-5">
                <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25 sm:flex">
                  <DocumentArrowDownIcon className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Download Our Rx Form
                  </h2>
                  <p className="mt-2 max-w-md text-white/90">
                    Print our prescription form and include the completed copy
                    with every case you send to the lab.
                  </p>
                </div>
              </div>
              <a
                href="/tulip-rx-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white shrink-0"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                Download Rx Form (PDF)
              </a>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {INFO_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <Link
                  href={card.href}
                  target={card.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={
                    card.href.endsWith(".pdf")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex h-full flex-col rounded-2xl border-t-4 border-tulip-accent bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-tulip-light text-tulip-primary transition-colors group-hover:bg-tulip-primary group-hover:text-white">
                    <card.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-tulip-dark">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-tulip-dark/70">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-semibold text-tulip-primary transition-colors group-hover:text-tulip-accent">
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
