import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../components/site";import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Maternity, Newborn & Wedding Photography in Nellore`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "photographer Nellore",
    "maternity photoshoot Nellore",
    "newborn photography Andhra Pradesh",
    "wedding photographer Nellore",
    "Trinetra Visuals",
    "portrait studio Nellore",
    "pre wedding shoot",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Maternity, Newborn & Wedding Photography in Nellore`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Maternity, Newborn & Wedding Photography in Nellore`,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000f23",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// Entity graph: ProfessionalService (studio) + WebSite, server-rendered in <head>.
function StudioJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#studio`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/hero-maternity.webp`,
        logo: `${SITE_URL}/LOGONAV.webp`,
        description: SITE_DESCRIPTION,
        telephone: "+917794950861",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Nellore",
          addressRegion: "Andhra Pradesh",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 14.4426, longitude: 79.9839 },
        hasMap:
          "https://www.google.com/maps/search/?api=1&query=Trinetra+Visuals+Nellore",
        sameAs: ["https://www.instagram.com/trinetravisuals_/"],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "20:00",
        },
        areaServed: ["Hyderabad", "Nellore", "Bengaluru", "Tirupati", "Vijayawada", "Chennai"],
        knowsAbout: [
          "Maternity photography",
          "Newborn photography",
          "Wedding photography",
          "Portrait photography",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "120",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#studio` },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <StudioJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#000f23]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
