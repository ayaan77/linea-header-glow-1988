import { Link, useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  hoverImage?: string;
  isNew?: boolean;
  soldOut?: boolean;
  colors?: string[];
}

interface ProductCardProps {
  product: Product;
  hideInfo?: boolean;
}

const ProductCard = ({ product, hideInfo = false }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-white aspect-[3/4] flex items-center justify-center overflow-hidden relative">
        <button
          className="absolute top-3 right-3 z-10 p-1 hover:opacity-70 transition-opacity"
          aria-label="Save"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); navigate("/login"); }}
        >
          <Bookmark className="w-5 h-5 text-foreground/80" />
        </button>
        {product.soldOut && (
          <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider text-foreground/70 z-10">
            Sold Out
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover scale-[1.02] transition-opacity duration-500 group-hover:opacity-0"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt={`${product.name} lifestyle`}
            className="absolute inset-0 w-full h-full object-cover scale-[1.02] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
        )}
      </div>
      {!hideInfo && (
        <div className="mt-2 md:mt-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
            <span className="type-product-name text-foreground">
              {product.name} {product.description}
            </span>
            <span className="type-price mt-0.5 md:mt-0 md:ml-4 shrink-0">
              {product.price}
            </span>
          </div>
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1.5 mt-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full border border-border/50"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export { type Product };
export default ProductCard;
