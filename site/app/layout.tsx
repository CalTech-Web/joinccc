import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "California Care Coordinators | CalAIM Housing & Care Support",
  description:
    "California Care Coordinators provides qualifying Medi-Cal recipients with Enhanced Care Management and Community Supports under CalAIM. Housing navigation, deposit vouchers, and cash assistance in Southern California.",
  keywords:
    "CalAIM, Community Supports, Medi-Cal, housing navigation, Enhanced Care Management, California Care Coordinators, CalOptima, IEHP",
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
