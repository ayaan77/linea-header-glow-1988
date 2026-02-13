import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialCloseup from "@/assets/editorial-closeup.png";
import founders from "@/assets/founders.png";
import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialSide from "@/assets/editorial-side.png";
import scarfFront from "@/assets/scarf-front.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfOrangePortrait from "@/assets/scarf-orange-portrait.png";

const People = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={editorialCloseup}
          alt="Our People"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete">
            Discover
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.1em] uppercase font-semibold">
            Our People
          </h1>
        </div>
      </section>

      {/* ── Intro Text Block ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-xl md:text-3xl leading-relaxed tracking-[0.05em] uppercase font-semibold">
            Behind every piece is a person — a story of dedication, artistry, and shared purpose
          </h2>
          <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            At LINEA, our strength lies in the hands and hearts of the people who bring each design to life. From our master artisans to our creative directors, every individual contributes a unique thread to the tapestry of our craft.
          </p>
        </div>
      </section>

      {/* ── Full-Width Feature Image ── */}
      <section className="relative w-full overflow-hidden px-4 md:px-8 lg:px-12">
        <img
          src={founders}
          alt="The LINEA family"
          className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover scale-[1.02]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-background/60 flex items-center justify-center bg-background/10 backdrop-blur-sm cursor-pointer hover:bg-background/20 transition-colors">
            <Play className="w-6 h-6 md:w-7 md:h-7 text-background fill-background/80 ml-1" />
          </div>
        </div>
      </section>

      {/* ── Family Values: Image left, Text right ── */}
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialShoulder}
              alt="Family values"
              className="w-full aspect-[3/4] object-cover scale-[1.02]"
            />
          </div>
          <div className="flex-1 space-y-6 md:pl-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Our Culture
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Family Values
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              LINEA was founded on the belief that great work is born from genuine connection. Our atelier operates as an extended family — where knowledge is passed generously between generations, and every voice is valued in the creative process.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              We nurture an environment where tradition and innovation coexist, where a young apprentice's fresh perspective is as treasured as a master craftsman's decades of wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stories from Our Artisans ── */}
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-10 md:mb-16">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
            Their Stories
          </span>
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Stories from Our Artisans
          </h2>
          <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Each artisan brings a lifetime of skill and passion. Their hands shape not just metal and stone, but the very identity of LINEA.
          </p>
        </div>
        <img
          src={scarfFront}
          alt="Artisan stories"
          className="w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] object-cover scale-[1.02]"
        />
      </section>

      {/* ── Community Section: Text left, Images right ── */}
      <section className="px-4 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          <div className="flex-1 grid grid-cols-2 gap-1">
            <div className="overflow-hidden">
              <img src={editorialFace} alt="Community" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialSide} alt="Community" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialFront} alt="Community" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
            <div className="overflow-hidden">
              <img src={scarfOrangePortrait} alt="Community" className="w-full aspect-square object-cover scale-[1.02]" />
            </div>
          </div>
          <div className="flex-1 space-y-6 md:pr-8">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-muted-foreground block">
              Beyond the Atelier
            </span>
            <h3 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
              Our Communities
            </h3>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              We believe luxury carries responsibility. LINEA partners with local communities to support education in traditional craftsmanship, ensuring these vital skills endure for generations to come.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-md">
              From sourcing materials ethically to investing in the regions where our artisans live and work, our commitment extends far beyond the workshop walls.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits / Ethos Section ── */}
      <section className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            What Defines Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            {[
              { title: "Artisan Heritage", desc: "Generations of craft knowledge, honoured and evolved." },
              { title: "Creative Freedom", desc: "Space to experiment, innovate, and push boundaries." },
              { title: "Sustainable Practice", desc: "Ethical sourcing and responsible production at every step." },
              { title: "Collective Spirit", desc: "A culture of mentorship, respect, and shared ambition." },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-[11px] tracking-[0.2em] uppercase font-sans font-medium text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm font-normal leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 px-6 border-t border-foreground/10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-4xl tracking-[0.08em] uppercase font-semibold">
            Crafted with Purpose
          </h2>
          <p className="text-sm font-normal leading-relaxed text-muted-foreground max-w-lg mx-auto">
            Every LINEA piece carries the spirit of the people who made it. Discover collections shaped by passion, precision, and a deep respect for the art of making.
          </p>
          <Link
            to="/category/voyage"
            className="inline-block mt-4 text-[11px] tracking-[0.25em] uppercase font-sans font-medium text-saffron border-b border-saffron/40 pb-1 hover:border-saffron transition-colors"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default People;
