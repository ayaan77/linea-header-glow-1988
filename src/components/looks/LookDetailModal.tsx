import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

interface LookProduct {
  name: string;
  price: string;
  image: string;
  badge?: string;
}

interface Look {
  id: number;
  image: string;
  products: LookProduct[];
}

interface LookDetailModalProps {
  look: Look;
  lookIndex: number;
  totalLooks: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const LookDetailModal = ({
  look,
  lookIndex,
  totalLooks,
  onClose,
  onPrev,
  onNext,
}: LookDetailModalProps) => {
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateAndNavigate = (direction: "left" | "right", callback: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDirection(direction);
    setTimeout(() => {
      callback();
      setSlideDirection(null);
      setIsAnimating(false);
    }, 280);
  };

  const handlePrev = () => animateAndNavigate("right", onPrev);
  const handleNext = () => animateAndNavigate("left", onNext);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background animate-fade-in"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="h-full flex flex-col lg:flex-row transition-transform duration-[280ms] ease-out"
        style={{
          transform: slideDirection === "left"
            ? "translateX(-3%)"
            : slideDirection === "right"
            ? "translateX(3%)"
            : "translateX(0)",
          opacity: slideDirection ? 0.4 : 1,
          transition: "transform 280ms ease-out, opacity 280ms ease-out",
        }}
      >
        {/* Left: Editorial Image */}
        <div className="w-full lg:w-[55%] h-[45vh] lg:h-full relative shrink-0">
          <img
            src={look.image}
            alt={`Look ${look.id}`}
            className="w-full h-full object-cover scale-[1.02]"
          />
        </div>

        {/* Right: Product Cards */}
        <div className="w-full lg:w-[45%] h-[55vh] lg:h-full overflow-y-auto relative">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 sticky top-0 bg-background z-10">
            <span className="font-serif text-lg tracking-wide">
              Look {look.id}
            </span>
            <button
              onClick={onClose}
              className="p-1 hover:opacity-70 transition-opacity"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Product Grid */}
          <div className="px-6 pb-8 grid grid-cols-2 gap-3">
            {look.products.map((product, i) => (
              <div
                key={i}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] bg-[hsl(var(--muted))] flex items-center justify-center overflow-hidden">
                  {product.badge && (
                    <span className="absolute top-2 left-2 text-[9px] uppercase tracking-wider font-medium text-foreground/70">
                      {product.badge}
                    </span>
                  )}
                  <button
                    className="absolute top-2 right-2 p-1 hover:opacity-70 transition-opacity"
                    aria-label="Bookmark"
                    onClick={(e) => { e.stopPropagation(); navigate("/login"); }}
                  >
                    <Bookmark className="w-3.5 h-3.5 text-foreground/60" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover scale-[1.02]"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-[10px] font-light text-foreground leading-tight">
                    {product.name}
                  </p>
                  <p className="text-[10px] font-mono text-accent mt-0.5">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalLooks > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20"
            aria-label="Previous look"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors z-20 lg:right-3"
            aria-label="Next look"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Look counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:left-[27.5%] text-[10px] tracking-wider text-foreground/50 font-mono z-20">
        {lookIndex + 1} / {totalLooks}
      </div>
    </div>
  );
};

export default LookDetailModal;
