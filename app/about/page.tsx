import type { Metadata } from "next";
import {
  CursorArrowRaysIcon,
  HandRaisedIcon,
  UserGroupIcon,
  CpuChipIcon,
  CheckBadgeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import GradientHero from "@/components/GradientHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Tulip Dental Arts combines artisanal craftsmanship with the latest digital dental technology in Port Coquitlam, BC.",
};

const VALUES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Precision",
    description:
      "Exacting standards on every margin, contour, and shade. We measure twice and craft once so your restorations fit beautifully the first time.",
  },
  {
    icon: HandRaisedIcon,
    title: "Integrity",
    description:
      "Our product is our service. We use only top-grade materials and stand behind every case with an honest, five-year guarantee.",
  },
  {
    icon: UserGroupIcon,
    title: "Partnership",
    description:
      "We see ourselves as an extension of your practice — responsive, communicative, and invested in your patients’ outcomes.",
  },
];

const TECH = [
  "Tero-compatible digital workflow (Tero ID: 14852)",
  "TRIOS® Intraoral scanner-ready",
  "Accepts digital impressions for faster turnaround",
  "Top-grade IPS e.max and zirconia materials",
];

export default function AboutPage() {
  return (
    <>
      <GradientHero
        eyebrow="About Tulip Dental Arts"
        title="Where Floral Artistry Meets Dental Precision"
        subtitle="A boutique dental laboratory nestled in Port Coquitlam, raising the bar for quality across British Columbia."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* OUR STORY */}
      <section className="section-pad bg-white">
        <div className="container-tulip grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last lg:order-first">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-card-hover">
              <Image
                src="/images/purplelabimage.png"
                alt="Inside the Tulip Dental Arts laboratory in Port Coquitlam"
                fill
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-tulip-dark/55 via-tulip-dark/10 to-transparent"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Our Story" title="A Singular Vision for Quality" />
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-tulip-dark/75">
                <p>
                  Tulip Dental Arts was founded with a singular vision: to deliver
                  dental prosthetics of unmatched quality to clinics across British
                  Columbia. Nestled in Port Coquitlam, our laboratory combines
                  artisanal craftsmanship with the latest digital dental technology
                  — including digital impressions and the TRIOS® Intraoral system.
                </p>
                <p>
                  We operate with the belief that our product is our service. Every
                  crown, bridge, and appliance that leaves Tulip reflects our
                  commitment to excellence and our passion for helping patients
                  smile with confidence.
                </p>
                <p>
                  Day in and day out, we are driven to raise the bar in the dental
                  laboratory industry across Metro Vancouver — earning the trust of
                  the clinics we serve, one exceptional restoration at a time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section-pad bg-tulip-light/50">
        <div className="container-tulip">
          <SectionHeading
            align="center"
            eyebrow="What Guides Us"
            title="Our Values"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center rounded-2xl border-t-4 border-tulip-accent bg-white p-8 text-center shadow-card">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tulip-light text-tulip-primary">
                    <v.icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-tulip-dark">
                    {v.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-tulip-dark/70">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TECHNOLOGY */}
      <section className="section-pad bg-tulip-dark">
        <div className="container-tulip grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              light
              eyebrow="Our Technology"
              title="A Digital-Ready Dental Laboratory"
              subtitle="We pair time-honoured technique with a modern digital workflow, so your practice gets the best of both worlds."
            />
            <Reveal delay={0.1}>
              <ul className="mt-8 space-y-4">
                {TECH.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-white/85">
                    <CheckBadgeIcon className="mt-0.5 h-6 w-6 shrink-0 text-tulip-accent" />
                    <span className="text-lg">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <CpuChipIcon className="h-10 w-10 text-tulip-accent" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  Digital Impressions
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Send intraoral scans directly to our lab for a faster, more
                  accurate, and more comfortable workflow.
                </p>
              </div>
              <div className="rounded-2xl bg-tulip-gradient-soft p-7 shadow-glow sm:mt-8">
                <IdentificationIcon className="h-10 w-10 text-white" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  Tero Digital ID
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90">
                  Connect with us seamlessly through the Tero platform using our
                  Digital ID:{" "}
                  <span className="font-bold">14852</span>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Experience the Tulip Standard"
        subtitle="Partner with a lab that treats your cases with the care and artistry they deserve."
        buttonLabel="Send Us Your Case"
        buttonHref="/contact"
      />
    </>
  );
}
