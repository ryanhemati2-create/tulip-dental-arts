"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const SUBJECTS = [
  "General Inquiry",
  "Send a Case",
  "Request a Quote",
  "Download Rx Form",
  "Other",
];

const EMPTY = {
  name: "",
  clinic: "",
  email: "",
  phone: "",
  subject: SUBJECTS[0],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /*
      INTEGRATE: connect contact form to email backend (Resend, Formspree, or
      EmailJS). For now we fall back to a pre-filled mailto: link so the form is
      fully functional on a static deploy. Replace the block below with a POST to
      your backend / API route, e.g.:

        await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });
    */
    const body = [
      `Name: ${form.name}`,
      `Clinic / Practice: ${form.clinic}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      form.message,
    ].join("\n");

    const mailto = `mailto:tulipmilling@gmail.com?subject=${encodeURIComponent(
      `[${form.subject}] Website enquiry from ${form.name || "a clinic"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-lg border border-tulip-primary/15 bg-tulip-light/40 px-4 py-3 text-tulip-dark placeholder:text-tulip-dark/40 outline-none transition focus:border-tulip-accent focus:ring-2 focus:ring-tulip-accent/30";
  const labelClass = "mb-1.5 block text-sm font-semibold text-tulip-dark";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-tulip-accent/30 bg-tulip-light/60 p-10 text-center"
      >
        <CheckCircleIcon className="h-16 w-16 text-tulip-accent" />
        <h3 className="mt-4 font-display text-2xl font-bold text-tulip-dark">
          Thank You!
        </h3>
        <p className="mt-3 max-w-sm text-tulip-dark/70">
          Your email client should now be open with your message ready to send.
          If it didn’t open, please email us directly at{" "}
          <a
            href="mailto:tulipmilling@gmail.com"
            className="font-semibold text-tulip-primary hover:underline"
          >
            tulipmilling@gmail.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY);
            setSent(false);
          }}
          className="btn-outline-magenta mt-7"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-tulip-light bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-tulip-accent">*</span>
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Dr. Jane Smith"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="clinic" className={labelClass}>
            Clinic / Practice Name
          </label>
          <input
            id="clinic"
            value={form.clinic}
            onChange={update("clinic")}
            placeholder="Bright Smiles Dental"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-tulip-accent">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="you@clinic.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            placeholder="(604) 000-0000"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className={labelClass}>
          Subject
        </label>
        <select
          id="subject"
          value={form.subject}
          onChange={update("subject")}
          className={fieldClass}
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-tulip-accent">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Tell us about your case or how we can help…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button type="submit" className="btn-fuchsia mt-6 w-full sm:w-auto">
        <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        Send Message
      </button>
    </form>
  );
}
