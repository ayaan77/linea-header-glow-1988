import ProductCard, { type Product } from "./ProductCard";
import scarfFront from "@/assets/scarf-front.png";
import scarfBack from "@/assets/scarf-back.png";
import scarfOrangePortrait from "@/assets/scarf-orange-portrait.png";
import scarfOrangeDetail from "@/assets/scarf-orange-detail.png";
import scarfOrangeCloseup from "@/assets/scarf-orange-closeup.png";
import scarfCloseup from "@/assets/scarf-closeup.png";
import scarfPortrait from "@/assets/scarf-portrait.png";
import scarfFull from "@/assets/scarf-full.png";
import scarfCrossed from "@/assets/scarf-crossed.png";
const products: Product[] = [
  { id: 1, name: "Pantheon", category: "Earrings", description: "in 18k Yellow Gold", price: "€2,850", image: scarfFront, hoverImage: scarfOrangeCloseup, isNew: true, colors: ["#c5a96a", "#e8e8e8"] },
  { id: 2, name: "Eclipse", category: "Bracelets", description: "in Sterling Silver", price: "€3,200", image: scarfCloseup, hoverImage: scarfBack, colors: ["#c0c0c0", "#c5a96a"] },
  { id: 3, name: "Halo", category: "Earrings", description: "in White Gold", price: "€1,950", image: scarfPortrait, hoverImage: scarfOrangePortrait, isNew: true, soldOut: true, colors: ["#e8e8e8"] },
  { id: 4, name: "Oblique", category: "Earrings", description: "in Rose Gold", price: "€1,650", image: scarfFull, hoverImage: scarfOrangeCloseup, colors: ["#e8c4b8", "#c5a96a"] },
  { id: 5, name: "Lintel", category: "Earrings", description: "in 18k Yellow Gold", price: "€2,250", image: scarfCrossed, hoverImage: scarfCloseup, colors: ["#c5a96a"] },
  { id: 6, name: "Shadowline", category: "Bracelets", description: "in Platinum", price: "€3,950", image: scarfBack, hoverImage: scarfFront, colors: ["#e8e8e8", "#c0c0c0"] },
  { id: 7, name: "Meridian", category: "Earrings", description: "in Sterling Silver", price: "€2,450", image: scarfOrangePortrait, hoverImage: scarfPortrait, colors: ["#c0c0c0"] },
  { id: 8, name: "Vertex", category: "Bracelets", description: "in White Gold", price: "€2,800", image: scarfFront, hoverImage: scarfFull, colors: ["#e8e8e8", "#c5a96a"] },
  { id: 9, name: "Apex", category: "Earrings", description: "in 18k Yellow Gold", price: "€1,550", image: scarfCloseup, hoverImage: scarfCrossed, colors: ["#c5a96a"] },
  { id: 10, name: "Zenith", category: "Earrings", description: "in Rose Gold", price: "€1,850", image: scarfPortrait, hoverImage: scarfOrangeCloseup, colors: ["#e8c4b8"] },
  { id: 11, name: "Prism", category: "Earrings", description: "in Sterling Silver", price: "€2,050", image: scarfFull, hoverImage: scarfBack, soldOut: true, colors: ["#c0c0c0", "#c5a96a"] },
  { id: 12, name: "Radiant", category: "Bracelets", description: "in Platinum", price: "€3,650", image: scarfCrossed, hoverImage: scarfOrangePortrait, colors: ["#e8e8e8"] },
  { id: 13, name: "Stellar", category: "Earrings", description: "in White Gold", price: "€2,150", image: scarfBack, hoverImage: scarfCloseup, colors: ["#e8e8e8", "#c5a96a"] },
  { id: 14, name: "Cosmos", category: "Bracelets", description: "in 18k Yellow Gold", price: "€2,950", image: scarfOrangePortrait, hoverImage: scarfFront, colors: ["#c5a96a"] },
  { id: 15, name: "Aurora", category: "Earrings", description: "in Rose Gold", price: "€1,750", image: scarfFront, hoverImage: scarfPortrait, colors: ["#e8c4b8", "#c0c0c0"] },
  { id: 16, name: "Nebula", category: "Earrings", description: "in Sterling Silver", price: "€1,850", image: scarfCloseup, hoverImage: scarfFull, colors: ["#c0c0c0"] },
  { id: 17, name: "Orbit", category: "Earrings", description: "in 18k Yellow Gold", price: "€2,350", image: scarfPortrait, hoverImage: scarfOrangeCloseup, colors: ["#c5a96a", "#e8e8e8"] },
  { id: 18, name: "Galaxy", category: "Bracelets", description: "in Platinum", price: "€3,450", image: scarfFull, hoverImage: scarfCrossed, colors: ["#e8e8e8"] },
  { id: 19, name: "Lunar", category: "Earrings", description: "in White Gold", price: "€2,050", image: scarfCrossed, hoverImage: scarfBack, colors: ["#e8e8e8", "#c5a96a"] },
  { id: 20, name: "Solar", category: "Bracelets", description: "in Sterling Silver", price: "€3,150", image: scarfBack, hoverImage: scarfOrangePortrait, colors: ["#c0c0c0"] },
];

const editorialImages = [scarfBack, scarfOrangePortrait, scarfOrangeDetail];

const ProductGrid = () => {
  // First 4 products go in the asymmetric hero row (right side 2x2)
  const heroProducts = products.slice(0, 4);
  // Next batch before second editorial
  const batch1 = products.slice(4, 12);
  // After second editorial
  const batch2 = products.slice(12);

  return (
    <section className="w-full px-6 mb-16">
      {/* MOBILE: Hero image + 2-column grid with editorial images interleaved */}
      <div className="md:hidden">
        {/* Top hero image */}
        <div className="mb-2">
          <img src={scarfFront} alt="Collection hero" className="w-full h-auto object-cover scale-[1.02]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Editorial image after first 4 products */}
        <div className="my-2">
          <img src={editorialImages[0]} alt="Collection editorial" className="w-full h-auto object-cover scale-[1.02]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {products.slice(4, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {/* Editorial image after next 6 products */}
        <div className="my-2">
          <img src={editorialImages[1]} alt="Collection editorial" className="w-full h-auto object-cover scale-[1.02]" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {products.slice(10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* DESKTOP: Asymmetric first row + editorial interleaving */}
      <div className="hidden md:block">
        {/* First row: Large editorial LEFT (2 cols, 2 rows) + 4 products RIGHT (2x2) */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {/* Columns 1-2: Large editorial image */}
          <div className="col-span-2 row-span-2">
            <div className="w-full h-full overflow-hidden">
              <img
                src={editorialImages[0]}
                alt="Collection editorial"
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>
          </div>

          {/* Columns 3-4, Row 1: Two product cards */}
          <div>
            <ProductCard product={heroProducts[0]} />
          </div>
          <div>
            <ProductCard product={heroProducts[1]} />
          </div>

          {/* Columns 3-4, Row 2: Two product cards */}
          <div>
            <ProductCard product={heroProducts[2]} />
          </div>
          <div>
            <ProductCard product={heroProducts[3]} />
          </div>
        </div>

        {/* Batch 1: 8 products in 4-col grid */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          {batch1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Second editorial image spanning 2 cols */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="col-span-2 row-span-2">
            <div className="w-full h-full overflow-hidden">
              <img
                src={editorialImages[1]}
                alt="Collection editorial"
                className="w-full h-full object-cover scale-[1.02]"
              />
            </div>
          </div>
          {batch2.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Remaining products */}
        {batch2.length > 4 && (
          <div className="grid grid-cols-4 gap-4">
            {batch2.slice(4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
