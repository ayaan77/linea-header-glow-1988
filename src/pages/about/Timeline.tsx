import { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialCloseup from "@/assets/editorial-closeup.png";
import editorialShoulder from "@/assets/editorial-shoulder.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfFront from "@/assets/scarf-front.png";
import scarfOrangePortrait from "@/assets/scarf-orange-portrait.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialSide from "@/assets/editorial-side.png";

const timelineEntries = [
  {
    year: "1799",
    chapter: "Chapter 1",
    heading: "The Beginning",
    paragraphs: [
      "In the waning years of the eighteenth century, a small atelier was founded in the heart of Europe — driven by a singular vision: that jewellery should not merely adorn, but speak. Each piece was conceived as a line drawn with intention, a quiet declaration of identity.",
      "From those earliest days, the founders insisted on working only with materials of the highest calibre, shaping gold and stone by hand in techniques that would come to define the house for generations.",
    ],
    image: editorialShoulder,
  },
  {
    year: "1867",
    chapter: "Chapter 2",
    heading: "A New Era",
    paragraphs: [
      "By the mid-nineteenth century, LINEA had earned a reputation that extended far beyond its origins. The atelier expanded, welcoming a new generation of artisans who honoured tradition while embracing the possibilities of a changing world.",
      "It was during this period that the house introduced its signature aesthetic — clean, architectural lines softened by organic curves — a philosophy that remains at the core of every collection today.",
    ],
    image: editorialFront,
  },
  {
    year: "1923",
    chapter: "Chapter 3",
    heading: "The Modern Age",
    paragraphs: [
      "The early twentieth century brought both challenge and reinvention. LINEA responded with a bold reinterpretation of its founding principles, marrying the precision of Art Deco with the warmth of hand-crafted detail.",
      "New workshops were established, and the house began its first international exhibitions — introducing the LINEA name to collectors and connoisseurs across continents.",
    ],
    image: scarfFront,
  },
  {
    year: "1987",
    chapter: "Chapter 4",
    heading: "Global Recognition",
    paragraphs: [
      "As the century drew to a close, LINEA cemented its place among the world's most respected jewellery houses. A series of landmark collections — each more ambitious than the last — captured the imagination of a new, global audience.",
      "The house opened ateliers in Paris, London, and Tokyo, yet every piece continued to be finished by hand in the original European workshop — a commitment to craft that remains unbroken.",
    ],
    image: editorialFace,
  },
];

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const entry = timelineEntries[currentIndex];

  return (
    <div className="min-h-screen bg-ink text-limestone">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={editorialCloseup}
          alt="Timeline heritage"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete">
            {entry.chapter}
          </span>
          <h1 className="font-serif text-5xl md:text-7xl tracking-[0.1em] uppercase font-semibold">
            Our Timeline
          </h1>
        </div>
      </section>

      {/* ── Timeline Entry Section — Stable Grid ── */}
      <section className="bg-limestone text-ink">
        <div className="lg:grid lg:grid-cols-[45%_55%] lg:h-[80vh] overflow-hidden bg-limestone">
          {/* Left column — text content */}
          <div className="relative overflow-hidden px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20 flex flex-col justify-center lg:h-full lg:overflow-y-auto">
            {/* Year watermark */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[200px] md:text-[280px] lg:text-[240px] font-bold tracking-tight leading-none text-ink/[0.06] pointer-events-none select-none">
              {entry.year}
            </span>

            {/* Animated content */}
            <div key={currentIndex} className="relative z-10 animate-fade-in space-y-6">
              <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
                {entry.chapter}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.06em] uppercase">
                {entry.heading}
              </h3>
              {entry.paragraphs.map((p, i) => (
                <p key={i} className="font-sans font-normal text-sm leading-relaxed text-ink/80 max-w-md">
                  {p}
                </p>
              ))}
            </div>

            {/* Year tab bar */}
            <div className="relative z-10 mt-12 flex items-center gap-1 flex-shrink-0">
              {timelineEntries.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`px-4 py-3 font-sans text-[11px] tracking-[0.2em] uppercase transition-all border-b-2 ${
                    i === currentIndex
                      ? "border-ink text-ink font-medium"
                      : "border-transparent text-ink/40 hover:text-ink/70"
                  }`}
                >
                  {e.year}
                </button>
              ))}
            </div>
          </div>

          {/* Right column — image */}
          <div className="h-[400px] lg:h-full overflow-hidden bg-limestone">
            <img
              src={entry.image}
              alt={entry.heading}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Full-width Landscape Divider ── */}
      <section className="relative w-full overflow-hidden">
        <img
          src={scarfOrangePortrait}
          alt="Heritage landscape"
          className="w-full aspect-[21/9] object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* ── Alternating Image-Text Blocks ── */}
      <section className="bg-limestone text-ink px-6 md:px-12 lg:px-20 py-20 md:py-28 space-y-20 md:space-y-28">
        {/* Row 1: Image left, text right */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialSide}
              alt="Craftsmanship detail"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
              Craft
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.06em] uppercase">
              A Tradition of Excellence
            </h3>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80 max-w-md">
              Every generation of LINEA artisans has inherited not only the tools of the trade but a philosophy — that beauty is found in the discipline of the line, the patience of the hand, and the integrity of material chosen with care.
            </p>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80 max-w-md">
              This continuity of purpose is what distinguishes a LINEA piece from all others: it carries within it the accumulated knowledge of centuries.
            </p>
          </div>
        </div>

        {/* Row 2: Text left, image right */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialFront}
              alt="Modern collection"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
              Legacy
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.06em] uppercase">
              Looking Forward
            </h3>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80 max-w-md">
              Today, LINEA continues to evolve — drawing inspiration from contemporary art, architecture, and the natural world while remaining anchored in the traditions that gave the house its voice.
            </p>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80 max-w-md">
              Each new collection is a conversation between past and future, a bridge built from the enduring values of craftsmanship, restraint, and the belief that true luxury speaks softly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Timeline;
