import { X, Search, ChevronRight, HelpCircle, MapPin, Globe, User, ShoppingBag as ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBag: () => void;
  totalItems: number;
}

const navLinks = [
  { name: "Woman", href: "/category/woman" },
  { name: "Man", href: "/category/man" },
  { name: "Looks", href: "/looks" },
  { name: "Journal", href: "/journal" },
];

const MobileDrawer = ({ isOpen, onClose, onOpenBag, totalItems }: MobileDrawerProps) => {
  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Dark overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-500 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className={`fixed inset-0 z-[70] bg-limestone lg:hidden flex flex-col transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-foreground/10">
          <button
            onClick={onClose}
            className="p-2 text-foreground hover:opacity-70 transition-opacity"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>

          <Link to="/" onClick={onClose} className="absolute left-1/2 -translate-x-1/2">
            <span className="text-xl font-serif font-semibold tracking-[0.15em] uppercase text-foreground">
              SIFAR
            </span>
          </Link>

          <div className="flex items-center space-x-0">
            <Link
              to="/login"
              onClick={onClose}
              className="p-1.5 text-foreground hover:opacity-70 transition-opacity"
              aria-label="Account"
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <button
              className="p-1.5 text-foreground hover:opacity-70 transition-opacity relative"
              aria-label="Shopping bag"
              onClick={() => { onClose(); onOpenBag(); }}
            >
              <ShoppingBagIcon className="w-4 h-4" strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%] text-[0.4rem] font-semibold pointer-events-none">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search bar */}
          <div className="px-5 pt-5 pb-3">
            <div className="flex items-center border border-foreground/20 rounded-full px-4 py-2.5">
              <Search className="w-4 h-4 text-foreground/50 mr-3 flex-shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search for jewelry..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none"
              />
            </div>
          </div>

          {/* Primary nav links */}
          <nav className="px-5 pt-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-4 border-b border-foreground/10 text-foreground"
              >
                <span className="text-[15px] tracking-wide">{item.name}</span>
                <ChevronRight className="w-4 h-4 text-foreground/40" strokeWidth={1.5} />
              </Link>
            ))}
          </nav>

          {/* About section */}
          <div className="px-5 pt-4">
            <Link
              to="/about/our-story"
              onClick={onClose}
              className="flex items-center justify-between py-4 border-b border-foreground/10 text-foreground"
            >
              <span className="text-[15px] tracking-wide">About Sifar</span>
              <ChevronRight className="w-4 h-4 text-foreground/40" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Promotional image area */}
          <div className="px-5 pt-6 pb-4">
            <Link to="/category/woman" onClick={onClose} className="block relative overflow-hidden rounded-sm aspect-[16/9]">
              <img
                src="/rings-collection.png"
                alt="New Collection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-full">
                  New Collection
                </span>
              </div>
            </Link>
          </div>

          {/* Footer utility links */}
          <div className="px-5 pt-2 pb-8 space-y-0">
            <Link
              to="/about/customer-care"
              onClick={onClose}
              className="flex items-center gap-3 py-3.5 text-foreground/60"
            >
              <HelpCircle className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wide">Help Center</span>
            </Link>
            <Link
              to="/about/store-locator"
              onClick={onClose}
              className="flex items-center gap-3 py-3.5 text-foreground/60"
            >
              <MapPin className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wide">Find a Boutique</span>
            </Link>
            <div className="flex items-center gap-3 py-3.5 text-foreground/60">
              <Globe className="w-4 h-4" strokeWidth={1.5} />
              <span className="text-[13px] tracking-wide">GB / English</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
