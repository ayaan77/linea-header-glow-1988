import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialShoulder from "@/assets/editorial-shoulder.png";
import scarfPortrait from "@/assets/scarf-portrait.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialCloseup from "@/assets/editorial-closeup.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfFull from "@/assets/scarf-full.png";
import founders from "@/assets/founders.png";
import ringsCollection from "@/assets/rings-collection.png";
import scarfOrangePortrait from "@/assets/scarf-orange-portrait.png";
import earringsCollection from "@/assets/earrings-collection.png";

const gridTiles = [
  // Row 1
  { image: editorialShoulder, label: "discover our", title: "Craftsmanship", colSpan: "md:col-span-4", rowSpan: "md:row-span-2", aspect: "aspect-square md:aspect-auto md:h-full" },
  { image: scarfPortrait, label: "discover our", title: "Sustainability", colSpan: "md:col-span-8", rowSpan: "", aspect: "aspect-[16/9]", link: "/about/sustainability" },
  // Row 2 (right side fills under Sustainability)
  { image: editorialFace, label: "discover our", title: "Heritage", colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-square", link: "/about/heritage" },
  { image: editorialCloseup, label: "discover our", title: "People", colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-square", link: "/about/people" },
  // Row 3
  { image: editorialFront, label: "discover our", title: "Innovation", colSpan: "md:col-span-4", rowSpan: "", aspect: "aspect-square", link: "/about/innovation" },
  { image: scarfFull, label: "discover our", title: "Design", colSpan: "md:col-span-8", rowSpan: "", aspect: "aspect-[16/9]" },
];


const OurStory = () => {


  return (
    <div className="min-h-screen">
      <Header />

      {/* ── Hero Section ── */}
      <section className="bg-background text-foreground pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium font-sans block text-muted-foreground">
            Welcome to the
          </span>
          <h1 className="font-serif text-3xl md:text-5xl tracking-[0.08em] uppercase font-semibold">
            World of SIFAR
          </h1>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-sm font-normal leading-relaxed text-muted-foreground">
              Born from the intersection of architecture and fine arts, SIFAR is a meditation on line, light, and form. Every piece begins as a drawing — a single, deliberate stroke that captures the tension between structure and organic beauty.
            </p>
            <p className="text-sm font-normal leading-relaxed text-muted-foreground">
              Our founders believed that jewelry should carry the same quiet power as a perfectly proportioned space. Using sustainably sourced materials and time-honoured techniques, we craft pieces that exist at the boundary of sculpture and adornment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Editorial Bento Grid ── */}
      <section className="bg-background px-1 pb-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1 auto-rows-[280px] md:auto-rows-[320px]">
          {gridTiles.map((tile, i) => {
            const content = (
              <>
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.08] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 space-y-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-concrete block">
                    {tile.label}
                  </span>
                  <span className="font-serif text-lg md:text-xl text-limestone font-semibold">
                    {tile.title}
                  </span>
                </div>
              </>
            );
            const cls = `relative overflow-hidden ${tile.colSpan} ${tile.rowSpan} group cursor-pointer`;
            return tile.link ? (
              <Link key={i} to={tile.link} className={cls}>{content}</Link>
            ) : (
              <div key={i} className={cls}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* ── Full-Width Feature Image ── */}
      <section className="w-full overflow-hidden px-4 md:px-8 pt-4 md:pt-8">
        <img
          src={founders}
          alt="SIFAR editorial"
          className="w-full aspect-video object-cover scale-[1.02]"
        />
      </section>

      <Footer />
    </div>
  );
};

export default OurStory;
