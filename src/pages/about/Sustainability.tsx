import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfFront from "@/assets/scarf-front.png";
import founders from "@/assets/founders.png";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={editorialShoulder}
          alt="Sustainability"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete">
            Our Commitment
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.1em] uppercase font-semibold">
            Sustainability
          </h1>
        </div>
      </section>

      {/* ── Centered Introduction ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-xl md:text-3xl leading-relaxed tracking-[0.05em] uppercase font-semibold">
            Creating beautiful jewelry while protecting our planet for future generations
          </h2>
          <div className="flex items-center justify-center gap-8">
            <Link
              to="#commitments"
              className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-saffron underline underline-offset-4 hover:text-saffron/80 transition-colors"
            >
              Read Our Commitments
            </Link>
            <Link
              to="#partners"
              className="text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-saffron underline underline-offset-4 hover:text-saffron/80 transition-colors"
            >
              Our Certified Partners
            </Link>
          </div>
        </div>
      </section>

      {/* ── B Corp Certification Section ── */}
      <section className="bg-foreground text-background py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="font-serif text-6xl md:text-8xl tracking-[0.08em] uppercase font-semibold opacity-90">
            B
          </div>
          <p className="text-sm tracking-[0.15em] uppercase font-sans font-medium opacity-70">
            Certified B Corporation
          </p>
          <p className="text-sm font-normal leading-relaxed opacity-60 max-w-lg mx-auto">
            We meet the highest verified standards of social and environmental performance, transparency, and accountability — joining a global movement of over 7,000 companies redefining success in business.
          </p>
        </div>
      </section>

      {/* ── Full-bleed Nature Image ── */}
      <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-12 pt-10 md:pt-16 lg:pt-20">
        <img
          src={scarfFront}
          alt="Sustainable craftsmanship"
          className="w-full aspect-video object-cover scale-[1.02]"
        />
      </section>

      {/* ── Alternating Image-Text Blocks ── */}
      <section id="commitments" className="px-6 md:px-12 py-20 md:py-28 space-y-16 md:space-y-24">
        {/* Row 1: Image left, text right — Ethical Sourcing */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialFront}
              alt="Ethical sourcing"
              className="w-full aspect-[3/4] object-cover scale-[1.02]"
            />
          </div>
          <div className="flex-1 space-y-6 md:pl-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Responsibility
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Ethical Sourcing
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              We partner only with suppliers who share our commitment to ethical practices. Every gemstone and precious metal in our collection is sourced responsibly, with full transparency in our supply chain.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              Over 80% of our precious metals come from recycled sources, reducing the environmental impact of mining while maintaining the highest quality standards.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, image right — Circular Economy */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={founders}
              alt="Circular economy"
              className="w-full aspect-[3/4] object-cover scale-[1.02]"
            />
          </div>
          <div className="flex-1 space-y-6 md:pr-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Circularity
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Circular Economy
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              We believe in the power of circular design — creating jewelry that can be treasured, repaired, and eventually recycled into new pieces. Every piece comes with our lifetime care promise.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              When you're ready for something new, our take-back program ensures your LINEA jewelry is recycled into future creations — closing the loop on luxury.
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact Goals Section ── */}
      <section className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Our Impact
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="font-serif text-3xl md:text-5xl tracking-[0.05em] font-semibold">100%</div>
              <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground">
                Carbon neutral operations
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif text-3xl md:text-5xl tracking-[0.05em] font-semibold">90%</div>
              <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground">
                Recycled packaging
              </p>
            </div>
            <div className="space-y-3">
              <div className="font-serif text-3xl md:text-5xl tracking-[0.05em] font-semibold">Zero</div>
              <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase font-sans text-muted-foreground">
                Waste to landfill
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section id="partners" className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-2xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Certified Partners
          </h2>
          <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap">
            {["RJC", "B Corp", "SCS", "Fair Trade"].map((cert) => (
              <span key={cert} className="text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-muted-foreground">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Beauty With Purpose
          </h2>
          <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-lg mx-auto">
            Every LINEA piece carries our promise — that luxury and responsibility are not opposites, but partners in creating something truly meaningful.
          </p>
          <Link
            to="/category/voyage"
            className="inline-block mt-4 text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-saffron border-b border-saffron/40 pb-1 hover:border-saffron transition-colors"
          >
            Explore Our Collections
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
