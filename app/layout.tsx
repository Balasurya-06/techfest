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
  title: "TECH FEST 2K26 | National Level Technical Symposium | KAHE CSE",
  description: "Join Tech Fest 2K26, the premier National Level Technical Symposium organized by the Dept of CSE at Karpagam Academy of Higher Education (KAHE). Featuring coding contests, workshops, paper presentations, and more. Powered by Metaverse.",
  keywords: [
    "Tech Fest 2K26",
    "KAHE",
    "Karpagam Academy of Higher Education",
    "CSE",
    "Computer Science Engineering",
    "Metaverse",
    "Symposium",
    "Technical Symposium",
    "National Level Symposium",
    "Coimbatore Events",
    "Engineering Events",
    "Hackathon",
    "Coding Contest",
    "Workshops",
    "Paper Presentation",
    "Project Expo",
    "Metaverse KAHE",
    "CSE Symposium",
    "Student Events",
    "Technology Festival"
  ],
  authors: [{ name: "Metaverse Team" }, { name: "Dept of CSE, KAHE" }],
  creator: "Metaverse Team",
  publisher: "Karpagam Academy of Higher Education",
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
    url: "https://techfest2k26.kahe.edu.in", // Placeholder, updated dynamically if deployed
    title: "TECH FEST 2K26 | Innovation Meets Intelligence",
    description: "The official National Level Technical Symposium of KAHE CSE. Participate in technical and non-technical events, workshops, and win exciting prizes.",
    siteName: "Tech Fest 2K26",
    images: [
      {
        url: "/metaverse-logo.png", // Using logo as primary OG image
        width: 1200,
        height: 630,
        alt: "Tech Fest 2K26 - KAHE CSE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TECH FEST 2K26 | KAHE CSE",
    description: "Join the ultimate tech celebration at Karpagam Academy of Higher Education. Organized by Dept of CSE & Metaverse.",
    images: ["/metaverse-logo.png"],
    creator: "@kahe_official", // Placeholder
  },
  icons: {
    icon: '/metaverse-logo.png',
    shortcut: '/metaverse-logo.png',
    apple: '/metaverse-logo.png',
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-neon-green selection:bg-neon-green selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
