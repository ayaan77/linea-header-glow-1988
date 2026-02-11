import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import editorialShoulder from "@/assets/editorial-shoulder.png";
import scarfFull from "@/assets/scarf-full.png";
import editorialCloseup from "@/assets/editorial-closeup.png";
import editorialFront from "@/assets/editorial-front.png";
import scarfPortrait from "@/assets/scarf-portrait.png";
import editorialFace from "@/assets/editorial-face.png";
import editorialSide from "@/assets/editorial-side.png";

const Innovation = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* ── 1. Dark Hero ── */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <img
          src={editorialShoulder}
          alt="Innovation hero"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block mb-4">
            Discover
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-semibold text-limestone">
            Innovation
          </h1>
        </div>
      </section>

      {/* ── 2. Cinematic Full-Width Image ── */}
      <section className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
        <img
          src={scarfFull}
          alt="Going beyond the conventional"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-10 md:bottom-16 left-0 right-0 text-center px-6">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-limestone uppercase tracking-[0.06em]">
            Going Beyond the Conventional
          </h2>
        </div>
      </section>

      {/* ── 3. Centered Statement ── */}
      <section className="bg-limestone py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-ink uppercase tracking-[0.06em] leading-snug">
            Pushing the Boundaries
            <br />
            of Quality and Elegance
          </h2>
        </div>
      </section>

      {/* ── 4. Image-Left, Text-Right ── */}
      <section className="bg-limestone px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialCloseup}
              alt="Our commitment to moving forward"
              className="w-full aspect-[3/4] object-cover scale-[1.03]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-6 lg:py-12">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
              Our approach
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink uppercase tracking-[0.04em]">
              Our Commitment to Moving Forward
            </h3>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80">
              At LINEA, innovation is not a destination but a continuous journey. We challenge established conventions in jewelry design, exploring new materials, techniques, and forms that push beyond the expected.
            </p>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80">
              Our artisans combine centuries-old craftsmanship with cutting-edge technology, creating pieces that honour tradition while embracing the future. Each collection represents a step forward in our quest for perfection.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Full-Width Landscape Divider ── */}
      <section className="relative w-full h-[40vh] md:h-[55vh] overflow-hidden">
        <img
          src={scarfPortrait}
          alt="Entering the third dimension"
          className="w-full h-full object-cover scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-semibold text-limestone uppercase tracking-[0.06em] leading-snug">
            Entering the
            <br />
            Third Dimension
          </h2>
        </div>
      </section>

      {/* ── 6. Text-Left, Image-Right ── */}
      <section className="bg-limestone px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-start">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialFront}
              alt="Seamless design"
              className="w-full aspect-[3/4] object-cover scale-[1.03]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-6 lg:py-12">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
              Our craft
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink uppercase tracking-[0.04em]">
              Seamless
            </h3>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80">
              The hallmark of true innovation lies in its invisibility. Our most advanced techniques produce pieces where the engineering disappears entirely, leaving only the pure expression of form.
            </p>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80">
              Every joint, every setting, every surface is refined until the boundaries between elements dissolve. The result is jewelry that feels as though it was born whole — seamless, inevitable, complete.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Full-Width Detail Image ── */}
      <section className="w-full overflow-hidden">
        <img
          src={editorialSide}
          alt="Detail craftsmanship"
          className="w-full aspect-[21/9] object-cover scale-[1.02]"
        />
      </section>

      {/* ── 8. Centered Statement ── */}
      <section className="bg-limestone py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-ink uppercase tracking-[0.06em]">
            Delicate Touch
          </h2>
        </div>
      </section>

      {/* ── 9. Final Section — Revolution + CTA ── */}
      <section className="bg-limestone px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1 overflow-hidden">
            <img
              src={editorialFace}
              alt="Revolution in design"
              className="w-full aspect-[3/4] object-cover scale-[1.03]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center space-y-6 lg:py-12">
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-concrete block">
              The future
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-ink uppercase tracking-[0.04em]">
              Revolution
            </h3>
            <p className="font-sans font-normal text-sm leading-relaxed text-ink/80">
              What begins as a single line on paper becomes a revolution in how we think about adornment. Our latest innovations redefine the relationship between body and object, creating pieces that move, breathe, and transform with their wearer.
            </p>
            <Link
              to="/category/voyage"
              className="inline-block text-saffron font-sans font-medium text-xs tracking-[0.2em] uppercase hover:opacity-80 transition-opacity mt-4"
            >
              Discover the Collection →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Innovation;
