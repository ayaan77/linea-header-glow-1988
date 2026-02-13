import { Link } from "react-router-dom";
import showcase1 from "@/assets/showcase-1.png";
import showcase2 from "@/assets/showcase-2.png";
import showcase3 from "@/assets/showcase-3.png";
import showcase4 from "@/assets/showcase-4.jpeg";
import showcase5 from "@/assets/showcase-5.jpeg";

const products = [
  { id: 1, name: "Pantheon", image: showcase1 },
  { id: 2, name: "Eclipse", image: showcase2 },
  { id: 3, name: "Halo", image: showcase3 },
  { id: 4, name: "Oblique", image: showcase4 },
  { id: 5, name: "Lintel", image: showcase5 },
];

const ProductShowcase = () => {
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

      {/* Mobile: 2-column grid */}
      <div className="md:hidden grid grid-cols-2 gap-2">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="bg-limestone aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
