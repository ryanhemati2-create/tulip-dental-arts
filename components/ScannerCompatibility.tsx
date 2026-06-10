import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const SCANNERS = [
  "iTero",
  "TRIOS",
  "Shining",
  "Medit",
  "Dexis",
  "Primescan / Primescan DS",
];

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C8.7 2 6.2 3.6 5.2 5.9 4.4 7.7 4.5 9.9 5 12.2c.4 1.9.7 4 1.2 5.9.3 1.2.6 2.4 1.1 3.3.3.5.7 1 1.3 1 .7 0 1-.7 1.2-1.4.3-1 .5-2.3.8-3.3.1-.5.3-1 .6-1 .3 0 .5.5.6 1 .3 1 .5 2.3.8 3.3.2.7.5 1.4 1.2 1.4.6 0 1-.5 1.3-1 .5-.9.8-2.1 1.1-3.3.5-1.9.8-4 1.2-5.9.5-2.3.6-4.5-.2-6.3C17.8 3.6 15.3 2 12 2z" />
    </svg>
  );
}

/**
 * "Digital Scanner Compatibility" section — reused on the Services and
 * For Dentists pages. `surface` controls the section background so it can
 * alternate cleanly with the sections above/below it on each page.
 */
export default function ScannerCompatibility({
  surface = "white",
}: {
  surface?: "white" | "light";
}) {
  return (
    <section
      className={clsx(
        "section-pad",
        surface === "light" ? "bg-tulip-light/50" : "bg-white"
      )}
    >
      <div className="container-tulip">
        <SectionHeading
          align="center"
          eyebrow="Digital Scanner Compatibility"
          title="We Accept Digital Intraoral Scans"
          subtitle="Tulip Dental Arts is compatible with all major digital intraoral scanning systems. Simply scan and send — we handle the rest."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {SCANNERS.map((name, i) => (
            <Reveal key={name} delay={(i % 3) * 0.08}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-tulip-primary/15 bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-tulip-accent/50 hover:shadow-card-hover">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tulip-light text-tulip-primary transition-colors duration-300 group-hover:bg-tulip-primary group-hover:text-white">
                  <ToothIcon className="h-7 w-7" />
                </span>
                <span className="font-heading text-sm font-bold text-tulip-dark sm:text-base">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-tulip-dark/70">
            Don’t see your scanner?{" "}
            <a
              href="mailto:tulipmilling@gmail.com"
              className="font-semibold text-tulip-primary transition-colors hover:text-tulip-accent hover:underline"
            >
              Contact us at tulipmilling@gmail.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
