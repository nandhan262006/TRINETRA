import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "../../components/posts";
import { SITE_URL } from "../../components/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Journal — Shoot Advice & Stories",
  description:
    "Wedding timelines, booking advice and slow mornings — notes from the Trinetra Visuals studio.",
  alternates: { canonical: `${SITE_URL}/journal` },
  openGraph: {
    title: "Journal — Trinetra Visuals",
    description: "Shoot planning advice from a Nellore photography studio.",
    url: `${SITE_URL}/journal`,
  },
};

export default function JournalPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-[#0A1866] via-[#1226AA] to-[#070F4A] text-[#E8EBF1]">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-4 text-center md:pt-16">
        <div className="mb-4 flex justify-center">
          <Breadcrumbs items={[{ name: "Journal" }]} />
        </div>
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Notes from the studio
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight font-medium md:text-6xl">
          Journal
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#C7CCD6]">
          Timelines, hard-won advice and love letters to slow wedding mornings.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 py-10 md:grid-cols-3">
        {POSTS.map((p) => (
          <Link
            key={p.slug}
            href={`/journal/${p.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors hover:border-[#C7CCD6]/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={p.cover}
                alt={p.coverAlt}
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute top-3 left-3 rounded-full bg-[#C7CCD6] px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#0B1C7A] uppercase">
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[11px] tracking-[0.18em] text-[#C7CCD6] uppercase">
                {p.date} · {p.readTime}
              </p>
              <h2 className="mt-2 font-serif text-xl leading-snug text-white">
                {p.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#C7CCD6]">
                {p.excerpt}
              </p>
              <span className="mt-4 inline-block text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                Read →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
