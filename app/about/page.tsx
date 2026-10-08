import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "../../components/testimonials";
import { WHATSAPP_URL } from "../../components/contact";
import { SITE_URL } from "../../components/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About — Nellore's Premier Photography Studio",
  description:
    "Trinetra Visuals is a premier wedding, maternity and newborn photography studio based in Nellore, Andhra Pradesh.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About — Trinetra Visuals, Nellore",
    description:
      "Premier wedding, maternity and newborn photography studio in Nellore.",
    url: `${SITE_URL}/about`,
  },
};

const STATS: [string, string][] = [
  ["500+", "shoots delivered"],
  ["6+", "years behind the lens"],
];

const CRAFT = [  {
    title: "Wedding",
    text: "From grand mandap entries to quiet in-between glances — full-day stories, gallery-ready.",
  },
  {
    title: "Maternity",
    text: "Goddess-style gowns, cinematic light and poses that honour the bump — in-studio or on location.",
  },
  {
    title: "Newborn",
    text: "Unhurried, safety-first sessions with hand-built props, wraps and dreamy pastel sets.",
  },
  {
    title: "Portraits",
    text: "Festive, fashion and family portraits with styling guidance before every shoot.",
  },
];

const FAQS = [
  {
    q: "How far in advance should we book?",
    a: "Maternity shoots book best in your 6th–7th month, ideally 3–4 weeks ahead. Weddings need 2–3 months. Newborn sessions can be arranged within days of delivery — just WhatsApp us.",
  },
  {
    q: "What is the right age for a newborn shoot?",
    a: "Between 5 and 14 days, when babies sleep deepest and curl naturally. That said, we photograph babies of every age — each stage has its own magic.",
  },
  {
    q: "Do you provide outfits and props?",
    a: "Yes. Signature maternity gowns, newborn wraps, baskets, themed props and backdrops are all in-studio. Just bring yourselves — and one family heirloom if you like.",
  },
  {
    q: "When do we receive our photos?",
    a: "Your edited, print-ready gallery arrives within 7 days of the shoot — in writing, in your booking confirmation.",
  },
  {
    q: "Do you travel outside Nellore?",
    a: "Absolutely. With our home studio in Nellore, we regularly shoot in Hyderabad, Bengaluru, Tirupati, Vijayawada and Chennai. Travel within Nellore is included; outside trips add a small travel fee.",
  },
  {
    q: "How do we book?",
    a: "Tap any WhatsApp button on this site with your occasion and dates. A small advance locks your slot; the balance is due on shoot day.",
  },
];

export default function AboutPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <main className="flex flex-1 flex-col bg-[#000f23] text-[#E8EBF1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-6 text-center md:pt-16">
        <div className="mb-4 flex justify-center">
          <Breadcrumbs items={[{ name: "About" }]} />
        </div>
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Our Story
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight font-medium md:text-6xl">
          Nellore&apos;s premier photography studio
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#C7CCD6]">
          Trinetra Visuals began in Nellore with one belief — your biggest
          moments deserve bigger frames. Today we shoot wedding, maternity,
          newborn and portrait stories in Hyderabad | Nellore | Bengaluru and
          beyond.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-8 md:grid-cols-2">
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-2xl border border-white/10 md:max-w-sm">
          <Image
            src="/hero-maternity.webp"
            alt="Signature maternity portrait by Trinetra Visuals"
            width={906}
            height={1280}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-white">Why families choose us</h2>
          <ul className="mt-5 space-y-4 text-[15px] leading-7 text-[#C7CCD6]">
            <li>
              <strong className="text-white">Signature styling.</strong> Gowns,
              props, backdrops and colour palettes are planned with you before
              shoot day.
            </li>
            <li>
              <strong className="text-white">Comfort first.</strong> Private
              studio space in Nellore, unhurried newborn pacing, and poses
              guided frame by frame.
            </li>
            <li>
              <strong className="text-white">Gallery in 7 days.</strong> Edited,
              print-ready images delivered fast — no chasing, no waiting months.
            </li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center rounded-full border border-[#C7CCD6]/50 px-6 text-[12px] font-semibold tracking-[0.14em] text-[#E8EBF1] uppercase transition-colors hover:border-white hover:text-white"
            >
              See the Work
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>

      <div className="border-y border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-5 py-6 text-center">
          {STATS.map(([big, small]) => (
            <div key={small} className="flex items-baseline gap-2">
              <span className="font-serif text-3xl text-white">{big}</span>
              <span className="text-[11px] tracking-[0.2em] text-[#C7CCD6] uppercase">
                {small}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 py-12">
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          What we shoot
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {CRAFT.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-[#C7CCD6]/25 bg-white/[0.04] p-6"
            >
              <h3 className="font-serif text-2xl text-white italic">{c.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#C7CCD6]">{c.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Words from our clients
        </p>
        <h2 className="mt-2 font-serif text-3xl text-white">Loved across Nellore</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-[#C7CCD6]/25 bg-white/[0.04] p-6"
            >
              <div className="text-[#C7CCD6]" aria-label="5 star review">
                ★★★★★
              </div>
              <blockquote className="mt-3 flex-1 font-serif text-[17px] leading-7 text-white italic">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-[11px] tracking-[0.18em] text-[#C7CCD6] uppercase">
                  {t.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-12 text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Good to know
        </p>
        <h2 className="mt-2 font-serif text-3xl text-white">Quick answers</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {FAQS.map((f) => (
            <div
              key={f.q}
              className="rounded-2xl border border-[#C7CCD6]/25 bg-white/[0.04] p-6"
            >
              <h3 className="font-semibold text-white">{f.q}</h3>
              <p className="mt-2 text-sm leading-6 text-[#C7CCD6]">{f.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-[#C7CCD6]">
          Based in Nellore · serving Hyderabad | Nellore | Bengaluru —{" "}
          <Link href="/contact" className="text-white underline underline-offset-4">
            say hello
          </Link>
        </p>
      </div>
    </main>
  );
}
