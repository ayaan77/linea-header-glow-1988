import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import { Bookmark, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect, useCallback } from "react";
import editorialCloseupThumb from "@/assets/editorial-closeup.png";
import editorialFaceThumb from "@/assets/editorial-face.png";
import editorialShoulderThumb from "@/assets/editorial-shoulder.png";
import editorialFrontThumb from "@/assets/editorial-front.png";
import scarfPortrait from "@/assets/scarf-portrait.png";
import scarfFrontThumb from "@/assets/scarf-front.png";
import editorialSideThumb from "@/assets/editorial-side.png";
import editorialThreeQuarterThumb from "@/assets/editorial-three-quarter.png";
import editorialCloseup from "@/assets/editorial-closeup.png";
import editorialThreeQuarter from "@/assets/editorial-three-quarter.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialSide from "@/assets/editorial-side.png";
import scarfFull from "@/assets/scarf-full.png";
const relatedProducts = [{
  name: "Eclipse Earrings",
  price: "€2,450",
  image: editorialCloseupThumb
}, {
  name: "Halo Ring",
  price: "€1,950",
  image: editorialFaceThumb
}, {
  name: "Organic Earring",
  price: "€2,100",
  image: editorialShoulderThumb
}, {
  name: "Link Bracelet",
  price: "€3,200",
  image: editorialFrontThumb
}];
const otherItems = [{
  name: "Lintel Necklace",
  price: "€4,200",
  image: scarfPortrait
}, {
  name: "Oblique Ring",
  price: "€1,850",
  image: scarfFrontThumb
}, {
  name: "Shadowline Bracelet",
  price: "€2,900",
  image: editorialSideThumb
}, {
  name: "Pantheon Pendant",
  price: "€2,650",
  image: editorialThreeQuarterThumb
}];
const ProductCard = ({
  product
}: {
  product: {
    name: string;
    price: string;
    image: string;
  };
}) => <Link to="/product/1" className="group block">
    <div className="relative aspect-[4/5] bg-muted overflow-hidden flex items-center justify-center">
      <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase text-muted-foreground z-10">
        New In
      </span>
      <button className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors">
        <Bookmark className="h-4 w-4" />
      </button>
      <img src={product.image} alt={product.name} className="w-full h-full object-cover scale-[1.02] transition-transform duration-300 group-hover:scale-[1.07]" />
    </div>
    <div className="mt-3 space-y-0.5">
      <p className="text-sm font-serif font-medium text-foreground tracking-wide">{product.name}</p>
      <p className="text-xs font-mono text-accent tracking-wide">{product.price}</p>
    </div>
  </Link>;
const editorialImages = [editorialCloseup, editorialThreeQuarter, editorialFace, editorialShoulder];
const ProductDetail = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setCurrentSlide(carouselApi.selectedScrollSnap());
    setSlideCount(carouselApi.scrollSnapList().length);
  }, [carouselApi]);
  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onSelect);
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, onSelect]);
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Section 1: Hero - Image + Info */}
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ProductImageGallery />
            <div className="px-6 lg:px-16 xl:px-20 py-6 lg:py-16 lg:flex lg:flex-col lg:justify-center">
              <div className="lg:max-w-lg">
                <ProductInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Details + Editorial Image */}
        <section className="w-full pt-12 md:pt-16 lg:pt-20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="px-6 md:px-12 lg:px-16 xl:px-20 py-8 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-y-auto order-2 md:order-1">
              <ProductDescription />
            </div>
            <div className="relative overflow-hidden h-[500px] md:h-[700px] lg:h-[750px] order-1 md:order-2">
              <Carousel className="w-full h-full carousel-fill-height" opts={{
              loop: true,
              dragFree: false
            }} setApi={setCarouselApi}>
                <CarouselContent className="-ml-0 h-full">
                  {editorialImages.map((img, index) => <CarouselItem key={index} className="pl-0 h-full overflow-hidden">
                      <img src={img} alt={`Editorial ${index + 1}`} className="w-full h-full object-cover scale-[1.02]" />
                    </CarouselItem>)}
                </CarouselContent>
              </Carousel>

              {/* Zoom icon */}
              <button onClick={() => carouselApi?.scrollNext()} className="absolute bottom-8 right-8 z-10 p-2.5 bg-background/70 backdrop-blur-sm text-foreground hover:bg-background/90 transition-all rounded-sm">
                <ZoomIn className="h-5 w-5" />
              </button>

              {/* Progress bar */}
              <div className="absolute bottom-8 left-8 right-20 z-10">
                <div className="flex gap-1.5">
                  {editorialImages.map((_, i) => <button key={i} onClick={() => carouselApi?.scrollTo(i)} className={`h-[3px] flex-1 transition-colors duration-300 cursor-pointer rounded-full ${i === currentSlide ? "bg-foreground" : "bg-foreground/30"}`} />)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: You Might Also Like - Editorial + 2x2 Grid */}
        <section className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="block pt-6 px-6 lg:pt-0 lg:px-0">
              <img src={scarfFull} alt="Full look" className="w-full h-[500px] lg:h-full object-cover scale-[1.02]" />
            </div>
            <div className="bg-limestone px-6 lg:px-10 py-8 lg:py-10 flex items-center">
              <div className="grid grid-cols-2 gap-4 lg:gap-5 w-full">
                {relatedProducts.map((product, index) => <ProductCard key={index} product={product} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Editorial Story Block */}
        <section className="w-full py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] lg:gap-4 gap-0">
            {/* Text block: first on mobile, second on desktop */}
            <div className="flex flex-col order-1 lg:order-1">
              <div className="hidden lg:block pb-0 px-0 lg:px-10">
                <div className="grid grid-cols-1 gap-0">
                  <div className="aspect-[3/4] overflow-hidden lg:w-[75%]">
                    <img src={editorialSide} alt="Editorial lifestyle" className="w-full h-full scale-[1.08] object-cover" />
                  </div>
                </div>
              </div>
              <div className="px-6 lg:px-10 xl:px-14 pt-8 lg:pt-16 pb-6">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-6 lg:mb-8">Women's Spring '26</p>
                <p className="text-sm font-sans text-foreground/80 leading-[1.8] mb-8 max-w-sm">
                  Each piece in this collection is drawn from the interplay of shadow and structure. "It is about how it feels, not how it looks," says our creative director on the jumping off point for the season. The idea of ease — and the idea of jewelry that works effortlessly on the body — coupled with the feeling of metal against skin, continue to be central to the design process. "We are always building on and reiterating the Sifar silhouettes and shapes, which of course are also ultimately about creating feelings, particularly when you wear them."
                </p>
                <div>
                  <Button variant="outline" className="h-10 px-6 border-foreground text-foreground hover:bg-saffron hover:border-saffron hover:text-white font-medium tracking-[0.12em] uppercase text-[10px] rounded-none transition-colors" asChild>
                    <Link to="/category/earrings">Discover the Collection</Link>
                  </Button>
                </div>
              </div>
            </div>
            {/* Portrait image: second on mobile, stays right on desktop */}
            <div className="order-2 lg:order-2 px-6 py-4 lg:px-0 lg:py-0 lg:pr-14">
              <div className="overflow-hidden h-full">
                <img src={editorialThreeQuarter} alt="Collection editorial" className="w-full h-full min-h-[500px] lg:min-h-[700px] scale-[1.08] object-cover" />
              </div>
            </div>
            {/* Stacked images on mobile only */}
            <div className="order-3 lg:hidden grid grid-cols-1 gap-0 px-6 py-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={editorialFace} alt="Editorial detail" className="w-full h-full scale-[1.08] object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Size Chart */}
        <section className="w-full px-6 lg:px-16 xl:px-20 py-10 lg:py-16">
          <div className="bg-white p-6 lg:p-10 xl:p-12">
          <h2 className="text-xs tracking-[0.15em] uppercase text-foreground mb-8">Size Guide</h2>

          {/* Size Conversion Table */}
          <div className="mb-10">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-concrete mb-4">Size Conversion</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 pr-6">Size</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">XS</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">S</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">M</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">L</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">EU</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">44</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">46</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">48</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">50</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">52</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">UK</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">34</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">36</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">38</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">40</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">42</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">US</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">34</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">36</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">38</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">40</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Garment Measurements Table */}
          <div className="mb-6">
            <p className="text-[11px] font-mono tracking-[0.12em] uppercase text-concrete mb-4">Garment Measurements (CM)</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 pr-6">Measure</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">XS</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">S</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">M</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">L</th>
                    <th className="text-center text-[11px] font-mono font-normal tracking-[0.1em] uppercase text-concrete py-3 px-4">XL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">Chest</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">86</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">92</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">98</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">104</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">110</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">Waist</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">72</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">78</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">84</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">90</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">96</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">Back Length</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">65</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">67</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">69</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">71</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">73</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="text-[11px] font-mono tracking-[0.1em] uppercase text-concrete py-3 pr-6">Sleeve Length</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">59</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">61</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">63</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">65</td>
                    <td className="text-center text-[11px] font-mono text-foreground py-3 px-4">67</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-[10px] font-mono text-concrete tracking-[0.08em]">All measurements are taken with the garment laying flat</p>
          </div>
        </section>

        {/* Section 6: Other Items - 4-column Grid */}
        <section className="w-full border-t border-border px-6 lg:px-16 xl:px-20 py-10 lg:py-20">
          <h2 className="text-xs tracking-[0.15em] uppercase text-foreground mb-6 lg:mb-8">Other Items</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {otherItems.map((product, index) => <ProductCard key={index} product={product} />)}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default ProductDetail;