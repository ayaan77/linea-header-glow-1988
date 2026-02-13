import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import showcase1 from "@/assets/showcase-1.png";
import showcase2 from "@/assets/showcase-2.png";
import showcase3 from "@/assets/showcase-3.png";
import showcase4 from "@/assets/showcase-4.jpeg";
import showcase5 from "@/assets/showcase-5.jpeg";

const products = [
  { id: 1, name: "Pantheon", image: showcase1 },
  { id: 2, name: "Eclipse", image: showcase2 },
  { id: 3, name: "Halo", image: showcase3 },
  { id: 4, name: "Oblique", image: showcase4 },
  { id: 5, name: "Lintel", image: showcase5 },
];

const mobileProducts = products.slice(0, 4);

const ProductShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: false });
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full pt-8 pb-3 px-3 md:pt-12 md:py-6 md:px-8 bg-secondary/50">
      {/* Desktop/Tablet: 5-column grid */}
      <div className="hidden md:flex gap-4">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="flex-1">
            <div className="bg-limestone aspect-[3/4] overflow-hidden flex items-end justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-[1.02]" />
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: Embla carousel */}
      <div className="md:hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {mobileProducts.map((product) => (
              <div key={product.id} className="min-w-0 shrink-0 grow-0 basis-full px-8">
                <Link to={`/product/${product.id}`}>
                  <div className="bg-limestone aspect-[3/4] overflow-hidden flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Segmented progress bar */}
        <div className="mt-4 px-16 pb-2">
          <div className="flex gap-1.5">
            {mobileProducts.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] flex-1 transition-colors ${i === activeIndex ? "bg-foreground" : "bg-foreground/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
