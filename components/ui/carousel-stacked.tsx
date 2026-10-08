"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type PanInfo,
  type MotionValue,
} from "motion/react";

/*
 * Stacked Services Carousel — drag the deck and service cards fan out in 3D,
 * springing back to centre. Infinite loop, royal-blue/silver themed, built on
 * Trinetra's own public photos.
 */

interface Slide {
  image: string;
  title: string;
  description: string;
  badge: string;
}

const slides: Slide[] = [
  {
    image: "/477b617e-882a-421b-83fc-39a621284892.webp",
    title: "Wedding",
    description: "Grand entries to quiet glances — full-day stories.",
    badge: "Grand",
  },
  {
    image: "/hero-maternity.webp",
    title: "Maternity",
    description: "Goddess gowns, cinematic light and poses that honour the bump.",
    badge: "Most loved",
  },
  {
    image: "/b6af6cb7-2ae1-48b9-b7d6-b8732ddfbf61.webp",
    title: "Newborn",
    description: "Unhurried, safety-first sessions with hand-built props.",
    badge: "Tiny",
  },
  {
    image: "/0a50f1c3-02c2-46c1-80fe-014ab03503e6.webp",
    title: "Portraits",
    description: "Festive, fashion and family portraits with styling guidance.",
    badge: "You",
  },
  {
    image: "/8ff2291c-720b-4c3b-97bb-a580cf73cf11.webp",
    title: "Couple",
    description: "Pre-wedding and pair stories, styled head to toe.",
    badge: "Duet",
  },
];

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

const getCarouselConfig = (width: number): CarouselConfig => {
  if (width < 640) {
    return {
      distanceDivisor: 120,
      velocityDivisor: 500,
      sensitivity: 180,
      xMultiplier: 90,
      yMultiplier: 20,
      rotationMultiplier: 8,
      scaleReduction: 0.06,
    };
  }
  if (width < 1024) {
    return {
      distanceDivisor: 160,
      velocityDivisor: 650,
      sensitivity: 220,
      xMultiplier: 130,
      yMultiplier: 30,
      rotationMultiplier: 10,
      scaleReduction: 0.09,
    };
  }
  return {
    distanceDivisor: 200,
    velocityDivisor: 800,
    sensitivity: 250,
    xMultiplier: 170,
    yMultiplier: 40,
    rotationMultiplier: 12,
    scaleReduction: 0.12,
  };
};

const CarouselStacked = () => {
  const scrollProgress = useMotionValue(0);
  const startProgress = React.useRef(0);
  // Hydration-safe: server snapshot (1280) is used for SSR *and* hydration,
  // then React re-reads the live width after mount — no mismatch possible.
  const subscribeWidth = React.useCallback((onChange: () => void) => {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
  }, []);
  const windowWidth = React.useSyncExternalStore(
    subscribeWidth,
    () => window.innerWidth,
    () => 1280,
  );

  const total = slides.length;

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  const handleDragStart = () => {
    startProgress.current = scrollProgress.get();
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const dragDistance = info.offset.x;
    const velocity = info.velocity.x;

    const distanceShift = -dragDistance / config.distanceDivisor;
    const velocityShift = -velocity / config.velocityDivisor;

    let totalShift = Math.round(distanceShift + velocityShift);
    totalShift = Math.max(-3, Math.min(3, totalShift));

    const target = Math.round(startProgress.current) + totalShift;

    animate(scrollProgress, target, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      mass: 1,
    });
  };

  return (
    <div className="relative isolate flex w-full flex-col items-center justify-center overflow-hidden py-6 select-none">
      <div className="relative flex h-80 w-full max-w-7xl items-center justify-center sm:h-112 lg:h-128">
        {/* Transparent Drag Surface */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDrag={(_, info) => {
            const delta = -info.delta.x / config.sensitivity;
            scrollProgress.set(scrollProgress.get() + delta);
          }}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 z-50 cursor-grab active:cursor-grabbing"
        />

        {slides.map((slide, i) => (
          <Card
            key={slide.title}
            slide={slide}
            index={i}
            total={total}
            progress={scrollProgress}
            config={config}
          />
        ))}
      </div>
    </div>
  );
};

interface CardProps {
  slide: Slide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}

const Card = ({ slide, index, total, progress, config }: CardProps) => {
  const offset = useTransform(progress, (p) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x = useTransform(offset, (o) => o * config.xMultiplier);
  const rotate = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return o * config.rotationMultiplier;
  });
  const y = useTransform(offset, (o) => {
    const absO = Math.abs(o);
    if (absO < 0.05) return 0;
    return absO * config.yMultiplier;
  });
  const scale = useTransform(
    offset,
    (o) => 1 - Math.abs(o) * config.scaleReduction,
  );
  const opacity = useTransform(
    offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex = useTransform(offset, (o) =>
    Math.round(100 - Math.abs(o) * 10),
  );
  const shade = useTransform(
    offset,
    [-2, -0.5, 0, 0.5, 2],
    [0.5, 0.2, 0, 0.2, 0.5],
  );
  const textOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex }}
      className="group pointer-events-none absolute h-56 w-44 overflow-hidden rounded-2xl border border-white/15 bg-[#000f23] sm:h-80 sm:w-56 lg:h-96 lg:w-64"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.image}
        alt={slide.title}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <motion.div
        style={{ opacity: shade }}
        className="pointer-events-none absolute inset-0 bg-black"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <span className="absolute top-3 right-3 rounded-full bg-[#C7CCD6] px-2 py-0.5 text-xs font-bold tracking-widest text-[#000f23] uppercase sm:top-5 sm:right-5 sm:px-3 sm:py-1">
        {slide.badge}
      </span>

      <div className="absolute right-3 bottom-5 left-3 text-center text-white sm:right-5 sm:bottom-8 sm:left-5 sm:text-left lg:right-6 lg:bottom-10 lg:left-6">
        <motion.p
          style={{ opacity: textOpacity }}
          className="mb-0.5 text-sm leading-tight font-bold drop-shadow-md sm:mb-1 sm:text-lg lg:text-xl"
        >
          {slide.title}
        </motion.p>
        <motion.p
          style={{ opacity: textOpacity }}
          className="hidden text-xs font-medium text-white/70 italic line-clamp-2 sm:block"
        >
          {slide.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CarouselStacked;
