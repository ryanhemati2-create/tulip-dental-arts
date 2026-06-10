import { Fragment } from "react";
import clsx from "clsx";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Group = { category: string; rows: [string, string][] };

const WARRANTY: Group[] = [
  {
    category: "Fixed Prosthetics",
    rows: [
      ["Metal, PFM, and Zirconia Restorations", "5 years"],
      ["IPS e.max Anterior Restorations", "3 years"],
      ["IPS e.max Posterior Restorations", "2 years"],
      ["PMMA Short Term", "No warranty"],
      ["PMMA Long Term", "6 months"],
    ],
  },
  {
    category: "Implants",
    rows: [
      ["Implant Restorations", "5 years"],
      ["Titanium Implant Bars", "5 years"],
      ["Custom Abutments", "5 years"],
    ],
  },
  {
    category: "Removable Prosthetics",
    rows: [
      ["New Full/Partial Denture", "2 years"],
      ["Immediate Acrylic Partial", "No warranty"],
      ["Flipper Partial", "1 month"],
      ["Immediate Complete/Partial Denture", "Requires reline within 6 months"],
      ["Flexible Partials", "1 year"],
      ["Immediate Flexible Partials", "No warranty"],
      ["SLM Partial Frameworks (CoCr)", "2 years"],
      ["Immediate Cast Frameworks", "No warranty"],
      ["Repairs & Relines", "1 month"],
    ],
  },
  {
    category: "Splints & Guards",
    rows: [
      ["Splints and Nightguards", "6 months"],
      ["Mouthguards and Sportsguards", "6 months"],
    ],
  },
];

const CONDITIONS = [
  "We warranty our products on the craftmanship and defects in material for the specified periods listed for each product.",
  "We will not warranty products that we have communicated serious concerns about the chances of the case being unsuccessful.",
  "Incorrect shades or a change in shades will result in a charge for a new case.",
  "Cases that need to be remade must be returned to the lab requesting the remake.",
  "Changes in the design of an appliance after invoicing will be charged as a new case.",
  "Negligence on the part of the patient will not be covered by the warranty.",
];

export default function WarrantySection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-tulip">
        <SectionHeading
          align="center"
          eyebrow="Product Warranty"
          title="Our Warranty Coverage"
          subtitle="We stand firmly behind our craftsmanship. Every restoration carries the warranty period below, reflecting our confidence in the materials and techniques we use."
        />

        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-tulip-light shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[30rem] border-collapse text-left">
                <thead>
                  <tr className="bg-tulip-primary text-white">
                    <th className="px-5 py-4 font-heading text-xs font-semibold uppercase tracking-label sm:px-6">
                      Product
                    </th>
                    <th className="px-5 py-4 text-right font-heading text-xs font-semibold uppercase tracking-label sm:px-6">
                      Warranty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY.map((group) => (
                    <Fragment key={group.category}>
                      <tr>
                        <th
                          colSpan={2}
                          className="bg-tulip-gradient-soft px-5 py-3 text-left font-heading text-sm font-bold uppercase tracking-wide text-white sm:px-6"
                        >
                          {group.category}
                        </th>
                      </tr>
                      {group.rows.map(([product, term], i) => (
                        <tr
                          key={product}
                          className={clsx(
                            "border-b border-tulip-light/70",
                            i % 2 === 0 ? "bg-white" : "bg-tulip-light/40"
                          )}
                        >
                          <td className="px-5 py-3 text-sm text-tulip-dark sm:px-6 sm:text-base">
                            {product}
                          </td>
                          <td
                            className={clsx(
                              "whitespace-nowrap px-5 py-3 text-right text-sm font-semibold sm:px-6",
                              term === "No warranty"
                                ? "text-tulip-dark/45"
                                : "text-tulip-primary"
                            )}
                          >
                            {term}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        {/* Conditions of Warranty */}
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl bg-tulip-light/50 p-7 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-tulip-dark">
              Conditions of Warranty
            </h3>
            <span className="mt-4 block h-1 w-16 rounded-full bg-tulip-accent" />
            <ol className="mt-7 space-y-5">
              {CONDITIONS.map((condition, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tulip-primary font-heading text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-tulip-dark/75">
                    {condition}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
