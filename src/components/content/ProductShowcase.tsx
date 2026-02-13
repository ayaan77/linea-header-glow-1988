import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";

const products = [
  { id: 1, name: "Pantheon", image: pantheonImage },
  { id: 2, name: "Eclipse", image: eclipseImage },
  { id: 3, name: "Halo", image: haloImage },
  { id: 4, name: "Oblique", image: obliqueImage },
  { id: 5, name: "Lintel", image: lintelImage },
];

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const cardWidth = el.scrollWidth / products.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, products.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section className="w-full py-3 px-3 md:py-6 md:px-8 bg-secondary/50">
      {/* Desktop/Tablet: 5-column grid */}
      <div className="hidden md:flex gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="flex-1"
          >
            <div className="bg-limestone aspect-[3/4] overflow-hidden flex items-end justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile: single-card carousel */}
      <div className="md:hidden relative">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="min-w-full snap-center shrink-0"
            >
              <div className="bg-limestone aspect-[5/4] overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover scale-[1.02]"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Segmented progress bar */}
        <div className="absolute bottom-3 left-0 right-0 px-16">
          <div className="flex gap-1.5">
            {products.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] flex-1 transition-colors ${
                  i === activeIndex ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
