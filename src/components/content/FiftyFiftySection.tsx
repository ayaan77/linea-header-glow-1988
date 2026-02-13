import cashmereClothing1 from "@/assets/cashmere-clothing-1.webp";
import cashmereClothing from "@/assets/cashmere-clothing.jpg";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-8 md:mb-16 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 h-[100vh] md:h-[85vh]">
        <Link to="/category/earrings" className="relative block overflow-hidden">
          <img
            src={cashmereClothing1}
            alt="Men's cashmere clothing collection"
            className="w-full h-full object-cover scale-[1.02]"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="bg-background text-foreground type-label px-5 py-2.5 whitespace-nowrap">
              Men's Spring '26
            </span>
          </div>
        </Link>

        <Link to="/category/bracelets" className="relative block overflow-hidden">
          <img
            src={cashmereClothing}
            alt="Cashmere clothing collection"
            className="w-full h-full object-cover scale-[1.02]"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="bg-background text-foreground type-label px-5 py-2.5 whitespace-nowrap">
              Women's Spring '26
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
