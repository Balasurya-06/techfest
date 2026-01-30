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
  title: "TECH FEST 2K26 | National Level Technical Symposium | KAHE CSE & Metaverse",
  description: "Welcome to Tech Fest 2K26, the ultimate National Level Technical Symposium hosted by the Department of CSE, Karpagam Academy of Higher Education (KAHE) in association with the Metaverse Association. Join us for elite coding challenges, hackathons, paper presentations, and cutting-edge workshops on Agentic AI and more. The biggest tech event in Coimbatore for 2026.",
  applicationName: "Tech Fest 2K26",
  keywords: [
    // Core Event Keywords
    "Tech Fest 2K26",
    "TechFest 2026",
    "KAHE Symposium",
    "National Level Technical Symposium",
    "CSE Symposium 2026",
    "Karpagam Academy of Higher Education Events",
    
    // Departments & Associations
    "KAHE CSE",
    "Department of Computer Science and Engineering",
    "Metaverse Association",
    "Metaverse KAHE",
    "Karpagam College of Engineering",
    
    // Location Specific
    "Technical Symposium in Coimbatore",
    "Symposium in Tamil Nadu",
    "Engineering Events Coimbatore",
    "College Fests in Coimbatore 2026",
    
    // Event Specifics
    "Hackathon 2026",
    "Coding Contests",
    "Paper Presentation CSE",
    "Project Expo 2026",
    "AI Workshops",
    "Agentic AI Workshop",
    "Non-Technical Events",
    "Student Symposium",
    "Inter-College Competition"
  ],
  authors: [{ name: "Metaverse Association Team" }, { name: "Dept of CSE, KAHE" }],
  creator: "Metaverse Association",
  publisher: "Karpagam Academy of Higher Education",
  metadataBase: new URL('https://techfest2k26.vercel.app'),
  alternates: {
    canonical: '/',
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
    url: "https://techfest2k26.vercel.app",
    title: "TECH FEST 2K26 | Innovation & Intelligence | KAHE CSE",
    description: "Join the revolution at Tech Fest 2K26! Organized by KAHE CSE & Metaverse Association. Experience the future with Hackathons, Workshops, and Tech Talks.",
    siteName: "Tech Fest 2K26",
    images: [
      {
        url: "/metaverse-logo.png", // Ideally update this to a dedicated banner image in future
        width: 1200,
        height: 630,
        alt: "Tech Fest 2K26 - National Level Technical Symposium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECH FEST 2K26 | KAHE CSE & Metaverse",
    description: "The biggest National Level Technical Symposium by KAHE CSE. Register now for Tech Fest 2K26!",
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
    google: "PLACEHOLDER_VERIFICATION_CODE", // Add your Google Search Console verification code here
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      "me": ["my-email", "my-link"],
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "10.9617;77.0261", // Coordinates for KAHE
    "ICBM": "10.9617, 77.0261",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
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
    "description": "National Level Technical Symposium organized by Dept of CSE, KAHE. Featuring Hackathons, Workshops, and Coding Challenges.",
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
  };

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
