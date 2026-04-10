import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { QuickContact } from "@/components/sections/QuickContact";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    title: SITE.title,
    description: SITE.description,
  },
};

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)]">
      <Header />
      <main>
        <Hero />
        <QuickContact />
        <About />
        <Work />
        <Services />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
