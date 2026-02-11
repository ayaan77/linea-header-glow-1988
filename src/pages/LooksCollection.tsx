import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import LookDetailModal from "@/components/looks/LookDetailModal";
import organicEarring from "@/assets/organic-earring.png";
import linkBracelet from "@/assets/link-bracelet.png";

const slugToTitle = (slug: string): string => {
  const parts = slug.split("-");
  const gender = parts[0] === "man" ? "MEN'S" : "WOMEN'S";
  const season = parts.slice(1).join(" ").replace(/(\d{2})$/, "'$1").toUpperCase();
  return `${gender} ${season} LOOKS`;
};

const sampleProducts = [
  { name: "Kuyto Jersey in Parchment", price: "EUR 195", image: organicEarring, badge: "NEW IN" },
  { name: "Meno Trouser in Black", price: "EUR 310", image: linkBracelet, badge: "NEW IN" },
  { name: "Arca Knit in Bone", price: "EUR 245", image: organicEarring, badge: "NEW IN" },
  { name: "Rova Coat in Charcoal", price: "EUR 580", image: linkBracelet },
  { name: "Luno Shirt in Ecru", price: "EUR 175", image: organicEarring, badge: "NEW IN" },
  { name: "Vero Belt in Tan", price: "EUR 95", image: linkBracelet },
];

const placeholderLooks = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  image: `/founders.png`,
  products: sampleProducts.slice(0, 4 + (i % 3)),
}));

const LooksCollection = () => {
  const { collectionSlug } = useParams<{ collectionSlug: string }>();
  const title = slugToTitle(collectionSlug || "woman-spring-26");
  const [selectedLookIndex, setSelectedLookIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedLookIndex((prev) =>
      prev !== null ? (prev - 1 + placeholderLooks.length) % placeholderLooks.length : null
    );
  };

  const handleNext = () => {
    setSelectedLookIndex((prev) =>
      prev !== null ? (prev + 1) % placeholderLooks.length : null
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="px-6 md:px-16 pt-24 pb-16 max-w-4xl mx-auto text-center">
        <h1 className="font-serif font-semibold text-3xl md:text-4xl tracking-wide text-foreground mb-8">
          {title}
        </h1>
        <p className="font-light italic text-sm md:text-base text-foreground/70 leading-relaxed max-w-2xl mx-auto mb-4">
          "Clothing that feels like architecture — structured, considered, and quietly powerful."
        </p>
        <p className="text-sm font-light text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          This season's collection draws from the interplay of shadow and light, blending sharp silhouettes 
          with soft, organic materials. Each look is designed to move with intention, reflecting a modern 
          sensibility rooted in timeless craft.
        </p>
      </section>

      {/* Lookbook Grid */}
      <section className="px-6 md:px-16 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {placeholderLooks.map((look, index) => (
            <div
              key={look.id}
              className="group cursor-pointer"
              onClick={() => setSelectedLookIndex(index)}
            >
              <div className="aspect-[3/4] overflow-hidden bg-foreground/5 mb-3">
                <img
                  src={look.image}
                  alt={`Look ${look.id}`}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
              <span className="text-xs font-medium tracking-wider uppercase text-foreground">
                LOOK {look.id}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Look Detail Modal */}
      {selectedLookIndex !== null && (
        <LookDetailModal
          look={placeholderLooks[selectedLookIndex]}
          lookIndex={selectedLookIndex}
          totalLooks={placeholderLooks.length}
          onClose={() => setSelectedLookIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <Footer />
    </div>
  );
};

export default LooksCollection;
