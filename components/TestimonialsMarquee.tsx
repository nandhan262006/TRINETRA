import { TESTIMONIALS } from "./testimonials";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-4 pr-4" aria-hidden={hidden || undefined}>
      {TESTIMONIALS.map((t) => (
        <figure
          key={t.name}
          className="w-72 shrink-0 rounded-2xl border border-[#C7CCD6]/25 bg-white/[0.04] p-5 sm:w-80"
        >
          <div className="text-sm text-[#C7CCD6]" aria-label="5 star review">
            ★★★★★
          </div>
          <blockquote className="mt-2 line-clamp-4 font-serif text-[15px] leading-6 text-white italic">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-3">
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-[10px] tracking-[0.18em] text-[#C7CCD6] uppercase">
              {t.detail}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <section className="w-full overflow-hidden py-14">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Client words
        </p>
        <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
          Loved across Nellore
        </h2>
      </div>
      <div className="marquee mt-8 flex w-max animate-marquee gap-0">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
