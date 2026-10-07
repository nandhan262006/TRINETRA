import type { Metadata } from "next";
import {
  MAP_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  STUDIO_AREA,
  STUDIO_HOURS,
  STUDIO_NAME,
  WHATSAPP_URL,
} from "../../components/contact";
import { SITE_URL } from "../../components/site";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact — Book Your Date",
  description:
    "Visit the Trinetra Visuals studio in Nellore, call or WhatsApp +91 891 969 1473 to book your maternity, newborn or wedding shoot.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact — Trinetra Visuals",
    description: "Map, call and WhatsApp booking for shoots in Nellore.",
    url: `${SITE_URL}/contact`,
  },
};

const CARDS = [
  {
    title: "WhatsApp us",
    text: "Fastest reply — usually within the hour.",
    label: `Chat · ${PHONE_DISPLAY}`,
    href: WHATSAPP_URL,
    external: true,
    primary: true,
  },
  {
    title: "Call the studio",
    text: "Prefer talking? We pick up 9 AM – 8 PM.",
    label: `Call · ${PHONE_DISPLAY}`,
    href: PHONE_TEL,
    external: false,
    primary: false,
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col bg-gradient-to-b from-[#0A1866] via-[#1226AA] to-[#070F4A] text-[#E8EBF1]">
      <div className="mx-auto w-full max-w-6xl px-5 pt-12 pb-6 text-center md:pt-16">
        <div className="mb-4 flex justify-center">
          <Breadcrumbs items={[{ name: "Contact" }]} />
        </div>
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Say hello
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl font-serif text-4xl leading-tight font-medium md:text-6xl">
          Let&apos;s book your date
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#C7CCD6]">
          One tap and you&apos;re chatting with the studio — tell us your
          occasion and dates, we&apos;ll take it from there.
        </p>
      </div>

      <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 pb-8 sm:grid-cols-2">
        {CARDS.map((c) => (
          <a
            key={c.title}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className={`rounded-2xl border p-6 transition-colors ${
              c.primary
                ? "border-[#C7CCD6]/50 bg-[#C7CCD6] text-[#0B1C7A] hover:bg-white"
                : "border-[#C7CCD6]/25 bg-white/[0.04] text-[#E8EBF1] hover:border-white"
            }`}
          >
            <h2 className="font-serif text-2xl italic">{c.title}</h2>
            <p className={`mt-1 text-sm ${c.primary ? "text-[#0B1C7A]/70" : "text-[#C7CCD6]"}`}>
              {c.text}
            </p>
            <p className="mt-4 text-[13px] font-bold tracking-[0.12em] uppercase">
              {c.label} →
            </p>
          </a>
        ))}
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pb-4">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title={`${STUDIO_NAME} on Google Maps`}
            src={MAP_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-[380px] w-full md:h-[450px]"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#C7CCD6]/25 bg-white/[0.04] p-5">
          <div>
            <p className="font-serif text-xl text-white">{STUDIO_NAME}</p>
            <p className="mt-1 text-sm text-[#C7CCD6]">
              {STUDIO_AREA} · {STUDIO_HOURS}
            </p>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Trinetra+Visuals+Nellore"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center rounded-full border border-[#C7CCD6]/40 px-5 text-[12px] font-semibold tracking-[0.14em] text-[#C7CCD6] uppercase transition-colors hover:border-white hover:text-white"
          >
            Get Directions →
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-6 pb-14 text-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 items-center rounded-full bg-[#C7CCD6] px-8 text-[13px] font-bold tracking-[0.14em] text-[#0B1C7A] uppercase transition-colors hover:bg-white"
        >
          WhatsApp {PHONE_DISPLAY}
        </a>
      </div>
    </main>
  );
}
