import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialCloseup from "@/assets/editorial-closeup.png";
import founders from "@/assets/founders.png";
import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfCloseup from "@/assets/scarf-closeup.png";
import scarfFront from "@/assets/scarf-front.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialSide from "@/assets/editorial-side.png";

const Heritage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={editorialCloseup}
          alt="Heritage editorial"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete">
            Discover
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.1em] uppercase font-semibold">
            Heritage
          </h1>
        </div>
      </section>

      {/* ── Video/Feature Image Section ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src={founders}
          alt="Our rich heritage"
          className="w-full aspect-video object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete">
            A Legacy of
          </span>
          <h2 className="font-serif text-3xl md:text-5xl tracking-[0.08em] uppercase font-semibold">
            Our Rich Heritage
          </h2>
          {/* Play button styling */}
          <div className="w-14 h-14 rounded-full border border-limestone/40 flex items-center justify-center mt-4 cursor-pointer hover:border-limestone/70 transition-colors">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-limestone/70 ml-1" />
          </div>
        </div>
      </section>

      {/* ── Centered Text Block ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-xl md:text-3xl leading-relaxed tracking-[0.05em] uppercase font-semibold">
            We are incredibly proud of our rich heritage spanning generations
          </h2>
          <Link
            to="/about/timeline"
            className="inline-block text-[10px] tracking-[0.25em] uppercase font-sans font-medium text-saffron underline underline-offset-4 hover:text-saffron/80 transition-colors"
          >
            See Our Timeline
          </Link>
        </div>
      </section>

      {/* ── Alternating Image-Text Blocks ── */}
      <section className="px-6 md:px-12 pb-20 space-y-16 md:space-y-24">
        {/* Row 1: Image left, text right — MADE BY HAND */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialShoulder}
              alt="Made by hand"
              className="w-full aspect-[3/4] object-cover scale-[1.02]"
            />
          </div>
          <div className="flex-1 space-y-6 md:pl-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Artisan Craft
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Made by Hand
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              Every LINEA piece is shaped by the hands of master artisans who have dedicated their lives to the craft. Using time-honoured techniques passed down through generations, each creation is a testament to the beauty of human touch — where precision meets soul.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              From the initial sketch to the final polish, over 40 hours of meticulous work ensure that no two pieces are ever truly alike.
            </p>
          </div>
        </div>

        {/* THEN — NOW divider */}
        <div className="flex items-center justify-center gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground">
            Then
          </span>
          <div className="w-16 h-px bg-muted-foreground" />
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground">
            Now
          </span>
        </div>

        {/* Row 2: Text left, 2×2 image grid right — DECADES OF MASTERY */}
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="overflow-hidden">
              <img src={editorialFront} alt="Heritage detail" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={scarfCloseup} alt="Heritage detail" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialFace} alt="Heritage detail" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialSide} alt="Heritage detail" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
          </div>
          <div className="flex-1 space-y-6 md:pr-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Our Evolution
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Decades of Mastery
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              What began as a small atelier in the heart of Europe has grown into a global symbol of refined craftsmanship. Through decades of evolution, LINEA has remained steadfast in its founding principles — that beauty lies in restraint, and luxury in the quality of each line drawn.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              Our archive spans hundreds of designs, each reflecting the aesthetic sensibility of its era while carrying the unmistakable thread of LINEA's identity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Section ── */}
      <section className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Timeless, Yet Contemporary
          </h2>
          <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-lg mx-auto">
            Our heritage informs every new collection — bridging the enduring elegance of the past with the boldness of modern design. Discover pieces that honour tradition while defining the future.
          </p>
          <Link
            to="/category/voyage"
            className="inline-block mt-4 text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-saffron border-b border-saffron/40 pb-1 hover:border-saffron transition-colors"
          >
            Discover Our Latest Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Heritage;
