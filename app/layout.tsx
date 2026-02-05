import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechFest 2K26 | National Technical Symposium | Karpagam CSE Coimbatore Feb 12",
  description: "Join TechFest 2K26 at Karpagam Academy, Coimbatore on Feb 12, 2026. National symposium with Agentic AI workshop, coding challenges, project expo & prizes. Register now for ₹200 Tech Pass!",
  applicationName: "TechFest 2K26",
  keywords: [
    "TechFest 2K26",
    "tech fest 2k26 Karpagam",
    "technical symposium Coimbatore",
    "Agentic AI workshop",
    "coding competition Tamil Nadu",
    "National Level Symposium",
    "CSE Department",
    "Karpagam",
    "Metaverse",
    "Symposium in Coimbatore",
    "Karpagam Academy of Higher Education",
    "KAHE CSE",
    "Metaverse Association",
    "TechFest 2026",
    "Engineering Events Coimbatore",
    "Hackathon 2026",
    "Paper Presentation",
    "Project Expo",
    "AI Workshops"
  ],
  authors: [{ name: "Metaverse Association Team" }, { name: "Dept of CSE, KAHE" }],
  creator: "Metaverse Association",
  publisher: "Karpagam Academy of Higher Education",
  metadataBase: new URL('https://techfest2k26.vercel.app'),
  alternates: {
    canonical: 'https://techfest2k26.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techfest2k26.vercel.app/",
    title: "TechFest 2K26 | Karpagam CSE National Tech Symposium",
    description: "Experience AI workshops, Tech Coders, Dreams in Digital & more at TechFest 2K26. Feb 12, Coimbatore. Register today!",
    siteName: "TechFest 2K26",
    images: [
      {
        url: "/metaverse-logo.png", // Replaced with logo as valid image, user suggested og-image.jpg but it does not exist
        width: 1200,
        height: 630,
        alt: "TechFest 2K26 - National Level Technical Symposium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFest 2K26 | Karpagam CSE National Tech Symposium",
    description: "Experience AI workshops, Tech Coders, Dreams in Digital & more at TechFest 2K26. Feb 12, Coimbatore. Register today!",
    images: ["/metaverse-logo.png"],
    creator: "@kahe_official",
  },
  icons: {
    icon: '/metaverse-logo.png',
    shortcut: '/metaverse-logo.png',
    apple: '/metaverse-logo.png',
  },
  category: "technology",
  verification: {
    google: "PLACEHOLDER_VERIFICATION_CODE",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      "me": ["my-email", "my-link"],
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "10.9617;77.0261",
    "ICBM": "10.9617, 77.0261",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    title: "Tech Fest 2k26",
    statusBarStyle: "black-translucent",
  },
  classification: "Technical Symposium",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Tech Fest 2K26",
      "startDate": "2026-02-12T09:00:00+05:30",
      "endDate": "2026-02-12T17:00:00+05:30",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Karpagam Academy of Higher Education",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Pollachi Main Road, Eachanari Post",
          "addressLocality": "Coimbatore",
          "postalCode": "641021",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        }
      },
      "image": [
        "https://techfest2k26.vercel.app/metaverse-logo.png",
        "https://techfest2k26.vercel.app/college-logo.png"
      ],
      "description": "Join Tech Fest 2k26, the National Level Symposium in CBE, Tamil Nadu. Organized by CSE Department, Karpagam (KAHE) & Metaverse Association. Featuring Hackathons, Workshops, and Coding Challenges.",
      "organizer": {
        "@type": "Organization",
        "name": "Department of CSE, KAHE & Metaverse Association",
        "url": "https://heylink.me/METAVERSE_ASSOCIATION"
      },
      "offers": {
        "@type": "Offer",
        "price": "200",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "url": "https://docs.google.com/forms/d/1tsiLFyOveddLrO794Vqn5WqIdr2A-1GrGI8rC0A4_HM/viewform"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Metaverse Association",
      "url": "https://heylink.me/METAVERSE_ASSOCIATION",
      "logo": "https://techfest2k26.vercel.app/metaverse-logo.png",
      "sameAs": [
        "https://www.instagram.com/metaverse_association",
        "https://www.linkedin.com/company/metaverse-association"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9876543210",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "ta"]
      }
    }
  ];

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-neon-green selection:bg-neon-green selection:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
