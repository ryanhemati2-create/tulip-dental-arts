import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

const siteUrl = "https://tulipdentalarts.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tulip Dental Arts | Premier Dental Laboratory in Port Coquitlam, BC",
    template: "%s | Tulip Dental Arts",
  },
  description:
    "Tulip Dental Arts is Port Coquitlam's premier dental laboratory — precision-crafted crowns, bridges, veneers, implants, and dentures with a 5-year guarantee.",
  keywords: [
    "dental laboratory",
    "Port Coquitlam dental lab",
    "crowns and bridges",
    "dental implants",
    "veneers",
    "dentures",
    "Tero digital",
    "British Columbia dental lab",
  ],
  authors: [{ name: "Tulip Dental Arts" }],
  openGraph: {
    title: "Tulip Dental Arts | Premier Dental Laboratory in Port Coquitlam, BC",
    description:
      "Where precision craftsmanship meets beautiful results. Full-service fixed and removable prosthetics, made in Canada with a 5-year guarantee.",
    url: siteUrl,
    siteName: "Tulip Dental Arts",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulip Dental Arts",
    description:
      "Port Coquitlam's premier dental laboratory — precision craftsmanship, beautiful results.",
  },
  icons: {
    icon: "/images/logo2-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${lato.variable}`}
    >
      <body className="bg-white text-tulip-dark">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
