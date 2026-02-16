import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import editorialCloseup from "@/assets/editorial-closeup.png";
import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialFront from "@/assets/editorial-front.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* ── Hero Section ── */}
      <section className="py-20 md:py-28 lg:py-36 px-6">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-[0.12em] uppercase font-semibold text-center">
          About Sifar
        </h1>
      </section>

      {/* ── Manifesto Section ── */}
      <section className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-20">
          {/* Left: 2×2 Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-[2px]">
            <div className="overflow-hidden">
              <img src={editorialCloseup} alt="Editorial closeup" className="w-full aspect-square object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialShoulder} alt="Editorial shoulder" className="w-full aspect-square object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialFace} alt="Editorial face" className="w-full aspect-square object-cover" />
            </div>
            <div className="overflow-hidden">
              <img src={editorialFront} alt="Editorial front" className="w-full aspect-square object-cover" />
            </div>
          </div>

          {/* Right: Manifesto Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase font-bold mb-4">
              The Manifesto
            </h2>
            <div className="w-10 h-px bg-foreground mb-8" />
            <div className="space-y-6">
              <p className="font-mono text-[10px] md:text-[11px] leading-[1.8] tracking-[0.08em] uppercase text-foreground/80">
                Sifar is born from the belief that true beauty resides in the essential — in the line before it becomes ornament, in the form before it becomes excess. We create for those who understand that restraint is the highest form of elegance.
              </p>
              <p className="font-mono text-[10px] md:text-[11px] leading-[1.8] tracking-[0.08em] uppercase text-foreground/80">
                Each piece is an architectural gesture — precise, intentional, and stripped of everything unnecessary. Our work draws from the language of structure: the tension of a suspended arc, the grace of a cantilevered plane, the quiet power of negative space.
              </p>
              <p className="font-mono text-[10px] md:text-[11px] leading-[1.8] tracking-[0.08em] uppercase text-foreground/80">
                We do not follow seasons. We do not chase trends. We build objects that exist outside of time — jewelry as sculpture, adornment as architecture. Sifar is the zero point: where everything begins and nothing is wasted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Disciplines Row ── */}
      <section className="border-t border-foreground/15">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { title: "Jewelry", location: "London, UK" },
            { title: "Architecture", location: "Milan, IT" },
            { title: "Sculpture", location: "Paris, FR" },
          ].map((discipline, i) => (
            <div
              key={discipline.title}
              className={`py-12 md:py-16 px-6 md:px-10 text-center ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-foreground/15" : ""
              }`}
            >
              <h3 className="font-mono text-xs md:text-sm tracking-[0.25em] uppercase font-bold mb-2">
                {discipline.title}
              </h3>
              <p className="font-mono text-[9px] md:text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                {discipline.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
