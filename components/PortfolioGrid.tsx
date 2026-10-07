"use client";

import { useState } from "react";
import Image from "next/image";
import { CATEGORIES, PHOTOS, type PhotoCategory } from "./photos";
import { WHATSAPP_URL } from "./contact";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<PhotoCategory | "all">("all");
  const visible =
    filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.category === filter);

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => {
          const count =
            c.id === "all"
              ? PHOTOS.length
              : PHOTOS.filter((p) => p.category === c.id).length;
          const on = filter === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              aria-pressed={on}
              className={`inline-flex h-10 items-center gap-2 rounded-full px-5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                on
                  ? "bg-[#C7CCD6] text-[#000f23]"
                  : "border border-[#C7CCD6]/40 text-[#C7CCD6] hover:border-white hover:text-white"
              }`}
            >
              {c.label}
              <span className={on ? "opacity-60" : "opacity-50"}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 columns-2 gap-4 md:columns-3 [column-fill:balance]">
        {visible.map((p) => (
          <figure
            key={p.src}
            className="group relative mb-4 overflow-hidden rounded-xl border border-white/10 break-inside-avoid"
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
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-[#000f23]/90 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-serif text-lg text-white italic">{p.title}</span>
              <span className="shrink-0 text-[10px] tracking-[0.2em] text-[#C7CCD6] uppercase">
                {p.category}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-3 pb-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
        >
          Book This Style
        </a>
      </div>
    </>
  );
}
