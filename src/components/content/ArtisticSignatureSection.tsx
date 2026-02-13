import kashmirBloomFashion from "@/assets/kashmir-artisan.jpg";
import { Link } from "react-router-dom";

const ArtisticSignatureSection = () => {
  return (
    <section className="w-full mb-8 md:mb-16 bg-transparent md:bg-[#f5f0eb]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text block */}
        <div className="order-last md:order-first flex flex-col items-start justify-center px-5 pt-6 pb-10 md:py-20 md:px-10 text-left">
          <p className="type-label text-foreground/60 mb-3">The Art of Linea</p>

          <h2 className="type-section text-foreground mb-4 leading-relaxed max-w-sm">
            An artistic signature rooted in architecture
          </h2>

          <p className="type-body font-light text-foreground/80 md:text-foreground/70 leading-relaxed mb-8 md:max-w-xs">
            Each piece draws from the clean lines and structural elegance of modern architecture, creating jewelry that is both timeless and contemporary.
          </p>

          <Link
            to="/about/our-story"
            className="inline-block border border-accent bg-accent px-8 py-3 type-button text-accent-foreground hover:bg-accent/90 transition-colors duration-300"
          >
            Discover Our World
          </Link>
        </div>

        {/* Image block */}
        <div className="order-first md:order-last w-full aspect-[3/4] overflow-hidden px-5 md:p-8">
          <img
            src={kashmirBloomFashion}
            alt="Kashmir Bloom handcrafted fashion"
            className="w-full h-full object-cover scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
};

export default ArtisticSignatureSection;
