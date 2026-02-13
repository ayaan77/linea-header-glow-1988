import giftIdea1 from "@/assets/gift-idea-1.jpg";
import giftIdea2 from "@/assets/gift-idea-2.jpg";
import giftIdea3 from "@/assets/gift-idea-3.jpg";
import giftIdea4 from "@/assets/gift-idea-4.jpg";
import { Link } from "react-router-dom";

const categories = [
  { name: "Rings", image: giftIdea1, href: "/category/rings" },
  { name: "Earrings", image: giftIdea2, href: "/category/earrings" },
  { name: "Bracelets", image: giftIdea3, href: "/category/bracelets" },
  { name: "Necklaces", image: giftIdea4, href: "/category/necklaces" },
];

const GiftIdeasSection = () => {
  return (
    <section className="w-full mb-8 md:mb-16 px-4 md:px-6">
      <h2 className="text-center type-section text-foreground mb-8">Gift Ideas</h2>
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
            <p className="type-product-name text-foreground">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GiftIdeasSection;
