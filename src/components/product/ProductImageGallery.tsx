import { useState, useRef } from "react";
import ImageZoom from "./ImageZoom";
import scarfFront from "@/assets/scarf-front.png";
import scarfCloseup from "@/assets/scarf-closeup.png";
import scarfPortrait from "@/assets/scarf-portrait.png";
import scarfFull from "@/assets/scarf-full.png";
import scarfCrossed from "@/assets/scarf-crossed.png";

const productImages = [
  scarfFront,
  scarfCloseup,
  scarfPortrait,
  scarfFull,
  scarfCrossed,
];

const ProductImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomInitialIndex, setZoomInitialIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const handleImageClick = (index: number) => {
    setZoomInitialIndex(index);
    setIsZoomOpen(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const difference = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(difference) > minSwipeDistance) {
      if (difference > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full">
      {/* Desktop: Single large hero image, full bleed */}
      <div className="hidden lg:block">
        <div 
          className="w-full h-[calc(100vh-80px)] overflow-hidden cursor-pointer group"
          onClick={() => handleImageClick(0)}
        >
          <img
            src={productImages[0]}
            alt="Product hero"
            className="w-full h-full object-cover scale-[1.02] transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Tablet/Mobile: Image slider */}
      <div className="lg:hidden">
        <div className="relative">
          <div 
            className="w-full aspect-[3/4] overflow-hidden cursor-pointer group touch-pan-y"
            onClick={() => handleImageClick(currentImageIndex)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={productImages[currentImageIndex]}
              alt={`Product view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover scale-[1.02] transition-transform duration-300 group-hover:scale-105 select-none"
            />
          </div>
          
          {/* Dots indicator - overlaid on image */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Zoom Modal */}
      <ImageZoom
        images={productImages}
        initialIndex={zoomInitialIndex}
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
      />
    </div>
  );
};

export default ProductImageGallery;
