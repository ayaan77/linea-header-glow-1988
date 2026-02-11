import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const colors = [
  { name: "Gold", value: "hsl(var(--accent))" },
  { name: "Silver", value: "hsl(var(--muted-foreground))" },
  { name: "Rose Gold", value: "#B76E79" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("Gold");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {/* NEW IN label */}
      <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">New In</p>

      {/* Product title + Price */}
      <div className="space-y-1">
        <h1 className="text-[28px] md:text-[32px] font-serif font-semibold text-foreground leading-tight">Pantheon Earrings</h1>
        <p className="text-sm font-mono text-accent">€2,850</p>
      </div>

      {/* Description */}
      <p className="text-[13px] font-light text-muted-foreground leading-[1.9] max-w-md">
        Architectural statement earrings in 18k gold plated sterling silver with a smart geometric silhouette and polished finish. Designed to exist at the intersection of sculpture and adornment.
      </p>

      {/* Color selector */}
      <div className="space-y-3">
        <p className="text-[10px] tracking-[0.15em] uppercase text-foreground">{selectedColor}</p>
        <div className="flex items-center gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-5 h-5 rounded-full border transition-all ${
                selectedColor === color.name 
                  ? 'border-foreground ring-1 ring-foreground ring-offset-2 ring-offset-background' 
                  : 'border-border'
              }`}
              style={{ backgroundColor: color.value }}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size selector */}
      <div className="space-y-3">
        <p className="text-[10px] tracking-[0.15em] uppercase text-foreground">Size & Fit</p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`h-10 px-5 border text-[11px] tracking-[0.08em] uppercase transition-all ${
                selectedSize === size
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-foreground hover:border-foreground'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart + Wishlist */}
      <div className="flex flex-col lg:flex-row gap-3">
        <Button 
          className="w-full lg:flex-1 h-[46px] bg-accent text-accent-foreground hover:bg-accent/90 font-medium tracking-[0.1em] uppercase text-[11px] rounded-none"
        >
          Add to Cart
        </Button>
        
        <Button 
          variant="outline"
          className="w-full lg:flex-1 h-[46px] border-foreground text-foreground hover:bg-foreground hover:text-background font-medium tracking-[0.1em] uppercase text-[11px] rounded-none"
        >
          Add to Wishlist
        </Button>
      </div>

      {/* Find in store */}
      <Link 
        to="/store-locator" 
        className="inline-block text-[11px] font-light text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
      >
        Find in store
      </Link>
    </div>
  );
};

export default ProductInfo;
