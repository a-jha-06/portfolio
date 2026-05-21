import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { SiteChrome } from "@/components/layout/SiteChrome";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Product Portfolio | Shopify PM & Developer",
    template: "%s | Product Portfolio",
  },
  description:
    "Shopify developer building conversion-focused commerce products. Product showcase, case studies, PRDs, and roadmaps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
