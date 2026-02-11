import ringsCollection from "@/assets/rings-collection.png";
import earringsCollection from "@/assets/earrings-collection.png";
import linkBracelet from "@/assets/link-bracelet.png";
import circularCollection from "@/assets/circular-collection.png";
import { Link } from "react-router-dom";

const categories = [
  { name: "Rings", image: ringsCollection, href: "/category/rings" },
  { name: "Earrings", image: earringsCollection, href: "/category/earrings" },
  { name: "Bracelets", image: linkBracelet, href: "/category/bracelets" },
  { name: "Necklaces", image: circularCollection, href: "/category/necklaces" },
];

const GiftIdeasSection = () => {
  return (
    <section className="w-full mb-8 md:mb-16 px-4 md:px-6">
      <h2 className="text-center text-2xl md:text-3xl font-serif font-semibold text-foreground mb-8">Gift Ideas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link key={cat.name} to={cat.href} className="group text-center">
            <div className="aspect-square overflow-hidden mb-3 bg-[#f5f0eb]">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover scale-[1.02] group-hover:scale-[1.07] transition-transform duration-300"
              />
            </div>
            <p className="text-sm font-serif font-medium text-foreground">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GiftIdeasSection;
