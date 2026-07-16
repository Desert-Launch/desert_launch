import { Inter, Tajawal } from "next/font/google";

// Latin UI font. Exposed as the CSS var the design tokens point at.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

// Arabic UI font for the RTL locale.
export const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const fontVars = `${inter.variable} ${tajawal.variable}`;
