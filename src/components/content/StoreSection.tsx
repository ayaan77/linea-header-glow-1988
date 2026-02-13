import kashmirBloomStore from "@/assets/kashmir-bloom-store-new.jpg";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StoreSection = () => {
  return (
    <section className="w-full mb-8 md:mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image block */}
        <div className="w-full aspect-[3/4] overflow-hidden px-5 md:p-8">
          <img
            src={kashmirBloomStore}
            alt="Kashmir Bloom Store Birmingham"
            className="w-full h-full object-cover scale-[1.02]"
          />
        </div>

        {/* Text block */}
        <div className="flex flex-col items-start justify-center md:justify-start border-t border-foreground/10 md:border-0 px-5 pt-6 pb-10 md:pt-10 md:pb-20 md:px-10 text-left">
          <Link
            to="/about/store-locator"
            className="flex items-center justify-between w-full mb-6 md:mb-10"
          >
            <span className="type-nav text-foreground">
              Visit our London stores
            </span>
            <ArrowRight className="w-4 h-4 text-foreground flex-shrink-0 ml-4" />
          </Link>

          <p className="type-body font-light text-foreground/80 md:text-foreground/70 leading-relaxed mb-4 md:mb-6 md:max-w-md">
            Visit any of our three London stores situated in Redchurch, Soho or Marylebone for expert advice on fabrications, modular wardrobe styling and gift wrapping.
          </p>

          <p className="type-spec">
            Evoking the sensibility of Studio Nicholson clothing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
