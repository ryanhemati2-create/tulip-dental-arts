import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Logo from "./Logo";

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/for-dentists", label: "For Dentists" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// ADD: social media URLs for Facebook, Instagram, LinkedIn
const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.62c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.19.41-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.17.42-.36 1.04-.41 2.19-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.41 2.19.21.55.47.94.88 1.35.41.41.8.67 1.35.88.42.17 1.04.36 2.19.41 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.19-.41.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.17-.42.36-1.04.41-2.19.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.41-2.19a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.42-.17-1.04-.36-2.19-.41-1.24-.06-1.61-.07-4.76-.07Zm0 2.76a5.3 5.3 0 1 0 0 10.6 5.3 5.3 0 0 0 0-10.6Zm0 8.74a3.44 3.44 0 1 1 0-6.88 3.44 3.44 0 0 1 0 6.88Zm6.74-8.94a1.24 1.24 0 1 1-2.48 0 1.24 1.24 0 0 1 2.48 0Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0Z",
  },
];

export default function Footer() {
  return (
    <footer className="bg-tulip-dark text-white">
      <div className="container-tulip grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo variant="dark" size="lg" />
          <p className="mt-5 max-w-sm font-display text-lg italic text-white/85">
            “It’s Not the Service We Give — It’s the Smile We Get.”
          </p>
          <p className="mt-4 text-sm text-white/60">
            Precision dental craftsmanship, proudly made in Canada and backed by
            our 5-year guarantee.
          </p>

          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-all hover:border-tulip-accent hover:bg-tulip-accent hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-3">
          <h3 className="eyebrow text-tulip-accent">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="eyebrow mt-8 text-tulip-accent">We Accept</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80">
              VISA Debit
            </span>
            <span className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold tracking-wide text-white/80">
              VISA Credit
            </span>
          </div>
        </div>

        {/* Contact + map */}
        <div className="lg:col-span-5">
          <h3 className="eyebrow text-tulip-accent">Get In Touch</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPinIcon className="h-5 w-5 shrink-0 text-tulip-accent" />
              <span>120 – 1465 Salisbury Ave., Port Coquitlam, BC V3B 6J3</span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-tulip-accent" />
              <a href="tel:+16049449800" className="hover:text-white">
                (604) 944-9800
              </a>
            </li>
            <li className="flex gap-3">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-tulip-accent" />
              <a href="mailto:tulipmilling@gmail.com" className="hover:text-white">
                tulipmilling@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-5 overflow-hidden rounded-xl border border-white/10">
            <iframe
              title="Tulip Dental Arts location map"
              src="https://www.google.com/maps?q=1465+Salisbury+Ave,+Port+Coquitlam,+BC&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[20%]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tulip flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <p>© 2025 Tulip Dental Arts. All Rights Reserved.</p>
          <p>
            Tero Digital ID: 14852 · Made in Canada 🇨🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
