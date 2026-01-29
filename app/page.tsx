'use client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EventGrid from '@/components/EventGrid';
import WorkshopSpotlight from '@/components/WorkshopSpotlight';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-white text-gray-900 w-full">
        <HeroSection />
        <EventGrid />
        <WorkshopSpotlight />
        <Footer />
      </main>
    </>
  );
}
