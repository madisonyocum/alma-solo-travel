import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Alma Solo Travel | Curated Solo Journeys for Women",
    template: "%s | Alma Solo Travel",
  },
  description:
    "Personalised travel planning for women travelling independently. Discover thoughtfully curated itineraries, boutique stays and meaningful experiences for every budget.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: [
    "solo travel for women",
    "women's travel planning",
    "curated itineraries",
    "Mediterranean travel",
    "boutique travel concierge",
  ],
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
