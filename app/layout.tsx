import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Clarity } from "@/components/analytics/Clarity";
import { CampaignTracker } from "@/components/analytics/CampaignTracker";

export const metadata: Metadata = {
  title: "Uncle Lenny School Run Services | Harare",
  description:
    "Safe, reliable and comfortable school transportation services for schools and families across Harare, Zimbabwe.",
  keywords: [
    "school transport Harare",
    "school runs Harare",
    "school bus Harare",
    "student transport Zimbabwe",
    "Uncle Lenny School Run Services",
  ],
  openGraph: {
    title: "Uncle Lenny School Run Services",
    description: "Safe rides. Happy kids. Peace of mind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <FloatingWhatsApp />
        <Footer />
        <GoogleAnalytics />
        <Clarity />
        <Analytics />
        <SpeedInsights />
        <CampaignTracker />
      </body>
    </html>
  );
}
