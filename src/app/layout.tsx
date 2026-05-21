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
    default: "Amisha Jha | Shopify Developer & Product Portfolio",
    template: "%s | Amisha Jha",
  },
  description:
    "Shopify developer building conversion-focused commerce products. Product showcase, case studies, PRDs, and roadmaps.",
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Amisha Jha | Shopify Developer & Product Portfolio",
    description:
      "Shopify developer building conversion-focused commerce products.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Amisha Jha" }],
  },
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
