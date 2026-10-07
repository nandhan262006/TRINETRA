import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import CarouselStacked from "../components/ui/carousel-stacked";
import TestimonialsMarquee from "../components/TestimonialsMarquee";
import { PHOTOS } from "../components/photos";
import { POSTS } from "../components/posts";
import { MAP_EMBED_SRC, PHONE_DISPLAY, PHONE_TEL, STUDIO_AREA, STUDIO_NAME, WHATSAPP_URL } from "../components/contact";

const HIGHLIGHTS = [
  "/hero-maternity.webp",
  "/a5344c2f-2c51-4e2d-a379-c0ed94414d42.webp",
  "/477b617e-882a-421b-83fc-39a621284892.webp",
  "/285c37f6-3564-41b6-b4ed-88b13926f061.webp",
  "/b6af6cb7-2ae1-48b9-b7d6-b8732ddfbf61.webp",
  "/474af460-248d-480d-8135-397ad71ce064.webp",
].map((src) => PHOTOS.find((p) => p.src === src)!);

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-[#000f23]">
      <Hero />

      <section id="portfolio" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
              Selected Work
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
              Portfolio Highlights
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex h-10 items-center rounded-full border border-[#C7CCD6]/40 px-5 text-[12px] font-semibold tracking-[0.14em] text-[#C7CCD6] uppercase transition-colors hover:border-white hover:text-white"
          >
            View Full Portfolio →
          </Link>
        </div>

        <div className="mt-8 columns-2 gap-4 md:columns-3">
          {HIGHLIGHTS.map((p) => (
            <Link
              key={p.src}
              href="/portfolio"
              className="group relative mb-4 block overflow-hidden rounded-xl border border-white/10 break-inside-avoid"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#000f23]/90 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-serif text-lg text-white italic">{p.title}</span>
                <span className="shrink-0 text-[10px] tracking-[0.2em] text-[#C7CCD6] uppercase">
                  {p.category}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="/a5344c2f-2c51-4e2d-a379-c0ed94414d42.webp"
            alt="Maternity portrait in orange gown before the moon"
            width={1024}
            height={1536}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
            className="h-auto w-full"
          />
        </div>
        <div>
          <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
            The Studio
          </p>
          <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
            Nellore&apos;s premier photography studio
          </h2>
          <p className="mt-4 max-w-md text-lg leading-8 text-[#C7CCD6] md:text-xl md:leading-9">
            Trinetra Visuals is Nellore&apos;s premier photography studio,
            crafting cinematic maternity, newborn, wedding and portrait
            stories. Every session is styled around you — signature gowns,
            hand-built newborn props and grand wedding frames — shot
            unhurried, guided pose by pose, and delivered gallery-ready in
            7 days.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Maternity", "Newborn", "Wedding", "Portraits"].map((t) => (
              <span
                key={t}
                className="inline-flex h-8 items-center rounded-full border border-[#C7CCD6]/30 px-3.5 text-[11px] tracking-[0.16em] text-[#E8EBF1] uppercase"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-8 gap-y-2">
            {[
              ["500+", "shoots"],
              ["6+", "years"],
              ["4.9★", "rated"],
            ].map(([big, small]) => (
              <div key={small} className="flex items-baseline gap-2">
                <span className="font-serif text-2xl text-white">{big}</span>
                <span className="text-[11px] tracking-[0.2em] text-[#C7CCD6] uppercase">
                  {small}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
            >
              Our Story →
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center rounded-full border border-[#C7CCD6]/40 px-6 text-[12px] font-semibold tracking-[0.14em] text-[#C7CCD6] uppercase transition-colors hover:border-white hover:text-white"
            >
              See the Work
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-14 text-center">
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Services
        </p>
        <h2 className="mx-auto mt-2 max-w-xl font-serif text-3xl text-white md:text-4xl">
          Drag the deck — pick your story
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-[#C7CCD6]">
          Five signature shoots, styled and guided end to end.
        </p>
        <CarouselStacked />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
        >
          Check Dates →
        </a>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
              From the Journal
            </p>
            <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
              Stories &amp; sharp advice
            </h2>
          </div>
          <Link
            href="/journal"
            className="inline-flex h-10 items-center rounded-full border border-[#C7CCD6]/40 px-5 text-[12px] font-semibold tracking-[0.14em] text-[#C7CCD6] uppercase transition-colors hover:border-white hover:text-white"
          >
            All Stories →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
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
                <span className="absolute top-3 left-3 rounded-full bg-[#C7CCD6] px-3 py-1 text-[10px] font-bold tracking-[0.16em] text-[#000f23] uppercase">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#C7CCD6]">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TestimonialsMarquee />

      <section id="contact" className="mx-auto w-full max-w-6xl scroll-mt-28 px-5 py-14">
        <div className="rounded-3xl border border-[#C7CCD6]/30 bg-[#000f23] p-8 text-center md:p-12">
          <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
            Contact · {PHONE_DISPLAY}
          </p>
          <h2 className="mx-auto mt-2 max-w-xl font-serif text-3xl leading-tight text-white md:text-4xl">
            Your date is one tap away.
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
            >
              WhatsApp Us
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex h-11 items-center rounded-full border border-white/40 px-6 text-[12px] font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-white"
            >
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-[#C7CCD6]/40 px-6 text-[12px] font-semibold tracking-[0.14em] text-[#C7CCD6] uppercase transition-colors hover:border-white hover:text-white"
            >
              Visit Studio →
            </Link>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-3xl border border-white/10">
          <iframe
            title={`${STUDIO_NAME} on Google Maps`}
            src={MAP_EMBED_SRC}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="block h-[320px] w-full md:h-[380px]"
          />
        </div>
        <p className="mt-4 text-center text-sm text-[#C7CCD6]">
          {STUDIO_NAME} · {STUDIO_AREA} · Open all days, 9 AM – 8 PM
        </p>
      </section>
    </main>
  );
}
