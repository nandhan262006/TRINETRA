"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAIL_DISPLAY, EMAIL_MAILTO, INSTAGRAM_URL, WHATSAPP_URL } from "./contact";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Trinetra Visuals home">
      <Image
        src="/LOGONAV.webp"
        alt="Trinetra Visuals"
        width={220}
        height={64}
        priority
        className="h-11 w-auto object-contain mix-blend-screen md:h-12"
      />
    </Link>
  );
}

function DesktopNav({ pathname }: { pathname: string }) {
  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href.replace("/#", "/"));
        return (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[12px] font-medium tracking-[0.18em] uppercase transition-colors hover:text-white ${
              isActive ? "text-white" : "text-[#C7CCD6]"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-10 items-center justify-center rounded-full bg-[#C7CCD6] px-5 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white ${className}`}
    >
      Book a Session
    </a>
  );
}

function MobileMenuButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
      className="grid size-10 place-items-center rounded-full border border-[#C7CCD6]/40 text-[#E8EBF1] lg:hidden"
    >
      {open ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )}
    </button>
  );
}

function MobileNav({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  if (!open) return null;
  return (
    <nav
      className="border-t border-white/15 bg-[#000f23] px-5 pt-3 pb-6 text-[#E8EBF1] lg:hidden"
      aria-label="Mobile"
    >
      <ul className="flex flex-col">
        {NAV_LINKS.map((link) => (
          <li key={link.label} className="border-b border-white/10 last:border-0">
            <Link
              href={link.href}
              onClick={onNavigate}
              className="flex items-center justify-between py-3.5 text-sm tracking-[0.18em] text-[#E8EBF1] uppercase"
            >
              {link.label}
              <span aria-hidden="true" className="text-[#C7CCD6]">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <CtaButton className="mt-4 w-full" />
    </nav>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile links already close the menu via onNavigate.

  return (
    <header
      className={`sticky top-0 z-50 bg-[#000f23] text-[#E8EBF1] transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(199,204,214,0.35)]" : ""
      }`}
    >
      {/* Top utility strip */}
      <div className="hidden border-b border-white/15 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-1.5 text-[11px] tracking-[0.16em] text-[#C7CCD6] uppercase">
          <p>Available for weddings · portraits · editorial</p>
          <div className="flex items-center gap-4">
            <a href={EMAIL_MAILTO} className="transition-colors hover:text-white">
              {EMAIL_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Logo />
        <DesktopNav pathname={pathname} />
        <div className="flex items-center gap-3">
          <CtaButton className="hidden lg:inline-flex" />
          <MobileMenuButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>
      </div>

      <MobileNav open={open} onNavigate={() => setOpen(false)} />
    </header>
  );
}
