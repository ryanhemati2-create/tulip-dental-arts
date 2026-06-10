import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tulip: {
          dark: "#1A0026", // deep background purple / dark text
          primary: "#8B0057", // dominant deep magenta / plum
          mid: "#C2185B", // mid magenta
          accent: "#E91E8C", // bright fuchsia accent
          light: "#FDF0F5", // light blush / off-white
        },
      },
      fontFamily: {
        // Wired to next/font CSS variables in app/layout.tsx
        display: ["var(--font-playfair)", "Georgia", "serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-lato)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.25em",
      },
      backgroundImage: {
        "tulip-gradient":
          "linear-gradient(135deg, #1A0026 0%, #8B0057 50%, #E91E8C 100%)",
        "tulip-gradient-soft":
          "linear-gradient(135deg, #8B0057 0%, #C2185B 50%, #E91E8C 100%)",
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(26, 0, 38, 0.18)",
        "card-hover": "0 24px 60px -16px rgba(139, 0, 87, 0.35)",
        glow: "0 0 40px -6px rgba(233, 30, 140, 0.45)",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.10" },
          "50%": { transform: "scale(1.06)", opacity: "0.18" },
        },
        "petal-fall": {
          "0%": { transform: "translateY(-10%) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.6" },
          "100%": {
            transform: "translateY(110vh) rotate(360deg)",
            opacity: "0",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 14s ease infinite",
        breathe: "breathe 9s ease-in-out infinite",
        "petal-fall": "petal-fall linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
