import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StoreSection from "@/components/StoreSection";
import MusicSection from "@/components/MusicSection";
import BioSection from "@/components/BioSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-background min-h-[100dvh] text-foreground font-sans">
      <Navigation />
      
      <main>
        <HeroSection />
        
        {/* Curatorial Divider */}
        <div className="w-full flex justify-center py-24 bg-background">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-border to-transparent" />
        </div>

        <GallerySection />
        <StoreSection />
        <MusicSection />
        <BioSection />
        <ContactSection />
      </main>
    </div>
  );
}
