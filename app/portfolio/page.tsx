import type { Metadata } from "next";
import PortfolioGrid from "../../components/PortfolioGrid";
import Breadcrumbs from "../../components/Breadcrumbs";
import { SITE_URL } from "../../components/site";

export const metadata: Metadata = {
  title: "Portfolio — 30 Real Shoots",
  description:
    "Wedding, maternity, newborn and portrait galleries by Trinetra Visuals, Nellore.",
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: "Portfolio — Trinetra Visuals",
    description: "30 real wedding, maternity, newborn and portrait shoots.",
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <main className="flex flex-1 flex-col bg-[#000f23] text-[#E8EBF1]">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-4 text-center md:pt-16">
        <div className="mb-4 flex justify-center">
          <Breadcrumbs items={[{ name: "Portfolio" }]} />
        </div>
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          The Work
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight font-medium md:text-6xl">
          Portfolio
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#C7CCD6]">
          Wedding, maternity, newborn &amp; portraits — every frame at its
          natural ratio, nothing cropped.
        </p>
      </div>
      <div className="mx-auto w-full max-w-6xl px-5 pb-14">
        <PortfolioGrid />
      </div>
    </main>
  );
}
