import Image from "next/image";

type PolaroidProps = {
  src: string;
  alt: string;
  /** Real pixel dimensions — card height adapts, never crops. */
  width: number;
  height: number;
  caption?: string;
  rotate?: number;
  className?: string;
};

export default function Polaroid({
  src,
  alt,
  width,
  height,
  caption,
  rotate = 0,
  className = "",
}: PolaroidProps) {
  return (
    <figure
      className={`group relative bg-[#F5F3EC] p-2.5 pb-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] transition-transform duration-300 hover:z-30 hover:scale-[1.04] hover:rotate-0 ${className}`}
      style={{ rotate: `${rotate}deg` }}
    >
      {/* tape */}
      <span
        aria-hidden="true"
        className="absolute -top-3 left-1/2 z-10 h-6 w-20 -translate-x-1/2 rotate-[-4deg] bg-[#C7CCD6]/80 shadow-sm"
      />
      <div className="overflow-hidden bg-[#0A1866]/5">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 45vw, 320px"
          className="h-auto w-full object-contain"
          priority={false}
        />
      </div>
      {caption && (
        <figcaption className="pt-2 text-center font-serif text-[13px] tracking-wide text-[#2A2F3A] italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
