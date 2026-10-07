import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "../../../components/posts";
import { WHATSAPP_URL } from "../../../components/contact";
import { SITE_URL } from "../../../components/site";
import Breadcrumbs from "../../../components/Breadcrumbs";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Not found — Trinetra Visuals" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/journal/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/journal/${post.slug}`,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.cover,
    datePublished: "2026-09-01",
    author: {
      "@type": "Organization",
      name: "Trinetra Visuals",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Trinetra Visuals",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/journal/${post.slug}`,
  };

  return (
    <main className="flex flex-1 flex-col bg-[#000f23] text-[#E8EBF1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="mx-auto w-full max-w-3xl px-5 pt-12 pb-16 md:pt-16">
        <Breadcrumbs items={[{ name: "Journal", href: "/journal" }, { name: post.title }]} />
        <Link
          href="/journal"
          className="mt-6 inline-block text-[12px] font-semibold tracking-[0.16em] text-[#C7CCD6] uppercase hover:text-white"
        >
          ← All stories
        </Link>
        <p className="mt-6 text-[11px] tracking-[0.2em] text-[#C7CCD6] uppercase">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight font-medium text-white md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 font-serif text-lg leading-8 text-[#C7CCD6] italic">
          {post.excerpt}
        </p>

        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            width={1600}
            height={1000}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="mt-8 space-y-5">
          {post.content.map((block, i) =>
            block.startsWith("## ") ? (
              <h2 key={i} className="pt-3 font-serif text-2xl text-white">
                {block.replace("## ", "")}
              </h2>
            ) : (
              <p key={i} className="text-[16px] leading-8 text-[#DDE1E9]">
                {block}
              </p>
            ),
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-[#C7CCD6]/30 bg-white/[0.05] p-8 text-center">
          <h2 className="font-serif text-2xl text-white">
            Like how we think? You&apos;ll love how we shoot.
          </h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
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
      </article>
    </main>
  );
}
