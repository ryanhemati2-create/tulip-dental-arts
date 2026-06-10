import Link from "next/link";
import {
  Square3Stack3DIcon,
  SparklesIcon,
  Cog6ToothIcon,
  FaceSmileIcon,
  MoonIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import GradientHero from "@/components/GradientHero";
import StatBar from "@/components/StatBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const STATS = [
  { value: "5-Year", label: "Guarantee on All Cases" },
  { value: "100%", label: "Canadian-Made" },
  { value: "Tero Ready", label: "Digital ID: 14852" },
  { value: "BC", label: "Proudly Serving Dentists" },
];

const SERVICES = [
  {
    icon: Square3Stack3DIcon,
    title: "Crowns & Bridges",
    description:
      "All-ceramic crowns and long-span bridges crafted for strength, fit, and a flawless, natural appearance.",
  },
  {
    icon: SparklesIcon,
    title: "Laminate Veneers",
    description:
      "Highly aesthetic IPS e.max veneers with precise shade matching for transformative, lifelike results.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Dental Implants",
    description:
      "Precision implant-supported restorations using current technologies and proven treatment approaches.",
  },
  {
    icon: FaceSmileIcon,
    title: "Dentures",
    description:
      "Full and partial dentures crafted for comfort, function, and confident, natural-looking aesthetics.",
  },
  {
    icon: MoonIcon,
    title: "Night Guards",
    description:
      "Flexible, hard, or thermoplastic guards available to suit each patient’s individual requirements.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Sport Guards",
    description:
      "Vacuum-formed or pressure-laminated custom guards available in a wide variety of colours.",
  },
];

const REASONS = [
  {
    icon: SparklesIcon,
    title: "Precision Craftsmanship",
    description:
      "Every restoration is hand-finished by experienced technicians who treat each case as a work of art.",
  },
  {
    icon: ShieldCheckIcon,
    title: "5-Year Case Guarantee",
    description:
      "We stand behind our work. Every case ships with an industry-leading five-year guarantee.",
  },
  {
    icon: CpuChipIcon,
    title: "Digital Workflow Ready",
    description:
      "Tero-compatible and TRIOS®-ready — send us digital impressions for a faster, seamless workflow.",
  },
  {
    icon: ClockIcon,
    title: "Fast Turnaround Times",
    description:
      "Dependable scheduling and quick turnaround keep your chair time efficient and your patients smiling.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <GradientHero
        size="full"
        showPetals
        backgroundImage="/images/labfront.png"
        eyebrow="Port Coquitlam, British Columbia"
        title={
          <>
            Crafting Smiles.
            <br />
            Elevating the Art of{" "}
            <span className="text-tulip-light">Dental Design.</span>
          </>
        }
        subtitle="Tulip Dental Arts is Port Coquitlam’s premier dental laboratory — where precision craftsmanship meets beautiful results."
      >
        <Link href="/contact" className="btn-fuchsia">
          Send Us Your Case
        </Link>
        <Link href="/services" className="btn-outline-white">
          Explore Our Services
        </Link>
      </GradientHero>

      {/* STATS BAR */}
      <StatBar stats={STATS} />

      {/* INTRO */}
      <section className="section-pad bg-white">
        <div className="container-tulip grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="It’s Not the Service We Give — It’s the Smile We Get"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-tulip-dark/75">
                Tulip Dental Arts is a full-service dental laboratory specializing
                in fixed and removable prosthetics. We combine old-fashioned
                values with cutting-edge digital craftsmanship to deliver results
                that truly elevate the standard of dental care.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-tulip-dark/75">
                Serving dental clinics across the Lower Mainland and beyond, our
                team takes pride in every crown, bridge, and appliance that leaves
                our lab.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-outline-magenta">
                  Our Story
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Decorative tulip panel */}
          <Reveal delay={0.15} className="order-first lg:order-last">
            <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-tulip-gradient shadow-card-hover">
              <div className="absolute inset-0 animate-breathe bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
              <div className="relative w-3/4 max-w-[20rem]">
                <Image
                  src="/images/logo-removebg-preview.png"
                  alt=""
                  width={367}
                  height={155}
                  className="h-auto w-full drop-shadow-lg"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="section-pad bg-tulip-light/50">
        <div className="container-tulip">
          <SectionHeading
            align="center"
            eyebrow="What We Create"
            title="Conscientiously-Made Dental Prosthetics"
            subtitle="From single crowns to full-arch restorations, every case is made right here in Canada with top-grade materials."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard
                key={s.title}
                icon={<s.icon className="h-7 w-7" />}
                title={s.title}
                description={s.description}
                index={i}
                href="/services"
                cta="Learn More"
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TULIP */}
      <section className="section-pad relative isolate overflow-hidden bg-tulip-primary">
        {/* Lab photo background under a strong brand overlay for legibility */}
        <Image
          src="/images/purplelabimage.png"
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-tulip-dark/90 via-tulip-primary/85 to-tulip-primary/80"
        />
        <div className="container-tulip">
          <SectionHeading
            align="center"
            light
            eyebrow="Why Choose Tulip"
            title="The Tulip Difference"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="flex h-full flex-col items-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-tulip-light ring-1 ring-white/15">
                    <r.icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {r.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY COMMITMENT */}
      <section className="section-pad bg-tulip-light">
        <div className="container-tulip">
          <div className="grid items-center gap-10 rounded-3xl bg-white p-8 shadow-card sm:p-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Our Commitment"
                title="An Uncompromising Standard of Quality"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-lg leading-relaxed text-tulip-dark/75">
                  Every restoration that leaves our lab is held to a single,
                  uncompromising standard. From material selection to the final
                  finishing touches, we obsess over the details that make a
                  restoration fit beautifully, function flawlessly, and last —
                  every case backed by our five-year guarantee.
                </p>
                <Link href="/about" className="btn-outline-magenta mt-8">
                  Learn About Our Lab
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-tulip-gradient-soft shadow-card">
                <div className="w-3/4 max-w-[18rem]">
                  <Image
                    src="/images/logo-removebg-preview.png"
                    alt=""
                    width={367}
                    height={155}
                    className="h-auto w-full drop-shadow-md"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <CTABanner
        title="Ready to Partner With Us?"
        subtitle="Join the dental clinics across British Columbia who trust Tulip Dental Arts with their most important cases."
        buttonLabel="Get In Touch"
        buttonHref="/contact"
      />
    </>
  );
}
