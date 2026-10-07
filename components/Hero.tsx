import Link from "next/link";
import PolaroidLineCarousel from "./ui/polaroid-line-carousel";
import { WHATSAPP_URL } from "./contact";

const SLIDES = [
  { image: "/hero-maternity.webp", title: "Mama Glow", alt: "Maternity portrait in red saree holding a pot" },
  { image: "/0a50f1c3-02c2-46c1-80fe-014ab03503e6.webp", title: "Festive Muse", alt: "Portrait in pink and green traditional wear" },
  { image: "/0ca4084d-9bd3-4537-b135-a6d05844fae8.webp", title: "Silhouette Bump", alt: "Black and white maternity silhouette" },
  { image: "/285c37f6-3564-41b6-b4ed-88b13926f061.webp", title: "Tiny Toes", alt: "Newborn baby wrapped in pink with tulips" },
  { image: "/3629146f-ad39-4ef4-905b-33e02f3cd866.webp", title: "Earth Mama", alt: "Maternity portrait in a field at golden hour" },
  { image: "/3ae72689-e1f6-4863-8a39-5decdad47e2f.webp", title: "Sky Lehenga", alt: "Portrait in light blue lehenga outdoors" },
  { image: "/474af460-248d-480d-8135-397ad71ce064.webp", title: "Crimson Queen", alt: "Maternity portrait in red gown on red backdrop" },
  { image: "/477b617e-882a-421b-83fc-39a621284892.webp", title: "The Grand Entry", alt: "Bride walking toward a wedding mandap" },
  { image: "/58c982d6-8281-4de6-b303-3e7e0d7dca49.webp", title: "Seated Serenity", alt: "Seated maternity portrait in blue saree" },
  { image: "/60090bfa-2ec0-4f3b-afaf-eac07d98d4f4.webp", title: "Henna Hands", alt: "Mehndi hands detail on blue lehenga" },
  { image: "/60296081-7b2a-4a68-be75-b018704c595b.webp", title: "City Love", alt: "Couple portrait in the city" },
  { image: "/68ca6d28-d4ac-4ccc-a31f-1fa712c8dbf7.webp", title: "Royal Seat", alt: "Seated maternity portrait in pink and navy" },
  { image: "/68f9e3cb-7676-41a0-a88c-550a0b3b518b.webp", title: "Hatchling", alt: "Newborn curled in an eggshell prop" },
  { image: "/692255a1-8ac2-4af1-b6a7-ae0f766be680.webp", title: "Pink & Poised", alt: "Maternity portrait in pink saree holding a fruit plate" },
  { image: "/6b0a8219-a5f1-4710-bdef-fb715be37f54.webp", title: "Sky Muse", alt: "Portrait in light blue lehenga" },
  { image: "/6f9c1ecc-b1e4-4c1d-81c3-cbd2b42237ed.webp", title: "Wash Day", alt: "Childhood portrait at a laundry shoot" },
  { image: "/7d98606e-a616-4dd8-a7a6-a95c7fcc7bf9.webp", title: "Henna Portrait", alt: "Framed portrait showing mehndi" },
  { image: "/867e6d31-f089-44d8-8a1b-4f2bbaea4fd5.webp", title: "Bloom Detail", alt: "Jewellery and floral detail close-up" },
  { image: "/8ee5db12-96b9-4598-8d46-d2bef79450bc.webp", title: "Bloom Close", alt: "Necklace and floral close-up" },
  { image: "/8ff2291c-720b-4c3b-97bb-a580cf73cf11.webp", title: "Duet", alt: "Couple in pink traditional wear" },
  { image: "/9e3b6b55-95e8-4066-bd0b-4032863a8f49.webp", title: "Maroon Hour", alt: "Couple portrait against red curtains" },
  { image: "/a0adc7c8-eab1-4425-8c0c-7594494adbf6.webp", title: "Pampas Dream", alt: "Portrait in blue among pampas grass" },
  { image: "/a5344c2f-2c51-4e2d-a379-c0ed94414d42.webp", title: "Moon Bump", alt: "Maternity portrait in orange gown before the moon" },
  { image: "/aaefb11a-be42-40f9-b07a-7eaef74ba15c.webp", title: "Two-Tone Mama", alt: "Maternity portrait in pink and navy saree" },
  { image: "/b6af6cb7-2ae1-48b9-b7d6-b8732ddfbf61.webp", title: "Pumpkin Season", alt: "Newborn asleep inside a pumpkin prop" },
  { image: "/c1e99bef-ddc4-406f-b31b-8f579373f1d7.webp", title: "First Steps", alt: "Parents holding baby shoes" },
  { image: "/c582ee81-2227-4607-b2e9-8a4b44b8233b.webp", title: "Pot of Joy", alt: "Portrait holding a decorated pot" },
  { image: "/d5c0e723-e77d-43bc-86dd-c9c5df674748.webp", title: "Swing Muse", alt: "Portrait in purple saree on a flower swing" },
  { image: "/de8e3f0a-b795-43e4-83f5-3e210b56113f.webp", title: "Cradle Cutie", alt: "Newborn on a hanging bed prop" },
  { image: "/fc24dd55-2d89-4add-b54d-8c49da5f18aa.webp", title: "Red Reverie", alt: "Maternity portrait in red saree by the river" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-[#000f23] text-[#E8EBF1] md:min-h-[calc(100svh-6.5rem)]">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-2 text-center md:pt-12">
        <p className="text-[11px] font-medium tracking-[0.32em] text-[#C7CCD6] uppercase">
          Trinetra Visuals · Maternity · Newborn · Wedding
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl font-serif text-4xl leading-[1.08] font-medium text-balance md:text-6xl">
          Vow, Bump <span className="text-[#C7CCD6] italic">&amp; Giggle</span>
          <span className="mt-3 block text-xl font-normal tracking-wide text-[#E8EBF1] md:text-2xl">
            Weddings · Maternity · Newborn — framed forever.
          </span>
        </h1>
      </div>

      <PolaroidLineCarousel
        slides={SLIDES}
        height="54svh"
        cardWidth={320}
        sag={44}
        sagDesktop={120}
        swing={1}
        autoplay={4500}
        string="#C7CCD6"
        background="transparent"
        ink="#E8EBF1"
        ariaLabel="Trinetra Visuals hero gallery"
      />

      <div className="flex flex-wrap items-center justify-center gap-3 px-5 pb-6">
          <Link
            href="/portfolio"
          className="inline-flex h-11 items-center rounded-full bg-[#C7CCD6] px-6 text-[12px] font-semibold tracking-[0.14em] text-[#000f23] uppercase transition-colors hover:bg-white"
        >
          View Portfolio
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center rounded-full border border-[#C7CCD6]/50 px-6 text-[12px] font-semibold tracking-[0.14em] text-[#E8EBF1] uppercase transition-colors hover:border-white hover:text-white"
        >
          Book a Session
        </a>
      </div>

      <div className="mt-auto border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-3 text-center">
          {[
            ["500+", "shoots delivered"],
            ["Maternity", "newborn · wedding"],
            ["Gallery-ready", "in 7 days"],
          ].map(([big, small]) => (
            <div key={small} className="flex items-baseline gap-2">
              <span className="font-serif text-2xl text-white">{big}</span>
              <span className="text-[11px] tracking-[0.2em] text-[#C7CCD6] uppercase">
                {small}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
