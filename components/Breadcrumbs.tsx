import Link from "next/link";
import { SITE_URL } from "./site";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
      })),
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-[12px] tracking-[0.14em] uppercase">
        <ol className="flex flex-wrap items-center gap-2 text-[#C7CCD6]">
          <li>
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
          </li>
          {items.map((c) => (
            <li key={c.name} className="flex items-center gap-2">
              <span aria-hidden="true" className="opacity-50">/</span>
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-white">
                  {c.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-white">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
