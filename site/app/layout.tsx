import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://joinccc.org"),
  title: {
    default: "California Care Coordinators | CalAIM Housing & Care Support",
    template: "%s | California Care Coordinators",
  },
  description:
    "California Care Coordinators provides qualifying Medi-Cal recipients with Enhanced Care Management and Community Supports under CalAIM. Housing navigation, deposit vouchers, and cash assistance in Southern California.",
  keywords:
    "CalAIM, Community Supports, Medi-Cal, housing navigation, Enhanced Care Management, California Care Coordinators, CalOptima, IEHP, housing deposit voucher, tenancy sustaining, cash assistance vouchers, Santa Ana CA, CalAIM housing support Southern California, free housing assistance Medi-Cal, homeless services Orange County, CalAIM provider Orange County, Medi-Cal housing assistance, housing deposit voucher California, move-in funds Medi-Cal, housing instability support, case manager Medi-Cal, CalAIM community supports provider",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joinccc.org",
    siteName: "California Care Coordinators",
    title: "California Care Coordinators | CalAIM Housing & Care Support",
    description:
      "Free housing navigation, up to $5,000 in move-in funds, and monthly cash assistance for qualifying Medi-Cal members in Southern California. Apply online in five minutes.",
    images: [
      {
        url: "/logos/ccc-logo-blue-fullres.png",
        width: 1200,
        height: 630,
        alt: "California Care Coordinators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "California Care Coordinators | CalAIM Housing & Care Support",
    description:
      "Free housing navigation, up to $5,000 in move-in funds, and monthly cash assistance for qualifying Medi-Cal members in Southern California.",
    images: ["/logos/ccc-logo-blue-fullres.png"],
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Santa Ana, California",
    "geo.position": "33.7455;-117.8677",
    "ICBM": "33.7455, -117.8677",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
