import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";
import { assetPath } from "@/lib/constants";
import { defaultMetadata } from "@/lib/seo";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  ...defaultMetadata,
  icons: {
    icon: assetPath("/images/logo.png"),
    apple: assetPath("/images/logo.png"),
  },
  keywords: [
    "DesertLaunch",
    "mobile apps",
    "business systems",
    "Flutter",
    "dashboards",
    "APIs",
    "payments",
    "software studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cinzel.variable} ${manrope.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
