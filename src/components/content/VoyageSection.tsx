import heroImage from "@/assets/hero-image.png";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import { Link } from "react-router-dom";

const thumbnails = [
  { id: 1, name: "Pantheon", price: "£2,850", image: pantheonImage },
  { id: 2, name: "Eclipse", price: "£3,200", image: eclipseImage },
  { id: 3, name: "Halo", price: "£1,950", image: haloImage },
  { id: 4, name: "Oblique", price: "£1,650", image: obliqueImage },
];

const VoyageSection = () => {
  return (
    <section className="w-full mb-8 md:mb-16 bg-background py-8 md:py-20">
      <div className="px-6">
        {/* Header text block - hidden on mobile */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="type-section text-foreground mb-3 tracking-[0.3em]">
            Voyage for Two
          </h2>
          <p className="type-body font-light text-muted-foreground max-w-sm mx-auto leading-relaxed mb-6">
            A style partner can be recognized by the way they walk right beside you.
          </p>
          <Link
            to="/category/voyage"
            className="type-nav text-foreground underline underline-offset-4 hover:text-accent transition-colors"
          >
            Explore the Collection
          </Link>
        </div>

        {/* Hero image - full bleed on mobile */}
        <div className="md:mx-auto md:max-w-4xl aspect-[3/4] md:aspect-[16/9] overflow-hidden mb-6 md:mb-16">
          <img
            src={heroImage}
            alt="Voyage collection lifestyle"
            className="w-full h-full object-cover scale-[1.02]"
          />
        </div>

        {/* Product thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6 md:gap-6 max-w-3xl md:mx-auto">
          {thumbnails.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group">
              <div className="aspect-square overflow-hidden mb-2 bg-secondary">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.07] transition-transform duration-300"
                />
              </div>
              <p className="type-product-name text-foreground">{item.name}</p>
              <p className="type-price">{item.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoyageSection;
