import type { Metadata } from "next";
import Link from "next/link";
import {
  SparklesIcon,
  Square3Stack3DIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  FaceSmileIcon,
  MoonIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import GradientHero from "@/components/GradientHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";
import ScannerCompatibility from "@/components/ScannerCompatibility";
import WarrantySection from "@/components/WarrantySection";

export const metadata: Metadata = {
  title: "Services & Products",
  description:
    "Full-service fixed and removable dental prosthetics — veneers, all-ceramic crowns, long-span bridges, implants, dentures, night guards, and sport guards. Made in Port Coquitlam, BC.",
};

const SERVICES = [
  {
    icon: SparklesIcon,
    title: "Laminate Veneers",
    description:
      "Using the IPS e.max system, we achieve highly aesthetic veneer results with precise shade matching.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "All Ceramic Crowns",
    description:
      "IPS e.max crowns offer natural beauty matching existing teeth without compromising strength or durability.",
  },
  {
    icon: BuildingLibraryIcon,
    title: "All Ceramic Long-Span Bridges",
    description:
      "Advanced layering techniques for exact shade and contour matching over multiple units.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Dental Implants",
    description:
      "Precision implant-supported restorations using current technologies and treatment approaches.",
  },
  {
    icon: FaceSmileIcon,
    title: "Dentures (Full & Partial)",
    description:
      "Full and partial dentures crafted for comfort, function, and aesthetics.",
  },
  {
    icon: MoonIcon,
    title: "Night Guards",
    description:
      "Flexible, hard, or thermoplastic — available to suit your patient’s individual requirements.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sport Guards",
    description:
      "Vacuum-formed or pressure-laminated custom guards in a variety of colours.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <GradientHero
        eyebrow="Services & Products"
        title="Our Services"
        subtitle="Full-service fixed and removable prosthetics — made with precision in Port Coquitlam, BC."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <Link href="/contact" className="btn-fuchsia">
          Send Us Your Case
        </Link>
      </GradientHero>

      {/* INTRO */}
      <section className="bg-white pt-20 sm:pt-24">
        <div className="container-tulip">
          <Reveal>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-tulip-dark/75">
              Our laboratory is your{" "}
              <span className="font-semibold text-tulip-primary">#1 source</span>{" "}
              for conscientiously-made dental prostheses. We include 5-year
              guarantees into each of our cases. Your restorations are made right
              here in Canada — top-grade materials and techniques ensure that the{" "}
              <span className="font-semibold text-tulip-primary">
                “Made by Tulip”
              </span>{" "}
              quality seal is suitably represented.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section-pad bg-white">
        <div className="container-tulip">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={<s.icon className="h-7 w-7" />}
                title={s.title}
                description={s.description}
                index={i}
                href="/contact"
                cta="Send This Case"
              />
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL WORKFLOW + GUARANTEE BANNERS */}
      <section className="pb-4">
        <div className="container-tulip grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-tulip-dark p-9 text-white sm:p-10">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-tulip-accent ring-1 ring-white/15">
                  <CpuChipIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  Digital Workflow Ready
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  Tero-compatible and TRIOS®-ready. Send us your digital
                  impressions and we’ll handle the rest — faster turnaround, fewer
                  remakes, happier patients. Tero Digital ID:{" "}
                  <span className="font-semibold text-white">14852</span>.
                </p>
              </div>
              <Link
                href="/for-dentists"
                className="btn-outline-white mt-8 self-start"
              >
                Learn How It Works
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-tulip-gradient-soft p-9 text-white shadow-card-hover sm:p-10">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
                  <CheckBadgeIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                  5-Year Case Guarantee
                </h3>
                <p className="mt-3 leading-relaxed text-white/90">
                  We stand firmly behind our craftsmanship. Every restoration that
                  leaves our lab is backed by an industry-leading five-year
                  guarantee — because quality you can count on is the foundation of
                  every great partnership.
                </p>
              </div>
              <Link href="/contact" className="btn-outline-white mt-8 self-start">
                Start a Case
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT WARRANTY */}
      <WarrantySection />

      {/* DIGITAL SCANNER COMPATIBILITY */}
      <ScannerCompatibility surface="light" />

      <CTABanner
        title="Don’t See What You’re Looking For?"
        subtitle="We craft a wide range of custom restorations. Reach out and let’s discuss your specific case requirements."
        buttonLabel="Contact Our Lab"
        buttonHref="/contact"
      />
    </>
  );
}
