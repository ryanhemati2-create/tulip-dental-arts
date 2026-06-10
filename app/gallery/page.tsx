import type { Metadata } from "next";
import GradientHero from "@/components/GradientHero";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A showcase of precision crowns, bridges, veneers, dentures, and implant restorations crafted by Tulip Dental Arts in Port Coquitlam, BC.",
};

export default function GalleryPage() {
  return (
    <>
      <GradientHero
        eyebrow="Our Portfolio"
        title="Our Work"
        subtitle="A glimpse of the craftsmanship behind every Tulip restoration. Filter by category to explore our case work."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="section-pad bg-white">
        <div className="container-tulip">
          <Reveal>
            {/* REPLACE: insert real lab/work photos in /public/images/gallery/ */}
            <GalleryGrid />
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Your Case Could Be Next"
        subtitle="Experience Tulip-quality craftsmanship for your own patients. We’d love to show you what we can do."
        buttonLabel="Send Us Your Case"
        buttonHref="/contact"
      />
    </>
  );
}
