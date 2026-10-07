import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  STUDIO_AREA,
  STUDIO_HOURS,
  WHATSAPP_URL,
} from "./contact";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#000f23] text-[#E8EBF1]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="Trinetra Visuals home">
            <Image
              src="/LOGOFOOTER.webp"
              alt="Trinetra Visuals"
              width={360}
              height={145}
              loading="lazy"
              className="h-16 w-auto object-contain mix-blend-screen"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#C7CCD6]">
            Nellore&apos;s premier photography studio — vow, bump &amp;
            giggle, framed forever.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#C7CCD6] uppercase">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-sm text-[#E8EBF1]/85 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold tracking-[0.28em] text-[#C7CCD6] uppercase">
            Studio
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-[#E8EBF1]/85">
            <li>{STUDIO_AREA}</li>
            <li>{STUDIO_HOURS}</li>
            <li>
              <a href={PHONE_TEL} className="transition-colors hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram · @trinetravisuals_
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center rounded-full bg-[#C7CCD6] px-5 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-[12px] text-[#C7CCD6]">
          <p>© 2026 Trinetra Visuals · All rights reserved</p>
          <p className="tracking-[0.2em] uppercase">Vow · Bump · Giggle</p>
        </div>
      </div>
    </footer>
  );
}
