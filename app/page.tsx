'use client';
import HeroSection from '@/components/HeroSection';
import EventGrid from '@/components/EventGrid';
import WorkshopSpotlight from '@/components/WorkshopSpotlight';
import RegistrationModal from '@/components/RegistrationModal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-green selection:text-black">
      <HeroSection />
      <EventGrid />
      <WorkshopSpotlight />
      <Footer />
      <RegistrationModal />
    </main>
  );
}
