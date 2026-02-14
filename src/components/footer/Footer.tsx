import { Link } from "react-router-dom";

const linkClass = "type-label text-foreground/70 hover:text-foreground transition-colors";
const headingClass = "type-label font-medium text-foreground mb-5";

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground pt-16 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
        {/* Column 1 - About */}
        <div className="space-y-3">
          <h4 className={headingClass}>About</h4>
          <ul className="space-y-2.5">
            <li><Link to="/about/our-story" className={linkClass}>Articles &amp; Exhibitions</Link></li>
            <li><Link to="/about/store-locator" className={linkClass}>Find a Shop</Link></li>
          </ul>
        </div>

        {/* Column 2 - Customer Service */}
        <div className="space-y-3">
          <h4 className={headingClass}>Customer Service</h4>
          <ul className="space-y-2.5">
            <li><Link to="/about/customer-care" className={linkClass}>Care &amp; Repair</Link></li>
            <li><a href="mailto:contact@sifar.com" className={linkClass}>Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Corporate */}
        <div className="space-y-3">
          <h4 className={headingClass}>Corporate</h4>
          <ul className="space-y-2.5">
            <li><Link to="/about/sustainability" className={linkClass}>Sustainability</Link></li>
            <li><Link to="/privacy-policy" className={linkClass}>Privacy &amp; Cookies</Link></li>
            <li><Link to="/terms-of-service" className={linkClass}>Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Column 4 - Mailing List */}
        <div className="space-y-4">
          <h4 className={headingClass}>Join Our Mailing List</h4>
          <p className="text-[9px] font-light uppercase tracking-[0.15em] text-concrete leading-relaxed">
            Be the first to know about new collections, exhibitions and seasonal sales.
          </p>
          <div className="flex items-center border-b border-foreground/30 pb-1 mt-2">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent text-[10px] tracking-[0.15em] uppercase font-light w-full outline-none placeholder:text-foreground/40"
            />
            <button className="text-[10px] tracking-[0.2em] uppercase font-light text-foreground/70 hover:text-foreground transition-colors shrink-0 ml-4">
              Join
            </button>
          </div>
          <div className="flex gap-4 pt-2">
            <a href="#" className={linkClass}>Instagram</a>
            <a href="#" className={linkClass}>Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
