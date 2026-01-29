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
  title: "TECH FEST 2K26 | Karpagam Academy",
  description: "Official Tech Fest 2K26 of Dept of CSE, Karpagam Academy of Higher Education",
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
