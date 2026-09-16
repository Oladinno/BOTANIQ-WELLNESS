import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BOTANIQ WELLNESS™ | Science Meets Tradition",
    template: "%s | BOTANIQ WELLNESS™",
  },
  description:
    "A research-led African botanical wellness company translating traditional knowledge into responsible modern solutions.",
  openGraph: {
    title: "BOTANIQ WELLNESS™",
    description: "Science Meets Tradition. Everyday Botanical Wellness.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
