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

const ProductCarousel = () => {
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
    <section className="w-full mb-8 md:mb-16 bg-background py-6 md:py-6 px-4 md:px-6">
      <div className="relative">
        {/* Carousel: all screen sizes */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="min-w-[92vw] lg:min-w-[60vw] snap-center shrink-0"
            >
              <div className="bg-[#F5F5F5] aspect-[4/5] overflow-hidden flex items-center justify-center">
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
        <div className="absolute bottom-6 left-0 right-0 px-16">
          <div className="flex gap-1.5">
            {products.map((_, i) => (
              <div
                key={i}
                className={`h-[2px] flex-1 transition-colors ${
                  i === activeIndex ? "bg-black" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
