import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import LargeHero from "../components/content/LargeHero";
import FiftyFiftySection from "../components/content/FiftyFiftySection";

import ProductShowcase from "../components/content/ProductShowcase";
import VoyageSection from "../components/content/VoyageSection";

import ArtisticSignatureSection from "../components/content/ArtisticSignatureSection";
import StoreSection from "../components/content/StoreSection";
import GiftIdeasSection from "../components/content/GiftIdeasSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <LargeHero />
        <ProductShowcase />
        
        <VoyageSection />
        <FiftyFiftySection />
        
        <ArtisticSignatureSection />
        <StoreSection />
        <GiftIdeasSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
